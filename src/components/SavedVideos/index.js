import {formatDistanceToNow} from 'date-fns'
import {HiFire} from 'react-icons/hi'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Header from '../Header'

import MenuContainerComponent from '../MenuContainer'

import {
  Div,
  DivForZeroList,
  Img,
  DivForVideos,
  DivForSavedHead,
  UnorderList,
  ListItem,
  Head,
} from './StyledComponents'

import ReactContext from '../../ReactContext'

const LinkStyled = styled(Link)`
  color: ${props => (props.isLightThemeActive ? '#000000' : 'black')};
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

const SavedVideos = () => (
  <ReactContext.Consumer>
    {value => {
      const {savedVideoslist, isLightThemeActive} = value

      const getNoVideosView = () => (
        <DivForZeroList isLightThemeActive={isLightThemeActive}>
          <Img
            width="550px"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <h1>No Saved Videos Found</h1>
          <p>You can save your videos while watching them</p>
        </DivForZeroList>
      )
      const getVideosListView = () => (
        <DivForVideos>
          <DivForSavedHead isLightThemeActive={isLightThemeActive}>
            <Styled isLightThemeActive={isLightThemeActive} />{' '}
            <h1>Saved Videos</h1>
          </DivForSavedHead>
          <UnorderList isLightThemeActive={isLightThemeActive}>
            {savedVideoslist.map(eachSavedVideo => (
              <ListItem key={eachSavedVideo.id}>
                <LinkStyled
                  isLightThemeActive={isLightThemeActive}
                  to={`/videos/${eachSavedVideo.id}`}
                >
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
                      <span>
                        {eachSavedVideo.publishedAt}
                      </span>
                    </p>
                  </div>
                </LinkStyled>
              </ListItem>
            ))}
          </UnorderList>
        </DivForVideos>
      )
      return (
        <div>
          <Header />
          <Div
            data-testid="savedVideos"
            isLightThemeActive={isLightThemeActive}
          >
            <MenuContainerComponent />
            {savedVideoslist.length === 0
              ? getNoVideosView()
              : getVideosListView()}
          </Div>
        </div>
      )
    }}
  </ReactContext.Consumer>
)

export default SavedVideos
