import {defineThemeConfig} from 'vuepress-theme-plume'
import {zhNavbar} from './navbar'
import {zhNotes} from "./notes";

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'https://theme-plume.vuejs.press/plume.png',

  appearance: true,

  social: [
    {icon: 'github', link: '/'},
  ],

  locales: {
    '/': {
      profile: {
        avatar: 'https://theme-plume.vuejs.press/plume.png',
        name: 'Garlic Agents 文档',
        description: 'Garlic Agents 文档',
        // circle: true,
        // location: '',
        // organization: '',
      },

      navbar: zhNavbar,
      notes: zhNotes,
    },
  },
})
