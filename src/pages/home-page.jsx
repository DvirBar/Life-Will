import React, { useState } from 'react'
import MultiStepForm from '../cmps/multi-step-form'


export function HomePage() {
    const [whatStage, setWhatStage] = useState(1)
    const [selectedStage, setSelectedStage] = useState(0)

    const onSetStage = (stage) => {
        setWhatStage(stage)
    }

    const onSelectStage = (currStage, stageLocation) => {
        setSelectedStage(stageLocation)
        setWhatStage(currStage)
    }

    return (
        <div className="app-home main-view main-layout">
            <div className='form-container'>
                <div className='header'>
                    <div className='stage'>
                        <div onClick={() => onSelectStage(1, 0)} className={`number ${whatStage === 1 && 'inProgressStage'} ${whatStage > 1 && 'finishedStage'}`} style={{ backgroundColor: `${whatStage === 1 ? `#662A68` : ''}` }}>1</div>
                        <span>הזדהות</span>
                    </div>
                    <div className='stage'>
                        <div onClick={() => onSelectStage(2, 2)} className={`number ${whatStage === 2 && 'inProgressStage'} ${whatStage > 2 && 'finishedStage'}`} style={{ backgroundColor: `${whatStage === 2 ? `#662A68` : ''}` }}>2</div>
                        <span>מצב משפחתי ויורשים</span>
                    </div>
                    <div className='stage'>
                        <div onClick={() => onSelectStage(3, 5)} className={`number ${whatStage === 3 && 'inProgressStage'} ${whatStage > 3 && 'finishedStage'}`} style={{ backgroundColor: `${whatStage === 3 ? `#662A68` : ''}` }}>3</div>
                        <span>מקרקעין</span>
                    </div>
                    <div className='stage'>
                        <div onClick={() => onSelectStage(4, 3)} className={`number ${whatStage === 4 && 'inProgressStage'} ${whatStage > 4 && 'finishedStage'}`} style={{ backgroundColor: `${whatStage === 4 ? `#662A68` : ''}` }}>4</div>
                        <span>מטלטלין</span>
                    </div>
                    <div className='stage'>
                        <div onClick={() => onSelectStage(5, 4)} className={`number ${whatStage === 5 && 'inProgressStage'} ${whatStage > 5 && 'finishedStage'}`} style={{ backgroundColor: `${whatStage === 5 ? `#662A68` : ''}` }}>5</div>
                        <span>כספים</span>
                    </div>
                    <div className='stage'>
                        <div onClick={() => onSelectStage(6, 5)} className={`number ${whatStage === 6 && 'inProgressStage'} ${whatStage > 6 && 'finishedStage'}`} style={{ backgroundColor: `${whatStage === 6 ? `#662A68` : ''}` }}>6</div>
                        <span>רצונות</span>
                    </div>
                </div>
                {/* <div class="myBox">
                    <div class="boxItem">1</div>
                    <div class="boxItem">2</div>
                    <div class="boxItem">3</div>
                </div> */}
                {/* {whatStage === 1 && <FormStructure whatStage={whatStage} onSetStage={onSetStage} />} */}
                <MultiStepForm onSetStage={onSetStage} selectedStage={selectedStage} whatStage={whatStage} />
            </div>
        </div>
    )
}