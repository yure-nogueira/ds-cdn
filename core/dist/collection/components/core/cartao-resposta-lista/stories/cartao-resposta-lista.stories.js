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
const meta = {
    title: 'components/Core/Cartão resposta lista',
    argTypes: {
        flex: {
            control: { type: 'boolean' },
            description: 'Altera o layout do componente de grid para flex.',
            table: {
                defaultValue: { summary: false },
                type: { summary: 'boolean' },
            },
        },
    },
};
export default meta;
export const Default = {
    render: (_a) => {
        var args = __rest(_a, []);
        const generateAnswerCard = () => {
            let answerCard = [];
            answerCard = [
                { index: '01' },
                { index: '02', active: true },
                { index: '03', printed: true },
                { index: '04', canceled: true },
                { index: '05', incorrect: true },
                { index: '06', correct: true },
                { index: '07', discursive: true },
            ];
            for (let index = 8; index < 31; index++) {
                if (index < 10) {
                    answerCard.push({
                        index: '0' + index,
                    });
                }
                else {
                    answerCard.push({
                        index: index,
                    });
                }
            }
            return answerCard;
        };
        const items = generateAnswerCard();
        const itemTemplates = [];
        for (const item of items) {
            itemTemplates.push(html `<tp-cartao-resposta-item
          color=${args.color}
          ?active=${item.active}
          ?printed=${item.printed}
          ?canceled=${item.canceled}
          ?incorrect=${item.incorrect}
          ?correct=${item.correct}
          ?discursive=${item.discursive}
        >
          ${item.index}
        </tp-cartao-resposta-item>`);
        }
        return html `
      <tp-cartao-resposta-lista ?flex=${args.flex}>
        ${itemTemplates}
      </tp-cartao-resposta-lista>
    `;
    },
};
//# sourceMappingURL=cartao-resposta-lista.stories.js.map
