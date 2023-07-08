import { Stack, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ModalHeader = ({ title, onClose }) => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Typography variant="h6">{title}</Typography>
      <IconButton onClick={onClose} size="small">
        <CloseIcon />
      </IconButton>
    </Stack>
  );
};

export default ModalHeader;
