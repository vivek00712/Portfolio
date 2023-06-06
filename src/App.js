import Container from "./Containers/Container";
import { ThemeProvider } from "./Contexts/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <Container />
      </ThemeProvider>
    </>
  );
}

export default App;
