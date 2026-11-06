import {ExternalLink,MapPin,Quote,Star} from 'lucide-react';
import './TrustReviews.css';

const reviews=[
  {name:'Lokesh Mohan',text:'Praised the overall experience, driver and budget-friendly pricing.'},
  {name:'Muni Chandra',text:'Highlighted the good service, communication and driver experience.'},
  {name:'Gnanamma',text:'Appreciated the pricing and described the travel experience positively.'}
];

const mapsUrl='https://www.google.com/maps/search/?api=1&query=Tirupati%20Balaji%20Tours%20Travels%20Taxi%20in%20Tirupati';

export default function TrustReviews(){return <section className="trust-section section"><div className="trust-wrap"><div className="trust-copy"><p className="eyebrow">TRUSTED BY TRAVELLERS</p><h2>Real journeys.<br/><span>Real experiences.</span></h2><p>See what travellers are saying about Taxi in Tirupati. Read the latest feedback on our Google Maps listing before you plan your next journey.</p><div className="trust-score"><div className="score-stars">{[1,2,3,4,5].map(i=><Star key={i} size={18} fill="currentColor"/>)}</div><strong>4.8</strong><span>Google customer rating</span></div><div className="trust-actions"><a className="button" href={mapsUrl} target="_blank" rel="noreferrer">View on Google Maps <ExternalLink size={15}/></a><a className="button secondary" href={mapsUrl} target="_blank" rel="noreferrer">Read more reviews <MapPin size={15}/></a></div></div><div className="review-grid">{reviews.map(review=><article className="review-card" key={review.name}><Quote className="quote-mark" size={24}/><div className="review-stars">{[1,2,3,4,5].map(i=><Star key={i} size={13} fill="currentColor"/>)}</div><p>{review.text}</p><footer><span className="review-avatar">{review.name.charAt(0)}</span><div><strong>{review.name}</strong><small>Google review</small></div></footer></article>)}</div></div></section>}
