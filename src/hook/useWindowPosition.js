import { useLayoutEffect, useState } from "react";

export default function useWindowPosition(id) {
    const [animation, setAnimation] = useState(false);

    useLayoutEffect(() => {
        function updatePosition() {
            const element = window.document.getElementById(id);
            if (!element) {
                console.error(`Element with id ${id} not found`);
                return;
            }
            const offsetSetTop = element.offsetTop;
            const offsetSetHeight = element.offsetHeight;
            console.log(`Scroll position: ${window.scrollY}, Element top: ${offsetSetTop}, Element height: ${offsetSetHeight}`);
            if (window.scrollY > offsetSetTop - window.innerHeight + offsetSetHeight * 0.3) {
                console.log(`Element ${id} is in view`);
                setAnimation(true);
            } else {
                console.log(`Element ${id} is not in view`);
            }
        }
        window.addEventListener('scroll', updatePosition);
        updatePosition();
        return () => window.removeEventListener('scroll', updatePosition);
    }, [id]);
    return animation;
}