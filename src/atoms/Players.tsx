import { atom, selector } from "recoil";

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

//Derived Data: Data that is dependant on other data in the State
export const filteredPlayers = selector({
  key: "filteredPlayers",
  get: ({ get }) => {
    //Grab the Players and Filter array from State
    //**This is SUBSCRIBED - Whenever arrays update this will too */
    const players = get(allPlayersState);
    const filters = get(positionFilterState);
    //Filter out the players from players Array who's POSITION's are also included in filters Array. and keep it in State
    return players.filter(
      (player) => filters.length === 0 || filters.includes(player.position)
    );
  },
});
