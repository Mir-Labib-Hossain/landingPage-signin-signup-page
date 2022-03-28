import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ModeProps } from ".";
import Home from "../../Pages/Home";
import SignIn from "../../Pages/SignIn";
import SignUp from "../../Pages/SignUp";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { MainContainer } from "./styled";
const MainView: React.FC<ModeProps> = ({ darkMode, modeHandler }) => {
  return (
    <>
      <Router>
        <Navbar darkMode={darkMode} modeHandler={modeHandler} />
        <MainContainer>
          <Routes>
            <Route path="/" element={<Home />} />
         
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </MainContainer>
        <Footer />
      </Router>
    </>
  );
};
export default MainView;
