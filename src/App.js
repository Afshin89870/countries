import { Routes, Route, BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Err from "./pages/Err";
import Cards from "./pages/Cards";
import LandPage from "./pages/LandPage";
import Nav from "./components/Nav";
import CountryList from "./pages/CountryList";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:arial;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<LandPage />} />
          <Route path="/Cards/:name" element={<Cards />} />
          <Route path="/CountryList" element={<CountryList/>}/>
          <Route path="*" element={<Err />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
