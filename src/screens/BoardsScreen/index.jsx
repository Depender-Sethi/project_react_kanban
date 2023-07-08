import { Grid, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import AppLoader from "../../components/layout/AppLoader";
import useApp from "../../hooks/useApp";
import useStore from "../../store";
import BoardCard from "./BoardCard";
import CreateBoardModal from "./CreateBoardModal";
import Topbar from "./Topbar";
import NoBoards from "./NoBoards";

const BoardsScreen = () => {
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const { fetchBoards } = useApp();
  const { boards, areBoardsFetched } = useStore();

  useEffect(() => {
    if (!areBoardsFetched) fetchBoards(setLoading);
    else setLoading(false);
  }, []);

  if (loading) return <AppLoader />;
  return (
    <>
      <Topbar openModal={() => setShowModal(true)} />
      {showModal && <CreateBoardModal closeModal={() => setShowModal(false)} />}
      {/* <NoBoards /> */}

      {!boards.length ? (
        <NoBoards />
      ) : (
        <Stack mt={5} px={3}>
          <Grid container spacing={{ xs: 2, sm: 4 }}>
            {boards.map((board) => (
              <BoardCard key={board.id} {...board} />
            ))}
          </Grid>
        </Stack>
      )}
    </>
  );
};

export default BoardsScreen;
