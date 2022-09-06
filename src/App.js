import logo from "./logo.svg";
import "./App.css";
import {Container} from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import {RegisterScreen} from "./screens/RegisterScreen ";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/header";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/register' element={<RegisterScreen />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
