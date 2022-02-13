import styled from "styled-components"
import GameboardImg from "../assets/images/gameboard.webp"
import PlayBackground from "../assets/images/play-background.webp"
import { Chip } from "../components"

/** Constants */

// const DEFAULT_GAME_STATE = null

/** Component */

const Game = () => {

    return (
        <Page>
            <ImgWrapper>
                <ImageBackground src={PlayBackground} />
                <Gameboard src={GameboardImg} />
            </ImgWrapper>
            <Chip color="red" size={50} />
            <Chip color="yellow" size={50} />
        </Page>
    )
}

/** Styles */

const Page = styled.div`
    height: 100%;
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
`

const ImgWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ImageBackground = styled.img`
    position: absolute;
    height: 110%;
    z-index: 3;
    object-fit: contain;
    padding: -8px;
`

const Gameboard = styled.img`
    height: 100%;
    z-index: 3;
    object-fit: contain;
`


/** Exports */

export default Game
