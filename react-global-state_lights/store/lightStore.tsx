import { create } from "zustand";
import { roomData } from "./rooms";
import { roomInfo } from "../types";

interface lightStore {
  roomData: Array<roomInfo>;
  handleToggle: (id: number) => void;
  switchAllLights: (value: boolean) => void;
  numOfSwitchedOnLights: () => number;
}

export const useLightStore = create<lightStore>((set, get) => ({
  roomData: roomData,

  handleToggle: (id: number) =>
    set((state) => {
      return {
        roomData: state.roomData.map((room: roomInfo) => {
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
