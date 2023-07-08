import { create } from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
  loader: true,
  toastrMsg: "",
  isLoggedIn: false,
  boards: [],
  areBoardsFetched: false,
  setToastr: (toastrMsg) => set({ toastrMsg }, false, "setToastr"),
  setBoards: (boards) =>
    set({ boards, areBoardsFetched: true }, false, "setBoards"),
  addBoard: (board) =>
    set((old) => ({ boards: [board, ...old.boards] }), false, "addBoard"),
  setLoginStatus: (status) =>
    set(
      {
        isLoggedIn: status,
        loader: false,
        boards: [],
        areBoardsFetched: false,
      },
      false,
      "setLoginStatus"
    ),
});

const useStore = create(devtools(store));

export default useStore;
