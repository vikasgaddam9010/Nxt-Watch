import {Component} from 'react'

import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import ReactContext from '../../ReactContext'

import {
  Div,
  DivForLogin,
  Img,
  Forms,
  LabelAndInputDiv,
  Label,
  Input,
  ShowPasswordtDiv,
  LoginButton,
  ErrorPara,
} from './StyledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    checked: false,
    errorStatus: false,
    errorMsg: 'error',
  }

  getFullView = () => (
    <ReactContext.Consumer>
      {value => {
        const {username, password, checked, errorStatus, errorMsg} = this.state
        const {isLightThemeActive} = value

        const type = checked ? 'text' : 'password'

        const webLogo = isLightThemeActive
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

        return (
          <>
            <Div>
              <DivForLogin>
                <Img alt="website logo" src={webLogo} />
                <Forms onSubmit={this.onSubmitForms}>
                  <LabelAndInputDiv direction="column">
                    <Label htmlFor="username">USERNAME</Label>
                    <Input
                      value={username}
                      onChange={this.onChangeUsername}
                      id="username"
                      placeholder="Username"
                      type="text"
                    />
                  </LabelAndInputDiv>
                  <LabelAndInputDiv direction="column">
                    <Label htmlFor="password">PASSWORD</Label>
                    <Input
                      value={password}
                      onChange={this.onChangePassword}
                      id="password"
                      placeholder="Password"
                      type={type}
                    />
                  </LabelAndInputDiv>
                  <ShowPasswordtDiv direction="row">
                    <Input
                      checked={checked}
                      onClick={this.onClickToChangeCheckedState}
                      id="pass"
                      type="checkbox"
                    />
                    <Label htmlFor="pass" fontSize="14px">
                      Show Password
                    </Label>
                  </ShowPasswordtDiv>
                  <LoginButton type="submit">Login</LoginButton>
                  {errorStatus && <ErrorPara>{errorMsg}</ErrorPara>}
                </Forms>
              </DivForLogin>
            </Div>
          </>
        )
      }}
    </ReactContext.Consumer>
  )

  onSubmitForms = async event => {
    const {username, password} = this.state
    event.preventDefault()
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const {ok} = response
    const jsonData = await response.json()
    console.log(jsonData)
    if (ok) {
      const {history} = this.props
      Cookies.set('jwtToken', jsonData.jwt_token, {expires: 5})
      history.replace('/')
    } else {
      this.setState({errorStatus: true, errorMsg: jsonData.error_msg})
    }
  }

  onClickToChangeCheckedState = () => {
    this.setState(prevState => ({checked: !prevState.checked}))
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  render() {
    const jwtToken = Cookies.get('jwtToken')

    console.log(jwtToken)

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return <>{this.getFullView()}</>
  }
}

export default Login
