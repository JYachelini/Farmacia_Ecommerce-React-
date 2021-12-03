import { useState } from "react";

export const CartModalFunction = (initial = false) => {
  const [isOpen, setIsOpen] = useState(initial);

  const openModal = () => setIsOpen(true); // Modal abierto
  const closeModal = () => setIsOpen(false); // Modal cerrado

  return [isOpen, openModal, closeModal];
};
