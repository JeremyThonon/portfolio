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
      text: 'Jérémy Thonon',
      display: true,
    },
    paragraph: {
      text: 'As a passionate front-end developer, I thrive in an environment where my passion for development comes into its own. My commitment to technical excellence is reflected in each of my projects, translating into a focus on best practices, guaranteeing robust and sustainable solutions.In the near future, my ambition is to improve my skills in backend development, seeking new challenges and opportunities to broaden my technical skills.',
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
    paragraph: {
      text: 'This is a simple website created with Angular.',
      display: false,
    },
    button: {
      text: 'Learn more',
      display: false,
    },
  },
  {
    class: 'content work',
    id: 'work',
    span: {
      text: '02.',
      display: true,
    },
    title: {
      text: 'My works',
      display: true,
    },
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
      text: '03.',
      display: true,
    },
    title: {
      text: 'Contact',
      display: true,
    },
    paragraph: {
      text: 'This is a simple website created with Angular.',
      display: false,
    },
    button: {
      text: 'Contact me',
      display: false,
    },
  },
];
