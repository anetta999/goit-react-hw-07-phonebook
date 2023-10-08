import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  width: 579px;
  padding-top: 80px;
  padding-bottom: 80px;
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  flex-direction: column;
  gap: 28px;

  border-radius: 18px;
  border: 2px solid #111;
  background-color: #f6f6f6;
`;
export const FormField = styled(Field)`
  width: 499px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 40px;
  border: 2px solid #111;
  outline: none;

  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: -0.18px;
  text-transform: uppercase;

  &:focus {
    border: 2px solid #4f2ee8;
  }
`;

export const StyledErrorMsg = styled(ErrorMessage)`
  color: #4f2ee8;
`;

export const AddBtn = styled.button`
  width: 499px;
  height: 64px;
  padding: 0;
  border: transparent;
  border-radius: 40px;
  background-color: #111;

  color: #f3f3f3;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.33;
  letter-spacing: -0.18px;
  text-transform: uppercase;

  transition: background-color 250ms ease-in;

  &:is(:hover, :focus) {
    background-color: #4f2ee8;
  }
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #111;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.33;
  letter-spacing: -0.18px;
  text-transform: uppercase;
`;
