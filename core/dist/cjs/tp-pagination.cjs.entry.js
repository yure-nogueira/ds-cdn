'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f62d7467.js');
const color_function = require('./color.function-2f28fd83.js');

var TpEnumPaginationRole;
(function (TpEnumPaginationRole) {
    TpEnumPaginationRole["GOTO"] = "goto";
    TpEnumPaginationRole["HIDDEN"] = "hidden";
    TpEnumPaginationRole["PREVIOUS"] = "previous";
    TpEnumPaginationRole["NEXT"] = "next";
})(TpEnumPaginationRole || (TpEnumPaginationRole = {}));
var TpEnumPaginationSize;
(function (TpEnumPaginationSize) {
    TpEnumPaginationSize["XS"] = "xs";
    TpEnumPaginationSize["SM"] = "sm";
})(TpEnumPaginationSize || (TpEnumPaginationSize = {}));
var TpEnumPaginationDirection;
(function (TpEnumPaginationDirection) {
    TpEnumPaginationDirection["FORWARD"] = "forward";
    TpEnumPaginationDirection["BACKWARD"] = "backward";
})(TpEnumPaginationDirection || (TpEnumPaginationDirection = {}));

const TP_PAGINATION = {
    ROLE: Object.fromEntries(Object.entries(TpEnumPaginationRole)),
    DIRECTION: Object.fromEntries(Object.entries(TpEnumPaginationDirection)),
    SIZES: Object.values(TpEnumPaginationSize),
    BUTTON_LIMIT: 5,
    HIDDEN_BUTTON_LABEL: '...',
    DEFAULT_COLOR: 'neutral-2',
    DEFAULT_SIZE: 'xs',
};

const paginationCss = ".sc-tp-pagination-h{display:flex;width:100%;justify-content:center}.tp-pagination__item.sc-tp-pagination{--border-radius:4px;--padding-start:16px;--padding-end:16px}.tp-pagination__item.sc-tp-pagination:not(:first-child){margin-left:0.8rem}";
const TpPaginationStyle0 = paginationCss;

const TpPagination = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.tpNavigate = index.createEvent(this, "tpNavigate", 7);
        this.tpPrevious = index.createEvent(this, "tpPrevious", 7);
        this.tpNext = index.createEvent(this, "tpNext", 7);
        this.tpPageJump = index.createEvent(this, "tpPageJump", 7);
        this.color = TP_PAGINATION.DEFAULT_COLOR;
        this.size = TP_PAGINATION.DEFAULT_SIZE;
        this.pageCount = undefined;
        this.currentPage = undefined;
    }
    onPaginationButtonClick(buttonConfig) {
        const { label, role, direction } = buttonConfig;
        if (role === TP_PAGINATION.ROLE.GOTO)
            return this.tpNavigate.emit(+label);
        if (role === TP_PAGINATION.ROLE.HIDDEN)
            return this.tpPageJump.emit(direction);
        if (role === TP_PAGINATION.ROLE.PREVIOUS)
            return this.tpPrevious.emit();
        if (role === TP_PAGINATION.ROLE.NEXT)
            return this.tpNext.emit();
    }
    getPaginationButtons() {
        const { color, size, pageCount, currentPage } = this;
        return Array.from({ length: pageCount })
            .map((_, index) => {
            const pageIndex = index + 1;
            /**
             * Se o número total de páginas (pageCount) for menor que 'BUTTON_LIMIT',
             * mostra todos os botões de navegação
             * BUTTON_LIMIT: numéro máximo que o total de páginas (pageCount)
             * deve ter para que sejam mostrados todos os botões de navegação.
             */
            if (pageCount <= TP_PAGINATION.BUTTON_LIMIT) {
                return {
                    label: pageIndex,
                    role: TP_PAGINATION.ROLE.GOTO,
                    direction: null,
                };
            }
            /**
             * Se a página atual for a primeira ou a última e a distância
             * entre os índices do botão atual e página atual for menor ou igual a 2,
             * o botão do índice atual deverá ser renderizado.
             */
            if ([1, pageCount].includes(currentPage) &&
                Math.abs(pageIndex - currentPage) <= 2) {
                return {
                    label: pageIndex,
                    role: TP_PAGINATION.ROLE.GOTO,
                    direction: null,
                };
            }
            /**
             * Se o índice atual estiver entre o primeiro e a página atual (currentPage),
             * o primeiro botão a cair nessa condição será renderizado como hidden
             * e representará todos os outros índices que cairem nessa condição em
             * sequência, até encontrar um botão que será renderizado.
             */
            if (pageIndex > 1 && pageIndex < currentPage - 1) {
                return {
                    label: TP_PAGINATION.HIDDEN_BUTTON_LABEL,
                    role: pageIndex - 1 === 1 ? TP_PAGINATION.ROLE.HIDDEN : null,
                    direction: TP_PAGINATION.DIRECTION.BACKWARD,
                };
            }
            /**
             * Se o índice atual estiver entre a página atual (currentPage) e a última
             * página, o primeiro botão a cair nessa condição será renderizado como
             * hidden e representará todos os outros índices que cairem nessa condição em
             * sequência, até encontrar um botão que será renderizado.
             */
            if (pageIndex < pageCount && pageIndex > currentPage + 1) {
                return {
                    label: TP_PAGINATION.HIDDEN_BUTTON_LABEL,
                    role: pageIndex === pageCount - 1 ? TP_PAGINATION.ROLE.HIDDEN : null,
                    direction: TP_PAGINATION.DIRECTION.FORWARD,
                };
            }
            /**
             * Caso 'default' para todos os botões com índices que não caem
             * em nenhuma das condições acima.
             */
            return {
                label: pageIndex,
                role: TP_PAGINATION.ROLE.GOTO,
                direction: null,
            };
        })
            .filter(({ role }) => role)
            .map((buttonConfig) => (index.h("ion-button", { onClick: () => this.onPaginationButtonClick(buttonConfig), class: "tp-pagination__item", color: color,
            // @ts-ignore
            size: size, disabled: +buttonConfig.label === currentPage }, buttonConfig.label)));
    }
    render() {
        const { color, size, pageCount, currentPage } = this;
        const paginationButtons = this.getPaginationButtons();
        return (index.h(index.Host, { key: '8e2660c99e821310f1c118a28778b35d51fa261d', class: color_function.createColorClasses(color, { ['tp-pagination']: true }) }, pageCount > 1 && (index.h("ion-button", { key: '012ab35a89606f1eb37fa40d4a96b546192024c3', onClick: () => this.onPaginationButtonClick({
                role: TP_PAGINATION.ROLE.PREVIOUS,
            }), class: "tp-pagination__item", color: color,
            // @ts-ignore
            size: size, fill: "clear", disabled: currentPage === 1 }, index.h("ion-icon", { key: '0bf80fdee98ed4c9c52791db3918a629b23e48ed', slot: "start", src: "./assets/tp-chevron-left.svg" }))), paginationButtons, pageCount > 1 && (index.h("ion-button", { key: '44a38f656c3c7ffd430f74251379083b42808afc', onClick: () => this.onPaginationButtonClick({ role: TP_PAGINATION.ROLE.NEXT }), class: "tp-pagination__item", color: color,
            // @ts-ignore
            size: size, fill: "clear", disabled: currentPage === pageCount }, index.h("ion-icon", { key: '3a38b5d913a91e441896a022b4e79d6db89de21c', slot: "start", src: "./assets/tp-chevron-right.svg" })))));
    }
};
TpPagination.style = TpPaginationStyle0;

exports.tp_pagination = TpPagination;

//# sourceMappingURL=tp-pagination.cjs.entry.js.map