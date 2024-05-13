import styled from 'styled-components'

export const Div = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const DivForLogin = styled.div`
  padding: 50px;
  width: 399px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 28px 2px lightgray;
  border-radius: 10px;
`

export const Img = styled.img`
  height: 42px;
  width: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
`
export const Forms = styled.form``

export const LabelAndInputDiv = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  width: 100%;
  margin-bottom: 20px;
`

export const Label = styled.label`
  color: #475569;
  margin-bottom: 8px;
  font-size: ${props => props.fontSize};
`

export const Input = styled.input`
  margin-left: 0px;
  padding: 5px;
`
export const ShowPasswordtDiv = styled.div`
  margin-bottom: 20px;
`
export const LoginButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  background-color: #3b82f6;
  color: #ffffff;
  cursor: pointer;
`
export const ErrorPara = styled.p`
  color: #ff0000;
`
