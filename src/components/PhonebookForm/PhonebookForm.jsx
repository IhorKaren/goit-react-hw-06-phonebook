import React from 'react';
import PropTypes from 'prop-types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import {
  StyledLabel,
  StyledField,
  Error,
  StyledButton,
  StyledForm,
} from './PhonebookFrom.styled';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required!'),
  number: Yup.string()
    .required('Number is required!')
    .min(7, 'Number must be at least 7 digits')
    .max(16, 'Number must not exceed 16 digits'),
});

const PhonebookForm = ({ addContact }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data, e) => {
    addContact(data.name, data.number);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <div>
        <StyledLabel htmlFor="name">Name:</StyledLabel>
        <StyledField type="text" id="name" {...register('name')} />
        {errors.name && <Error>{errors.name?.message}</Error>}
      </div>
      <div>
        <StyledLabel htmlFor="number">Number:</StyledLabel>
        <StyledField type="tel" id="number" {...register('number')} />
        {errors.number && <Error>{errors.number?.message}</Error>}
      </div>
      <StyledButton type="submit">Add contact</StyledButton>
    </StyledForm>
  );
};

PhonebookForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default PhonebookForm;

PhonebookForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};