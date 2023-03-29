import React, { useState } from 'react';
import "./EventsManagement.css"

function EventsManagement() {
  const [events, setEvents] = useState([
    { title: 'Event 1', description: 'Description of event 1', date: '2023-04-01' },
    { title: 'Event 2', description: 'Description of event 2', date: '2023-04-08' },
    { title: 'Event 3', description: 'Description of event 3', date: '2023-04-15' }
  ]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleDateChange(e) {
    setDate(e.target.value);
  }

  function handleEventSubmit(e) {
    e.preventDefault();
    if (events.length >= 4) {
      alert("You have reached the limit of events to be added");
      return;
    }
    const newEvent = {
      title: title,
      description: description,
      date: date
    };
    setEvents([...events, newEvent]);
    setTitle('');
    setDescription('');
    setDate('');
  }

  return (
    <div className="events-management">
      <h2>Events & Programs Management</h2>
      <form onSubmit={handleEventSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
        <label>
          Description:
          <input type="text" value={description} onChange={handleDescriptionChange} />
        </label>
        <label>
          Date:
          <input type="date" value={date} onChange={handleDateChange} />
        </label>
        <button type="submit">Add Event</button>
      </form>
      <h3>Registered Events</h3>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <h4>{event.title}</h4>
            <p>{event.description}</p>
            <p>Date: {event.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsManagement;
