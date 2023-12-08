import React from 'react'
import DocPage from '../DocPage'
import Title from '../Title'
import translation, { answers } from '../../../store/translation'
import QuestionBlock from '../QuestionBlock'
import Block from '../Block'
import { Text } from '@react-pdf/renderer'
import { globalData as data } from '../../../store/context'

function Step6() {
    return (
        <DocPage>
            <Title>{translation.step6}</Title>
            <QuestionBlock question={translation.not_applied_before_spouse} answer={data.not_applied_before_spouse} />
            <QuestionBlock question={translation.burial_location} answer={data.burial_location} />
            <QuestionBlock question={translation.funeral_in_charge} answer={data.funeral_in_charge} />
            {data.funeral_in_charge === answers.yes &&
                <Block>
                    <QuestionBlock question={translation.funeral_in_charge_details.first_name} answer={data.funeral_in_charge_details.first_name} />
                    <QuestionBlock question={translation.funeral_in_charge_details.last_name} answer={data.funeral_in_charge_details.last_name} />
                    <QuestionBlock question={translation.funeral_in_charge_details.person_id} answer={data.funeral_in_charge_details.person_id} />
                </Block>
            }

            <QuestionBlock question={translation.edi_card} answer={data.edi_card} />
            <QuestionBlock question={translation.organ_donation} answer={data.organ_donation} />
            <QuestionBlock question={translation.relatives_message} answer={data.relatives_message} />
            <Text>{data.relatives_message_content}</Text>
        </DocPage>
    )
}

export default Step6