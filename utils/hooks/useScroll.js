import { useState, useEffect } from 'react';

const useScroll = () => {
    const [scroll, setScroll] = useState({
        height: 0,
        isReachBottom: false,
    });

    useEffect(() => {
        const handleScroll = () => {
            const { body, documentElement: html } = document;
            const windowHeight = 'innerHeight' in window ? window.innerHeight : html.offsetHeight;
            const docHeight = Math.max(
                body.scrollHeight,
                body.offsetHeight,
                html.clientHeight,
                html.scrollHeight,
                html.offsetHeight
            );
            const windowBottom = windowHeight + window.pageYOffset + 300;

            if (windowBottom >= docHeight) {
                setScroll({
                    height: windowBottom,
                    isReachBottom: true,
                });
            } else {
                setScroll({
                    ...scroll,
                    isReachBottom: false,
                });
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return scroll;
};

export default useScroll;
