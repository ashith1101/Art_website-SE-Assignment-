import React, { useState } from 'react';
import './TicketingSystem.css'

function TicketForm() {
const [eventName, setEventName] = useState('');
// const [eventDate, setEventDate] = useState('');
const [ticketType, setTicketType] = useState('');
const [ticketQuantity, setTicketQuantity] = useState('');
const [totalPrice, setTotalPrice] = useState(0);

const events = [
{ name: 'Event 1', date: '2023-04-01', ticketPrice: 50 },
{ name: 'Event 2', date: '2023-04-08', ticketPrice: 75 },
{ name: 'Event 3', date: '2023-04-15', ticketPrice: 100 }
];

function handleEventNameChange(e) {
setEventName(e.target.value);
const selectedEvent = events.find((event) => event.name === e.target.value);
if (selectedEvent) {
setTotalPrice(selectedEvent.ticketPrice * ticketQuantity);
} else {
setTotalPrice(0);
}
}

// function handleEventDateChange(e) {
// setEventDate(e.target.value);
// }

function handleTicketTypeChange(e) {
setTicketType(e.target.value);
}

function handleTicketQuantityChange(e) {
setTicketQuantity(e.target.value);
const selectedEvent = events.find((event) => event.name === eventName);
if (selectedEvent) {
setTotalPrice(selectedEvent.ticketPrice * e.target.value);
}
}

function handleTicketSubmit(e) {
e.preventDefault();
// handle ticket submission logic
alert('Payment Done');
}

return (
<form onSubmit={handleTicketSubmit}>
<label>
Event Name:
<select value={eventName} onChange={handleEventNameChange}>
<option value="">--Select Event--</option>
{events.map((event) => (
<option key={event.name} value={event.name}>
{event.name} ({event.date})
</option>
))}
</select>
</label>
{eventName && (
<>
<p>Ticket Price: {events.find((event) => event.name === eventName).ticketPrice}</p>
<label>
Ticket Type:
<select value={ticketType} onChange={handleTicketTypeChange}>
<option value="">--Select Ticket Type--</option>
<option value="General Admission">General Admission</option>
<option value="VIP">VIP</option>
<option value="Premium">Premium</option>
</select>
</label>
<label>
Ticket Quantity:
<input type="number" min="1" value={ticketQuantity} onChange={handleTicketQuantityChange} />
</label>
<p>Total Price: {totalPrice}</p>
<button type="submit">Buy Tickets</button>
</>
)}
</form>
);
}

function TicketingSystem() {
return (
<div className="ticketing-system">
<h2>Ticketing System</h2>
<TicketForm />
</div>
);
}

export default TicketingSystem;