import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100px;
  margin-left: 20px;
`;

export const Input = styled.input`
  border: 2px solid #22ba76;
  padding: 10px;
  font-size: 16px;
  flex: 1;
`;

export const Button = styled.button`
  background-color: #3ce889;
  border: none;
  color: white;
  padding: 12px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    background-color: #32a6e3;
  }
`;
