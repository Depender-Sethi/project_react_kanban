import { Stack, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Draggable } from "react-beautiful-dnd";

const Task = ({ id, text, index, removeTask, onClick }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <Stack
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
          direction="row"
          alignItems="center"
          spacing={1}
        >
          <Typography
            {...(!!onClick ? { onClick: onClick } : {})}
            p={1}
            width="100%"
            border="1px solid"
            borderColor="#777980"
            bgcolor="#45474E"
          >
            {text}
          </Typography>
          <IconButton onClick={removeTask}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      )}
    </Draggable>
  );
};

export default Task;
