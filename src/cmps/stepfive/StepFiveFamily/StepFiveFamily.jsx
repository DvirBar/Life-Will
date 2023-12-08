import React from 'react'
import FormWrapper from '../../utils/FormWrapper'
import translation, { moneyDivision } from '../../../store/translation'
import { Typography } from '@mui/material'
import FormikButtonSelect from '../../formikcomponents/FormikButtonSelect'
import ButtonSelectItem from '../../formikcomponents/buttonSelect/ButtonSelectItem'
import MoneyDivisionTable from './MoneyDivisionTable'
import * as Yup from "yup"

const validation = Yup.object({
    money_division: Yup.string().required("יש לבחור באפשרות המתאימה"),
    money_division_inheritors: Yup.array().when("money_division", {
        is: moneyDivision.byDecision,
        then: (schema) => schema.of(Yup.object().shape({
            percent: Yup.string().required("דרוש")
        }))
    })
})

function StepFiveFamily() {
    return (
        <FormWrapper
            validationSchema={validation}
        >
            <Typography variant="subtitle1">{translation.money_division}</Typography>
            <FormikButtonSelect
                name="money_division"
            // label={translation[itemDataName].type}
            >
                {Object.keys(moneyDivision).map(key =>
                    <ButtonSelectItem
                        key={key}
                        value={moneyDivision[key]}
                    >
                        {moneyDivision[key]}
                    </ButtonSelectItem>

                )}
                <MoneyDivisionTable />
            </FormikButtonSelect>
        </FormWrapper>
    )
}

export default StepFiveFamily