import FormStepsWrapper from "./form-steps-wrapper";
import styled from "@emotion/styled";


export default function MultiStepForm() {
    return (
        <StyledForm>
            <FormStepsWrapper />
        </StyledForm>
    )
}

const StyledForm = styled.div`
	/* padding: 0 2rem; */
`