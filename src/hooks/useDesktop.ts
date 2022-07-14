import {useEffect, useState} from 'react';

export const useDesktop = () => {
    const query = '(min-width: 768px)';
    let mediaQueryList = typeof window !== 'undefined' ? window.matchMedia(query) : null;
    const [matches,setMatches] = useState(mediaQueryList ? mediaQueryList.matches : false);
    useEffect(() => {
        const listener = (e:MediaQueryListEvent) => setMatches(e.matches);
        mediaQueryList.addEventListener('change',listener);
        return () => mediaQueryList.removeEventListener('change',listener);
    }
    ,[mediaQueryList]);
    return matches;
};
