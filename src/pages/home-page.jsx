import React from 'react'
import MultiStepForm from '../cmps/multi-step-form'
import FormNavigation from '../cmps/layout/FormNavigation'
import styled from '@emotion/styled'
import Background from '../cmps/Background'


export function HomePage() {
	return (
		<StyledCenteredWrapper>
			<StyledWrapper>
				<Background />
				<FormNavigation />
				<StyledLayout>
					<MultiStepForm />
				</StyledLayout>
			</StyledWrapper>
		</StyledCenteredWrapper>

	)
}

const StyledCenteredWrapper = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 9rem;
`
const StyledWrapper = styled.div`
	width: "100%";
	height: "100%";
	display: flex;
	flex-direction: column;
	align-items: center;
	align-self: center;
	justify-self: center;
	width: 900px;
`

const StyledLayout = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3rem;
	padding: 3rem;
	background-color: #fff;
	padding: 2rem;
	border: 1px solid #ccc;
	border-radius: 10px;
	margin: 2rem;
	width: 100%;
`