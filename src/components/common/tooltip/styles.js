import styled from 'styled-components'

export const TooltipContainer = styled.span`
  position: absolute;
`
export const TooltipIcon = styled.span`
  position: relative;
  top: -10px;
`
export const TooltipDescription = styled.span`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 2px;
  background-color: #111111;
  font-family: Lato;
  font-size: 12px;
  color: #cdcdcd;
  white-space: nowrap;
  padding: 4px 10px;
`