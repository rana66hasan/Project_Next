"use client";
import { useEffect, useState } from "react";

function ScrollButton() {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY)
            setShow(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <div >
            {show &&
                <button onClick={scrollToTop}
                    className="fixed bottom-6 right-6 z-50 cursor-pointer bg-orange-75 text-white px-3 py-2 rounded-full shadow-lg hover:scale-110 transition">
                    ↑
                </button>
            }
        </div>
    );
}

export default ScrollButton;