import styled from 'styled-components'

export const NavBar = styled.nav`
background-color: ${props =>
  props.isLightThemeActive ? '#f9f9f9' : '#181818'};
  padding: 20px;
  padding-left: 40px;
  padding-right: 40px;
  min-width: 500px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items:center;
`
export const Img = styled.img`
  width: ${props => props.width};
  height: 40px;
`

export const DivForThemerProfileLogOut = styled.ul`
list-style-type: none;
padding: 0px;
  width: 210px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 576px) {
    display: none;
  }
`
export const DivForSmallView = styled.ul`
list-style-type: none;
padding: 0px;
  width: 210px;
  display: flex;
  justify-content: space-between;
  @media (min-width: 577px) {
    display: none;
  }
`

export const LogOutButton = styled.button`
  border: 2px solid #3b82f6;
  background-color: transparent;
  font-size: 14px;
  font-weight: bold;
  border-radius: 5px;
  color: #3b82f6;
  height: 40px;
  width: 80px;
`

export const ThemeButton = styled.button`
  color: ${props => (props.isLightThemeActive ? '#000000' : '#ffffff')};
  font-size: 40px;
  border: none;
  padding: 0px;
  height: 0px;
  cursor: pointer;
`
export const Div = styled.div`
  padding: 0px;
  margin: 0px;
  font-size: 40px;
`
export const LogoutContainer = styled.div`
  padding: 50px;
  border-radius: 20px;
  background-color: white;
  color: #00306e;
`
export const ButttonDiv = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`
