import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {MdBrightness4} from 'react-icons/md'
import {BsBrightnessHigh} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import {IoReorderThreeSharp} from 'react-icons/io5'
import Cookies from 'js-cookie'
import {
  NavBar,
  Img,
  DivForThemerProfileLogOut,
  LogOutButton,
  ThemeButton,
  DivForSmallView,
  LogoutContainer,
  ButttonDiv,
} from './StyledComponents'
import ReactContext from '../../ReactContext'

const Header = props => (
  <>
    <ReactContext.Consumer>
      {value => {
        const {isLightThemeActive, changeStateToChangeCOfRoute, changeTheme} =
          value

        const webLogo = isLightThemeActive
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

        const onClickToChnageTheme = () => {
          changeTheme()
        }

        const onClickToUpdateLinkCss = () => {
          changeStateToChangeCOfRoute()
        }

        const logout = () => {
          Cookies.remove('jwtToken')
          const {history} = props
          history.replace('/login')
        }

        return (
          <NavBar isLightThemeActive={isLightThemeActive}>
            <Link onClick={onClickToUpdateLinkCss} to="/">
              <Img width="200px" alt="website logo" src={webLogo} />
            </Link>

            <DivForThemerProfileLogOut>
              <li>
                <ThemeButton
                  data-testid="theme"
                  isLightThemeActive={isLightThemeActive}
                  onClick={onClickToChnageTheme}
                  fontSize="20px"
                >
                  {isLightThemeActive ? (
                    <MdBrightness4 />
                  ) : (
                    <BsBrightnessHigh />
                  )}
                </ThemeButton>
              </li>
              <li>
                <Img
                  width="50px"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </li>
              <li>
                <Popup
                  modal
                  trigger={<LogOutButton type="button">Logout</LogOutButton>}
                >
                  {close => (
                    <LogoutContainer>
                      <div>
                        <p>Are you sure, you want to logout</p>
                      </div>
                      <ButttonDiv>
                        <LogOutButton type="button" onClick={() => close()}>
                          Cancel
                        </LogOutButton>
                        <LogOutButton onClick={logout} type="button">
                          Confirm
                        </LogOutButton>
                      </ButttonDiv>
                    </LogoutContainer>
                  )}
                </Popup>
              </li>
            </DivForThemerProfileLogOut>
            <DivForSmallView>
              <li>
                <ThemeButton
                  isLightThemeActive={isLightThemeActive}
                  onClick={onClickToChnageTheme}
                  fontSize="20px"
                >
                  {isLightThemeActive ? (
                    <MdBrightness4 />
                  ) : (
                    <BsBrightnessHigh />
                  )}
                </ThemeButton>
              </li>

              <li>
                <ThemeButton isLightThemeActive={isLightThemeActive}>
                  <IoReorderThreeSharp />
                </ThemeButton>
              </li>

              <li>
                <Popup
                  modal
                  trigger={
                    <ThemeButton
                      isLightThemeActive={isLightThemeActive}
                      type="button"
                    >
                      <FiLogOut />
                    </ThemeButton>
                  }
                >
                  {close => (
                    <LogoutContainer>
                      <div>
                        <p>Are you sure you want to logout?</p>
                      </div>
                      <ButttonDiv>
                        <LogOutButton type="button" onClick={() => close()}>
                          Cancel
                        </LogOutButton>
                        <LogOutButton onClick={logout} type="button">
                          Confirm
                        </LogOutButton>
                      </ButttonDiv>
                    </LogoutContainer>
                  )}
                </Popup>
              </li>
            </DivForSmallView>
          </NavBar>
        )
      }}
    </ReactContext.Consumer>
  </>
)

export default withRouter(Header)
