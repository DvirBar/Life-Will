import styled from '@emotion/styled'
import { Close } from '@mui/icons-material';
import { Box, IconButton, Modal } from '@mui/material'
import React from 'react'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: "10px",
    boxShadow: 24,
    padding: "1rem"
};
function ModalBox({ open, handleClose, children }) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={style}>
                <StyledModalHeader>
                    <IconButton onClick={handleClose}>
                        <Close />
                    </IconButton>
                </StyledModalHeader>
                <StyledContentContainer>
                    {children}
                </StyledContentContainer>
            </Box>
        </Modal>
    )
}

const StyledModalHeader = styled.div`
    display: flex;
`

const StyledContentContainer = styled.div`
    padding: 0.5rem;
`


export default ModalBox