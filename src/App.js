import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router } from "react-router-dom";

import theme from "./globalTheme";
import NavigationBar from "./NavigationBar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <NavigationBar />
      </Router>
    </ThemeProvider>
  );
}

export default App;
