import { useIntersectionObserver } from '../useIntersectionObserver';
import { CSSProperties, useEffect, useState } from 'react';
import { useTimeout } from '../useTimeout';
/*
  Draft
  Hook let you make initial animation
*/
type useTransitionState = CSSProperties | undefined;
type useTransitionProps = {
  initialStyle?: CSSProperties;
  delay?: number;
  fade?: boolean;
  type?: 'transition';
  direction?: 'top' | 'left' | 'right' | 'button';
};
type useTransitionType = (props?: useTransitionProps) => {
  style: useTransitionState;
};

const getStylesFromProps = (props?: useTransitionProps): CSSProperties => {
  if (!props) {
    return {
      transform: 'translateX(-500px)',
      opacity: 0,
      transition: '300ms',
    };
  }

  if (props.initialStyle) return props.initialStyle;

  const { delay = 300, type, direction, fade = false } = props;

  const result: CSSProperties = {
    transition: `opacity ${delay}ms ease-in 0s, transform ${delay}ms ease-out 0s`,
  };

  const transitionDirections = {
    right: 'translateX(-500px)',
    left: 'translateX(500px)',
    top: 'translateY(300px)',
    button: 'translateY(-300px)',
  };

  if (type === 'transition' && direction) {
    result.transform = transitionDirections[direction];
  }

  if (fade) result.opacity = 0;

  return result;
};

export const useTransition: useTransitionType = (props) => {
  const [style, setStyle] = useState<useTransitionState>(
    getStylesFromProps(props)
  );

  useTimeout(() => {
    setStyle({
      transition: 'opacity 320ms ease-in 0s, transform 300ms ease-out 0s',
    });
  });

  return { style };
};

const useTransition1 = () => {
  const { ref, observer } = useIntersectionObserver(() => {});
  useEffect(() => {});
};

export default useTransition;
