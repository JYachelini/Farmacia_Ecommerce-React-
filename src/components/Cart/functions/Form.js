import { useState } from "react";

export const Form = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    // Se guardan los datos del formulario
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleBlur = (e) => {
    // Cuando los input estan desenfocados se detecta el error
    handleChange(e);
    setErrors(validateForm(form));
  };

  return {
    form,
    errors,
    handleChange,
    handleBlur,
  };
};
