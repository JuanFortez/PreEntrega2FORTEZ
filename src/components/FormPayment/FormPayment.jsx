import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "./FormPayment.css";

export const FormPayment = () => {
  const handleInputChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const isError = (field) => formData[field] === "" && Touched[field];
  const [Touched, setTouched] = useState({
    nombre: false,
    apellido: false,
    email: false,
    address: false,
    country: false,
    state: false,
    zip: false,
    ccName: false,
    ccNumber: false,
    ccExpiration: false,
    ccCvv: false,
  });

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    address: "",
    country: "",
    state: "",
    zip: "",
    ccName: "",
    ccNumber: "",
    ccExpiration: "",
    ccCvv: "",
  });

  const handleBlur = (field) => () => {
    setTouched({ ...Touched, [field]: true });
  };

  return (
    <Box className="form-box">
      <Flex className="flex-form">
        <FormControl
          className="form-input-nm-ln"
          isRequired
          isInvalid={isError("nombre")}
        >
          <FormLabel>Nombre</FormLabel>
          <input
            type="text"
            placeholder="Nombre"
            onChange={handleInputChange("nombre")}
            onBlur={handleBlur("nombre")}
          />
          {!isError ? (
            <FormHelperText></FormHelperText>
          ) : (
            <FormErrorMessage className="error-message">
              Ingresa tu nombre.
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl
          className="form-input-nm-ln"
          isRequired
          isInvalid={isError("apellido")}
        >
          <FormLabel>Apellido</FormLabel>
          <input
            type="text"
            placeholder="Apellido"
            onChange={handleInputChange("apellido")}
            onBlur={handleBlur("apellido")}
          />
          {!isError ? (
            <FormHelperText></FormHelperText>
          ) : (
            <FormErrorMessage className="error-message">
              Ingresa tu apellido.
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl
          className="form-inputs"
          isRequired
          isInvalid={isError("email")}
        >
          <FormLabel>Email</FormLabel>
          <input
            type="email"
            placeholder="Correo electronico"
            onChange={handleInputChange("email")}
            onBlur={handleBlur("email")}
          />
          {!isError ? (
            <FormHelperText></FormHelperText>
          ) : (
            <FormErrorMessage className="error-message">
              Ingresa tu email.
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl
          className="form-inputs"
          isRequired
          isInvalid={isError("address")}
        >
          <FormLabel>Dirección</FormLabel>
          <input
            type="address"
            placeholder="Dirección"
            onChange={handleInputChange("address")}
            onBlur={handleBlur("address")}
          />
          {!isError ? (
            <FormHelperText></FormHelperText>
          ) : (
            <FormErrorMessage className="error-message">
              Ingresa tu dirección.
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl className="form-inputs">
          <FormLabel>Dirección 2</FormLabel>
          <input
            type="address2"
            placeholder="Dirección 2"
            onChange={handleInputChange("address2")}
            onBlur={handleBlur("address2")}
          />
        </FormControl>

        <FormControl
          className="data-country"
          isRequired
          isInvalid={isError("country")}
        >
          <FormLabel htmlFor="country">Pais</FormLabel>
          <select
            className="form-select"
            id="country"
            onChange={handleInputChange("country")}
            onBlur={handleBlur("country")}
          >
            <option value="">Selecciona...</option>
            <option>Argentina</option>
          </select>
          {!isError ? (
            <FormHelperText></FormHelperText>
          ) : (
            <FormErrorMessage className="error-message">
              Ingresa tu pais.
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl
          className="data-state"
          isRequired
          isInvalid={isError("state")}
        >
          <FormLabel htmlFor="state">Provincia</FormLabel>
          <select
            className="form-select"
            id="state"
            onChange={handleInputChange("state")}
            onBlur={handleBlur("state")}
          >
            <option value="">Selecciona...</option>
            <option>Córdoba</option>
            <option>Buenos Aires</option>
            <option>Santa Fe</option>
            <option>La Pampa</option>
            <option>Mendoza</option>
          </select>
          {!isError ? (
            <FormHelperText></FormHelperText>
          ) : (
            <FormErrorMessage className="error-message">
              Ingresa tu provincia.
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl className="data-zip" isRequired isInvalid={isError("zip")}>
          <FormLabel>Código postal</FormLabel>
          <input
            type="zip"
            placeholder="Código postal"
            onChange={handleInputChange("zip")}
            onBlur={handleBlur("zip")}
          />
          {!isError ? (
            <FormHelperText></FormHelperText>
          ) : (
            <FormErrorMessage className="error-message">
              Ingresa tu código postal.
            </FormErrorMessage>
          )}
        </FormControl>

        <Flex flexDirection={"column"} justifyContent={"flex-start"}>
          <Box className="form-check">
            <input type="checkbox" />
            <label htmlFor="same-address">
              La dirección de envío es la misma que mi dirección de facturación
            </label>
          </Box>

          <Box className="form-check">
            <input type="checkbox" />
            <label htmlFor="save-info">
              Guardar esta información para la proxima vez
            </label>
          </Box>
        </Flex>

        <FormControl
          className="datos-tarjeta"
          isRequired
          isInvalid={isError("ccName")}
        >
          <FormLabel>Nombre en la tarjeta</FormLabel>
          <input
            type="text"
            onChange={handleInputChange("ccName")}
            onBlur={handleBlur("ccName")}
          />
          {!isError ? (
            <FormHelperText></FormHelperText>
          ) : (
            <FormErrorMessage className="error-message">
              Debes ingresar nombre en la tarjeta
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl
          className="datos-tarjeta"
          isRequired
          isInvalid={isError("ccNumber")}
        >
          <FormLabel>Número de tarjeta</FormLabel>
          <input
            type="text"
            onChange={handleInputChange("ccNumber")}
            onBlur={handleBlur("ccNumber")}
          />
          {!isError ? (
            <FormHelperText></FormHelperText>
          ) : (
            <FormErrorMessage className="error-message">
              Debes ingresar el número tarjeta
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl
          className="cc-expiration"
          isRequired
          isInvalid={isError("ccExpiration")}
        >
          <FormLabel>Fecha de expiración</FormLabel>
          <input
            type="text"
            onChange={handleInputChange("ccExpiration")}
            onBlur={handleBlur("ccExpiration")}
          />
          {!isError ? (
            <FormHelperText></FormHelperText>
          ) : (
            <FormErrorMessage className="error-message">
              Se requiere la fecha de expiración
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl
          className="cc-cvv"
          isRequired
          isInvalid={isError("ccCvv")}
        >
          <FormLabel>Código de seguridad</FormLabel>
          <input
            type="text"
            onChange={handleInputChange("ccCvv")}
            onBlur={handleBlur("ccCvv")}
          />
          {!isError ? (
            <FormHelperText></FormHelperText>
          ) : (
            <FormErrorMessage className="error-message">
              Se requiere el código de seguridad
            </FormErrorMessage>
          )}
        </FormControl>
      </Flex>
    </Box>
  );
};
