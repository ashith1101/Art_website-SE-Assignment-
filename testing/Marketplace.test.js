import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Marketplace from "../src/Marketplace.js";

describe("Marketplace", () => {
  it("displays the artworks", () => {
    render(<Marketplace />);
    const artworks = screen.getAllByRole("img");
    expect(artworks.length).toBe(3);
  });

  it("adds a new artwork", () => {
    render(<Marketplace />);
    const addButton = screen.getByText("Add Artwork");
    fireEvent.click(addButton);

    const titleInput = screen.getByLabelText("Title:");
    const artistInput = screen.getByLabelText("Artist:");
    const priceInput = screen.getByLabelText("Price:");
    const imageInput = screen.getByLabelText("Image URL:");
    const saveButton = screen.getByText("Save");

    fireEvent.change(titleInput, { target: { value: "New Artwork" } });
    fireEvent.change(artistInput, { target: { value: "John Doe" } });
    fireEvent.change(priceInput, { target: { value: "50" } });
    fireEvent.change(imageInput, { target: { value: "https://example.com/new-artwork.jpg" } });
    fireEvent.click(saveButton);

    const newArtwork = screen.getByAltText("New Artwork");
    expect(newArtwork).toBeInTheDocument();
  });

  it("confirms a purchase", () => {
    render(<Marketplace />);
    const buyButton = screen.getAllByText("Buy")[0];
    fireEvent.click(buyButton);

    const nameInput = screen.getByLabelText("Name:");
    const emailInput = screen.getByLabelText("Email:");
    const addressInput = screen.getByLabelText("Address:");
    const confirmButton = screen.getByText("Confirm Purchase");

    fireEvent.change(nameInput, { target: { value: "John" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(addressInput, { target: { value: "123 Main St." } });
    fireEvent.click(confirmButton);

    const successMessage = screen.getByText("Thank you for your purchase, John!");
    expect(successMessage).toBeInTheDocument();
  });
});
