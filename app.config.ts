export default defineAppConfig({
  docus: {
    title: 'Docus',
    description: 'My Docus Project',
    url: 'http://docus.dev',
    image: '/social-card-preview.png',
    socials: {
      twitter: '@nuxt_js',
      github: 'nuxt-themes/docus',
    },
    github: {
      root: 'content',
      edit: true,
      contributors: false
    },
    layout: 'default',
    aside: {
      level: 1,
      filter: [],
    },
    header: {
      title: false,
      logo: true,
      showLinkIcon: false
    },
    footer: {
      credits: {
        icon: 'IconDocus',
        text: 'Powered by Docus',
        href: 'https://docus.dev',
      },
      textLinks: [
        {
          text: 'Nuxt',
          href: 'https://nuxt.com',
          target: '_blank',
          rel: 'noopener'
        }
      ],
      iconLinks: [
        {
          label: 'NuxtJS',
          href: 'https://nuxtjs.org',
          component: 'IconNuxtLabs',
        },
        {
          label: 'Vue Telescope',
          href: 'https://vuetelescope.com',
          component: 'IconVueTelescope',
        },
      ],
    }
  }
})


function defineAppConfig(arg0: { docus: { title: string; description: string; url: string; image: string; socials: { twitter: string; github: string; }; github: { root: string; edit: boolean; contributors: boolean; }; layout: string; aside: { level: number; filter: undefined[]; }; header: { title: boolean; logo: boolean; showLinkIcon: boolean; }; footer: { credits: { icon: string; text: string; href: string; }; textLinks: { text: string; href: string; target: string; rel: string; }[]; iconLinks: { label: string; href: string; component: string; }[]; }; }; }) {
throw new Error("Function not implemented.");
}
