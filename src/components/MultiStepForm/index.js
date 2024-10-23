import { useState } from "react";

function MultiStepForm() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div>
      <h1>Step {step} of 3</h1>
      {step === 1 && <p>Enter personal information</p>}
      {step === 2 && <p>Enter address details</p>}
      {step === 3 && <p>Review and submit</p>}
      <button disabled={step === 1} onClick={prevStep}>
        Back
      </button>
      <button disabled={step === 3} onClick={nextStep}>
        Next
      </button>
    </div>
  );
}

export default MultiStepForm;
