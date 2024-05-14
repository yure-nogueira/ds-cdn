import { Host, h } from "@stencil/core";
// import { fadein, slideup, slideupStagger } from './utils/animations.helper';
export class TpAnimation {
    constructor() {
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
    static get is() { return "tp-animation"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["animation.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["animation.css"]
        };
    }
    static get properties() {
        return {
            "scrollTrigger": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "todo."
                },
                "attribute": "scroll-trigger",
                "reflect": true,
                "defaultValue": "false"
            },
            "selector": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "todo."
                },
                "attribute": "selector",
                "reflect": true
            },
            "animation": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'fadein' | 'slideup' | 'slideupStagger'",
                    "resolved": "\"fadein\" | \"slideup\" | \"slideupStagger\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "todo."
                },
                "attribute": "animation",
                "reflect": true,
                "defaultValue": "'fadein'"
            },
            "delay": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "todo."
                },
                "attribute": "delay",
                "reflect": true,
                "defaultValue": "0"
            }
        };
    }
    static get states() {
        return {
            "played": {}
        };
    }
    static get elementRef() { return "host"; }
}
//# sourceMappingURL=animation.js.map
