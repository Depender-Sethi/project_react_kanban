import { useEffect } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import useStore from "./store";
import AppLoader from "./components/layout/AppLoader";

// screens
import AuthScreen from "./screens/AuthScreen";
import BoardsScreen from "./screens/BoardsScreen";
import BoardScreen from "./screens/BoardScreen";

//
import PublicOnlyRoute from "./components/utils/PublicOnlyRoute";
import PrivateRoute from "./components/utils/PrivateRoute";
import SnackbarManager from "./components/layout/SnackbarManager";

const App = () => {
  const { loader, setLoginStatus } = useStore();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setLoginStatus(!!user);
    });

    return () => unsub();
  }, []);

  if (loader) return <AppLoader />;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarManager />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<PublicOnlyRoute Component={AuthScreen} />}
          />
          <Route
            path="/boards"
            element={<PrivateRoute Component={BoardsScreen} />}
          />
          <Route
            path="/boards/:boardId"
            element={<PrivateRoute Component={BoardScreen} />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
