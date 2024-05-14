import { Host, h } from "@stencil/core";
import gsap from "gsap";
import { fadein, slideleft, slideright, slideup, } from "./utils/group-animation.helper";
export class TpGroupAnimation {
    constructor() {
        /**
         * A linha do tempo das animações.
         */
        this.timeline = gsap.timeline();
        /**
         * Define se as animações ja foram iniciadas.
         */
        this.started = false;
        this.animation = undefined;
        this.scrollTrigger = false;
        this.duration = 500;
        this.delay = 0;
        this.stagger = 0;
        this.intersectionTrigger = 0;
        this.scroller = 'ion-content';
        this.buffer = [];
    }
    /**
     * Event listeners.
     */
    onBufferUpdate() {
        this.play();
    }
    /**
     * Lifecycle hooks.
     */
    componentWillLoad() {
        this.onBeforeComponentLoad();
    }
    disconnectedCallback() {
        this.observer.disconnect();
    }
    /**
     * Métodos internos.
     */
    onBeforeComponentLoad() {
        this.buffer = Array.from(this.host.children).map((element) => ({
            target: element,
            played: false,
            shouldPlay: false,
        }));
        if (this.scrollTrigger) {
            this.scrollContainer = document.querySelector(this.scroller);
            this.setupObserver();
        }
        else {
            this.buffer.forEach((element) => (element.shouldPlay = true));
            this.play();
        }
    }
    setupObserver() {
        this.observer = new IntersectionObserver(this.onObserverTriggered.bind(this), {
            root: this.scrollContainer,
            rootMargin: `0% 0% -${this.intersectionTrigger}% 0%`,
            threshold: 0,
        });
        this.buffer.forEach((element) => {
            this.observer.observe(element.target);
        });
    }
    onObserverTriggered(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const matchTarget = this.buffer.find((el) => el.target === target);
                if (matchTarget && !matchTarget.played) {
                    matchTarget.shouldPlay = true;
                    this.observer.unobserve(matchTarget.target);
                }
            }
        });
        this.buffer = [...this.buffer];
    }
    play() {
        const currentBuffer = [
            ...this.buffer.filter((element) => !element.played && element.shouldPlay),
        ];
        let animation;
        switch (this.animation) {
            case 'fadein':
                animation = fadein;
                break;
            case 'slideup':
                animation = slideup;
                break;
            case 'slideleft':
                animation = slideleft;
                break;
            case 'slideright':
                animation = slideright;
                break;
            default:
                animation = fadein;
        }
        const activeElements = currentBuffer.map((element) => element.target);
        const delay = this.started ? 0 : this.delay;
        this.timeline.add(animation(activeElements, delay, this.stagger, this.duration));
        currentBuffer.forEach((element) => (element.played = true));
        if (!this.started)
            this.started = true;
    }
    render() {
        return (h(Host, { key: '41f062e1a882f46ddd6bc79e89610c34706d4987', class: {
                'tp-animation': true,
                [`tp-animation--${this.animation}`]: true,
            } }, h("slot", { key: '9c80995ba7d158d7d70f9da801714015647db4bc' })));
    }
    static get is() { return "tp-group-animation"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["group-animation.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["group-animation.css"]
        };
    }
    static get properties() {
        return {
            "animation": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TpGroupAnimationType",
                    "resolved": "\"fadein\" | \"slideleft\" | \"slideright\" | \"slideup\"",
                    "references": {
                        "TpGroupAnimationType": {
                            "location": "import",
                            "path": "./utils/group-animation.type",
                            "id": "src/components/elementor/core/group-animation/utils/group-animation.type.ts::TpGroupAnimationType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Define a anima\u00E7\u00E3o dos componentes do grupo."
                },
                "attribute": "animation",
                "reflect": true
            },
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
                    "text": "Define se a anima\u00E7\u00E3o dos componentes ser\u00E1 ativada pelo scroll,\r\nquando o componente estiver dentro da \u00E1rea de scroll."
                },
                "attribute": "scroll-trigger",
                "reflect": true,
                "defaultValue": "false"
            },
            "duration": {
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
                    "text": "Define a dura\u00E7\u00E3o das anima\u00E7\u00F5es de cada componente do grupo\r\nem milissegundos."
                },
                "attribute": "duration",
                "reflect": true,
                "defaultValue": "500"
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
                    "text": "Define o delay do inicio das anima\u00E7\u00F5es em milissegundos."
                },
                "attribute": "delay",
                "reflect": true,
                "defaultValue": "0"
            },
            "stagger": {
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
                    "text": "Define o tempo entre o inicio de anima\u00E7\u00F5es sequenciais\r\nem milissegundos."
                },
                "attribute": "stagger",
                "reflect": true,
                "defaultValue": "0"
            },
            "intersectionTrigger": {
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
                    "text": "Define a porcentagem da \u00E1rea de scroll que o componente deve\r\natingir para dar inicio a sua anima\u00E7\u00E3o."
                },
                "attribute": "intersection-trigger",
                "reflect": true,
                "defaultValue": "0"
            },
            "scroller": {
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
                    "text": "Define o seletor html/css da \u00E1rea de scroll."
                },
                "attribute": "scroller",
                "reflect": true,
                "defaultValue": "'ion-content'"
            }
        };
    }
    static get states() {
        return {
            "buffer": {}
        };
    }
    static get elementRef() { return "host"; }
    static get watchers() {
        return [{
                "propName": "buffer",
                "methodName": "onBufferUpdate"
            }];
    }
}
//# sourceMappingURL=group-animation.js.map
