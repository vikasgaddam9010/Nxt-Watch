import styled from 'styled-components'

export const MenuContainer = styled.div`
  height: 89vh;
  min-height: 500px;
  background-color: transparent;
  color: ${props => (props.isLightThemeActive ? '#000000' : '#ffffff')};
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const MenuItems = styled.div`
  background-color: ${props =>
    props.isLightThemeActive
      ? props.isTrue
        ? '#f1f5f9'
        : 'transparent'
      : props.isTrue
      ? '#231f20'
      : 'transparent'};
  color: ${props => (props.isLightThemeActive ? '#000000' : '#ffffff')};
  font-size: 20px;
  height: 30px;
  padding: 30px;
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
`
export const ParaItem = styled.p`
  margin-left: 10px;
`

export const DivForImgs = styled.div`
width: 300px;
display: flex:
`
export const Img = styled.img`
  width: ${props => props.width};
  margin-right: 10px;
`

export const DivForContactContainer = styled.div`
  padding: 30px;
`
