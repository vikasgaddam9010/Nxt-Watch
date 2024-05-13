import styled from 'styled-components'

export const HomeDivContainer = styled.div`
  background-color: ${props =>
    props.isLightThemeActive ? '#f9f9f9' : '#181818'};
`

export const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
export const DivForRightCOntainer = styled.div`
  padding-right: 40px;
  width: 100%;
  font-family: 'Roboto';
`

export const BannerImageContainer = styled.div`
  margin: 0px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  height: 200px;
  display: ${props => (props.bannerBoolean ? 'flex' : 'none')};
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 30px;
  padding-bottom: 30px;
  padding: 20px;
`
export const BannerImg = styled.img`
  width: 190px;
  height: 40px;
`
export const Button = styled.button`
  width: ${props => props.width};
  color: ${props => props.color};
  font-size: 18px;
  padding-left: 15px;
  padding-right: 15px;
  padding: ${props => props.padding};
  background-color: ${props => props.bgColor};
  border: ${props => (props.border ? '1px solid black' : 'none')};
  margin-top: ${props => props.marginTop && '20px'};
  cursor: pointer;
`
export const SearchAndListContainer = styled.div`
  background-color: ${props =>
    props.isLightThemeActive ? '#f4f4f4' : '#000000'};
  width: 100%;
  padding: 30px;
`

export const SearchContainer = styled.div`
  height: 30px;
  display: flex;
`

export const Input = styled.input`
  background-color: ${props =>
    props.isLightThemeActive ? '#ffffff' : '#000000'};
  color: ${props => (props.isLightThemeActive ? '#000000' : '#ffffff')};
  border: 1px solid lightgray;
  width: 500px;
  padding: 10px;
`

export const UnorderList = styled.ul`
  padding: 0px;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
`
export const ListItem = styled.li`
  margin-bottom: 20px;
  width: 385px;
`

export const DivForViewsAndTime = styled.div`
  display: flex;
`
export const ThumbImg = styled.img`
margin-right:${props => props.margin};
padding-top: ${props => props.padding};
height: ${props => props.height};
  width: ${props => props.width};
`
export const DatePara = styled.p`
  margin: 0px;
  padding: 0px;
  margin-left: 10px;
`
export const DivForList = styled.div`
  color: ${props => (props.isLightThemeActive ? '#000000' : '#ffffff')};
  text-decoration: none;
`
export const Para = styled.p`
  color: ${props => (props.isLightThemeActive ? '#000000' : '#ffffff')};
  margin: 0px;
  text-align: ${props => props.center};
  margin-bottom: ${props => props.bottomMargin};
  padding: 0px;
`
export const DivForFailedView = styled.div`
  padding: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Hone = styled.h1`
  text-align: center;
  color: ${props => (props.isLightThemeActive ? '#000000' : '#ffffff')};
`
