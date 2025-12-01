import React from "react";

const types = {
  email: {
    regex: /^(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/,
    message: "Preencha um email válido",
  },
  password: {
    regex: /^(?=.*[A-Z]).{8,}$/,
    message: "A senha deve ter no mínimo 8 caracteres e pelo menos 1 letra maiúscula.",
  },
  number: {
    regex: /^\d+$/,
    message: "Utilize apenas números.",
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError("Preencha um valor.");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  return { value, setValue, onChange, validate: () => validate(value), onBlur: () => validate(value), error };
};

export default useForm;
