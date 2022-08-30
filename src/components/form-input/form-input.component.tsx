import { FC, InputHTMLAttributes } from "react";
import { FormLabel, Group, Input } from "./form-input.styles";

export type FormInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      <FormLabel
        shrink={Boolean(
          otherProps.value &&
            typeof otherProps.value === "string" &&
            otherProps.value.length
            ? true
            : false
        )}
      >
        {label}
      </FormLabel>
    </Group>
  );
};

export default FormInput;
