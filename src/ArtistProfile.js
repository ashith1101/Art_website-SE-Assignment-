import React, { useState } from 'react';
import './ArtistProfile.css';

function ArtistProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [registeredUsers, setRegisteredUsers] = useState([
    {
      name: 'John Doe',
      email: 'johndoe@example.com',
      bio: 'I am a freelance artist specializing in watercolor paintings.',
      portfolio: 'https://john-doe-portfolio.com'
    },
    {
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      bio: 'I am a graphic designer with experience in branding and packaging design.',
      portfolio: 'https://jane-smith-portfolio.com'
    }
  ]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleBioChange(e) {
    setBio(e.target.value);
  }

  function handlePortfolioChange(e) {
    setPortfolio(e.target.value);
  }

  function handleProfileSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: name,
      email: email,
      bio: bio,
      portfolio: portfolio
    };
    setRegisteredUsers([...registeredUsers, newUser]);
    setName('');
    setEmail('');
    setBio('');
    setPortfolio('');
  }

  return (
    <div className="artist-profile">
      <h2>Artist Profile</h2>
      <form onSubmit={handleProfileSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Bio:
          <textarea value={bio} onChange={handleBioChange} />
        </label>
        <label>
          Portfolio:
          <textarea value={portfolio} onChange={handlePortfolioChange} />
        </label>
        <button type="submit">Save Profile</button>
      </form>
      <h3>Registered Users:</h3>
      <ul>
        {registeredUsers.map(user => (
          <li key={user.email}>
            <strong>{user.name}</strong> ({user.email}): {user.bio} <a href={user.portfolio} target="_blank" rel="noopener noreferrer">Portfolio</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArtistProfile;

