import Header from '../Header'
import MenuContainer from '../MenuContainer'

import ReactContext from '../../ReactContext'

import {DivForNotFOund, NotFoundContainer, Img} from './StyledComponents'

const NotFound = () => (
  <ReactContext.Consumer>
    {value => {
      const {isLightThemeActive} = value

      const img = isLightThemeActive
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
      return (
        <div>
          <Header />
          <DivForNotFOund isLightThemeActive={isLightThemeActive}>
            <MenuContainer />
            <NotFoundContainer isLightThemeActive={isLightThemeActive}>
              <Img src={img} />
              <h1>Page Not Found</h1>
              <p>We are sorry, the page you are requsted could not be found</p>
            </NotFoundContainer>
          </DivForNotFOund>
        </div>
      )
    }}
  </ReactContext.Consumer>
)
export default NotFound
