import type { SiteRecipe } from '@/design/factory/recipe-types'

export const SITE_RECIPE: SiteRecipe = {
  productFamily: 'visual',
  themePack: 'pinterest-creator',
  homepageTemplate: 'image-profile-home',
  navbarTemplate: 'floating-bar',
  footerTemplate: 'dense-footer',
  motionPack: 'studio-stagger',
  primaryTask: 'image',
  enabledTasks: ['image', 'profile'],
  taskTemplates: {
    image: 'image-masonry',
    profile: 'profile-creator',
  },
  manualOverrides: {
    navbar: false,
    footer: false,
    homePage: false,
    taskListPage: false,
    taskDetailPage: false,
    taskCard: false,
    contactPage: false,
    loginPage: false,
    registerPage: false,
  },
}
