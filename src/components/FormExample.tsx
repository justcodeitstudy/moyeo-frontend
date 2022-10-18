import React from "react";
import * as Yup from "yup";
import FormComponent from "./FormComponent";
import { Field, FormikValues, FieldProps } from "formik";
import { Button, Checkbox, TextInput } from "jci-moyeo-design-system";

const initialValues = {
  firstName: "",
  lastName: "",
  checked: false,
};

type InitialValues = {
  firstName: string;
  lastName: string;
  checkbox: boolean;
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
});

const FormExample = () => {
  const handleSubmit = (values: FormikValues) => {
    console.log(values);
  };

  return (
    <FormComponent
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Field
        component={({ form }: FieldProps<InitialValues>) => (
          <TextInput
            id="firstName"
            name="firstName"
            placeholder="firstName"
            value={form.values.firstName}
            onChange={form.handleChange}
          />
        )}
      />
      <Field
        component={({ form }: FieldProps<InitialValues>) => (
          <TextInput
            id="lastName"
            name="lastName"
            placeholder="lastName"
            value={form.values.lastName}
            onChange={form.handleChange}
            status="danger"
          />
        )}
      />
      <Field
        component={({ form }: FieldProps<InitialValues>) => (
          <Checkbox
            id="checkbox"
            name="checkbox"
            checked={form.values.checkbox}
            onChange={form.handleChange}
          />
        )}
      />
      <Button type="submit">Submit</Button>
    </FormComponent>
  );
};

export default FormExample;
