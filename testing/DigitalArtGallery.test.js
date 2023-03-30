import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import DigitalArtGallery from '../DigitalArtGallery.js';

describe('DigitalArtGallery', () => {
  it('should add a new artwork when "Add Art" button is clicked', () => {
    render(<DigitalArtGallery />);
    const newArtUrl = 'https://example.com/new-art.jpg';
    const input = screen.getByPlaceholderText('Enter image URL');
    fireEvent.change(input, { target: { value: newArtUrl } });
    const addButton = screen.getByText('Add Art');
    fireEvent.click(addButton);
    const newArt = screen.getByAltText('Digital Artwork', { src: newArtUrl });
    expect(newArt).toBeInTheDocument();
  });

  it('should delete an artwork when "Delete" button is clicked', () => {
    render(<DigitalArtGallery />);
    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);
    const deletedArt = screen.queryByText('Delete');
    expect(deletedArt).not.toBeInTheDocument();
  });

  it('should add a new artwork when a file is uploaded', () => {
    render(<DigitalArtGallery />);
    const file = new File(['test'], 'test.png', { type: 'image/png' });
    const fileInput = screen.getByLabelText('Upload file');
    fireEvent.change(fileInput, { target: { files: [file] } });
    const newArt = screen.getByAltText('Digital Artwork', { src: 'data:image/png;base64,dGVzdA==' });
    expect(newArt).toBeInTheDocument();
  });
});
