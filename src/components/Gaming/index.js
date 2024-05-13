import Cookies from 'js-cookie'
import styled from 'styled-components'
import {SiYoutubegaming} from 'react-icons/si'
import {Link} from 'react-router-dom'
import {Component} from 'react'
import Header from '../Header'

import MenuContainerComponent from '../MenuContainer'

import LoadingView from '../LoadingView'

import {
  Div,
  DivForZeroList,
  DivForVideos,
  DivForSavedHead,
} from '../SavedVideos/StyledComponents'

import {Button} from '../Home/StyledComponents'

import {UnorderList, Img, Head, ListItem} from './StyledComponents'

import ReactContext from '../../ReactContext'

const LinkStyled = styled(Link)`
  color: ${props => (props.isLightThemeActive ? '#000000' : 'black')};
  text-decoration: none;
`

const Styled = styled(SiYoutubegaming)`
  padding: 18px;
  border-radius: 50%;
  background-color: ${props =>
    props.isLightThemeActive ? '#e2e8f0' : '#000000'};
  color: #ff0000;
  margin-right: 20px;
  font-size: 70px;
`

const stateStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  loader: 'LOADER',
  failed: 'FAILED',
}

class Gaming extends Component {
  state = {videosList: [], viewState: stateStatus.initial}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({viewState: stateStatus.loader})
    const jwtToken = await Cookies.get('jwtToken')
    const gamingVideosApiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(gamingVideosApiUrl, options)
    if (response.ok) {
      const jsonData = await response.json()

      const updated = jsonData.videos.map(each => ({
        id: each.id,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({videosList: updated, viewState: stateStatus.success})
    } else {
      this.setState({viewState: stateStatus.failed})
    }
  }

  onClickToReFetchSearchedData = () => {
    this.getTrendingVideos()
  }

  render() {
    return (
      <ReactContext.Consumer>
        {value => {
          const {isLightThemeActive} = value
          const {videosList} = this.state
          const failedImg = isLightThemeActive
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          const getNoVideosView = () => (
            <DivForZeroList isLightThemeActive={isLightThemeActive}>
              <Img width="300px" src={failedImg} alt="no saved videos" />
              <h1>Oops! Something Went Wrong</h1>
              <p>
                We are having some trouble to complete your request. <br />{' '}
                Plase try again.
              </p>
              <Button
                onClick={this.onClickToReFetchSearchedData}
                width="100px"
                marginTop
                padding="10px"
                bgColor="#4f46e5"
                color="#ffffff"
              >
                Retry
              </Button>
            </DivForZeroList>
          )
          const getVideosListView = () => (
            <DivForVideos>
              <DivForSavedHead isLightThemeActive={isLightThemeActive}>
                <Styled isLightThemeActive={isLightThemeActive} />{' '}
                <h1>Gaming</h1>
              </DivForSavedHead>
              <UnorderList isLightThemeActive={isLightThemeActive}>
                {videosList.map(eachSavedVideo => (
                  <ListItem key={eachSavedVideo.id}>
                    <LinkStyled
                      isLightThemeActive={isLightThemeActive}
                      to={`/videos/${eachSavedVideo.id}`}
                    >
                      <Img
                        alt="video thumbnail"
                        src={eachSavedVideo.thumbnailUrl}
                      />
                      <div>
                        <Head>{eachSavedVideo.title}</Head>
                        <p>
                          {eachSavedVideo.viewCount}{' '}
                          <span>watching WorldWide</span>{' '}
                        </p>
                      </div>
                    </LinkStyled>
                  </ListItem>
                ))}
              </UnorderList>
            </DivForVideos>
          )

          const renderView = () => {
            const {viewState} = this.state
            switch (viewState) {
              case stateStatus.loader:
                return <LoadingView />
              case stateStatus.success:
                return getVideosListView()
              case stateStatus.failed:
                return getNoVideosView()
              default:
                return null
            }
          }
          return (
            <div>
              <Header />
              <Div data-testid="gaming" isLightThemeActive={isLightThemeActive}>
                <MenuContainerComponent />
                {renderView()}
              </Div>
            </div>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}
export default Gaming
