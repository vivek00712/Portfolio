// import Container from "./Containers/Container";
import { ThemeProvider } from "./Contexts/ThemeContext";
import Background from "./Components/Common/Background";

function App() {
  return (
    <>
      <ThemeProvider>
        {/* <Container /> */}
        <Background />
      </ThemeProvider>
    </>
  );
}

export default App;
