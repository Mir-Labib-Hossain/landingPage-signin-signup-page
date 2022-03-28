import { Col2, Col4, Icon, Row ,P} from "../Common.styled";
import { Apps, Footer, Header,   SocialTab } from "./styled";

const FooterView: React.FC = () => {
  return (
    <>
      <Footer>
        <SocialTab>
          <Header>Follow Us On</Header>
          <Icon className="fa-brands fa-linkedin"></Icon>
          <Icon className="fa-brands fa-facebook-square"></Icon>
          <Icon className="fa-brands fa-instagram-square"></Icon>
          <Icon className="fa-brands fa-youtube-square"></Icon>
        </SocialTab>
        <Row>
          <Col4>
            <Header>Download our app from the stores</Header>
            <Row>
              <Col2>
                <Row>
                  <Apps>
                    <Icon className="fa-brands fa-app-store-ios"></Icon>
                    <P>App store</P>
                  </Apps>
                </Row>
              </Col2>
              <Col2>
                <Row>
                  <Apps>
                    <Icon className="fa-brands fa-google-play"></Icon> <P>Play store</P>
                  </Apps>
                </Row>
              </Col2>
            </Row>
          </Col4>
          <Col4>
            <Header>About Us</Header>
            <P>About</P>
            <P>StockX Reviews</P>
            <P>Careers</P>
            <P>Our offices</P>
            <P>Accessibility</P>
            <P>Imprint</P>
          </Col4>
          <Col4>
            <Header>Legal & Regulatory</Header>
            <P>Terms & Conditions</P>
            <P>Disclosures</P>
            <P>Privacy</P>
          </Col4>
          <Col4>
            <Header>All investing involves risk.</Header>
            <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur error quis ullam reiciendis! Repellendus, ducimus! Sequi voluptatum alias deleniti, eaque consequuntur quam eum nesciunt voluptatem maiores dolores molestiae, veniam perspiciatis!</P>
          </Col4>
        </Row>
      </Footer>
    </>
  );
};
export default FooterView;
