import React, { useState } from "react";
import './Marketplace.css';

const MOCK_DATA = [{ id: 1, title: "Sunset at the Beach", artist: "John Smith", price: 100, image: "https://images.unsplash.com/photo-1665593870799-36c7bfc47390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
                  { id: 2, title: "Flowers in the Meadow", artist: "Jane Doe", price: 75, image: "https://images.unsplash.com/photo-1590622974113-66a9160acf20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
                  { id: 3, title: "Mountains in the Fog", artist: "Mike Johnson", price: 150, image: "https://images.unsplash.com/photo-1583341655928-239ca5b819bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" }];

const Marketplace = () => {
  const [artworks, setArtworks] = useState(MOCK_DATA);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [buyerName, setBuyerName] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const [buyerAddress, setBuyerAddress] = useState("");

  const handleBuyClick = (artwork) => {
    setSelectedArtwork(artwork);
    setShowPopup(true);
  };

  const handleBuyConfirm = (event) => {
    event.preventDefault();
    const updatedArtworks = artworks.map(artwork => {
      if (artwork.id === selectedArtwork.id) {
        return { ...artwork, sold: true };
      } else {
        return artwork;
      }
    });
    setArtworks(updatedArtworks);
    setShowPopup(false);
    alert(`Thank you for your purchase, ${buyerName}! You have bought "${selectedArtwork.title}" by ${selectedArtwork.artist} for $${selectedArtwork.price}.`);
    setBuyerName("");
    setBuyerEmail("");
    setBuyerAddress("");
  };

  const handleAddClick = () => {
    const title = prompt("Enter the title of the artwork:");
    const artist = prompt("Enter the artist name:");
    const price = parseFloat(prompt("Enter the price of the artwork:"));
    const image = prompt("Enter the URL of the artwork image:");
    const newArtwork = { id: artworks.length + 1, title, artist, price, image };
    setArtworks([...artworks, newArtwork]);
  };

  return (
    <div className="Marketplace">
      <h1>Artwork Marketplace</h1>
      <button className="add-button" onClick={handleAddClick}>Add Artwork</button>
      <div className="artwork-container">
        {artworks.map(artwork => (
          <div className="artwork" key={artwork.id}>
            <img src={artwork.image} alt={artwork.title} />
            <div className="artwork-details">
              <h2>{artwork.title}</h2>
              <p>By {artwork.artist}</p>
              <p>Price: ${artwork.price}</p>
              {artwork.sold ? (
                <p className="sold">SOLD</p>
              ) : (
                <button className="buy-button" onClick={() => handleBuyClick(artwork)}>Buy</button>
              )}
            </div>
          </div>
        ))}
      </div>
      {showPopup && (
        <div className="popup">
          <h2>Confirm Purchase</h2>
          <p>You are about to buy "{selectedArtwork.title}" by {selectedArtwork.artist} for ${selectedArtwork.price}.</p>
          <form onSubmit={handleBuyConfirm}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={buyerName} onChange={(e) => setBuyerName(e.target.value)} required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={buyerEmail} onChange={(e) => setBuyerEmail(e.target.value)} required />
            <label htmlFor="address">Address:</label>
            <textarea id="address" value={buyerAddress} onChange={(e) => setBuyerAddress(e.target.value)} required></textarea>
            <button type="submit">Confirm Purchase</button>
            <button type="button" onClick={() => setShowPopup(false)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Marketplace;
