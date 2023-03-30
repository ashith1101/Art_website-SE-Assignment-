import React from 'react';
import { shallow } from 'enzyme';
import TicketingSystem from '../src/TicketingSystem.js';

describe('TicketingSystem', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<TicketingSystem />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should initialize state properly', () => {
    const expectedState = {
      eventName: '',
      ticketType: '',
      ticketQuantity: '',
      totalPrice: 0,
    };
    expect(wrapper.find('TicketForm').state()).toEqual(expectedState);
  });

  it('should update state when event name is selected', () => {
    const mockEventName = 'Event 1';
    wrapper.find('TicketForm').prop('handleEventNameChange')({ target: { value: mockEventName } });
    expect(wrapper.find('TicketForm').state('eventName')).toEqual(mockEventName);
  });

  it('should update state when ticket type is selected', () => {
    const mockTicketType = 'General Admission';
    wrapper.find('TicketForm').prop('handleTicketTypeChange')({ target: { value: mockTicketType } });
    expect(wrapper.find('TicketForm').state('ticketType')).toEqual(mockTicketType);
  });

  it('should update state when ticket quantity is entered', () => {
    const mockTicketQuantity = '3';
    wrapper.find('TicketForm').prop('handleTicketQuantityChange')({ target: { value: mockTicketQuantity } });
    expect(wrapper.find('TicketForm').state('ticketQuantity')).toEqual(mockTicketQuantity);
  });

  it('should calculate total price when event name and ticket quantity are selected', () => {
    const mockEventName = 'Event 1';
    const mockTicketQuantity = '3';
    wrapper.find('TicketForm').prop('handleEventNameChange')({ target: { value: mockEventName } });
    wrapper.find('TicketForm').prop('handleTicketQuantityChange')({ target: { value: mockTicketQuantity } });
    expect(wrapper.find('TicketForm').state('totalPrice')).toEqual(150);
  });
  
  it('should handle ticket submission when form is submitted', () => {
    const mockEvent = { preventDefault: jest.fn() };
    wrapper.find('TicketForm').prop('handleTicketSubmit')(mockEvent);
    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith('Payment Done');
  });
});
