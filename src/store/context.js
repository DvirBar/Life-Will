import React, { createContext, useEffect, useState } from "react";
import { inheritanceKeys, inheritanceKeysStep4, inheritorsTypes } from "./translation";
import { data as initialData } from "./data";
import useSteps from "./useSteps";
import { collection, addDoc } from "firebase/firestore"
import { db } from "../firebase"
import axios from "axios";

export const SiteContext = createContext(null);
export let globalData = {}


const SiteProvider = ({ children }) => {
    const [isAlone, setIsAlone] = useState(localStorage.getItem("isAlone") || false)
    const [saveLocal, setSaveLocal] = useState(localStorage.getItem("saveLocal") || false)
    const [startedFill, setStartedFill] = useState(localStorage.getItem("startedFill") || false)
    const [chosenItemTypes, setChosenItemTypes] = useState(JSON.parse(localStorage.getItem("chosenItems")) || {})

    const startFill = () => {
        if (isAlone) {
            setStartedFill(true)
        }
    }

    useEffect(() => {
        localStorage.setItem("isAlone", isAlone)
        localStorage.setItem("saveLocal", saveLocal)
        localStorage.setItem("startedFill", startedFill)
        localStorage.setItem("chosenItems", JSON.stringify(chosenItemTypes))
    }, [isAlone, saveLocal, startedFill, chosenItemTypes])

    const [data, setData] = useState(JSON.parse(localStorage.getItem("data")) || initialData)

    const {
        selectedStage,
        selectedStep,
        stages,
        moveNextStep,
        movePrevStep,
        selectStage,
        returnToEdit
    } = useSteps(chosenItemTypes)

    const inheritors = {}

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

    const submitForm = (values) => {
        syncInheritors(values)
        saveToLocalStorage(values)
        setData(values)
        moveNextStep();
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

    const sendForm = async (fileBlob) => {
        const savedData = (({
            first_name,
            last_name,
            phone,
            email
        }) => ({
            first_name,
            last_name,
            phone,
            email
        }))(globalData)

        try {
            const docRef = await addDoc(collection(db, "users"), {
                ...savedData,
                timeSent: new Date()
            })
        } catch (error) {
            console.log(error);
        }

        const formData = new FormData()
        formData.append("meta", JSON.stringify(savedData))
        formData.append("file", new File([fileBlob], "lifewill"))

        await axios.post("http://localhost:5001/life-will/us-central1/sendPdf",
            formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
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
        sendForm,
        chosenItemTypes,
        setChosenItemTypes
    }

    return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
};

export default SiteProvider;