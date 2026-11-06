//#region src/data/fleetData.js
var fleetImages = {
	etios: "https://res.cloudinary.com/znbhjevm/image/upload/v1790145949/tirupatibalaji/fleet/etios.png",
	etiosAlt: "https://res.cloudinary.com/znbhjevm/image/upload/v1790145956/tirupatibalaji/fleet/etios-alt.png",
	ertiga: "https://res.cloudinary.com/znbhjevm/image/upload/v1790145962/tirupatibalaji/fleet/ertiga.png",
	crysta: "https://res.cloudinary.com/znbhjevm/image/upload/v1790145970/tirupatibalaji/fleet/innova-crysta.png",
	crystaAlt: "https://res.cloudinary.com/znbhjevm/image/upload/v1790145983/tirupatibalaji/fleet/crysta-alt.png",
	hycross: "https://res.cloudinary.com/dwmjz9csc/image/upload/v1790433054/ee040d23-3f76-4aba-aa1a-0ea6cee4ce2a.png",
	fortuner: "https://res.cloudinary.com/dwmjz9csc/image/upload/v1790433147/fcf15e93-d12b-4bf4-a54f-d8dd4f425802.png",
	tempo12: "https://res.cloudinary.com/znbhjevm/image/upload/v1790145990/tirupatibalaji/fleet/tempo-12.png",
	urbania12: "https://res.cloudinary.com/dwmjz9csc/image/upload/v1790433309/c1596832-8c82-4746-bb2f-92d4ab2ad812.png",
	tempo16: "https://res.cloudinary.com/znbhjevm/image/upload/v1790145996/tirupatibalaji/fleet/tempo-16.png",
	tempo20: "https://res.cloudinary.com/znbhjevm/image/upload/v1790146003/tirupatibalaji/fleet/tempo-20.png",
	urbania16: "https://res.cloudinary.com/znbhjevm/image/upload/v1790146009/tirupatibalaji/fleet/urbania-16.png",
	bus27: "https://res.cloudinary.com/znbhjevm/image/upload/v1790146017/tirupatibalaji/fleet/bus-27.png",
	bus40: "https://res.cloudinary.com/dwmjz9csc/image/upload/v1790433812/8e4ec778-70b3-4210-bb11-1076e16f4d9d.png",
	bus45: "https://res.cloudinary.com/znbhjevm/image/upload/v1790142111/tirupatibalaji/fleet/bus-45.jpg",
	carRental2: "https://res.cloudinary.com/znbhjevm/image/upload/v1790146024/tirupatibalaji/fleet/car-rental-2.png",
	carRental3: "https://res.cloudinary.com/znbhjevm/image/upload/v1790146030/tirupatibalaji/fleet/car-rental-3.png",
	tempoGeneric: "https://res.cloudinary.com/znbhjevm/image/upload/v1790146039/tirupatibalaji/fleet/tempo-generic.png",
	vehicleGeneric: "https://res.cloudinary.com/znbhjevm/image/upload/v1790146044/tirupatibalaji/fleet/vehicle-generic.png"
};
var fleet = [
	{
		id: "sedan",
		name: "Sedan (4 Seater)",
		category: "SEDAN",
		seats: "4+1",
		bags: "2",
		image: fleetImages.etios,
		local: "₹2,880 / 8 hrs",
		localLong: "₹3,650 / 12 hrs",
		localKmShort: "80 km",
		localKmLong: "150 km",
		extraHr: "₹200/hr",
		outstation: "₹15/km",
		minimum: "300 km/day",
		fuel: "10 km/l",
		features: [
			"AC",
			"Music",
			"USB"
		],
		use: "Economical local and outstation travel for small groups.",
		slug: "car-rentals-in-tirupati"
	},
	{
		id: "ertiga",
		name: "Ertiga (6 Seater)",
		category: "MUV",
		seats: "6+1",
		bags: "3",
		image: fleetImages.ertiga,
		local: "₹3,380 / 8 hrs",
		localLong: "₹4,150 / 12 hrs",
		localKmShort: "80 km",
		localKmLong: "150 km",
		extraHr: "₹300/hr",
		outstation: "₹19/km",
		minimum: "300 km/day",
		fuel: "10 km/l",
		features: [
			"AC",
			"Music",
			"USB"
		],
		use: "Comfortable family travel, temple visits and group trips.",
		slug: "car-rentals-in-tirupati"
	},
	{
		id: "innova-crysta",
		name: "Innova Crysta (7 Seater)",
		category: "PREMIUM SUV",
		seats: "7+1",
		bags: "4",
		image: fleetImages.crysta,
		local: "₹4,380 / 8 hrs",
		localLong: "₹5,150 / 12 hrs",
		localKmShort: "80 km",
		localKmLong: "150 km",
		extraHr: "₹400/hr",
		outstation: "₹23/km",
		minimum: "300 km/day",
		fuel: "10 km/l",
		features: [
			"AC",
			"Music",
			"USB"
		],
		use: "Premium family, corporate and long-distance travel.",
		slug: "car-rentals-in-tirupati"
	},
	{
		id: "hycross",
		name: "Hycross (7 Seater)",
		category: "PREMIUM SUV",
		seats: "7+1",
		bags: "4",
		image: fleetImages.hycross,
		local: "₹6,100 / 8 hrs",
		localLong: "₹7,100 / 12 hrs",
		localKmShort: "80 km",
		localKmLong: "150 km",
		extraHr: "₹600/hr",
		outstation: "₹32/km",
		minimum: "300 km/day",
		fuel: "10 km/l",
		features: [
			"AC",
			"Music",
			"USB"
		],
		use: "Premium comfort for family, corporate and outstation journeys.",
		slug: "car-rentals-in-tirupati"
	},
	{
		id: "fortuner",
		name: "Fortuner (7 Seater)",
		category: "PREMIUM SUV",
		seats: "7+1",
		bags: "4",
		image: fleetImages.fortuner,
		local: "₹8,800 / 8 hrs",
		localLong: "₹10,500 / 12 hrs",
		localKmShort: "80 km",
		localKmLong: "150 km",
		extraHr: "₹800/hr",
		outstation: "₹43/km",
		minimum: "300 km/day",
		fuel: "10 km/l",
		features: [
			"AC",
			"Music",
			"USB"
		],
		use: "Executive premium SUV travel for special and long-distance trips.",
		slug: "car-rentals-in-tirupati"
	},
	{
		id: "tempo-12",
		name: "Tempo Traveller 12 Seater",
		category: "TEMPO TRAVELLER",
		seats: "12",
		bags: "8",
		image: fleetImages.tempo12,
		local: "₹5,100 / 8 hrs",
		localLong: "₹6,000 / 12 hrs",
		localKmShort: "80 km",
		localKmLong: "150 km",
		extraHr: "₹1,000/hr",
		outstation: "₹26/km",
		minimum: "300 km/day",
		fuel: "7 km/l",
		features: [
			"AC",
			"TV",
			"USB",
			"Push-back"
		],
		use: "Small group pilgrimages, local sightseeing and airport transfers.",
		slug: "tempo-traveller-rental-in-tirupati"
	},
	{
		id: "urbania-12",
		name: "Urbania 12 Seater",
		category: "PREMIUM URBANIA",
		seats: "12",
		bags: "8",
		image: fleetImages.urbania12,
		local: "₹10,000 / 8 hrs",
		localLong: "₹12,000 / 12 hrs",
		localKmShort: "80 km",
		localKmLong: "150 km",
		extraHr: "₹1,200/hr",
		outstation: "₹45/km",
		minimum: "300 km/day",
		fuel: "6 km/l",
		features: [
			"AC",
			"USB",
			"Push-back",
			"Entertainment"
		],
		use: "Premium group travel with a modern cabin and enhanced comfort.",
		slug: "urbania-traveller-rental-in-tirupati"
	},
	{
		id: "tempo-16",
		name: "Tempo Traveller 16 Seater",
		category: "TEMPO TRAVELLER",
		seats: "16",
		bags: "10",
		image: fleetImages.tempo16,
		local: "₹6,800 / 8 hrs",
		localLong: "₹7,800 / 12 hrs",
		localKmShort: "80 km",
		localKmLong: "150 km",
		extraHr: "₹1,400/hr",
		outstation: "₹35/km",
		minimum: "300 km/day",
		fuel: "6 km/l",
		features: [
			"AC",
			"TV",
			"USB",
			"Push-back"
		],
		use: "Larger family groups, pilgrimages and South India tours.",
		slug: "tempo-traveller-rental-in-tirupati"
	},
	{
		id: "urbania-16",
		name: "Urbania 16 Seater",
		category: "PREMIUM URBANIA",
		seats: "16",
		bags: "10",
		image: fleetImages.urbania16,
		local: "₹12,000 / 8 hrs",
		localLong: "₹15,000 / 12 hrs",
		localKmShort: "80 km",
		localKmLong: "150 km",
		extraHr: "₹1,600/hr",
		outstation: "₹48/km",
		minimum: "300 km/day",
		fuel: "5 km/l",
		features: [
			"AC",
			"USB",
			"Push-back",
			"Entertainment"
		],
		use: "Premium larger-group journeys, corporate travel and long-distance trips.",
		slug: "urbania-traveller-rental-in-tirupati"
	},
	{
		id: "tempo-20",
		name: "Tempo Traveller 20 Seater",
		category: "TEMPO TRAVELLER",
		seats: "20",
		bags: "12",
		image: fleetImages.tempo20,
		local: "₹9,000 / 8 hrs",
		localLong: "₹10,500 / 12 hrs",
		localKmShort: "80 km",
		localKmLong: "150 km",
		extraHr: "₹1,800/hr",
		outstation: "₹45/km",
		minimum: "300 km/day",
		fuel: "4 km/l",
		features: [
			"AC",
			"TV",
			"USB",
			"Push-back"
		],
		use: "Large group travel, events and extended pilgrimage tours.",
		slug: "tempo-traveller-rental-in-tirupati"
	},
	{
		id: "bus-27",
		name: "Mini Bus 27 Seater",
		category: "MINI BUS",
		seats: "27",
		bags: "15",
		image: fleetImages.bus27,
		local: "₹12,000 / 8 hrs",
		localLong: "₹13,500 / 12 hrs",
		localKmShort: "80 km",
		localKmLong: "150 km",
		extraHr: "₹2,000/hr",
		outstation: "₹55/km",
		minimum: "300 km/day",
		fuel: "5 km/l",
		features: [
			"AC",
			"TV",
			"Music",
			"USB"
		],
		use: "Group pilgrimages, events, family outings and organized tours.",
		slug: "bus-rental-in-tirupati"
	},
	{
		id: "bus-40",
		name: "Bus 40 Seater",
		category: "BUS",
		seats: "40",
		bags: "20",
		image: fleetImages.bus40,
		local: "₹15,200 / 8 hrs",
		localLong: "₹17,500 / 12 hrs",
		localKmShort: "80 km",
		localKmLong: "150 km",
		extraHr: "₹3,000/hr",
		outstation: "₹65/km",
		minimum: "300 km/day",
		fuel: "4 km/l",
		features: [
			"AC",
			"TV",
			"Music",
			"USB"
		],
		use: "Large pilgrimages, institutions, corporate groups and events.",
		slug: "bus-rental-in-tirupati"
	},
	{
		id: "bus-45",
		name: "Bus 45 Seater",
		category: "BUS",
		seats: "45",
		bags: "22",
		image: fleetImages.bus45,
		local: "₹18,000 / 8 hrs",
		localLong: "₹20,500 / 12 hrs",
		localKmShort: "80 km",
		localKmLong: "150 km",
		extraHr: "₹4,000/hr",
		outstation: "₹75/km",
		minimum: "300 km/day",
		fuel: "3 km/l",
		features: [
			"AC",
			"TV",
			"Music",
			"USB"
		],
		use: "Maximum-capacity group tours, events and large pilgrimages.",
		slug: "bus-rental-in-tirupati"
	}
];
var images = {
	hero: "https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786735401/33e36867-e1e5-4785-bbf1-8255a659662e.png",
	temple: "https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733399/8d17421f-0c51-490c-9fd1-34615a6a9dbd.png",
	taxi: "https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733408/39dd8a6a-1c70-433d-abb2-7a5491fddf57.png",
	place: "https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733245/2294ffc1-24a6-4284-bd31-20ada6598736.png",
	srikalahasti: "https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733326/f61277ef-a079-406d-ba99-422c467dcc3d.png",
	kanipakam: "https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733245/2294ffc1-24a6-4284-bd31-20ada6598736.png",
	goldentemple: "https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733338/113c0590-3a8d-4dfd-9ea4-c225fab55199.png",
	arunachalam: "https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733151/78ba506e-406e-419e-9bd0-7310625bdb82.png",
	srisailam: "https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733358/3544fc65-3444-4a2e-80bc-320384a75b9b.png",
	kanchipuram: "https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733245/2294ffc1-24a6-4284-bd31-20ada6598736.png",
	pondicherry: "https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786735401/33e36867-e1e5-4785-bbf1-8255a659662e.png",
	tirumala: "https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733399/8d17421f-0c51-490c-9fd1-34615a6a9dbd.png",
	tirupati: "https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733408/39dd8a6a-1c70-433d-abb2-7a5491fddf57.png",
	tiruchanur: "https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733391/c167177a-f7b2-4705-b622-c6d9cf88070f.png",
	etios: "https://res.cloudinary.com/znbhjevm/image/upload/v1790145949/tirupatibalaji/fleet/etios.png",
	etiosAlt: "https://res.cloudinary.com/znbhjevm/image/upload/v1790145956/tirupatibalaji/fleet/etios-alt.png",
	ertiga: "https://res.cloudinary.com/znbhjevm/image/upload/v1790145962/tirupatibalaji/fleet/ertiga.png",
	crysta: "https://res.cloudinary.com/znbhjevm/image/upload/v1790145970/tirupatibalaji/fleet/innova-crysta.png",
	crystaAlt: "https://res.cloudinary.com/znbhjevm/image/upload/v1790145983/tirupatibalaji/fleet/crysta-alt.png",
	tempo12: "https://res.cloudinary.com/znbhjevm/image/upload/v1790145990/tirupatibalaji/fleet/tempo-12.png",
	tempo17: "https://res.cloudinary.com/znbhjevm/image/upload/v1790145996/tirupatibalaji/fleet/tempo-16.png",
	tempo20: "https://res.cloudinary.com/znbhjevm/image/upload/v1790146003/tirupatibalaji/fleet/tempo-20.png",
	urbania16: "https://res.cloudinary.com/znbhjevm/image/upload/v1790146009/tirupatibalaji/fleet/urbania-16.png",
	urbania12: "https://res.cloudinary.com/dwmjz9csc/image/upload/v1790433309/c1596832-8c82-4746-bb2f-92d4ab2ad812.png",
	bus27: "https://res.cloudinary.com/znbhjevm/image/upload/v1790146017/tirupatibalaji/fleet/bus-27.png",
	bus40: "https://res.cloudinary.com/dwmjz9csc/image/upload/v1790433812/8e4ec778-70b3-4210-bb11-1076e16f4d9d.png",
	bus45: "https://res.cloudinary.com/znbhjevm/image/upload/v1790142111/tirupatibalaji/fleet/bus-45.jpg",
	hycross: "https://res.cloudinary.com/dwmjz9csc/image/upload/v1790433054/ee040d23-3f76-4aba-aa1a-0ea6cee4ce2a.png",
	fortuner: "https://res.cloudinary.com/dwmjz9csc/image/upload/v1790433147/fcf15e93-d12b-4bf4-a54f-d8dd4f425802.png",
	carRental2: "https://res.cloudinary.com/znbhjevm/image/upload/v1790146024/tirupatibalaji/fleet/car-rental-2.png",
	carRental3: "https://res.cloudinary.com/znbhjevm/image/upload/v1790146030/tirupatibalaji/fleet/car-rental-3.png",
	tempoGeneric: "https://res.cloudinary.com/znbhjevm/image/upload/v1790146039/tirupatibalaji/fleet/tempo-generic.png",
	vehicleGeneric: "https://res.cloudinary.com/znbhjevm/image/upload/v1790146044/tirupatibalaji/fleet/vehicle-generic.png"
};
images.etios, images.ertiga, images.crysta, images.hycross, images.fortuner, images.tempo12, images.urbania12, images.tempo17, images.urbania16, images.tempo20, images.bus27, images.bus40, images.bus45;
var destinations = [
	[
		"tirumala",
		"Tirumala",
		"Sri Venkateswara Temple and the seven sacred hills.",
		images.tirumala,
		"₹2,499"
	],
	[
		"tirupati",
		"Tirupati",
		"A complete local temple and sightseeing experience.",
		images.tirupati,
		"₹2,999"
	],
	[
		"tiruchanur",
		"Tiruchanur",
		"Visit the sacred Padmavathi Ammavari Temple.",
		images.tiruchanur,
		"₹2,299"
	],
	[
		"srikalahasti",
		"Srikalahasti",
		"A revered Shiva temple and traditional pilgrimage route.",
		images.srikalahasti,
		"₹2,999"
	],
	[
		"kanipakam",
		"Kanipakam",
		"Sri Varasiddhi Vinayaka Temple near Tirupati.",
		images.kanipakam,
		"₹3,499"
	],
	[
		"golden-temple",
		"Golden Temple",
		"Vellore Golden Temple spiritual day tour.",
		images.goldentemple,
		"₹5,999"
	],
	[
		"arunachalam",
		"Arunachalam",
		"Sacred Annamalaiyar Temple pilgrimage.",
		images.arunachalam,
		"₹7,499"
	],
	[
		"srisailam",
		"Srisailam",
		"A memorable hill temple journey.",
		images.srisailam,
		"₹10,999"
	]
];
[
	[
		"mysore",
		"Mysore",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733509/f11ed58f-ecd1-4f0a-9bae-a9a4f12f9003.png"
	],
	[
		"palakkad",
		"Palakkad",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733501/8be483a8-5767-4774-bf16-bbf8547dfb73.png"
	],
	[
		"kochi",
		"Kochi",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733495/4982b20a-6439-460b-8543-b7f4701db6ea.png"
	],
	[
		"coimbatore",
		"Coimbatore",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733486/77df45e7-3253-405e-a0d3-6438765060ad.png"
	],
	[
		"viyanagaram",
		"Viyanagaram",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733480/7c8ee721-ee4c-4c61-abbb-1cbea0245625.png"
	],
	[
		"pune",
		"Pune",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733473/848dbd80-4e3d-4758-83df-37b47760b587.png"
	],
	[
		"gujarat",
		"Gujarat",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733468/5994d514-59ee-4667-ad5e-1b0c025e416e.png"
	],
	[
		"maharastra",
		"Maharastra",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733462/36c2bc34-0ba0-455a-8f19-acab2ff9250d.png"
	],
	[
		"delhi",
		"Delhi",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733455/634bd484-005a-4159-a18f-252b480f3149.png"
	],
	[
		"kakinada",
		"Kakinada",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733450/1bf3c6f5-bf16-4e66-8f7e-8db9e4d796ef.png"
	],
	[
		"vizag",
		"Vizag",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733443/010ec3bb-1834-4253-a8b5-fb1ee37b9b.png"
	],
	[
		"chennai",
		"Chennai",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733437/f0ef17ce-caab-45dc-aac2-5d1cfb917d95.png"
	],
	[
		"hyderabad",
		"Hyderabad",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733429/95f8f3fb-496a-4711-be13-224ad0fd3f60.png"
	],
	[
		"bangalore",
		"Bangalore",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733424/8cc38c53-23f6-4fae-9bd5-0879b2212923.png"
	],
	[
		"trichy",
		"Trichy",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733416/626867d8-7a51-4a31-ae66-7f1f7bf897c0.png"
	],
	[
		"thiruvananthapuram",
		"Thiruvananthapuram",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733385/1aa62ccd-7449-4ea9-879b-36d9e861d4ca.png"
	],
	[
		"thirunallar",
		"Thirunallar",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733373/a6c6e657-7d6a-4356-9fce-8185eca8f6b7.png"
	],
	[
		"thanjavur",
		"Thanjavur",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733363/90590760-eba9-462a-a7c8-3e8b50743708.png"
	],
	[
		"srirangam",
		"Srirangam",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733347/9f22f2e8-eff4-430a-b67b-021bdbdd056e.png"
	],
	[
		"rameswaram",
		"Rameswaram",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733314/324b7f65-5b9a-490e-adb5-c81416fb0d05.png"
	],
	[
		"pondicherry",
		"Pondicherry",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733307/ce934d82-a670-474a-91d9-2d7089abb2c3.png"
	],
	[
		"mahabalipuram",
		"Mahabalipuram",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733297/51d2c19a-22c0-41ce-b299-9ca4ba7cc078.png"
	],
	[
		"madurai",
		"Madurai",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733283/4db94717-d968-4688-8e3e-6d48b31613e0.png"
	],
	[
		"kumbakonam",
		"Kumbakonam",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733275/ac617c4f-5131-43c5-ac0d-b18f70b5ed5e.png"
	],
	[
		"kerala",
		"Kerala",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733267/a60cbb24-e65b-42b0-a95e-35ffcb4ffd4c.png"
	],
	[
		"kanyakumari",
		"Kanyakumari",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733253/e0e2138b-a218-4dfa-92bb-2c51919c4c8d.png"
	],
	[
		"kanchipuram",
		"Kanchipuram",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733229/896a9850-f84d-4db9-83cd-5133fe373dfc.png"
	],
	[
		"dhanushkoti",
		"Dhanushkoti",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733194/1c7b8df2-3fd0-446a-8de2-1de505a992b3.png"
	]
].forEach(([slug, name, image], index) => destinations.push([
	slug,
	name,
	`A curated travel and temple experience in ${name}.`,
	image,
	`₹${(4999 + index * 500).toLocaleString("en-IN")}`
]));
var tours = [
	[
		"Tirupati 1 Day Taxi Package",
		"1 Day",
		"Tirupati → Padmavathi → Tirumala → Varahaswamy → Balaji Darshan → Kapila Theertham → Tirupati",
		"₹3,500",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290873/tirupati-1-day-taxi.png"
	],
	[
		"1 Day Arunachalam Package",
		"1 Day",
		"Tirupati → Kanipakam → Golden Temple → Arunachalam → Tirupati",
		"₹7,000",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290831/arunachalam-1-day.webp"
	],
	[
		"Tirupati to Golden Temple Vellore Tour",
		"1 Day",
		"Tirupati → Srinivasa Mangapuram → Kanipakam → Golden Temple → Tirupati",
		"₹5,000",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290888/vellore-golden-temple.jpg"
	],
	[
		"Tirupati to Kanipakam Temple Tour",
		"1 Day",
		"Tirupati → Vakula Devi → Srinivasa Mangapuram → Kanipakam → Tirupati",
		"₹3,580",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290895/kanipakam-tour.jpg"
	],
	[
		"Tirupati 5 Local Temples Tour Package",
		"1 Day",
		"Tirupati → Kapila Theertham → ISKCON → Govindaraja Swamy → Padmavathi → Srikalahasti → Tirupati",
		"₹3,800",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290903/tirupati-5-local-temples.png"
	],
	[
		"Tirupati to Kanchipuram Taxi Service",
		"1 Day",
		"Tirupati → Tiruttani → Kanchipuram → Varadaraja Perumal Temple → Kamakshi Amman Temple → Kailasanathar Temple → Tirupati",
		"₹5,000",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290910/kanchipuram-taxi.png"
	],
	[
		"Tirupati 2 Days Taxi Package",
		"2 Days",
		"Tirupati → Tirumala → Balaji Darshan → Kapila Theertham → ISKCON → Govindaraja → Padmavathi → Srikalahasti → Tirupati",
		"₹7,500",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290881/tirupati-2-days-taxi.png"
	],
	[
		"2 Days Arunachalam Package",
		"2 Days",
		"Tirupati → Tiruttani → Kanchipuram → Arunachalam → Vellore → Kanipakam → Tirupati",
		"₹9,500",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290980/arunachalam-2-days.png"
	],
	[
		"Tirupati to Mahabalipuram Taxi Service",
		"2 Days",
		"Tirupati → Kanchipuram → Kailasanathar Temple → Vaikunta Perumal Temple → Mahabalipuram Beach → Pancha Rathas → Arjuna’s Penance → Shore Temple → Tirupati",
		"₹10,000",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290918/mahabalipuram-taxi.png"
	],
	[
		"Tirupati to Golden Temple Arunachalam Kanchipuram Taxi Service",
		"2 Days",
		"Tirupati → Kanipakam → Vellore → Arunachalam → Kanchipuram → Tiruttani → Tirupati",
		"₹9,500",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290933/arunachalam-golden-temple-kanchipuram.jpg"
	],
	[
		"2 Days Tirupati to Madurai Tour Package",
		"2 Days",
		"Tirupati → Madurai → Meenakshi Amman Temple → Madurai Sightseeing → Tirupati",
		"₹18,000",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290940/tirupati-madurai-2-days.png"
	],
	[
		"Pondicherry Tour Package",
		"2 Days",
		"Tirupati → Pondicherry → Promenade Beach → Rock Beach → French Colony → Paradise Beach → Auroville → Pondicherry Sightseeing → Tirupati",
		"₹10,000",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290948/pondicherry-tour.png"
	],
	[
		"2 Days Tirupati to Srisailam Taxi Package",
		"2 Days",
		"Tirupati → Srisailam → Mallikarjuna Swamy Temple → Bhramaramba Devi Temple → Srisailam Dam → Akkamahadevi Caves → Paladhara Panchadhara → Tirupati",
		"₹13,000",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290954/tirupati-srisailam-2-days.jpg"
	],
	[
		"Pancha Linga Tour from Tirupati",
		"3 Days",
		"Tirupati → Srikalahasti → Kanchipuram → Chidambaram → Srirangam → Arunachalam → Vellore → Kanipakam → Tirupati",
		"₹19,500",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290858/pancha-linga-tour.png"
	],
	[
		"3 Days Tirupati to Madurai Taxi Tour Package",
		"3 Days",
		"Tirupati → Arunachalam → Srirangam → Madurai → Tirupati",
		"₹23,000",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290962/tirupati-madurai-3-days.png"
	],
	[
		"3 Days Tirupati Pondicherry via Kanchipuram Tour Package",
		"3 Days",
		"Tirupati → Tiruttani → Kanchipuram → Pondicherry → Auroville → Tirupati",
		"₹15,500",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789291129/tirupati-pondicherry-3-days.webp"
	],
	[
		"3 Days Tirupati Kanchipuram Temple Tour Package",
		"3 Days",
		"Tirupati → Tirumala → Tiruttani → Kanchipuram → Tirupati → Srikalahasti → Tirupati",
		"₹13,500",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789291137/tirupati-kanchipuram-3-days.jpg"
	],
	[
		"3 Days Tirupati Srisailam Srikalahasti Taxi Package",
		"3 Days",
		"Tirupati → Srikalahasti → Srisailam → Tirupati",
		"₹15,500",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789291143/tirupati-srisailam-srikalahasti-3-days.jpg"
	],
	[
		"3 Days Tirupati Golden Temple Taxi Package",
		"3 Days",
		"Tirupati → Tirumala → Srinivasa Mangapuram → Kanipakam → Vellore → Tirupati → Srikalahasti → Tirupati",
		"₹13,000",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789291152/tirupati-golden-temple-3-days.png"
	],
	[
		"4 Days Tirupati Temple Tour Package – South India Pilgrimage Tour",
		"4 Days",
		"Tirupati → Tirumala → Kanipakam → Vellore → Arunachalam → Kanchipuram → Tiruttani → Srikalahasti → Tirupati",
		"₹16,500",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290864/tirupati-4-days-temple-tour.jpg"
	],
	[
		"4 Days Tirupati to Madurai Meenakshi Temple Tour Package",
		"4 Days",
		"Tirupati → Arunachalam → Srirangam → Madurai → Rameswaram → Tirupati",
		"₹29,000",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290970/meenakshi-temple-4-days.png"
	],
	[
		"Divine 5 Day South India Temple Tour Package",
		"5 Days",
		"Tirupati → Tirumala → Srinivasa Mangapuram → Kanipakam → Golden Temple (Vellore) → Arunachalam → Srirangam → Kanchipuram → Tiruttani → Tirupati → Srikalahasti → Tirupati",
		"₹26,500",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290925/south-india-temple-tour.png"
	],
	[
		"Best 5 Day Tirupati Arunachalam Mahabalipuram Tour Package",
		"5 Days",
		"Tirupati → Tirumala → Kanipakam → Vellore → Arunachalam → Mahabalipuram → Kanchipuram → Tiruttani → Tirupati → Srikalahasti → Tirupati",
		"₹22,000",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789291158/tirupati-arunachalam-mahabalipuram-5-days.jpg"
	],
	[
		"7 Days Divine Tamil Nadu Temple Tour from Tirupati",
		"7 Days",
		"Tirupati → Vellore → Arunachalam → Srirangam → Madurai → Trivandrum → Kanyakumari → Rameswaram → Kumbakonam → Chidambaram → Kanchipuram → Tirupati",
		"₹51,000",
		"https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789291165/tamil-nadu-temple-tour-7-days.png"
	]
];
//#endregion
//#region src/data/blogData.js
var blogPosts = [
	{
		id: "tirupati-to-coimbatore-distance",
		slug: "tirupati-to-coimbatore-distance",
		category: "Taxi in Tirupati",
		title: "Tirupati to Coimbatore Distance: Complete Travel Guide (Road, Train, Bus & Flight)",
		shortTitle: "Tirupati to Coimbatore Distance",
		snippet: "If you’re planning to travel between the temple town of Tirupati and the industrial hub of Coimbatore, the first question on your mind is probably the simplest one: how far is it, really? You’ll find different numbers floating around online — 495 km here, 503 km there — and that’s mostly down to which route you take.",
		readTime: "7 MIN READ",
		date: "August 14, 2026",
		author: "Dhakshinya Tours & Travels",
		views: "14,250+",
		featured: true,
		image: "https://res.cloudinary.com/znbhjevm/image/upload/v1790210382/tirupatibalaji/blog/Tirupati-to-Coimbatore-Distance-860x510_u1tzcv.webp",
		tags: [
			"Coimbatore",
			"Tirupati Cabs",
			"Road Trip",
			"Distance Guide",
			"Taxi in Tirupati"
		],
		quickFacts: {
			"Total Road Distance": "495 km to 503 km (via NH44 Highway)",
			"Estimated Driving Time": "9.5 to 10 Hours (with food breaks)",
			"Recommended Driving Route": "Tirupati → Chittoor → Hosur → Salem → Erode → Coimbatore",
			"Best Vehicle Options": "AC Sedan (1-4 Pax) | Innova Crysta (5-7 Pax) | 12-17 Seater Tempo",
			"Tolls & Permit Status": "100% All-Inclusive (AP & TN Permit Taxes Included)"
		},
		highlights: [
			"Total Road Distance: 495 km to 503 km depending on NH44 vs NH48 route",
			"Average Driving Duration: 9 to 10 hours in a comfortable AC Outstation Taxi",
			"Recommended Route: Tirupati -> Chittoor -> Hosur -> Salem -> Coimbatore (NH44)",
			"Door-to-door pickup & drop available with transparent all-inclusive cab fares",
			"Ideal for business travelers, families, and pilgrimage roundtrips"
		],
		fullContent: {
			intro: "If you’re planning to travel between the temple town of Tirupati and the industrial hub of Coimbatore, the first question on your mind is probably the simplest one: how far is it, really? You’ll find different numbers floating around online — 495 km here, 503 km there — and that’s mostly down to which route you select.",
			sections: [
				{
					heading: "1. Road Distance & Best Highways from Tirupati to Coimbatore",
					text: "The fastest driving route connects Tirupati to Coimbatore via Chittoor, Hosur bypass, and the NH44 highway through Salem and Erode. Covering approx. 495 km of smooth multi-lane highways, a private taxi completes the journey in roughly 9.5 hours with comfortable lunch stops."
				},
				{
					heading: "2. Travel Options Compared: Taxi vs Bus vs Train vs Flight",
					text: "While trains like the Gurudev Express operate on specific days, availability can be tight. Flight routes require layovers in Chennai or Bangalore. Booking a direct outstation AC taxi offers total timing flexibility, zero baggage restrictions, and doorstep pickup from your hotel or residence."
				},
				{
					heading: "3. Pitstops, Refreshments & Toll Plazas",
					text: "Major refreshment plazas are available near Kolar, Hosur, and Salem along the highway. Our experienced drivers know the best family-friendly restaurants and clean highway stops to ensure a relaxing road journey."
				},
				{
					heading: "4. Recommended Vehicle Selection & Fares",
					text: "For 1 to 4 passengers, a comfortable AC Swift Dzire or Toyota Etios is ideal. For families with luggage (5-7 passengers), Toyota Innova Crysta provides unmatched suspension and legroom. Large tour groups can opt for 12 to 17 seater AC Tempo Travellers."
				}
			]
		},
		faqs: [
			{
				q: "What is the best road route from Tirupati to Coimbatore?",
				a: "The recommended route is via Chittoor, Hosur bypass, and the NH44 4-lane highway passing through Salem and Erode (approx. 495 km, 9.5 hours)."
			},
			{
				q: "How much does a private taxi from Tirupati to Coimbatore cost?",
				a: "Fares start at budget-friendly rates for an AC Sedan and transparent all-inclusive quotes for Toyota Innova Crysta. All charges include driver batta, state permit taxes, and toll fees."
			},
			{
				q: "Are there good family restaurants along the NH44 highway?",
				a: "Yes! Major highway food plazas like A2B (Adyar Ananda Bhavan), Saravana Bhavan, and McDonald’s are located at Hosur, Dharmapuri, and Salem."
			}
		]
	},
	{
		id: "corporate-cab-services-in-tirupati",
		slug: "corporate-cab-services-in-tirupati",
		category: "Corporate Cabs",
		title: "Corporate Cab Services in Tirupati: The Complete Guide for Businesses in 2026",
		shortTitle: "Corporate Cab Services in Tirupati",
		snippet: "Tirupati isn’t just India’s temple town anymore. Between Sri City’s SEZ, a growing electronics and manufacturing belt, IIT Tirupati, and a steady stream of corporate delegations flying into Renigunta, business travel here has quietly become a daily reality — not an occasional event.",
		readTime: "6 MIN READ",
		date: "August 10, 2026",
		author: "Dhakshinya Tours & Travels",
		views: "12,100+",
		featured: false,
		image: "https://res.cloudinary.com/znbhjevm/image/upload/v1790210391/tirupatibalaji/blog/Corporate-Cab-Services-860x510.webp",
		tags: [
			"Corporate Cabs",
			"Sri City SEZ",
			"Renigunta Airport",
			"IIT Tirupati",
			"Business Travel"
		],
		quickFacts: {
			"Key Industrial Hubs": "Sri City SEZ (Tada), EMC Electronics Park, IIT Tirupati (Yerpedu)",
			"Airport Connectivity": "24/7 Flight Transfers at Renigunta Tirupati Airport (TIR)",
			"Billing & Accounting": "Monthly Corporate Credit Accounts with GST Tax Invoices",
			"Chauffeur Standards": "Punctual, Uniformed, GPS-Tracked Executive Drivers",
			"Executive Fleet": "Dzire/Etios, Toyota Innova Crysta, & Force Urbania Luxury Vans"
		},
		highlights: [
			"Serving Sri City SEZ, EMC Clusters, and IIT Tirupati corporate corridors",
			"24/7 airport pickup & drop at Renigunta Tirupati Airport (TIR)",
			"Executive fleet: Sedan, Innova Crysta, and Force Urbania luxury vans",
			"Transparent corporate billing with monthly accounts & GST tax invoices",
			"Punctual, uniformed chauffeurs with local route expertise"
		],
		fullContent: {
			intro: "Tirupati isn’t just India’s temple town anymore. Between Sri City’s SEZ, a growing electronics and manufacturing belt, IIT Tirupati, and a steady stream of corporate delegations flying into Renigunta, business travel here has quietly become a daily reality — not an occasional event.",
			sections: [
				{
					heading: "1. Why Businesses Require Dedicated Corporate Cab Logistics",
					text: "Managing executive delegations, foreign client visits, and daily employee commuting requires reliable, clockwork mobility. Tirupati Balaji Tours & Travels offers specialized business mobility packages tailored for corporate enterprises."
				},
				{
					heading: "2. Key Industrial & Academic Corridors Covered",
					text: "We provide seamless transfers between Renigunta Airport (TIR), Sri City SEZ (Tada), IIT Tirupati campus at Yerpedu, and major 5-star hotels in Tirupati city."
				},
				{
					heading: "3. Premium Executive Fleet Standards",
					text: "Our commercial yellow-plate fleet features immaculate executive sedans, Toyota Innova Crysta MUVs, and Force Urbania luxury vans equipped with GPS tracking, Wi-Fi chargers, and sanitized interiors."
				},
				{
					heading: "4. Streamlined Corporate Accounts & GST Invoicing",
					text: "Simplify your company accounts with centralized monthly billing, itemized trip logs, digital receipts, and dedicated account management."
				}
			]
		},
		faqs: [
			{
				q: "How do corporate accounts work with Tirupati Balaji Tours?",
				a: "We set up customized monthly credit terms for registered businesses, providing itemized trip log sheets, GST-compliant tax invoices, and dedicated corporate account support."
			},
			{
				q: "Can you handle executive airport pickup at Renigunta Airport (TIR)?",
				a: "Yes! We offer 24/7 airport transfers with real-time flight tracking, flight delay monitoring, and professional driver meet-and-greet services."
			},
			{
				q: "Are your corporate vehicles sanitized and equipped with chargers?",
				a: "Every vehicle undergoes strict interior sanitation before pickup and comes equipped with mobile phone chargers, bottled water, and GPS tracking."
			}
		]
	},
	{
		id: "mysore-to-tirupati-taxi-tour-packages",
		slug: "mysore-to-tirupati-taxi-tour-packages",
		category: "Outstation Tours",
		title: "Mysore to Tirupati Taxi & Tour Packages: Complete Travel Guide (2026)",
		shortTitle: "Mysore to Tirupati Taxi Guide",
		snippet: "If you’re planning a trip from Mysore to Tirupati for Lord Venkateswara’s darshan, you’re about to cover one of South India’s most scenic pilgrimage routes. The road stretches through green hills, quiet highway towns, and open countryside before arriving at the temple town of Tirumala.",
		readTime: "8 MIN READ",
		date: "July 22, 2026",
		author: "Dhakshinya Tours & Travels",
		views: "15,800+",
		featured: false,
		image: "https://res.cloudinary.com/znbhjevm/image/upload/v1790210399/tirupatibalaji/blog/mysore-to-tirupati-860x510.webp",
		tags: [
			"Mysore",
			"Tirupati Cabs",
			"Travel Guide",
			"Outstation Tour",
			"Pilgrimage"
		],
		quickFacts: {
			"Total Distance": "420 km from Mysore to Tirupati",
			"Average Drive Time": "7.5 to 8.5 Hours via Bangalore NICE Road bypass",
			"Optimal Itinerary": "2-Day or 3-Day Relaxed Family Pilgrimage Tour",
			"Key Sightseeing": "Mysore Palace, Tirumala Balaji Temple, Tiruchanur Padmavathi Temple",
			"All-Inclusive Package": "Covers Driver Batta, Toll Plazas, & AP/KA Permit Taxes"
		},
		highlights: [
			"Distance: 420 km from Mysore to Tirupati via Bangalore outer bypass",
			"Travel Duration: Approx. 7.5 to 8.5 hours in an AC cab",
			"Coverage: Mysore Palace pickup, Bangalore bypass, Tirupati city, and Tirumala",
			"2-Day & 3-Day custom tour packages available for families and elder devotees",
			"Assistance with TTD ₹300 Special Entry Darshan & room booking guidance"
		],
		fullContent: {
			intro: "If you’re planning a trip from Mysore to Tirupati for Lord Venkateswara’s darshan, you’re about to cover one of South India’s most scenic pilgrimage routes. The road stretches through green hills, quiet highway towns, and open countryside before arriving at the temple town of Tirumala.",
			sections: [
				{
					heading: "1. Mysore to Tirupati Highway Route Details",
					text: "The most popular route connects Mysore -> Mandya -> Ramanagara -> Bangalore NICE Road bypass -> Hoskote -> Kolar -> Chittoor -> Tirupati. It avoids heavy city traffic and offers smooth driving conditions."
				},
				{
					heading: "2. Designing a 2-Day Mysore to Tirupati Itinerary",
					text: "Day 1: Early morning departure from Mysore, scenic highway drive, afternoon arrival in Tirupati, visit Tiruchanur Padmavathi Temple. Day 2: Early morning Tirumala Balaji Darshan, local sightseeing, and evening return journey to Mysore."
				},
				{
					heading: "3. Cab Options & All-Inclusive Fares",
					text: "Choose between AC Dzire/Etios sedans, 6-seater Ertiga, 7-seater Innova Crysta, or 12/17-seater Tempo Travellers. All quotes include driver bata, state permit fees, tolls, and parking charges."
				}
			]
		},
		faqs: [
			{
				q: "Can we stop in Bangalore on the way from Mysore to Tirupati?",
				a: "Yes! We bypass city traffic using the NICE Road expressway, but can schedule meal breaks or short family stops as requested."
			},
			{
				q: "Do you assist with TTD ₹300 Special Entry Darshan tokens?",
				a: "We guide devotees step-by-step on booking TTD tickets online and align our pickup times to match your darshan token slot."
			},
			{
				q: "Which vehicle is recommended for seniors on an 8-hour drive?",
				a: "Toyota Innova Crysta is the top choice for long-distance comfort, offering premium captain seats and superior rear shock absorption."
			}
		]
	},
	{
		id: "tirupati-to-mahabalipuram-car-rental",
		slug: "tirupati-to-mahabalipuram-car-rental",
		category: "Travel Packages",
		title: "Two Days Tirupati to Mahabalipuram Car Rental and Visiting Time",
		shortTitle: "Tirupati to Mahabalipuram Car Rental",
		snippet: "Planning a short getaway that mixes temple darshan with a beach break? A Tirupati to Mahabalipuram road trip does exactly that. In two days, you can cover the rock-cut temples of Kanchipuram, watch the waves roll onto Mahabalipuram’s shore, and explore one of Tamil Nadu’s most photographed UNESCO World Heritage Sites.",
		readTime: "6 MIN READ",
		date: "July 10, 2026",
		author: "Dhakshinya Tours & Travels",
		views: "9,400+",
		featured: false,
		image: "https://res.cloudinary.com/znbhjevm/image/upload/v1790210407/tirupatibalaji/blog/Mahabalipuram-860x510.webp",
		tags: [
			"Mahabalipuram",
			"Kanchipuram",
			"UNESCO Site",
			"Beach Trip",
			"Car Rental"
		],
		quickFacts: {
			"Road Distance": "190 km from Tirupati to Mahabalipuram",
			"Driving Time": "Approx. 4.5 Hours via Kanchipuram corridor",
			"Monuments Hours": "6:00 AM to 6:00 PM (Shore Temple, Pancha Rathas)",
			"Recommended Duration": "2 Days / 1 Night Beach & Heritage Package",
			"En-Route Stop": "Kanchipuram Silk Handloom Societies & Temples"
		},
		highlights: [
			"Distance: 190 km from Tirupati to Mahabalipuram (approx 4.5 hours drive)",
			"En-route halt at Kanchipuram famous Kamakshi Amman temple & silk saree shopping",
			"Highlights: Shore Temple, Pancha Rathas, Arjuna’s Penance, & Mahabalipuram Beach",
			"Complete 2-Day flexible car rental package with driver",
			"Ideal weekend family trip combining spiritual pilgrimage & coastal leisure"
		],
		fullContent: {
			intro: "Planning a short getaway that mixes temple darshan with a beach break? A Tirupati to Mahabalipuram road trip does exactly that. In two days, you can cover the rock-cut temples of Kanchipuram, watch the waves roll onto Mahabalipuram’s shore, and explore one of Tamil Nadu’s most photographed UNESCO World Heritage Sites — all without the hassle of public transport schedules.",
			sections: [
				{
					heading: "1. Detailed 2-Day Travel Itinerary",
					text: "Day 1: Depart Tirupati at 6:30 AM, reach Kanchipuram (90 km), visit Varadaraja Perumal & Kamakshi temples. Continue drive to Mahabalipuram (85 km), check in to beach resort, explore Shore Temple at sunset. Day 2: Visit Pancha Rathas, Krishna’s Butterball, enjoy beach activities, and drive back to Tirupati."
				},
				{
					heading: "2. Visiting Hours & Monument Ticket Info",
					text: "UNESCO monuments are open from 6:00 AM to 6:00 PM. Digital entry tickets can be purchased at the venue or online via ASI portal. Early morning hours offer the best light for photography."
				},
				{
					heading: "3. Car Rental Packages & Driver Charges",
					text: "Our 2-day rental packages provide unlimited kilometer flexibility within the tour itinerary. AC Sedans start at budget-friendly rates, with MUVs available for group comfort."
				}
			]
		},
		faqs: [
			{
				q: "Can we stop in Kanchipuram for silk saree shopping en-route?",
				a: "Yes! Kanchipuram is directly on the driving route. Our driver will guide you to authentic weavers’ cooperative societies and famous temples."
			},
			{
				q: "What are the opening hours for UNESCO monuments in Mahabalipuram?",
				a: "Monuments like the Shore Temple and Pancha Rathas are open daily from 6:00 AM to 6:00 PM."
			},
			{
				q: "Are driver overnight charges included in the 2-day package?",
				a: "Yes, driver night batta, toll charges, and vehicle parking fees are fully included in our 2-day rental quote."
			}
		]
	},
	{
		id: "best-travel-agency-in-tirupati",
		slug: "best-travel-agency-in-tirupati",
		category: "Travel Agency",
		title: "Best Travel Agency in Tirupati for Tirupati Travel Package: Tirupati Balaji Tours & Travels",
		shortTitle: "Best Travel Agency in Tirupati",
		snippet: "Planning a pilgrimage to Tirupati should be a peaceful experience, not a stressful one. With so many travel operators offering different itineraries, vehicle options, and darshan services, choosing the right Tirupati travel package can be confusing. That’s where Tirupati Balaji Tours & Travels makes the difference.",
		readTime: "7 MIN READ",
		date: "June 30, 2026",
		author: "Dhakshinya Tours & Travels",
		views: "22,400+",
		featured: false,
		image: "https://res.cloudinary.com/znbhjevm/image/upload/v1790210415/tirupatibalaji/blog/Tirupati-Travel-Package-860x510.webp",
		tags: [
			"Best Travel Agency",
			"Tirupati Travel Package",
			"Balaji Tours",
			"Taxi Operator"
		],
		quickFacts: {
			"Industry Experience": "15+ Years Serving Pilgrims in Tirupati",
			"Satisfied Pilgrims": "50,000+ Happy Devotees & 4.9/5 Rating",
			"Services Offered": "Balaji Darshan Cabs, Outstation Tours, Airport Drops",
			"Fleet Standard": "100% Commercial Yellow-Plate Insured Cabs",
			"Customer Support": "24/7 Dedicated Phone & WhatsApp Desk (+91 8688624758)"
		},
		highlights: [
			"15+ Years of trusted pilgrimage travel service in Tirupati & Tirumala",
			"Over 50,000 satisfied devotees served with 4.9/5 star ratings",
			"Complete tour packages: Airport transfer, Tirumala cab, & local temple sightseeing",
			"Clean commercial yellow-plate fleet with experienced mountain drivers",
			"100% Transparent pricing with zero hidden charges or surcharges"
		],
		fullContent: {
			intro: "Planning a pilgrimage to Tirupati should be a peaceful experience, not a stressful one. With so many travel operators offering different itineraries, vehicle options, and darshan services, choosing the right Tirupati travel package can be confusing. That’s where Tirupati Balaji Tours & Travels makes the difference.",
			sections: [
				{
					heading: "1. What Makes Tirupati Balaji Tours & Travels Stand Out",
					text: "We are a fully licensed, locally rooted travel agency based in Tirupati. Unlike online aggregators, we own our fleet of vehicles and employ trained local drivers who understand temple customs, ghat road permits, and local timings inside out."
				},
				{
					heading: "2. Comprehensive Pilgrimage & Tour Packages",
					text: "From 1-Day Tirupati Balaji Darshan packages to multi-day South India temple tours (covering Srikalahasti, Kanipakam, Vellore Golden Temple, Thiruttani, and Pondicherry), we offer customized itineraries for every budget."
				},
				{
					heading: "3. Fleet Maintenance & Passenger Safety",
					text: "All vehicles are regularly serviced, thoroughly sanitized before every trip, and equipped with first-aid kits, AC climate control, and comfortable seating."
				},
				{
					heading: "4. Easy Booking & 24/7 Customer Support",
					text: "Book instantly over phone (+91 8688624758) or WhatsApp with zero hassle and instant driver allocation."
				}
			]
		},
		faqs: [
			{
				q: "Why should I choose Tirupati Balaji Tours over generic cab aggregators?",
				a: "We are local Tirupati travel specialists with 15+ years experience. We own our fleet, guarantee zero cancellations, and employ drivers certified for Tirumala mountain ghat roads."
			},
			{
				q: "What family tour packages do you provide?",
				a: "We offer 1-Day Balaji Darshan, 2-Day Temple Circuit Tours, and custom packages to Kanipakam, Srikalahasti, and Vellore Golden Temple."
			},
			{
				q: "How far in advance should I book my Tirupati tour cab?",
				a: "We recommend booking 3 to 7 days in advance to secure your preferred vehicle model, especially during peak weekends and festival seasons."
			}
		]
	},
	{
		id: "bangalore-to-tirupati-car-rental-package",
		slug: "bangalore-to-tirupati-car-rental-package",
		category: "Pilgrimage Drive",
		title: "Bangalore to Tirupati Car Rental Package: Your Complete Guide to a Comfortable Pilgrimage Drive",
		shortTitle: "Bangalore to Tirupati Car Rental",
		snippet: "If you’ve typed “Bangalore to Tirupati car rental package” into Google more than once this week, you’re probably somewhere between excitement and overthinking. Should you go by bus? Train? Self-drive? Or just book a cab and let someone else handle the traffic, the tolls, and the 4 AM wake-up call?",
		readTime: "8 MIN READ",
		date: "June 26, 2026",
		author: "Dhakshinya Tours & Travels",
		views: "19,300+",
		featured: false,
		image: "https://res.cloudinary.com/znbhjevm/image/upload/v1790210425/tirupatibalaji/blog/Bangalore-to-Tirupati-860x510.png",
		tags: [
			"Bangalore to Tirupati",
			"Car Rental Package",
			"Pilgrimage Drive",
			"Outstation Cab"
		],
		quickFacts: {
			"Highway Distance": "250 km from Bangalore city center to Tirupati",
			"Driving Time": "4.5 Hours via NH75 & NH140 4-Lane Expressways",
			"Breakfast Halt": "Mulbagal (Famous for Authentic Crispy Dosa & Tiffins)",
			"Permit Taxes": "Andhra Pradesh Commercial State Permit Included",
			"Popular Option": "1-Day Same Day Roundtrip or 2-Day Overnight Package"
		},
		highlights: [
			"Distance: 250 km from Bangalore to Tirupati via NH75 & NH140 highway",
			"Driving Time: 4.5 to 5 hours with doorstep pickup anywhere in Bangalore",
			"State Border Permit: Andhra Pradesh entry permit handled seamlessly by driver",
			"Vehicle Choices: Sedan, Ertiga, Innova Crysta, & 12/17 Seater Tempo Travellers",
			"Flexible 1-Day Same Day Roundtrip or 2-Day Relaxed Pilgrimage Package"
		],
		fullContent: {
			intro: "If you’ve typed “Bangalore to Tirupati car rental package” into Google more than once this week, you’re probably somewhere between excitement and overthinking. Should you go by bus? Train? Self-drive? Or just book a cab and let someone else handle the traffic, the tolls, and the 4 AM wake-up call? We get this question every day.",
			sections: [
				{
					heading: "1. Best Driving Route from Bangalore to Tirupati",
					text: "The standard route goes through Hoskote -> Kolar -> Mulbagal -> Palamaner -> Chittoor bypass -> Tirupati (NH75 & NH140). The road is a smooth 4-lane highway with excellent breakfast spots near Mulbagal (famous for authentic South Indian tiffins)."
				},
				{
					heading: "2. 1-Day Same-Day Return vs 2-Day Stay Package",
					text: "If you hold early morning ₹300 TTD Special Entry Darshan tokens, a 1-day package departing Bangalore at 4:00 AM gets you back by 10:00 PM. For families with children or elderly pilgrims, a 2-day package allows overnight stay in Tirupati and relaxed sightseeing."
				},
				{
					heading: "3. Transparent Fare Structure",
					text: "Our quotes include fuel, AP state permits, toll plaza charges, and driver bata. No hidden fees or unexpected extras upon arrival."
				}
			]
		},
		faqs: [
			{
				q: "How long does it take to drive from Bangalore to Tirupati by cab?",
				a: "It takes approximately 4.5 hours via the smooth 4-lane NH75 highway via Kolar and Mulbagal."
			},
			{
				q: "Does your cab fare include Andhra Pradesh state border tax?",
				a: "Yes! All Bangalore to Tirupati cab quotes provided by us include AP commercial state permit tax, highway tolls, and driver bata."
			},
			{
				q: "What time should we depart Bangalore for a 9:00 AM darshan slot?",
				a: "We recommend starting from Bangalore by 3:30 AM or 4:00 AM to comfortably reach Tirupati by 8:00 AM, refresh, and proceed up the hills."
			}
		]
	},
	{
		id: "thiruttani-murugan-temple-guide",
		slug: "thiruttani-murugan-temple-guide",
		category: "Temple Circuits",
		title: "Thiruttani Murugan Temple: Complete Pilgrim’s Guide (History, Timings, Travel & More)",
		shortTitle: "Thiruttani Murugan Temple Guide",
		snippet: "For millions of devotees across South India, a pilgrimage isn’t complete without standing before the divine form of Lord Murugan at Thiruttani. Perched 700 feet above sea level on the ancient Thanigai Hill in Tamil Nadu’s Tiruvallur district, the Arulmigu Subramanya Swami Temple is one of the Arupadai Veedu.",
		readTime: "7 MIN READ",
		date: "June 9, 2026",
		author: "Dhakshinya Tours & Travels",
		views: "11,700+",
		featured: false,
		image: "https://res.cloudinary.com/znbhjevm/image/upload/v1790210434/tirupatibalaji/blog/Thiruttani-860x510.png",
		tags: [
			"Thiruttani",
			"Lord Murugan",
			"Arupadai Veedu",
			"Temple Guide",
			"Tirupati Day Trip"
		],
		quickFacts: {
			"Distance from Tirupati": "65 km (Approx. 1.5 Hours Drive)",
			"Shrine Classification": "Fifth Abode among Lord Murugan’s 6 Arupadai Veedu",
			"Hill Access": "365 Steps or Motorable Hill Road Direct to Gate",
			"Darshan Timings": "6:00 AM to 9:00 PM Daily",
			"Combinable With": "Tiruchanur Padmavathi Temple & Nagari"
		},
		highlights: [
			"Distance: 65 km from Tirupati city (approx. 1.5 hours drive)",
			"Sacred Shrine: Fifth abode among Lord Murugan’s six Arupadai Veedu temples",
			"Access: 365 steps representing days of the year, plus a motorable hill road for vehicles",
			"Temple Timings: 6:00 AM to 9:00 PM daily",
			"Easy single-day roundtrip cab package combined with Tiruchanur Padmavathi Temple"
		],
		fullContent: {
			intro: "For millions of devotees across South India, a pilgrimage isn’t complete without standing before the divine form of Lord Murugan at Thiruttani. Perched 700 feet above sea level on the ancient Thanigai Hill in Tamil Nadu’s Tiruvallur district, the Arulmigu Subramanya Swami Temple — widely known as the Thiruttani Murugan Temple — is one of the five sacred abodes of Lord Subramanya.",
			sections: [
				{
					heading: "1. Sacred History & Spiritual Significance",
					text: "Thanigai Hill is where Lord Murugan retreated for peace and solace after defeating the demon Surapadman in Tiruchendur. It is also the sacred site of His marriage with Goddess Valli."
				},
				{
					heading: "2. Hill Ascent Options: Steps vs Motorable Taxi Road",
					text: "Devotees can climb the 365 stone steps symbolizing the 365 days of the year. For elderly pilgrims, our taxis can drive directly up the hill road right to the temple entrance gate."
				},
				{
					heading: "3. How to Plan a Day Trip from Tirupati",
					text: "Located just 65 km away via Nagari and Puttur, Thiruttani is easily accessible in 90 minutes. A roundtrip cab from Tirupati allows comfortable darshan without waiting for public buses."
				}
			]
		},
		faqs: [
			{
				q: "Can elderly pilgrims reach Thiruttani temple without climbing steps?",
				a: "Yes! Our cabs can drive directly up the motorable hill road to the top temple entrance gate."
			},
			{
				q: "What are the daily darshan timings at Thiruttani Murugan Temple?",
				a: "The temple is open daily from 6:00 AM to 9:00 PM for darshan, abhishekam, and special poojas."
			},
			{
				q: "Can we combine Thiruttani with Tiruchanur in a half-day tour?",
				a: "Yes, a private cab from Tirupati easily covers Thiruttani Murugan Temple and Tiruchanur Padmavathi Temple in 6 hours."
			}
		]
	},
	{
		id: "srinivasa-mangapuram-temple-guide",
		slug: "srinivasa-mangapuram-temple-guide",
		category: "Local Shrines",
		title: "Srinivasa Mangapuram – The Sacred Abode of Sri Kalyana Venkateswara Swami",
		shortTitle: "Srinivasa Mangapuram Temple Guide",
		snippet: "If you are planning a spiritual journey to Tirupati and thinking of covering all the important shrines around it, Srinivasa Mangapuram is one place you simply cannot skip. Nestled about 12 kilometres from Tirupati city, this quiet yet profoundly sacred village is home to Sri Kalyana Venkateswara Swami Temple.",
		readTime: "5 MIN READ",
		date: "May 15, 2026",
		author: "Dhakshinya Tours & Travels",
		views: "13,500+",
		featured: false,
		image: "https://res.cloudinary.com/znbhjevm/image/upload/v1790210443/tirupatibalaji/blog/sri-govindaraja-swamy-temple-860x510.png",
		tags: [
			"Srinivasa Mangapuram",
			"Kalyana Venkateswara",
			"Tirupati Shrines",
			"Local Taxi"
		],
		quickFacts: {
			"Location": "12 km West of Tirupati City (20 Mins Drive)",
			"Primary Deity": "Sri Kalyana Venkateswara Swami",
			"Special Ritual": "Daily Kalyana Utsavam for Marital Bliss & Harmony",
			"Darshan Queue": "15-30 Minutes Peaceful Queue",
			"Nearby Attractions": "Chandragiri Fort & Agastheshwara Temple"
		},
		highlights: [
			"Distance: 12 km west of Tirupati city (20 minutes drive)",
			"Significance: Divine site where Lord Venkateswara stayed after marriage with Goddess Padmavathi",
			"Special Pooja: Kalyana Utsavam performed daily for couples seeking marital harmony",
			"Peaceful Darshan: Shorter queues compared to Tirumala main temple",
			"Easily combinable with Chandragiri Fort and Kanipakam in a local cab itinerary"
		],
		fullContent: {
			intro: "If you are planning a spiritual journey to Tirupati and thinking of covering all the important shrines around it, Srinivasa Mangapuram is one place you simply cannot skip. Nestled about 12 kilometres from Tirupati city, this quiet yet profoundly sacred village is home to the famous Sri Kalyana Venkateswara Swami Temple — a deity believed to bestow prosperity and marital bliss.",
			sections: [
				{
					heading: "1. Divine Legend & Historical Importance",
					text: "According to temple legends, after his divine wedding with Goddess Padmavathi in Narayanavanam, Lord Venkateswara resided at Srinivasa Mangapuram for six months before ascending the Tirumala hills."
				},
				{
					heading: "2. Darshan Timings & Special Rituals",
					text: "The temple is open from 5:30 AM to 8:30 PM. Devotees often participate in the daily Kalyana Utsavam seva to seek blessings for marriage and family well-being."
				},
				{
					heading: "3. Visiting via Local Taxi Package",
					text: "Include Srinivasa Mangapuram in a half-day city temple tour along with Chandragiri Fort, Kapila Theertham, and Tiruchanur."
				}
			]
		},
		faqs: [
			{
				q: "What is the legend behind Srinivasa Mangapuram temple?",
				a: "It is believed Lord Venkateswara resided here for six months after His divine marriage to Goddess Padmavathi before ascending Tirumala."
			},
			{
				q: "How far is Srinivasa Mangapuram from Tirupati Railway Station?",
				a: "It is just 12 km away (approx. 20 minutes by cab) on the Madanapalle highway corridor."
			},
			{
				q: "Which temples can be visited along with Srinivasa Mangapuram?",
				a: "You can combine it with Chandragiri Fort, Agastheshwara Temple, and Kapila Theertham in a 4-hour local cab tour."
			}
		]
	},
	{
		id: "sri-govindaraja-swamy-temple-tirupati",
		slug: "sri-govindaraja-swamy-temple-tirupati",
		category: "City Temples",
		title: "Sri Govindaraja Swamy Temple, Tirupati: Complete Guide to History, Timings & Darshan",
		shortTitle: "Sri Govindaraja Swamy Temple",
		snippet: "Every year, millions of pilgrims travel to Tirupati with their hearts set on seeking the blessings of Lord Venkateswara at Tirumala. But tucked right in the heart of Tirupati city stands a temple that many devotees walk past without fully understanding its depth — Sri Govindaraja Swamy Temple.",
		readTime: "6 MIN READ",
		date: "May 11, 2026",
		author: "Dhakshinya Tours & Travels",
		views: "16,900+",
		featured: false,
		image: "https://res.cloudinary.com/znbhjevm/image/upload/v1790210443/tirupatibalaji/blog/sri-govindaraja-swamy-temple-860x510.png",
		tags: [
			"Govindaraja Swamy",
			"City Temple",
			"Tirupati Heritage",
			"Ramanujacharya",
			"Tirupati Cabs"
		],
		quickFacts: {
			"Location": "Heart of Tirupati Town (500m from Railway Station)",
			"Consecration Year": "1130 AD by Saint Sri Ramanujacharya",
			"Architecture": "Towering 7-Tiered Dravidian Raja Gopuram",
			"Deity Posture": "Sayana Murti (Reclining Posture on Adisesha)",
			"Opening Hours": "5:00 AM to 9:00 PM Daily"
		},
		highlights: [
			"Location: Heart of Tirupati city, 500 meters from Tirupati Railway Station",
			"History: Consecrated in 1130 AD by Vaishnavite saint Sri Ramanujacharya",
			"Architecture: Towering 7-tiered Raja Gopuram with intricate Dravidian sculpture",
			"Deity: Lord Govindaraja Swamy in sleeping posture (Sayana Murti) on Adisesha",
			"Essential stop for pilgrims before ascending Tirumala hills"
		],
		fullContent: {
			intro: "Every year, millions of pilgrims travel to Tirupati with their hearts set on seeking the blessings of Lord Venkateswara at Tirumala. But tucked right in the heart of Tirupati city stands a temple that many devotees walk past without fully understanding its depth — Sri Govindaraja Swamy Temple. Ancient, magnificent, and deeply intertwined with the legend of Tirumala.",
			sections: [
				{
					heading: "1. History & Consecration by Saint Ramanujacharya",
					text: "The temple was consecrated in 1130 AD by Sri Ramanujacharya to install the deity of Govindaraja Swamy brought safely from Chidambaram. Lord Govindaraja is considered the elder brother of Lord Venkateswara."
				},
				{
					heading: "2. Architecture & Main Shrines",
					text: "The imposing 7-tier Raja Gopuram dominates the Tirupati skyline. Inside the inner sanctum, the main deity rests on snake king Adisesha, measuring over 12 feet in length."
				},
				{
					heading: "3. Practical Visitor Tips & Proximity",
					text: "Being situated right next to the Tirupati railway station and main bus stand, pilgrims can easily visit the temple upon arrival before checking into their hotel."
				}
			]
		},
		faqs: [
			{
				q: "Where is Sri Govindaraja Swamy Temple located?",
				a: "It is located right in the center of Tirupati town, just 500 meters walking distance from Tirupati Main Railway Station."
			},
			{
				q: "What are the daily visiting hours for Govindaraja Swamy Temple?",
				a: "The temple opens at 5:00 AM for Viswaroopa Seva and remains open until 9:00 PM."
			},
			{
				q: "Who consecrated the Sri Govindaraja Swamy Temple?",
				a: "The temple was consecrated in 1130 AD by the legendary Vaishnavite saint Sri Ramanujacharya."
			}
		]
	},
	{
		id: "ooty-tourist-places-travel-guide",
		slug: "ooty-tourist-places-travel-guide",
		category: "Hill Stations",
		title: "Ooty Tourist Places: The Complete 2026 Travel Guide",
		shortTitle: "Ooty Tourist Places Guide",
		snippet: "Tucked away in the Nilgiri hills of Tamil Nadu at an elevation of over 2,200 metres, Ooty — officially called Udhagamandalam — has earned its title as the “Queen of Hill Stations” for a reason. The rolling green meadows, the sharp smell of eucalyptus in the morning air, tea estates stretching as far as the eye can see.",
		readTime: "8 MIN READ",
		date: "May 5, 2026",
		author: "Dhakshinya Tours & Travels",
		views: "14,800+",
		featured: false,
		image: "https://res.cloudinary.com/znbhjevm/image/upload/v1790210452/tirupatibalaji/blog/ooty-tourist-places-860x510.png",
		tags: [
			"Ooty",
			"Nilgiris",
			"Queen of Hill Stations",
			"Travel Guide",
			"Outstation Cab"
		],
		quickFacts: {
			"Elevation": "2,240 Meters in the Nilgiri Hills",
			"Distance from Tirupati": "460 km (Approx. 9.5 to 10.5 Hours Drive)",
			"Top Attractions": "Botanical Garden, Ooty Lake, Doddabetta Peak, Tea Museum",
			"UNESCO Heritage": "Nilgiri Mountain Railway Toy Train",
			"Best Travel Season": "October to May (Pleasant Cool Weather)"
		},
		highlights: [
			"Elevation: 2,240 meters above sea level in the Nilgiri Hills",
			"Top Places: Ooty Lake, Botanical Garden, Rose Garden, Doddabetta Peak, Tea Factory",
			"UNESCO Heritage: Ride the Nilgiri Mountain Railway Toy Train",
			"Distance from Tirupati: Approx. 460 km (9.5 to 10.5 hours drive)",
			"Multi-Day outstation car rentals with mountain-expert drivers"
		],
		fullContent: {
			intro: "Tucked away in the Nilgiri hills of Tamil Nadu at an elevation of over 2,200 metres, Ooty — officially called Udhagamandalam — has earned its title as the “Queen of Hill Stations” for a reason. The rolling green meadows, the sharp smell of eucalyptus in the morning air, tea estates stretching as far as the eye can see.",
			sections: [
				{
					heading: "1. Top Must-Visit Places in Ooty",
					text: "1. Government Botanical Gardens - Spanning 55 acres with 1,000+ exotic flower species. 2. Ooty Lake & Boating - Scenic artificial lake surrounded by eucalyptus trees. 3. Doddabetta Peak - Highest point in Nilgiris offering panoramic valley views. 4. Tea Museum & Factory - Witness fresh Nilgiri tea processing."
				},
				{
					heading: "2. Nilgiri Mountain Toy Train Experience",
					text: "Built by the British in 1908, this UNESCO World Heritage train travels between Mettupalayam, Coonoor, and Ooty through 16 tunnels and 250 bridges."
				},
				{
					heading: "3. Outstation Cab Booking from Tirupati",
					text: "Our outstation SUVs (Innova Crysta, Ertiga) and Tempo Travellers are driven by drivers accustomed to navigating the 36 hairpin bends on the Mettupalayam-Ooty ghat road."
				}
			]
		},
		faqs: [
			{
				q: "What is the best route from Tirupati to Ooty by road?",
				a: "The recommended route is Tirupati -> Chittoor -> Hosur -> Salem -> Avinashi -> Mettupalayam -> Coonoor -> Ooty."
			},
			{
				q: "Are your drivers trained for mountain hairpin bends?",
				a: "Yes, our outstation drivers are certified for Nilgiri hill roads and navigating the 36 hairpin bends safely."
			},
			{
				q: "Can we book a 3-Day or 4-Day Ooty package from Tirupati?",
				a: "Yes! We offer 3-Day and 4-Day customized hill station tour packages with hotel pickup, local sightseeing, and return drop."
			}
		]
	}
];
//#endregion
//#region src/data/cabRoutes.js
var cabRoutes = [
	{
		slug: "tirupati-to-srikalahasti-distance",
		title: "Tirupati to Srikalahasti Cabs",
		shortTitle: "Tirupati → Srikalahasti",
		image: images.srikalahasti,
		distance: "37 km",
		time: "45–60 minutes",
		starting: "₹2,880",
		route: "Tirupati → Renigunta → Srikalahasti",
		highlights: [
			"Sri Kalahasteeswara Temple",
			"Rahu-Ketu pooja",
			"Easy same-day round trip"
		],
		description: "Book a comfortable Tirupati to Srikalahasti cab for a convenient pilgrimage between two important temple towns. The official route information highlights the NH516/Renigunta connection and flexible private cab travel.",
		prices: [
			["Etios / Swift Dzire", "₹2,880"],
			["Ertiga", "₹3,580"],
			["Innova Crysta", "₹4,080"],
			["Tempo Traveller 12 Seater", "₹5,110"],
			["Tempo Traveller 16 Seater", "₹6,800"]
		]
	},
	{
		slug: "tirupati-to-kanipakam-distance",
		title: "Tirupati to Kanipakam Cabs",
		shortTitle: "Tirupati → Kanipakam",
		image: images.kanipakam,
		distance: "70 km",
		time: "1.5–2 hours",
		starting: "₹3,580",
		route: "Tirupati → Chandragiri → Puthalapattu → Kanipakam",
		highlights: [
			"Kanipakam Vinayaka Temple",
			"Vakula Devi / Mangapuram options",
			"Same-day return"
		],
		description: "Travel from Tirupati to the famous Kanipakam Vinayaka Temple in a clean, comfortable cab. The route is well connected and can be combined with nearby temple visits for a fuller pilgrimage day.",
		prices: [
			["Etios / Swift Dzire", "₹3,580"],
			["Ertiga", "₹4,280"],
			["Innova Crysta", "₹4,780"],
			["Tempo Traveller 12 Seater", "₹5,735"],
			["Tempo Traveller 16 Seater", "₹7,800"]
		]
	},
	{
		slug: "tirupati-to-golden-temple-distance",
		title: "Tirupati to Golden Temple Cabs",
		shortTitle: "Tirupati → Golden Temple",
		image: images.goldentemple,
		distance: "113–120 km",
		time: "2–3.5 hours",
		starting: "₹5,000",
		route: "Tirupati → Pakala → Chittoor → Sripuram Golden Temple, Vellore",
		highlights: [
			"Sripuram Golden Temple",
			"Comfortable round trip",
			"Flexible sightseeing"
		],
		description: "Hire a private cab from Tirupati to Sripuram Golden Temple in Vellore. The source page describes an approximately 113–120 km road journey and the convenient route via Pakala and Chittoor.",
		prices: [
			["Etios / Swift Dzire", "₹5,000"],
			["Ertiga", "₹6,800"],
			["Innova Crysta", "₹8,200"],
			["Tempo Traveller 12 Seater", "₹10,500"],
			["Tempo Traveller 16 Seater", "₹11,500"]
		]
	},
	{
		slug: "tirupati-to-tiruvannamalai-distance",
		title: "Tirupati to Tiruvannamalai Cabs",
		shortTitle: "Tirupati → Tiruvannamalai",
		image: images.arunachalam,
		distance: "190–200 km",
		time: "4.5–5 hours",
		starting: "₹4,500",
		route: "Tirupati → Chittoor → Vellore → Tiruvannamalai",
		highlights: [
			"Arunachaleswarar Temple",
			"Girivalam opportunity",
			"Private round trip"
		],
		description: "Plan a spiritual road journey from Tirupati to Tiruvannamalai with a private cab and experienced driver. The route is ideal for devotees visiting Arunachaleswarar Temple and can be extended with Golden Temple or Kanchipuram stops.",
		prices: [
			["Etios / Swift Dzire", "₹4,500"],
			["Ertiga", "₹6,200"],
			["Innova Crysta", "₹7,500"],
			["Tempo Traveller 12 Seater", "₹9,800"],
			["Tempo Traveller 16 Seater", "₹11,000"]
		]
	},
	{
		slug: "tirupati-to-kanchipuram-distance",
		title: "Tirupati to Kanchipuram Cabs",
		shortTitle: "Tirupati → Kanchipuram",
		image: "https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733229/896a9850-f84d-4db9-83cd-5133fe373dfc.png",
		distance: "110–120 km",
		time: "2.5–3 hours",
		starting: "₹5,000",
		route: "Tirupati → Tiruttani / NH716-NH48 → Kanchipuram",
		highlights: [
			"Varadaraja Perumal Temple",
			"Kamakshi Amman Temple",
			"Kailasanathar Temple"
		],
		description: "Travel comfortably from Tirupati to Kanchipuram for a temple-focused day trip. The route can include Tiruttani and the major Kanchipuram temples before returning to Tirupati.",
		prices: [
			["Etios / Swift Dzire", "₹5,000"],
			["Ertiga", "₹6,800"],
			["Innova Crysta", "₹8,200"],
			["Tempo Traveller 12 Seater", "₹10,500"],
			["Tempo Traveller 16 Seater", "₹11,500"]
		]
	},
	{
		slug: "tirupati-to-rameshwaram-distance",
		title: "Tirupati to Rameshwaram Cabs",
		shortTitle: "Tirupati → Rameshwaram",
		image: "https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733314/324b7f65-5b9a-490e-adb5-c81416fb0d05.png",
		distance: "575–600 km",
		time: "11–12 hours",
		starting: "₹23,050",
		route: "Tirupati → Chittoor → Vellore → Trichy → Rameshwaram",
		highlights: [
			"Ramanathaswamy Temple",
			"Pamban Bridge",
			"Dhanushkodi add-on"
		],
		description: "A long-distance pilgrimage cab from Tirupati to Rameshwaram, suited to families and groups wanting flexible stops. Madurai and Dhanushkodi can be included in a multi-day circuit.",
		prices: [
			["Etios / Swift Dzire", "₹23,050"],
			["Ertiga", "₹28,970"],
			["Innova Crysta", "₹33,860"],
			["Tempo Traveller 12 Seater", "₹40,350"],
			["Tempo Traveller 16 Seater", "₹50,050"],
			["Tempo Traveller 20 Seater", "₹64,350"]
		]
	},
	{
		slug: "tirupati-to-srisailam-distance",
		title: "Tirupati to Srisailam Cabs",
		shortTitle: "Tirupati → Srisailam",
		image: images.srisailam,
		distance: "Approx. 367 km",
		time: "6.5–8 hours",
		starting: "₹13,000",
		route: "Tirupati → Venkatagiri / Markapur side → Srisailam",
		highlights: [
			"Mallikarjuna Swamy Temple",
			"Bhramaramba Devi Temple",
			"Srisailam sightseeing"
		],
		description: "Connect two major pilgrimage destinations with a comfortable Tirupati to Srisailam cab. The source route section uses approximately 367 km and 6.5–7 hours, with actual time varying by traffic and stops.",
		prices: [
			["Etios / Swift Dzire", "₹13,000"],
			["Ertiga", "₹16,400"],
			["Innova Crysta", "₹18,950"],
			["Tempo Traveller 12 Seater", "₹21,500"],
			["Tempo Traveller 16 Seater", "₹30,000"],
			["Urbania 12 Seater", "₹38,500"]
		]
	},
	{
		slug: "tirupati-to-pondicherry-distance",
		title: "Tirupati to Pondicherry Cabs",
		shortTitle: "Tirupati → Pondicherry",
		image: "https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733307/ce934d82-a670-474a-91d9-2d7089abb2c3.png",
		distance: "255–265 km",
		time: "5–6 hours",
		starting: "₹9,000",
		route: "Tirupati → Kanchipuram → Tindivanam → Pondicherry",
		highlights: [
			"Promenade Beach",
			"French Quarter",
			"Auroville & sightseeing"
		],
		description: "Book a comfortable outstation cab from Tirupati to Pondicherry for a temple-and-coast combination. The route works well for overnight stays and flexible sightseeing around the French Quarter, beaches and Auroville.",
		prices: [
			["Etios / Swift Dzire", "₹9,000"],
			["Ertiga", "₹11,500"],
			["Innova Crysta", "₹14,000"],
			["Tempo Traveller 12 Seater", "₹17,500"],
			["Tempo Traveller 16 Seater", "₹20,000"]
		]
	},
	{
		slug: "tirupati-to-madurai-distance",
		title: "Tirupati to Madurai Cabs",
		shortTitle: "Tirupati → Madurai",
		image: "https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733283/4db94717-d968-4688-8e3e-6d48b31613e0.png",
		distance: "Approx. 430–450 km",
		time: "8.5–11 hours",
		starting: "₹14,500",
		route: "Tirupati → Tamil Nadu → Trichy / Dindigul → Madurai",
		highlights: [
			"Meenakshi Amman Temple",
			"Madurai sightseeing",
			"Easy multi-day extension"
		],
		description: "Travel from Tirupati to Madurai in a private cab with the flexibility to stop along the way. Madurai can be combined with Srirangam, Rameshwaram and other South India pilgrimage destinations.",
		prices: [
			["Etios / Swift Dzire", "₹14,500"],
			["Ertiga", "₹18,200"],
			["Innova Crysta", "₹21,500"],
			["Tempo Traveller 12 Seater", "₹26,000"],
			["Tempo Traveller 16 Seater", "₹32,000"]
		]
	},
	{
		slug: "tirupati-to-kanyakumari-distance",
		title: "Tirupati to Kanyakumari Cabs",
		shortTitle: "Tirupati → Kanyakumari",
		image: "https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733253/e0e2138b-a218-4dfa-92bb-2c51919c4c8d.png",
		distance: "Approx. 700 km",
		time: "13–15 hours",
		starting: "₹26,000",
		route: "Tirupati → Madurai → Kanyakumari",
		highlights: [
			"Kanyakumari sightseeing",
			"Sunset Point",
			"Vivekananda Rock / coastal attractions"
		],
		description: "Take a private long-distance cab from Tirupati to India’s southern tip. This route is best planned as a multi-day journey and can be combined with Madurai and Rameshwaram.",
		prices: [
			["Etios / Swift Dzire", "₹26,000"],
			["Ertiga", "₹32,000"],
			["Innova Crysta", "₹38,000"],
			["Tempo Traveller 12 Seater", "₹48,000"],
			["Tempo Traveller 16 Seater", "₹58,000"]
		]
	},
	{
		slug: "tirupati-to-talakona-distance",
		title: "Tirupati to Talakona Cabs",
		shortTitle: "Tirupati → Talakona",
		image: images.tirupati,
		distance: "55–60 km",
		time: "1.5–2 hours",
		starting: "₹3,800",
		route: "Tirupati → Bakarapeta → Talakona",
		highlights: [
			"Talakona Waterfalls",
			"Forest drive",
			"Nature day trip"
		],
		description: "Enjoy an easy nature escape from Tirupati to Talakona. A private cab gives families and groups the flexibility to manage the forest-side visit and return to Tirupati the same day.",
		prices: [
			["Etios / Swift Dzire", "₹3,800"],
			["Ertiga", "₹4,300"],
			["Innova Crysta", "₹4,800"],
			["Tempo Traveller 12 Seater", "₹5,800"],
			["Tempo Traveller 16 Seater", "₹7,500"],
			["Tempo Traveller 20 Seater", "₹9,800"]
		]
	},
	{
		slug: "tirupati-to-mahabalipuram-distance",
		title: "Tirupati to Mahabalipuram Cabs",
		shortTitle: "Tirupati → Mahabalipuram",
		image: "https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733297/51d2c19a-22c0-41ce-b299-9ca4ba7cc078.png",
		distance: "Approx. 200 km",
		time: "4.5–5.5 hours",
		starting: "₹10,000",
		route: "Tirupati → Kanchipuram → Mahabalipuram → Tirupati",
		highlights: [
			"Shore Temple",
			"Pancha Rathas",
			"Arjuna’s Penance & beach"
		],
		description: "Combine temple heritage and the coast with a Tirupati to Mahabalipuram cab. The source route package includes Kanchipuram-side temple stops, Mahabalipuram Beach and the UNESCO heritage monuments.",
		prices: [
			["Etios / Swift Dzire", "₹10,000"],
			["Ertiga", "₹12,500"],
			["Innova Crysta", "₹15,000"],
			["Tempo Traveller 12 Seater", "₹18,500"],
			["Tempo Traveller 16 Seater", "₹21,000"]
		]
	}
];
//#endregion
//#region src/data/servicePages.js
var commonSteps = [
	"Share your travel plan by call, WhatsApp or enquiry",
	"Choose the vehicle that matches your group and route",
	"Confirm availability, pricing and pickup details"
];
var commonFaqs = [
	["How do I book a package?", "Share your travel date, pickup point, destination, passenger count and preferred vehicle by call or WhatsApp to receive an instant customized quote."],
	["Are doorstep, airport and railway-station pickups available?", "Yes! Doorstep pickup and drop can be arranged from Tirupati Airport, Tirupati Railway Station, hotels, or home address."],
	["Are tolls, parking and driver charges included?", "Applicable tolls, parking fees, state border permits and driver bata depend on the selected package terms. Confirm the final inclusions before travel."]
];
var servicePages = {
	"car-rentals-in-tirupati": {
		title: "Car Rentals in Tirupati – Enjoy a Smooth and Hassle-Free Ride",
		eyebrow: "CAR RENTALS IN TIRUPATI",
		image: images.etios,
		intro: "Premium and comfortable car rentals for Tirumala darshan, temple visits, local sightseeing, airport transfers, business travel and outstation journeys.",
		whyTitle: "Your Reliable Partner for Every Trip",
		whyIntro: "Choose from Etios, Ertiga and Innova Crysta with air conditioning, experienced drivers, flexible local and outstation plans and 24/7 booking support.",
		vehicles: [
			[
				"Sedan (Etios / Dzire)",
				"Sedan • 4 persons • AC • 2 bags",
				"Local ₹2,880 / 8h-80km • ₹3,650 / 12h-150km • ₹15/km outstation"
			],
			[
				"Ertiga",
				"MUV • 6 persons • AC • 3 bags",
				"Local ₹3,380 / 8h-80km • ₹4,150 / 12h-150km • ₹19/km outstation"
			],
			[
				"Innova Crysta",
				"SUV • 7 persons • AC • 5 bags",
				"Local ₹4,380 / 8h-80km • ₹5,150 / 12h-150km • ₹23/km outstation"
			],
			[
				"Toyota Hycross",
				"Premium SUV • 7 persons • AC • 4 bags",
				"Local ₹6,100 / 8h-80km • ₹7,100 / 12h-150km • ₹32/km outstation"
			],
			[
				"Toyota Fortuner",
				"Executive SUV • 7 persons • AC • 4 bags",
				"Local ₹8,800 / 8h-80km • ₹10,500 / 12h-150km • ₹43/km outstation"
			]
		],
		outstation: "Published outstation tariffs use a 300 km/day minimum. Local and outstation packages are available for temple visits, city travel, airport transfers and longer routes.",
		highlights: [
			"Comfort & luxury AC cars",
			"Experienced drivers familiar with Tirumala routes",
			"Transparent pricing",
			"24/7 support",
			"Customizable local and outstation packages",
			"Clean and hygienic fleet"
		],
		featureDetails: [
			["Local rental", "Etios, Ertiga and Innova Crysta are available for local Tirupati and Tirumala travel."],
			["Outstation rental", "Kilometre-based packages are available for longer journeys with a published minimum."],
			["Pickup locations", "Railway station, airport, hotels and agreed doorstep pickup can be arranged."],
			["Popular routes", "Tirumala, Srikalahasti, Kanipakam, Vellore, Arunachalam, Chennai, Pondicherry, Bangalore, Madurai and other routes."]
		],
		packageNote: "Local and outstation rentals can be planned around your schedule, group size and temple visits. Ask for the current quotation before confirming.",
		steps: commonSteps,
		faqs: [...commonFaqs, ["Is car rental safe in Tirupati?", "The source service promotes maintained vehicles and experienced, licensed drivers familiar with local temple routes."]]
	},
	"tempo-traveller-rental-in-tirupati": {
		title: "Tempo Traveller Rental in Tirupati – Your Comfort Journey Starts Here",
		eyebrow: "TEMPO TRAVELLER RENTAL",
		image: images.tempo12,
		intro: "Group travel solutions for pilgrimage, sightseeing and outstation trips using air-conditioned 12, 17 and 20-seater Tempo Travellers.",
		whyTitle: "Comfortable Group Travel for Tirupati Journeys",
		whyIntro: "The source page positions Tempo Travellers for families and groups visiting Tirumala, Padmavathi Temple and other local or outstation destinations.",
		vehicles: [
			[
				"Tempo 12 Seater",
				"Mini bus • 12 persons • AC • 8 bags",
				"₹5,100 / 8h-80km • ₹6,000 / 12h-150km • ₹26/km"
			],
			[
				"Tempo 16 Seater",
				"Mini bus • 16 persons • AC • 10 bags",
				"₹6,800 / 8h-80km • ₹7,800 / 12h-150km • ₹35/km"
			],
			[
				"Tempo 20 Seater",
				"Mini bus • 20 persons • AC • 12 bags",
				"₹9,000 / 8h-80km • ₹10,500 / 12h-150km • ₹45/km"
			]
		],
		outstation: "Published tariffs use a 300 km/day minimum. Tolls, parking, permits and additional hours or kilometres can be charged separately.",
		highlights: [
			"Air-conditioned group vehicles",
			"Experienced Tirumala-route drivers",
			"Transparent rental communication",
			"24/7 support",
			"Customizable packages",
			"Clean and hygienic fleet"
		],
		featureDetails: [
			["Air Conditioning", "Comfortable AC cabin for temple visits, sightseeing and longer journeys."],
			["TV Screen", "Entertainment feature on applicable vehicles."],
			["USB Charging Ports", "Convenient charging during the journey."],
			["Push Back Seats", "Added comfort for longer routes."],
			["Entertainment System", "Onboard entertainment on applicable vehicles."],
			["Hygienic Fleet", "Vehicles are cleaned and prepared before trips."]
		],
		packageNote: "Local and outstation packages can be customized around group size, dates, temple visits and route.",
		steps: commonSteps,
		faqs: [...commonFaqs, ["Which Tempo size should I choose?", "Choose 12, 17 or 20 seats according to passenger count and luggage."]]
	},
	"urbania-traveller-rental-in-tirupati": {
		title: "Force Urbania Rental in Tirupati",
		eyebrow: "URBANIA TRAVELLER RENTAL",
		image: images.urbania16,
		intro: "Premium Force Urbania group travel from Tirupati for families, corporate groups, pilgrimages, sightseeing and outstation journeys.",
		whyTitle: "Premium Group Travel with More Cabin Comfort",
		whyIntro: "Urbania is positioned as a premium traveller option for customers who want more space and a refined group-travel experience.",
		vehicles: [[
			"Urbania 12 Seater",
			"12 persons • AC • premium group travel",
			"Local ₹10,000 / 8h-80km • ₹12,000 / 12h-150km • ₹45/km"
		], [
			"Urbania 16 Seater",
			"16 persons • AC • premium group travel",
			"Local ₹12,000 / 8h-80km • ₹15,000 / 12h-150km • ₹48/km"
		]],
		outstation: "The published tariff uses a 300 km/day minimum for outstation Urbania trips. Confirm route-specific local pricing, tolls, parking and permits before booking.",
		highlights: [
			"Premium cabin",
			"Air conditioning",
			"More passenger space",
			"Experienced drivers",
			"Local and outstation plans",
			"Suitable for family and corporate groups"
		],
		featureDetails: [
			["Premium interior", "Designed for comfortable group travel with a more premium cabin experience."],
			["Group flexibility", "12 and 16-seater options cover different passenger counts."],
			["Temple travel", "Suitable for Tirupati, Tirumala and pilgrimage circuits."],
			["Outstation travel", "Available for longer routes with kilometre-based pricing."]
		],
		packageNote: "Share your dates, group size and itinerary to receive the current Urbania availability and route quotation.",
		steps: commonSteps,
		faqs: [...commonFaqs, ["Can Urbania be used for a one-day Tirupati tour?", "Yes. It is suitable for local temple visits, sightseeing and customized day trips."]]
	},
	"bus-rental-in-tirupati": {
		title: "Bus Rental in Tirupati – Safe, Comfortable & Affordable Trips",
		eyebrow: "BUS RENTAL IN TIRUPATI",
		image: images.bus40,
		intro: "Well-maintained buses for family outings, temple pilgrimages, corporate travel, weddings, events and large group tours.",
		whyTitle: "Your Reliable Partner for Every Group Trip",
		whyIntro: "The source page offers bus sizes from compact 27-seaters to larger 50-seaters, with experienced drivers, flexible rental plans and 24/7 support.",
		vehicles: [
			[
				"Bus 27 Seater",
				"Coach bus • 27 persons • AC • 15 bags",
				"₹12,000 / 8h-80km • ₹13,500 / 12h-150km • ₹55/km"
			],
			[
				"Bus 40 Seater",
				"Luxury coach • 40 persons • AC • 20 bags",
				"₹15,200 / 8h-80km • ₹17,500 / 12h-150km • ₹65/km"
			],
			[
				"Bus 45 Seater",
				"Luxury coach • 45 persons • AC • 22 bags",
				"₹18,000 / 8h-80km • ₹20,500 / 12h-150km • ₹75/km"
			]
		],
		outstation: "The published bus tariff uses a 350 km/day minimum for outstation travel. Applicable tolls, parking, state taxes and other route charges can be extra.",
		highlights: [
			"27 to 50 seat capacity",
			"Clean and comfortable buses",
			"Experienced professional drivers",
			"Local and outstation rentals",
			"Wedding and event travel",
			"24/7 customer support"
		],
		featureDetails: [
			["Group pilgrimages", "Suitable for large temple and pilgrimage groups."],
			["Weddings & events", "Useful for weddings, functions and organized events."],
			["Corporate travel", "Flexible group transportation for corporate outings."],
			["Multi-day tours", "Suitable for longer South India group itineraries."]
		],
		packageNote: "Bus size and rental duration can be planned around passenger count, itinerary and event requirements.",
		steps: commonSteps,
		faqs: [...commonFaqs, ["Are buses available for weddings and events?", "Yes. The source page specifically positions the fleet for weddings, events, corporate travel and group outings."]]
	},
	"outstation-taxi-in-tirupati": {
		title: "Outstation Taxi in Tirupati – Trusted Travel Partner 24/7",
		eyebrow: "OUTSTATION TAXI SERVICE",
		image: images.taxi,
		intro: "Long-distance taxi travel from Tirupati for families, pilgrimages, sightseeing and corporate groups, with cars, Tempo Travellers, Urbania and buses.",
		whyTitle: "Long-Distance Travel Made Easier",
		whyIntro: "The source page presents a broad vehicle range and kilometre-based outstation packages for travel beyond Tirupati city limits.",
		vehicles: [
			[
				"Sedan (Etios / Dzire)",
				"4 persons • Sedan • AC",
				"From ₹15/km • 300 km/day minimum"
			],
			[
				"Ertiga",
				"6 persons • MUV • AC",
				"From ₹19/km • 300 km/day minimum"
			],
			[
				"Innova Crysta",
				"7 persons • SUV • AC",
				"From ₹23/km • 300 km/day minimum"
			],
			[
				"Toyota Hycross",
				"7 persons • Premium SUV • AC",
				"From ₹32/km • 300 km/day minimum"
			],
			[
				"Toyota Fortuner",
				"7 persons • Executive SUV • AC",
				"From ₹43/km • 300 km/day minimum"
			],
			[
				"Tempo 12/16/20",
				"12–20 persons • AC",
				"From ₹26/₹35/₹45 per km • 300 km/day minimum"
			],
			[
				"Urbania 12/16",
				"12–16 persons • AC",
				"From ₹45/₹48 per km • 300 km/day minimum"
			],
			[
				"Bus 27/40/45",
				"27–45 persons • AC",
				"From ₹55 to ₹75 per km • 300 km/day minimum"
			]
		],
		outstation: "The published service covers one-way and round-trip outstation travel. Exact pricing depends on vehicle, route, duration and applicable charges.",
		highlights: [
			"Wide fleet selection",
			"Experienced route drivers",
			"Customizable itineraries",
			"24/7 booking support",
			"One-way and round-trip options",
			"Family and group travel"
		],
		featureDetails: [
			["Sedans & SUVs", "Etios, Ertiga and Innova Crysta for smaller groups."],
			["Tempo Travellers", "12, 17 and 20-seater options for larger families."],
			["Urbania", "12 and 16-seater premium group options."],
			["Buses", "27 to 50-seater options for large groups."]
		],
		packageNote: "Share route, dates and passenger count to receive the current outstation quote and vehicle availability.",
		steps: commonSteps,
		faqs: [...commonFaqs]
	},
	"taxi-in-tirupati": {
		title: "Taxi Service in Tirupati & Cab Booking",
		eyebrow: "24/7 TAXI SERVICE",
		image: images.taxi,
		intro: "Reliable taxi booking in Tirupati for temple visits, local sightseeing, airport transfers, one-way trips, round trips and outstation travel.",
		whyTitle: "Local & Outstation Cab Booking",
		whyIntro: "The source page presents taxi services for pilgrims and travellers with multiple vehicle choices, professional drivers, comfortable rides and 24/7 availability.",
		vehicles: [
			[
				"Sedan",
				"4 persons",
				"₹2,880 (8h/80km) • ₹3,650 (12h/150km) • ₹15/km outstation"
			],
			[
				"Ertiga",
				"6–7 persons",
				"₹3,380 (8h/80km) • ₹4,150 (12h/150km) • ₹19/km outstation"
			],
			[
				"Innova Crysta",
				"6–7 persons",
				"₹4,380 (8h/80km) • ₹5,150 (12h/150km) • ₹23/km outstation"
			],
			[
				"Hycross",
				"7 persons",
				"₹6,100 (8h/80km) • ₹7,100 (12h/150km) • ₹32/km outstation"
			],
			[
				"Fortuner",
				"7 persons",
				"₹8,800 (8h/80km) • ₹10,500 (12h/150km) • ₹43/km outstation"
			],
			[
				"Tempo 12/16/20",
				"12–20 persons",
				"₹5,100/₹6,800/₹9,000 (8h) • ₹26/₹35/₹45 per km"
			],
			[
				"Urbania 12/16",
				"12–16 persons",
				"₹10,000/₹12,000 (8h) • ₹45/₹48 per km"
			],
			[
				"Bus 27–45",
				"27–45 persons",
				"₹12,000–₹18,000 (8h) • ₹55–₹75 per km"
			]
		],
		outstation: "The service covers one-way, round-trip, premium/luxury, local sightseeing, outstation, airport, temple darshan and corporate/business travel.",
		highlights: [
			"One-way taxi services",
			"Round-trip packages",
			"Luxury and premium rentals",
			"Local sightseeing",
			"Outstation taxis",
			"Airport pickup and drop",
			"Temple darshan travel",
			"Corporate travel"
		],
		featureDetails: [
			["One-Way", "Travel without a return charge for the selected route."],
			["Round Trip", "Suitable for temple tours, family visits and business needs."],
			["Premium Taxi", "Higher-end sedan and SUV options for events and VIP transfers."],
			["Local Sightseeing", "Flexible temple and attraction tours with knowledgeable drivers."],
			["Airport Transfers", "On-time airport pickup and drop support."],
			["Temple Darshan", "Comfortable rides for Tirupati Balaji and nearby temples."]
		],
		packageNote: "Choose the service type, vehicle and route and request the current fare before booking.",
		steps: commonSteps,
		faqs: [...commonFaqs]
	},
	"tirupati-airport-taxi": {
		title: "Tirupati Airport Taxi Service",
		eyebrow: "TIRUPATI AIRPORT TAXI",
		image: images.taxi,
		intro: "24/7 airport pickup and drop between Tirupati Airport and Tirupati, plus longer airport connections with comfortable AC vehicles.",
		whyTitle: "Prompt Airport Transfers",
		whyIntro: "The published airport rates cover one-way pickup/drop and include vehicle choices for individuals, families and groups.",
		vehicles: [
			[
				"Etios",
				"4 persons",
				"Tirupati Airport one-way ₹1,200 • Chennai ₹5,000 • Bangalore ₹8,400"
			],
			[
				"Ertiga",
				"6–7 persons",
				"Tirupati Airport one-way ₹1,800 • Chennai ₹6,700 • Bangalore ₹11,500"
			],
			[
				"Innova Crysta",
				"6–7 persons",
				"Tirupati Airport one-way ₹2,500 • Chennai ₹8,700 • Bangalore ₹13,500"
			],
			[
				"Tempo 12 Seater",
				"12 persons",
				"Tirupati Airport one-way ₹3,500 • Chennai ₹10,700 • Bangalore ₹16,500"
			]
		],
		outstation: "The published airport table includes Tirupati Airport (TIR), Chennai Airport (MAA) and Bangalore Airport (BLR) one-way pickup/drop rates.",
		highlights: [
			"24/7 airport pickup",
			"Flight-detail coordination",
			"Direct hotel/city drop",
			"AC vehicles",
			"Family and group options"
		],
		featureDetails: [
			["Tirupati Airport", "One-way pickup/drop starting at ₹1,200 for Etios."],
			["Chennai Airport", "One-way Tirupati connection published from ₹5,000 for Etios."],
			["Bangalore Airport", "One-way Tirupati connection published from ₹8,400 for Etios."]
		],
		packageNote: "Send your flight number, arrival/departure time, pickup point and passenger count for airport availability and the current quotation.",
		steps: [
			"Share your flight details and pickup/drop requirement",
			"Choose vehicle size",
			"Confirm airport pickup and timing on WhatsApp"
		],
		faqs: [...commonFaqs]
	},
	"car-for-rent-in-tirupati-day-rentals": {
		title: "Car for Rent in Tirupati – Day Rentals",
		eyebrow: "CAR FOR RENT IN TIRUPATI",
		image: images.etios,
		intro: "Flexible day-rental options for families, pilgrims, solo travellers and groups, with local day hire and outstation kilometre packages.",
		whyTitle: "Flexible Car Rentals for Local & Outstation Travel",
		whyIntro: "The published rental information separates local day-rental pricing from outstation kilometre pricing and lists fuel-efficiency information for the vehicles.",
		vehicles: [
			[
				"Sedan (Etios / Dzire)",
				"4 persons • AC",
				"Local 8h/80km ₹2,880 • 12h/150km ₹3,650 • ₹15/km outstation"
			],
			[
				"Ertiga",
				"6–7 persons • AC",
				"Local 8h/80km ₹3,380 • 12h/150km ₹4,150 • ₹19/km outstation"
			],
			[
				"Innova Crysta",
				"6–7 persons • AC",
				"Local 8h/80km ₹4,380 • 12h/150km ₹5,150 • ₹23/km outstation"
			],
			[
				"Hycross",
				"7 persons • AC",
				"Local 8h/80km ₹6,100 • 12h/150km ₹7,100 • ₹32/km outstation"
			],
			[
				"Fortuner",
				"7 persons • AC",
				"Local 8h/80km ₹8,800 • 12h/150km ₹10,500 • ₹43/km outstation"
			]
		],
		outstation: "Outstation rentals use a 300 km/day minimum on the published tariff. Local day rental and outstation kilometre pricing are quoted separately.",
		highlights: [
			"Local day hire",
			"Outstation rentals",
			"AC cars",
			"Multiple vehicle choices",
			"Airport/railway/hotel pickup options"
		],
		featureDetails: [
			["Etios", "Compact sedan option for individuals and smaller groups."],
			["Ertiga", "Family MUV option with more passenger capacity."],
			["Innova Crysta", "Premium SUV option for larger families and comfort-focused travel."]
		],
		packageNote: "Share the rental duration, pickup location, destination and passenger count to confirm the available car and current price.",
		steps: commonSteps,
		faqs: [...commonFaqs]
	},
	"local-packages": {
		title: "Tirupati Tirumala Local Cab Packages",
		eyebrow: "LOCAL TEMPLE & CITY PACKAGES",
		image: images.tirumala,
		intro: "Book Tirupati Tirumala local cab packages for temple darshan, city tours, and local sightseeing. Explore major temples and attractions with comfortable AC cabs and experienced local drivers.",
		whyTitle: "Complete Local Temple & Sightseeing Packages",
		whyIntro: "Choose from 8-Hour / 80 KMs or 12-Hour / 150 KMs local day rentals covering Tirumala, Tiruchanur, Srikalahasti, Kanipakam, Kapila Theertham & Govindaraja Swamy Temple.",
		vehicles: [
			[
				"Swift Dzire / Sedan",
				"Sedan • 4 persons • AC",
				"8 Hours / 80 KMs: ₹2,880 • 12 Hours / 150 KMs: ₹3,650"
			],
			[
				"Maruti Ertiga",
				"MUV • 6 persons • AC",
				"8 Hours / 80 KMs: ₹3,380 • 12 Hours / 150 KMs: ₹4,150"
			],
			[
				"Toyota Innova Crysta",
				"SUV • 7 persons • AC",
				"8 Hours / 80 KMs: ₹4,380 • 12 Hours / 150 KMs: ₹5,150"
			],
			[
				"Tempo Traveller 12 Seater",
				"Minibus • 12 persons • AC",
				"8 Hours / 80 KMs: ₹5,100 • 12 Hours / 150 KMs: ₹6,000"
			]
		],
		outstation: "Packages cover doorstep pickup from Tirupati Airport, Railway Station, Hotels, or home address. Tolls, parking, and driver allowances are clearly detailed.",
		highlights: [
			"Tirumala Balaji Temple",
			"Padmavathi Ammavari Temple (Tiruchanur)",
			"Sri Kalahasteeswara Temple (Srikalahasti)",
			"Kanipakam Vinayaka Temple",
			"Kapila Theertham & Govindaraja Swamy",
			"ISKCON Tirupati & Regional Science Centre"
		],
		featureDetails: [
			["8 Hours / 80 KMs Package", "Ideal for same-day local temple visits including Tirumala and Tiruchanur."],
			["12 Hours / 150 KMs Package", "Covers extended temple circuits including Tirupati, Srikalahasti, and Kanipakam."],
			["Doorstep Pickup", "Punctual pickup from Airport, Railway Station, or your hotel."],
			["Local Driver Guide", "Drivers knowledgeable about temple queue timings, parking, and routes."]
		],
		packageNote: "Customizable according to your flight/train arrival and temple darshan slots. Contact us to reserve your package.",
		steps: commonSteps,
		faqs: [...commonFaqs, ["What temples are covered in the local package?", "Local packages cover Tirumala, Tiruchanur, Kapila Theertham, Govindaraja Swamy, ISKCON, Srikalahasti, and Kanipakam based on your selected duration."]]
	},
	"outstation-packages": {
		title: "Outstation Tour Packages from Tirupati",
		eyebrow: "OUTSTATION PILGRIMAGE & TRAVEL PACKAGES",
		image: images.goldentemple,
		intro: "Explore South India’s famous temples and cities with outstation tour packages from Tirupati. Private cabs for Vellore Golden Temple, Arunachalam, Kanchipuram, Pondicherry, Srisailam, Madurai, Rameshwaram & Kanyakumari.",
		whyTitle: "Seamless Outstation Journeys Across South India",
		whyIntro: "Hassle-free outstation trips with per-kilometre transparent pricing, interstate border permit management, and experienced highway drivers.",
		vehicles: [
			[
				"Etios / Dzire",
				"Sedan • 4 persons • AC",
				"Outstation from ₹15/km (min 300 km/day)"
			],
			[
				"Maruti Ertiga",
				"MUV • 6 persons • AC",
				"Outstation from ₹19/km (min 300 km/day)"
			],
			[
				"Innova Crysta",
				"SUV • 7 persons • AC",
				"Outstation from ₹23/km (min 300 km/day)"
			],
			[
				"Tempo Traveller",
				"Minibus • 12/16 persons • AC",
				"Outstation from ₹26 to ₹35 per km (min 300 km/day)"
			]
		],
		outstation: "Packages include 1-day, 2-day, 3-day, 4-day, and 5-day itineraries with round-trip options and flexible intermediate stops.",
		highlights: [
			"Vellore Sripuram Golden Temple (120 km)",
			"Arunachalam Tiruvannamalai (190 km)",
			"Kanchipuram Silk & Temple City (110 km)",
			"Pondicherry French Quarter & Beach (250 km)",
			"Srisailam Mallikarjuna Jyotirlinga (367 km)",
			"Madurai Meenakshi & Rameshwaram Char Dham"
		],
		featureDetails: [
			["1–2 Day Outstation Trips", "Vellore Golden Temple, Srikalahasti & Kanchipuram day tours."],
			["3–4 Day Pilgrimage Circuits", "Tirupati to Arunachalam, Madurai, and Srisailam packages."],
			["5–7 Day Grand South India Circuit", "Comprehensive Tamil Nadu & Andhra temple and coastal journeys."]
		],
		packageNote: "All outstation packages can be tailored to your group size, travel dates, and hotel booking preferences.",
		steps: commonSteps,
		faqs: [...commonFaqs, ["How is outstation pricing calculated?", "Outstation tariffs are based on per-kilometre charges with a standard 300 km/day minimum billing. Tolls and state taxes apply as per actuals."]]
	},
	"balaji-darshan-packages": {
		title: "Tirumala Balaji Darshan Packages",
		eyebrow: "BALAJI DARSHAN & SACRED PILGRIMAGE",
		image: images.tirumala,
		intro: "Dedicated Tirumala Balaji Darshan packages engineered for devotees. Doorstep pickup from Tirupati Airport or Railway Station, smooth ghat road journey, Tirumala sightseeing, and return drop.",
		whyTitle: "Dedicated Transport Support for Tirumala Devotees",
		whyIntro: "We handle all local transport logistics so your focus remains entirely on Sri Venkateswara Swamy darshan.",
		vehicles: [
			[
				"Sedan (Dzire / Etios)",
				"4 Passengers • AC",
				"Tirupati to Tirumala Round Trip: ₹3,500"
			],
			[
				"MUV (Ertiga)",
				"6 Passengers • AC",
				"Tirupati to Tirumala Round Trip: ₹4,000"
			],
			[
				"SUV (Innova Crysta)",
				"7 Passengers • AC",
				"Tirupati to Tirumala Round Trip: ₹4,500"
			],
			[
				"Tempo Traveller",
				"12 Passengers • AC",
				"Tirupati to Tirumala Round Trip: ₹5,500"
			]
		],
		outstation: "Package covers airport/station pickup, Tirupati to Tirumala uphill & downhill transport, Tirumala local sightseeing (Akasa Ganga, Papavinasanam, Japali), and hotel/station drop.",
		highlights: [
			"Punctual Airport & Railway Station Pickup",
			"Experienced Tirumala Ghat Road Drivers",
			"Tirumala Sightseeing (Akasa Ganga, Papavinasanam, Japali)",
			"Tiruchanur Padmavathi Temple Visit Included",
			"Zero Booking Fee & Transparent Rates"
		],
		featureDetails: [
			["Arrival Pickup", "Driver greets you directly at Tirupati Airport or Railway Station with your name board."],
			["Ghat Road Expertise", "Licensed drivers skilled in navigating the Tirumala hill ghat roads safely."],
			["Tirumala Sights", "Visit sacred sites in Tirumala after your darshan sequence."],
			["Return Drop", "Flexible drop back at your hotel, station, or airport according to your return train/flight."]
		],
		packageNote: "Ensure you hold valid TTD Darshan tokens/tickets. Share your darshan slot timing for exact pickup coordination.",
		steps: commonSteps,
		faqs: [...commonFaqs, ["Do you provide TTD Darshan tickets?", "We provide vehicle and driver transport for Balaji Darshan. Devotees are advised to book TTD darshan tokens online in advance."]]
	},
	"corporate-packages": {
		title: "Corporate Travel Packages in Tirupati",
		eyebrow: "CORPORATE & BUSINESS TRAVEL",
		image: images.crysta,
		intro: "Executive corporate travel packages in Tirupati for business meetings, conferences, VIP airport transfers, executive roadshows, and employee group transportation.",
		whyTitle: "Professional Corporate Transport Solutions",
		whyIntro: "Punctual, discreet, and comfortable corporate cab services backed by GST billing support, clean sanitized vehicles, and trained professional chauffeurs.",
		vehicles: [
			[
				"Executive Sedan",
				"4 Passengers • AC • Leather Interior",
				"Corporate Day Rent from ₹3,000"
			],
			[
				"Toyota Innova Crysta",
				"7 Passengers • Premium Chauffeur",
				"Corporate Day Rent from ₹4,500"
			],
			[
				"Force Urbania",
				"12 / 16 Seater • Luxury Recliners",
				"VIP Executive Group Transfer"
			],
			[
				"AC Coach Bus",
				"27 / 40 / 50 Seater • Corporate Shuttle",
				"Event & Delegation Transport"
			]
		],
		outstation: "Custom corporate monthly retainers, city meeting shuttles, airport transfers, and outstation conference delegating transport available.",
		highlights: [
			"Punctual Airport & Station Chauffeurs",
			"Clean, Sanitized Executive Fleet",
			"GST Tax Invoice Support for Companies",
			"Flight Tracking & Delay Management",
			"Discreet & Professional Uniformed Chauffeurs"
		],
		featureDetails: [
			["Executive Transfers", "VIP pickup for clients and company executives."],
			["Event Logistics", "Coordinated group transportation for corporate seminars and retreats."],
			["Corporate Billing", "Structured invoicing with detailed trip logs for corporate accounts."]
		],
		packageNote: "Contact our corporate desk for long-term contract pricing and customized corporate itineraries.",
		steps: commonSteps,
		faqs: [...commonFaqs, ["Can we get GST invoices for corporate bookings?", "Yes. We provide official GST tax invoices for all corporate travel bookings."]]
	},
	"customized-packages": {
		title: "Customized Tour Packages from Tirupati",
		eyebrow: "TAILOR-MADE ITINERARIES",
		image: images.tempo12,
		intro: "Build your own tailor-made tour package from Tirupati. Choose your preferred vehicle, design your pilgrimage or holiday itinerary, set your own trip pace, and travel with complete flexibility.",
		whyTitle: "Your Itinerary, Your Vehicle, Your Pace",
		whyIntro: "Whether combining temple visits with coastal beaches or hill retreats, customize every single detail of your journey.",
		vehicles: [
			[
				"Compact Sedan (Etios/Dzire)",
				"Solo / Couples / Small Families",
				"Custom Quote Based on Route"
			],
			[
				"Spacious MUV (Ertiga)",
				"Family Groups (up to 6)",
				"Custom Quote Based on Route"
			],
			[
				"Luxury SUV (Innova Crysta)",
				"Premium Family & VIP Groups",
				"Custom Quote Based on Route"
			],
			[
				"Tempo Traveller / Urbania",
				"Medium & Large Groups (12–20)",
				"Custom Quote Based on Route"
			]
		],
		outstation: "Create 1-day to 7-day multi-destination circuits across Andhra Pradesh, Tamil Nadu, Karnataka, and Telangana.",
		highlights: [
			"100% Customized Route Planning",
			"Flexible Departure & Return Timings",
			"Choice of Vehicle Category & Capacity",
			"Add Heritage, Beach, Nature & Temple Stops",
			"Direct Chauffeur Communication"
		],
		featureDetails: [["Multi-State Circuits", "Combine Tirupati with Pondicherry, Kanchipuram, Mahabalipuram, or Srisailam."], ["Flexible Pacing", "Spend as much time as you desire at each destination without rigid tour bus schedules."]],
		packageNote: "Tell us your preferred destinations, passenger count, and travel dates to receive a instant tailor-made itinerary and fare estimate.",
		steps: commonSteps,
		faqs: [...commonFaqs, ["How do I create a customized tour package?", "Simply message us on WhatsApp with the places you want to visit and your passenger count. We will send a optimized route plan and quotation."]]
	},
	"holiday-packages": {
		title: "Holiday Tour Packages from Tirupati",
		eyebrow: "HOLIDAY & LEISURE TOURS",
		image: images.goldentemple,
		intro: "Exciting holiday tour packages connecting Tirupati with coastal beaches, heritage monuments, and hill stations across South India.",
		whyTitle: "Memorable Holiday Getaways with Private Cabs",
		whyIntro: "Relax with family and friends on weekend getaways to Pondicherry, Mahabalipuram, Horsley Hills, Bangalore, or Mysore.",
		vehicles: [
			[
				"Sedan (Etios / Dzire)",
				"4 Passengers • AC",
				"Holiday Packages from ₹9,500"
			],
			[
				"MUV (Ertiga)",
				"6 Passengers • AC",
				"Holiday Packages from ₹12,500"
			],
			[
				"SUV (Innova Crysta)",
				"7 Passengers • AC",
				"Holiday Packages from ₹15,000"
			],
			[
				"Tempo Traveller",
				"12 / 16 Seater • AC",
				"Holiday Packages from ₹18,500"
			]
		],
		outstation: "Packages include door-to-door private cab transport, sightseeing coverage, and flexible travel schedules for multi-day vacations.",
		highlights: [
			"Pondicherry French Colony & Promenade Beach",
			"Mahabalipuram Shore Temple & Monument Park",
			"Horsley Hills Nature & Hill Viewpoints",
			"Kanchipuram Heritage & Silk Tour",
			"Bangalore & Mysore Holiday Circuit"
		],
		featureDetails: [["Beach Getaways", "Pondicherry and Mahabalipuram coastal holiday packages."], ["Hill Retreats", "Scenic drive packages to Horsley Hills and Yelagiri."]],
		packageNote: "Customizable for weekend trips, long holidays, and festive vacations. Contact us for current holiday package pricing.",
		steps: commonSteps,
		faqs: [...commonFaqs, ["Can holiday packages include sightseeing and hotel drop?", "Yes. Packages include complete door-to-door sightseeing transport and drop at your chosen hotels."]]
	},
	"family-packages": {
		title: "Family Tour Packages from Tirupati",
		eyebrow: "FAMILY PILGRIMAGE & VACATIONS",
		image: images.ertiga,
		intro: "Comfort-focused family tour packages designed for multi-generational travel. Spacious AC vehicles, child & senior citizen friendly pacing, and door-to-door service.",
		whyTitle: "Safe & Relaxing Travel for the Entire Family",
		whyIntro: "We prioritize family comfort with clean sanitized interiors, gentle driving, luggage assistance, and flexible rest stops.",
		vehicles: [
			[
				"Maruti Ertiga (MUV)",
				"Ideal for 4–6 Family Members",
				"Local & Outstation Family Rates"
			],
			[
				"Toyota Innova Crysta (SUV)",
				"Ideal for 6–7 Family Members",
				"Premium Family Travel Rates"
			],
			[
				"Tempo Traveller (12/16 Seater)",
				"Ideal for Extended Joint Families",
				"Large Family Group Rates"
			]
		],
		outstation: "Family packages cover Tirupati, Tirumala, Srikalahasti, Kanipakam, Vellore Golden Temple, and custom multi-day family vacations.",
		highlights: [
			"Senior Citizen Friendly Pacing",
			"Clean Sanitized Vehicles",
			"Spacious Boot Space for Family Luggage",
			"Punctual Doorstep Pickup",
			"Flexible Meal & Rest Stops"
		],
		featureDetails: [["Comfort Driving", "Drivers trained to maintain smooth, steady speeds for family comfort."], ["Flexible Schedule", "Take breaks whenever kids or senior family members need rest."]],
		packageNote: "Customized for joint family trips, children, and elderly parents. Book your family cab package today.",
		steps: commonSteps,
		faqs: [...commonFaqs, ["Are the cabs comfortable for senior citizens?", "Yes! Our Ertiga, Innova Crysta, and Tempo Travellers feature low step-in heights, plush seating, and smooth suspension ideal for seniors."]]
	},
	"student-packages": {
		title: "Student Group Tour Packages in Tirupati",
		eyebrow: "STUDENT & EDUCATIONAL TOURS",
		image: images.bus40,
		intro: "Budget-friendly group tour packages for school and college educational trips, industrial visits, historical excursions, and student group pilgrimages from Tirupati.",
		whyTitle: "Safe, Affordable & Organized Student Group Travel",
		whyIntro: "Economical group tariffs using high-capacity Tempo Travellers and Buses with strict safety standards and experienced long-distance drivers.",
		vehicles: [
			[
				"Tempo Traveller (17/20 Seater)",
				"Medium Student Groups",
				"Economical Per-head Tariffs"
			],
			[
				"Mini Coach Bus (27 Seater)",
				"Class / Department Groups",
				"Group Rental Rates"
			],
			[
				"Luxury Coach Bus (40/50 Seater)",
				"Large Institutional Tours",
				"Bulk Educational Rates"
			]
		],
		outstation: "Packages cover local science centres, heritage sites, Srikalahasti, Vellore, Chennai, Pondicherry, and multi-day educational circuits.",
		highlights: [
			"Budget-Friendly Group Rates",
			"Experienced Long-Distance Drivers",
			"Strict Safety & Speed Limit Compliance",
			"High Passenger Capacity Fleet",
			"Customizable Educational Itineraries"
		],
		featureDetails: [["Educational Sightseeing", "Visits to Regional Science Centre, Chandragiri Fort, and historic sites."], ["Industrial & College Tours", "Transport for college industrial visits and inter-state student excursions."]],
		packageNote: "Special group discounts available for registered schools, colleges, and student organizations.",
		steps: commonSteps,
		faqs: [...commonFaqs, ["Do you offer discounts for student groups?", "Yes! We provide special discounted group tariffs for educational institutions and student excursions."]]
	},
	"wedding-packages": {
		title: "Wedding & Event Vehicle Packages in Tirupati",
		eyebrow: "WEDDING & EVENT TRANSPORT",
		image: images.crysta,
		intro: "Comprehensive vehicle fleet management for weddings, marriage functions, bride/groom bridal entry cars, guest airport transfers, and marriage hall shuttles in Tirupati.",
		whyTitle: "Smooth & Elegant Transportation for Your Big Day",
		whyIntro: "Ensure your wedding guests and family travel in luxury and comfort with dedicated chauffeurs and coordinated vehicle movement.",
		vehicles: [
			[
				"Bridal Luxury Cars",
				"Premium Chauffeur Driven Cars",
				"Bridal & Groom Entry Special"
			],
			[
				"Innova Crysta Fleet",
				"VIP & Close Family Mobility",
				"Wedding Event Day Rates"
			],
			[
				"Tempo Travellers / Urbania",
				"Guest Airport & Station Shuttles",
				"Group Shuttles"
			],
			[
				"AC Coach Buses (27–50 Seater)",
				"Marriage Hall Guest Shuttles",
				"Large Event Transportation"
			]
		],
		outstation: "Packages cover guest pickups from Tirupati Airport and Railway Station, hotel transfers, marriage hall shuttles, and post-wedding temple tours.",
		highlights: [
			"VIP & Bridal Luxury Vehicles",
			"Guest Airport & Station Pickup Coordination",
			"Marriage Hall & Hotel Shuttle Management",
			"Uniformed Chauffeurs & Clean Decorated Fleet",
			"Dedicated Transport Event Manager"
		],
		featureDetails: [["Guest Coordination", "Punctual group pickups from airport/station to wedding venues."], ["Venue Shuttles", "Continuous shuttle service between hotels and marriage halls for wedding guests."]],
		packageNote: "Share your wedding date, venue, guest count, and vehicle requirement for a customized wedding fleet quotation.",
		steps: commonSteps,
		faqs: [...commonFaqs, ["Can we book multiple vehicles for a wedding?", "Yes! We manage complete wedding fleets including cars, Tempo Travellers, and buses with dedicated transport coordination."]]
	},
	"devotional-packages": {
		title: "Devotional & Temple Pilgrimage Packages",
		eyebrow: "DEVOTIONAL & SHRINE CIRCUITS",
		image: images.srisailam,
		intro: "Sacred pilgrimage packages connecting Tirupati with South India’s most revered temples including Srikalahasti, Kanipakam, Vellore Golden Temple, Arunachalam, Kanchipuram, Srisailam, and Madurai.",
		whyTitle: "Sacred Journeys Designed for Devotees",
		whyIntro: "Travel peacefully with drivers who understand temple traditions, darshan timings, dress codes, and holy site routes.",
		vehicles: [
			[
				"AC Sedan (Etios / Dzire)",
				"4 Devotees • AC",
				"Pilgrimage Packages from ₹3,500"
			],
			[
				"AC MUV (Ertiga)",
				"6 Devotees • AC",
				"Pilgrimage Packages from ₹4,200"
			],
			[
				"AC SUV (Innova Crysta)",
				"7 Devotees • AC",
				"Pilgrimage Packages from ₹4,800"
			],
			[
				"AC Tempo Traveller",
				"12 / 16 Devotees • AC",
				"Pilgrimage Packages from ₹5,800"
			]
		],
		outstation: "Packages cover same-day pilgrimage tours as well as multi-day Pancha Linga, Jyotirlinga, and Char Dham sacred circuits.",
		highlights: [
			"Srikalahasti Rahu-Ketu Kshetram",
			"Kanipakam Varasiddhi Vinayaka Temple",
			"Vellore Sripuram Lakshmi Narayani Temple",
			"Tiruvannamalai Arunachaleswarar Agni Lingam",
			"Srisailam Mallikarjuna Swamy Jyotirlinga",
			"Kanchipuram & Madurai Meenakshi Amman"
		],
		featureDetails: [["Rahu-Ketu Pooja Travel", "Comfortable same-day cab package for Srikalahasti Rahu-Ketu pooja."], ["Sacred Pancha Linga Circuit", "Multi-day pilgrimage covering major Shiva & Vishnu shrines across AP & TN."]],
		packageNote: "Customizable according to your pilgrimage dates and pooja schedules. Contact us to reserve your devotional cab package.",
		steps: commonSteps,
		faqs: [...commonFaqs, ["Can driver guide us regarding temple timings?", "Yes! Our pilgrimage drivers are well-versed with temple opening hours, darshan queues, and local customs."]]
	}
};
Object.entries(servicePages).map(([slug, data]) => ({
	slug,
	title: data.eyebrow ? data.eyebrow.split("–")[0].split("|")[0].trim() : data.title.split("–")[0].trim()
}));
//#endregion
//#region src/data/exportAll.js
var exportedData = {
	fleet,
	tours,
	destinations,
	blogPosts,
	cabRoutes,
	servicePages
};
//#endregion
export { exportedData };
