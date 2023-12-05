import React from 'react'
import FormWrapper from '../../utils/FormWrapper'
import FormikTextField from "../../formikcomponents/FormikTextField"
import translation from '../../../store/translation'
import Question from '../../utils/Question'
import ItemWrapper from '../../utils/ItemWrapper'
import ItemsList from '../../utils/ItemsList/ItemsList'
import { defaults } from '../../../store/context'
import BankDetails from './BankDetails'
import ProvidentFundDetails from "./ProvidentFundDetails"
import StudyFundDetails from "./StudyFundDetails"
import StepFiveMoneySchema from './validation'

function StepFiveMoney() {
    return (
        <FormWrapper
            validationSchema={StepFiveMoneySchema}
        >
            <Question question={translation.money}>
                <FormikTextField
                    name="money"
                    label={translation.money_title}
                    numeric
                />
            </Question>

            <ItemsList
                name="bank_accounts"
                title={translation.bank_accounts_title}
                itemTitle={translation.bank_accounts_title}
                defaultValue={defaults.bank_accounts}
                renderItem={(_dataItem, itemNameWithIndex) =>
                    <BankDetails
                        nameWithIndex={itemNameWithIndex}
                    />
                }
            />

            <ItemsList
                name="provident_funds_data"
                title={translation.provident_funds_title}
                itemTitle={translation.provident_funds_title}
                defaultValue={defaults.provident_funds}
                renderItem={(_dataItem, itemNameWithIndex) =>
                    <ProvidentFundDetails
                        nameWithIndex={itemNameWithIndex}
                    />
                }
            />


            <ItemsList
                name="study_funds_data"
                title={translation.study_funds_title}
                itemTitle={translation.study_funds_title}
                defaultValue={defaults.study_funds}
                renderItem={(_dataItem, itemNameWithIndex) =>
                    <StudyFundDetails
                        nameWithIndex={itemNameWithIndex}
                    />
                }
            />

        </FormWrapper>
    )
}

export default StepFiveMoney