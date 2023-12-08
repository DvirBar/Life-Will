import React from 'react'

import translation, { answers } from '../../../store/translation'
import QuestionBlock from '../QuestionBlock'
import DocPage from '../DocPage'
import Title from '../Title'
import Block from '../Block'
import Subtitle from '../Subtitle'
import { globalData as data } from '../../../store/context'

function Page1() {
    return (
        <DocPage>
            <Title>{translation.step1}</Title>
            <QuestionBlock question={translation.gender} answer={data.gender} />
            <QuestionBlock question={translation.birthDate} answer={data.birthDate} />
            {/* <QuestionBlock question={translation.hebrewBirthDate} answer={data.hebrewBirthDate} /> */}
            <QuestionBlock question={translation.first_name} answer={data.first_name} />
            <QuestionBlock question={translation.last_name} answer={data.last_name} />
            <QuestionBlock question={translation.person_id} answer={data.person_id} />
            <QuestionBlock question={translation.citizenship} answer={data.citizenship} />
            {data.citizenship === answers.yes &&
                <QuestionBlock question={translation.passport_id} answer={data.passport_id} />
            }
            <QuestionBlock question={translation.email} answer={data.email} />
            <QuestionBlock question={translation.phone} answer={data.phone} />
            <Subtitle>{translation.address.text}</Subtitle>
            <Block>
                <QuestionBlock question={translation.address.street} answer={data.address.street} />
                <QuestionBlock question={translation.address.houseNum} answer={data.address.houseNum} />
                <QuestionBlock question={translation.address.city} answer={data.address.city} />
            </Block>
        </DocPage>
    )
}

export default Page1