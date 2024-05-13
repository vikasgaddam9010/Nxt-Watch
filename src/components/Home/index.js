import {Link} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'
import {IoIosSearch, IoMdClose} from 'react-icons/io'
import {formatDistanceToNow} from 'date-fns'
import styled from 'styled-components'
import MenuContainerComponent from '../MenuContainer'
import ReactContext from '../../ReactContext'
import Header from '../Header'
import LoadingView from '../LoadingView'
import {
  HomeDivContainer,
  Div,
  DivForRightCOntainer,
  BannerImageContainer,
  BannerImg,
  Button,
  SearchAndListContainer,
  SearchContainer,
  Input,
  UnorderList,
  ListItem,
  DivForViewsAndTime,
  ThumbImg,
  DatePara,
  DivForList,
  Para,
  DivForFailedView,
  Hone,
} from './StyledComponents'

const LinkStyled = styled(Link)`
  color: ${props => (props.isLightThemeActive ? '#000000' : 'black')};
  text-decoration: none;
`
const stateStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  loader: 'LOADER',
  failed: 'FAILED',
}
class Home extends Component {
  state = {
    videosList: [],
    isBannerButtonActive: true,
    search: '',
    viewState: stateStatus.initial,
  }

  componentDidMount() {
    this.getAllVideos()
  }

  onClickToReFetchList = () => {
    this.getAllVideos()
  }

  getAllVideos = async () => {
    this.setState({viewState: stateStatus.loader})
    const {search} = this.state
    const jwtToken = await Cookies.get('jwtToken')
    const homeVideosApiUrl = `https://apis.ccbp.in/videos/all?search=${search}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(homeVideosApiUrl, options)
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
      this.setState({videosList: updated, viewState: stateStatus.success})
    } else {
      this.setState({viewState: stateStatus.failed})
    }
  }

  onChngeinputSearchtext = event => {
    this.setState({search: event.target.value})
  }

  searchWithEnterKey = () => {
    this.getAllVideos()
  }

  onClickToReFetchSearchedData = () => {
    this.getAllVideos()
  }

  render() {
    return (
      <ReactContext.Consumer>
        {value => {
          const {isLightThemeActive} = value
          const getLeftView = () => <MenuContainerComponent />

          const getRightView = () => {
            const {isBannerButtonActive, videosList} = this.state

            const webLogo = isLightThemeActive
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

            const onClickToChangeStateOfBannerView = () => {
              this.setState({isBannerButtonActive: false})
            }

            const getZeroVideosView = () => (
              <DivForFailedView>
                <ThumbImg
                  width="400px"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                  alt="no videos"
                />
                <Hone isLightThemeActive={isLightThemeActive}>
                  No Search results found
                </Hone>
                <Para isLightThemeActive={isLightThemeActive}>
                  Try different key words or remove search filter
                </Para>
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
              </DivForFailedView>
            )

            const getVideosList = () => {
              return (
                <UnorderList>
                  {videosList.map(eachItem => (
                    <ListItem key={eachItem.id}>
                      <LinkStyled
                        isLightThemeActive={isLightThemeActive}
                        to={`/videos/${eachItem.id}`}
                      >
                        <DivForList isLightThemeActive={isLightThemeActive}>
                          <ThumbImg
                            alt="video thumbnail"
                            width="100%"
                            src={eachItem.thumbnailUrl}
                          />
                          <DivForViewsAndTime>
                            <ThumbImg
                              margin="16px"
                              padding="16px"
                              height="60px"
                              width="45px"
                              alt="channel logo"
                              src={eachItem.profileImageUrl}
                            />
                            <div>
                              <p>{eachItem.title}</p>
                              <p>{eachItem.name}</p>
                              <DivForViewsAndTime>
                                <Para isLightThemeActive={isLightThemeActive}>
                                  {eachItem.viewCount}
                                  <span> views</span>
                                </Para>
                                <DatePara>{eachItem.publishedAt}</DatePara>
                              </DivForViewsAndTime>
                            </div>
                          </DivForViewsAndTime>
                        </DivForList>
                      </LinkStyled>
                    </ListItem>
                  ))}
                </UnorderList>
              )
            }

            const getFailedView = () => {
              const failedImg = isLightThemeActive
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

              return (
                <DivForFailedView>
                  <ThumbImg width="400px" src={failedImg} />
                  <Hone isLightThemeActive={isLightThemeActive}>
                    Oops! Something Went Wrong
                  </Hone>
                  <Para
                    isLightThemeActive={isLightThemeActive}
                    bottomMargin="20px"
                    center="center"
                  >
                    We are having some trouble to complete your request. <br />{' '}
                    Plase try again.
                  </Para>
                  <Button
                    onClick={this.onClickToReFetchList}
                    width="100px"
                    marginTop
                    padding="10px"
                    bgColor="#4f46e5"
                    color="#ffffff"
                  >
                    Retry
                  </Button>
                </DivForFailedView>
              )
            }
            const renderStateView = () => {
              const {viewState} = this.state
              switch (viewState) {
                case stateStatus.loader:
                  return <LoadingView />
                case stateStatus.success:
                  return videosList.length === 0
                    ? getZeroVideosView()
                    : getVideosList()
                case stateStatus.failed:
                  return getFailedView()
                default:
                  return null
              }
            }

            return (
              <DivForRightCOntainer>
                <BannerImageContainer
                  data-testid="banner"
                  bannerBoolean={isBannerButtonActive}
                >
                  <div>
                    <BannerImg
                      alt="nxt watch logo"
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    />
                    <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
                    <Button padding="10px" bgColor="transparent" margin border>
                      GET IT NOW
                    </Button>
                  </div>
                  <Button
                    padding="10px"
                    data-testid="close"
                    bgColor="transparent"
                    onClick={onClickToChangeStateOfBannerView}
                  >
                    <IoMdClose />
                  </Button>
                </BannerImageContainer>
                <SearchAndListContainer isLightThemeActive={isLightThemeActive}>
                  <SearchContainer>
                    <Input
                      isLightThemeActive={isLightThemeActive}
                      value={this.state.search}
                      onChange={this.onChngeinputSearchtext}
                      type="search"
                      placeholder="Search"
                    />
                    <Button
                      data-testid="searchButton"
                      onClick={this.searchWithEnterKey}
                      padding="6px"
                      bgColor="#cccccc"
                    >
                      <IoIosSearch />
                    </Button>
                  </SearchContainer>
                  <UnorderList>{renderStateView()}</UnorderList>
                </SearchAndListContainer>
              </DivForRightCOntainer>
            )
          }
          return (
            <HomeDivContainer
              data-testid="home"
              isLightThemeActive={isLightThemeActive}
            >
              <Header />
              <Div>
                {getLeftView()}
                {getRightView()}
              </Div>
            </HomeDivContainer>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default Home
