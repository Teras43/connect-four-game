import styled from "styled-components";

const GameToken = () => {
  return (
    <OuterBorder>
      <InnerBorder>
        <CenterOuterBorder>
          <RaisedInnerBorder></RaisedInnerBorder>
        </CenterOuterBorder>
      </InnerBorder>
    </OuterBorder>
  );
};

/** Styles */
const OuterBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  background-color: red;
  height: 200px;
  width: 200px;
  border-radius: 50%;
`;

const InnerBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid black;
  background-color: red;
  height: 185px;
  width: 185px;
  border-radius: 50%;
  box-shadow: 1px 1px 8px 1px black inset;
`;

const CenterOuterBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
  background-color: red;
  height: 140px;
  width: 140px;
  border-radius: 50%;
  box-shadow: 1px 1px 20px black inset;
`;

const RaisedInnerBorder = styled.div`
  border: 1px solid black;
  background-color: red;
  height: 125px;
  width: 125px;
  border-radius: 50%;
`;

export default GameToken;
