import styled from "styled-components";
import { isContainerSingleLine, hasAdditionalTextOnly } from "./helpers";

export const TextInputContainer = styled.div`
  display: ${({ type }) => isContainerSingleLine(type) ? 'flex' : 'block'};
  align-items: center;
  gap: 0 20px;
  margin: ${({additionalText, additionalInput}) => 
      hasAdditionalTextOnly(additionalText, additionalInput) ? '20px 0 0 0' : '0 0 10px 0'}
`

export const StandardTextInput = styled.input`
  width: 230px;
  height: 24px;
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: #e6e6e6;
  font-family: Lato;
  font-size: 14px;
  outline: none;
  color: ${({ isDisabled }) => isDisabled ? '#5e5e5e50' : '#5e5e5e'};
  text-decoration: none solid rgb(94, 94, 94);
`
export const LargeTextInput = styled.input`
  width: 513px;
  height: 56px;
  padding: 3px 8px;
  border: 1px solid #e6e6e6;
  font-family: Lato;
  font-size: 14px;
  outline: none;
  color: ${({ isDisabled }) => isDisabled ? '#5e5e5e50' : '#5e5e5e'};
  text-decoration: none solid rgb(94, 94, 94);
  line-height: 16px;
`
export const ListTextInput = styled.input`
  width: 513px;
  height: 40px;
  padding: 3px 8px;
  border: 1px solid #e6e6e6;
  font-family: Lato;
  font-size: 14px;
  outline: none;
  color: ${({ isDisabled }) => isDisabled ? '#5e5e5e50' : '#5e5e5e'};
  text-decoration: none solid rgb(94, 94, 94);
  line-height: 16px;
`
export const AdditionalText = styled.span`
  height: 14px;
  font-family: Lato;
  font-size: 12px;
  outline: none;
  color: #848484;
  text-decoration: none solid rgb(132, 132, 132);
  line-height: 16px;
  margin-bottom: 10px;
`

export const DropdownInput = styled.select`
  background: none;
  cursor: text;
  width: 118px;
  height: 24px;
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: #e6e6e6;
  font-family: Lato;
  outline: none;
  font-size: 14px;
  color: #5e5e5e;
  text-decoration: none solid rgb(94, 94, 94);    
`
export const AdditionalDropdownTextInput = styled.input`
  height: 14px;
  width: 40px;
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: #e6e6e6;
  font-family: Lato;
  font-size: 14px;
  outline: none;
  color: ${({ isDisabled }) => isDisabled ? '#5e5e5e50' : '#5e5e5e'};
  text-decoration: none solid rgb(94, 94, 94);
  align-self: end;
`
export const ToggleTextInput = styled.input`
  height: 24px;
  border: 1px solid #e6e6e6;
  border-radius: 2px;
  background-size: cover;
  outline: none;
  color: ${({ isDisabled }) => isDisabled ? '#5e5e5e50' : '#5e5e5e'};
  background-color: #ffffff;
  font-family: Lato;
  font-size: 14px;
`
