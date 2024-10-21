import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    address: "",
    city: "",
    card: "",
  });

  const navigate = useNavigate();

  const nextStep = (step) => navigate(step);
  const prevStep = (step) => navigate(step);

  return (
    <div>
      <h1>Personal Details Form</h1>
      <Outlet context={{ formData, setFormData, nextStep, prevStep }} />
    </div>
  );
};

export default MultiStepForm;
