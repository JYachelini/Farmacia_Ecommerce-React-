import { useState } from "react";

export const StepsFunctions = () => {
  const [step, setStep] = useState(1);
  const [confirmation, setConfirmation] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
    setConfirmation(confirmation + 1);
  };

  const selectStep = (e) => {
    setStep(parseInt(e.target.childNodes[0].textContent));
    setConfirmation(parseInt(e.target.childNodes[0].textContent));
  };

  return [nextStep, step, selectStep, confirmation];
};
