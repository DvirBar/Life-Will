import { useContext, useEffect, useState } from "react";
import FormStepsWrapper from "./form-steps-wrapper";
import { SiteContext } from "../store/context";
import { useRef } from 'react';


export default function MultiStepForm() {


	return (
		<div className='form'>
			<FormStepsWrapper />
		</div>
	)
}