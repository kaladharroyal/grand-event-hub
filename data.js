// ── Mock Events Data ──
const mockEvents = [
    {
        id: "event_001",
        name: "Tech Fest 2026",
        date: "2026-03-15",
        time: "10:00 AM - 5:00 PM",
        venue: "Grand Auditorium, Block A",
        chiefGuests: [
            { name: "Dr. Arjun Mehta", designation: "AI Research Lead, Google" },
            { name: "Ms. Priya Sharma", designation: "CTO, TechVentures Inc." },
        ],
        subEvents: ["Coding Marathon", "Robotics Workshop", "AI Demo Day", "Startup Pitch"],
        description: "The flagship annual technical festival featuring cutting-edge technology showcases, competitive programming, and hands-on workshops led by industry pioneers. Experience innovation at its finest.",
        category: "technical",
        registrationDeadline: "2026-03-12",
        maxAttendees: 500,
        currentRegistrations: 342,
        relatedEvents: ["event_002", "event_005"],
        createdAt: "2026-03-01T10:00:00Z",
        lastUpdated: "2026-03-02T14:00:00Z",
    },
    {
        id: "event_002",
        name: "Hackathon: Code for Change",
        date: "2026-03-10",
        time: "9:00 AM - 9:00 PM",
        venue: "Innovation Hub, Block C",
        chiefGuests: [
            { name: "Mr. Vikram Rao", designation: "VP Engineering, Flipkart" },
        ],
        subEvents: ["Team Formation", "Problem Reveal", "Mentorship Hours", "Final Presentations"],
        description: "A 12-hour intensive hackathon focused on building solutions for social impact. Teams of 2-4 will tackle real-world challenges with mentorship from industry experts.",
        category: "technical",
        registrationDeadline: "2026-03-08",
        maxAttendees: 200,
        currentRegistrations: 156,
        relatedEvents: ["event_001", "event_005"],
        createdAt: "2026-02-25T09:00:00Z",
        lastUpdated: "2026-03-01T11:00:00Z",
    },
    {
        id: "event_003",
        name: "Cultural Night: Starlight Gala",
        date: "2026-03-20",
        time: "6:00 PM - 11:00 PM",
        venue: "Open Air Theatre",
        chiefGuests: [
            { name: "Ms. Anika Roy", designation: "Classical Dancer & Choreographer" },
            { name: "Mr. Siddharth Jain", designation: "Music Director" },
        ],
        subEvents: ["Classical Dance", "Band Performance", "Fashion Show", "Stand-up Comedy"],
        description: "An enchanting evening of artistic brilliance under the stars. From classical performances to contemporary acts, experience the cultural heartbeat of our campus.",
        category: "cultural",
        registrationDeadline: "2026-03-18",
        maxAttendees: 800,
        currentRegistrations: 523,
        relatedEvents: ["event_004"],
        createdAt: "2026-03-02T15:00:00Z",
        lastUpdated: "2026-03-02T15:00:00Z",
    },
    {
        id: "event_004",
        name: "Leadership Summit 2026",
        date: "2026-03-25",
        time: "10:00 AM - 4:00 PM",
        venue: "Conference Hall, Admin Block",
        chiefGuests: [
            { name: "Dr. Neha Kapoor", designation: "Director, IIM Bangalore" },
            { name: "Mr. Rajesh Gupta", designation: "CEO, GrowthMinds" },
        ],
        subEvents: ["Keynote Speeches", "Panel Discussion", "Networking Lunch", "Workshop: Leading with Empathy"],
        description: "A transformative summit bringing together visionary leaders and aspiring minds. Gain insights into modern leadership, entrepreneurship, and personal development.",
        category: "seminar",
        registrationDeadline: "2026-03-22",
        maxAttendees: 300,
        currentRegistrations: 189,
        relatedEvents: ["event_006"],
        createdAt: "2026-02-28T12:00:00Z",
        lastUpdated: "2026-03-01T09:00:00Z",
    },
    {
        id: "event_005",
        name: "AI & ML Workshop Series",
        date: "2026-03-04",
        time: "2:00 PM - 6:00 PM",
        venue: "Lab 201, CS Block",
        chiefGuests: [
            { name: "Dr. Kavitha Rangan", designation: "ML Scientist, Microsoft" },
        ],
        subEvents: ["Neural Networks 101", "Hands-on TensorFlow", "Model Deployment", "Q&A Session"],
        description: "A comprehensive workshop series on Artificial Intelligence and Machine Learning. From theory to practice, build real ML models with expert guidance.",
        category: "technical",
        registrationDeadline: "2026-03-03",
        maxAttendees: 60,
        currentRegistrations: 58,
        relatedEvents: ["event_001", "event_002"],
        createdAt: "2026-02-20T08:00:00Z",
        lastUpdated: "2026-03-02T16:00:00Z",
    },
    {
        id: "event_006",
        name: "Annual Sports Meet",
        date: "2026-04-05",
        time: "7:00 AM - 6:00 PM",
        venue: "University Sports Complex",
        chiefGuests: [
            { name: "Mr. Deepak Kumar", designation: "Former National Athlete" },
        ],
        subEvents: ["Track & Field", "Basketball Finals", "Swimming", "Cricket Tournament"],
        description: "The grand annual sporting event showcasing athletic excellence. Compete across multiple disciplines and cheer for your department in this day of sportsmanship.",
        category: "sports",
        registrationDeadline: "2026-04-01",
        maxAttendees: 1000,
        currentRegistrations: 678,
        relatedEvents: [],
        createdAt: "2026-02-15T10:00:00Z",
        lastUpdated: "2026-02-28T14:00:00Z",
    },
];

const defaultUser = {
    id: "user_001",
    name: "Guest",
    email: "",
    password: "",
    department: "",
    year: "",
    registeredEvents: [],
    notificationSettings: {
        newEvents: true,
        eventReminders: true,
        registrationUpdates: true,
        eventChanges: true,
        feedbackRequests: false,
    },
    lastLogin: new Date().toISOString(),
};

function generateNotificationsForUser(userId) {
    const now = new Date();
    return [
        {
            id: "notif_001",
            userId,
            type: "new_event",
            title: "New Event Added",
            message: "✨ Tech Fest 2026 has been added to upcoming events. Register now!",
            eventId: "event_001",
            read: false,
            timestamp: new Date(now.getTime() - 2 * 60 * 1000).toISOString(),
            priority: "high",
            icon: "🎉",
        },
        {
            id: "notif_002",
            userId,
            type: "event_tomorrow",
            title: "Event Tomorrow",
            message: "⏰ Reminder: AI & ML Workshop starts tomorrow at 2:00 PM",
            eventId: "event_005",
            read: false,
            timestamp: new Date(now.getTime() - 30 * 60 * 1000).toISOString(),
            priority: "urgent",
            icon: "⏰",
        },
        {
            id: "notif_003",
            userId,
            type: "new_event",
            title: "Cultural Night Announced",
            message: "🌟 Starlight Gala is here! An evening of art, music, and dance awaits.",
            eventId: "event_003",
            read: true,
            timestamp: new Date(now.getTime() - 3 * 60 * 60 * 1000).toISOString(),
            priority: "high",
            icon: "🎭",
        },
        {
            id: "notif_004",
            userId,
            type: "registration_reminder",
            title: "Registration Closing Soon",
            message: "⚠️ Registration for Hackathon closes in 2 days. Don't miss out!",
            eventId: "event_002",
            read: false,
            timestamp: new Date(now.getTime() - 5 * 60 * 60 * 1000).toISOString(),
            priority: "medium",
            icon: "⚠️",
        },
        {
            id: "notif_005",
            userId,
            type: "related_event",
            title: "You Might Like This",
            message: "🎪 New workshop in your area of interest: AI & ML Workshop Series",
            eventId: "event_005",
            read: true,
            timestamp: new Date(now.getTime() - 24 * 60 * 60 * 1000).toISOString(),
            priority: "low",
            icon: "🎪",
        },
    ];
}

function getTimeAgo(timestamp) {
    const now = new Date();
    const then = new Date(timestamp);
    const diffMs = now.getTime() - then.getTime();
    const diffMin = Math.floor(diffMs / 60000);
    const diffHr = Math.floor(diffMs / 3600000);
    const diffDay = Math.floor(diffMs / 86400000);
    if (diffMin < 1) return "Just now";
    if (diffMin < 60) return diffMin + "m ago";
    if (diffHr < 24) return diffHr + "h ago";
    if (diffDay === 1) return "Yesterday";
    return diffDay + "d ago";
}

function isNewEvent(createdAt) {
    const now = new Date();
    const created = new Date(createdAt);
    return now.getTime() - created.getTime() < 24 * 60 * 60 * 1000;
}

function isEventSoon(date) {
    const now = new Date();
    const todayStr = now.toISOString().split("T")[0];
    const tomorrowDate = new Date(now);
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);
    const tomorrowStr = tomorrowDate.toISOString().split("T")[0];
    if (date === todayStr) return "today";
    if (date === tomorrowStr) return "tomorrow";
    return null;
}
