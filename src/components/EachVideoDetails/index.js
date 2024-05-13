import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'

import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import Header from '../Header'

import LoadingView from '../LoadingView'

import MenuContainerComponent from '../MenuContainer'

import ReactContext from '../../ReactContext'

import {
  Div,
  SuccessDiv,
  DivEachVideoConatiner,
  ParaVideoTitla,
  DivForTimeLikesSave,
  Button,
  LikeButton,
  DislikeButton,
  HorizontaLine,
  DivForProfileAnddescription,
  Anddescription,
  Img,
  FailedButton,
} from './StyledComponents'

import {ThumbImg, Para, DivForFailedView, Hone} from '../Home/StyledComponents'

const stateStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  loader: 'LOADER',
  failed: 'FAILED',
}

class EachVideoDetails extends Component {
  state = {
    viewState: stateStatus.initial,
    videoDetails: {},
    activeButton: '',
    isSaved: false,
  }

  componentDidMount() {
    this.getitemDetails()
  }

  getitemDetails = async () => {
    this.setState({viewState: stateStatus.loader})
    const {id} = this.props.match.params
    const url = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwtToken')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer${jwtToken}`,
      },
    }

    const response = await fetch(url, options)

    if (response.ok) {
      const jsonData = await response.json()
      const videoDetails = jsonData.video_details

      const updated = {
        description: videoDetails.description,
        id: videoDetails.id,
        publishedAt: formatDistanceToNow(new Date(videoDetails.published_at)),
        thumbnailUrl: videoDetails.thumbnail_url,
        title: videoDetails.title,
        videoUrl: videoDetails.video_url,
        viewCount: videoDetails.view_count,
        name: videoDetails.channel.name,
        profileImageUrl: videoDetails.channel.profile_image_url,
        subscriberCount: videoDetails.channel.subscriber_count,
      }

      this.setState({videoDetails: updated, viewState: stateStatus.success})
    } else {
      this.setState({viewState: stateStatus.failed})
    }
  }

  onClickToReFetchList = () => {
    this.getitemDetails()
  }

  onClickToLike = () => {
    this.setState({activeButton: 'like'})
  }

  onClickToDislike = () => {
    this.setState({activeButton: 'dislike'})
  }

  render() {
    return (
      <ReactContext.Consumer>
        {value => {
          const {isLightThemeActive} = value

          const renderSuccessView = () => (
            <ReactContext.Consumer>
              {value => {
                const {videoDetails, activeButton} = this.state

                const {savedVideoslist, isLightThemeActive, videosAddToState} =
                  value

                const index = savedVideoslist.findIndex(
                  each => each.id === videoDetails.id,
                )
                let isVideoSaved
                if (index !== -1) {
                  isVideoSaved = true
                } else {
                  isVideoSaved = false
                }
                const saveBtnState = isVideoSaved ? 'Saved' : 'Save'

                const onClickToSaveVideo = () => {
                  videosAddToState({...videoDetails, savedStatus: true})
                  this.setState({isSaved: true})
                }

                return (
                  <SuccessDiv isLightThemeActive={isLightThemeActive}>
                    <ReactPlayer
                      width='100%'
                      height='60%'
                      url={videoDetails.videoUrl}
                      controls
                    />
                    <ParaVideoTitla isLightThemeActive={isLightThemeActive}>
                      {videoDetails.title}
                    </ParaVideoTitla>
                    <DivForTimeLikesSave width='100%'>
                      <DivForTimeLikesSave
                        isLightThemeActive={isLightThemeActive}
                        width='180px'
                      >
                        <p>
                          {videoDetails.viewCount} <span>views</span>
                        </p>
                        <p>{videoDetails.publishedAt}</p>
                      </DivForTimeLikesSave>
                      <DivForTimeLikesSave width='200px'>
                        <LikeButton
                          isLiked={activeButton === 'like'}
                          onClick={this.onClickToLike}
                          isLightThemeActive={isLightThemeActive}
                          width='50px'
                        >
                          <BiLike />
                          <p>Like</p>
                        </LikeButton>
                        <DislikeButton
                          isDisliked={activeButton === 'dislike'}
                          onClick={this.onClickToDislike}
                          isLightThemeActive={isLightThemeActive}
                          width='65px'
                        >
                          <BiDislike />
                          <p>Dislike</p>
                        </DislikeButton>
                        <Button
                          isSaved={isVideoSaved}
                          onClick={onClickToSaveVideo}
                          isLightThemeActive={isLightThemeActive}
                          width='60px'
                        >
                          <MdPlaylistAdd />
                          <p>{saveBtnState}</p>
                        </Button>
                      </DivForTimeLikesSave>
                    </DivForTimeLikesSave>
                    <HorizontaLine />
                    <DivForProfileAnddescription
                      isLightThemeActive={isLightThemeActive}
                    >
                      <Img
                        alt='channel logo'
                        src={videoDetails.profileImageUrl}
                      />
                      <Anddescription isLightThemeActive={isLightThemeActive}>
                        <p>{videoDetails.name}</p>
                        <p>
                          {videoDetails.subscriberCount}{' '}
                          <span>subscribers</span>
                        </p>
                        <p>{videoDetails.description}</p>
                      </Anddescription>
                    </DivForProfileAnddescription>
                  </SuccessDiv>
                )
              }}
            </ReactContext.Consumer>
          )

          const renderFailedView = () => {
            const failedImg = isLightThemeActive
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

            return (
              <DivForFailedView>
                <ThumbImg width='400px' src={failedImg} />
                <Hone isLightThemeActive={isLightThemeActive}>
                  Oops! Something Went Wrong
                </Hone>
                <Para
                  isLightThemeActive={isLightThemeActive}
                  bottomMargin='20px'
                  center='center'
                >
                  We are having some trouble to complete your request. <br />{' '}
                  Plase try again.
                </Para>
                <FailedButton
                  onClick={this.onClickToReFetchList}
                  width='100px'
                  marginTop
                  padding='10px'
                  bgColor='#4f46e5'
                  color='#ffffff'
                >
                  Retry
                </FailedButton>
              </DivForFailedView>
            )
          }

          const renderVideoDetailsStateView = () => {
            const {viewState} = this.state
            switch (viewState) {
              case stateStatus.loader:
                return <LoadingView />
              case stateStatus.success:
                return renderSuccessView()
              case stateStatus.failed:
                return renderFailedView()
              default:
                return null
            }
          }
          return (
            <div>
              <Header />
              <DivEachVideoConatiner
                data-testid='videoItemDetails'
                isLightThemeActive={isLightThemeActive}
              >
                <Div>
                  <MenuContainerComponent />
                  {renderVideoDetailsStateView()}
                </Div>
              </DivEachVideoConatiner>
            </div>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}
export default EachVideoDetails
