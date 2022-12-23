import React from "react";
import "./App.css";
import { Formik, Form } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import * as Yup from "yup";

const PersonValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "This firs tname is too short!")
    .required("First name field is required"),
  lastName: Yup.string()
    .min(2, "This last name is too short!")
    .required("Last name field is required"),
  age: Yup.number()
    .min(16, "To get a driver licence you need to be older than 16")
    .required("Age is required"),
});

class CreateFriend extends React.Component {
  render() {
    return (
      <Formik
        initialValues={{ firstName: "", lastName: "", age: 0 }}
        validationSchema={PersonValidationSchema}
        onSubmit={(values) => {
          this.props.onFriendCreated(values);
        }}
      >
        {(formik) => {
          return (
            <Form>
              <Box padding="20px">
                <div>
                  <TextField
                    label="First Name"
                    id="firstName"
                    error={Boolean(formik.errors.firstName)}
                    name="firstName"
                    onChange={formik.handleChange}
                    defaultValue={formik.values.firstName}
                    helperText={formik.errors.firstName}
                    variant="outlined"
                  />
                </div>

                <div>
                  <TextField
                    label="Last Name"
                    id="lastName"
                    name="lastName"
                    onChange={formik.handleChange}
                    defaultValue={formik.values.lastName}
                    error={Boolean(formik.errors.lastName)}
                    helperText={formik.errors.lastName}
                    variant="outlined"
                  />
                </div>

                <div>
                  <TextField
                    label="Age"
                    id="age"
                    name="age"
                    onChange={formik.handleChange}
                    defaultValue={formik.values.age}
                    error={Boolean(formik.errors.age)}
                    helperText={formik.errors.age}
                    variant="outlined"
                  />
                </div>

                <Button type="submit">Submit form</Button>
              </Box>
            </Form>
          );
        }}
      </Formik>
    );
  }
}

export default CreateFriend;
