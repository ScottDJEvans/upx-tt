import styled, { css } from 'styled-components'
import { BUTTON_COLORS, BUTTON_SIZES } from "./constants";

const buttonSizeStyling = css`
  ${({size}) => BUTTON_SIZES[size]};
  width: ${({fullWidth}) => fullWidth && '100%'};
`
const buttonColorStyling = css`
  background-color: ${({color}) => BUTTON_COLORS[color].color};
  color: ${({color}) => BUTTON_COLORS[color].textColor};
  &:hover {
    background-color: ${({color}) => BUTTON_COLORS[color].hover};
  }
`

export const Button = styled.button`
  ${buttonSizeStyling}
  ${buttonColorStyling}
  border: none;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  margin: 0;
  outline: 0;
  display: inline-flex;
  font-family: "Proxima Nova", sans-serif;
  
  // From site
  vertical-align: middle;
  justify-content: center;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%);
`

export const ContainedButton = styled(Button)`
  border-radius: 6px;
  padding: 13px;
  font-weight: 700;
`

export const TextButton = styled(Button)`
  text-align: center;
  background: none;
  margin: 0;
  color: ${({color}) => BUTTON_COLORS[color].color};
  width: ${({fullWidth}) => fullWidth && '100%'};
  box-shadow: none;
  text-decoration: underline;
`