//import logo from "./logo.svg";
import "./App.css";
import {Container} from "react-bootstrap";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ClientRegisterScreen from "./screens/ClientRegisterScreen.js";
//import TeacherRegisterScreen from "./screens/TeacherRegisterScreen";
//import Hero from "./components/Hero.js";
//import Features from "./components/features.js";
//import SignIn from "./components/SignIn.js";
//import Header from "./components/header.js";
import MenuNav from "./components/Menu.js";
import AdminDashBoard from "./screens/AdminDashBoard";
import LoginScreen from "./screens/LoginScreen";
import Hero from "./components/Hero";

function App() {
  return (
    <Router>
      <MenuNav />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route exact path='/' element={<AdminDashBoard />} />
            <Route exact path='/register' element={<ClientRegisterScreen />} />
            <Route exact path='/login' element={<LoginScreen />} />
            <Route exact path='/hero' element={<Hero />} />
          </Routes>
        </Container>
      </main>
    </Router>
  );
}

export default App;
