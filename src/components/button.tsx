import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const StyledBtn = () => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1400,
    config: { tension: 280, friction: 60 },
  });

  return (
    <ComponentWrapper style={props}>
      <Button>Start Game</Button>
    </ComponentWrapper>
  );
};

/** Styles */
const ComponentWrapper = styled(animated.div)`
  margin-top: 160px;
`;

const Button = styled.button`
  height: 60px;
  width: 160px;
  border-radius: 10px;
  font-size: 24px;
  font-weight: 700;
  color: white;
  background-color: rgb(111, 235, 111);
  outline: none;

  &:hover {
    background-color: rgb(57, 202, 57);
    box-shadow: -2px -2px 40px rgb(1, 122, 1);
  }
`;

export default StyledBtn;
