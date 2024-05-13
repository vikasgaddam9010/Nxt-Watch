import {Component} from 'react'

import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {
  MenuContainer,
  MenuItems,
  ParaItem,
  DivForImgs,
  Img,
  DivForContactContainer,
} from './StyledComponents'
import ReactContext from '../../ReactContext'

const HomeIcon = styled(AiFillHome)`
  color: ${props => (props.isTrue ? 'red' : '#64748b')};
`
const TrendIcon = styled(HiFire)`
  color: ${props => (props.isTrue ? 'red' : '#64748b')};
`
const GameIcon = styled(SiYoutubegaming)`
  color: ${props => (props.isTrue ? 'red' : '#64748b')};
`
const SavedIcon = styled(MdPlaylistAdd)`
  color: ${props => (props.isTrue ? 'red' : '#64748b')};
`

const LinkStyled = styled(Link)`
  text-decoration: none;
`

const activeRout = {
  home: 'home',
  game: 'game',
  treding: 'trending',
  savedVideos: 'savedVideos',
}

class MenuContainerComponent extends Component {
  render() {
    return (
      <ReactContext.Consumer>
        {value => {
          const {
            isLightThemeActive,
            changeStateToChangeCOfRoute,
            routeState,
            changeStateToChangeCOfTrendingRoute,
            changeStateToChangeCOfGamesRout,
            changeStateToChangeCOfSaveVideosRoute,
          } = value

          const onClickToHome = () => {
            changeStateToChangeCOfRoute()
          }

          const onClickToTrending = () => {
            changeStateToChangeCOfTrendingRoute()
          }

          const onClickToGames = () => {
            changeStateToChangeCOfGamesRout()
          }
          const onClickToSavedVideo = () => {
            changeStateToChangeCOfSaveVideosRoute()
          }
          return (
            <MenuContainer>
              <div>
                <LinkStyled to="/" onClick={onClickToHome}>
                  <MenuItems
                    isTrue={routeState === activeRout.home}
                    isLightThemeActive={isLightThemeActive}
                  >
                    <HomeIcon isTrue={routeState === activeRout.home} />
                    <ParaItem>Home</ParaItem>
                  </MenuItems>
                </LinkStyled>
                <LinkStyled
                  isTrue={routeState === activeRout.treding}
                  to="/trending"
                  onClick={onClickToTrending}
                >
                  <MenuItems
                    isTrue={routeState === activeRout.treding}
                    isLightThemeActive={isLightThemeActive}
                  >
                    <TrendIcon isTrue={routeState === activeRout.treding} />
                    <ParaItem>Trending</ParaItem>
                  </MenuItems>
                </LinkStyled>
                <LinkStyled
                  isTrue={routeState === activeRout.game}
                  to="/gaming"
                  onClick={onClickToGames}
                >
                  <MenuItems
                    isTrue={routeState === activeRout.game}
                    isLightThemeActive={isLightThemeActive}
                  >
                    <GameIcon isTrue={routeState === activeRout.game} />
                    <ParaItem>Gaming</ParaItem>
                  </MenuItems>
                </LinkStyled>

                <LinkStyled
                  isTrue={routeState === activeRout.savedVideos}
                  to="/saved-videos"
                  onClick={onClickToSavedVideo}
                >
                  <MenuItems
                    isTrue={routeState === activeRout.savedVideos}
                    isLightThemeActive={isLightThemeActive}
                  >
                    <SavedIcon isTrue={routeState === activeRout.savedVideos} />
                    <ParaItem>Saved videos</ParaItem>
                  </MenuItems>
                </LinkStyled>
              </div>
              <DivForContactContainer>
                <p>CONTACT US</p>
                <DivForImgs>
                  <Img
                    width="30px"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <Img
                    width="30px"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <Img
                    width="30px"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </DivForImgs>
                <p>Enjoy! Now to see your channels and recommendations!</p>
              </DivForContactContainer>
            </MenuContainer>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default MenuContainerComponent
