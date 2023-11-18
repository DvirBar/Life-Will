import styled from '@emotion/styled'
import React from 'react'
import BackgroundImage from "../assets/images/background.svg"

const BackgroundHeight = "600px"

function Background() {
    return (
        <CoverLayer>
            <StyledBackground />
        </CoverLayer>

    )
}

const CoverLayer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: ${BackgroundHeight};
    z-index: -1;
    background-color: #EBF2FF;
`

const StyledBackground = styled.div`
    background-image: url(${BackgroundImage});
    top: 0;
    left: 0;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: ${BackgroundHeight};
    position: absolute;
    z-index: -2;
`
export default Background