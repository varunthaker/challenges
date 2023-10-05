import { create } from "zustand";
import { roomData } from "./rooms";

export const useLightStore = create((set, get) => ({
  roomData: roomData,

  handleToggle: (id) =>
    set((state) => {
      return {
        roomData: state.roomData.map((room) => {
          return room.id === id ? { ...room, isOn: !room.isOn } : room;
        }),
      };
    }),
  switchAllLights: (value) => {
    set((state) => {
      return {
        roomData: state.roomData.map((room) => {
          return { ...room, isOn: value };
        }),
      };
    });
  },

  numOfSwitchedOnLights: () =>
    get().roomData.reduce((prev, curr) => prev + (curr.isOn ? 1 : 0), 0),
}));
