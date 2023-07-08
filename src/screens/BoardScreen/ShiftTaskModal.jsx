import { useState } from "react";
import { Dialog, Button, Typography, Stack, Chip } from "@mui/material";
import ModalHeader from "../../components/layout/ModalHeader";
import { statusMap } from "./BoardInterface";

const ShiftTaskModal = ({ onClose, task, shiftTask }) => {
  const [taskStatus, setTaskStatus] = useState(task.status);
  return (
    <Dialog open fullWidth maxWidth="xs">
      <Stack p={2}>
        <ModalHeader title="Shift task" onClose={onClose} />
        <Stack my={3} spacing={3}>
          <Stack spacing={1}>
            <Typography>Task:</Typography>
            <Typography p={1.5} bgcolor="#45474E">
              {task.text}
            </Typography>
          </Stack>
          <Stack spacing={1}>
            <Typography>Status</Typography>
            <Stack direction="row" spacing={1}>
              {Object.entries(statusMap).map(([status, label]) => (
                <Chip
                  onClick={() => setTaskStatus(status)}
                  variant={taskStatus === status ? "filled" : "outlined"}
                  key={status}
                  label={label}
                />
              ))}
            </Stack>
          </Stack>
        </Stack>
        <Button onClick={() => shiftTask(taskStatus)} variant="contained">
          Shift task
        </Button>
      </Stack>
    </Dialog>
  );
};

export default ShiftTaskModal;
