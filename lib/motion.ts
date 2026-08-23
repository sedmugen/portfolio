export const transitions = {
  default: {
    duration: 0.4,
    ease: [0.25, 0.1, 0.25, 1], // ease-out curve
  },
  slow: {
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1],
  },
  fast: {
    duration: 0.2,
    ease: [0.25, 0.1, 0.25, 1],
  },
  pageTransition: {
    duration: 0.28,
    ease: [0.25, 0.1, 0.25, 1],
  },
} as const;

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitions.default,
  },
};

export const pageTransitionVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: transitions.pageTransition,
  },
};

export const scrollRevealVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.default,
  },
};

export const cardHoverVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: transitions.fast,
  },
};
