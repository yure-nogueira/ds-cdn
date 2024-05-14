import gsap from "gsap";
export function fadein(target, delay = 0, stagger = 0, duration = 300) {
    return gsap.fromTo(target, { opacity: 0 }, {
        opacity: 1,
        ease: 'power1.inOut',
        duration: duration / 1000,
        delay: delay / 1000,
        stagger: stagger / 1000,
    });
}
export function slideup(target, delay = 0, stagger = 0, duration = 300) {
    return gsap.fromTo(target, { opacity: 0, y: 60 }, {
        opacity: 1,
        y: 0,
        ease: 'power1.inOut',
        duration: duration / 1000,
        delay: delay / 1000,
        stagger: stagger / 1000,
    });
}
export function slideleft(target, delay = 0, stagger = 0, duration = 300) {
    return gsap.fromTo(target, { opacity: 0, x: 60 }, {
        opacity: 1,
        x: 0,
        ease: 'power1.inOut',
        duration: duration / 1000,
        delay: delay / 1000,
        stagger: stagger / 1000,
    });
}
export function slideright(target, delay = 0, stagger = 0, duration = 300) {
    return gsap.fromTo(target, { opacity: 0, x: -60 }, {
        opacity: 1,
        x: 0,
        ease: 'power1.inOut',
        duration: duration / 1000,
        delay: delay / 1000,
        stagger: stagger / 1000,
    });
}
//# sourceMappingURL=group-animation.helper.js.map
