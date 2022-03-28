import MainView from "./main-view";
export interface ModeProps{
  darkMode:boolean;
  modeHandler:React.MouseEventHandler<HTMLButtonElement>;
}
const Main: React.FC<ModeProps> = ({darkMode,modeHandler}) => {
  return (
    <>
      <MainView darkMode={darkMode} modeHandler={modeHandler}/>
    </>
  );
};
export default Main;
