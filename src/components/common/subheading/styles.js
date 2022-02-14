import styled from 'styled-components'

export const Subheading = styled.h4`
  display: flex;
  margin: 0 0 12px 0;
  align-self: center;
  height: 12px;
  font-family: Lato;
  font-size: 14px;
  font-weight: 300;
  color: ${({ isDisabled }) => isDisabled ? '#5e5e5e50' : '#5e5e5e'};
  text-decoration: none solid rgb(94, 94, 94);
  line-height: 24px;
`