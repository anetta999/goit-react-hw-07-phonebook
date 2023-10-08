import styled from 'styled-components';

export const DeleteBtn = styled.button`
  padding: 10px 20px;
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

export const ContactsText = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.33;
  letter-spacing: -0.18px;
  text-transform: uppercase;
`;
