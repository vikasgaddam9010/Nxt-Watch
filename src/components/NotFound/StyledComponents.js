import styled from 'styled-components'

export const DivForNotFOund = styled.div`
  padding-right: 40px;
  width: 100%;
  display: flex;
  background-color: ${props => (props.isLightThemeActive ? 'white' : 'black')};
`

export const NotFoundContainer = styled.div`
  background-color: ${props => (props.isLightThemeActive ? 'white' : 'black')};
  color: ${props => (props.isLightThemeActive ? 'black' : 'white')};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`
export const Img = styled.img`
  width: 500px;
  margin-bottom: 40px;
`
