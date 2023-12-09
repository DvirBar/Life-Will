import React, { createContext, useEffect, useState } from "react";
import { inheritanceKeys, inheritanceKeysStep4, inheritorsTypes } from "./translation";
import { data as initialData } from "./data";
import useSteps from "./useSteps";
import { collection, addDoc } from "firebase/firestore"
import { db } from "../firebase"

export const SiteContext = createContext(null);
export let globalData = {}


const SiteProvider = ({ children }) => {
    const [isAlone, setIsAlone] = useState(localStorage.getItem("isAlone") || false)
    const [saveLocal, setSaveLocal] = useState(localStorage.getItem("saveLocal") || false)
    const [startedFill, setStartedFill] = useState(localStorage.getItem("startedFill") || false)

    const startFill = () => {
        if (isAlone) {
            setStartedFill(true)
        }
    }

    useEffect(() => {
        localStorage.setItem("isAlone", isAlone)
        localStorage.setItem("saveLocal", saveLocal)
        localStorage.setItem("startedFill", startedFill)
    }, [isAlone, saveLocal, startedFill])

    const [data, setData] = useState(JSON.parse(localStorage.getItem("data")) || initialData)


    const {
        selectedStage,
        selectedStep,
        stages,
        moveNextStep,
        movePrevStep,
        selectStage,
        returnToEdit
    } = useSteps()

    const inheritors = {
        [inheritorsTypes.children]: [
            {
                type: inheritorsTypes.children,
                first_name: 'ילד',
                last_name: 'ישראלי',
                person_id: '222222222',
                percent: "30",
                uuid: "7C8EACC6-BD77-4C0A-9042-31C3F26483BB"
            }
        ],
        [inheritorsTypes.spouse]: [
            {
                type: inheritorsTypes.spouse,
                first_name: 'ישראלה',
                last_name: 'ישראלי',
                person_id: '111111111',
                percent: "60",
                uuid: "36CAD714-E0B8-481B-AF44-C52040DBAB25"
            }
        ],
    }

    const syncInheritors = (formikValues) => {
        const values = formikValues || data

        if (values.partner?.first_name?.length > 0) {
            inheritors[inheritorsTypes.spouse] = [{
                ...values.partner,
                type: inheritorsTypes.spouse,
            }]
        }

        inheritors[inheritorsTypes.children] = [
            ...(values.kids_data.map(kid => ({
                ...kid,
                type: inheritorsTypes.children
            })))
        ]


        inheritors[inheritorsTypes.inheritors] = [
            ...(values.ex_partners?.map(ex => ({
                ...ex,
                type: inheritorsTypes.inheritors
            }))),
        ]

        for (const key of Object.keys(values.give_to_family_type)) {
            const currentTypeItem = values.give_to_family_type[key]
            for (const item of currentTypeItem) {
                inheritors[inheritorsTypes.inheritors].push({
                    ...item,
                    type: inheritorsTypes.inheritors
                })
            }
        }

        return inheritors
    }

    // TODO: in inheritors - what about ex partners?
    const getInheritors = () => {
        return inheritors
    }

    const getInheritorById = (id) => {
        for (const key of Object.keys(inheritors)) {
            const inheritorsOfType = inheritors[key]


            for (const inheritor of inheritorsOfType) {
                if (inheritor.uuid === id) {
                    return inheritor
                }
            }
        }

        return {}
    }


    syncInheritors()

    const saveToLocalStorage = (formikValues) => {
        const values = formikValues || data
        localStorage.setItem("data", JSON.stringify(values))
    }

    const submitForm = (values, isFinalStep) => {
        syncInheritors(values)
        saveToLocalStorage(values)
        setData(values)
        moveNextStep(isFinalStep);
    }

    const goBack = (values) => {
        syncInheritors(values)
        saveToLocalStorage(values)
        setData(values)
        movePrevStep()
    }

    const finishForm = () => {
        syncInheritors()
        globalData = { ...data }
        // console.log(globalData);
        const updateInheritors = (key) => {
            const itemKey = `${key}_data`

            for (let i = 0; i < globalData[itemKey]?.length; i++) {
                const currItem = globalData[itemKey][i]

                for (let j = 0; j < currItem.inheritors?.length; j++) {
                    const inheritorItem = currItem.inheritors[j]

                    if (inheritorItem.first_name && key !== "money_division_inheritors") {
                        continue
                    }

                    globalData[itemKey][i].inheritors[j] = getInheritorById(inheritorItem.uuid)
                }

            }

        }

        for (const key in inheritanceKeys) {
            updateInheritors(key)
        }

        for (const key in inheritanceKeysStep4) {
            updateInheritors(key)
        }

        updateInheritors("money_division_inheritors")
    }

    const sendForm = async () => {
        const {
            first_name,
            last_name,
            phone,
            email
        } = globalData

        try {
            const docRef = await addDoc(collection(db, "users"), {
                first_name,
                last_name,
                phone,
                email,
                timeSent: new Date()
            })


        } catch (error) {
            console.log(error);
        }
    }

    const value = {
        isAlone,
        setIsAlone,
        saveLocal,
        setSaveLocal,
        startedFill,
        startFill,
        data,
        setData,
        selectedStage,
        selectedStep,
        selectStage,
        moveNextStep,
        goBack,
        getInheritors,
        getInheritorById,
        submitForm,
        stages,
        finishForm,
        returnToEdit,
        sendForm
    }

    return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
};

export default SiteProvider;