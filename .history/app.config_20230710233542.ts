

export default defineAppConfig({
  docus: {
    title: 'Docus',
    description: 'The best place to start your documentation.',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      twitter: 'nuxt_js',
      github: 'nuxt-themes/docus',
      nuxt: {
        label: 'Nuxt',
        icon: 'simple-icons:nuxtdotjs',
        href: 'https://nuxt.com'
      }
    },
    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'docus',
      owner: 'nuxt-themes',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    }
  }
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function defineAppConfig(_arg0: { docus: { title: string; description: string; image: string; socials: { twitter: string; github: string; nuxt: { label: string; icon: string; href: string; }; }; github: { dir: string; branch: string; repo: string; owner: string; edit: boolean; }; aside: { level: number; collapsed: boolean; exclude: undefined[]; }; main: { padded: boolean; fluid: boolean; }; header: { logo: boolean; showLinkIcon: boolean; exclude: undefined[]; fluid: boolean; }; }; }) {
throw new Error("Function not implemented.");
}
