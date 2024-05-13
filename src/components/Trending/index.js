import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import {HiFire} from 'react-icons/hi'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {Component} from 'react'
import Header from '../Header'

import MenuContainerComponent from '../MenuContainer'

import LoadingView from '../LoadingView'

import {
  Div,
  DivForZeroList,
  Img,
  DivForVideos,
  DivForSavedHead,
  UnorderList,
  ListItem,
  Head,
} from '../SavedVideos/StyledComponents'

import {Button} from '../Home/StyledComponents'

import ReactContext from '../../ReactContext'

const LinkStyled = styled(Link)`
  text-decoration: none;
`

const Styled = styled(HiFire)`
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

class Trending extends Component {
  state = {videosList: [], viewState: stateStatus.initial}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({viewState: stateStatus.loader})
    const jwtToken = await Cookies.get('jwtToken')
    const trendingVideosApiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(trendingVideosApiUrl, options)
    if (response.ok) {
      const jsonData = await response.json()

      const updated = jsonData.videos.map(each => ({
        id: each.id,
        publishedAt: formatDistanceToNow(new Date(each.published_at)),
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
      }))
      console.log(updated)
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
                <Styled isLightThemeActive={isLightThemeActive} />
                <h1>Trending</h1>
              </DivForSavedHead>
              <UnorderList isLightThemeActive={isLightThemeActive}>
                {videosList.map(eachSavedVideo => (
                  <LinkStyled
                    key={eachSavedVideo.id}
                    to={`/videos/${eachSavedVideo.id}`}
                  >
                    <ListItem>
                      <>
                        <Img
                          alt="video thumbnail"
                          margin
                          width="500px"
                          src={eachSavedVideo.thumbnailUrl}
                        />
                        <div>
                          <Head isLightThemeActive={isLightThemeActive}>
                            {eachSavedVideo.title}
                          </Head>
                          <p>{eachSavedVideo.name}</p>
                          <p>
                            {eachSavedVideo.viewCount}{' '}
                            <span>{eachSavedVideo.publishedAt}</span>
                          </p>
                        </div>
                      </>
                    </ListItem>
                  </LinkStyled>
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
              <Div
                data-testid="trending"
                isLightThemeActive={isLightThemeActive}
              >
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
export default Trending
