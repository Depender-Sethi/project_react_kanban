import { memo } from "react";
import { Toolbar, Stack, Typography, IconButton, AppBar } from "@mui/material";
import BackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { colors } from "../../theme";

const BoardTopbar = ({ name, lastUpdated, color, deleteBoard }) => {
  const navigate = useNavigate();
  return (
    <AppBar
      position="static"
      sx={{
        borderBottom: "5px solid",
        borderColor: colors[color],
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Stack spacing={1} alignItems="center" direction="row">
          <IconButton onClick={() => navigate("/boards")}>
            <BackIcon />
          </IconButton>
          <Typography variant="h6">{name}</Typography>
        </Stack>
        <Stack spacing={2} alignItems="center" direction="row">
          <Typography
            display={{
              xs: "none",
              sm: "block",
            }}
            variant="body2"
          >
            Last updated: {lastUpdated}
          </Typography>
          <IconButton onClick={deleteBoard}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default memo(BoardTopbar);
