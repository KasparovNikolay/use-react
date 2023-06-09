import { MouseEvent } from 'react';

export const scrollToAnchorById =
  <T = HTMLAnchorElement>(id: string) =>
  (event: MouseEvent<T>) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
