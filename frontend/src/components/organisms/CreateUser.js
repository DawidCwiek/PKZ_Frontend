import React from 'react';
import { Formik, Form, Field } from 'formik';
import Button from 'components/atoms/Button';
import inputCss from 'components/atoms/inputCss';
import styled from 'styled-components';

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledInput = styled(Field)`
  ${inputCss}
  margin: 0 0 20px 0;
  height: 40px;
  width: 300px;
`;

const CreateUser = () => (
  <Formik
    initialValues={{ email: '', name: '', surname: '', phone: '' }}
    onSubmit={({ email, name, surname, phone }) => {
      console.log(email, name, surname, phone);
    }}
  >
    {({ isSubmitting }) => (
      <StyledForm>
        <StyledInput type="email" name="email" placeholder="Email" />
        <StyledInput type="text" name="name" placeholder="Name" />
        <StyledInput type="text" name="surname" placeholder="Surname" />
        <StyledInput type="number" name="phone" placeholder="Phone Number" />

        <Button type="submit" disabled={isSubmitting}>
          Submit
        </Button>
      </StyledForm>
    )}
  </Formik>
);

export default CreateUser;
