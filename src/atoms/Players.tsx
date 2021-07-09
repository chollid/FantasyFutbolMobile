import { atom } from "recoil";

import { players } from "../data/players";

//Holds **ALL of the players in an Array
export const allPlayersState = atom({
  key: "allPlayersState",
  default: players,
});

// The **Filtered players by **Position
export const positionFilterState = atom({
  key: "positionFilterState",
  default: [] as string[],
});
