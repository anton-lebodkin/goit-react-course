import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const PersonValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "This firs tname is too short!")
    .required("First name field is required"),
  lastName: Yup.string()
    .min(2, "This last name is too short!")
    .required("Last name field is required"),
  gender: Yup.string()
    .min(2, "This gender is too short!")
    .required("Gender field is required"),
  age: Yup.number()
    .min(16, "To get a driver licence you need to be older than 16")
    .required("Age is required"),
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

class CreateFriend extends React.Component {
  render() {
    return (
      <Formik
        initialValues={{ firstName: "", lastName: "", gender: "", age: 0 }}
        validationSchema={PersonValidationSchema}
        onSubmit={(values) => {
          this.props.onFriendCreated(values);
        }}
      >
        {(formik) => {
          return (
            <Modal
              open={this.props.isCreateFriendModalOpen}
              onClose={this.props.handleCloseModal}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Form>
                  <Box
                    padding="20px"
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "25ch" },
                    }}
                  >
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
                        label="Gender"
                        id="gender"
                        name="gender"
                        onChange={formik.handleChange}
                        defaultValue={formik.values.gender}
                        error={Boolean(formik.errors.gender)}
                        helperText={formik.errors.gender}
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
              </Box>
            </Modal>
          );
        }}
      </Formik>
    );
  }
}

export default CreateFriend;
