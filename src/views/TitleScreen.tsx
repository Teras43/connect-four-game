import styled from "styled-components";
// import { useSpring, animated } from "react-spring";
import { StyledBtn } from "../components";

/** The view that displays the "Title Screen" or the "Main Menu" of the game. (Landing Page) */
const TitleScreen = () => {
  // const props = useSpring({
  //   to: { opacity: 1 },
  //   from: { opacity: 0 },
  //   config: { mass: 1, tension: 120, friction: 14 },
  // });

  return (
    <ComponentWrapper>
      {/* <animated.div style={props}>I will fade in</animated.div> */}
      <StyledBtn></StyledBtn>
    </ComponentWrapper>
  );
};

// TitleScreen Styles
const ComponentWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  border: 1px solid red;
  justify-content: center;
  align-items: center;
`;

export default TitleScreen;
