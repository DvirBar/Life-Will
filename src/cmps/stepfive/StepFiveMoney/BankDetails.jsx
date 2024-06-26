import React, { useContext } from 'react'
import BaseLayout from '../../utils/BaseLayout'
import Question from '../../utils/Question'
import FormikTextField from '../../formikcomponents/FormikTextField'
import { SiteContext } from '../../../store/context'

function BankDetails({ nameWithIndex }) {
    const {
        translation
    } = useContext(SiteContext)

    return (
        <BaseLayout>
            <Question title={translation.bank_accounts.bank_name}>
                <FormikTextField
                    name={`${nameWithIndex}.bank_name`}
                    label={translation.bank_accounts.bank_name}
                />
            </Question>

            <Question title={translation.bank_accounts.account_number}>
                <FormikTextField
                    name={`${nameWithIndex}.account_number`}
                    label={translation.bank_accounts.account_number}
                    numeric
                />
            </Question>

            <Question title={translation.bank_accounts.branch_number}>
                <FormikTextField
                    name={`${nameWithIndex}.branch_number`}
                    label={translation.bank_accounts.branch_number}
                    numeric
                    maxLength={3}
                />
            </Question>
        </BaseLayout>
    )
}

export default BankDetails