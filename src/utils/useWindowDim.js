import { useEffect, useState } from "react";


function useWindowDim() {
    const getDim = () => ({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const [windowDim, setWindowDim] = useState(getDim());

    useEffect(() => {
        const listner = () => setWindowDim(getDim());

        window.addEventListener("resize", listner);

        return () => {
            window.removeEventListener("resize", listner);
        };
    });

    return windowDim;
}

export default useWindowDim;
