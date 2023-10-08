import styled from 'styled-components';

export const FilterInput = styled.input`
  width: 499px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 40px;
  border: 2px solid #111;
  outline: none;
  margin-bottom: 40px;

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

export const FilterText = styled.p`
  color: #4f2ee8;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.33;
  letter-spacing: -0.18px;
  text-transform: uppercase;

  margin-bottom: 8px;
`;
