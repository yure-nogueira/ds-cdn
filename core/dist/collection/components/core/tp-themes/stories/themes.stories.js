import { defineCustomElement as defineCustomElementBadge } from "@ionic/core/components/ion-badge";
import { html } from "lit";
defineCustomElementBadge();
const meta = {
    title: 'components/Core/Themes',
};
export default meta;
let anteriorTheme = document
    .querySelector('html')
    .classList.contains('theme-gold')
    ? 'theme-gold'
    : null;
const changeTheme = {
    'theme-gold': () => {
        anteriorTheme = 'theme-gold';
        if (!document.querySelector('html').classList.contains('theme-gold')) {
            document.querySelector('html').classList.add('theme-gold');
        }
    },
    'theme-default': () => {
        document.querySelector('html').classList.remove(anteriorTheme);
    },
};
const trocaTema = (ev) => {
    const fun = changeTheme[ev.detail];
    if (fun) {
        fun();
    }
};
export const Default = {
    render: () => {
        setTimeout(() => {
            document.querySelector('tp-themes').temas = [
                { value: 'theme-default', label: 'Padrão' },
                { value: 'theme-gold', label: 'gold' },
            ];
        }, 1000);
        return html `
      <style>
        .tp-theme--theme-gold {
          --tp-border-color: hsla(46, 65%, 60%, 1);
        }

        .tp-theme--theme-gold .tp-theme__left {
          --tp-background-left: hsla(46, 65%, 20%, 1);
        }

        .tp-theme--theme-gold .tp-theme__circle {
          --tp-background-circle: hsla(46, 65%, 40%, 1);
        }

        .tp-theme--theme-gold .tp-theme__bar {
          background: hsla(46, 10%, 58%, 1);
        }

        .tp-theme--theme-gold ion-radio {
          --tp-color: hsla(46, 65%, 60%, 1);
          --tp-color-checked: hsla(46, 65%, 60%, 1);
        }
      </style>

      <tp-themes @tpChange="${trocaTema}" class="tp-config__theme"></tp-themes>
    `;
    },
    /* play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      expect(canvas.getByText(/tp-themes/gi)).toBeTruthy();
    }, */
};
Default.argTypes = {
    color: { table: { disable: true } },
};
//# sourceMappingURL=themes.stories.js.map
