import { LinkType } from './menu.interface';

export const links: LinkType[] = [
  {
    index: '01.',
    label: 'About',
    id: '#about',
  },
  {
    index: '02.',
    label: 'Work',
    id: '#work',
  },
  {
    index: '03.',
    label: 'Contact',
    id: '#contact',
  },
];

export const scrollToContent = (id: string): void => {
  const targetId = id.split('#')[1];
  const element = document.getElementById(targetId);

  element?.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'nearest',
  });
};
