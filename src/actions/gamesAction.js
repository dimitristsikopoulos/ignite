import axios from "axios";
import { popularGamesURL } from "../api";

export const loadGames = () => async (dispach) => {
  //FETCH AXIOS
  const popularData = await axios.get(popularGamesURL());
  dispach({
    type: "FETCH_GAMES",
    payload: popularData.data.results,
  });
};
