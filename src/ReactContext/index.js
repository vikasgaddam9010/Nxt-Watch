import React from 'react'

const ReactContext = React.createContext({
  isLightThemeActive: true,
  changeTheme: () => {},
  inputtextUpdateInContext: () => {},
  videosAddToState: () => {},
  changeStateToChangeCOfRoute: () => {},
  changeStateToChangeCOfTrendingRoute: () => {},
  changeStateToChangeCOfGamesRout: () => {},
  changeStateToChangeCOfSaveVideosRoute: () => {},
})

export default ReactContext
