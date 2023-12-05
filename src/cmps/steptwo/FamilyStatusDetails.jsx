import { useField, useFormikContext } from 'formik'
import React from 'react'
import translation, { answers, statusTypes } from '../../store/translation'
import { Typography } from '@mui/material'
import YesNoRadio from '../formikcomponents/YesNoRadio'
import { PartnerDetails } from './PartnerDetails'
import ItemsList from '../utils/ItemsList/ItemsList'
import { defaults } from '../../store/context'
import ExPartnerItem from './ExPartnerItem'

function FamilyStatusDetails() {
    const { values } = useFormikContext()
    const hasPartner = values.status === statusTypes.married || values.status === statusTypes.partnership
    return (
        <div>
            {values.status === statusTypes.married &&
                <Typography variant="subtitle1">אני נשוי ל-</Typography>
            }

            {values.status === statusTypes.partnership &&
                <Typography variant="subtitle1">אני מנהל זוגיות עם-</Typography>
            }

            {hasPartner &&
                <PartnerDetails className="partner-details" />
            }

            {values.status && values.status !== statusTypes.divorced &&
                <YesNoRadio name="has_ex_partner" question={translation.has_ex_partner} />
            }

            {(values.has_ex_partner === answers.yes || values.status === statusTypes.divorced) &&
                <YesNoRadio name="ex_partner_gain" question={translation.ex_partner_gain} />
            }

            {values.ex_partner_gain === answers.yes &&
                <ItemsList
                    name="ex_partners"
                    title={translation.ex_partners.title}
                    itemTitle={translation.ex_partner}
                    defaultValue={defaults.personInfo}
                    renderItem={(_dataItem, itemName) => <ExPartnerItem nameWithIndex={itemName} />} />
            }
        </div>
    )
}

export default FamilyStatusDetails