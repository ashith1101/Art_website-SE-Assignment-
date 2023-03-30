import React from 'react';
import { shallow } from 'enzyme';
import ArtistProfile from '../src/ArtistProfile.js';


describe('ArtistProfile', () => {
  it('renders the component', () => {
    const wrapper = shallow(<ArtistProfile />);
    expect(wrapper.exists()).toBe(true);
  });

  it('adds a new user to the list of registered users when the form is submitted', () => {
    const wrapper = shallow(<ArtistProfile />);
    const nameInput = wrapper.find('input[type="text"]');
    nameInput.simulate('change', { target: { value: 'Sarah Johnson' } });

    const emailInput = wrapper.find('input[type="email"]'); 
    emailInput.simulate('change', { target: { value: 'sarah@example.com' } });

    const bioInput = wrapper.find('textarea').at(0);
    bioInput.simulate('change', { target: { value: 'I am a freelance photographer specializing in portrait photography.' } });

    const portfolioInput = wrapper.find('textarea').at(1);
    portfolioInput.simulate('change', { target: { value: 'https://sarah-johnson-portfolio.com' } });

    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault() {} });

    const registeredUsers = wrapper.find('li');
    expect(registeredUsers.length).toBe(3); // there were two users initially, so this should be 3 now

    const newUser = registeredUsers.at(2);
    expect(newUser.text()).toContain('Sarah Johnson');
    expect(newUser.text()).toContain('sarah@example.com');
    expect(newUser.text()).toContain('I am a freelance photographer specializing in portrait photography.');
    expect(newUser.find('a').props().href).toBe('https://sarah-johnson-portfolio.com');
  });
});
