import PROJECTS_JSON from '../projects.json'

export const PROJECTS = PROJECTS_JSON
export const NPM_UID = 'surmon'
export const GITHUB_UID = 'surmon-china'
export const GITHUB_PROJECT_NAME = 'surmon-china.github.io'
export const GITHUB_PAGES_ROOT_DOMAIN = 'surmon.me'
export const GITHUB_USER_URL = `https://github.com/${GITHUB_UID}`
export const GITHUB_SPONSORS_URL = `https://github.com/sponsors/${GITHUB_UID}`
export const IMAGE_AD = { image: '', url: '' }
export const SWIPER_ADS = [{ image: '', url: '' }]

// https://www.jsdelivr.com/github
export const CDN_PREFIX = `https://cdn.jsdelivr.net/gh/${GITHUB_UID}/${GITHUB_PROJECT_NAME}@release/`
export const V1_LEGACY_URL = 'https://v1.github.surmon.me/'
export const getLegacyURL = (route: string) => `${V1_LEGACY_URL}${route}`

export const GOOGLE_ADSENSE_CLIENT = 'ca-pub-4710915636313788'

export const APP_META = {
  title: `Surmon's open-source projects`,
  description: `Surmon's GitHub repository pages.`,
  keywords: [GITHUB_UID, ...Object.values(PROJECTS_JSON).map((p) => p.repository)].join(',')
}
