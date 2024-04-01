import { Field, Form, Formik } from "formik";

function App() {
  return (
    <div>
      <Formik
        initialValues={{
          step: 1,
          lastStep: 3,

          //step1
          name: "",
          surname: "",

          //step2
          age: "",
          job: "",

          //step3
          about: "",
        }}
        onSubmit={(values, actions) => {
          console.log("values", values);
        }}
      >
        {({ values, setFieldValue }) => {
          const prevHandle = () => {
            setFieldValue("step", values.step - 1);
          };

          const nextHandle = () => {
            setFieldValue("step", values.step + 1);
          };

          return (
            <Form className="w-[500px] py-4 mx-auto">
              <header className="mb-4">
                <h3 className="text-lg font-medium text-zinc-700">
                  Adım {values.step}
                </h3>
              </header>
              {values.step === 1 && (
                <div className="grid gap-2.5">
                  <Field name="name" className="input" placeholder="Name" />
                  <Field
                    name="surname"
                    className="input"
                    placeholder="Surname"
                  />
                </div>
              )}

              {values.step === 2 && (
                <div className="grid gap-2.5">
                  <Field name="age" className="input" placeholder="Age" />
                  <Field name="job" className="input" placeholder="Job" />
                </div>
              )}

              {values.step === 3 && (
                <div className="grid gap-2.5">
                  <Field
                    name="about"
                    component="textarea"
                    className="textarea"
                    placeholder="About"
                  />
                </div>
              )}

              <div className="grid grid-cols-2 gap-x-4 mt-4">
                {(values.step > 1 && (
                  <button onClick={prevHandle} type="button" className="button">
                    Prev
                  </button>
                )) || <div />}
                {(values.step === values.lastStep && (
                  <button className="button" type="submit">
                    Submit
                  </button>
                )) || (
                  <button onClick={nextHandle} type="button" className="button">
                    Next
                  </button>
                )}
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default App;
