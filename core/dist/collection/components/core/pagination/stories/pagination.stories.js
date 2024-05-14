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
import { withActions } from "@storybook/addon-actions/decorator";
import { html } from "lit";
import { TP_PAGINATION } from "../utils/pagination.contant";
const meta = {
    title: 'components/Core/Pagination',
    decorators: [withActions],
    parameters: {
        actions: { handles: ['tpNavigate', 'tpPrevious', 'tpNext', 'tpPageJump'] },
    },
    argTypes: {
        pageCount: {
            control: { type: 'range', min: 1, max: 15, step: 1 },
            description: 'Define o número total de páginas.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: 'number' },
            },
        },
        currentPage: {
            control: { type: 'number', min: 1, max: 15, step: 1 },
            description: 'Define o índice da página atual.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: 'number' },
            },
        },
        size: {
            control: { type: 'select' },
            options: [...TP_PAGINATION.SIZES],
            description: 'Define a variação de tamanho dos botões do componente.',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: TP_PAGINATION.SIZES.join('|') },
            },
        },
    },
    args: {
        color: 'neutral-2',
        size: 'sm',
        pageCount: 3,
        currentPage: 1,
    },
};
export default meta;
export const Default = {
    render: (_a) => {
        var args = __rest(_a, []);
        let pagination;
        const JUMP_VALUE = 3;
        window.addEventListener('DOMContentLoaded', () => {
            pagination = document.querySelector('tp-pagination');
        });
        window.addEventListener('tpNavigate', (event) => {
            const page = event.detail;
            pagination.currentPage = page;
        });
        window.addEventListener('tpPageJump', (event) => {
            const currentPage = pagination.currentPage;
            const direction = event.detail;
            if (direction === 'forward') {
                pagination.currentPage =
                    currentPage + JUMP_VALUE > args.pageCount
                        ? args.pageCount
                        : currentPage + JUMP_VALUE;
            }
            else {
                pagination.currentPage =
                    currentPage - JUMP_VALUE < 1 ? 1 : currentPage - JUMP_VALUE;
            }
        });
        window.addEventListener('tpNext', () => {
            pagination.currentPage = pagination.currentPage + 1;
        });
        window.addEventListener('tpPrevious', () => {
            pagination.currentPage = pagination.currentPage - 1;
        });
        return html `
      <tp-pagination
        color="${args.color}"
        size="${args.size}"
        page-count="${args.pageCount}"
        current-page="${args.currentPage}"
      ></tp-pagination>
    `;
    },
};
//# sourceMappingURL=pagination.stories.js.map
