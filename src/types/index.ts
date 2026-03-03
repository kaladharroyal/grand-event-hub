export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  department: string;
  year: string;
  registeredEvents: string[];
  notificationSettings: NotificationSettings;
  lastLogin: string;
}

export interface NotificationSettings {
  newEvents: boolean;
  eventReminders: boolean;
  registrationUpdates: boolean;
  eventChanges: boolean;
  feedbackRequests: boolean;
}

export interface Event {
  id: string;
  name: string;
  date: string;
  time: string;
  venue: string;
  chiefGuests: { name: string; designation: string }[];
  subEvents: string[];
  description: string;
  category: string;
  registrationDeadline: string;
  maxAttendees: number;
  currentRegistrations: number;
  relatedEvents: string[];
  createdAt: string;
  lastUpdated: string;
  image?: string;
}

export interface Notification {
  id: string;
  userId: string;
  type: 'new_event' | 'event_tomorrow' | 'event_today' | 'registration_success' | 'event_update' | 'related_event' | 'registration_reminder' | 'event_feedback';
  title: string;
  message: string;
  eventId: string;
  read: boolean;
  timestamp: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  icon: string;
}

export interface Registration {
  id: string;
  userId: string;
  eventId: string;
  registeredAt: string;
  attended: boolean;
  feedbackSubmitted: boolean;
}
