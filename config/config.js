
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Amritesh",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    },
    {
      title: "Blog",
      link: "https://medium.com/@ammriteshh",
    }
  ],
}
export const intro = {
  title: "Hey, I'm Amritesh Singh",
  description: "A Passionate Full Stack Web Developer and problem solver with a keen interest in exploring the tech world and continuously learning new technologies.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "https://drive.google.com/drive/u/0/my-drive",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who I am",
  description: [
    "I am an undergraduate Computer Science student at Lovely Professional University, is passionate about technology and software development.",
    "With experience in Web and Mobile Testing using Selenium, Amritesh is also a skilled problem solver in Data Structures and Algorithms (DSA), continuously working to enhance programming and development skills.",
  ],
}

export const work = {
  title: "What I do",
  cards: [
    {
      title: "Problem Solver",
      description: "I have a strong background in solving algorithmic puzzles on LeetCode (DSA).",
      icons: null,
    },
    {
      title: "Web Development",
      description: "I create responsive static websites using Reactjs.",
      icons: null,
    }
  ],
}

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "QR Code Generator",
      description: "A QR Code Generator using HTML and CSS.",
      icons: [
        {
          // icon: faAppStore,
          // link: "https://apps.apple.com/us/app/starbook-journal-ai-diary/id1552418289",
        },
        {
          icon: faGithub,
          link: "https://github.com/amritesh0381/QR-Code-Generator",
        },
      ]
    },
    {
      title: "Random Password Generator",
      description: "A Random Password Generator which creates random passwords to help users.",
      icons: [
        {
          // icon: faAppStore,
          // link: "https://apps.apple.com/us/app/qurantalk/id1563425149",
        },
        {
          icon: faGooglePlay,
          link: "https://github.com/amritesh0381/Random-Password-Generator",
        },
      ]
    },
    {
      title: "Portfolio",
      description: "A portfolio website template that helps me showcase my work, projects and skills as a software developer and Problem Solver.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/hashirshoaeb/portfolio",
        },
      ]
    },
  ],
}

export const contact = {
  title: "Get in touch",
  description: "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at hashirshoaeb@gmail.com.",
  buttons: [
    {
      title: "Email Me",
      link: "amritesh6767@gmail.com",
      isPrimary: true,
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/amriteshsingh1077/",
      isPrimary: false,
    },
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Amritesh Singh | Computer Engineer | Web Developer | Problem Solver",
  description: "I create mobile apps and static websites. I graduated from National University of Sciences and Technology (NUST) in 2020 with a degree in Computer Engineering.",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "@ammriteshh",
  description: "Computer Engineer | Web Developer | Problem Solver",
  cards: [
    {
      title: "My website",
      link: "https://hashirshoaeb.com/",
    },
    {
      title: "LeetCode",
      link: "https://leetcode.com/u/amriteshsingh0381/",
    },
    {
      title: "Email",
      link: "amritesh6767@gmail.com",
    },
    {
      title: "My GitHub",
      link: "https://github.com/amritesh0381",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/amriteshsingh1077/",
    },
  ]
}