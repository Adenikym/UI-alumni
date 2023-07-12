"use client";
import { useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import PersonalDetails from './personalDetails';
import Amount from './amount';
import Payment from './payment';


const steps = [
    'Personal details',
    'Amount',
    'Payment',
  ];
  

export default function MyModal() {


    const [currentStep, setCurrentStep] = useState(1);

    const handleNextStep= () =>{
        setCurrentStep(currentStep + 1);
    }
    const handlePreviousStep =() =>{
        setCurrentStep(currentStep - 1);
    }
    
    let formContent;

    if (currentStep === 1) {
        formContent = (
        <PersonalDetails/>
        );
    } else if (currentStep === 2) {
        formContent = (
        <Amount/>
        );
    } else if (currentStep === 3) {
        formContent = (
        <Payment/>
        
        );
    }
    return (
        <div className="modal-container">
            
        <div className="modal-content m-auto  ">
            <Stepper activeStep={currentStep} alternativeLabel>
                {steps.map((label, index) => (
                    <Step key={index}>
                    <StepButton
                        onClick={() => setCurrentStep(index+1)}
                        completed={index < currentStep}
                    >
                        {label}
                    </StepButton>
                    </Step>
                ))}
            </Stepper>

            <div className="p-5 pt-10 rounded-md flex-grow">
                {formContent}
            </div>
            

            <div className="modal-buttons pl-10 flex justify-between mt-auto">
            {currentStep > 1 && (
                <button onClick={handlePreviousStep} className="rounded-btn bg-btn text-btn-text w-32 p-2">
                Previous
                </button>
            )}

            {currentStep < 3 && (
                <button onClick={handleNextStep} className="rounded-btn bg-btn text-btn-text w-32 p-2">
                Next
                </button>
            )}
            {currentStep == 3 && (
                <button className="rounded-btn bg-btn text-btn-text w-40 p-2">
                Make Payment
                </button>
            )}
            </div>
        </div>
        </div>
  );
    
}
