import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const fadeInUp = (element, delay = 0) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 60,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    }
  );
};

export const fadeIn = (element, delay = 0) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    }
  );
};

export const slideInLeft = (element, delay = 0) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      x: -80,
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    }
  );
};

export const slideInRight = (element, delay = 0) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      x: 80,
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    }
  );
};

export const staggerFadeInUp = (elements, staggerDelay = 0.1) => {
  gsap.fromTo(
    elements,
    {
      opacity: 0,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: staggerDelay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: elements[0],
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    }
  );
};

export const scaleIn = (element, delay = 0) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      scale: 0.8,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 0.7,
      delay,
      ease: 'back.out(1.2)',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    }
  );
};
