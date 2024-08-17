import { ContentType } from '../../../shared/components/content/content.interfaces';

export const contents: ContentType[] = [
  {
    class: 'content introduction',
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
    span: {
      text: '',
      display: false,
    },
    title: {
      text: 'Section 2',
      display: true,
    },
    paragraph: {
      text: 'This is a simple website created with Angular.',
      display: true,
    },
    button: {
      text: 'Learn more',
      display: false,
    },
  },
  {
    class: 'content contact',
    span: {
      text: '',
      display: false,
    },
    title: {
      text: 'Section 3',
      display: true,
    },
    paragraph: {
      text: 'This is a simple website created with Angular.',
      display: true,
    },
    button: {
      text: 'Contact me',
      display: true,
    },
  },
];
