import { useField, useFormikContext } from 'formik'
import React, { useContext } from 'react'
import { answers, statusTypes } from '../../store/translation'
import { Typography } from '@mui/material'
import YesNoRadio from '../formikcomponents/YesNoRadio'
import { PartnerDetails } from './PartnerDetails'
import ItemsList from '../utils/ItemsList/ItemsList'
import { defaults } from '../../store/data'
import ExPartnerItem from './ExPartnerItem'
import { SiteContext } from '../../store/context'

function FamilyStatusDetails() {
    const { values } = useFormikContext()
    const {
        translation
    } = useContext(SiteContext)

    const hasPartner = values.status === statusTypes.married || values.status === statusTypes.partnership
   
    return (
        <div>
            {values.status === statusTypes.married &&
                <Typography variant="subtitle1">
                    {translation.partner.married_gender}
                </Typography>
            }

            {values.status === statusTypes.partnership &&
                <Typography variant="subtitle1">
                    {translation.partner.spouse_gender}
                </Typography>
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