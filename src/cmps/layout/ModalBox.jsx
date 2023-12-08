import styled from '@emotion/styled'
import { Close } from '@mui/icons-material';
import { Box, IconButton, Modal, Typography } from '@mui/material'
import React from 'react'

const style = {
    position: "relative",
    width: 600,
    bgcolor: 'background.paper',
    borderRadius: "10px",
    boxShadow: 24,
    padding: "1rem",
    margin: "2rem auto",
};

function ModalBox({ open, handleClose, title, children }) {
    return (
        <StyledModal
            open={open}
            onClose={handleClose}
        >
            <StyledBox sx={style}>
                <StyledModalHeader>
                    <StyledCloseIconWrapper>
                        <IconButton onClick={handleClose}>
                            <Close />
                        </IconButton>
                    </StyledCloseIconWrapper>

                    <StyledTitle variant="h1">
                        {title}
                    </StyledTitle>
                    <StyledHeaderDummyDiv />
                </StyledModalHeader>
                <StyledContentContainer>
                    {children}
                </StyledContentContainer>
            </StyledBox>
        </StyledModal>
    )
}

const StyledModal = styled(Modal)`
    overflow-y: auto;
    display: block;
`

const StyledModalHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledContentContainer = styled.div`
    padding: 0.5rem;
`

const StyledBox = styled(Box)`
    position: relative;
    width: 600;
    background-color: 'background.paper';
    border-radius: 10px;
    /* box-shadow: 24; */
    padding: 1rem;
    margin: 2rem auto;

    height: 80%;

    @media (max-width: 600px) {
        width: 100%;
    }
`

const StyledCloseIconWrapper = styled.div`
    flex: 1;
`

const StyledTitle = styled(Typography)`
    flex: 1;
    text-align: center;
`

const StyledHeaderDummyDiv = styled.div`
    flex: 1;
`


export default ModalBox