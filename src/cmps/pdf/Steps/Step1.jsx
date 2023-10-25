import React from 'react'
import { Page, Text, View } from '@react-pdf/renderer'

import translation, { answers } from '../../../store/translation'
import data from '../../../store/sampleData'
import QuestionBlock from '../QuestionBlock'
import DocPage from '../DocPage'
import Title from '../Title'

function Page1() {
    return (
        <DocPage>
            <Title>{translation.step1}</Title>
            <QuestionBlock question={translation.gender} answer={data.gender} />
            <QuestionBlock question={translation.birthDate} answer={data.birthDate} />
            {/* <QuestionBlock question={translation.hebrewBirthDate} answer={data.hebrewBirthDate} /> */}
            <QuestionBlock question={translation.edited_by} answer={data.edited_by} />
            <QuestionBlock question={translation.first_name} answer={data.first_name} />
            <QuestionBlock question={translation.last_name} answer={data.last_name} />
            <QuestionBlock question={translation.person_id} answer={data.person_id} />
            <QuestionBlock question={translation.citizenship} answer={data.citizenship} />
            {data.citizenship === answers.yes &&
                <QuestionBlock question={translation.passport_id} answer={data.passport_id} />
            }
            <QuestionBlock question={translation.email} answer={data.email} />
            <QuestionBlock question={translation.phone} answer={data.phone} />
            <QuestionBlock question={translation.address} answer={data.address} />
        </DocPage>
    )
}

export default Page1