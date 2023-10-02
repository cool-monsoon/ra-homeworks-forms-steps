import React, { useState } from "react";
import StepForm from "./StepForm";
import StepTable from "./StepTable";

export default function StepCounter() {
  const [steps, setSteps] = useState([]);

  const onAdd = (step) => {
    const newSteps = [...steps];
    const sameDate = newSteps.find((n) => n.date === step.date);

    if (sameDate) {
      sameDate.distance += step.distance;
    } else {
      newSteps.push(step);
      newSteps.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
    }

    setSteps(newSteps);
  };

  const onDelete = (id) => {
    setSteps((prevSteps) => prevSteps.filter((n) => n.id !== id));
  };

  return (
    <div className="step-counter">
      <StepForm onAdd={onAdd} />
      <StepTable steps={steps} onDelete={onDelete} />
    </div>
  );
}