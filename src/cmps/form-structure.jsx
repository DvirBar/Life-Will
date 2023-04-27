import React, { useState } from 'react'


export function FormStructure({ onSetStage, whatStage }) {
    const [isStage1Next, setStage1Next] = useState(false)
    const [isAgeValidate, setIsAgeValidate] = useState(true)

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isStage1Next) onSetStage(2)
        // Send form data to server
    };

    const onNextStage1 = (isBoolStage1) => {
        const maleBtn = document.getElementById("male").checked
        const femaleBtn = document.getElementById("female").checked
        const otherBtn = document.getElementById("other").checked
        const verifyPersonYes = document.getElementById("verify-person-yes").checked
        const birthDateChosen = document.getElementById("birthDate").value.toString()
        const their_date = new Date(birthDateChosen);
        const today = new Date();
        const date2 = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
        const diff = new Date(date2.getTime() - their_date.getTime());
        const isAgeOver18 = diff.getUTCFullYear() - 1970 < 18 ? false : true
        if (!isAgeOver18) setIsAgeValidate(false)
        else setIsAgeValidate(true)
        if ((maleBtn || femaleBtn || otherBtn) && (isAgeOver18 && birthDateChosen) && verifyPersonYes) {
            document.getElementById("myForm").reset()
            setStage1Next(isBoolStage1)
        }
    }

    return (
        <>
            <form className='form' id='myForm' onSubmit={handleSubmit}>
                {whatStage === 1 && !isStage1Next ?
                    <>
                        <div className='input-container-first'>
                            <div>
                                <input placeholder='תאריך לידה' type="date" id="birthDate" name="birthDate" required />
                                {!isAgeValidate && <div className='date-error'>You are under 18!</div>}
                            </div>
                            <div className='gender-container'>
                                <p>בחר את המין שלך:</p>
                                <div className='gender'>
                                    <input type="radio" id="male" name="gender" required />
                                    <label htmlFor="male">זכר</label>
                                </div>
                                <div className='gender'>
                                    <input type="radio" id="female" name="gender" required />
                                    <label htmlFor="female">נקבה</label>
                                </div>
                                <div className='gender'>
                                    <input type="radio" id="other" name="gender" required />
                                    <label htmlFor="other">אחר</label>
                                </div>
                            </div>
                            <div className='verify-person'>
                                <span>האם אתה עורך לבד את צוואתך?</span>
                                <div className='verify-person-container'>
                                    <div className='verify-person-yes'>
                                        <label htmlFor="verify-person-yes">כן</label>
                                        <input type="radio" id="verify-person-yes" name="verify-person" required />
                                    </div>
                                    <div className='verify-person-no'>
                                        <label htmlFor="verify-person-no">לא</label>
                                        <input type="radio" id="verify-person-no" name="verify-person" required />
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => onNextStage1(true)}>להמשך הזדהות</button>
                        </div>

                    </>
                    :
                    <>
                        <div className='input-container'>
                            <div className='input-container-left'>
                                <div>
                                    <input placeholder='שם פרטי' type="text" id="firstName" name="firstName" required />
                                </div>
                                <div>
                                    <input placeholder='שם חברה / עסק' type="text" id="company" name="company" required />
                                </div>
                                <div>
                                    <input placeholder='פלאפון' type="tel" id="phone" name="phone" required />
                                </div>
                                <div>
                                    <input placeholder='עיר / יישוב' type="search" id="city" name="city" required />
                                </div>
                                <div>
                                    <input placeholder='תז/דרכון' type="number" id="passport" name="passport" required />
                                </div>
                            </div>
                            <div className='input-container-right'>
                                <div>
                                    <input placeholder='שם משפחה' type="text" id="surName" name="surName" required />
                                </div>
                                <div>
                                    <input placeholder='ח.פ' type="text" id="companyID" name="companyID" required />
                                </div>
                                <div>
                                    <input placeholder='מייל' type="email" id="email" name="email" required />
                                </div>
                                <div>
                                    <input placeholder='רחוב ומספר בית' type="text" id="address" name="address" required />
                                </div>
                            </div>
                        </div>
                        <button type="submit">המשך</button>
                    </>
                }
            </form>
        </>

    )
}