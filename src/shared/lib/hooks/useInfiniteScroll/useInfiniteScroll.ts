import { MutableRefObject, useEffect } from 'react';

export interface UseInfiniteScrollProps {
callback?: ()=>void;
triggerRef: MutableRefObject<HTMLElement>;
wrapperRef: MutableRefObject<HTMLElement>;

}

// export function useInfiniteScroll({ callback, triggerRef, wrapperRef }:UseInfiniteScrollProps) {
//     const observer = useRef<IntersectionObserver | null>(null);

//     useEffect(() => {
//         const wrapperElement = wrapperRef.current;
//         const triggerElement = triggerRef.current;

//         if (callback) {
//             const options = {
//                 root: wrapperElement,
//                 rootMargin: '0px',
//                 threshold: 1.0,
//             };

//             observer.current = new IntersectionObserver(([entry]) => {
//                 if (entry.isIntersecting) {
//                     callback();
//                 }
//             }, options);

//             observer.current.observe(triggerElement);
//         }

//         return () => {
//             if (observer.current && triggerElement) {
//                 // eslint-disable-next-line react-hooks/exhaustive-deps
//                 observer.current.unobserve(triggerElement);
//             }
//         };
//     }, [callback, triggerRef, wrapperRef]);
// }

/// /сравнить с верхней функцией с константами

export function useInfiniteScroll({ callback, triggerRef, wrapperRef }:UseInfiniteScrollProps) {
    useEffect(() => {
        const wrapperElement = wrapperRef.current;
        const triggerElement = triggerRef.current;
        let observer: IntersectionObserver | null = null;
        if (callback) {
            const options = {
                root: wrapperElement,
                rootMargin: '0px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);
            observer.observe(triggerElement);
        }

        return () => {
            if (observer && triggerElement) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(triggerElement);
            }
        };
    }, [triggerRef, wrapperRef, callback]);
}
