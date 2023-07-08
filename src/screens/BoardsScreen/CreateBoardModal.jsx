import { useState } from "react";
import {
  Dialog,
  Stack,
  Typography,
  Box,
  TextField,
  Button,
} from "@mui/material";
import ModalHeader from "../../components/layout/ModalHeader";
import { colors } from "../../theme";
import useApp from "../../hooks/useApp";
import useStore from "../../store";

const CreateBoardModal = ({ closeModal }) => {
  const { createBoard } = useApp();
  const [name, setName] = useState("");
  const [color, setColor] = useState(0);
  const [loading, setLoading] = useState(false);
  const { setToastr } = useStore();

  const handleCreate = async () => {
    const tName = name.trim();
    if (!tName) return setToastr("You need to enter board name");
    if (!/^[a-zA-Z0-9\s]{1,20}$/.test(tName))
      return setToastr(
        "Board name cannot contain special characters and should not be more than 20 chars"
      );
    try {
      setLoading(true);
      await createBoard({ name: tName, color });
      closeModal();
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <Dialog open onClose={closeModal} fullWidth maxWidth="xs">
      <Stack p={2}>
        <ModalHeader onClose={closeModal} title="Create Board" />
        <Stack my={5} spacing={3}>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Board name"
          />
          <Stack spacing={1.5} direction="row">
            <Typography>Color: </Typography>

            {colors.map((clr, idx) => (
              <Box
                sx={{
                  cursor: "pointer",
                  border: color === idx ? "3px solid #383838" : "none",
                  outline: `2px solid ${clr}`,
                }}
                onClick={() => setColor(idx)}
                key={clr}
                height={25}
                width={25}
                backgroundColor={clr}
                borderRadius="50%"
              />
            ))}
          </Stack>
        </Stack>
        <Button
          disabled={loading}
          onClick={handleCreate}
          variant="contained"
          size="large"
        >
          Create
        </Button>
      </Stack>
    </Dialog>
  );
};

export default CreateBoardModal;
