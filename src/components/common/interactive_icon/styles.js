import styled from 'styled-components'
export const Container = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin: 0 4px;
  height: 18px;
  width: 18px;
  &:hover {
    border-radius: 2px;
    background-color: #00000010;
    background-size: cover;
  }
`
export const Icon = styled.img`
  display: inline-block;
  height: 12px;    
  align-self: center;
  text-align: center;
`

export const TooltipContainer = styled.span`
  display: none;
  ${Container}:hover & {
    display: inline-block;
    position: relative;
  }
`