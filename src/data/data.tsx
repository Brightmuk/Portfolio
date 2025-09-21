import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  ProjectItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Bright Mukonesi',
  description: "Hello, I'm Bright a Software Engineer",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Project: 'project',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: '',
  name: `I'm Bright Mukonesi`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Victoria based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Instant Domains</strong> helping build a modern, mobile-first, domain
        registrar and site builder.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Muay Thai</strong>,
        plucking my <strong className="text-stone-100">banjo</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Vancouver Island</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: '/images/profilepic.png',
  description: `My journey in software development began at Moringa School, 
  where I gained a strong foundation in full-stack development. 
  Over the years, I have honed my skills in UI/UX and frontend development using 
  technologies such as Flutter for cross-platform development JavaScript and ReactJS. 
  I have also worked extensively with NoSQL and SQL databases and APIs, ensuring seamless integration
   and data management in the applications I build.`,
  aboutItems: [
    {label: 'Location', text: 'Nairobi, Kenya', Icon: MapIcon},
    {label: 'Nationality', text: 'Kenyan', Icon: FlagIcon},
    {label: 'Interests', text: 'Car enthusiast, Basketball, Dog lover ', Icon: SparklesIcon},
    {label: 'Study', text: 'KCA University | Moringa School', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [

  {
    name: 'Frontend development',
    skills: [
      {
        name: 'Flutter',
        level: 9,
      },
      {
        name: 'Dart',
        level: 8,
      },
      {
        name: 'Javascript',
        level: 7,
      },
      {
        name: 'ReactJS',
        level: 6,
      },

      {
        name: 'SwiftUI',
        level: 4,
      },

    ],
  },
  {
    name: 'Experience in Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 7,
      },
      {
        name: 'Firebase',
        level: 5,
      },
      {
        name: 'Python',
        level: 5,
      },
    ],
  },

];

/**
 * Project section
 */
export const projectItems: ProjectItem[] = [
  {
    title: 'FlipIQ',
    description: 'The ultimate flashcards memorization app built with AI-powered learning',
    url: 'https://play.google.com/store/apps/details?id=com.bright.flashcards',
    image: '/images/project/project-1.jpg',
  },
  {
    title: 'KCA Timetables',
    description: 'Timetable viewing app for KCA University',
    url: 'https://play.google.com/store/apps/details?id=com.brightdesigns.kcatimetables',
    image: '/images/project/project-2.jpg',
  },
  {
    title: 'Expenditure buddy',
    description: 'Calculate your planned expenditure at ease',
    url: 'https://reactresume.com',
    image: '/images/project/project-3.jpg',
  },
  {
    title: 'SakaHapa',
    description: 'Where buyers saveand sellers sell more',
    url: 'https://sakahapa.com/',
    image: '/images/project/project-4.jpg',
  },
  {
    title: 'Wecanrush Inc',
    description: 'Wecancrush is a service that allows businesses to request courier/pickup services directly from independent contractors.',
    url: 'https://wecanrush.com/',
    image: '/images/project/project-5.jpg',
  },
  {
    title: 'Coming soon',
    description: 'Something amazing is under construction',
    url: 'https://brightmuk.com',
    image: '/images/project/project-6.jpg',
  },
  {
    title: 'Coming soon',
    description: 'Something beautiful is in creation',
    url: 'https://brightmuk.com',
    image: '/images/project/project-7.jpg',
  },


];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2021 MAY -  NOV 2024',
    location: 'KCA University',
    title: 'Bachelors Degree in  Applied Computing: Software development',
    content: <p>Software Engineering principles, programming fundamentals, Data structures and Algorithims, OOP, Databases</p>,
  },
  {
    date: 'MARCH 2019 - AUGUST 2019',
    location: 'Moringa School',
    title: 'Certificate in Fullstack Development',
    content: <p>How to teach yourself anything, Fullstack Development, Linux, IDEs, Version control, Teamwork and soft skills</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'SEPT 2024 - Present',
    location: 'InterIntel Technologies',
    title: 'Lead Flutter Engineer',
    content: (
      <p>
        Developing UI and Ux of the core applications
      </p>
    ),
  },
  {
    date: 'MARCH 2020 - AUGUST 2024',
    location: 'SakaHapa Technologies',
    title: 'CTo and Co-founder',
    content: (
           <ul>
      <li>- Co-founded Sakahapa Technologies and led the technology strategy, directing technology stack decisions and software architecture.</li>
      <li>- Designed, developed, and maintained mobile applications for both Android and iOS platforms.</li>
      <li>- Managed the deployment of applications to Google Play Store and Apple App Store</li>
      </ul>
    ),
  },
    {
    date: 'AUGUST 2021 - APRIL 2024,',
    location: 'Ritzy Technologies',
    title: 'Freelance Flutter developer',
    content: (
      <ul>
      <li>- Developed and deployed the front end of key applications, including the Rush courier app (User and Driver apps) and Rentvec, a vehicle renting application.</li>
      <li>- Excercised problem solving skills to create a product linking drivers & users</li>
      <li>- Collaborated with cross-functional teams to integrate frontend features with backend services.</li>
      </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: '',
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Reach out to me on my available channels for a quick response',
  items: [
    {
      type: ContactType.Email,
      text: 'info@brightmuk.com',
      href: 'mailto:info@brightmuk.com',
    },
    {
      type: ContactType.Location,
      text: 'Nairobi, Kenya',
      href: 'https://maps.app.goo.gl/RGC54WX7ZcqDbsmt8',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Bright',
      href: 'https://www.linkedin.com/in/brightmukonesi',
    },
    {
      type: ContactType.Github,
      text: 'Brightmuk',
      href: 'https://github.com/Brightmuk',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Brightmuk'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/12264865/bright'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/brightmukonesi'},
 
  
];
