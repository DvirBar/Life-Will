import translation from '../../store/translation';
import FormikTextField from '../formikcomponents/FormikTextField';
import styled from '@emotion/styled';
import FormikButtonSelect from '../formikcomponents/FormikButtonSelect';
import ButtonSelectItem from '../formikcomponents/buttonSelect/ButtonSelectItem';

const partnerGenders = {
    man: "גבר",
    woman: "אישה"
}

export const PartnerDetails = () => {
    const partnerKeyName = "partner"
    return (
        <>
            <FormikButtonSelect
                name={`${partnerKeyName}.gender`}
            >
                {Object.keys(partnerGenders).map(key =>
                    <ButtonSelectItem
                        key={key}
                        value={partnerGenders[key]}
                    >
                        {partnerGenders[key]}
                    </ButtonSelectItem>
                )}
            </FormikButtonSelect>
            <StyledPartnerContainer>
                <FormikTextField
                    name={`${partnerKeyName}.first_name`}
                    label={translation.partner.first_name}
                />
                <FormikTextField
                    name={`${partnerKeyName}.last_name`}
                    label={translation.partner.last_name}
                />
                <FormikTextField
                    numeric
                    maxLength={9}
                    name={`${partnerKeyName}.person_id`}
                    label={translation.partner.person_id}
                />
            </StyledPartnerContainer>

        </>
    );
}

const StyledPartnerContainer = styled.div`
	padding:1rem 0;
	display:flex;
	flex-direction:row;
	justify-content:left;
	gap:1rem;
    flex-wrap: wrap;
	&>*{
		max-width:150px;
	}
`
