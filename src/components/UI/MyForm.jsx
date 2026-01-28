import { Formik, Form } from "formik";

export default function MyForm({
  children,
  mygap,
  initialValues,
  validationSchema,
  onSubmit,
}) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formikProps) => (
        <Form className={`fieldset ${mygap ? mygap : "gap-6"} w-full`}>
          {typeof children === "function" ? children(formikProps) : children}
        </Form>
      )}
    </Formik>
  );
}
