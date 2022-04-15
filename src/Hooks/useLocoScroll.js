import { useEffect } from "react";
import locomotiveScroll from "locomotive-scroll";
import '../styles/locomotive/locomotive-scroll.css'

// import "locomotive-scroll/src/locomotive-scroll.scss"

export default function useLocoScroll(start){
    useEffect(()=>{
        if(!start) return;
        const scrollEl = document.querySelector('#main-container')
        const locoScroll = new locomotiveScroll({
            el: scrollEl,
            smooth: true,
            multiplier: 1,
            class:'is-reveal'

        })
    }, [start])
}