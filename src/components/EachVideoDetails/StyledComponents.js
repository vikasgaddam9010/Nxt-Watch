import styled from 'styled-components'

export const DivEachVideoConatiner = styled.div`
  background-color: ${props =>
    props.isLightThemeActive ? '#f9f9f9' : '#0f0f0f'};
  width: 100%;
`
export const Div = styled.div`
  height: 89vh;
  width: 100%;
  display: flex;
`
export const SuccessDiv = styled.div`
  padding: 40px;
  background-color: ${props =>
    props.isLightThemeActive ? '#f9f9f9' : 'black'};
  width: 100%;
`
export const ParaVideoTitla = styled.p`
  font-size: 20px;
  color: ${props => (props.isLightThemeActive ? 'black' : 'white')};
`
export const DivForTimeLikesSave = styled.div`
  color: ${props => (props.isLightThemeActive ? 'black' : 'white')};
  width: ${props => props.width};
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Button = styled.button`
  color: ${props =>
    props.isLightThemeActive
      ? props.isSaved
        ? '#2563eb'
        : 'black'
      : props.isSaved
      ? '#64748b'
      : 'white'};
  width: ${props => props.width};
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const LikeButton = styled.button`
  color: ${props =>
    props.isLightThemeActive
      ? props.isLiked
        ? '#2563eb'
        : 'black'
      : props.isLiked
      ? '#64748b'
      : 'white'};
  width: ${props => props.width};
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const DislikeButton = styled.button`
  color: ${props =>
    props.isLightThemeActive
      ? props.isDisliked
        ? '#2563eb'
        : 'black'
      : props.isDisliked
      ? '#64748b'
      : 'white'};
  width: ${props => props.width};
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HorizontaLine = styled.hr`
  width: 100%;
  color: ${props => (props.isLightThemeActive ? 'black' : 'white')};
`
export const DivForProfileAnddescription = styled.div`
  width: 100%;
  display: flex;
`
export const Img = styled.img`
  margin: 12px;
  width: 50px;
  margin-right: 20px;
  height: 70px;
`
export const Anddescription = styled.div`
  color: ${props => (props.isLightThemeActive ? '#000000' : '#ffffff')};
`
export const FailedButton = styled.button`
  width: ${props => props.width};
  color: ${props => props.color};
  font-size: 18px;
  padding-left: 15px;
  padding-right: 15px;
  padding: ${props => props.padding};
  background-color: ${props => props.bgColor};
  border: ${props => (props.border ? '1px solid black' : 'none')};
  margin-top: ${props => props.marginTop && '20px'};
  cursor: pointer;`