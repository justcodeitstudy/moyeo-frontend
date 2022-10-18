import React from "react";
import {
  Form,
  Formik,
  FormikConfig,
  FormikValues,
  FormikSharedConfig,
} from "formik";

interface Props extends FormikConfig<FormikValues>, FormikSharedConfig {
  children: React.ReactNode;
  initialValues: FormikValues;
  onSubmit: (values: FormikValues) => void;
  validationSchema?: FormikValues;
}

const FormComponent = ({
  children,
  initialValues,
  validationSchema,
  onSubmit,
  ...rest
}: Props) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      {...rest}
    >
      <Form>{children}</Form>
    </Formik>
  );
};

export default FormComponent;
