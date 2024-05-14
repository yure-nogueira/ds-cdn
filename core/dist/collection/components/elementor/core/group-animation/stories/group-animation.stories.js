var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { html } from "lit";
import { TpGroupAnimationTypeEnum } from "../utils/group-animation.enum";
const meta = {
    title: 'components/Elementor/Core/Group animation',
    argTypes: {
        animation: {
            control: { type: 'select' },
            options: Object.values(TpGroupAnimationTypeEnum),
            description: 'Define a animação dos componentes do grupo.',
            table: {
                defaultValue: {
                    summary: 'fadein',
                },
                type: {
                    summary: Object.values(TpGroupAnimationTypeEnum).join(' |'),
                },
            },
        },
        scrollTrigger: {
            control: 'boolean',
            description: 'Define se a animação dos componentes será ativada pelo scroll, quando o componente estiver dentro da área de scroll.',
            table: {
                defaultValue: { summary: 'true' },
                type: { summary: 'boolean' },
            },
        },
        duration: {
            control: { type: 'number', min: 100, step: 50 },
            description: 'Define a duração das animações de cada componente do grupo em milissegundos.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: 'number' },
            },
        },
        delay: {
            control: { type: 'number', min: 0, step: 50 },
            description: 'Define o delay do inicio das animações em milissegundos.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: 'number' },
            },
        },
        stagger: {
            control: { type: 'number', min: 0, step: 50 },
            description: 'Define o tempo entre o inicio de animações sequenciais em milissegundos.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: 'number' },
            },
        },
        intersectionTrigger: {
            control: { type: 'range', min: 0, max: 100, step: 1 },
            description: 'Define a porcentagem da área de scroll que o componente deve atingir para dar inicio a sua animação.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: 'number' },
            },
        },
        scroller: {
            control: 'text',
            description: 'Define o seletor html/css da área de scroll.',
            table: {
                defaultValue: {
                    summary: 'ion-content',
                },
                type: {
                    summary: 'string',
                },
            },
        },
    },
    args: {
        animation: 'fadein',
        scrollTrigger: true,
        duration: 500,
        delay: 0,
        stagger: 0,
        intersectionTrigger: 0,
        scroller: 'ion-content',
    },
};
export default meta;
export const Default = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <tp-group-animation
      ?scroll-trigger="${args.scrollTrigger}"
      animation="${args.animation}"
      duration="${args.duration}"
      delay="${args.delay}"
      stagger="${args.stagger}"
      intersection-trigger="${args.intersectionTrigger}"
      scroller="${args.scroller}"
    >
      <img src="https://placehold.co/400x400" alt="" />
      <img src="https://placehold.co/400x400" alt="" />
      <img src="https://placehold.co/400x400" alt="" />
      <img src="https://placehold.co/400x400" alt="" />
      <img src="https://placehold.co/400x400" alt="" />
      <img src="https://placehold.co/400x400" alt="" />
      <img src="https://placehold.co/400x400" alt="" />
      <img src="https://placehold.co/400x400" alt="" />
      <img src="https://placehold.co/400x400" alt="" />
    </tp-group-animation>
  `;
    },
};
Default.argTypes = {
    // @ts-ignore
    color: { table: { disable: true } },
};
//# sourceMappingURL=group-animation.stories.js.map
