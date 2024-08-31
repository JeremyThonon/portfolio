import { ContentType } from '../../../shared/components/content/content.interfaces';

export const contents: ContentType[] = [
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
    decorative: true,
    paragraph: {
      text: '',
      display: false,
    },
    button: {
      text: '',
      display: false,
    },
  },
  {
    class: 'content work',
    id: 'work',
    span: {
      text: '03.',
      display: true,
    },
    title: {
      text: 'My works',
      display: true,
    },
    subtitle: {
      text: '',
      display: false,
    },
    decorative: true,
    paragraph: {
      text: '',
      display: false,
    },
    button: {
      text: '',
      display: false,
    },
  },
  {
    class: 'content contact',
    id: 'contact',
    span: {
      text: '04.',
      display: false,
    },
    title: {
      text: 'Get in touch',
      display: true,
    },
    subtitle: {
      text: 'Feel free to contact me',
      display: true,
    },
    decorative: false,
    paragraph: {
      text: 'This is a simple website created with Angular.',
      display: false,
    },
    button: {
      text: 'Email',
      display: true,
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
    company: '@Decathlon Belgium',
    content:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Quisquam, quos.',
  },
  {
    title: 'Logistics manager',
    date: '2016 - 2022',
    company: '@Agrifirm Belgium',
    content: 'lBOnjour les enfants',
  },
];
