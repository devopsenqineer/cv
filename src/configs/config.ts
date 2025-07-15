export const siteConfig: {
  baseUrl: string;
  domain: string;
  author: string;
  author_surname: string;
  titlePrefix: string;
  profile_image: string;
  form_id: string;
  github_org_name: string;
  country: string;
  social: {
    kofi: string;
    sponsor: string;
    email: string;
    twitter: string;
    github: string;
    linkedin: string;
    blog: string;
    medium: string;
    dev: string;
    hashnode: string;
    discord: string;
    github_organisation: string;
    daily_dev: {
      username: string;
      card: string;
    };
    holopin: string;
    xing: {
      username: string;
    };
  };
  chatbot: {
    rateLimit: number;
  };
  contact: {
    debug: boolean;
    rateLimit: number;
  };
  other: {
    hacktoberfest: string;
    codsoft: string;
    github_snake: string;
  };
  metadata: {
    description: string;
    keywords: string;
    type: string;
  };
} = {
  baseUrl: 'https://cv.salad1n.dev',
  domain: 'cv.salad1n.dev',
  author: 'Karim El-Ayoubi',
  author_surname: 'El-Ayoubi',
  titlePrefix: 'Karim El-Ayoubi',
  github_org_name: 'devopsenqineer',
  country: 'Germany',
  profile_image: '/img/1724769043440.jpg',
  form_id: 'https://formspree.io/f/myzynpbr',
  social: {
    kofi: '',
    sponsor: '',
    email: '',
    twitter: '',
    github: '',
    linkedin: 'https://www.linkedin.com/in/karim-e-004725325/',
    blog: 'https://salad1n.dev/',
    medium: 'https://medium.com/@devopsenqineer',
    dev: '',
    hashnode: '',
    discord: "",
    github_organisation: "",
    daily_dev: {
      username: "",
      card: ""
    },
    holopin: "",
    xing: {
      username: 'https://www.xing.com/profile/Karim_ElAyoubi/web_profiles'
    },
  },
  metadata: {
    description: `Hi! I'm Karim El-Ayoubi , a devops engineer passionate about deploying apps, exploring AI and ML, and collaborating on exciting projects. Let's connect!`,
    keywords:
      'Karim El-Ayoubi, DevOps Engineer, Karim El-Ayoubi portfolio, Karim El-Ayoubi GitHub, Web Development, Mobile Applications, Machine Learning, Artificial Intelligence, Programming Languages, Open Source Developer, App Development',
    type: 'website'
  },
  chatbot: {
    rateLimit: 10
  },
  contact: {
    debug: true,
    rateLimit: 10
  },

  other: {
    hacktoberfest: '',
    codsoft: '',
    github_snake: ''
  },

};
