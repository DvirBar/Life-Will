import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { rgba } from '../../../../Theme'
import useDebounce from '../../useDebounce'
import { CircularProgress, Typography } from '@mui/material'
import { FieldArray } from 'formik'
import { inheritorsTypes } from '../../../../store/translation'
import NonProfitItem from './NonProfitItem'
import { defaultItemInheritor } from '../../../../store/context'

const DELAY = 600
const NON_PROFIT_NAME_KEY = "שם עמותה בעברית"
const NON_PROFIT_STATUS = "סטטוס עמותה"
const NON_PROFIT_ID_KEY = "מספר עמותה"

function NonProfitsSearchList({ name, searchTerm, closeSearch }) {
    const [isSearching, setIsSearching] = useState()
    const [searchResults, setSearchResults] = useState([])
    const [error, setError] = useState("")

    const {
        debounceValue,
        isLoading
    } = useDebounce(searchTerm, DELAY)

    useEffect(() => {
        setIsSearching(true)
        // TODO: only registered and active non profits
        axios.get(`https://data.gov.il/api/3/action/datastore_search?resource_id=be5b7935-3922-45d4-9638-08871b17ec95&q=${debounceValue}`)
            .then(response => {
                const records = response.data?.result?.records?.filter(record =>
                    record[NON_PROFIT_STATUS] === "רשומה" || record[NON_PROFIT_STATUS] === "פעילה")

                setSearchResults(records.map(record => ({
                    ...record,
                    [NON_PROFIT_NAME_KEY]: record[NON_PROFIT_NAME_KEY]?.replace(/~/g, "״")
                })))
                setError("")
                setIsSearching(false)
            })
            .catch(error => {
                setError(error)
            })
    }, [debounceValue])

    const addNonProfit = (arrayHelpers, nonProfitName, nonProfitId) => {
        arrayHelpers.push({
            ...defaultItemInheritor,
            type: inheritorsTypes.nonprofit,
            first_name: nonProfitName,
            person_id: nonProfitId,
            percent: ""
        })

        closeSearch()
    }


    if (isLoading && isSearching) {
        return (
            <StyledCenterView>
                <CircularProgress color="secondary" />
            </StyledCenterView>
        )
    }

    if (error) {
        return (
            <StyledCenterView>
                <StyledError variant="subtitle1">התרחשה שגיאה</StyledError>
            </StyledCenterView>
        )
    }

    return (
        <StyledSearchList>
            {searchResults.map(result =>
                <FieldArray
                    name={name}
                    render={(arrayHelpers) => (
                        <StyledSearchListItem
                            key={result[NON_PROFIT_ID_KEY]}
                            onClick={() => addNonProfit(arrayHelpers, result[NON_PROFIT_NAME_KEY], result[NON_PROFIT_ID_KEY])}
                        >
                            <NonProfitItem
                                name={result[NON_PROFIT_NAME_KEY]}
                                id={result[NON_PROFIT_ID_KEY]}
                            />
                        </StyledSearchListItem>
                    )} />
            )}
        </StyledSearchList>
    )
}

const StyledSearchList = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding-right: 0.5rem;
    gap: 0.5rem;
`

const StyledSearchListItem = styled.div`
    &:hover {
        background-color: ${({ theme }) => rgba(theme.palette.primary.main, 0.15)};
    }

    padding: 0.5rem 1rem;
    border-radius: 10px;
    transition: background-color 100ms ease-in-out;
    cursor: pointer;

    transition: transform 50ms linear;

    &:active {
        transform: scale(0.98);
    }
`

const StyledCenterView = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

const StyledError = styled(Typography)`
    color: ${({ theme }) => theme.palette.error.light};
`

const StyledResultItem = styled.div`
    font-size: 0.85rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    height: 3rem;
`

const StyledNonProfitNameText = styled(Typography)`
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

export default NonProfitsSearchList