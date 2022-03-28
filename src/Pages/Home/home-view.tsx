import { Button } from "../../components/Common.styled";
import { LandingImg, Title } from "./styled";

const HomeView: React.FC = () => {
  return (
    <>
      <LandingImg>
        <Title>In investing, what is comfortable is rarely profitable.</Title>
        <Button>Start Investing</Button>
      </LandingImg>
    </>
  );
};
export default HomeView;
