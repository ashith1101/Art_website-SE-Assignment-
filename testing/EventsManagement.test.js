import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EventsManagement from '../src/EventsManagement.js';

describe('EventsManagement', () => {
  it('should allow adding a new event', () => {
    render(<EventsManagement />);   
    fireEvent.change(screen.getByLabelText('Title:'), { target: { value: 'New Event' }});
    fireEvent.change(screen.getByLabelText('Description:'), { target: { value: 'Description of new event' }});
    fireEvent.change(screen.getByLabelText('Date:'), { target: { value: '2023-04-22' }}); 
    fireEvent.click(screen.getByText('Add Event')); 
    expect(screen.getByText('New Event')).toBeInTheDocument();
    expect(screen.getByText('Description of new event')).toBeInTheDocument();
    expect(screen.getByText('Date: 2023-04-22')).toBeInTheDocument();
  });
  it('should show an alert when the maximum number of events is reached', () => {
    render(<EventsManagement />);
    fireEvent.change(screen.getByLabelText('Title:'), { target: { value: 'Event 1' }});
    fireEvent.change(screen.getByLabelText('Description:'), { target: { value: 'Description of event 1' }});
    fireEvent.change(screen.getByLabelText('Date:'), { target: { value: '2023-04-01' }});
    fireEvent.click(screen.getByText('Add Event'));
    fireEvent.change(screen.getByLabelText('Title:'), { target: { value: 'Event 2' }});
    fireEvent.change(screen.getByLabelText('Description:'), { target: { value: 'Description of event 2' }});
    fireEvent.change(screen.getByLabelText('Date:'), { target: { value: '2023-04-08' }});
    fireEvent.click(screen.getByText('Add Event'));
    fireEvent.change(screen.getByLabelText('Title:'), { target: { value: 'Event 3' }});
    fireEvent.change(screen.getByLabelText('Description:'), { target: { value: 'Description of event 3' }});
    fireEvent.change(screen.getByLabelText('Date:'), { target: { value: '2023-04-15' }});
    fireEvent.click(screen.getByText('Add Event'));
    fireEvent.change(screen.getByLabelText('Title:'), { target: { value: 'Event 4' }});
    fireEvent.change(screen.getByLabelText('Description:'), { target: { value: 'Description of event 4' }});
    fireEvent.change(screen.getByLabelText('Date:'), { target: { value: '2023-04-22' }});
    fireEvent.click(screen.getByText('Add Event'));
    fireEvent.change(screen.getByLabelText('Title:'), { target: { value: 'Event 5' }});
    fireEvent.change(screen.getByLabelText('Description:'), { target: { value: 'Description of event 5' }});
    fireEvent.change(screen.getByLabelText('Date:'), { target: { value: '2023-04-29' }});
    fireEvent.click(screen.getByText('Add Event'));
    expect(screen.getByText('You have reached the limit of events to be added')).toBeInTheDocument();
  });
});
