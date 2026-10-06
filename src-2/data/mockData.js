// BookMyShow Comprehensive Mock Data
// Conforms to Class Diagram and SRS Data Dictionary

export const INITIAL_CITIES = [
  'Mumbai',
  'Delhi-NCR',
  'Bengaluru',
  'Hyderabad',
  'Pune',
  'Chennai',
  'Kolkata',
  'Ahmedabad',
];

export const INITIAL_CATEGORIES = [
  { categoryId: 1, name: 'Movies', description: 'Latest Bollywood, Hollywood & Regional blockbusters' },
  { categoryId: 2, name: 'Events', description: 'Music concerts, festivals & live experiences' },
  { categoryId: 3, name: 'Plays', description: 'Theatre productions, dramas and live acts' },
  { categoryId: 4, name: 'Sports', description: 'Cricket, Football & live stadium games' },
  { categoryId: 5, name: 'Standup Comedy', description: 'Laugh riots from top Indian comics' },
];

export const INITIAL_MOVIES = [
  {
    id: 'm1',
    type: 'movie',
    title: 'Kalki 2898 AD',
    category: 'Movies',
    description: 'In a dystopian world inspired by Hindu mythology, a modern avatar of Vishnu descends to protect mankind from evil forces led by Supreme Yaskin in the year 2898 AD.',
    duration: 180, // minutes
    posterUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop&q=80',
    language: 'Hindi',
    availableLanguages: ['Hindi', 'Telugu', 'Tamil', 'English'],
    genre: 'Sci-Fi / Action',
    genres: ['Sci-Fi', 'Action', 'Mythology'],
    releaseDate: '2026-06-27',
    certification: 'U/A 16+',
    cast: [
      { name: 'Prabhas', role: 'Bhairava' },
      { name: 'Amitabh Bachchan', role: 'Ashwatthama' },
      { name: 'Deepika Padukone', role: 'SUM-80' },
      { name: 'Kamal Haasan', role: 'Supreme Yaskin' }
    ],
    director: 'Nag Ashwin',
    rating: 8.9,
    votesCount: 245800,
    formats: ['2D', '3D', 'IMAX 3D'],
    isActive: true,
  },
  {
    id: 'm2',
    type: 'movie',
    title: 'Stree 2: Sarkate Ka Aatank',
    category: 'Movies',
    description: 'The horror-comedy universe returns as Chanderi is haunted by a headless demon Sarkate. Vicky and his gang team up with Stree to save the town once again.',
    duration: 148,
    posterUrl: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?w=600&auto=format&fit=crop&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&auto=format&fit=crop&q=80',
    language: 'Hindi',
    availableLanguages: ['Hindi'],
    genre: 'Comedy / Horror',
    genres: ['Comedy', 'Horror'],
    releaseDate: '2026-08-15',
    certification: 'U/A 13+',
    cast: [
      { name: 'Rajkummar Rao', role: 'Vicky' },
      { name: 'Shraddha Kapoor', role: 'Unknown Girl' },
      { name: 'Pankaj Tripathi', role: 'Rudra Bhaiya' },
      { name: 'Abhishek Banerjee', role: 'Jana' }
    ],
    director: 'Amar Kaushik',
    rating: 9.1,
    votesCount: 312000,
    formats: ['2D', '4DX'],
    isActive: true,
  },
  {
    id: 'm3',
    type: 'movie',
    title: 'Interstellar: 10th Anniversary Edition',
    category: 'Movies',
    description: 'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft along with a team of researchers to find a new planet for humans.',
    duration: 169,
    posterUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&auto=format&fit=crop&q=80',
    language: 'English',
    availableLanguages: ['English', 'Hindi'],
    genre: 'Sci-Fi / Drama',
    genres: ['Sci-Fi', 'Adventure', 'Drama'],
    releaseDate: '2026-09-20',
    certification: 'U/A',
    cast: [
      { name: 'Matthew McConaughey', role: 'Cooper' },
      { name: 'Anne Hathaway', role: 'Brand' },
      { name: 'Jessica Chastain', role: 'Murph' },
      { name: 'Michael Caine', role: 'Professor Brand' }
    ],
    director: 'Christopher Nolan',
    rating: 9.4,
    votesCount: 520400,
    formats: ['IMAX 70mm', 'IMAX 2D', '2D'],
    isActive: true,
  },
  {
    id: 'm4',
    type: 'movie',
    title: 'Jawan: Extended Cut',
    category: 'Movies',
    description: 'A high-octane action thriller outlining the emotional journey of a prison warden driven by a personal vendetta while keeping a promise made years ago to fight societal corruption.',
    duration: 172,
    posterUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&auto=format&fit=crop&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&auto=format&fit=crop&q=80',
    language: 'Hindi',
    availableLanguages: ['Hindi', 'Tamil', 'Telugu'],
    genre: 'Action / Thriller',
    genres: ['Action', 'Thriller', 'Drama'],
    releaseDate: '2026-05-10',
    certification: 'U/A 16+',
    cast: [
      { name: 'Shah Rukh Khan', role: 'Vikram Rathore / Azad' },
      { name: 'Nayanthara', role: 'Narmada Rai' },
      { name: 'Vijay Sethupathi', role: 'Kaleeswaran' },
      { name: 'Deepika Padukone', role: 'Aishwarya Rathore' }
    ],
    director: 'Atlee Kumar',
    rating: 8.6,
    votesCount: 198000,
    formats: ['2D', '4DX', 'IMAX 2D'],
    isActive: true,
  },
  {
    id: 'e1',
    type: 'event',
    title: 'Coldplay: Music of the Spheres World Tour',
    category: 'Events',
    description: 'Global musical phenomenon Coldplay brings their monumental stadium production featuring Chris Martin, laser spectacles, eco-kinetic power stages, and timeless anthems.',
    duration: 150,
    posterUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&auto=format&fit=crop&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1200&auto=format&fit=crop&q=80',
    language: 'English',
    availableLanguages: ['English'],
    genre: 'Live Concert / Rock',
    genres: ['Music', 'Concert', 'Pop Rock'],
    releaseDate: '2026-11-15',
    certification: 'U',
    cast: [
      { name: 'Chris Martin', role: 'Lead Vocalist' },
      { name: 'Jonny Buckland', role: 'Lead Guitarist' },
      { name: 'Guy Berryman', role: 'Bassist' },
      { name: 'Will Champion', role: 'Drummer' }
    ],
    director: 'Phil Harvey',
    rating: 9.8,
    votesCount: 94000,
    formats: ['Live Arena', 'VIP Lounge'],
    isActive: true,
  },
  {
    id: 'e2',
    type: 'event',
    title: 'Zakir Khan: Papa Bolte Hain Live',
    category: 'Standup Comedy',
    description: 'The Sakht Launda returns with his heartwarming storytelling and unfiltered humor on family relations, Indian fathers, and bittersweet coming of age.',
    duration: 110,
    posterUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=1200&auto=format&fit=crop&q=80',
    language: 'Hindi',
    availableLanguages: ['Hindi'],
    genre: 'Standup Comedy',
    genres: ['Comedy', 'Live Performance'],
    releaseDate: '2026-10-25',
    certification: '16+',
    cast: [
      { name: 'Zakir Khan', role: 'Standup Comedian' }
    ],
    director: 'Zakir Khan Productions',
    rating: 9.5,
    votesCount: 68400,
    formats: ['Auditorium Live'],
    isActive: true,
  }
];

export const INITIAL_VENUES = [
  // Mumbai
  {
    venueId: 'v1',
    name: 'PVR ICON: Phoenix Palladium, Lower Parel',
    address: 'High Street Phoenix, Senapati Bapat Marg, Lower Parel',
    city: 'Mumbai',
    screens: [
      { screenId: 's1', name: 'Audi 1 - IMAX with Laser', capacity: 60, type: 'IMAX' },
      { screenId: 's2', name: 'Audi 2 - Dolby Atmos 4K', capacity: 60, type: 'Standard' },
      { screenId: 's3', name: 'Audi 3 - PVR LUXE Gold Class', capacity: 40, type: 'Gold Class' },
    ]
  },
  {
    venueId: 'v2',
    name: 'INOX Megaplex: R City Mall, Ghatkopar',
    address: '3rd Floor, R City Mall, LBS Marg, Ghatkopar West',
    city: 'Mumbai',
    screens: [
      { screenId: 's4', name: 'Screen 1 - Insignia', capacity: 50, type: 'Gold Class' },
      { screenId: 's5', name: 'Screen 2 - MX4D Motion', capacity: 60, type: '4DX' },
    ]
  },
  {
    venueId: 'v3',
    name: 'Cinepolis: Fun Republic, Andheri West',
    address: 'Fun Republic Mall, Link Road, Andheri West',
    city: 'Mumbai',
    screens: [
      { screenId: 's6', name: 'Audi 1 - RealD 3D', capacity: 60, type: 'Standard' },
      { screenId: 's7', name: 'Audi 2 - VIP Lounge', capacity: 40, type: 'Gold Class' }
    ]
  },

  // Delhi-NCR
  {
    venueId: 'v4',
    name: 'PVR Directors Cut: Ambience Mall, Vasant Kunj',
    address: 'Ambience Mall, Nelson Mandela Marg, Vasant Kunj II',
    city: 'Delhi-NCR',
    screens: [
      { screenId: 's8', name: 'Audi 1 - Ultra Luxury', capacity: 50, type: 'Gold Class' },
      { screenId: 's9', name: 'Audi 2 - IMAX Laser', capacity: 60, type: 'IMAX' }
    ]
  },
  {
    venueId: 'v5',
    name: 'Cinepolis: DLF Avenue, Saket',
    address: 'DLF Avenue Mall, Press Enclave Marg, Saket',
    city: 'Delhi-NCR',
    screens: [
      { screenId: 's10', name: 'Audi 1 - Macro XE', capacity: 60, type: 'Standard' },
    ]
  },

  // Bengaluru
  {
    venueId: 'v6',
    name: 'PVR Superplex: Forum Mall, Koramangala',
    address: 'Hosur Road, Chikku Lakshmaiah Layout, Koramangala',
    city: 'Bengaluru',
    screens: [
      { screenId: 's11', name: 'Audi 1 - IMAX Laser', capacity: 60, type: 'IMAX' },
      { screenId: 's12', name: 'Audi 2 - 4DX Dynamic', capacity: 50, type: '4DX' },
    ]
  },

  // Hyderabad
  {
    venueId: 'v7',
    name: 'Prasads Multiplex: IMAX Road, NTR Gardens',
    address: 'Khairatabad, NTR Gardens, Hyderabad',
    city: 'Hyderabad',
    screens: [
      { screenId: 's13', name: 'Screen 6 - Giant Screen Large Format', capacity: 60, type: 'IMAX' },
    ]
  },

  // Pune
  {
    venueId: 'v8',
    name: 'PVR Phoenix Marketcity: Viman Nagar',
    address: 'S No 207, Viman Nagar Road, Pune',
    city: 'Pune',
    screens: [
      { screenId: 's14', name: 'Audi 1 - Dolby Atmos', capacity: 60, type: 'Standard' }
    ]
  }
];

// Helper to generate seat matrix for a screen (Rows A to F, 10 columns each = 60 seats)
export const generateSeatLayout = (screenId, showId) => {
  const rows = [
    { row: 'A', tier: 'Recliner', price: 420 },
    { row: 'B', tier: 'Recliner', price: 420 },
    { row: 'C', tier: 'Prime', price: 260 },
    { row: 'D', tier: 'Prime', price: 260 },
    { row: 'E', tier: 'Classic', price: 160 },
    { row: 'F', tier: 'Classic', price: 160 },
  ];

  const seats = [];
  rows.forEach((r) => {
    for (let c = 1; c <= 10; c++) {
      const seatNumber = `${r.row}${c}`;
      // Pre-seed some booked seats based on deterministic pattern
      const isPreBooked = (c === 3 && r.row === 'D') || (c === 4 && r.row === 'D') || (c === 5 && r.row === 'B') || (c === 6 && r.row === 'B');
      seats.push({
        seatId: `${showId}-${seatNumber}`,
        row: r.row,
        col: c,
        seatNumber,
        tier: r.tier,
        price: r.price,
        status: isPreBooked ? 'booked' : 'available',
      });
    }
  });
  return seats;
};

// Initial Shows
export const INITIAL_SHOWS = [
  {
    showId: 'sh1',
    eventId: 'm1', // Kalki
    venueId: 'v1', // PVR Lower Parel
    screenId: 's1',
    showDate: new Date().toISOString().split('T')[0], // Today
    showTime: '10:15 AM',
    format: 'IMAX 3D',
    basePrice: 380,
    availableSeats: 56,
    totalSeats: 60,
    occupancyRate: 7, // %
    dynamicMultiplier: 1.0,
  },
  {
    showId: 'sh2',
    eventId: 'm1',
    venueId: 'v1',
    screenId: 's1',
    showDate: new Date().toISOString().split('T')[0],
    showTime: '02:30 PM',
    format: 'IMAX 3D',
    basePrice: 420,
    availableSeats: 48,
    totalSeats: 60,
    occupancyRate: 20,
    dynamicMultiplier: 1.0,
  },
  {
    showId: 'sh3',
    eventId: 'm1',
    venueId: 'v1',
    screenId: 's1',
    showDate: new Date().toISOString().split('T')[0],
    showTime: '06:45 PM',
    format: 'IMAX 3D',
    basePrice: 480,
    availableSeats: 8, // Fast filling / high occupancy!
    totalSeats: 60,
    occupancyRate: 87, // Triggers dynamic auto-scaler (>85%)!
    dynamicMultiplier: 1.25,
  },
  {
    showId: 'sh4',
    eventId: 'm1',
    venueId: 'v1',
    screenId: 's2',
    showDate: new Date().toISOString().split('T')[0],
    showTime: '09:45 PM',
    format: '2D Dolby',
    basePrice: 320,
    availableSeats: 42,
    totalSeats: 60,
    occupancyRate: 30,
    dynamicMultiplier: 1.0,
  },

  // Stree 2
  {
    showId: 'sh5',
    eventId: 'm2',
    venueId: 'v2', // INOX Ghatkopar
    screenId: 's4',
    showDate: new Date().toISOString().split('T')[0],
    showTime: '01:00 PM',
    format: '2D',
    basePrice: 280,
    availableSeats: 52,
    totalSeats: 60,
    occupancyRate: 13,
    dynamicMultiplier: 1.0,
  },
  {
    showId: 'sh6',
    eventId: 'm2',
    venueId: 'v2',
    screenId: 's5',
    showDate: new Date().toISOString().split('T')[0],
    showTime: '07:15 PM',
    format: '4DX',
    basePrice: 350,
    availableSeats: 6, // High occupancy
    totalSeats: 60,
    occupancyRate: 90,
    dynamicMultiplier: 1.25,
  },

  // Interstellar
  {
    showId: 'sh7',
    eventId: 'm3',
    venueId: 'v1',
    screenId: 's1',
    showDate: new Date().toISOString().split('T')[0],
    showTime: '11:00 PM',
    format: 'IMAX 70mm',
    basePrice: 500,
    availableSeats: 22,
    totalSeats: 60,
    occupancyRate: 63,
    dynamicMultiplier: 1.1,
  },

  // Coldplay Concert
  {
    showId: 'sh8',
    eventId: 'e1',
    venueId: 'v1',
    screenId: 's1',
    showDate: '2026-11-15',
    showTime: '06:00 PM',
    format: 'Live Arena',
    basePrice: 2500,
    availableSeats: 12,
    totalSeats: 60,
    occupancyRate: 80,
    dynamicMultiplier: 1.2,
  },

  // Zakir Khan
  {
    showId: 'sh9',
    eventId: 'e2',
    venueId: 'v3',
    screenId: 's6',
    showDate: '2026-10-25',
    showTime: '07:30 PM',
    format: 'Auditorium Live',
    basePrice: 999,
    availableSeats: 35,
    totalSeats: 60,
    occupancyRate: 42,
    dynamicMultiplier: 1.0,
  }
];

export const INITIAL_FNB = [
  {
    id: 'fnb1',
    name: 'Combo 1: Popcorn (Reg) + Coke 400ml',
    category: 'Combos',
    price: 320,
    image: '🍿',
    description: 'Hot salted popcorn with refreshing chilled Coca Cola.'
  },
  {
    id: 'fnb2',
    name: 'Combo 2: Caramel Popcorn (L) + 2 Cokes',
    category: 'Combos',
    price: 540,
    image: '🍿🥤',
    description: 'Sweet crunch gourmet caramel popcorn paired with 2 beverages.'
  },
  {
    id: 'fnb3',
    name: 'Cheese Nachos with Mexican Salsa',
    category: 'Snacks',
    price: 290,
    image: '🌮',
    description: 'Crispy corn tortilla chips topped with molten warm cheese & salsa.'
  },
  {
    id: 'fnb4',
    name: 'Gourmet Cold Coffee Blend (300ml)',
    category: 'Beverages',
    price: 180,
    image: '☕',
    description: 'Handcrafted chilled Arabica brew bottle.'
  }
];

export const DEMO_USERS = [
  {
    userId: 'u1',
    name: 'Sahil Sharma',
    email: 'customer@bms.com',
    phone: '+91 98765 43210',
    passwordHash: 'password123',
    role: 'customer',
    city: 'Mumbai',
    dateOfBirth: '2001-08-14',
    gender: 'Male',
    isActive: true,
    notificationPrefs: { email: true, sms: true, push: true }
  },
  {
    userId: 'u2',
    name: 'Dhruv Jagare',
    email: 'admin@bms.com',
    phone: '+91 98765 11111',
    passwordHash: 'admin123',
    role: 'admin',
    adminLevel: 'SuperAdmin',
    city: 'Mumbai',
    dateOfBirth: '1998-05-22',
    gender: 'Male',
    isActive: true,
    notificationPrefs: { email: true, sms: true, push: true }
  },
  {
    userId: 'u3',
    name: 'Rahul Verma',
    email: 'staff@bms.com',
    phone: '+91 98765 22222',
    passwordHash: 'staff123',
    role: 'staff',
    staffId: 5041,
    city: 'Mumbai',
    dateOfBirth: '2000-01-11',
    gender: 'Male',
    isActive: true,
    notificationPrefs: { email: true, sms: true, push: false }
  }
];

export const INITIAL_BOOKINGS = [
  {
    bookingId: 'BMS-918234',
    userId: 'u1',
    showId: 'sh2',
    eventId: 'm1',
    movieTitle: 'Kalki 2898 AD',
    venueName: 'PVR ICON: Phoenix Palladium, Lower Parel',
    screenName: 'Audi 1 - IMAX with Laser',
    city: 'Mumbai',
    showDateTime: `${new Date().toISOString().split('T')[0]} 02:30 PM`,
    format: 'IMAX 3D',
    seats: [
      { seatNumber: 'C4', tier: 'Prime', price: 260 },
      { seatNumber: 'C5', tier: 'Prime', price: 260 },
    ],
    baseAmount: 520,
    convenienceFee: 50,
    gstAmount: 9,
    fnbTotal: 320,
    fnbItems: [{ id: 'fnb1', name: 'Combo 1: Popcorn + Coke', quantity: 1, price: 320 }],
    totalAmount: 899,
    status: 'confirmed',
    paymentId: 'pay_984712039',
    paymentMethod: 'UPI (Google Pay)',
    qrCodePayload: JSON.stringify({
      bId: 'BMS-918234',
      m: 'Kalki 2898 AD',
      v: 'PVR Palladium',
      s: ['C4', 'C5'],
      t: '02:30 PM',
      uid: 'u1'
    }),
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
    isRedeemed: false,
  },
  {
    bookingId: 'BMS-654812',
    userId: 'u1',
    showId: 'sh5',
    eventId: 'm2',
    movieTitle: 'Stree 2: Sarkate Ka Aatank',
    venueName: 'INOX Megaplex: R City Mall, Ghatkopar',
    screenName: 'Screen 1 - Insignia',
    city: 'Mumbai',
    showDateTime: '2026-10-02 07:15 PM',
    format: '4DX',
    seats: [
      { seatNumber: 'A1', tier: 'Recliner', price: 420 },
    ],
    baseAmount: 420,
    convenienceFee: 25,
    gstAmount: 4.5,
    fnbTotal: 0,
    fnbItems: [],
    totalAmount: 449.5,
    status: 'completed',
    paymentId: 'pay_482910482',
    paymentMethod: 'Credit Card',
    qrCodePayload: JSON.stringify({
      bId: 'BMS-654812',
      m: 'Stree 2',
      v: 'INOX R City',
      s: ['A1'],
      t: '07:15 PM',
      uid: 'u1'
    }),
    createdAt: '2026-10-02T12:00:00Z',
    isRedeemed: true,
  }
];

export const INITIAL_REVIEWS = [
  {
    reviewId: 'rev1',
    eventId: 'm1',
    userId: 'u1',
    userName: 'Sahil S.',
    rating: 5,
    title: 'Mindblowing Visual Masterpiece!',
    comment: 'The VFX in IMAX 3D is on par with Hollywood. Amitabh Bachchan as Ashwatthama steals every single frame. Absolute cinematic brilliance!',
    date: '2026-10-04',
    status: 'approved'
  },
  {
    reviewId: 'rev2',
    eventId: 'm2',
    userId: 'u4',
    userName: 'Priya M.',
    rating: 5,
    title: 'Pure Entertainment & Laughs',
    comment: 'Pankaj Tripathi and Rajkummar Rao chemistry is unbeatable. The theatre was roaring with laughter from start to end!',
    date: '2026-10-03',
    status: 'approved'
  }
];

export const INITIAL_AUDIT_LOGS = [
  {
    id: 'log1',
    timestamp: '2026-10-06 09:15:20',
    actor: 'System Automation',
    action: 'Dynamic Tariff Evaluation',
    details: 'Occupancy for Kalki 2898 AD (06:45 PM Audi 1) crossed 85%. Multiplier adjusted to 1.25x.'
  },
  {
    id: 'log2',
    timestamp: '2026-10-06 09:20:00',
    actor: 'Dhruv Jagare (Admin)',
    action: 'Show Schedule Created',
    details: 'Scheduled Stree 2: Sarkate Ka Aatank on Screen 2 (INOX R City) for 07:15 PM.'
  }
];
