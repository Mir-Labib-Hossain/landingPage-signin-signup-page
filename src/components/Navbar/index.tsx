import { ModeProps } from "../Main";
import NavbarView from "./navbar-view";

const Navbar: React.FC <ModeProps>= ({darkMode,modeHandler}) => {
  return (
    <>
      <NavbarView darkMode={darkMode}modeHandler={modeHandler} />
    </>
  );
};
export default Navbar;
