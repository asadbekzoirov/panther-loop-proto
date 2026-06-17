/* Sample data for the PantherLoop app UI kit. */
const TASKS = [
  {
    id: "t1",
    title: "Pick up textbook from GC library",
    status: "open",
    location: "GC Building",
    category: "Delivery",
    deadline: "Today 4pm",
    description: "Reserved Organic Chem textbook is at the GC circulation desk. Grab it and drop at PG-5 lobby. I'll be there.",
    posterName: "Maria R.",
    posterInitials: "MR",
    posterTier: "helper",
    rating: 4.9,
    reviews: 38,
    price: 12,
  },
  {
    id: "t2",
    title: "Ride to MMC from West Kendall, 8am",
    status: "open",
    location: "West Kendall",
    category: "Rides",
    deadline: "Tomorrow 8am",
    description: "Need a ride to the Modesto Maidique Campus for an 8:30 lecture. Can split gas + tip.",
    posterName: "Diego C.",
    posterInitials: "DC",
    posterTier: "driver",
    rating: 4.8,
    reviews: 64,
    price: 9,
  },
  {
    id: "t3",
    title: "Calc II tutoring before midterm",
    status: "in-progress",
    location: "Green Library",
    category: "Tutoring",
    deadline: "Thu 6pm",
    description: "Two-hour session on integrals and series. Bring your own notes, I have practice sets.",
    posterName: "Aisha K.",
    posterInitials: "AK",
    posterTier: "helper",
    rating: 5.0,
    reviews: 21,
    price: 40,
  },
  {
    id: "t4",
    title: "Sell: mini fridge, barely used",
    status: "open",
    location: "Lakeview Hall",
    category: "Resell",
    deadline: "This week",
    description: "Dorm mini fridge, clean, works great. Pickup from Lakeview South. Cash or PantherPay.",
    posterName: "Tyler B.",
    posterInitials: "TB",
    posterTier: "none",
    rating: 4.6,
    reviews: 12,
    price: 55,
  },
  {
    id: "t5",
    title: "Print + bind senior project, 60 pages",
    status: "confirmed",
    location: "PG-6 Tech",
    category: "Errand",
    deadline: "Fri noon",
    description: "Color print and spiral bind my capstone. I'll send the PDF. Front desk pickup works.",
    posterName: "Priya S.",
    posterInitials: "PS",
    posterTier: "helper",
    rating: 4.9,
    reviews: 47,
    price: 18,
  },
];

const CATEGORIES = ["All", "Delivery", "Rides", "Tutoring", "Resell", "Errand"];

const CHAT = [
  { from: "them", text: "Hey! I'm at the GC desk now, they have the book ready 👍", time: "3:42 PM" },
  { from: "me", text: "Awesome, heading to PG-5 lobby. 10 mins?", time: "3:43 PM" },
  { from: "them", text: "Perfect. I'll wait by the south entrance.", time: "3:43 PM" },
  { from: "me", text: "Here now, navy jacket.", time: "3:52 PM" },
  { from: "them", text: "Got you. Handing it over 🙌", time: "3:53 PM" },
];

const TXNS = [
  { id: "x1", label: "Calc II tutoring", sub: "Aisha K. · Tutoring", amount: -40, kind: "out", status: "Confirmed", date: "Jun 14" },
  { id: "x2", label: "Textbook delivery", sub: "You helped Maria R.", amount: 12, kind: "in", status: "Confirmed", date: "Jun 13" },
  { id: "x3", label: "Ride to MMC", sub: "In escrow · releases on drop-off", amount: -9, kind: "escrow", status: "In Progress", date: "Jun 13" },
  { id: "x4", label: "Mini fridge sale", sub: "You sold to Tyler B.", amount: 55, kind: "in", status: "Confirmed", date: "Jun 10" },
  { id: "x5", label: "Print + bind", sub: "Priya S. · Errand", amount: 18, kind: "in", status: "Confirmed", date: "Jun 9" },
];

const RIDES = [
  { id: "r1", from: "West Kendall", to: "MMC Campus", time: "8:00 AM", seats: 2, name: "Diego C.", initials: "DC", rating: 4.8, price: 9, mins: 22 },
  { id: "r2", from: "Brickell", to: "MMC Campus", time: "8:15 AM", seats: 3, name: "Sofia L.", initials: "SL", rating: 4.9, price: 11, mins: 18 },
  { id: "r3", from: "Doral", to: "MMC Campus", time: "8:30 AM", seats: 1, name: "Marcus T.", initials: "MT", rating: 4.7, price: 8, mins: 26 },
];

Object.assign(window, { TASKS, CATEGORIES, CHAT, TXNS, RIDES });
