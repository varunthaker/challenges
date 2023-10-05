import { create } from "zustand";
import { roomData } from "./rooms";

export const useLightStore = create((set, get) => ({
  roomData: roomData,
  count: 0,
  handleToggle: (id) =>
    set((state) => {
      return {
        roomData: state.roomData.map((room) => {
          return room.id === id ? { ...room, isOn: !room.isOn } : room;
        }),
      };
    }),

  numOfSwitchedOnLights: () =>
    get().roomData.reduce((prev, curr) => prev + (curr.isOn ? 1 : 0), 0),
}));

// count: () =>
//   get().roomData.reduce((prev, cur) => prev + (cur.isOn ? 1 : 0), 0),

// const countvalue = roomData.reduce((prev, curr) => {
//   return curr.isOn ? prev + 1 : prev;
// }, 0);
