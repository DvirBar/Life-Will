import React, { useContext, useState } from 'react'
import MultiStepForm from '../cmps/multi-step-form'
import { SiteContext } from '../store/context'


export function HomePage() {
    const {
        selectedStage,
        selectStage
    } = useContext(SiteContext)

    return (
        <div className="app-home main-view main-layout">
            <div className='form-container'>
                <div className='header'>
                    <div className='stage'>
                        <div onClick={() => selectStage(0)} className={`number ${selectedStage === 0 && 'inProgressStage'} ${selectedStage > 0 && 'finishedStage'}`} style={{ backgroundColor: `${selectedStage === 0 ? `#662A68` : ''}` }}>1</div>
                        <span>הזדהות</span>
                    </div>
                    <div className='stage'>
                        <div onClick={() => selectStage(1)} className={`number ${selectedStage === 1 && 'inProgressStage'} ${selectedStage > 1 && 'finishedStage'}`} style={{ backgroundColor: `${selectedStage === 1 ? `#662A68` : ''}` }}>2</div>
                        <span>מצב משפחתי ויורשים</span>
                    </div>
                    <div className='stage'>
                        <div onClick={() => selectStage(2)} className={`number ${selectedStage === 2 && 'inProgressStage'} ${selectedStage > 2 && 'finishedStage'}`} style={{ backgroundColor: `${selectedStage === 2 ? `#662A68` : ''}` }}>3</div>
                        <span>מקרקעין</span>
                    </div>
                    <div className='stage'>
                        <div onClick={() => selectStage(3)} className={`number ${selectedStage === 3 && 'inProgressStage'} ${selectedStage > 3 && 'finishedStage'}`} style={{ backgroundColor: `${selectedStage === 3 ? `#662A68` : ''}` }}>4</div>
                        <span>מטלטלין</span>
                    </div>
                    <div className='stage'>
                        <div onClick={() => selectStage(4)} className={`number ${selectedStage === 4 && 'inProgressStage'} ${selectedStage > 4 && 'finishedStage'}`} style={{ backgroundColor: `${selectedStage === 4 ? `#662A68` : ''}` }}>5</div>
                        <span>כספים</span>
                    </div>
                    <div className='stage'>
                        <div onClick={() => selectStage(5)} className={`number ${selectedStage === 5 && 'inProgressStage'} ${selectedStage > 5 && 'finishedStage'}`} style={{ backgroundColor: `${selectedStage === 5 ? `#662A68` : ''}` }}>6</div>
                        <span>רצונות</span>
                    </div>
                </div>
                {/* <div class="myBox">
                    <div class="boxItem">1</div>
                    <div class="boxItem">2</div>
                    <div class="boxItem">3</div>
                </div> */}
                {/* {whatStage === 1 && <FormStructure whatStage={whatStage} onSetStage={onSetStage} />} */}
                <MultiStepForm />
            </div>
        </div>
    )
}