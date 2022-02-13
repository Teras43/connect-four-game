import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { StyledBtn } from "../components";
import SplashTitle from "../assets/images/title-splash.webp";
import { GameToken } from "../components";

/** The view that displays the "Title Screen" or the "Main Menu" of the game. (Landing Page) */
const TitleScreen = () => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { tension: 280, friction: 120 },
  });
  // <animated.div style={props}>I will fade in</animated.div>

  return (
    <ComponentWrapper style={props}>
      <SplashImg>
        <GameToken></GameToken>
        <StyledBtn></StyledBtn>
      </SplashImg>
    </ComponentWrapper>
  );
};

// TitleScreen Styles
const ComponentWrapper = styled(animated.div)`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const SplashImg = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  background-image: url(${SplashTitle});
  background-repeat: no-repeat;
  background-position: center;
`;

export default TitleScreen;
