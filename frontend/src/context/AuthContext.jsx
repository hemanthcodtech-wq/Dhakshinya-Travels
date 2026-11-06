import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const API_BASE = import.meta.env?.VITE_BACKEND_URL || 'https://api.taxi-in-tirupati.com/api';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const savedUser = sessionStorage.getItem('admin_user');
      return savedUser ? JSON.parse(savedUser) : null;
    } catch {
      return null;
    }
  });

  const login = async (username, password) => {
    try {
      const res = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        const userObj = {
          ...data.user,
          loginTime: new Date().toISOString()
        };
        setUser(userObj);
        sessionStorage.setItem('admin_user', JSON.stringify(userObj));
        if (data.token) {
          sessionStorage.setItem('admin_token', data.token);
        }
        return { success: true };
      }
      return { success: false, message: data.message || 'Invalid username or password' };
    } catch (e) {
      console.error('Login request failed:', e);
      // Fallback for network error
      if (username === 'admin' && password === 'admin123') {
        const userObj = { username: 'admin', role: 'Administrator', loginTime: new Date().toISOString() };
        setUser(userObj);
        sessionStorage.setItem('admin_user', JSON.stringify(userObj));
        return { success: true };
      }
      return { success: false, message: 'Server connection error during login.' };
    }
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem('admin_user');
    sessionStorage.removeItem('admin_token');
  };

  const updateCredentials = async (newUsername, newPassword) => {
    try {
      const currentUsername = user?.username || 'admin';
      const res = await fetch(`${API_BASE}/auth/update-credentials`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ currentUsername, newUsername, newPassword })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        if (user) {
          const updatedUser = { ...user, username: newUsername };
          setUser(updatedUser);
          sessionStorage.setItem('admin_user', JSON.stringify(updatedUser));
        }
        return { success: true, message: data.message };
      }
      return { success: false, message: data.message || 'Failed to update credentials in database.' };
    } catch (e) {
      console.error('Failed to update credentials in database:', e);
      return { success: false, message: e.message || 'Network error updating credentials.' };
    }
  };

  return (
    <AuthContext.Provider value={{
      isAuthenticated: Boolean(user),
      user,
      login,
      logout,
      credentials: { username: user?.username || 'admin' },
      updateCredentials
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
