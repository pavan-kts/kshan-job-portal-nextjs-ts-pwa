import Navbar from '@/components/Navbar';
import React from 'react';

type Event = {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
};

const events: Event[] = [
  {
    id: 1,
    title: 'Virtual Job Fair: Tech Opportunities',
    date: 'July 15, 2024',
    time: '10:00 AM - 2:00 PM',
    location: 'Online',
    description: 'Join us for a virtual job fair focusing on tech roles across various industries.',
  },
  {
    id: 2,
    title: 'Webinar: Resume Writing Tips',
    date: 'July 20, 2024',
    time: '1:00 PM - 2:30 PM',
    location: 'Online',
    description: 'Learn essential tips and tricks to create a standout resume that gets noticed by employers.',
  },
  {
    id: 3,
    title: 'Networking Event: Finance Professionals',
    date: 'July 25, 2024',
    time: '6:00 PM - 8:00 PM',
    location: 'City Hall Auditorium, New York',
    description: 'Connect with finance professionals and expand your network in the industry.',
  },
];

const EventsPage = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Upcoming Events</h1>
        <div className="grid grid-cols-1 gap-6">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900">{event.title}</h2>
              <p className="text-gray-600">{event.date} | {event.time}</p>
              <p className="text-gray-600">{event.location}</p>
              <p className="text-gray-700 mt-4">{event.description}</p>
              <div className="mt-4">
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-900 font-medium"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
        <img src="/assets/img/Screenshot 2024-04-17 at 4.20 1.png" alt="" />
        </>
  );
};

export default EventsPage;
