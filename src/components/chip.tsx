import styled from "styled-components"

/** Types */

type Props = {
    color: "red" | "yellow"
    position?: [number, number]
    size: number
}

/** Component */

/** Represents a single game chip.  */
const Chip = ({ color, position, size }: Props) => {

    return (
        <ChipWrapper color={color} position={position} size={size}>

        </ChipWrapper>
    )
}

/** Styles */

const ChipWrapper = styled.div<Props>`
    position: absolute;
    top: 0;
    left: 50%;
    border-radius: 50%;
    z-index: 4;

    height: ${({ size }) => size}px;
    width: ${({ size }) => size}px;
    background-color: ${({ color }) => color === "red" ? "rgb(255, 0, 0)" : "rgb(255, 255, 0)"};
`

/** Exports */

export default Chip
