export const state = () => ({})

export const getters = {
  getImageSize(state) {
    return (imageFileName) => {
      return state[imageFileName]
    }
  },
}

export const actions = {
  async nuxtServerInit({ state }, { $content }) {
    if (process.server) {
      const getSize = require('image-size')
      const contents = await $content('projects').fetch()
      const path = require('path')
      for (const content of contents) {
        if (content.image) {
          const file = content.image
          const size = getSize(path.join('./static/', file))
          state[file] = {
            width: size.width,
            height: size.height,
          }
        }
      }
    }
  },
}
