import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const animationCss = ".sc-tp-animation-h{display:inline-block;position:relative}";
const TpAnimationStyle0 = animationCss;

const TpAnimation$1 = /*@__PURE__*/ proxyCustomElement(class TpAnimation extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        // refaz a animação sempre que scrolla para baixo...
        this.previousY = 0;
        this.previousRatio = 0;
        this.scrollTrigger = false;
        this.selector = undefined;
        this.animation = 'fadein';
        this.delay = 0;
        this.played = false;
    }
    componentWillLoad() {
        this.ionContent = document.querySelector('ion-content');
        console.log(this.ionContent);
        if (this.scrollTrigger) {
            console.log('this.scrollTrigger.............');
            this.setupObserver();
        }
        else {
            // dar a opção de passar um elemento para fazer a animação, tipo o selector do stagger???
            this.executeAnimations();
        }
    }
    disconnectedCallback() {
        this.observer.disconnect();
    }
    setupObserver() {
        this.observer = new IntersectionObserver(this.onObserverTriggered.bind(this), {
            root: this.ionContent,
            rootMargin: '0% 0% -20% 0%',
            threshold: 0,
        });
        this.observer.observe(this.host);
    }
    onObserverTriggered(entries) {
        // // const [entry, ...] = entries;
        if (entries[0].isIntersecting && !this.played) {
            this.executeAnimations();
            this.played = true;
        }
        // entries.forEach((entry) => {
        //   console.log(entry);
        //   if (this.played) return;
        //   const currentY = entry.boundingClientRect.y;
        //   const currentRatio = entry.intersectionRatio;
        //   const isIntersecting = entry.isIntersecting;
        //   // Scrolling down/up
        //   if (currentY < this.previousY) {
        //     if (currentRatio > this.previousRatio && isIntersecting) {
        //       console.log('Scrolling down enter');
        //       this.executeAnimations();
        //     } else {
        //       console.log('Scrolling down leave');
        //     }
        //   } else if (currentY > this.previousY && isIntersecting) {
        //     if (currentRatio < this.previousRatio) {
        //       console.log('Scrolling up leave');
        //     } else {
        //       console.log('Scrolling up enter');
        //     }
        //   }
        //   this.previousY = currentY;
        //   this.previousRatio = currentRatio;
        // });
    }
    executeAnimations() {
        // switch (this.animation) {
        //   case 'fadein':
        //     fadein(this.host).play();
        //     break;
        //   case 'slideup':
        //     slideup(this.host, this.delay).play();
        //     break;
        //   case 'slideupStagger':
        //     const elements = this.host.querySelectorAll(this.selector);
        //     slideupStagger(elements).forEach((animation) => animation.play());
        //     break;
        // }
    }
    render() {
        const { animation } = this;
        return (h(Host, { key: '15cacb640525cb1eff5228e980238da106343872', class: {
                'tp-animation': true,
                [`tp-animation--${animation}`]: true,
            } }, h("slot", { key: 'fd2314974a4ba724c39b42cfb1ad7c4245b6eeb1' })));
    }
    get host() { return this; }
    static get style() { return TpAnimationStyle0; }
}, [6, "tp-animation", {
        "scrollTrigger": [516, "scroll-trigger"],
        "selector": [513],
        "animation": [513],
        "delay": [514],
        "played": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tp-animation"];
    components.forEach(tagName => { switch (tagName) {
        case "tp-animation":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TpAnimation$1);
            }
            break;
    } });
}

const TpAnimation = TpAnimation$1;
const defineCustomElement = defineCustomElement$1;

export { TpAnimation, defineCustomElement };

//# sourceMappingURL=tp-animation.js.map