import styled from "styled-components";

/** The view that displays the "Title Screen" or the "Main Menu" of the game. (Landing Page) */
const TitleScreen = () => {
  return (
    <TitleScreenWrapper>
      <div></div>
    </TitleScreenWrapper>
  );
};

// TitleScreen Styles
const TitleScreenWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  border: 2px solid red;
  margin: 5px;
`;

export default TitleScreen;
