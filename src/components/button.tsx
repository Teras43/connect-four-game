import styled from "styled-components";

const StyledBtn = () => {
  return <Button>Start Game</Button>;
};

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
    box-shadow: -2px -2px 40px rgb(228, 251, 228);
  }
`;

export default StyledBtn;
