import React from 'react'
import { Typography, useTheme } from '@mui/material'
import { useField } from 'formik'
import FormikTextField from "../../formikcomponents/FormikTextField"
import styled from '@emotion/styled'

function InheritorsList({ name, inheritorString }) {
    const [field] = useField(name)

    const inheritors = field.value

    const theme = useTheme()

    if (!inheritors || inheritors.length === 0) {
        return (
            <StyledInheritorsList>
                <StyledNoInheritors>
                    <Typography variant="subtitle1">יש לבחור יורשים מהרשימה מימין.</Typography>
                </StyledNoInheritors>
            </StyledInheritorsList>
        )
    }

    const CalculateSum = () => {
        let sum = 0;

        for (const inheritor of inheritors) {
            sum += Number(inheritor.percent)
        }

        return sum
    }

    const sum = CalculateSum()

    const sumBlockColor = () => {
        if (sum < 100) {
            return theme.palette.warning.light
        }

        if (sum === 100) {
            return theme.palette.success.light
        }

        // sum > 100
        return theme.palette.error.light
    }

    return (
        <StyledInheritorsList>
            <StyledWrapper>
                <StyledListWrapper>
                    <Typography variant="subtitle1">מה תהיה צורת החלוקה?</Typography>
                    {inheritors?.map((inheritor, index) =>
                        <StyledInheritorsListItem>
                            <Typography variant="body1">{inheritorString(inheritor)}</Typography>
                            <StyledPercentInput>
                                <div>%</div>
                                <FormikTextField
                                    percent
                                    name={`${name}[${index}].percent`} />
                            </StyledPercentInput>
                        </StyledInheritorsListItem>
                    )}
                </StyledListWrapper>
                <StyledSumBlock blockBackground={sumBlockColor}>
                    <Typography variant="subtitle1">סה״כ</Typography>
                    <StyledPercentInput>
                        <Typography variant="subtitle1">%</Typography>
                        <Typography variant="subtitle1">{sum}</Typography>
                    </StyledPercentInput>

                </StyledSumBlock>
            </StyledWrapper>
        </StyledInheritorsList>
    )
}


const StyledInheritorsList = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    width: 18rem;
`

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    align-items: center;
    gap: 1rem;
    justify-content: space-between;
`

const StyledInheritorsListItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 1rem;
`

const StyledNoInheritors = styled.div`
    background-color: #eee;
    padding: 1rem;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledPercentInput = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
`

const StyledListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    gap: 1rem;
`

const StyledSumBlock = styled("div")((props) => ({
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    backgroundColor: props.blockBackground(),
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    transition: "background-color 200ms ease-in-out",
    width: "100%"
}))


export default InheritorsList