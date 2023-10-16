import styled from "styled-components";

export const ModalWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  bottom: 0px;
  background-color: #e1dfdfa3;
`;

export const ModalContainer = styled.div`
  max-width: 300px;
  width: 100%;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-top: 10px;
`;

export const Input = styled.input`
  padding: 5px;
  margin: 5px 0;
`;

export const ColorRadioGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0;

  label {
    margin-right: 10px;
  }
`;
