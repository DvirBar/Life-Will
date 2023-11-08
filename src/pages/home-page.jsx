import React from 'react'
import MultiStepForm from '../cmps/multi-step-form'
import FormNavigation from '../cmps/layout/FormNavigation'
import styled from '@emotion/styled'


export function HomePage() {
	return (
		<StyledWrapper>
			<StyledLayout>
				<FormNavigation />
				<MultiStepForm />
			</StyledLayout>
		</StyledWrapper>
	)
}

const StyledWrapper = styled.div`
	width: "100%";
	height: "100%";
	display: flex;
	justify-content: center;
	align-items: center;
`

const StyledLayout = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3rem;
	padding: 3rem;
	background-color: #fff;
	padding: 2rem;
	box-shadow: 0px 0px 12px #aaa;
	border-radius: 10px;
	margin: 2rem;
	width: 900px;
`