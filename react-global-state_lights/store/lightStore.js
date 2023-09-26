import { create } from "zustand";
import { roomData } from "./rooms";

// console.log(roomData);

export const useLightStore = create((set) => ({
  count: 0,
  roomData: roomData,
  handleToggle: (id) =>
    set((state) => {
      return {
        roomData: state.roomData.map((room) => {
          return room.id === id ? { ...room, isOn: !room.isOn } : room;
        }),
      };
    }),
}));
