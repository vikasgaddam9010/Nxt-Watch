import styled from 'styled-components'

export const Div = styled.div`
  background-color: ${props =>
    props.isLightThemeActive ? '#f9f9f9' : '#0f0f0f'};
  color: ${props => (props.isLightThemeActive ? '#000000' : '#ffffff')};
  height: 89vh;
  width: 100vw;
  display: flex;
`
export const UnorderList = styled.ul`
  margin: 0px;
  padding: 60px;
  background-color: ${props =>
    props.isLightThemeActive ? '#f9f9f9' : '#000000'};
  list-style-type: none;
  display: flex;
  justidy-content: space-between;
  flex-wrap: wrap;
`
export const ListItem = styled.li`
  width: 300px;
  margin-bottom: 20px;
`
export const Img = styled.img`
  width: 280px;
`
export const Head = styled.h1`
  font-size: 20px;
  margin-top: 10px;
`
