import { describe, it, expect, vi } from 'vitest';
import { renderHook } from '@testing-library/react-hooks';
import { useLazyLoad } from './index';

// Mock IntersectionObserver
class IntersectionObserver {
  observe = vi.fn();
  disconnect = vi.fn();
  unobserve = vi.fn();
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
});

Object.defineProperty(global, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
});

describe('useLazyLoad hook', () => {
  const emptySpace = document.createElement('div');
  // set height more than screen size for checking lazy loading for img
  emptySpace.setAttribute('style', 'display: block; height: 150vh');
  document.body.append(emptySpace);

  // create image which we will use
  const img = document.createElement('img');
  img.setAttribute(
    'src',
    'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg'
  );
  img.setAttribute('style', 'max-width: 100px; height: auto');
  document.body.append(img);

  const ref = {
    current: null as null | HTMLImageElement,
  };

  // get returns for simple test
  let hookReturn = [false, ref] as const;
  renderHook(() => {
    hookReturn = useLazyLoad();
  });

  console.log('hookReturn', hookReturn);

  it('check default value', () => {
    expect(hookReturn[0]).toBe(false);
    expect(hookReturn[1].current).toBe(null);
  });

  it('check ref', () => {
    ref.current = img;
    expect(hookReturn[1].current).toBe(img);
  });
});
