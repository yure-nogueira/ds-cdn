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
import { TP_ICONS_STORYBOOK } from "../../../../../utils/constants/icon.constant";
const meta = {
    title: 'components/Core/Task/Check card',
    argTypes: {
        alert: {
            control: { type: 'boolean' },
            description: 'Define o estado do componente para alert.',
            table: {
                defaultValue: {
                    summary: false,
                },
                type: {
                    summary: 'boolean',
                },
            },
        },
        titulo: {
            control: { type: 'text' },
            description: 'Define o titulo do componente.',
            table: {
                defaultValue: {
                    summary: '',
                },
                type: {
                    summary: 'text',
                },
            },
        },
        categoria: {
            control: { type: 'text' },
            description: 'Define o titulo do componente.',
            table: {
                defaultValue: {
                    summary: '',
                },
                type: {
                    summary: 'text',
                },
            },
        },
        horaInicial: {
            control: { type: 'text' },
            description: 'Define o titulo do componente.',
            table: {
                defaultValue: {
                    summary: '',
                },
                type: {
                    summary: 'text',
                },
            },
        },
        horaFinal: {
            control: { type: 'text' },
            description: 'Define o titulo do componente.',
            table: {
                defaultValue: {
                    summary: '',
                },
                type: {
                    summary: 'text',
                },
            },
        },
        dataInicial: {
            control: { type: 'text' },
            description: 'Define o titulo do componente.',
            table: {
                defaultValue: {
                    summary: '',
                },
                type: {
                    summary: 'text',
                },
            },
        },
        dataFinal: {
            control: { type: 'text' },
            description: 'Define o titulo do componente.',
            table: {
                defaultValue: {
                    summary: '',
                },
                type: {
                    summary: 'text',
                },
            },
        },
        iconName: {
            control: { type: 'select' },
            options: [...TP_ICONS_STORYBOOK],
            description: 'Define o path e nome do icone.',
        },
    },
    args: {
        titulo: 'Titulo',
        categoria: 'Categoria',
        dataInicial: '25/12',
        dataFinal: '25/12',
        horaInicial: '21h00',
        horaFinal: '23h00',
        iconName: `${TP_ICONS_STORYBOOK[14]}`,
    },
};
export default meta;
export const Default = {
    render: (_a) => {
        var args = __rest(_a, []);
        const iconUrl = `./assets/${args.iconName}`;
        return html `
      <tp-check-card
        color=${args.color}
        ?alert=${args.alert}
        titulo=${args.titulo}
        categoria=${args.categoria}
        hora-inicial=${args.horaInicial}
        hora-final=${args.horaFinal}
        data-inicial=${args.dataInicial}
        data-final=${args.dataFinal}
        icon-name=${iconUrl}
      >
        <ion-checkbox slot="input"></ion-checkbox>

        <tp-tooltip slot="tooltip">
          <ion-button slot="trigger" fill="clear" size="s">
            <ion-icon
              slot="icon-only"
              src="./assets/tp-alert-triangle.svg"
            ></ion-icon>
          </ion-button>
          <ion-text>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur atque velit obcaecati sit veritatis vel? Suscipit,
              repudiandae dolores voluptates ipsa dolore harum. Error,
              exercitationem cum?
            </p>
          </ion-text>
        </tp-tooltip>
      </tp-check-card>
    `;
    },
};
//# sourceMappingURL=check-card.stories.js.map
