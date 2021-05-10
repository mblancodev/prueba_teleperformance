import { useState } from "react";
import { Card } from "./base/Card";
import { Button } from "./base/Button";
import { FormItem } from "./base/FormItem";
import PropTypes from "prop-types";
import { InputNumber } from "./base/InputNumber";

export const Login = ({ loginRequest }) => {
  const [errors, setErrors] = useState([]);
  const [nit, setNit] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nit) {
      setErrors(["Company NIT field is required"]);
      console.log(errors);
    }
  };

  const handleInputChange = (value) => {
    if (errors.length) setErrors([]);
    setNit(value);
  };

  const renderWithErrors = () =>
    errors.length ? <p className="text-red-400 mt-1 text-xs"> {errors[0]} </p> : null;

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
      data-testid="login-container"
    >
      <Card title="Ingrese el NIT de la persona natural o juridica para la que realizara el tramite, sin incluir el digito de verificacion. Luego seleccione <strong>Continuar</strong> para completar su solicitud">
        <form className="mt-8" onSubmit={handleSubmit}>
          <FormItem label="Company NIT">
            <InputNumber
              inputName="nit"
              inputValue={nit}
              inputId="company-nit"
              inputPlaceholder="Company NIT"
              handleOnChange={handleInputChange}
            />
          </FormItem>
          {renderWithErrors()}
          <footer className="mt-5">
            <Button
              type="primary"
              title="Continue"
              btnType="submit"
              handleClick={handleSubmit}
            />
          </footer>
        </form>
      </Card>
    </div>
  );
};

Login.propTypes = {
  loginRequest: PropTypes.func.isRequired,
};