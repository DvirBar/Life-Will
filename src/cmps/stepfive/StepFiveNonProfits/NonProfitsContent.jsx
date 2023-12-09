import React, { useState } from 'react'
import ModalBox from '../../layout/ModalBox'
import styled from '@emotion/styled'
import SearchNonProfitsButton from '../../utils/itemInheritors/nonProfits/SearchNonProfitsButton'
import { useField, useFormikContext } from 'formik'
import { defaults } from '../../../store/data'
import FindNonProfits from '../../utils/itemInheritors/nonProfits/FindNonProfits'
import translation, { answers } from '../../../store/translation'
import ItemsList from '../../utils/ItemsList/ItemsList'
import NonProfitsListItem from './NonProfitsListItem'

function NonProfitsContent() {
    const [field] = useField("non_profit_provision")
    const nonProfitProvisionValue = field?.value

    const [openModal, setOpenModal] = useState(false)
    const { errors } = useFormikContext()

    console.log(errors);
    if (nonProfitProvisionValue !== answers.yes) {
        return <></>
    }

    const addNonProfit = (arrayHelpers, nonProfitName, _nonProfitId) => {
        arrayHelpers.push({
            ...defaults.nonProfitProvision,
            non_profit_name: nonProfitName,
        })
    }

    const name = "non_profit_provision_data"

    return (
        <StyledNonProfitsContent>
            <SearchNonProfitsButton openSearch={() => setOpenModal(true)} />
            <StyledModal
                open={openModal}
                handleClose={() => setOpenModal(false)}
                title="בחירת עמותות"
            >
                <FindNonProfits
                    name={name}
                    isOpen={true}
                    addNonProfit={addNonProfit}
                    handleClose={() => setOpenModal(false)}
                />
            </StyledModal>
            <ItemsList
                name={name}
                title={translation.non_profit_provision_title}
                defaultValue={defaults.nonProfitProvision}
                hideAddButton
                renderItem={(dataItem, itemName) => <NonProfitsListItem nonProfitItem={dataItem} nameWithIndex={itemName} />} />
        </StyledNonProfitsContent>

    )
}

const StyledNonProfitsContent = styled.div`
`

const StyledModal = styled(ModalBox)`
    display: flex;
    flex-direction: column;
    border-right: 1px solid #aaa;
    align-items: center;
    justify-content: center;
    height: 100%;
`

export default NonProfitsContent