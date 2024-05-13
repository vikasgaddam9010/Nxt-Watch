import styled from 'styled-components'

export const Div = styled.div`
  background-color: ${props =>
    props.isLightThemeActive ? '#f9f9f9' : '#0f0f0f'};
  color: ${props => (props.isLightThemeActive ? '#000000' : '#ffffff')};
  height: 100%;
  width: 100vw;
  display: flex;
`

export const DivForZeroList = styled.div`
  background-color: ${props =>
    props.isLightThemeActive ? '#f9f9f9' : '#000000'};
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const Img = styled.img`
  margin-right: ${props => (props.margin ? '20px' : '0px')};
  margin-bottom: 50px;
  min-width: ${props => props.width};
`
export const DivForVideos = styled.div`
  width: 100%;
  margin: 0px;
`

export const DivForSavedHead = styled.div`
  background-color: ${props =>
    props.isLightThemeActive ? '#f1f1f1' : '#000000'};
  padding: 30px;
  background: ;
  width: 100%;
  display: flex;
  align-items: center;
`
export const UnorderList = styled.ul`
  list-style-type: none;
  margin: 0px;
  padding: 60px;
  background-color: ${props =>
    props.isLightThemeActive ? '#f9f9f9' : '#000000'};
`
export const ListItem = styled.li`
  display: flex;
`

export const Head = styled.h1`
  font-size: 20px;
  color: ${props => (props.isLightThemeActive ? '#313131' : '#ffffff')};
  margin-top: 10px;
  margin-bottom: 40px;
`
