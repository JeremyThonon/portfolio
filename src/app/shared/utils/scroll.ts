export const scrollToContent = (id: string): void => {
  const targetId = id.split('#')[1];
  const element = document.getElementById(targetId);

  element?.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'nearest',
  });
};
