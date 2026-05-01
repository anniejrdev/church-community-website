// // src/services/eventService.js
// // This file will be shared between OrderServices.jsx and Events.jsx

// // Sample Events Data with dates - Replace with Firebase later
// // export const allEvents = [
// //   // Common Events
// //   {
// //     id: 1,
// //     img: "https://preview.colorlib.com/theme/byfaith/images/img_1.jpg",
// //     date: "2026-04-23", // Format: YYYY-MM-DD
// //     author: "Pastor Campbell",
// //     name: "Living and Sharing The Gospel",
// //     type: "common",
// //     description: "Join us for an inspiring session on living and sharing the gospel of Christ.",
// //     highlights: ["Interactive Bible study", "Worship and praise session", "Testimony sharing", "Prayer fellowship"],
// //     overridesPrayers: true,
// //     affectedDays: ["sunday"] // Which days prayers are cancelled
// //   },
// //   {
// //     id: 2,
// //     img: "https://preview.colorlib.com/theme/byfaith/images/img_2.jpg",
// //     date: "2025-01-22",
// //     author: "Pastor Sarah Johnson",
// //     name: "Women's Faith Conference",
// //     type: "common",
// //     description: "A special conference for women to come together, share experiences, and grow in faith.",
// //     highlights: ["Guest speakers", "Workshop sessions", "Networking lunch", "Prayer circle"],
// //     overridesPrayers: false,
// //     affectedDays: []
// //   },
// //   {
// //     id: 3,
// //     img: "https://preview.colorlib.com/theme/byfaith/images/img_4.jpg",
// //     date: "2025-02-05",
// //     author: "Elder Michael Brown",
// //     name: "Youth Revival Night",
// //     type: "common",
// //     description: "An energetic night of worship, games, and spiritual growth for the youth.",
// //     highlights: ["Live band performance", "Youth testimonies", "Games and activities", "Free refreshments"],
// //     overridesPrayers: true,
// //     affectedDays: ["friday", "saturday"]
// //   },
// //   {
// //     id: 4,
// //     img: "https://images.unsplash.com/photo-1596933304642-8305b45767e0",
// //     date: "2025-02-18",
// //     author: "Pastor David Williams",
// //     name: "Healing and Deliverance Service",
// //     type: "common",
// //     description: "A special service focused on spiritual healing and deliverance.",
// //     highlights: ["Anointing prayer", "Worship session", "Testimonies of healing", "Personal prayer ministry"],
// //     overridesPrayers: true,
// //     affectedDays: ["wednesday"]
// //   },
  
// //   // Marriage Events
// //   {
// //     id: 5,
// //     img: "https://images.unsplash.com/photo-1519741497674-611481863552",
// //     date: "2025-02-10",
// //     author: "Pastor John & Sarah",
// //     name: "John & Sarah's Wedding Ceremony",
// //     type: "marriage",
// //     description: "Join us as we celebrate the holy union of John and Sarah in matrimony.",
// //     highlights: ["Wedding Ceremony", "Exchange of Vows", "Blessing by Pastor", "Wedding Reception"],
// //     overridesPrayers: true,
// //     affectedDays: ["wednesday"]
// //   },
// //   {
// //     id: 6,
// //     img: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6",
// //     date: "2025-03-15",
// //     author: "Pastor David & Mary",
// //     name: "David & Mary's Wedding",
// //     type: "marriage",
// //     description: "A beautiful wedding ceremony uniting David and Mary in holy matrimony.",
// //     highlights: ["Wedding Ceremony", "Scripture Reading", "Musical Performance", "Wedding Feast"],
// //     overridesPrayers: true,
// //     affectedDays: ["sunday"]
// //   },
  
// //   // Death/Memorial Events
// //   {
// //     id: 7,
// //     img: "https://images.unsplash.com/photo-1507692049790-5822c9a8f7c3",
// //     date: "2025-01-05",
// //     author: "Family of John Doe",
// //     name: "Memorial Service - John Doe",
// //     type: "deaths",
// //     description: "A service to celebrate the life and legacy of our beloved brother John Doe.",
// //     highlights: ["Tribute Speeches", "Prayer Session", "Worship Music", "Fellowship Lunch"],
// //     overridesPrayers: true,
// //     affectedDays: ["sunday", "monday"]
// //   },
// //   {
// //     id: 8,
// //     img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
// //     date: "2025-03-12",
// //     author: "Family of Mary Smith",
// //     name: "Funeral Service - Mary Smith",
// //     type: "deaths",
// //     description: "A solemn service to honor and remember Mary Smith, a faithful servant of God.",
// //     highlights: ["Funeral Service", "Scripture Reading", "Tributes", "Final Blessing"],
// //     overridesPrayers: true,
// //     affectedDays: ["friday"]
// //   }
// // ];

// // // Function to check if there's an event on a specific date that overrides prayers
// // export const getEventOnDate = (date, dayOfWeek) => {
// //   const dateStr = date.toISOString().split('T')[0];
  
// //   const event = allEvents.find(event => 
// //     event.date === dateStr && 
// //     event.overridesPrayers === true &&
// //     event.affectedDays.includes(dayOfWeek)
// //   );
  
// //   return event || null;
// // };

// // // Function to get all events for a specific date (for Events page)
// // export const getEventsByDate = (date) => {
// //   const dateStr = date.toISOString().split('T')[0];
// //   return allEvents.filter(event => event.date === dateStr);
// // };

// // src/services/EventService.js

// // Sample Events Data with dates - Replace with Firebase later
// // export const allEvents = [
// //   // Common Events
// //   {
// //     id: 1,
// //     img: "https://preview.colorlib.com/theme/byfaith/images/img_1.jpg",
// //     date: "2026-04-26",
// //     author: "Pastor Campbell",
// //     name: "Living and Sharing The Gospel",
// //     type: "common",
// //     description: "Join us for an inspiring session on living and sharing the gospel of Christ.",
// //     highlights: ["Interactive Bible study", "Worship and praise session", "Testimony sharing", "Prayer fellowship"],
// //     overridesPrayers: true,
// //     affectedDays: ["sunday", "wednesday"]
// //   },
// //   {
// //     id: 2,
// //     img: "https://preview.colorlib.com/theme/byfaith/images/img_2.jpg",
// //     date: "2026-04-23",
// //     author: "Pastor Sarah Johnson",
// //     name: "Women's Faith Conference",
// //     type: "common",
// //     description: "A special conference for women to come together, share experiences, and grow in faith.",
// //     highlights: ["Guest speakers", "Workshop sessions", "Networking lunch", "Prayer circle"],
// //     overridesPrayers: false,
// //     affectedDays: []
// //   },
// //   {
// //     id: 3,
// //     img: "https://preview.colorlib.com/theme/byfaith/images/img_4.jpg",
// //     date: "2026-04-27",
// //     author: "Elder Michael Brown",
// //     name: "Youth Revival Night",
// //     type: "common",
// //     description: "An energetic night of worship, games, and spiritual growth for the youth.",
// //     highlights: ["Live band performance", "Youth testimonies", "Games and activities", "Free refreshments"],
// //     overridesPrayers: true,
// //     affectedDays: ["friday", "saturday"]
// //   },
// //   {
// //     id: 4,
// //     img: "https://images.unsplash.com/photo-1596933304642-8305b45767e0",
// //     date: "2025-02-18",
// //     author: "Pastor David Williams",
// //     name: "Healing and Deliverance Service",
// //     type: "common",
// //     description: "A special service focused on spiritual healing and deliverance.",
// //     highlights: ["Anointing prayer", "Worship session", "Testimonies of healing", "Personal prayer ministry"],
// //     overridesPrayers: true,
// //     affectedDays: ["wednesday"]
// //   },
  
// //   // Marriage Events
// //   {
// //     id: 5,
// //     img: "https://images.unsplash.com/photo-1519741497674-611481863552",
// //     date: "2024-12-23",  // December 23, 2024
// //     author: "Pastor John & Sarah",
// //     name: "John & Sarah's Wedding Ceremony",
// //     type: "marriage",
// //     description: "Join us as we celebrate the holy union of John and Sarah in matrimony.",
// //     highlights: ["Wedding Ceremony", "Exchange of Vows", "Blessing by Pastor", "Wedding Reception"],
// //     location: "Main Sanctuary",
// //     overridesPrayers: true,
// //     affectedDays: ["monday"]  // December 23, 2024 is a Monday
// //   },
// //   {
// //     id: 6,
// //     img: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6",
// //     date: "2025-03-15",
// //     author: "Pastor David & Mary",
// //     name: "David & Mary's Wedding",
// //     type: "marriage",
// //     description: "A beautiful wedding ceremony uniting David and Mary in holy matrimony.",
// //     highlights: ["Wedding Ceremony", "Scripture Reading", "Musical Performance", "Wedding Feast"],
// //     location: "Main Sanctuary",
// //     overridesPrayers: true,
// //     affectedDays: ["sunday"]
// //   },
  
// //   // Death/Memorial Events
// //   {
// //     id: 7,
// //     img: "https://images.unsplash.com/photo-1507692049790-5822c9a8f7c3",
// //     date: "2025-01-05",
// //     author: "Family of John Doe",
// //     name: "Memorial Service - John Doe",
// //     type: "deaths",
// //     description: "A service to celebrate the life and legacy of our beloved brother John Doe.",
// //     highlights: ["Tribute Speeches", "Prayer Session", "Worship Music", "Fellowship Lunch"],
// //     location: "Main Sanctuary",
// //     overridesPrayers: true,
// //     affectedDays: ["sunday", "monday"]
// //   },
// //   {
// //     id: 8,
// //     img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
// //     date: "2025-03-12",
// //     author: "Family of Mary Smith",
// //     name: "Funeral Service - Mary Smith",
// //     type: "deaths",
// //     description: "A solemn service to honor and remember Mary Smith, a faithful servant of God.",
// //     highlights: ["Funeral Service", "Scripture Reading", "Tributes", "Final Blessing"],
// //     location: "Main Sanctuary",
// //     overridesPrayers: true,
// //     affectedDays: ["friday"]
// //   },
// //   {
// //     id: 9,
// //     img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
// //     date: "2024-12-25",  // December 25, 2024 - Christmas
// //     author: "Church Leadership",
// //     name: "Christmas Day Service",
// //     type: "common",
// //     description: "Special Christmas Day celebration service. Join us as we celebrate the birth of our Savior Jesus Christ.",
// //     highlights: ["Christmas Carols", "Nativity Play", "Special Message", "Fellowship Lunch"],
// //     location: "Main Sanctuary",
// //     overridesPrayers: true,
// //     affectedDays: ["wednesday"]  // December 25, 2024 is a Wednesday
// //   }
// // ];

// // // Function to check if there's an event on a specific date that overrides prayers
// // export const getEventOnDate = (date, dayOfWeek) => {
// //   if (!date) return null;
  
// //   const year = date.getFullYear();
// //   const month = String(date.getMonth() + 1).padStart(2, '0');
// //   const day = String(date.getDate()).padStart(2, '0');
// //   const dateStr = `${year}-${month}-${day}`;
  
// //   console.log("Checking event for date:", dateStr, "dayOfWeek:", dayOfWeek);
  
// //   const event = allEvents.find(event => {
// //     const eventDateStr = event.date;
// //     const matchesDate = eventDateStr === dateStr;
// //     const overrides = event.overridesPrayers === true;
// //     const dayMatches = event.affectedDays && event.affectedDays.includes(dayOfWeek);
    
// //     console.log(`Event: ${event.name}, Date: ${eventDateStr}, Matches: ${matchesDate}, Overrides: ${overrides}, DayMatches: ${dayMatches}`);
    
// //     return matchesDate && overrides && dayMatches;
// //   });
  
// //   console.log("Found event:", event);
// //   return event || null;
// // };

// // // Function to get all events for a specific date (for Events page)
// // export const getEventsByDate = (date) => {
// //   const dateStr = date.toISOString().split('T')[0];
// //   return allEvents.filter(event => event.date === dateStr);
// // };

// // // Function to get all upcoming events
// // export const getUpcomingEvents = () => {
// //   const today = new Date().toISOString().split('T')[0];
// //   return allEvents
// //     .filter(event => event.date >= today)
// //     .sort((a, b) => a.date.localeCompare(b.date));
// // };

// // src/services/EventService.js

// export const allEvents = [
//   // Common Events
//   {
//     id: 1,
//     img: "https://preview.colorlib.com/theme/byfaith/images/img_1.jpg",
//     date: "2026-04-26",
//     author: "Pastor Campbell",
//     name: "Living and Sharing The Gospel",
//     type: "common",
//     description: "Join us for an inspiring session on living and sharing the gospel of Christ.",
//     highlights: ["Interactive Bible study", "Worship and praise session", "Testimony sharing", "Prayer fellowship"],
//     overridesPrayers: true,
//     affectedDays: ["saturday"]
//   },
//   {
//     id: 2,
//     img: "https://preview.colorlib.com/theme/byfaith/images/img_2.jpg",
//     date: "2026-04-23",
//     author: "Pastor Sarah Johnson",
//     name: "Women's Faith Conference",
//     type: "common",
//     description: "A special conference for women to come together, share experiences, and grow in faith.",
//     highlights: ["Guest speakers", "Workshop sessions", "Networking lunch", "Prayer circle"],
//     overridesPrayers: true,
//     affectedDays: ["thursday"]
//   },
//   {
//     id: 3,
//     img: "https://preview.colorlib.com/theme/byfaith/images/img_4.jpg",
//     date: "2026-04-27",
//     author: "Elder Michael Brown",
//     name: "Youth Revival Night",
//     type: "common",
//     description: "An energetic night of worship, games, and spiritual growth for the youth.",
//     highlights: ["Live band performance", "Youth testimonies", "Games and activities", "Free refreshments"],
//     overridesPrayers: true,
//     affectedDays: ["sunday"]
//   },
//   {
//     id: 4,
//     img: "https://images.unsplash.com/photo-1596933304642-8305b45767e0",
//     date: "2025-02-18",
//     author: "Pastor David Williams",
//     name: "Healing and Deliverance Service",
//     type: "common",
//     description: "A special service focused on spiritual healing and deliverance.",
//     highlights: ["Anointing prayer", "Worship session", "Testimonies of healing", "Personal prayer ministry"],
//     overridesPrayers: true,
//     affectedDays: ["tuesday"]
//   },
  
//   // Marriage Events
//   {
//     id: 5,
//     img: "https://images.unsplash.com/photo-1519741497674-611481863552",
//     date: "2024-12-23",
//     author: "Pastor John & Sarah",
//     name: "John & Sarah's Wedding Ceremony",
//     type: "marriage",
//     description: "Join us as we celebrate the holy union of John and Sarah in matrimony.",
//     highlights: ["Wedding Ceremony", "Exchange of Vows", "Blessing by Pastor", "Wedding Reception"],
//     location: "Main Sanctuary",
//     overridesPrayers: true,
//     affectedDays: ["monday"]
//   },
//   {
//     id: 6,
//     img: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6",
//     date: "2025-03-15",
//     author: "Pastor David & Mary",
//     name: "David & Mary's Wedding",
//     type: "marriage",
//     description: "A beautiful wedding ceremony uniting David and Mary in holy matrimony.",
//     highlights: ["Wedding Ceremony", "Scripture Reading", "Musical Performance", "Wedding Feast"],
//     location: "Main Sanctuary",
//     overridesPrayers: true,
//     affectedDays: ["saturday"]
//   },
  
//   // Death/Memorial Events
//   {
//     id: 7,
//     img: "https://images.unsplash.com/photo-1507692049790-5822c9a8f7c3",
//     date: "2025-01-05",
//     author: "Family of John Doe",
//     name: "Memorial Service - John Doe",
//     type: "deaths",
//     description: "A service to celebrate the life and legacy of our beloved brother John Doe.",
//     highlights: ["Tribute Speeches", "Prayer Session", "Worship Music", "Fellowship Lunch"],
//     location: "Main Sanctuary",
//     overridesPrayers: true,
//     affectedDays: ["sunday"]
//   },
//   {
//     id: 8,
//     img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
//     date: "2025-03-12",
//     author: "Family of Mary Smith",
//     name: "Funeral Service - Mary Smith",
//     type: "deaths",
//     description: "A solemn service to honor and remember Mary Smith, a faithful servant of God.",
//     highlights: ["Funeral Service", "Scripture Reading", "Tributes", "Final Blessing"],
//     location: "Main Sanctuary",
//     overridesPrayers: true,
//     affectedDays: ["wednesday"]
//   },
//   {
//     id: 9,
//     img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
//     date: "2024-12-25",
//     author: "Church Leadership",
//     name: "Christmas Day Service",
//     type: "common",
//     description: "Special Christmas Day celebration service.",
//     highlights: ["Christmas Carols", "Nativity Play", "Special Message", "Fellowship Lunch"],
//     location: "Main Sanctuary",
//     overridesPrayers: true,
//     affectedDays: ["wednesday"]
//   }
// ];

// // Helper function to format date to YYYY-MM-DD
// export const formatDate = (date) => {
//   if (!date) return "";
//   const year = date.getFullYear();
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const day = String(date.getDate()).padStart(2, '0');
//   return `${year}-${month}-${day}`;
// };

// // Function to check if there's an event on a specific date
// export const getEventOnDate = (date, dayOfWeek) => {
//   if (!date) return null;
//   const dateStr = formatDate(date);
//   const event = allEvents.find(event => event.date === dateStr);
//   return event || null;
// };

// // Function to get all events for a specific date
// export const getEventsByDate = (date) => {
//   const dateStr = formatDate(date);
//   return allEvents.filter(event => event.date === dateStr);
// };

// // Function to get all upcoming events
// export const getUpcomingEvents = () => {
//   const today = formatDate(new Date());
//   return allEvents
//     .filter(event => event.date >= today)
//     .sort((a, b) => a.date.localeCompare(b.date));
// };

// // Helper function to get day name from date

// Shared service for events - works with localStorage, ready for Firebase

// let eventsData = [
//   {
//     id: 1,
//     name: "Sunday Morning Service",
//     date: "2024-04-28",
//     author: "Pastor John",
//     description: "Join us for our weekly Sunday morning worship service filled with praise, worship, and powerful preaching.",
//     highlights: ["Worship Session", "Bible Teaching", "Prayer Time", "Fellowship"],
//     img: "https://images.unsplash.com/photo-1438036680102-d9f07c44e0df?w=400&h=300&fit=crop",
//     type: "common"
//   },
//   {
//     id: 2,
//     name: "Wednesday Bible Study",
//     date: "2024-05-01",
//     author: "Pastor Samuel",
//     description: "Deep dive into God's word with interactive Bible study sessions.",
//     highlights: ["Verse by Verse Study", "Discussion", "Q&A Session"],
//     img: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=400&h=300&fit=crop",
//     type: "common"
//   },
//   {
//     id: 3,
//     name: "John & Sarah Wedding",
//     date: "2024-06-15",
//     author: "Wedding Committee",
//     description: "Holy matrimony ceremony of John and Sarah. All are welcome to celebrate.",
//     highlights: ["Wedding Ceremony", "Reception", "Fellowship Meal"],
//     img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop",
//     type: "marriage"
//   },
//   {
//     id: 4,
//     name: "Memorial Service - Mr. Thomas",
//     date: "2024-05-10",
//     author: "Family",
//     description: "Memorial service honoring the life of Mr. Thomas. Please join us in prayer.",
//     highlights: ["Prayer Service", "Tribute", "Fellowship"],
//     img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop",
//     type: "deaths"
//   }
// ];

// // Load from localStorage
// const loadData = () => {
//   const stored = localStorage.getItem("events");
//   if (stored) {
//     eventsData = JSON.parse(stored);
//   } else {
//     localStorage.setItem("events", JSON.stringify(eventsData));
//   }
//   return eventsData;
// };

// // Save to localStorage
// const saveData = (data) => {
//   eventsData = data;
//   localStorage.setItem("events", JSON.stringify(eventsData));
// };

// export const getEventOnDate = (date) => {
//   const events = loadData();
//   return events.filter(event => event.date === date);
// };

// // ✅ ADD THIS - Get event by ID
// export const getEventById = (id) => {
//   const events = loadData();
//   return events.find(event => event.id === parseInt(id));
// };

// // Get all events (for website display)
// export const getAllEvents = () => {
//   return loadData();
// };

// // Get events by type (for website filtering)
// export const getEventsByType = (type) => {
//   const events = loadData();
//   if (type === "all") return events;
//   return events.filter(event => event.type === type);
// };

// // Admin functions
// export const getEventsForAdmin = () => {
//   return loadData();
// };

// export const addEvent = (event) => {
//   const events = loadData();
//   const newEvent = { ...event, id: Date.now() };
//   events.push(newEvent);
//   saveData(events);
//   return newEvent;
// };

// export const updateEvent = (id, updatedEvent) => {
//   const events = loadData();
//   const index = events.findIndex(e => e.id === id);
//   if (index !== -1) {
//     events[index] = { ...updatedEvent, id };
//     saveData(events);
//     return events[index];
//   }
//   return null;
// };

// export const deleteEvent = (id) => {
//   const events = loadData();
//   const filtered = events.filter(e => e.id !== id);
//   saveData(filtered);
//   return filtered;
// };


// service/EventService.js

// Make sure to EXPORT this array
export const allEvents = [
  {
    id: 1,
    name: "Sunday Morning Service",
    date: "2024-04-28",
    author: "Pastor John",
    description: "Join us for our weekly Sunday morning worship service filled with praise, worship, and powerful preaching.",
    highlights: ["Worship Session", "Bible Teaching", "Prayer Time", "Fellowship"],
    img: "https://images.unsplash.com/photo-1438036680102-d9f07c44e0df?w=400&h=300&fit=crop",
    type: "common"
  },
  {
    id: 2,
    name: "Wednesday Bible Study",
    date: "2024-05-01",
    author: "Pastor Samuel",
    description: "Deep dive into God's word with interactive Bible study sessions.",
    highlights: ["Verse by Verse Study", "Discussion", "Q&A Session"],
    img: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=400&h=300&fit=crop",
    type: "common"
  },
  {
    id: 3,
    name: "John & Sarah Wedding",
    date: "2024-06-15",
    author: "Wedding Committee",
    description: "Holy matrimony ceremony of John and Sarah. All are welcome to celebrate.",
    highlights: ["Wedding Ceremony", "Reception", "Fellowship Meal"],
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop",
    type: "marriage"
  },
  {
    id: 4,
    name: "Memorial Service - Mr. Thomas",
    date: "2024-05-10",
    author: "Family",
    description: "Memorial service honoring the life of Mr. Thomas. Please join us in prayer.",
    highlights: ["Prayer Service", "Tribute", "Fellowship"],
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop",
    type: "deaths"
  }
];

// Load from localStorage
const loadData = () => {
  const stored = localStorage.getItem("events");
  if (stored) {
    return JSON.parse(stored);
  }
  return allEvents;
};

// Save to localStorage
const saveData = (data) => {
  localStorage.setItem("events", JSON.stringify(data));
};

// Get all events (for website display)
export const getAllEvents = () => {
  const stored = localStorage.getItem("events");
  if (stored) {
    return JSON.parse(stored);
  }
  return allEvents;
};

// Get events by type
export const getEventsByType = (type) => {
  const events = getAllEvents();
  if (type === "all") return events;
  return events.filter(event => event.type === type);
};

// Get events on a specific date
export const getEventOnDate = (date) => {
  const events = getAllEvents();
  return events.filter(event => event.date === date);
};

// Get event by ID
export const getEventById = (id) => {
  const events = getAllEvents();
  return events.find(event => event.id === parseInt(id));
};

// Admin functions
export const getEventsForAdmin = () => {
  return getAllEvents();
};

export const addEvent = (event) => {
  const events = getAllEvents();
  const newEvent = { ...event, id: Date.now() };
  events.push(newEvent);
  saveData(events);
  return newEvent;
};

export const updateEvent = (id, updatedEvent) => {
  const events = getAllEvents();
  const index = events.findIndex(e => e.id === id);
  if (index !== -1) {
    events[index] = { ...updatedEvent, id };
    saveData(events);
    return events[index];
  }
  return null;
};

export const deleteEvent = (id) => {
  const events = getAllEvents();
  const filtered = events.filter(e => e.id !== id);
  saveData(filtered);
  return filtered;
};