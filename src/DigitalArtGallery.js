import React, { useState } from 'react';
import './DigitalArtGallery.css';

function DigitalArtGallery() {
  const [artList, setArtList] = useState([
    {id: 1, src: "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"},
    {id: 2, src: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80"},
    {id: 3, src: "https://plus.unsplash.com/premium_photo-1669751999779-a4420b8d0d6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"},
    {id: 4, src: "https://images.unsplash.com/photo-1501472312651-726afe119ff1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"}
  ]);

  const [newArt, setNewArt] = useState('');

  function handleNewArtChange(e) {
    setNewArt(e.target.value);
  }

  function handleAddArt() {
    const newId = artList.length + 1;
    const newArtItem = {id: newId, src: newArt};
    setArtList([...artList, newArtItem]);
    setNewArt('');
  }

  function handleDeleteArt(id) {
    const filteredArtList = artList.filter(item => item.id !== id);
    setArtList(filteredArtList);
  }

  function handleFileUpload(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const newId = artList.length + 1;
      const newArtItem = {id: newId, src: reader.result};
      setArtList([...artList, newArtItem]);
    }
    reader.readAsDataURL(file);
  }

  return (
    <div className="digital-art-gallery-container">
      <h2>Digital Art Gallery</h2>
      <div className="digital-art-gallery-grid">
        {artList.map(item => (
          <div className="digital-art-gallery-item" key={item.id}>
            <img src={item.src} alt="Digital Artwork" />
            <button onClick={() => handleDeleteArt(item.id)}>Delete</button>
          </div>
        ))}

        <div className="digital-art-gallery-item">
          <input type="text" placeholder="Enter image URL" value={newArt} onChange={handleNewArtChange} />
          <button onClick={handleAddArt}>Add Art</button>
        </div>
      </div>
    </div>
  );
}
export default DigitalArtGallery;
       
