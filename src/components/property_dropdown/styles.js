import styled from 'styled-components'
import {BUTTON_COLORS} from "../common/button/constants";

export const TitleContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  width: 819px;
  height: 47px;
  padding: 0px 0px 0px 20px;
  background-size: cover;
  cursor: pointer;
`
export const CloseIcon = styled.span`
  align-self: center;
  margin-left: auto;
  margin-right: 20px;
  border-radius: 2px;
  background-color: #00000005;
  background-size: cover;
  ${({ isOpen }) => isOpen & `
    background: none;
    &:hover {
      border-radius: 2px;
      background-color: #00000005;
      background-size: cover;
    }
  `}
`
export const Container = styled.div`
  width: 820px;
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: #e6e6e6;
  ${({isDisabled}) => isDisabled && `
    color: '#373737'
    cursor: pointer
  `}
  
`
export const IconContainer = styled.span`
  display: inline;
  align-self: center;
`
export const InputContainer = styled.div`
    display: ${({ isOpen })  => isOpen ? 'block' : 'none'};
    width: 50%;
    margin: 0 auto;
    padding-left: 100px;
    top: -35px;
    position: relative;
`