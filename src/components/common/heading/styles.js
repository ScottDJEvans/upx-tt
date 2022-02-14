import styled from 'styled-components'
export const Heading = styled.h3`
  height: 24px;
  font-family: Lato;
  font-size: 18px;
  font-weight: 300;
  color: ${({ isDisabled }) => isDisabled ? '#37373750' : '#373737'};
  text-decoration: none solid rgb(55, 55, 55);
  line-height: 24px;
`