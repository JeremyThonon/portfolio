import { Content } from '../../../shared/components/content/content';

export const contents: Content[] = [
  {
    class: 'content introduction',
    id: 'intro',
    span: {
      text: 'Hi, my name is',
      display: true,
    },
    title: {
      text: 'Jérémy Thonon.',
      display: true,
    },
    subtitle: {
      text: 'I build things for the web.',
      display: true,
    },
    decorative: false,
    paragraph: {
      text: 'I’m a frontend engineer specializing in designing & building exceptional digital experiences.<br> I am focused building accessible and dynamic digital experience at <a href="https://www.decathlon.be" target="_blank">Decathlon Belgium</a>',
      display: true,
    },
    button: {
      text: 'About me',
      display: true,
      href: '',
    },
  },
  {
    class: 'content about',
    id: 'about',
    span: {
      text: '01.',
      display: true,
    },
    title: {
      text: 'About me',
      display: true,
    },
    subtitle: {
      text: '',
      display: false,
    },
    decorative: true,
    paragraph: {
      text: 'Hello! My name is Jeremy and I enjoy creating things that live on the internet. My interest in web development started back in 2021 when I decided learn Python and Javascript programming languages on EDX platform — Writing some lines of code to made a remake of Mario pyramids ! Fast-forward to today, and I’ve had the privilege of working at an international sport agency, a huge and dynamic corporation. My main focus these days is to improve my backend development skills, be curious about new technologies and best practices. I also recently started to learn more about Rust and Typescript programming languages. Here are a few technologies I’ve been working with recently:',
      display: true,
    },
    button: {
      text: 'Learn more',
      display: false,
      href: '',
    },
  },
  {
    class: 'content experience',
    id: 'experience',
    span: {
      text: '02.',
      display: true,
    },
    title: {
      text: 'Where I’ve worked',
      display: true,
    },
    subtitle: {
      text: '',
      display: false,
    },
    decorative: false,
    paragraph: {
      text: '',
      display: false,
    },
    button: {
      text: '',
      display: false,
      href: '',
    },
  },
  // {
  //   class: 'content work',
  //   id: 'work',
  //   span: {
  //     text: '03.',
  //     display: true,
  //   },
  //   title: {
  //     text: 'My works',
  //     display: true,
  //   },
  //   subtitle: {
  //     text: '',
  //     display: false,
  //   },
  //   decorative: true,
  //   paragraph: {
  //     text: '',
  //     display: false,
  //   },
  //   button: {
  //     text: '',
  //     display: false,
  //     href: '',
  //   },
  // },
  {
    class: 'content contact',
    id: 'contact',
    span: {
      text: '03.',
      display: true,
    },
    title: {
      text: 'Get in touch',
      display: true,
    },
    subtitle: {
      text: 'Feel free to send me an email if you find an interesting project to work together on.',
      display: false,
    },
    decorative: false,
    paragraph: {
      text: 'Feel free to send me an email if you find an interesting project to work together on !',
      display: true,
    },
    button: {
      text: 'Email',
      display: true,
      href: 'mailto:jeremythonon96@hotmail.com',
    },
  },
];

export const programmingLanguages = [
  ['Javascript (ES6+)', 'Typescript', 'Svelte.js'],
  ['Angular', 'Node.js', 'Express.js'],
];

export const experiences = [
  {
    title: 'Front-end developer',
    date: 'Since 2023 - present',
    company: 'Decathlon',
    content: [
      'Use of Svelte.js, Tailwind CSS and Decathlon’s in-house design system to develop responsive and consistent user interfaces',
      'Implementation of unit tests with Jest to guarantee the reliability of the front-end code',
      'Route management with Express/Node.js to ensure a robust back-end architecture',
      'Integration and management of an internal CMS based on Strapi to facilitate content management and component structure',
      'Participation in bi-weekly meetings to plan sprints and daily stand-up meetings to share daily stand-up meetings to share progress and resolve problems',
      'Weekly rotation of the ‘Dev of the Week’ who is responsible for production start-up and emergency management',
    ],
  },
  {
    title: 'Logistics manager',
    date: '2016 - 2022',
    company: 'Agrifirm',
    content: [
      'Transport planning, including deliveries to customers, orders to suppliers, loading of barges for overseas destinations and collection of cereals from the field during harvest',
      'Warehouse stock management',
      'Logistics incident management',
      'Quality control of incoming goods (fertilisers, cereals, animal feed, plant protection products)',
      'Planning and distribution of tasks between the various teams on site',
      'Management of staff rotation according to holidays, which is particularly important and difficult during the harvest period, requiring a potential presence on site day and night',
      'Customer service and order processing',
      'Maintenance of handling vehicles',
      'Manufacture of various bulk mixes to order (fertilisers, animal feed) in accordance with GMP standards',
      'Maintaining the cleanliness and organisation of the storage site in accordance with GMP standards',
    ],
  },
];
