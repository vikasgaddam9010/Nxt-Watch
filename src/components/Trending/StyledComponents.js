import styled from 'styled-components'

const Div = styled.div`
  background-color: ${props =>
    props.isLightThemeActive ? '#f9f9f9' : '#0f0f0f'};
  color: ${props => (props.isLightThemeActive ? '#000000' : '#ffffff')};
  height: 89vh;
  width: 100vw;
  display: flex;
`

export default Div
