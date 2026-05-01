// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'maxyakubovskyi', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: '', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['MaxMorfiX/APatch-OTA-survival', 'MaxMorfiX/android_kernel_xiaomi_sdm710', 'MaxMorfiX/antipipisabot'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Spread',
          description:
            'A simple multiplayer strategy game about taking over the oponents field',
          imageUrl:
            'https://img.itch.zone/aW1nLzEyMzY4MTkxLnBuZw==/315x250%23c/%2FV0OFF.png',
          link: 'https://maxmorfix.itch.io/spread',
        },
        {
          title: 'Gravity Simulation',
          description:
            'Gravitation field simulation written in pure JS',
          imageUrl:
            'https://i.imgur.com/4gOmaPJ.png',
          link: 'https://maxmorfix.github.io/gravity/new/gravity.html',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Ariful Alam', description: '', imageURL: '' },
  social: {
    linkedin: 'мах-yakubovskiy-128769407',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: 'MaxMorfiX', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
//    medium: 'arifszn',
//    dev: 'arifszn',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: 'MaxMorfiX',
//    website: 'https://www.arifszn.com',
    phone: '',
    email: 'maxmorfix@gmail.com',
  },
//  resume: {
//    fileUrl:
//      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
//  },
  skills: [
    'JavaScript',
    'HTML',
    'CSS',
    'Python',
    'Godot/gdscript',
    'Unity/C#',
    'Git',
    'Node.js',
    'Rust',
    'MySQL',
    'PHP',
    '...and more!'
  ],
  experiences: [
    {
      company: 'Visualization Research Center (VISUS) at the Stuttgart University (VISUS)',
      position: 'Intership',
      from: 'April 2026',
      to: 'one week',
      companyLink: 'https://www.visus.uni-stuttgart.de/en/',
    },
//    {
//      company: 'Company Name',
//      position: 'Position',
//      from: 'July 2019',
//      to: 'August 2021',
//      companyLink: 'https://example.com',
//    },
//  ],
//  certifications: [
//    {
//      name: 'Lorem ipsum',
//      body: 'Lorem ipsum dolor sit amet',
//      year: 'March 2022',
//      link: 'https://example.com',
//    },
  ],
  educations: [
    {
      institution: '10th grade',
      degree: 'Wirtemberg Gymnasium (Stuttgart)',
      from: '2022',
      to: 'now',
    },
    {
      institution: '11th grade',
      degree: 'Kharkiv Lyceum № 155 of the Kharkiv City Council (Kharkiv)',
      from: '2015',
      to: 'now',
    },
  ],
 publications: [
   {
     title: 'ANALYSIS OF BEARING VIBRATION SIGNALS USING THE RMS METHOD',
     conferenceName: 'Municipal Institution “Kharkiv Lyceum № 155 of the Kharkiv City Council”, Kharkiv 2, \n\
National Technical University “Kharkiv Polytechnic Institute”, Kharkiv 1\n\n',
     journalName: '',
     authors: 'Dmytro V. Cherkashyn, Maksym D. Yakubovskyi, Serhii O. Hubskyi, Andrii V. Yavtushenko, Yurii V. Babay',
     link: 'https://znp.nuos.mk.ua/archives/2025/4/12.pdf',
     description:
       'The aim of this work is the development and experimental investigation of a measurement test bench for vibration diagnostics of rolling bearings based on the analysis of vibration signals using the root mean square (RMS) value. The study focuses on enabling early detection of bearing defects and improving the reliability of rotating components in industrial equipment within the framework of Industry 4.0 approaches.',
   },
 ],
  // Display articles from your medium or dev account. (Optional)
//  blog: {
//    source: 'dev', // medium | dev
//    username: 'arifszn', // to hide blog section, keep it empty
//    limit: 2, // How many articles to display. Max is 10.
//  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
