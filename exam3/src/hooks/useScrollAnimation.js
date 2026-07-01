import { useEffect, useRef } from 'react';

/**
 * Hook to trigger animations when elements come into view
 * @param {Object} options - Intersection Observer options
 * @returns {Object} - ref and className to apply to animated elements
 */
export const useScrollAnimation = (options = {}) => {
    const ref = useRef(null);
    const defaultOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
        ...options,
    };

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        }, defaultOptions);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [defaultOptions]);

    return ref;
};

/**
 * Hook to trigger staggered animations for multiple elements
 * @param {number} itemCount - Number of items to animate
 * @param {Object} options - Intersection Observer options
 * @returns {Object} - ref, className, and getItemClassName function
 */
export const useStaggerAnimation = (itemCount = 0, options = {}) => {
    const ref = useRef(null);
    const defaultOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        ...options,
    };

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        }, defaultOptions);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [defaultOptions]);

    const getItemClassName = (index) => `stagger-${(index % 5) + 1}`;

    return { ref, getItemClassName };
};

export default useScrollAnimation;
