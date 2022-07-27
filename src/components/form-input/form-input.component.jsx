import React from "react";
import { FormLabel, Group, Input } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      <FormLabel shrink={otherProps.value.length ? true : false}>
        {label}
      </FormLabel>
    </Group>
  );
};

export default FormInput;
