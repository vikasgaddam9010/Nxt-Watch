import Loader from 'react-loader-spinner'

import {Div} from './StyledComponents'

const LoadingView = () => (
  <Div data-testid="loader">
    <Loader type="ThreeDots" color="blue" height="50" width="50" />
  </Div>
)

export default LoadingView
