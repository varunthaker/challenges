import { create } from "zustand";
import { roomData } from "./rooms";

// console.log(roomData);

export const lightStore = create((set) => ({
  count: 0,
  roomData: roomData,
  isOn: false,
  handleToggle: () => set((isOn) => !isOn),
}));
