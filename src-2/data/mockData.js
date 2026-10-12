// BookMyShow Comprehensive Mock Data
// Auto-generated 50 top-tier cinematic releases with shows and seating layouts

const todayIso = new Date().toISOString().split('T')[0];

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
    "id": "m1",
    "type": "movie",
    "title": "Kalki 2898 AD",
    "category": "Movies",
    "description": "In a dystopian world inspired by Hindu mythology, a modern avatar of Vishnu descends to protect mankind from evil forces led by Supreme Yaskin in the year 2898 AD.",
    "duration": 180,
    "language": "Hindi",
    "availableLanguages": [
      "Hindi",
      "Telugu",
      "Tamil",
      "English"
    ],
    "genre": "Sci-Fi / Action",
    "genres": [
      "Sci-Fi",
      "Action",
      "Mythology"
    ],
    "releaseDate": "2026-06-27",
    "certification": "U/A 16+",
    "cast": [
      {
        "name": "Prabhas",
        "role": "Bhairava"
      },
      {
        "name": "Amitabh Bachchan",
        "role": "Ashwatthama"
      },
      {
        "name": "Deepika Padukone",
        "role": "SUM-80"
      },
      {
        "name": "Kamal Haasan",
        "role": "Supreme Yaskin"
      }
    ],
    "director": "Nag Ashwin",
    "rating": 8.9,
    "votesCount": 245800,
    "formats": [
      "2D",
      "3D",
      "IMAX 3D"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m2",
    "type": "movie",
    "title": "Stree 2: Sarkate Ka Aatank",
    "category": "Movies",
    "description": "The horror-comedy universe returns as Chanderi is haunted by a headless demon Sarkate. Vicky and his gang team up with Stree to save the town once again.",
    "duration": 148,
    "language": "Hindi",
    "availableLanguages": [
      "Hindi"
    ],
    "genre": "Comedy / Horror",
    "genres": [
      "Comedy",
      "Horror"
    ],
    "releaseDate": "2026-08-15",
    "certification": "U/A 13+",
    "cast": [
      {
        "name": "Rajkummar Rao",
        "role": "Vicky"
      },
      {
        "name": "Shraddha Kapoor",
        "role": "Unknown Girl"
      },
      {
        "name": "Pankaj Tripathi",
        "role": "Rudra Bhaiya"
      },
      {
        "name": "Abhishek Banerjee",
        "role": "Jana"
      }
    ],
    "director": "Amar Kaushik",
    "rating": 9.1,
    "votesCount": 312000,
    "formats": [
      "2D",
      "4DX"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m3",
    "type": "movie",
    "title": "Interstellar: 10th Anniversary Edition",
    "category": "Movies",
    "description": "When Earth becomes uninhabitable, pilot Joseph Cooper and a team of researchers venture through a wormhole across the stars in search of humanity’s new home.",
    "duration": 169,
    "language": "English",
    "availableLanguages": [
      "English",
      "Hindi"
    ],
    "genre": "Sci-Fi / Drama",
    "genres": [
      "Sci-Fi",
      "Adventure",
      "Drama"
    ],
    "releaseDate": "2026-09-20",
    "certification": "U/A",
    "cast": [
      {
        "name": "Matthew McConaughey",
        "role": "Cooper"
      },
      {
        "name": "Anne Hathaway",
        "role": "Brand"
      },
      {
        "name": "Jessica Chastain",
        "role": "Murph"
      }
    ],
    "director": "Christopher Nolan",
    "rating": 9.4,
    "votesCount": 520400,
    "formats": [
      "IMAX 70mm",
      "IMAX 2D",
      "2D"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m4",
    "type": "movie",
    "title": "Jawan: Extended Cut",
    "category": "Movies",
    "description": "A high-octane emotional journey of a prison warden driven by a personal vendetta to right the societal wrongs and fight corrupt corporate tycoons.",
    "duration": 172,
    "language": "Hindi",
    "availableLanguages": [
      "Hindi",
      "Tamil",
      "Telugu"
    ],
    "genre": "Action / Thriller",
    "genres": [
      "Action",
      "Thriller",
      "Drama"
    ],
    "releaseDate": "2026-05-10",
    "certification": "U/A 16+",
    "cast": [
      {
        "name": "Shah Rukh Khan",
        "role": "Vikram / Azad"
      },
      {
        "name": "Nayanthara",
        "role": "Narmada"
      },
      {
        "name": "Vijay Sethupathi",
        "role": "Kaleeswaran"
      }
    ],
    "director": "Atlee Kumar",
    "rating": 8.6,
    "votesCount": 198000,
    "formats": [
      "2D",
      "4DX",
      "IMAX 2D"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m5",
    "type": "movie",
    "title": "Pushpa 2: The Rule",
    "category": "Movies",
    "description": "Pushpa Raj solidifies his rule over the red sandalwood smuggling empire while confronting formidable police officer Bhanwar Singh Shekhawat.",
    "duration": 195,
    "language": "Telugu",
    "availableLanguages": [
      "Telugu",
      "Hindi",
      "Tamil",
      "Malayalam"
    ],
    "genre": "Action / Crime",
    "genres": [
      "Action",
      "Crime",
      "Thriller"
    ],
    "releaseDate": "2026-12-05",
    "certification": "A",
    "cast": [
      {
        "name": "Allu Arjun",
        "role": "Pushpa Raj"
      },
      {
        "name": "Rashmika Mandanna",
        "role": "Srivalli"
      },
      {
        "name": "Fahadh Faasil",
        "role": "Bhanwar Singh"
      }
    ],
    "director": "Sukumar",
    "rating": 9.2,
    "votesCount": 420000,
    "formats": [
      "2D",
      "IMAX 2D",
      "4DX"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m6",
    "type": "movie",
    "title": "Deadpool & Wolverine",
    "category": "Movies",
    "description": "The Time Variance Authority pulls Wade Wilson out of his quiet life, teaming him up with a reluctant Wolverine on a mission that changes the MCU multiverse.",
    "duration": 128,
    "language": "English",
    "availableLanguages": [
      "English",
      "Hindi",
      "Tamil",
      "Telugu"
    ],
    "genre": "Action / Comedy",
    "genres": [
      "Action",
      "Comedy",
      "Sci-Fi"
    ],
    "releaseDate": "2026-07-26",
    "certification": "A",
    "cast": [
      {
        "name": "Ryan Reynolds",
        "role": "Wade Wilson / Deadpool"
      },
      {
        "name": "Hugh Jackman",
        "role": "Logan / Wolverine"
      },
      {
        "name": "Emma Corrin",
        "role": "Cassandra Nova"
      }
    ],
    "director": "Shawn Levy",
    "rating": 8.8,
    "votesCount": 360000,
    "formats": [
      "3D",
      "IMAX 3D",
      "4DX",
      "2D"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m7",
    "type": "movie",
    "title": "Dune: Part Two",
    "category": "Movies",
    "description": "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family in an epic galactic war.",
    "duration": 166,
    "language": "English",
    "availableLanguages": [
      "English",
      "Hindi"
    ],
    "genre": "Sci-Fi / Adventure",
    "genres": [
      "Sci-Fi",
      "Adventure",
      "Drama"
    ],
    "releaseDate": "2026-03-01",
    "certification": "U/A 16+",
    "cast": [
      {
        "name": "Timothée Chalamet",
        "role": "Paul Atreides"
      },
      {
        "name": "Zendaya",
        "role": "Chani"
      },
      {
        "name": "Rebecca Ferguson",
        "role": "Lady Jessica"
      },
      {
        "name": "Austin Butler",
        "role": "Feyd-Rautha"
      }
    ],
    "director": "Denis Villeneuve",
    "rating": 9.3,
    "votesCount": 480000,
    "formats": [
      "IMAX 2D",
      "4DX",
      "Dolby Atmos"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m8",
    "type": "movie",
    "title": "Oppenheimer",
    "category": "Movies",
    "description": "The monumental biographical story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during Project Manhattan.",
    "duration": 180,
    "language": "English",
    "availableLanguages": [
      "English",
      "Hindi"
    ],
    "genre": "Biography / Drama",
    "genres": [
      "Biography",
      "Drama",
      "History"
    ],
    "releaseDate": "2026-07-21",
    "certification": "R / A",
    "cast": [
      {
        "name": "Cillian Murphy",
        "role": "J. Robert Oppenheimer"
      },
      {
        "name": "Emily Blunt",
        "role": "Kitty Oppenheimer"
      },
      {
        "name": "Matt Damon",
        "role": "Leslie Groves"
      },
      {
        "name": "Robert Downey Jr.",
        "role": "Lewis Strauss"
      }
    ],
    "director": "Christopher Nolan",
    "rating": 9.2,
    "votesCount": 610000,
    "formats": [
      "IMAX 70mm",
      "IMAX 2D",
      "2D"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m9",
    "type": "movie",
    "title": "Animal: Director’s Cut",
    "category": "Movies",
    "description": "A dark, intense tale exploring the toxic, obsessive dynamic between a powerful industrialist and his son who embarks on a vicious path of blood and vengeance.",
    "duration": 204,
    "language": "Hindi",
    "availableLanguages": [
      "Hindi",
      "Telugu",
      "Tamil"
    ],
    "genre": "Action / Crime",
    "genres": [
      "Action",
      "Crime",
      "Drama"
    ],
    "releaseDate": "2026-12-01",
    "certification": "A",
    "cast": [
      {
        "name": "Ranbir Kapoor",
        "role": "Ranvijay Singh"
      },
      {
        "name": "Anil Kapoor",
        "role": "Balbir Singh"
      },
      {
        "name": "Bobby Deol",
        "role": "Abrar Haque"
      },
      {
        "name": "Rashmika Mandanna",
        "role": "Geetanjali"
      }
    ],
    "director": "Sandeep Reddy Vanga",
    "rating": 8.4,
    "votesCount": 290000,
    "formats": [
      "2D",
      "IMAX 2D"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m10",
    "type": "movie",
    "title": "Fighter",
    "category": "Movies",
    "description": "Top Indian Air Force aviators come together in the face of imminent peril to form Air Dragons, conducting daring surgical strikes to defend the nation.",
    "duration": 166,
    "language": "Hindi",
    "availableLanguages": [
      "Hindi"
    ],
    "genre": "Action / Thriller",
    "genres": [
      "Action",
      "Thriller",
      "Patriotic"
    ],
    "releaseDate": "2026-01-25",
    "certification": "U/A",
    "cast": [
      {
        "name": "Hrithik Roshan",
        "role": "Shamsher Pathania (Patty)"
      },
      {
        "name": "Deepika Padukone",
        "role": "Minal Rathore (Minni)"
      },
      {
        "name": "Anil Kapoor",
        "role": "Rakesh Jaisingh (Rocky)"
      }
    ],
    "director": "Siddharth Anand",
    "rating": 8.2,
    "votesCount": 165000,
    "formats": [
      "3D",
      "IMAX 3D",
      "4DX",
      "2D"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m11",
    "type": "movie",
    "title": "12th Fail",
    "category": "Movies",
    "description": "Based on the inspiring real-life journey of IPS officer Manoj Kumar Sharma, who restarts his academic journey against extreme poverty to crack the UPSC exam.",
    "duration": 147,
    "language": "Hindi",
    "availableLanguages": [
      "Hindi",
      "Tamil",
      "Telugu"
    ],
    "genre": "Drama / Biography",
    "genres": [
      "Drama",
      "Biography",
      "Inspirational"
    ],
    "releaseDate": "2026-10-27",
    "certification": "U",
    "cast": [
      {
        "name": "Vikrant Massey",
        "role": "Manoj Kumar Sharma"
      },
      {
        "name": "Medha Shankr",
        "role": "Shraddha Joshi"
      },
      {
        "name": "Anant V Joshi",
        "role": "Pritam Pandey"
      }
    ],
    "director": "Vidhu Vinod Chopra",
    "rating": 9.5,
    "votesCount": 380000,
    "formats": [
      "2D"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m12",
    "type": "movie",
    "title": "Shaitaan",
    "category": "Movies",
    "description": "A family’s idyllic weekend retreat turns into a chilling nightmare when an enigmatic stranger uses black magic hypnosis to take control of their teenage daughter.",
    "duration": 132,
    "language": "Hindi",
    "availableLanguages": [
      "Hindi"
    ],
    "genre": "Horror / Thriller",
    "genres": [
      "Horror",
      "Supernatural",
      "Thriller"
    ],
    "releaseDate": "2026-03-08",
    "certification": "U/A 16+",
    "cast": [
      {
        "name": "Ajay Devgn",
        "role": "Kabir"
      },
      {
        "name": "R. Madhavan",
        "role": "Vanraj"
      },
      {
        "name": "Jyothika",
        "role": "Jyoti"
      },
      {
        "name": "Janki Bodiwala",
        "role": "Jhanvi"
      }
    ],
    "director": "Vikas Bahl",
    "rating": 8.1,
    "votesCount": 142000,
    "formats": [
      "2D"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m13",
    "type": "movie",
    "title": "Bhool Bhulaiyaa 3",
    "category": "Movies",
    "description": "Rooh Baba enters the eerie palace of Raktaghat, unraveling mystery and hilarious mayhem alongside royal secrets and vengeful spirits.",
    "duration": 158,
    "language": "Hindi",
    "availableLanguages": [
      "Hindi"
    ],
    "genre": "Comedy / Horror",
    "genres": [
      "Comedy",
      "Horror"
    ],
    "releaseDate": "2026-11-01",
    "certification": "U/A",
    "cast": [
      {
        "name": "Kartik Aaryan",
        "role": "Rooh Baba"
      },
      {
        "name": "Vidya Balan",
        "role": "Manjulika"
      },
      {
        "name": "Madhuri Dixit",
        "role": "Mandira"
      },
      {
        "name": "Triptii Dimri",
        "role": "Meera"
      }
    ],
    "director": "Anees Bazmee",
    "rating": 8.5,
    "votesCount": 220000,
    "formats": [
      "2D",
      "4DX"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m14",
    "type": "movie",
    "title": "Singham Again",
    "category": "Movies",
    "description": "DCP Bajirao Singham leads a stellar alliance of fierce officers against an international terror syndicate across cross-border operations.",
    "duration": 160,
    "language": "Hindi",
    "availableLanguages": [
      "Hindi"
    ],
    "genre": "Action / Crime",
    "genres": [
      "Action",
      "Crime",
      "Masala"
    ],
    "releaseDate": "2026-11-01",
    "certification": "U/A 16+",
    "cast": [
      {
        "name": "Ajay Devgn",
        "role": "Bajirao Singham"
      },
      {
        "name": "Kareena Kapoor Khan",
        "role": "Avni"
      },
      {
        "name": "Ranveer Singh",
        "role": "Simmba"
      },
      {
        "name": "Akshay Kumar",
        "role": "Sooryavanshi"
      },
      {
        "name": "Deepika Padukone",
        "role": "Shakti Shetty"
      }
    ],
    "director": "Rohit Shetty",
    "rating": 8.3,
    "votesCount": 195000,
    "formats": [
      "2D",
      "IMAX 2D",
      "4DX"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1568876694728-451bbf694b83?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m15",
    "type": "movie",
    "title": "Chhaava",
    "category": "Movies",
    "description": "An epic historical saga chronicling the courage, military brilliance, and sacrifice of Chhatrapati Sambhaji Maharaj, the valiant son of Shivaji Maharaj.",
    "duration": 170,
    "language": "Hindi",
    "availableLanguages": [
      "Hindi",
      "Marathi"
    ],
    "genre": "Historical / Action",
    "genres": [
      "Historical",
      "Action",
      "Biography"
    ],
    "releaseDate": "2026-12-06",
    "certification": "U/A 16+",
    "cast": [
      {
        "name": "Vicky Kaushal",
        "role": "Chhatrapati Sambhaji Maharaj"
      },
      {
        "name": "Rashmika Mandanna",
        "role": "Yesubai"
      },
      {
        "name": "Akshaye Khanna",
        "role": "Aurangzeb"
      }
    ],
    "director": "Laxman Utekar",
    "rating": 9.3,
    "votesCount": 260000,
    "formats": [
      "2D",
      "IMAX 2D"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m16",
    "type": "movie",
    "title": "RRR: Roar of Revolt",
    "category": "Movies",
    "description": "A fictional story about two legendary Indian revolutionaries, Alluri Sitarama Raju and Komaram Bheem, who join forces to wage war against the British Raj.",
    "duration": 187,
    "language": "Telugu",
    "availableLanguages": [
      "Telugu",
      "Hindi",
      "Tamil",
      "Malayalam"
    ],
    "genre": "Action / Drama",
    "genres": [
      "Action",
      "Drama",
      "Period"
    ],
    "releaseDate": "2026-03-25",
    "certification": "U/A 16+",
    "cast": [
      {
        "name": "N. T. Rama Rao Jr.",
        "role": "Komaram Bheem"
      },
      {
        "name": "Ram Charan",
        "role": "Alluri Sitarama Raju"
      },
      {
        "name": "Alia Bhatt",
        "role": "Sita"
      }
    ],
    "director": "S. S. Rajamouli",
    "rating": 9.2,
    "votesCount": 540000,
    "formats": [
      "3D",
      "IMAX 3D",
      "2D"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1512070679279-8988d32161be?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m17",
    "type": "movie",
    "title": "KGF: Chapter 2",
    "category": "Movies",
    "description": "Rocky rules the blood-soaked gold fields of Kolar. But as his allies turn greedy and ruthless enemies like Adheera close in, a war for absolute dominance unfolds.",
    "duration": 168,
    "language": "Kannada",
    "availableLanguages": [
      "Kannada",
      "Hindi",
      "Telugu",
      "Tamil"
    ],
    "genre": "Action / Crime",
    "genres": [
      "Action",
      "Crime",
      "Period"
    ],
    "releaseDate": "2026-04-14",
    "certification": "U/A",
    "cast": [
      {
        "name": "Yash",
        "role": "Rocky Bhai"
      },
      {
        "name": "Sanjay Dutt",
        "role": "Adheera"
      },
      {
        "name": "Raveena Tandon",
        "role": "Ramika Sen"
      }
    ],
    "director": "Prashanth Neel",
    "rating": 9,
    "votesCount": 470000,
    "formats": [
      "IMAX 2D",
      "2D",
      "4DX"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m18",
    "type": "movie",
    "title": "Salaar: Part 1 – Ceasefire",
    "category": "Movies",
    "description": "In the lawless walled kingdom of Khansaar, childhood friends Deva and Varadha reunite to stake a bloody claim for the dynastic throne.",
    "duration": 175,
    "language": "Telugu",
    "availableLanguages": [
      "Telugu",
      "Hindi",
      "Tamil",
      "Malayalam"
    ],
    "genre": "Action / Gangster",
    "genres": [
      "Action",
      "Crime",
      "Thriller"
    ],
    "releaseDate": "2026-12-22",
    "certification": "A",
    "cast": [
      {
        "name": "Prabhas",
        "role": "Deva"
      },
      {
        "name": "Prithviraj Sukumaran",
        "role": "Varadharaja Mannaar"
      },
      {
        "name": "Shruti Haasan",
        "role": "Aadhya"
      }
    ],
    "director": "Prashanth Neel",
    "rating": 8.7,
    "votesCount": 295000,
    "formats": [
      "IMAX 2D",
      "2D"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m19",
    "type": "movie",
    "title": "Kantara: A Legend",
    "category": "Movies",
    "description": "Deep in the coastal forests of Karnataka, the sacred lore of Panjurli Daiva and Bhoota Kola collides with human greed, land politics, and divine retribution.",
    "duration": 148,
    "language": "Kannada",
    "availableLanguages": [
      "Kannada",
      "Hindi",
      "Telugu",
      "Tamil"
    ],
    "genre": "Mythology / Action",
    "genres": [
      "Mythology",
      "Action",
      "Drama"
    ],
    "releaseDate": "2026-09-30",
    "certification": "U/A",
    "cast": [
      {
        "name": "Rishab Shetty",
        "role": "Shiva"
      },
      {
        "name": "Sapthami Gowda",
        "role": "Leela"
      },
      {
        "name": "Kishore",
        "role": "Muralidhar"
      }
    ],
    "director": "Rishab Shetty",
    "rating": 9.4,
    "votesCount": 410000,
    "formats": [
      "2D"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m20",
    "type": "movie",
    "title": "Devara: Part 1",
    "category": "Movies",
    "description": "Set along the treacherous coastal cliffs, a courageous leader takes a fierce stand to eradicate illicit maritime weapon smuggling, setting off generations of feuds.",
    "duration": 177,
    "language": "Telugu",
    "availableLanguages": [
      "Telugu",
      "Hindi",
      "Tamil",
      "Kannada"
    ],
    "genre": "Action / Thriller",
    "genres": [
      "Action",
      "Drama",
      "Thriller"
    ],
    "releaseDate": "2026-09-27",
    "certification": "U/A 16+",
    "cast": [
      {
        "name": "N. T. Rama Rao Jr.",
        "role": "Devara / Vara"
      },
      {
        "name": "Saif Ali Khan",
        "role": "Bhaira"
      },
      {
        "name": "Janhvi Kapoor",
        "role": "Thangam"
      }
    ],
    "director": "Koratala Siva",
    "rating": 8.4,
    "votesCount": 215000,
    "formats": [
      "2D",
      "IMAX 2D",
      "4DX"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m21",
    "type": "movie",
    "title": "Baahubali 2: The Conclusion",
    "category": "Movies",
    "description": "Why did Kattappa kill Baahubali? The epic saga concludes as Amarendra Baahubali’s son Shiva rises to reclaim the majestic kingdom of Mahishmati.",
    "duration": 167,
    "language": "Telugu",
    "availableLanguages": [
      "Telugu",
      "Hindi",
      "Tamil",
      "Malayalam"
    ],
    "genre": "Action / Epic",
    "genres": [
      "Action",
      "Fantasy",
      "Drama"
    ],
    "releaseDate": "2026-04-28",
    "certification": "U/A",
    "cast": [
      {
        "name": "Prabhas",
        "role": "Amarendra Baahubali / Mahendra"
      },
      {
        "name": "Rana Daggubati",
        "role": "Bhallaladeva"
      },
      {
        "name": "Anushka Shetty",
        "role": "Devasena"
      }
    ],
    "director": "S. S. Rajamouli",
    "rating": 9.3,
    "votesCount": 590000,
    "formats": [
      "3D",
      "IMAX 3D",
      "2D"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m22",
    "type": "movie",
    "title": "Leo: Bloody Sweet",
    "category": "Movies",
    "description": "Parthiban, a mild-mannered cafe owner in Himachal Pradesh, is pursued by violent drug lords who are convinced he is the notorious assassin Leo Das.",
    "duration": 164,
    "language": "Tamil",
    "availableLanguages": [
      "Tamil",
      "Hindi",
      "Telugu"
    ],
    "genre": "Action / Thriller",
    "genres": [
      "Action",
      "Thriller",
      "Crime"
    ],
    "releaseDate": "2026-10-19",
    "certification": "U/A 16+",
    "cast": [
      {
        "name": "Thalapathy Vijay",
        "role": "Parthiban / Leo Das"
      },
      {
        "name": "Sanjay Dutt",
        "role": "Antony Das"
      },
      {
        "name": "Arjun Sarja",
        "role": "Harold Das"
      }
    ],
    "director": "Lokesh Kanagaraj",
    "rating": 8.6,
    "votesCount": 280000,
    "formats": [
      "2D",
      "IMAX 2D"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m23",
    "type": "movie",
    "title": "Jailer",
    "category": "Movies",
    "description": "Tiger Muthuvel Pandian, a quiet retired prison jailer, steps out of his peace to take down an infamous antique smuggler when his policeman son goes missing.",
    "duration": 168,
    "language": "Tamil",
    "availableLanguages": [
      "Tamil",
      "Telugu",
      "Hindi"
    ],
    "genre": "Action / Dark Comedy",
    "genres": [
      "Action",
      "Comedy",
      "Thriller"
    ],
    "releaseDate": "2026-08-10",
    "certification": "U/A 16+",
    "cast": [
      {
        "name": "Rajinikanth",
        "role": "Tiger Muthuvel Pandian"
      },
      {
        "name": "Vinayakan",
        "role": "Varman"
      },
      {
        "name": "Mohanlal",
        "role": "Mathew"
      },
      {
        "name": "Shiva Rajkumar",
        "role": "Narasimha"
      }
    ],
    "director": "Nelson Dilipkumar",
    "rating": 8.7,
    "votesCount": 260000,
    "formats": [
      "2D",
      "Dolby Atmos"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m24",
    "type": "movie",
    "title": "Vikram",
    "category": "Movies",
    "description": "A black-ops squad led by Amar investigates masked vigilante killings, unearthing a ruthless drug kingpin named Rolex and the legendary agent Vikram.",
    "duration": 174,
    "language": "Tamil",
    "availableLanguages": [
      "Tamil",
      "Telugu",
      "Hindi"
    ],
    "genre": "Action / Neo-Noir",
    "genres": [
      "Action",
      "Thriller",
      "Neo-Noir"
    ],
    "releaseDate": "2026-06-03",
    "certification": "U/A 16+",
    "cast": [
      {
        "name": "Kamal Haasan",
        "role": "Agent Vikram"
      },
      {
        "name": "Vijay Sethupathi",
        "role": "Santhanam"
      },
      {
        "name": "Fahadh Faasil",
        "role": "Amar"
      },
      {
        "name": "Suriya",
        "role": "Rolex"
      }
    ],
    "director": "Lokesh Kanagaraj",
    "rating": 9.1,
    "votesCount": 310000,
    "formats": [
      "2D",
      "IMAX 2D"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m25",
    "type": "movie",
    "title": "Ponniyin Selvan: Part 2",
    "category": "Movies",
    "description": "The monumental culmination of the Chola empire saga as Arulmozhi Varman ascends amid palace conspiracies, revenge oaths, and Nandini’s web.",
    "duration": 164,
    "language": "Tamil",
    "availableLanguages": [
      "Tamil",
      "Hindi",
      "Telugu"
    ],
    "genre": "Historical / Drama",
    "genres": [
      "Historical",
      "Drama",
      "Action"
    ],
    "releaseDate": "2026-04-28",
    "certification": "U/A",
    "cast": [
      {
        "name": "Vikram",
        "role": "Aditha Karikalan"
      },
      {
        "name": "Aishwarya Rai Bachchan",
        "role": "Nandini / Mandakini"
      },
      {
        "name": "Karthi",
        "role": "Vanthiyathevan"
      }
    ],
    "director": "Mani Ratnam",
    "rating": 8.8,
    "votesCount": 190000,
    "formats": [
      "2D",
      "IMAX 2D"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m26",
    "type": "movie",
    "title": "Hanu-Man",
    "category": "Movies",
    "description": "In the mythical village of Anjanadri, a petty thief gains the divine superpowers of Lord Hanuman and must protect his land against a supervillain.",
    "duration": 158,
    "language": "Telugu",
    "availableLanguages": [
      "Telugu",
      "Hindi",
      "Tamil",
      "Kannada"
    ],
    "genre": "Superhero / Mythology",
    "genres": [
      "Superhero",
      "Fantasy",
      "Action"
    ],
    "releaseDate": "2026-01-12",
    "certification": "U/A",
    "cast": [
      {
        "name": "Teja Sajja",
        "role": "Hanumanthu"
      },
      {
        "name": "Amritha Aiyer",
        "role": "Meenakshi"
      },
      {
        "name": "Varalaxmi Sarathkumar",
        "role": "Anjamma"
      }
    ],
    "director": "Prasanth Varma",
    "rating": 8.9,
    "votesCount": 230000,
    "formats": [
      "2D",
      "3D"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m27",
    "type": "movie",
    "title": "Maharaja",
    "category": "Movies",
    "description": "A modest barber files a bizarre police complaint stating that his home was broken into and Lakshmi was stolen, setting off a mind-bending puzzle.",
    "duration": 141,
    "language": "Tamil",
    "availableLanguages": [
      "Tamil",
      "Telugu",
      "Hindi"
    ],
    "genre": "Action / Mystery Thriller",
    "genres": [
      "Action",
      "Mystery",
      "Thriller"
    ],
    "releaseDate": "2026-06-14",
    "certification": "U/A 16+",
    "cast": [
      {
        "name": "Vijay Sethupathi",
        "role": "Maharaja"
      },
      {
        "name": "Anurag Kashyap",
        "role": "Selvam"
      },
      {
        "name": "Mamta Mohandas",
        "role": "Aasifa"
      }
    ],
    "director": "Nithilan Saminathan",
    "rating": 9.3,
    "votesCount": 275000,
    "formats": [
      "2D"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m28",
    "type": "movie",
    "title": "Manjummel Boys",
    "category": "Movies",
    "description": "Based on true events, a group of friends from Kochi embark on a trip to Kodaikanal where one of them plunges into the treacherous Devil’s Kitchen caves.",
    "duration": 135,
    "language": "Malayalam",
    "availableLanguages": [
      "Malayalam",
      "Tamil",
      "Telugu",
      "Hindi"
    ],
    "genre": "Survival / Thriller",
    "genres": [
      "Survival",
      "Drama",
      "Adventure"
    ],
    "releaseDate": "2026-02-22",
    "certification": "U",
    "cast": [
      {
        "name": "Soubin Shahir",
        "role": "Kuttan"
      },
      {
        "name": "Sreenath Bhasi",
        "role": "Subhash"
      },
      {
        "name": "Balu Varghese",
        "role": "Sixen"
      }
    ],
    "director": "Chidambaram",
    "rating": 9.4,
    "votesCount": 320000,
    "formats": [
      "2D"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m29",
    "type": "movie",
    "title": "Aavesham",
    "category": "Movies",
    "description": "Three college engineering students in Bengaluru face bullying from seniors and recruit local eccentric gangster Ranga to assist them with hilarious consequences.",
    "duration": 158,
    "language": "Malayalam",
    "availableLanguages": [
      "Malayalam",
      "Tamil",
      "Hindi"
    ],
    "genre": "Comedy / Action",
    "genres": [
      "Comedy",
      "Action"
    ],
    "releaseDate": "2026-04-11",
    "certification": "U/A",
    "cast": [
      {
        "name": "Fahadh Faasil",
        "role": "Ranga"
      },
      {
        "name": "Hipzster",
        "role": "Aju"
      },
      {
        "name": "Mithun Jai Shankar",
        "role": "Bibi"
      }
    ],
    "director": "Jithu Madhavan",
    "rating": 9,
    "votesCount": 210000,
    "formats": [
      "2D"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m30",
    "type": "movie",
    "title": "Bramayugam: The Age of Darkness",
    "category": "Movies",
    "description": "A folk horror tale shot entirely in monochrome. A court singer fleeing slavery stumbles upon a cursed ancestral manor ruled by the mysterious Kodumon Potti.",
    "duration": 139,
    "language": "Malayalam",
    "availableLanguages": [
      "Malayalam",
      "Tamil",
      "Hindi"
    ],
    "genre": "Period Horror / Folk",
    "genres": [
      "Horror",
      "Period",
      "Thriller"
    ],
    "releaseDate": "2026-02-15",
    "certification": "U/A 16+",
    "cast": [
      {
        "name": "Mammootty",
        "role": "Kodumon Potti"
      },
      {
        "name": "Arjun Ashokan",
        "role": "Thevan"
      },
      {
        "name": "Sidharth Bharathan",
        "role": "Cook"
      }
    ],
    "director": "Rahul Sadasivan",
    "rating": 9.1,
    "votesCount": 185000,
    "formats": [
      "2D"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m31",
    "type": "movie",
    "title": "Premalu",
    "category": "Movies",
    "description": "A charming, delightful rom-com about Sachin, an ordinary youth trying to move to the UK who falls hopelessly for ambitious software professional Reenu in Hyderabad.",
    "duration": 156,
    "language": "Malayalam",
    "availableLanguages": [
      "Malayalam",
      "Telugu",
      "Tamil",
      "Hindi"
    ],
    "genre": "Romance / Comedy",
    "genres": [
      "Romance",
      "Comedy"
    ],
    "releaseDate": "2026-02-09",
    "certification": "U",
    "cast": [
      {
        "name": "Naslen K. Gafoor",
        "role": "Sachin"
      },
      {
        "name": "Mamitha Baiju",
        "role": "Reenu"
      },
      {
        "name": "Sangeeth Prathap",
        "role": "Amal Davis"
      }
    ],
    "director": "Girish A. D.",
    "rating": 8.9,
    "votesCount": 175000,
    "formats": [
      "2D"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m32",
    "type": "movie",
    "title": "The Dark Knight: IMAX Special",
    "category": "Movies",
    "description": "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, he sets out to dismantle Gotham’s organized crime, but the Joker emerges.",
    "duration": 152,
    "language": "English",
    "availableLanguages": [
      "English",
      "Hindi"
    ],
    "genre": "Action / Crime",
    "genres": [
      "Action",
      "Crime",
      "Thriller"
    ],
    "releaseDate": "2026-07-18",
    "certification": "U/A 16+",
    "cast": [
      {
        "name": "Christian Bale",
        "role": "Bruce Wayne / Batman"
      },
      {
        "name": "Heath Ledger",
        "role": "Joker"
      },
      {
        "name": "Aaron Eckhart",
        "role": "Harvey Dent"
      },
      {
        "name": "Michael Caine",
        "role": "Alfred"
      }
    ],
    "director": "Christopher Nolan",
    "rating": 9.6,
    "votesCount": 780000,
    "formats": [
      "IMAX 70mm",
      "IMAX 2D",
      "2D"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m33",
    "type": "movie",
    "title": "Inception",
    "category": "Movies",
    "description": "Dom Cobb is a skilled thief who steals valuable secrets from deep within the subconscious during the dream state, tasked with the near-impossible task of inception.",
    "duration": 148,
    "language": "English",
    "availableLanguages": [
      "English",
      "Hindi"
    ],
    "genre": "Sci-Fi / Action",
    "genres": [
      "Sci-Fi",
      "Action",
      "Psychological"
    ],
    "releaseDate": "2026-07-16",
    "certification": "U/A",
    "cast": [
      {
        "name": "Leonardo DiCaprio",
        "role": "Cobb"
      },
      {
        "name": "Joseph Gordon-Levitt",
        "role": "Arthur"
      },
      {
        "name": "Elliot Page",
        "role": "Ariadne"
      },
      {
        "name": "Tom Hardy",
        "role": "Eames"
      }
    ],
    "director": "Christopher Nolan",
    "rating": 9.3,
    "votesCount": 650000,
    "formats": [
      "IMAX 2D",
      "2D"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m34",
    "type": "movie",
    "title": "Avatar: The Way of Water",
    "category": "Movies",
    "description": "Jake Sully lives with his newfound family on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri to protect their home.",
    "duration": 192,
    "language": "English",
    "availableLanguages": [
      "English",
      "Hindi",
      "Tamil",
      "Telugu"
    ],
    "genre": "Sci-Fi / Adventure",
    "genres": [
      "Sci-Fi",
      "Adventure",
      "Fantasy"
    ],
    "releaseDate": "2026-12-16",
    "certification": "U/A",
    "cast": [
      {
        "name": "Sam Worthington",
        "role": "Jake Sully"
      },
      {
        "name": "Zoe Saldana",
        "role": "Neytiri"
      },
      {
        "name": "Sigourney Weaver",
        "role": "Kiri"
      }
    ],
    "director": "James Cameron",
    "rating": 8.9,
    "votesCount": 490000,
    "formats": [
      "3D",
      "IMAX 3D",
      "4DX",
      "2D"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m35",
    "type": "movie",
    "title": "Avengers: Endgame",
    "category": "Movies",
    "description": "After the devastating events of Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more to reverse Thanos’ actions.",
    "duration": 181,
    "language": "English",
    "availableLanguages": [
      "English",
      "Hindi",
      "Tamil",
      "Telugu"
    ],
    "genre": "Action / Sci-Fi",
    "genres": [
      "Action",
      "Sci-Fi",
      "Superhero"
    ],
    "releaseDate": "2026-04-26",
    "certification": "U/A",
    "cast": [
      {
        "name": "Robert Downey Jr.",
        "role": "Tony Stark / Iron Man"
      },
      {
        "name": "Chris Evans",
        "role": "Steve Rogers / Captain America"
      },
      {
        "name": "Chris Hemsworth",
        "role": "Thor"
      }
    ],
    "director": "Anthony and Joe Russo",
    "rating": 9.4,
    "votesCount": 820000,
    "formats": [
      "IMAX 3D",
      "3D",
      "4DX",
      "2D"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m36",
    "type": "movie",
    "title": "Spider-Man: No Way Home",
    "category": "Movies",
    "description": "With Spider-Man’s identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other realities start to appear.",
    "duration": 148,
    "language": "English",
    "availableLanguages": [
      "English",
      "Hindi",
      "Tamil",
      "Telugu"
    ],
    "genre": "Action / Superhero",
    "genres": [
      "Action",
      "Superhero",
      "Sci-Fi"
    ],
    "releaseDate": "2026-12-17",
    "certification": "U/A",
    "cast": [
      {
        "name": "Tom Holland",
        "role": "Peter Parker"
      },
      {
        "name": "Zendaya",
        "role": "MJ"
      },
      {
        "name": "Benedict Cumberbatch",
        "role": "Doctor Strange"
      },
      {
        "name": "Tobey Maguire",
        "role": "Peter Parker"
      },
      {
        "name": "Andrew Garfield",
        "role": "Peter Parker"
      }
    ],
    "director": "Jon Watts",
    "rating": 9.1,
    "votesCount": 570000,
    "formats": [
      "3D",
      "IMAX 3D",
      "4DX",
      "2D"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m37",
    "type": "movie",
    "title": "Top Gun: Maverick",
    "category": "Movies",
    "description": "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN’s elite graduates on a perilous mission.",
    "duration": 130,
    "language": "English",
    "availableLanguages": [
      "English",
      "Hindi"
    ],
    "genre": "Action / Drama",
    "genres": [
      "Action",
      "Drama",
      "Aviation"
    ],
    "releaseDate": "2026-05-27",
    "certification": "U/A",
    "cast": [
      {
        "name": "Tom Cruise",
        "role": "Pete \"Maverick\" Mitchell"
      },
      {
        "name": "Miles Teller",
        "role": "Bradley \"Rooster\" Bradshaw"
      },
      {
        "name": "Jennifer Connelly",
        "role": "Penny Benjamin"
      }
    ],
    "director": "Joseph Kosinski",
    "rating": 9.2,
    "votesCount": 440000,
    "formats": [
      "IMAX 2D",
      "4DX",
      "2D"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m38",
    "type": "movie",
    "title": "Gladiator II",
    "category": "Movies",
    "description": "Decades after the sacrifice of Maximus, Lucius enters the Colosseum to fight for the future of Rome against tyrannical emperors and corrupt senators.",
    "duration": 148,
    "language": "English",
    "availableLanguages": [
      "English",
      "Hindi"
    ],
    "genre": "Historical / Action",
    "genres": [
      "Historical",
      "Action",
      "Drama"
    ],
    "releaseDate": "2026-11-15",
    "certification": "A",
    "cast": [
      {
        "name": "Paul Mescal",
        "role": "Lucius Verus"
      },
      {
        "name": "Pedro Pascal",
        "role": "Marcus Acacius"
      },
      {
        "name": "Denzel Washington",
        "role": "Macrinus"
      }
    ],
    "director": "Ridley Scott",
    "rating": 8.7,
    "votesCount": 210000,
    "formats": [
      "IMAX 2D",
      "4DX",
      "2D"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m39",
    "type": "movie",
    "title": "Joker: Folie à Deux",
    "category": "Movies",
    "description": "Arthur Fleck is institutionalized at Arkham awaiting trial for his crimes. While struggling with his dual identity, he meets Lee Quinzel and stumbles upon musical madness.",
    "duration": 138,
    "language": "English",
    "availableLanguages": [
      "English",
      "Hindi"
    ],
    "genre": "Drama / Psychological",
    "genres": [
      "Drama",
      "Psychological",
      "Musical"
    ],
    "releaseDate": "2026-10-04",
    "certification": "A",
    "cast": [
      {
        "name": "Joaquin Phoenix",
        "role": "Arthur Fleck / Joker"
      },
      {
        "name": "Lady Gaga",
        "role": "Harleen Quinzel / Lee"
      },
      {
        "name": "Brendan Gleeson",
        "role": "Jackie Sullivan"
      }
    ],
    "director": "Todd Phillips",
    "rating": 8,
    "votesCount": 190000,
    "formats": [
      "IMAX 2D",
      "2D"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m40",
    "type": "movie",
    "title": "Mission: Impossible – Dead Reckoning",
    "category": "Movies",
    "description": "Ethan Hunt and his IMF team must track down a terrifying new AI weapon that threatens all of humanity before it falls into the wrong hands.",
    "duration": 163,
    "language": "English",
    "availableLanguages": [
      "English",
      "Hindi",
      "Tamil",
      "Telugu"
    ],
    "genre": "Action / Spy",
    "genres": [
      "Action",
      "Spy",
      "Thriller"
    ],
    "releaseDate": "2026-07-12",
    "certification": "U/A",
    "cast": [
      {
        "name": "Tom Cruise",
        "role": "Ethan Hunt"
      },
      {
        "name": "Hayley Atwell",
        "role": "Grace"
      },
      {
        "name": "Ving Rhames",
        "role": "Luther Stickell"
      },
      {
        "name": "Simon Pegg",
        "role": "Benji Dunn"
      }
    ],
    "director": "Christopher McQuarrie",
    "rating": 9,
    "votesCount": 380000,
    "formats": [
      "IMAX 2D",
      "4DX",
      "2D"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m41",
    "type": "movie",
    "title": "John Wick: Chapter 4",
    "category": "Movies",
    "description": "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe.",
    "duration": 169,
    "language": "English",
    "availableLanguages": [
      "English",
      "Hindi"
    ],
    "genre": "Action / Neo-Noir",
    "genres": [
      "Action",
      "Neo-Noir",
      "Thriller"
    ],
    "releaseDate": "2026-03-24",
    "certification": "A",
    "cast": [
      {
        "name": "Keanu Reeves",
        "role": "John Wick"
      },
      {
        "name": "Donnie Yen",
        "role": "Caine"
      },
      {
        "name": "Bill Skarsgård",
        "role": "Marquis"
      },
      {
        "name": "Laurence Fishburne",
        "role": "Bowery King"
      }
    ],
    "director": "Chad Stahelski",
    "rating": 9.1,
    "votesCount": 460000,
    "formats": [
      "IMAX 2D",
      "4DX",
      "2D"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m42",
    "type": "movie",
    "title": "A Quiet Place: Day One",
    "category": "Movies",
    "description": "Experience the day the world went quiet in this thrilling origin story set in New York City as blind alien predators with ultrasonic hearing invade Earth.",
    "duration": 99,
    "language": "English",
    "availableLanguages": [
      "English",
      "Hindi"
    ],
    "genre": "Horror / Sci-Fi",
    "genres": [
      "Horror",
      "Sci-Fi",
      "Thriller"
    ],
    "releaseDate": "2026-06-28",
    "certification": "U/A 16+",
    "cast": [
      {
        "name": "Lupita Nyong'o",
        "role": "Sam"
      },
      {
        "name": "Joseph Quinn",
        "role": "Eric"
      },
      {
        "name": "Djimon Hounsou",
        "role": "Henri"
      }
    ],
    "director": "Michael Sarnoski",
    "rating": 8.3,
    "votesCount": 160000,
    "formats": [
      "2D",
      "IMAX 2D",
      "4DX"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m43",
    "type": "movie",
    "title": "Dunki",
    "category": "Movies",
    "description": "An emotional comedy-drama following four friends from a sleepy Punjab village who use an illegal backdoor route known as Donkey Flight to reach the UK in search of dreams.",
    "duration": 161,
    "language": "Hindi",
    "availableLanguages": [
      "Hindi"
    ],
    "genre": "Drama / Comedy",
    "genres": [
      "Drama",
      "Comedy",
      "Social"
    ],
    "releaseDate": "2026-12-21",
    "certification": "U/A",
    "cast": [
      {
        "name": "Shah Rukh Khan",
        "role": "Hardayal \"Hardy\" Singh Dhillon"
      },
      {
        "name": "Taapsee Pannu",
        "role": "Manu Randhawa"
      },
      {
        "name": "Vicky Kaushal",
        "role": "Sukhi"
      },
      {
        "name": "Boman Irani",
        "role": "Geetu Gulati"
      }
    ],
    "director": "Rajkumar Hirani",
    "rating": 8.4,
    "votesCount": 210000,
    "formats": [
      "2D"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1568876694728-451bbf694b83?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m44",
    "type": "movie",
    "title": "Inside Out 2",
    "category": "Movies",
    "description": "Joy, Sadness, Anger, Fear, and Disgust have been running a smooth operation inside Riley’s mind. But when Riley enters puberty, Anxiety, Envy, Ennui, and Embarrassment move in!",
    "duration": 96,
    "language": "English",
    "availableLanguages": [
      "English",
      "Hindi"
    ],
    "genre": "Animation / Family",
    "genres": [
      "Animation",
      "Comedy",
      "Family"
    ],
    "releaseDate": "2026-06-14",
    "certification": "U",
    "cast": [
      {
        "name": "Amy Poehler",
        "role": "Joy (voice)"
      },
      {
        "name": "Maya Hawke",
        "role": "Anxiety (voice)"
      },
      {
        "name": "Phyllis Smith",
        "role": "Sadness (voice)"
      }
    ],
    "director": "Kelsey Mann",
    "rating": 9.1,
    "votesCount": 390000,
    "formats": [
      "3D",
      "2D",
      "4DX"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m45",
    "type": "movie",
    "title": "Spider-Man: Across the Spider-Verse",
    "category": "Movies",
    "description": "Miles Morales catapults across the Multiverse, encountering a society of Spider-People charged with protecting its very existence. When heroes clash, Miles must redefine what it means to be a hero.",
    "duration": 140,
    "language": "English",
    "availableLanguages": [
      "English",
      "Hindi",
      "Tamil",
      "Telugu"
    ],
    "genre": "Animation / Action",
    "genres": [
      "Animation",
      "Action",
      "Sci-Fi"
    ],
    "releaseDate": "2026-06-02",
    "certification": "U",
    "cast": [
      {
        "name": "Shameik Moore",
        "role": "Miles Morales"
      },
      {
        "name": "Hailee Steinfeld",
        "role": "Gwen Stacy"
      },
      {
        "name": "Oscar Isaac",
        "role": "Miguel O'Hara"
      }
    ],
    "director": "Joaquim Dos Santos, Kemp Powers",
    "rating": 9.5,
    "votesCount": 530000,
    "formats": [
      "IMAX 2D",
      "2D",
      "4DX"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1512070679279-8988d32161be?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m46",
    "type": "movie",
    "title": "Demon Slayer: Hashira Training Arc",
    "category": "Movies",
    "description": "Tanjiro undergoes rigorous physical and spiritual training under the supreme Hashira demon slayers in preparation for the decisive battle against Muzan Kibutsuji.",
    "duration": 104,
    "language": "Japanese",
    "availableLanguages": [
      "Japanese",
      "Hindi",
      "English"
    ],
    "genre": "Anime / Action",
    "genres": [
      "Anime",
      "Action",
      "Dark Fantasy"
    ],
    "releaseDate": "2026-02-23",
    "certification": "U/A 16+",
    "cast": [
      {
        "name": "Natsuki Hanae",
        "role": "Tanjiro Kamado"
      },
      {
        "name": "Akari Kito",
        "role": "Nezuko Kamado"
      },
      {
        "name": "Takahiro Sakurai",
        "role": "Giyu Tomioka"
      }
    ],
    "director": "Haruo Sotozaki",
    "rating": 8.9,
    "votesCount": 220000,
    "formats": [
      "IMAX 2D",
      "2D",
      "4DX"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m47",
    "type": "movie",
    "title": "Suzume",
    "category": "Movies",
    "description": "A 17-year-old girl named Suzume meets a young traveler searching for a door. Together, they embark on a journey across disaster-stricken Japan to close supernatural portals.",
    "duration": 122,
    "language": "Japanese",
    "availableLanguages": [
      "Japanese",
      "Hindi",
      "English"
    ],
    "genre": "Anime / Fantasy",
    "genres": [
      "Anime",
      "Fantasy",
      "Adventure"
    ],
    "releaseDate": "2026-04-21",
    "certification": "U/A",
    "cast": [
      {
        "name": "Nanoka Hara",
        "role": "Suzume Iwato"
      },
      {
        "name": "Hokuto Matsumura",
        "role": "Souta Munakata"
      }
    ],
    "director": "Makoto Shinkai",
    "rating": 9,
    "votesCount": 270000,
    "formats": [
      "2D",
      "IMAX 2D"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m48",
    "type": "movie",
    "title": "Spirited Away: Collector's Cut",
    "category": "Movies",
    "description": "Hayao Miyazaki’s Oscar-winning masterpiece follows 10-year-old Chihiro who wanders into a magical bathhouse realm governed by spirits, witches, and bizarre deities.",
    "duration": 125,
    "language": "Japanese",
    "availableLanguages": [
      "Japanese",
      "English",
      "Hindi"
    ],
    "genre": "Anime / Fantasy",
    "genres": [
      "Anime",
      "Fantasy",
      "Family"
    ],
    "releaseDate": "2026-05-15",
    "certification": "U",
    "cast": [
      {
        "name": "Rumi Hiiragi",
        "role": "Chihiro Ogino"
      },
      {
        "name": "Miyu Irino",
        "role": "Haku"
      },
      {
        "name": "Mari Natsuki",
        "role": "Yubaba"
      }
    ],
    "director": "Hayao Miyazaki",
    "rating": 9.6,
    "votesCount": 680000,
    "formats": [
      "2D"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m49",
    "type": "movie",
    "title": "The Boy and the Heron",
    "category": "Movies",
    "description": "In the wake of his mother’s death, Mahito journeys to an enchanted countryside estate where a mischievous talking grey heron leads him into a timeless world between life and death.",
    "duration": 124,
    "language": "Japanese",
    "availableLanguages": [
      "Japanese",
      "English",
      "Hindi"
    ],
    "genre": "Anime / Fantasy",
    "genres": [
      "Anime",
      "Fantasy",
      "Drama"
    ],
    "releaseDate": "2026-05-10",
    "certification": "U/A",
    "cast": [
      {
        "name": "Soma Santoki",
        "role": "Mahito Maki"
      },
      {
        "name": "Masaki Suda",
        "role": "The Grey Heron"
      },
      {
        "name": "Aimyon",
        "role": "Himi"
      }
    ],
    "director": "Hayao Miyazaki",
    "rating": 9.1,
    "votesCount": 240000,
    "formats": [
      "2D",
      "IMAX 2D"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m50",
    "type": "movie",
    "title": "Your Name (Kimi no Na wa)",
    "category": "Movies",
    "description": "Two teenagers—Mitsuha from a rural shrine town and Taki from Tokyo—mysteriously swap bodies across time and space, leaving messages and an unbreakable cosmic bond.",
    "duration": 107,
    "language": "Japanese",
    "availableLanguages": [
      "Japanese",
      "Hindi",
      "English"
    ],
    "genre": "Anime / Romance",
    "genres": [
      "Anime",
      "Romance",
      "Sci-Fi"
    ],
    "releaseDate": "2026-08-26",
    "certification": "U",
    "cast": [
      {
        "name": "Ryunosuke Kamiki",
        "role": "Taki Tachibana"
      },
      {
        "name": "Mone Kamishiraishi",
        "role": "Mitsuha Miyamizu"
      }
    ],
    "director": "Makoto Shinkai",
    "rating": 9.5,
    "votesCount": 590000,
    "formats": [
      "2D",
      "IMAX 2D"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "m51",
    "type": "movie",
    "title": "Challengers",
    "category": "Movies",
    "description": "Tashi, a tennis player turned coach, has transformed her husband Art into a world-famous grand slam champion. To jolt him out of a slump, she enters him into a challenger event where he faces Patrick, his former best friend and Tashi’s ex.",
    "duration": 131,
    "language": "English",
    "availableLanguages": [
      "English",
      "Hindi"
    ],
    "genre": "Drama / Romance",
    "genres": [
      "Drama",
      "Romance",
      "Sports"
    ],
    "releaseDate": "2026-04-26",
    "certification": "A",
    "cast": [
      {
        "name": "Zendaya",
        "role": "Tashi Duncan"
      },
      {
        "name": "Josh O'Connor",
        "role": "Patrick Zweig"
      },
      {
        "name": "Mike Faist",
        "role": "Art Donaldson"
      }
    ],
    "director": "Luca Guadagnino",
    "rating": 8.7,
    "votesCount": 195000,
    "formats": [
      "2D",
      "Dolby Atmos"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&auto=format&fit=crop&q=80",
    "isActive": true
  },
  {
    "id": "e1",
    "type": "event",
    "title": "Coldplay: Music of the Spheres World Tour",
    "category": "Events",
    "description": "Global musical phenomenon Coldplay brings their monumental stadium production featuring Chris Martin, laser spectacles, eco-kinetic power stages, and timeless anthems.",
    "duration": 150,
    "posterUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1200&auto=format&fit=crop&q=80",
    "language": "English",
    "availableLanguages": [
      "English"
    ],
    "genre": "Live Concert / Rock",
    "genres": [
      "Music",
      "Concert",
      "Pop Rock"
    ],
    "releaseDate": "2026-11-15",
    "certification": "U",
    "cast": [
      {
        "name": "Chris Martin",
        "role": "Lead Vocalist"
      },
      {
        "name": "Jonny Buckland",
        "role": "Lead Guitarist"
      }
    ],
    "director": "Phil Harvey",
    "rating": 9.8,
    "votesCount": 94000,
    "formats": [
      "Live Arena",
      "VIP Lounge"
    ],
    "isActive": true
  },
  {
    "id": "e2",
    "type": "event",
    "title": "Zakir Khan: Papa Bolte Hain Live",
    "category": "Standup Comedy",
    "description": "The Sakht Launda returns with his heartwarming storytelling and unfiltered humor on family relations, Indian fathers, and bittersweet coming of age.",
    "duration": 110,
    "posterUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=1200&auto=format&fit=crop&q=80",
    "language": "Hindi",
    "availableLanguages": [
      "Hindi"
    ],
    "genre": "Standup Comedy",
    "genres": [
      "Comedy",
      "Live Performance"
    ],
    "releaseDate": "2026-10-25",
    "certification": "16+",
    "cast": [
      {
        "name": "Zakir Khan",
        "role": "Standup Comedian"
      }
    ],
    "director": "Zakir Khan Productions",
    "rating": 9.5,
    "votesCount": 68400,
    "formats": [
      "Auditorium Live"
    ],
    "isActive": true
  },
  {
    "id": "e3",
    "type": "event",
    "title": "A.R. Rahman: Harmony Symphony Tour",
    "category": "Events",
    "description": "Two-time Oscar-winner A.R. Rahman conducts an unforgettable 70-piece live orchestra blending Sufi ecstasy, cinematic melodies, and cutting-edge visual projection.",
    "duration": 165,
    "posterUrl": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&auto=format&fit=crop&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop&q=80",
    "language": "Hindi",
    "availableLanguages": [
      "Hindi",
      "Tamil"
    ],
    "genre": "Live Concert / Symphony",
    "genres": [
      "Music",
      "Concert",
      "Symphony"
    ],
    "releaseDate": "2026-12-10",
    "certification": "U",
    "cast": [
      {
        "name": "A.R. Rahman",
        "role": "Composer & Conductor"
      }
    ],
    "director": "KM Music Conservatory",
    "rating": 9.9,
    "votesCount": 112000,
    "formats": [
      "Grand Arena Live"
    ],
    "isActive": true
  }
];

export const INITIAL_VENUES = [
  {
    "venueId": "v1",
    "name": "PVR ICON: Phoenix Palladium, Lower Parel",
    "city": "Mumbai",
    "screens": [
      {
        "screenId": "s1",
        "name": "Audi 1 - IMAX",
        "capacity": 60,
        "type": "IMAX"
      },
      {
        "screenId": "s2",
        "name": "Audi 2 - Dolby",
        "capacity": 60,
        "type": "Standard"
      }
    ]
  },
  {
    "venueId": "v2",
    "name": "INOX Megaplex: R City Mall, Ghatkopar",
    "city": "Mumbai",
    "screens": [
      {
        "screenId": "s4",
        "name": "Screen 1 - Insignia",
        "capacity": 60,
        "type": "Gold Class"
      },
      {
        "screenId": "s5",
        "name": "Screen 2 - MX4D",
        "capacity": 60,
        "type": "4DX"
      }
    ]
  },
  {
    "venueId": "v3",
    "name": "Cinepolis: Fun Republic, Andheri West",
    "city": "Mumbai",
    "screens": [
      {
        "screenId": "s6",
        "name": "Audi 1 - RealD 3D",
        "capacity": 60,
        "type": "Standard"
      }
    ]
  },
  {
    "venueId": "v4",
    "name": "PVR Directors Cut: Ambience Mall, Vasant Kunj",
    "city": "Delhi-NCR",
    "screens": [
      {
        "screenId": "s8",
        "name": "Audi 1 - Ultra Luxury",
        "capacity": 60,
        "type": "Gold Class"
      },
      {
        "screenId": "s9",
        "name": "Audi 2 - IMAX",
        "capacity": 60,
        "type": "IMAX"
      }
    ]
  },
  {
    "venueId": "v5",
    "name": "Cinepolis: DLF Avenue, Saket",
    "city": "Delhi-NCR",
    "screens": [
      {
        "screenId": "s10",
        "name": "Audi 1 - Macro XE",
        "capacity": 60,
        "type": "Standard"
      }
    ]
  },
  {
    "venueId": "v6",
    "name": "PVR Superplex: Forum Mall, Koramangala",
    "city": "Bengaluru",
    "screens": [
      {
        "screenId": "s11",
        "name": "Audi 1 - IMAX Laser",
        "capacity": 60,
        "type": "IMAX"
      }
    ]
  },
  {
    "venueId": "v7",
    "name": "Prasads Multiplex: IMAX Road, NTR Gardens",
    "city": "Hyderabad",
    "screens": [
      {
        "screenId": "s13",
        "name": "Screen 6 - Giant Screen",
        "capacity": 60,
        "type": "IMAX"
      }
    ]
  },
  {
    "venueId": "v8",
    "name": "PVR Phoenix Marketcity: Viman Nagar",
    "city": "Pune",
    "screens": [
      {
        "screenId": "s14",
        "name": "Audi 1 - Dolby Atmos",
        "capacity": 60,
        "type": "Standard"
      }
    ]
  }
];

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

export const INITIAL_SHOWS = [
  {
    "showId": "sh_1",
    "eventId": "m1",
    "venueId": "v1",
    "screenId": "s1",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "2D",
    "basePrice": 220,
    "availableSeats": 51,
    "totalSeats": 60,
    "occupancyRate": 15,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_2",
    "eventId": "m1",
    "venueId": "v1",
    "screenId": "s1",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "2D",
    "basePrice": 220,
    "availableSeats": 41,
    "totalSeats": 60,
    "occupancyRate": 32,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_3",
    "eventId": "m1",
    "venueId": "v3",
    "screenId": "s6",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "2D",
    "basePrice": 260,
    "availableSeats": 44,
    "totalSeats": 60,
    "occupancyRate": 26,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_4",
    "eventId": "m1",
    "venueId": "v3",
    "screenId": "s6",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "2D",
    "basePrice": 260,
    "availableSeats": 34,
    "totalSeats": 60,
    "occupancyRate": 43,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_5",
    "eventId": "m1",
    "venueId": "v6",
    "screenId": "s11",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "2D",
    "basePrice": 300,
    "availableSeats": 38,
    "totalSeats": 60,
    "occupancyRate": 37,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_6",
    "eventId": "m1",
    "venueId": "v6",
    "screenId": "s11",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "2D",
    "basePrice": 300,
    "availableSeats": 28,
    "totalSeats": 60,
    "occupancyRate": 54,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_7",
    "eventId": "m2",
    "venueId": "v2",
    "screenId": "s4",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "2D",
    "basePrice": 250,
    "availableSeats": 47,
    "totalSeats": 60,
    "occupancyRate": 22,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_8",
    "eventId": "m2",
    "venueId": "v2",
    "screenId": "s4",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "2D",
    "basePrice": 250,
    "availableSeats": 37,
    "totalSeats": 60,
    "occupancyRate": 39,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_9",
    "eventId": "m2",
    "venueId": "v4",
    "screenId": "s8",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "2D",
    "basePrice": 290,
    "availableSeats": 40,
    "totalSeats": 60,
    "occupancyRate": 33,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_10",
    "eventId": "m2",
    "venueId": "v4",
    "screenId": "s8",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "2D",
    "basePrice": 290,
    "availableSeats": 30,
    "totalSeats": 60,
    "occupancyRate": 50,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_11",
    "eventId": "m2",
    "venueId": "v7",
    "screenId": "s13",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "2D",
    "basePrice": 330,
    "availableSeats": 34,
    "totalSeats": 60,
    "occupancyRate": 44,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_12",
    "eventId": "m2",
    "venueId": "v7",
    "screenId": "s13",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "2D",
    "basePrice": 330,
    "availableSeats": 23,
    "totalSeats": 60,
    "occupancyRate": 61,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_13",
    "eventId": "m3",
    "venueId": "v3",
    "screenId": "s6",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "IMAX 70mm",
    "basePrice": 280,
    "availableSeats": 43,
    "totalSeats": 60,
    "occupancyRate": 29,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_14",
    "eventId": "m3",
    "venueId": "v3",
    "screenId": "s6",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "IMAX 70mm",
    "basePrice": 280,
    "availableSeats": 32,
    "totalSeats": 60,
    "occupancyRate": 46,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_15",
    "eventId": "m3",
    "venueId": "v5",
    "screenId": "s10",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "IMAX 70mm",
    "basePrice": 320,
    "availableSeats": 36,
    "totalSeats": 60,
    "occupancyRate": 40,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_16",
    "eventId": "m3",
    "venueId": "v5",
    "screenId": "s10",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "IMAX 70mm",
    "basePrice": 320,
    "availableSeats": 26,
    "totalSeats": 60,
    "occupancyRate": 57,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_17",
    "eventId": "m3",
    "venueId": "v8",
    "screenId": "s14",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "IMAX 70mm",
    "basePrice": 360,
    "availableSeats": 29,
    "totalSeats": 60,
    "occupancyRate": 51,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_18",
    "eventId": "m3",
    "venueId": "v8",
    "screenId": "s14",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "IMAX 70mm",
    "basePrice": 360,
    "availableSeats": 19,
    "totalSeats": 60,
    "occupancyRate": 68,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_19",
    "eventId": "m4",
    "venueId": "v4",
    "screenId": "s8",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "2D",
    "basePrice": 310,
    "availableSeats": 38,
    "totalSeats": 60,
    "occupancyRate": 36,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_20",
    "eventId": "m4",
    "venueId": "v4",
    "screenId": "s8",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "2D",
    "basePrice": 310,
    "availableSeats": 28,
    "totalSeats": 60,
    "occupancyRate": 53,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_21",
    "eventId": "m4",
    "venueId": "v6",
    "screenId": "s11",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "2D",
    "basePrice": 350,
    "availableSeats": 32,
    "totalSeats": 60,
    "occupancyRate": 47,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_22",
    "eventId": "m4",
    "venueId": "v6",
    "screenId": "s11",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "2D",
    "basePrice": 350,
    "availableSeats": 22,
    "totalSeats": 60,
    "occupancyRate": 64,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_23",
    "eventId": "m4",
    "venueId": "v1",
    "screenId": "s1",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "2D",
    "basePrice": 390,
    "availableSeats": 25,
    "totalSeats": 60,
    "occupancyRate": 58,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_24",
    "eventId": "m4",
    "venueId": "v1",
    "screenId": "s1",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "2D",
    "basePrice": 390,
    "availableSeats": 15,
    "totalSeats": 60,
    "occupancyRate": 75,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_25",
    "eventId": "m5",
    "venueId": "v5",
    "screenId": "s10",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "2D",
    "basePrice": 340,
    "availableSeats": 34,
    "totalSeats": 60,
    "occupancyRate": 43,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_26",
    "eventId": "m5",
    "venueId": "v5",
    "screenId": "s10",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "2D",
    "basePrice": 340,
    "availableSeats": 24,
    "totalSeats": 60,
    "occupancyRate": 60,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_27",
    "eventId": "m5",
    "venueId": "v7",
    "screenId": "s13",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "2D",
    "basePrice": 380,
    "availableSeats": 28,
    "totalSeats": 60,
    "occupancyRate": 54,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_28",
    "eventId": "m5",
    "venueId": "v7",
    "screenId": "s13",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "2D",
    "basePrice": 380,
    "availableSeats": 17,
    "totalSeats": 60,
    "occupancyRate": 71,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_29",
    "eventId": "m5",
    "venueId": "v2",
    "screenId": "s4",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "2D",
    "basePrice": 220,
    "availableSeats": 21,
    "totalSeats": 60,
    "occupancyRate": 65,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_30",
    "eventId": "m5",
    "venueId": "v2",
    "screenId": "s4",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "2D",
    "basePrice": 220,
    "availableSeats": 11,
    "totalSeats": 60,
    "occupancyRate": 82,
    "dynamicMultiplier": 1.25
  },
  {
    "showId": "sh_31",
    "eventId": "m6",
    "venueId": "v6",
    "screenId": "s11",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "3D",
    "basePrice": 370,
    "availableSeats": 30,
    "totalSeats": 60,
    "occupancyRate": 50,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_32",
    "eventId": "m6",
    "venueId": "v6",
    "screenId": "s11",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "3D",
    "basePrice": 370,
    "availableSeats": 20,
    "totalSeats": 60,
    "occupancyRate": 67,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_33",
    "eventId": "m6",
    "venueId": "v8",
    "screenId": "s14",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "3D",
    "basePrice": 410,
    "availableSeats": 23,
    "totalSeats": 60,
    "occupancyRate": 61,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_34",
    "eventId": "m6",
    "venueId": "v8",
    "screenId": "s14",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "3D",
    "basePrice": 410,
    "availableSeats": 13,
    "totalSeats": 60,
    "occupancyRate": 78,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_35",
    "eventId": "m6",
    "venueId": "v3",
    "screenId": "s6",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "3D",
    "basePrice": 250,
    "availableSeats": 17,
    "totalSeats": 60,
    "occupancyRate": 72,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_36",
    "eventId": "m6",
    "venueId": "v3",
    "screenId": "s6",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "3D",
    "basePrice": 250,
    "availableSeats": 49,
    "totalSeats": 60,
    "occupancyRate": 19,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_37",
    "eventId": "m7",
    "venueId": "v7",
    "screenId": "s13",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "IMAX 2D",
    "basePrice": 400,
    "availableSeats": 26,
    "totalSeats": 60,
    "occupancyRate": 57,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_38",
    "eventId": "m7",
    "venueId": "v7",
    "screenId": "s13",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "IMAX 2D",
    "basePrice": 400,
    "availableSeats": 16,
    "totalSeats": 60,
    "occupancyRate": 74,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_39",
    "eventId": "m7",
    "venueId": "v1",
    "screenId": "s1",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "IMAX 2D",
    "basePrice": 240,
    "availableSeats": 19,
    "totalSeats": 60,
    "occupancyRate": 68,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_40",
    "eventId": "m7",
    "venueId": "v1",
    "screenId": "s1",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "IMAX 2D",
    "basePrice": 240,
    "availableSeats": 51,
    "totalSeats": 60,
    "occupancyRate": 15,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_41",
    "eventId": "m7",
    "venueId": "v4",
    "screenId": "s8",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "IMAX 2D",
    "basePrice": 280,
    "availableSeats": 13,
    "totalSeats": 60,
    "occupancyRate": 79,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_42",
    "eventId": "m7",
    "venueId": "v4",
    "screenId": "s8",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "IMAX 2D",
    "basePrice": 280,
    "availableSeats": 44,
    "totalSeats": 60,
    "occupancyRate": 26,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_43",
    "eventId": "m8",
    "venueId": "v8",
    "screenId": "s14",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "IMAX 70mm",
    "basePrice": 230,
    "availableSeats": 22,
    "totalSeats": 60,
    "occupancyRate": 64,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_44",
    "eventId": "m8",
    "venueId": "v8",
    "screenId": "s14",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "IMAX 70mm",
    "basePrice": 230,
    "availableSeats": 11,
    "totalSeats": 60,
    "occupancyRate": 81,
    "dynamicMultiplier": 1.25
  },
  {
    "showId": "sh_45",
    "eventId": "m8",
    "venueId": "v2",
    "screenId": "s4",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "IMAX 70mm",
    "basePrice": 270,
    "availableSeats": 15,
    "totalSeats": 60,
    "occupancyRate": 75,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_46",
    "eventId": "m8",
    "venueId": "v2",
    "screenId": "s4",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "IMAX 70mm",
    "basePrice": 270,
    "availableSeats": 47,
    "totalSeats": 60,
    "occupancyRate": 22,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_47",
    "eventId": "m8",
    "venueId": "v5",
    "screenId": "s10",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "IMAX 70mm",
    "basePrice": 310,
    "availableSeats": 50,
    "totalSeats": 60,
    "occupancyRate": 16,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_48",
    "eventId": "m8",
    "venueId": "v5",
    "screenId": "s10",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "IMAX 70mm",
    "basePrice": 310,
    "availableSeats": 40,
    "totalSeats": 60,
    "occupancyRate": 33,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_49",
    "eventId": "m9",
    "venueId": "v1",
    "screenId": "s1",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "2D",
    "basePrice": 260,
    "availableSeats": 17,
    "totalSeats": 60,
    "occupancyRate": 71,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_50",
    "eventId": "m9",
    "venueId": "v1",
    "screenId": "s1",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "2D",
    "basePrice": 260,
    "availableSeats": 49,
    "totalSeats": 60,
    "occupancyRate": 18,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_51",
    "eventId": "m9",
    "venueId": "v3",
    "screenId": "s6",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "2D",
    "basePrice": 300,
    "availableSeats": 11,
    "totalSeats": 60,
    "occupancyRate": 82,
    "dynamicMultiplier": 1.25
  },
  {
    "showId": "sh_52",
    "eventId": "m9",
    "venueId": "v3",
    "screenId": "s6",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "2D",
    "basePrice": 300,
    "availableSeats": 43,
    "totalSeats": 60,
    "occupancyRate": 29,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_53",
    "eventId": "m9",
    "venueId": "v6",
    "screenId": "s11",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "2D",
    "basePrice": 340,
    "availableSeats": 46,
    "totalSeats": 60,
    "occupancyRate": 23,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_54",
    "eventId": "m9",
    "venueId": "v6",
    "screenId": "s11",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "2D",
    "basePrice": 340,
    "availableSeats": 36,
    "totalSeats": 60,
    "occupancyRate": 40,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_55",
    "eventId": "m10",
    "venueId": "v2",
    "screenId": "s4",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "3D",
    "basePrice": 290,
    "availableSeats": 13,
    "totalSeats": 60,
    "occupancyRate": 78,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_56",
    "eventId": "m10",
    "venueId": "v2",
    "screenId": "s4",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "3D",
    "basePrice": 290,
    "availableSeats": 45,
    "totalSeats": 60,
    "occupancyRate": 25,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_57",
    "eventId": "m10",
    "venueId": "v4",
    "screenId": "s8",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "3D",
    "basePrice": 330,
    "availableSeats": 49,
    "totalSeats": 60,
    "occupancyRate": 19,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_58",
    "eventId": "m10",
    "venueId": "v4",
    "screenId": "s8",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "3D",
    "basePrice": 330,
    "availableSeats": 38,
    "totalSeats": 60,
    "occupancyRate": 36,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_59",
    "eventId": "m10",
    "venueId": "v7",
    "screenId": "s13",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "3D",
    "basePrice": 370,
    "availableSeats": 42,
    "totalSeats": 60,
    "occupancyRate": 30,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_60",
    "eventId": "m10",
    "venueId": "v7",
    "screenId": "s13",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "3D",
    "basePrice": 370,
    "availableSeats": 32,
    "totalSeats": 60,
    "occupancyRate": 47,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_61",
    "eventId": "m11",
    "venueId": "v3",
    "screenId": "s6",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "2D",
    "basePrice": 320,
    "availableSeats": 51,
    "totalSeats": 60,
    "occupancyRate": 15,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_62",
    "eventId": "m11",
    "venueId": "v3",
    "screenId": "s6",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "2D",
    "basePrice": 320,
    "availableSeats": 41,
    "totalSeats": 60,
    "occupancyRate": 32,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_63",
    "eventId": "m11",
    "venueId": "v5",
    "screenId": "s10",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "2D",
    "basePrice": 360,
    "availableSeats": 44,
    "totalSeats": 60,
    "occupancyRate": 26,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_64",
    "eventId": "m11",
    "venueId": "v5",
    "screenId": "s10",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "2D",
    "basePrice": 360,
    "availableSeats": 34,
    "totalSeats": 60,
    "occupancyRate": 43,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_65",
    "eventId": "m11",
    "venueId": "v8",
    "screenId": "s14",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "2D",
    "basePrice": 400,
    "availableSeats": 38,
    "totalSeats": 60,
    "occupancyRate": 37,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_66",
    "eventId": "m11",
    "venueId": "v8",
    "screenId": "s14",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "2D",
    "basePrice": 400,
    "availableSeats": 28,
    "totalSeats": 60,
    "occupancyRate": 54,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_67",
    "eventId": "m12",
    "venueId": "v4",
    "screenId": "s8",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "2D",
    "basePrice": 350,
    "availableSeats": 47,
    "totalSeats": 60,
    "occupancyRate": 22,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_68",
    "eventId": "m12",
    "venueId": "v4",
    "screenId": "s8",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "2D",
    "basePrice": 350,
    "availableSeats": 37,
    "totalSeats": 60,
    "occupancyRate": 39,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_69",
    "eventId": "m12",
    "venueId": "v6",
    "screenId": "s11",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "2D",
    "basePrice": 390,
    "availableSeats": 40,
    "totalSeats": 60,
    "occupancyRate": 33,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_70",
    "eventId": "m12",
    "venueId": "v6",
    "screenId": "s11",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "2D",
    "basePrice": 390,
    "availableSeats": 30,
    "totalSeats": 60,
    "occupancyRate": 50,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_71",
    "eventId": "m12",
    "venueId": "v1",
    "screenId": "s1",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "2D",
    "basePrice": 230,
    "availableSeats": 34,
    "totalSeats": 60,
    "occupancyRate": 44,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_72",
    "eventId": "m12",
    "venueId": "v1",
    "screenId": "s1",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "2D",
    "basePrice": 230,
    "availableSeats": 23,
    "totalSeats": 60,
    "occupancyRate": 61,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_73",
    "eventId": "m13",
    "venueId": "v5",
    "screenId": "s10",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "2D",
    "basePrice": 380,
    "availableSeats": 43,
    "totalSeats": 60,
    "occupancyRate": 29,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_74",
    "eventId": "m13",
    "venueId": "v5",
    "screenId": "s10",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "2D",
    "basePrice": 380,
    "availableSeats": 32,
    "totalSeats": 60,
    "occupancyRate": 46,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_75",
    "eventId": "m13",
    "venueId": "v7",
    "screenId": "s13",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "2D",
    "basePrice": 220,
    "availableSeats": 36,
    "totalSeats": 60,
    "occupancyRate": 40,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_76",
    "eventId": "m13",
    "venueId": "v7",
    "screenId": "s13",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "2D",
    "basePrice": 220,
    "availableSeats": 26,
    "totalSeats": 60,
    "occupancyRate": 57,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_77",
    "eventId": "m13",
    "venueId": "v2",
    "screenId": "s4",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "2D",
    "basePrice": 260,
    "availableSeats": 29,
    "totalSeats": 60,
    "occupancyRate": 51,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_78",
    "eventId": "m13",
    "venueId": "v2",
    "screenId": "s4",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "2D",
    "basePrice": 260,
    "availableSeats": 19,
    "totalSeats": 60,
    "occupancyRate": 68,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_79",
    "eventId": "m14",
    "venueId": "v6",
    "screenId": "s11",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "2D",
    "basePrice": 410,
    "availableSeats": 38,
    "totalSeats": 60,
    "occupancyRate": 36,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_80",
    "eventId": "m14",
    "venueId": "v6",
    "screenId": "s11",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "2D",
    "basePrice": 410,
    "availableSeats": 28,
    "totalSeats": 60,
    "occupancyRate": 53,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_81",
    "eventId": "m14",
    "venueId": "v8",
    "screenId": "s14",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "2D",
    "basePrice": 250,
    "availableSeats": 32,
    "totalSeats": 60,
    "occupancyRate": 47,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_82",
    "eventId": "m14",
    "venueId": "v8",
    "screenId": "s14",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "2D",
    "basePrice": 250,
    "availableSeats": 22,
    "totalSeats": 60,
    "occupancyRate": 64,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_83",
    "eventId": "m14",
    "venueId": "v3",
    "screenId": "s6",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "2D",
    "basePrice": 290,
    "availableSeats": 25,
    "totalSeats": 60,
    "occupancyRate": 58,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_84",
    "eventId": "m14",
    "venueId": "v3",
    "screenId": "s6",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "2D",
    "basePrice": 290,
    "availableSeats": 15,
    "totalSeats": 60,
    "occupancyRate": 75,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_85",
    "eventId": "m15",
    "venueId": "v7",
    "screenId": "s13",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "2D",
    "basePrice": 240,
    "availableSeats": 34,
    "totalSeats": 60,
    "occupancyRate": 43,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_86",
    "eventId": "m15",
    "venueId": "v7",
    "screenId": "s13",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "2D",
    "basePrice": 240,
    "availableSeats": 24,
    "totalSeats": 60,
    "occupancyRate": 60,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_87",
    "eventId": "m15",
    "venueId": "v1",
    "screenId": "s1",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "2D",
    "basePrice": 280,
    "availableSeats": 28,
    "totalSeats": 60,
    "occupancyRate": 54,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_88",
    "eventId": "m15",
    "venueId": "v1",
    "screenId": "s1",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "2D",
    "basePrice": 280,
    "availableSeats": 17,
    "totalSeats": 60,
    "occupancyRate": 71,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_89",
    "eventId": "m15",
    "venueId": "v4",
    "screenId": "s8",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "2D",
    "basePrice": 320,
    "availableSeats": 21,
    "totalSeats": 60,
    "occupancyRate": 65,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_90",
    "eventId": "m15",
    "venueId": "v4",
    "screenId": "s8",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "2D",
    "basePrice": 320,
    "availableSeats": 11,
    "totalSeats": 60,
    "occupancyRate": 82,
    "dynamicMultiplier": 1.25
  },
  {
    "showId": "sh_91",
    "eventId": "m16",
    "venueId": "v8",
    "screenId": "s14",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "3D",
    "basePrice": 270,
    "availableSeats": 30,
    "totalSeats": 60,
    "occupancyRate": 50,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_92",
    "eventId": "m16",
    "venueId": "v8",
    "screenId": "s14",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "3D",
    "basePrice": 270,
    "availableSeats": 20,
    "totalSeats": 60,
    "occupancyRate": 67,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_93",
    "eventId": "m16",
    "venueId": "v2",
    "screenId": "s4",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "3D",
    "basePrice": 310,
    "availableSeats": 23,
    "totalSeats": 60,
    "occupancyRate": 61,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_94",
    "eventId": "m16",
    "venueId": "v2",
    "screenId": "s4",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "3D",
    "basePrice": 310,
    "availableSeats": 13,
    "totalSeats": 60,
    "occupancyRate": 78,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_95",
    "eventId": "m16",
    "venueId": "v5",
    "screenId": "s10",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "3D",
    "basePrice": 350,
    "availableSeats": 17,
    "totalSeats": 60,
    "occupancyRate": 72,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_96",
    "eventId": "m16",
    "venueId": "v5",
    "screenId": "s10",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "3D",
    "basePrice": 350,
    "availableSeats": 49,
    "totalSeats": 60,
    "occupancyRate": 19,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_97",
    "eventId": "m17",
    "venueId": "v1",
    "screenId": "s1",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "IMAX 2D",
    "basePrice": 300,
    "availableSeats": 26,
    "totalSeats": 60,
    "occupancyRate": 57,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_98",
    "eventId": "m17",
    "venueId": "v1",
    "screenId": "s1",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "IMAX 2D",
    "basePrice": 300,
    "availableSeats": 16,
    "totalSeats": 60,
    "occupancyRate": 74,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_99",
    "eventId": "m17",
    "venueId": "v3",
    "screenId": "s6",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "IMAX 2D",
    "basePrice": 340,
    "availableSeats": 19,
    "totalSeats": 60,
    "occupancyRate": 68,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_100",
    "eventId": "m17",
    "venueId": "v3",
    "screenId": "s6",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "IMAX 2D",
    "basePrice": 340,
    "availableSeats": 51,
    "totalSeats": 60,
    "occupancyRate": 15,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_101",
    "eventId": "m17",
    "venueId": "v6",
    "screenId": "s11",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "IMAX 2D",
    "basePrice": 380,
    "availableSeats": 13,
    "totalSeats": 60,
    "occupancyRate": 79,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_102",
    "eventId": "m17",
    "venueId": "v6",
    "screenId": "s11",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "IMAX 2D",
    "basePrice": 380,
    "availableSeats": 44,
    "totalSeats": 60,
    "occupancyRate": 26,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_103",
    "eventId": "m18",
    "venueId": "v2",
    "screenId": "s4",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "IMAX 2D",
    "basePrice": 330,
    "availableSeats": 22,
    "totalSeats": 60,
    "occupancyRate": 64,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_104",
    "eventId": "m18",
    "venueId": "v2",
    "screenId": "s4",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "IMAX 2D",
    "basePrice": 330,
    "availableSeats": 11,
    "totalSeats": 60,
    "occupancyRate": 81,
    "dynamicMultiplier": 1.25
  },
  {
    "showId": "sh_105",
    "eventId": "m18",
    "venueId": "v4",
    "screenId": "s8",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "IMAX 2D",
    "basePrice": 370,
    "availableSeats": 15,
    "totalSeats": 60,
    "occupancyRate": 75,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_106",
    "eventId": "m18",
    "venueId": "v4",
    "screenId": "s8",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "IMAX 2D",
    "basePrice": 370,
    "availableSeats": 47,
    "totalSeats": 60,
    "occupancyRate": 22,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_107",
    "eventId": "m18",
    "venueId": "v7",
    "screenId": "s13",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "IMAX 2D",
    "basePrice": 410,
    "availableSeats": 50,
    "totalSeats": 60,
    "occupancyRate": 16,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_108",
    "eventId": "m18",
    "venueId": "v7",
    "screenId": "s13",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "IMAX 2D",
    "basePrice": 410,
    "availableSeats": 40,
    "totalSeats": 60,
    "occupancyRate": 33,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_109",
    "eventId": "m19",
    "venueId": "v3",
    "screenId": "s6",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "2D",
    "basePrice": 360,
    "availableSeats": 17,
    "totalSeats": 60,
    "occupancyRate": 71,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_110",
    "eventId": "m19",
    "venueId": "v3",
    "screenId": "s6",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "2D",
    "basePrice": 360,
    "availableSeats": 49,
    "totalSeats": 60,
    "occupancyRate": 18,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_111",
    "eventId": "m19",
    "venueId": "v5",
    "screenId": "s10",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "2D",
    "basePrice": 400,
    "availableSeats": 11,
    "totalSeats": 60,
    "occupancyRate": 82,
    "dynamicMultiplier": 1.25
  },
  {
    "showId": "sh_112",
    "eventId": "m19",
    "venueId": "v5",
    "screenId": "s10",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "2D",
    "basePrice": 400,
    "availableSeats": 43,
    "totalSeats": 60,
    "occupancyRate": 29,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_113",
    "eventId": "m19",
    "venueId": "v8",
    "screenId": "s14",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "2D",
    "basePrice": 240,
    "availableSeats": 46,
    "totalSeats": 60,
    "occupancyRate": 23,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_114",
    "eventId": "m19",
    "venueId": "v8",
    "screenId": "s14",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "2D",
    "basePrice": 240,
    "availableSeats": 36,
    "totalSeats": 60,
    "occupancyRate": 40,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_115",
    "eventId": "m20",
    "venueId": "v4",
    "screenId": "s8",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "2D",
    "basePrice": 390,
    "availableSeats": 13,
    "totalSeats": 60,
    "occupancyRate": 78,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_116",
    "eventId": "m20",
    "venueId": "v4",
    "screenId": "s8",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "2D",
    "basePrice": 390,
    "availableSeats": 45,
    "totalSeats": 60,
    "occupancyRate": 25,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_117",
    "eventId": "m20",
    "venueId": "v6",
    "screenId": "s11",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "2D",
    "basePrice": 230,
    "availableSeats": 49,
    "totalSeats": 60,
    "occupancyRate": 19,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_118",
    "eventId": "m20",
    "venueId": "v6",
    "screenId": "s11",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "2D",
    "basePrice": 230,
    "availableSeats": 38,
    "totalSeats": 60,
    "occupancyRate": 36,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_119",
    "eventId": "m20",
    "venueId": "v1",
    "screenId": "s1",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "2D",
    "basePrice": 270,
    "availableSeats": 42,
    "totalSeats": 60,
    "occupancyRate": 30,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_120",
    "eventId": "m20",
    "venueId": "v1",
    "screenId": "s1",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "2D",
    "basePrice": 270,
    "availableSeats": 32,
    "totalSeats": 60,
    "occupancyRate": 47,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_121",
    "eventId": "m21",
    "venueId": "v5",
    "screenId": "s10",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "3D",
    "basePrice": 220,
    "availableSeats": 51,
    "totalSeats": 60,
    "occupancyRate": 15,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_122",
    "eventId": "m21",
    "venueId": "v5",
    "screenId": "s10",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "3D",
    "basePrice": 220,
    "availableSeats": 41,
    "totalSeats": 60,
    "occupancyRate": 32,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_123",
    "eventId": "m21",
    "venueId": "v7",
    "screenId": "s13",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "3D",
    "basePrice": 260,
    "availableSeats": 44,
    "totalSeats": 60,
    "occupancyRate": 26,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_124",
    "eventId": "m21",
    "venueId": "v7",
    "screenId": "s13",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "3D",
    "basePrice": 260,
    "availableSeats": 34,
    "totalSeats": 60,
    "occupancyRate": 43,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_125",
    "eventId": "m21",
    "venueId": "v2",
    "screenId": "s4",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "3D",
    "basePrice": 300,
    "availableSeats": 38,
    "totalSeats": 60,
    "occupancyRate": 37,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_126",
    "eventId": "m21",
    "venueId": "v2",
    "screenId": "s4",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "3D",
    "basePrice": 300,
    "availableSeats": 28,
    "totalSeats": 60,
    "occupancyRate": 54,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_127",
    "eventId": "m22",
    "venueId": "v6",
    "screenId": "s11",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "2D",
    "basePrice": 250,
    "availableSeats": 47,
    "totalSeats": 60,
    "occupancyRate": 22,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_128",
    "eventId": "m22",
    "venueId": "v6",
    "screenId": "s11",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "2D",
    "basePrice": 250,
    "availableSeats": 37,
    "totalSeats": 60,
    "occupancyRate": 39,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_129",
    "eventId": "m22",
    "venueId": "v8",
    "screenId": "s14",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "2D",
    "basePrice": 290,
    "availableSeats": 40,
    "totalSeats": 60,
    "occupancyRate": 33,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_130",
    "eventId": "m22",
    "venueId": "v8",
    "screenId": "s14",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "2D",
    "basePrice": 290,
    "availableSeats": 30,
    "totalSeats": 60,
    "occupancyRate": 50,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_131",
    "eventId": "m22",
    "venueId": "v3",
    "screenId": "s6",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "2D",
    "basePrice": 330,
    "availableSeats": 34,
    "totalSeats": 60,
    "occupancyRate": 44,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_132",
    "eventId": "m22",
    "venueId": "v3",
    "screenId": "s6",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "2D",
    "basePrice": 330,
    "availableSeats": 23,
    "totalSeats": 60,
    "occupancyRate": 61,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_133",
    "eventId": "m23",
    "venueId": "v7",
    "screenId": "s13",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "2D",
    "basePrice": 280,
    "availableSeats": 43,
    "totalSeats": 60,
    "occupancyRate": 29,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_134",
    "eventId": "m23",
    "venueId": "v7",
    "screenId": "s13",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "2D",
    "basePrice": 280,
    "availableSeats": 32,
    "totalSeats": 60,
    "occupancyRate": 46,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_135",
    "eventId": "m23",
    "venueId": "v1",
    "screenId": "s1",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "2D",
    "basePrice": 320,
    "availableSeats": 36,
    "totalSeats": 60,
    "occupancyRate": 40,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_136",
    "eventId": "m23",
    "venueId": "v1",
    "screenId": "s1",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "2D",
    "basePrice": 320,
    "availableSeats": 26,
    "totalSeats": 60,
    "occupancyRate": 57,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_137",
    "eventId": "m23",
    "venueId": "v4",
    "screenId": "s8",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "2D",
    "basePrice": 360,
    "availableSeats": 29,
    "totalSeats": 60,
    "occupancyRate": 51,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_138",
    "eventId": "m23",
    "venueId": "v4",
    "screenId": "s8",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "2D",
    "basePrice": 360,
    "availableSeats": 19,
    "totalSeats": 60,
    "occupancyRate": 68,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_139",
    "eventId": "m24",
    "venueId": "v8",
    "screenId": "s14",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "2D",
    "basePrice": 310,
    "availableSeats": 38,
    "totalSeats": 60,
    "occupancyRate": 36,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_140",
    "eventId": "m24",
    "venueId": "v8",
    "screenId": "s14",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "2D",
    "basePrice": 310,
    "availableSeats": 28,
    "totalSeats": 60,
    "occupancyRate": 53,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_141",
    "eventId": "m24",
    "venueId": "v2",
    "screenId": "s4",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "2D",
    "basePrice": 350,
    "availableSeats": 32,
    "totalSeats": 60,
    "occupancyRate": 47,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_142",
    "eventId": "m24",
    "venueId": "v2",
    "screenId": "s4",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "2D",
    "basePrice": 350,
    "availableSeats": 22,
    "totalSeats": 60,
    "occupancyRate": 64,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_143",
    "eventId": "m24",
    "venueId": "v5",
    "screenId": "s10",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "2D",
    "basePrice": 390,
    "availableSeats": 25,
    "totalSeats": 60,
    "occupancyRate": 58,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_144",
    "eventId": "m24",
    "venueId": "v5",
    "screenId": "s10",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "2D",
    "basePrice": 390,
    "availableSeats": 15,
    "totalSeats": 60,
    "occupancyRate": 75,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_145",
    "eventId": "m25",
    "venueId": "v1",
    "screenId": "s1",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "2D",
    "basePrice": 340,
    "availableSeats": 34,
    "totalSeats": 60,
    "occupancyRate": 43,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_146",
    "eventId": "m25",
    "venueId": "v1",
    "screenId": "s1",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "2D",
    "basePrice": 340,
    "availableSeats": 24,
    "totalSeats": 60,
    "occupancyRate": 60,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_147",
    "eventId": "m25",
    "venueId": "v3",
    "screenId": "s6",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "2D",
    "basePrice": 380,
    "availableSeats": 28,
    "totalSeats": 60,
    "occupancyRate": 54,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_148",
    "eventId": "m25",
    "venueId": "v3",
    "screenId": "s6",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "2D",
    "basePrice": 380,
    "availableSeats": 17,
    "totalSeats": 60,
    "occupancyRate": 71,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_149",
    "eventId": "m25",
    "venueId": "v6",
    "screenId": "s11",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "2D",
    "basePrice": 220,
    "availableSeats": 21,
    "totalSeats": 60,
    "occupancyRate": 65,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_150",
    "eventId": "m25",
    "venueId": "v6",
    "screenId": "s11",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "2D",
    "basePrice": 220,
    "availableSeats": 11,
    "totalSeats": 60,
    "occupancyRate": 82,
    "dynamicMultiplier": 1.25
  },
  {
    "showId": "sh_151",
    "eventId": "m26",
    "venueId": "v2",
    "screenId": "s4",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "2D",
    "basePrice": 370,
    "availableSeats": 30,
    "totalSeats": 60,
    "occupancyRate": 50,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_152",
    "eventId": "m26",
    "venueId": "v2",
    "screenId": "s4",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "2D",
    "basePrice": 370,
    "availableSeats": 20,
    "totalSeats": 60,
    "occupancyRate": 67,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_153",
    "eventId": "m26",
    "venueId": "v4",
    "screenId": "s8",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "2D",
    "basePrice": 410,
    "availableSeats": 23,
    "totalSeats": 60,
    "occupancyRate": 61,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_154",
    "eventId": "m26",
    "venueId": "v4",
    "screenId": "s8",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "2D",
    "basePrice": 410,
    "availableSeats": 13,
    "totalSeats": 60,
    "occupancyRate": 78,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_155",
    "eventId": "m26",
    "venueId": "v7",
    "screenId": "s13",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "2D",
    "basePrice": 250,
    "availableSeats": 17,
    "totalSeats": 60,
    "occupancyRate": 72,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_156",
    "eventId": "m26",
    "venueId": "v7",
    "screenId": "s13",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "2D",
    "basePrice": 250,
    "availableSeats": 49,
    "totalSeats": 60,
    "occupancyRate": 19,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_157",
    "eventId": "m27",
    "venueId": "v3",
    "screenId": "s6",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "2D",
    "basePrice": 400,
    "availableSeats": 26,
    "totalSeats": 60,
    "occupancyRate": 57,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_158",
    "eventId": "m27",
    "venueId": "v3",
    "screenId": "s6",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "2D",
    "basePrice": 400,
    "availableSeats": 16,
    "totalSeats": 60,
    "occupancyRate": 74,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_159",
    "eventId": "m27",
    "venueId": "v5",
    "screenId": "s10",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "2D",
    "basePrice": 240,
    "availableSeats": 19,
    "totalSeats": 60,
    "occupancyRate": 68,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_160",
    "eventId": "m27",
    "venueId": "v5",
    "screenId": "s10",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "2D",
    "basePrice": 240,
    "availableSeats": 51,
    "totalSeats": 60,
    "occupancyRate": 15,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_161",
    "eventId": "m27",
    "venueId": "v8",
    "screenId": "s14",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "2D",
    "basePrice": 280,
    "availableSeats": 13,
    "totalSeats": 60,
    "occupancyRate": 79,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_162",
    "eventId": "m27",
    "venueId": "v8",
    "screenId": "s14",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "2D",
    "basePrice": 280,
    "availableSeats": 44,
    "totalSeats": 60,
    "occupancyRate": 26,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_163",
    "eventId": "m28",
    "venueId": "v4",
    "screenId": "s8",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "2D",
    "basePrice": 230,
    "availableSeats": 22,
    "totalSeats": 60,
    "occupancyRate": 64,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_164",
    "eventId": "m28",
    "venueId": "v4",
    "screenId": "s8",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "2D",
    "basePrice": 230,
    "availableSeats": 11,
    "totalSeats": 60,
    "occupancyRate": 81,
    "dynamicMultiplier": 1.25
  },
  {
    "showId": "sh_165",
    "eventId": "m28",
    "venueId": "v6",
    "screenId": "s11",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "2D",
    "basePrice": 270,
    "availableSeats": 15,
    "totalSeats": 60,
    "occupancyRate": 75,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_166",
    "eventId": "m28",
    "venueId": "v6",
    "screenId": "s11",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "2D",
    "basePrice": 270,
    "availableSeats": 47,
    "totalSeats": 60,
    "occupancyRate": 22,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_167",
    "eventId": "m28",
    "venueId": "v1",
    "screenId": "s1",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "2D",
    "basePrice": 310,
    "availableSeats": 50,
    "totalSeats": 60,
    "occupancyRate": 16,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_168",
    "eventId": "m28",
    "venueId": "v1",
    "screenId": "s1",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "2D",
    "basePrice": 310,
    "availableSeats": 40,
    "totalSeats": 60,
    "occupancyRate": 33,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_169",
    "eventId": "m29",
    "venueId": "v5",
    "screenId": "s10",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "2D",
    "basePrice": 260,
    "availableSeats": 17,
    "totalSeats": 60,
    "occupancyRate": 71,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_170",
    "eventId": "m29",
    "venueId": "v5",
    "screenId": "s10",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "2D",
    "basePrice": 260,
    "availableSeats": 49,
    "totalSeats": 60,
    "occupancyRate": 18,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_171",
    "eventId": "m29",
    "venueId": "v7",
    "screenId": "s13",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "2D",
    "basePrice": 300,
    "availableSeats": 11,
    "totalSeats": 60,
    "occupancyRate": 82,
    "dynamicMultiplier": 1.25
  },
  {
    "showId": "sh_172",
    "eventId": "m29",
    "venueId": "v7",
    "screenId": "s13",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "2D",
    "basePrice": 300,
    "availableSeats": 43,
    "totalSeats": 60,
    "occupancyRate": 29,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_173",
    "eventId": "m29",
    "venueId": "v2",
    "screenId": "s4",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "2D",
    "basePrice": 340,
    "availableSeats": 46,
    "totalSeats": 60,
    "occupancyRate": 23,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_174",
    "eventId": "m29",
    "venueId": "v2",
    "screenId": "s4",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "2D",
    "basePrice": 340,
    "availableSeats": 36,
    "totalSeats": 60,
    "occupancyRate": 40,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_175",
    "eventId": "m30",
    "venueId": "v6",
    "screenId": "s11",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "2D",
    "basePrice": 290,
    "availableSeats": 13,
    "totalSeats": 60,
    "occupancyRate": 78,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_176",
    "eventId": "m30",
    "venueId": "v6",
    "screenId": "s11",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "2D",
    "basePrice": 290,
    "availableSeats": 45,
    "totalSeats": 60,
    "occupancyRate": 25,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_177",
    "eventId": "m30",
    "venueId": "v8",
    "screenId": "s14",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "2D",
    "basePrice": 330,
    "availableSeats": 49,
    "totalSeats": 60,
    "occupancyRate": 19,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_178",
    "eventId": "m30",
    "venueId": "v8",
    "screenId": "s14",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "2D",
    "basePrice": 330,
    "availableSeats": 38,
    "totalSeats": 60,
    "occupancyRate": 36,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_179",
    "eventId": "m30",
    "venueId": "v3",
    "screenId": "s6",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "2D",
    "basePrice": 370,
    "availableSeats": 42,
    "totalSeats": 60,
    "occupancyRate": 30,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_180",
    "eventId": "m30",
    "venueId": "v3",
    "screenId": "s6",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "2D",
    "basePrice": 370,
    "availableSeats": 32,
    "totalSeats": 60,
    "occupancyRate": 47,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_181",
    "eventId": "m31",
    "venueId": "v7",
    "screenId": "s13",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "2D",
    "basePrice": 320,
    "availableSeats": 51,
    "totalSeats": 60,
    "occupancyRate": 15,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_182",
    "eventId": "m31",
    "venueId": "v7",
    "screenId": "s13",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "2D",
    "basePrice": 320,
    "availableSeats": 41,
    "totalSeats": 60,
    "occupancyRate": 32,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_183",
    "eventId": "m31",
    "venueId": "v1",
    "screenId": "s1",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "2D",
    "basePrice": 360,
    "availableSeats": 44,
    "totalSeats": 60,
    "occupancyRate": 26,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_184",
    "eventId": "m31",
    "venueId": "v1",
    "screenId": "s1",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "2D",
    "basePrice": 360,
    "availableSeats": 34,
    "totalSeats": 60,
    "occupancyRate": 43,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_185",
    "eventId": "m31",
    "venueId": "v4",
    "screenId": "s8",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "2D",
    "basePrice": 400,
    "availableSeats": 38,
    "totalSeats": 60,
    "occupancyRate": 37,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_186",
    "eventId": "m31",
    "venueId": "v4",
    "screenId": "s8",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "2D",
    "basePrice": 400,
    "availableSeats": 28,
    "totalSeats": 60,
    "occupancyRate": 54,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_187",
    "eventId": "m32",
    "venueId": "v8",
    "screenId": "s14",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "IMAX 70mm",
    "basePrice": 350,
    "availableSeats": 47,
    "totalSeats": 60,
    "occupancyRate": 22,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_188",
    "eventId": "m32",
    "venueId": "v8",
    "screenId": "s14",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "IMAX 70mm",
    "basePrice": 350,
    "availableSeats": 37,
    "totalSeats": 60,
    "occupancyRate": 39,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_189",
    "eventId": "m32",
    "venueId": "v2",
    "screenId": "s4",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "IMAX 70mm",
    "basePrice": 390,
    "availableSeats": 40,
    "totalSeats": 60,
    "occupancyRate": 33,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_190",
    "eventId": "m32",
    "venueId": "v2",
    "screenId": "s4",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "IMAX 70mm",
    "basePrice": 390,
    "availableSeats": 30,
    "totalSeats": 60,
    "occupancyRate": 50,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_191",
    "eventId": "m32",
    "venueId": "v5",
    "screenId": "s10",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "IMAX 70mm",
    "basePrice": 230,
    "availableSeats": 34,
    "totalSeats": 60,
    "occupancyRate": 44,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_192",
    "eventId": "m32",
    "venueId": "v5",
    "screenId": "s10",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "IMAX 70mm",
    "basePrice": 230,
    "availableSeats": 23,
    "totalSeats": 60,
    "occupancyRate": 61,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_193",
    "eventId": "m33",
    "venueId": "v1",
    "screenId": "s1",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "IMAX 2D",
    "basePrice": 380,
    "availableSeats": 43,
    "totalSeats": 60,
    "occupancyRate": 29,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_194",
    "eventId": "m33",
    "venueId": "v1",
    "screenId": "s1",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "IMAX 2D",
    "basePrice": 380,
    "availableSeats": 32,
    "totalSeats": 60,
    "occupancyRate": 46,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_195",
    "eventId": "m33",
    "venueId": "v3",
    "screenId": "s6",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "IMAX 2D",
    "basePrice": 220,
    "availableSeats": 36,
    "totalSeats": 60,
    "occupancyRate": 40,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_196",
    "eventId": "m33",
    "venueId": "v3",
    "screenId": "s6",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "IMAX 2D",
    "basePrice": 220,
    "availableSeats": 26,
    "totalSeats": 60,
    "occupancyRate": 57,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_197",
    "eventId": "m33",
    "venueId": "v6",
    "screenId": "s11",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "IMAX 2D",
    "basePrice": 260,
    "availableSeats": 29,
    "totalSeats": 60,
    "occupancyRate": 51,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_198",
    "eventId": "m33",
    "venueId": "v6",
    "screenId": "s11",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "IMAX 2D",
    "basePrice": 260,
    "availableSeats": 19,
    "totalSeats": 60,
    "occupancyRate": 68,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_199",
    "eventId": "m34",
    "venueId": "v2",
    "screenId": "s4",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "3D",
    "basePrice": 410,
    "availableSeats": 38,
    "totalSeats": 60,
    "occupancyRate": 36,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_200",
    "eventId": "m34",
    "venueId": "v2",
    "screenId": "s4",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "3D",
    "basePrice": 410,
    "availableSeats": 28,
    "totalSeats": 60,
    "occupancyRate": 53,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_201",
    "eventId": "m34",
    "venueId": "v4",
    "screenId": "s8",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "3D",
    "basePrice": 250,
    "availableSeats": 32,
    "totalSeats": 60,
    "occupancyRate": 47,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_202",
    "eventId": "m34",
    "venueId": "v4",
    "screenId": "s8",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "3D",
    "basePrice": 250,
    "availableSeats": 22,
    "totalSeats": 60,
    "occupancyRate": 64,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_203",
    "eventId": "m34",
    "venueId": "v7",
    "screenId": "s13",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "3D",
    "basePrice": 290,
    "availableSeats": 25,
    "totalSeats": 60,
    "occupancyRate": 58,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_204",
    "eventId": "m34",
    "venueId": "v7",
    "screenId": "s13",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "3D",
    "basePrice": 290,
    "availableSeats": 15,
    "totalSeats": 60,
    "occupancyRate": 75,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_205",
    "eventId": "m35",
    "venueId": "v3",
    "screenId": "s6",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "IMAX 3D",
    "basePrice": 240,
    "availableSeats": 34,
    "totalSeats": 60,
    "occupancyRate": 43,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_206",
    "eventId": "m35",
    "venueId": "v3",
    "screenId": "s6",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "IMAX 3D",
    "basePrice": 240,
    "availableSeats": 24,
    "totalSeats": 60,
    "occupancyRate": 60,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_207",
    "eventId": "m35",
    "venueId": "v5",
    "screenId": "s10",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "IMAX 3D",
    "basePrice": 280,
    "availableSeats": 28,
    "totalSeats": 60,
    "occupancyRate": 54,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_208",
    "eventId": "m35",
    "venueId": "v5",
    "screenId": "s10",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "IMAX 3D",
    "basePrice": 280,
    "availableSeats": 17,
    "totalSeats": 60,
    "occupancyRate": 71,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_209",
    "eventId": "m35",
    "venueId": "v8",
    "screenId": "s14",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "IMAX 3D",
    "basePrice": 320,
    "availableSeats": 21,
    "totalSeats": 60,
    "occupancyRate": 65,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_210",
    "eventId": "m35",
    "venueId": "v8",
    "screenId": "s14",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "IMAX 3D",
    "basePrice": 320,
    "availableSeats": 11,
    "totalSeats": 60,
    "occupancyRate": 82,
    "dynamicMultiplier": 1.25
  },
  {
    "showId": "sh_211",
    "eventId": "m36",
    "venueId": "v4",
    "screenId": "s8",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "3D",
    "basePrice": 270,
    "availableSeats": 30,
    "totalSeats": 60,
    "occupancyRate": 50,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_212",
    "eventId": "m36",
    "venueId": "v4",
    "screenId": "s8",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "3D",
    "basePrice": 270,
    "availableSeats": 20,
    "totalSeats": 60,
    "occupancyRate": 67,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_213",
    "eventId": "m36",
    "venueId": "v6",
    "screenId": "s11",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "3D",
    "basePrice": 310,
    "availableSeats": 23,
    "totalSeats": 60,
    "occupancyRate": 61,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_214",
    "eventId": "m36",
    "venueId": "v6",
    "screenId": "s11",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "3D",
    "basePrice": 310,
    "availableSeats": 13,
    "totalSeats": 60,
    "occupancyRate": 78,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_215",
    "eventId": "m36",
    "venueId": "v1",
    "screenId": "s1",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "3D",
    "basePrice": 350,
    "availableSeats": 17,
    "totalSeats": 60,
    "occupancyRate": 72,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_216",
    "eventId": "m36",
    "venueId": "v1",
    "screenId": "s1",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "3D",
    "basePrice": 350,
    "availableSeats": 49,
    "totalSeats": 60,
    "occupancyRate": 19,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_217",
    "eventId": "m37",
    "venueId": "v5",
    "screenId": "s10",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "IMAX 2D",
    "basePrice": 300,
    "availableSeats": 26,
    "totalSeats": 60,
    "occupancyRate": 57,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_218",
    "eventId": "m37",
    "venueId": "v5",
    "screenId": "s10",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "IMAX 2D",
    "basePrice": 300,
    "availableSeats": 16,
    "totalSeats": 60,
    "occupancyRate": 74,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_219",
    "eventId": "m37",
    "venueId": "v7",
    "screenId": "s13",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "IMAX 2D",
    "basePrice": 340,
    "availableSeats": 19,
    "totalSeats": 60,
    "occupancyRate": 68,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_220",
    "eventId": "m37",
    "venueId": "v7",
    "screenId": "s13",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "IMAX 2D",
    "basePrice": 340,
    "availableSeats": 51,
    "totalSeats": 60,
    "occupancyRate": 15,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_221",
    "eventId": "m37",
    "venueId": "v2",
    "screenId": "s4",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "IMAX 2D",
    "basePrice": 380,
    "availableSeats": 13,
    "totalSeats": 60,
    "occupancyRate": 79,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_222",
    "eventId": "m37",
    "venueId": "v2",
    "screenId": "s4",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "IMAX 2D",
    "basePrice": 380,
    "availableSeats": 44,
    "totalSeats": 60,
    "occupancyRate": 26,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_223",
    "eventId": "m38",
    "venueId": "v6",
    "screenId": "s11",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "IMAX 2D",
    "basePrice": 330,
    "availableSeats": 22,
    "totalSeats": 60,
    "occupancyRate": 64,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_224",
    "eventId": "m38",
    "venueId": "v6",
    "screenId": "s11",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "IMAX 2D",
    "basePrice": 330,
    "availableSeats": 11,
    "totalSeats": 60,
    "occupancyRate": 81,
    "dynamicMultiplier": 1.25
  },
  {
    "showId": "sh_225",
    "eventId": "m38",
    "venueId": "v8",
    "screenId": "s14",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "IMAX 2D",
    "basePrice": 370,
    "availableSeats": 15,
    "totalSeats": 60,
    "occupancyRate": 75,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_226",
    "eventId": "m38",
    "venueId": "v8",
    "screenId": "s14",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "IMAX 2D",
    "basePrice": 370,
    "availableSeats": 47,
    "totalSeats": 60,
    "occupancyRate": 22,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_227",
    "eventId": "m38",
    "venueId": "v3",
    "screenId": "s6",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "IMAX 2D",
    "basePrice": 410,
    "availableSeats": 50,
    "totalSeats": 60,
    "occupancyRate": 16,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_228",
    "eventId": "m38",
    "venueId": "v3",
    "screenId": "s6",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "IMAX 2D",
    "basePrice": 410,
    "availableSeats": 40,
    "totalSeats": 60,
    "occupancyRate": 33,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_229",
    "eventId": "m39",
    "venueId": "v7",
    "screenId": "s13",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "IMAX 2D",
    "basePrice": 360,
    "availableSeats": 17,
    "totalSeats": 60,
    "occupancyRate": 71,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_230",
    "eventId": "m39",
    "venueId": "v7",
    "screenId": "s13",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "IMAX 2D",
    "basePrice": 360,
    "availableSeats": 49,
    "totalSeats": 60,
    "occupancyRate": 18,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_231",
    "eventId": "m39",
    "venueId": "v1",
    "screenId": "s1",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "IMAX 2D",
    "basePrice": 400,
    "availableSeats": 11,
    "totalSeats": 60,
    "occupancyRate": 82,
    "dynamicMultiplier": 1.25
  },
  {
    "showId": "sh_232",
    "eventId": "m39",
    "venueId": "v1",
    "screenId": "s1",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "IMAX 2D",
    "basePrice": 400,
    "availableSeats": 43,
    "totalSeats": 60,
    "occupancyRate": 29,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_233",
    "eventId": "m39",
    "venueId": "v4",
    "screenId": "s8",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "IMAX 2D",
    "basePrice": 240,
    "availableSeats": 46,
    "totalSeats": 60,
    "occupancyRate": 23,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_234",
    "eventId": "m39",
    "venueId": "v4",
    "screenId": "s8",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "IMAX 2D",
    "basePrice": 240,
    "availableSeats": 36,
    "totalSeats": 60,
    "occupancyRate": 40,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_235",
    "eventId": "m40",
    "venueId": "v8",
    "screenId": "s14",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "IMAX 2D",
    "basePrice": 390,
    "availableSeats": 13,
    "totalSeats": 60,
    "occupancyRate": 78,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_236",
    "eventId": "m40",
    "venueId": "v8",
    "screenId": "s14",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "IMAX 2D",
    "basePrice": 390,
    "availableSeats": 45,
    "totalSeats": 60,
    "occupancyRate": 25,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_237",
    "eventId": "m40",
    "venueId": "v2",
    "screenId": "s4",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "IMAX 2D",
    "basePrice": 230,
    "availableSeats": 49,
    "totalSeats": 60,
    "occupancyRate": 19,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_238",
    "eventId": "m40",
    "venueId": "v2",
    "screenId": "s4",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "IMAX 2D",
    "basePrice": 230,
    "availableSeats": 38,
    "totalSeats": 60,
    "occupancyRate": 36,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_239",
    "eventId": "m40",
    "venueId": "v5",
    "screenId": "s10",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "IMAX 2D",
    "basePrice": 270,
    "availableSeats": 42,
    "totalSeats": 60,
    "occupancyRate": 30,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_240",
    "eventId": "m40",
    "venueId": "v5",
    "screenId": "s10",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "IMAX 2D",
    "basePrice": 270,
    "availableSeats": 32,
    "totalSeats": 60,
    "occupancyRate": 47,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_241",
    "eventId": "m41",
    "venueId": "v1",
    "screenId": "s1",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "IMAX 2D",
    "basePrice": 220,
    "availableSeats": 51,
    "totalSeats": 60,
    "occupancyRate": 15,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_242",
    "eventId": "m41",
    "venueId": "v1",
    "screenId": "s1",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "IMAX 2D",
    "basePrice": 220,
    "availableSeats": 41,
    "totalSeats": 60,
    "occupancyRate": 32,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_243",
    "eventId": "m41",
    "venueId": "v3",
    "screenId": "s6",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "IMAX 2D",
    "basePrice": 260,
    "availableSeats": 44,
    "totalSeats": 60,
    "occupancyRate": 26,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_244",
    "eventId": "m41",
    "venueId": "v3",
    "screenId": "s6",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "IMAX 2D",
    "basePrice": 260,
    "availableSeats": 34,
    "totalSeats": 60,
    "occupancyRate": 43,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_245",
    "eventId": "m41",
    "venueId": "v6",
    "screenId": "s11",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "IMAX 2D",
    "basePrice": 300,
    "availableSeats": 38,
    "totalSeats": 60,
    "occupancyRate": 37,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_246",
    "eventId": "m41",
    "venueId": "v6",
    "screenId": "s11",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "IMAX 2D",
    "basePrice": 300,
    "availableSeats": 28,
    "totalSeats": 60,
    "occupancyRate": 54,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_247",
    "eventId": "m42",
    "venueId": "v2",
    "screenId": "s4",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "2D",
    "basePrice": 250,
    "availableSeats": 47,
    "totalSeats": 60,
    "occupancyRate": 22,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_248",
    "eventId": "m42",
    "venueId": "v2",
    "screenId": "s4",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "2D",
    "basePrice": 250,
    "availableSeats": 37,
    "totalSeats": 60,
    "occupancyRate": 39,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_249",
    "eventId": "m42",
    "venueId": "v4",
    "screenId": "s8",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "2D",
    "basePrice": 290,
    "availableSeats": 40,
    "totalSeats": 60,
    "occupancyRate": 33,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_250",
    "eventId": "m42",
    "venueId": "v4",
    "screenId": "s8",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "2D",
    "basePrice": 290,
    "availableSeats": 30,
    "totalSeats": 60,
    "occupancyRate": 50,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_251",
    "eventId": "m42",
    "venueId": "v7",
    "screenId": "s13",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "2D",
    "basePrice": 330,
    "availableSeats": 34,
    "totalSeats": 60,
    "occupancyRate": 44,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_252",
    "eventId": "m42",
    "venueId": "v7",
    "screenId": "s13",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "2D",
    "basePrice": 330,
    "availableSeats": 23,
    "totalSeats": 60,
    "occupancyRate": 61,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_253",
    "eventId": "m43",
    "venueId": "v3",
    "screenId": "s6",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "2D",
    "basePrice": 280,
    "availableSeats": 43,
    "totalSeats": 60,
    "occupancyRate": 29,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_254",
    "eventId": "m43",
    "venueId": "v3",
    "screenId": "s6",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "2D",
    "basePrice": 280,
    "availableSeats": 32,
    "totalSeats": 60,
    "occupancyRate": 46,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_255",
    "eventId": "m43",
    "venueId": "v5",
    "screenId": "s10",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "2D",
    "basePrice": 320,
    "availableSeats": 36,
    "totalSeats": 60,
    "occupancyRate": 40,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_256",
    "eventId": "m43",
    "venueId": "v5",
    "screenId": "s10",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "2D",
    "basePrice": 320,
    "availableSeats": 26,
    "totalSeats": 60,
    "occupancyRate": 57,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_257",
    "eventId": "m43",
    "venueId": "v8",
    "screenId": "s14",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "2D",
    "basePrice": 360,
    "availableSeats": 29,
    "totalSeats": 60,
    "occupancyRate": 51,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_258",
    "eventId": "m43",
    "venueId": "v8",
    "screenId": "s14",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "2D",
    "basePrice": 360,
    "availableSeats": 19,
    "totalSeats": 60,
    "occupancyRate": 68,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_259",
    "eventId": "m44",
    "venueId": "v4",
    "screenId": "s8",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "3D",
    "basePrice": 310,
    "availableSeats": 38,
    "totalSeats": 60,
    "occupancyRate": 36,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_260",
    "eventId": "m44",
    "venueId": "v4",
    "screenId": "s8",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "3D",
    "basePrice": 310,
    "availableSeats": 28,
    "totalSeats": 60,
    "occupancyRate": 53,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_261",
    "eventId": "m44",
    "venueId": "v6",
    "screenId": "s11",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "3D",
    "basePrice": 350,
    "availableSeats": 32,
    "totalSeats": 60,
    "occupancyRate": 47,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_262",
    "eventId": "m44",
    "venueId": "v6",
    "screenId": "s11",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "3D",
    "basePrice": 350,
    "availableSeats": 22,
    "totalSeats": 60,
    "occupancyRate": 64,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_263",
    "eventId": "m44",
    "venueId": "v1",
    "screenId": "s1",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "3D",
    "basePrice": 390,
    "availableSeats": 25,
    "totalSeats": 60,
    "occupancyRate": 58,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_264",
    "eventId": "m44",
    "venueId": "v1",
    "screenId": "s1",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "3D",
    "basePrice": 390,
    "availableSeats": 15,
    "totalSeats": 60,
    "occupancyRate": 75,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_265",
    "eventId": "m45",
    "venueId": "v5",
    "screenId": "s10",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "IMAX 2D",
    "basePrice": 340,
    "availableSeats": 34,
    "totalSeats": 60,
    "occupancyRate": 43,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_266",
    "eventId": "m45",
    "venueId": "v5",
    "screenId": "s10",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "IMAX 2D",
    "basePrice": 340,
    "availableSeats": 24,
    "totalSeats": 60,
    "occupancyRate": 60,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_267",
    "eventId": "m45",
    "venueId": "v7",
    "screenId": "s13",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "IMAX 2D",
    "basePrice": 380,
    "availableSeats": 28,
    "totalSeats": 60,
    "occupancyRate": 54,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_268",
    "eventId": "m45",
    "venueId": "v7",
    "screenId": "s13",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "IMAX 2D",
    "basePrice": 380,
    "availableSeats": 17,
    "totalSeats": 60,
    "occupancyRate": 71,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_269",
    "eventId": "m45",
    "venueId": "v2",
    "screenId": "s4",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "IMAX 2D",
    "basePrice": 220,
    "availableSeats": 21,
    "totalSeats": 60,
    "occupancyRate": 65,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_270",
    "eventId": "m45",
    "venueId": "v2",
    "screenId": "s4",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "IMAX 2D",
    "basePrice": 220,
    "availableSeats": 11,
    "totalSeats": 60,
    "occupancyRate": 82,
    "dynamicMultiplier": 1.25
  },
  {
    "showId": "sh_271",
    "eventId": "m46",
    "venueId": "v6",
    "screenId": "s11",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "IMAX 2D",
    "basePrice": 370,
    "availableSeats": 30,
    "totalSeats": 60,
    "occupancyRate": 50,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_272",
    "eventId": "m46",
    "venueId": "v6",
    "screenId": "s11",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "IMAX 2D",
    "basePrice": 370,
    "availableSeats": 20,
    "totalSeats": 60,
    "occupancyRate": 67,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_273",
    "eventId": "m46",
    "venueId": "v8",
    "screenId": "s14",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "IMAX 2D",
    "basePrice": 410,
    "availableSeats": 23,
    "totalSeats": 60,
    "occupancyRate": 61,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_274",
    "eventId": "m46",
    "venueId": "v8",
    "screenId": "s14",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "IMAX 2D",
    "basePrice": 410,
    "availableSeats": 13,
    "totalSeats": 60,
    "occupancyRate": 78,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_275",
    "eventId": "m46",
    "venueId": "v3",
    "screenId": "s6",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "IMAX 2D",
    "basePrice": 250,
    "availableSeats": 17,
    "totalSeats": 60,
    "occupancyRate": 72,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_276",
    "eventId": "m46",
    "venueId": "v3",
    "screenId": "s6",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "IMAX 2D",
    "basePrice": 250,
    "availableSeats": 49,
    "totalSeats": 60,
    "occupancyRate": 19,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_277",
    "eventId": "m47",
    "venueId": "v7",
    "screenId": "s13",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "2D",
    "basePrice": 400,
    "availableSeats": 26,
    "totalSeats": 60,
    "occupancyRate": 57,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_278",
    "eventId": "m47",
    "venueId": "v7",
    "screenId": "s13",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "2D",
    "basePrice": 400,
    "availableSeats": 16,
    "totalSeats": 60,
    "occupancyRate": 74,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_279",
    "eventId": "m47",
    "venueId": "v1",
    "screenId": "s1",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "2D",
    "basePrice": 240,
    "availableSeats": 19,
    "totalSeats": 60,
    "occupancyRate": 68,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_280",
    "eventId": "m47",
    "venueId": "v1",
    "screenId": "s1",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "2D",
    "basePrice": 240,
    "availableSeats": 51,
    "totalSeats": 60,
    "occupancyRate": 15,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_281",
    "eventId": "m47",
    "venueId": "v4",
    "screenId": "s8",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "2D",
    "basePrice": 280,
    "availableSeats": 13,
    "totalSeats": 60,
    "occupancyRate": 79,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_282",
    "eventId": "m47",
    "venueId": "v4",
    "screenId": "s8",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "2D",
    "basePrice": 280,
    "availableSeats": 44,
    "totalSeats": 60,
    "occupancyRate": 26,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_283",
    "eventId": "m48",
    "venueId": "v8",
    "screenId": "s14",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "2D",
    "basePrice": 230,
    "availableSeats": 22,
    "totalSeats": 60,
    "occupancyRate": 64,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_284",
    "eventId": "m48",
    "venueId": "v8",
    "screenId": "s14",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "2D",
    "basePrice": 230,
    "availableSeats": 11,
    "totalSeats": 60,
    "occupancyRate": 81,
    "dynamicMultiplier": 1.25
  },
  {
    "showId": "sh_285",
    "eventId": "m48",
    "venueId": "v2",
    "screenId": "s4",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "2D",
    "basePrice": 270,
    "availableSeats": 15,
    "totalSeats": 60,
    "occupancyRate": 75,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_286",
    "eventId": "m48",
    "venueId": "v2",
    "screenId": "s4",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "2D",
    "basePrice": 270,
    "availableSeats": 47,
    "totalSeats": 60,
    "occupancyRate": 22,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_287",
    "eventId": "m48",
    "venueId": "v5",
    "screenId": "s10",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "2D",
    "basePrice": 310,
    "availableSeats": 50,
    "totalSeats": 60,
    "occupancyRate": 16,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_288",
    "eventId": "m48",
    "venueId": "v5",
    "screenId": "s10",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "2D",
    "basePrice": 310,
    "availableSeats": 40,
    "totalSeats": 60,
    "occupancyRate": 33,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_289",
    "eventId": "m49",
    "venueId": "v1",
    "screenId": "s1",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "2D",
    "basePrice": 260,
    "availableSeats": 17,
    "totalSeats": 60,
    "occupancyRate": 71,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_290",
    "eventId": "m49",
    "venueId": "v1",
    "screenId": "s1",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "2D",
    "basePrice": 260,
    "availableSeats": 49,
    "totalSeats": 60,
    "occupancyRate": 18,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_291",
    "eventId": "m49",
    "venueId": "v3",
    "screenId": "s6",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "2D",
    "basePrice": 300,
    "availableSeats": 11,
    "totalSeats": 60,
    "occupancyRate": 82,
    "dynamicMultiplier": 1.25
  },
  {
    "showId": "sh_292",
    "eventId": "m49",
    "venueId": "v3",
    "screenId": "s6",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "2D",
    "basePrice": 300,
    "availableSeats": 43,
    "totalSeats": 60,
    "occupancyRate": 29,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_293",
    "eventId": "m49",
    "venueId": "v6",
    "screenId": "s11",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "2D",
    "basePrice": 340,
    "availableSeats": 46,
    "totalSeats": 60,
    "occupancyRate": 23,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_294",
    "eventId": "m49",
    "venueId": "v6",
    "screenId": "s11",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "2D",
    "basePrice": 340,
    "availableSeats": 36,
    "totalSeats": 60,
    "occupancyRate": 40,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_295",
    "eventId": "m50",
    "venueId": "v2",
    "screenId": "s4",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "2D",
    "basePrice": 290,
    "availableSeats": 13,
    "totalSeats": 60,
    "occupancyRate": 78,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_296",
    "eventId": "m50",
    "venueId": "v2",
    "screenId": "s4",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "2D",
    "basePrice": 290,
    "availableSeats": 45,
    "totalSeats": 60,
    "occupancyRate": 25,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_297",
    "eventId": "m50",
    "venueId": "v4",
    "screenId": "s8",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "2D",
    "basePrice": 330,
    "availableSeats": 49,
    "totalSeats": 60,
    "occupancyRate": 19,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_298",
    "eventId": "m50",
    "venueId": "v4",
    "screenId": "s8",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "2D",
    "basePrice": 330,
    "availableSeats": 38,
    "totalSeats": 60,
    "occupancyRate": 36,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_299",
    "eventId": "m50",
    "venueId": "v7",
    "screenId": "s13",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "2D",
    "basePrice": 370,
    "availableSeats": 42,
    "totalSeats": 60,
    "occupancyRate": 30,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_300",
    "eventId": "m50",
    "venueId": "v7",
    "screenId": "s13",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "2D",
    "basePrice": 370,
    "availableSeats": 32,
    "totalSeats": 60,
    "occupancyRate": 47,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_301",
    "eventId": "m51",
    "venueId": "v3",
    "screenId": "s6",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "2D",
    "basePrice": 320,
    "availableSeats": 51,
    "totalSeats": 60,
    "occupancyRate": 15,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_302",
    "eventId": "m51",
    "venueId": "v3",
    "screenId": "s6",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "2D",
    "basePrice": 320,
    "availableSeats": 41,
    "totalSeats": 60,
    "occupancyRate": 32,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_303",
    "eventId": "m51",
    "venueId": "v5",
    "screenId": "s10",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "2D",
    "basePrice": 360,
    "availableSeats": 44,
    "totalSeats": 60,
    "occupancyRate": 26,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_304",
    "eventId": "m51",
    "venueId": "v5",
    "screenId": "s10",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "2D",
    "basePrice": 360,
    "availableSeats": 34,
    "totalSeats": 60,
    "occupancyRate": 43,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_305",
    "eventId": "m51",
    "venueId": "v8",
    "screenId": "s14",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "2D",
    "basePrice": 400,
    "availableSeats": 38,
    "totalSeats": 60,
    "occupancyRate": 37,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_306",
    "eventId": "m51",
    "venueId": "v8",
    "screenId": "s14",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "2D",
    "basePrice": 400,
    "availableSeats": 28,
    "totalSeats": 60,
    "occupancyRate": 54,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_307",
    "eventId": "e1",
    "venueId": "v4",
    "screenId": "s8",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "Live Arena",
    "basePrice": 350,
    "availableSeats": 47,
    "totalSeats": 60,
    "occupancyRate": 22,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_308",
    "eventId": "e1",
    "venueId": "v4",
    "screenId": "s8",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "Live Arena",
    "basePrice": 350,
    "availableSeats": 37,
    "totalSeats": 60,
    "occupancyRate": 39,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_309",
    "eventId": "e1",
    "venueId": "v6",
    "screenId": "s11",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "Live Arena",
    "basePrice": 390,
    "availableSeats": 40,
    "totalSeats": 60,
    "occupancyRate": 33,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_310",
    "eventId": "e1",
    "venueId": "v6",
    "screenId": "s11",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "Live Arena",
    "basePrice": 390,
    "availableSeats": 30,
    "totalSeats": 60,
    "occupancyRate": 50,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_311",
    "eventId": "e1",
    "venueId": "v1",
    "screenId": "s1",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "Live Arena",
    "basePrice": 230,
    "availableSeats": 34,
    "totalSeats": 60,
    "occupancyRate": 44,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_312",
    "eventId": "e1",
    "venueId": "v1",
    "screenId": "s1",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "Live Arena",
    "basePrice": 230,
    "availableSeats": 23,
    "totalSeats": 60,
    "occupancyRate": 61,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_313",
    "eventId": "e2",
    "venueId": "v5",
    "screenId": "s10",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "Auditorium Live",
    "basePrice": 380,
    "availableSeats": 43,
    "totalSeats": 60,
    "occupancyRate": 29,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_314",
    "eventId": "e2",
    "venueId": "v5",
    "screenId": "s10",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "Auditorium Live",
    "basePrice": 380,
    "availableSeats": 32,
    "totalSeats": 60,
    "occupancyRate": 46,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_315",
    "eventId": "e2",
    "venueId": "v7",
    "screenId": "s13",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "Auditorium Live",
    "basePrice": 220,
    "availableSeats": 36,
    "totalSeats": 60,
    "occupancyRate": 40,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_316",
    "eventId": "e2",
    "venueId": "v7",
    "screenId": "s13",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "Auditorium Live",
    "basePrice": 220,
    "availableSeats": 26,
    "totalSeats": 60,
    "occupancyRate": 57,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_317",
    "eventId": "e2",
    "venueId": "v2",
    "screenId": "s4",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "Auditorium Live",
    "basePrice": 260,
    "availableSeats": 29,
    "totalSeats": 60,
    "occupancyRate": 51,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_318",
    "eventId": "e2",
    "venueId": "v2",
    "screenId": "s4",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "Auditorium Live",
    "basePrice": 260,
    "availableSeats": 19,
    "totalSeats": 60,
    "occupancyRate": 68,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_319",
    "eventId": "e3",
    "venueId": "v6",
    "screenId": "s11",
    "showDate": "2026-10-12",
    "showTime": "08:15 PM",
    "format": "Grand Arena Live",
    "basePrice": 410,
    "availableSeats": 38,
    "totalSeats": 60,
    "occupancyRate": 36,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_320",
    "eventId": "e3",
    "venueId": "v6",
    "screenId": "s11",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "Grand Arena Live",
    "basePrice": 410,
    "availableSeats": 28,
    "totalSeats": 60,
    "occupancyRate": 53,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_321",
    "eventId": "e3",
    "venueId": "v8",
    "screenId": "s14",
    "showDate": "2026-10-12",
    "showTime": "10:45 PM",
    "format": "Grand Arena Live",
    "basePrice": 250,
    "availableSeats": 32,
    "totalSeats": 60,
    "occupancyRate": 47,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_322",
    "eventId": "e3",
    "venueId": "v8",
    "screenId": "s14",
    "showDate": "2026-10-12",
    "showTime": "01:45 PM",
    "format": "Grand Arena Live",
    "basePrice": 250,
    "availableSeats": 22,
    "totalSeats": 60,
    "occupancyRate": 64,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_323",
    "eventId": "e3",
    "venueId": "v3",
    "screenId": "s6",
    "showDate": "2026-10-12",
    "showTime": "10:15 AM",
    "format": "Grand Arena Live",
    "basePrice": 290,
    "availableSeats": 25,
    "totalSeats": 60,
    "occupancyRate": 58,
    "dynamicMultiplier": 1
  },
  {
    "showId": "sh_324",
    "eventId": "e3",
    "venueId": "v3",
    "screenId": "s6",
    "showDate": "2026-10-12",
    "showTime": "05:00 PM",
    "format": "Grand Arena Live",
    "basePrice": 290,
    "availableSeats": 15,
    "totalSeats": 60,
    "occupancyRate": 75,
    "dynamicMultiplier": 1
  }
];

export const INITIAL_FNB = [
  {
    id: 'f1',
    name: 'Caramel & Cheese Popcorn Tub',
    price: 360,
    category: 'Popcorn',
    isVeg: true,
    calories: '480 kcal',
    description: 'Crispy jumbo mushroom corn coated with molten golden cheddar and English butter caramel.',
    image: 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 'f2',
    name: 'Classic Salted Butter Popcorn',
    price: 290,
    category: 'Popcorn',
    isVeg: true,
    calories: '390 kcal',
    description: 'Freshly popped warm theatre corn generously tossed with melted salted dairy butter.',
    image: 'https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 'f3',
    name: 'Large Pepsi Fountain Drink (750ml)',
    price: 210,
    category: 'Beverages',
    isVeg: true,
    calories: '220 kcal',
    description: 'Chilled carbonated fountain soda served with crushed crystal ice cubes.',
    image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 'f4',
    name: 'Crispy Peri-Peri Chicken Popcorn',
    price: 320,
    category: 'Snacks',
    isVeg: false,
    calories: '510 kcal',
    description: 'Juicy bite-sized chicken nuggets dusted with spicy African bird’s eye chili seasoning.',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 'f5',
    name: 'Loaded Nachos with Warm Cheese & Salsa',
    price: 310,
    category: 'Snacks',
    isVeg: true,
    calories: '460 kcal',
    description: 'Crispy Mexican corn tortilla chips served with zesty tomato salsa and hot jalapeño cheese sauce.',
    image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400&auto=format&fit=crop&q=80',
  }
];

export const DEMO_USERS = [
  {
    userId: 'u1',
    name: 'Demo Customer',
    email: 'user@bookmyshow.local',
    role: 'customer',
    phone: '+91 98765 43210',
    dob: '1998-05-14',
    gender: 'Male',
    preferredCity: 'Mumbai',
  },
  {
    userId: 'u2',
    name: 'BookMyShow Staff',
    email: 'staff@bookmyshow.local',
    role: 'staff',
    phone: '+91 99887 76655',
    dob: '1995-11-20',
    gender: 'Male',
    preferredCity: 'Mumbai',
  },
  {
    userId: 'u3',
    name: 'BookMyShow Admin',
    email: 'admin@bookmyshow.local',
    role: 'admin',
    phone: '+91 91234 56789',
    dob: '1990-01-01',
    gender: 'Male',
    preferredCity: 'Mumbai',
  }
];

export const INITIAL_BOOKINGS = [
  {
    bookingId: 'BMS-918234',
    userId: 'u1',
    userEmail: 'user@bookmyshow.local',
    userName: 'Demo Customer',
    showId: 'sh_1',
    eventId: 'm1',
    movieTitle: 'Kalki 2898 AD',
    venueName: 'PVR ICON: Phoenix Palladium, Lower Parel',
    screenName: 'Audi 1 - IMAX',
    city: 'Mumbai',
    showDateTime: `${todayIso} 10:15 AM`,
    format: 'IMAX 3D',
    seats: [
      { seatNumber: 'C4', tier: 'Prime', price: 260 },
      { seatNumber: 'C5', tier: 'Prime', price: 260 },
    ],
    baseAmount: 520,
    convenienceFee: 50,
    gstAmount: 9.36,
    fnbTotal: 360,
    fnbItems: [
      { id: 'f1', name: 'Caramel & Cheese Popcorn Tub', price: 360, quantity: 1 }
    ],
    totalAmount: 939.36,
    status: 'confirmed',
    paymentId: 'pay_9812401824',
    paymentMethod: 'UPI (Google Pay)',
    qrCodePayload: JSON.stringify({
      bId: 'BMS-918234',
      m: 'Kalki 2898 AD',
      v: 'PVR Palladium',
      seats: ['C4', 'C5'],
      time: '10:15 AM',
      uid: 'u1'
    }),
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
    isRedeemed: false,
  },
  {
    bookingId: 'BMS-654812',
    userId: 'u1',
    userEmail: 'user@bookmyshow.local',
    userName: 'Demo Customer',
    showId: 'sh_2',
    eventId: 'm2',
    movieTitle: 'Stree 2: Sarkate Ka Aatank',
    venueName: 'INOX Megaplex: R City Mall, Ghatkopar',
    screenName: 'Screen 1 - Insignia',
    city: 'Mumbai',
    showDateTime: `${todayIso} 01:45 PM`,
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
    status: 'confirmed',
    paymentId: 'pay_482910482',
    paymentMethod: 'Credit Card',
    qrCodePayload: JSON.stringify({
      bId: 'BMS-654812',
      m: 'Stree 2',
      v: 'INOX R City',
      seats: ['A1'],
      time: '01:45 PM',
      uid: 'u1'
    }),
    createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
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
    timestamp: '2026-10-12 10:15:20',
    actor: 'DynamicPricingEngine',
    action: 'Tariff Multiplier Evaluation',
    details: 'Occupancy for Kalki 2898 AD (10:15 AM Audi 1) evaluated. Tariff set to base standard.'
  },
  {
    id: 'log2',
    timestamp: '2026-10-12 11:20:00',
    actor: 'BookMyShow Admin',
    action: 'Catalog Initialized',
    details: 'Expanded movie catalog with 50 diverse titles across Bollywood, Hollywood, South Indian & Anime.'
  }
];
