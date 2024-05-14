import { Host, h } from "@stencil/core";
import { TP_PAGINATION } from "./utils/pagination.contant";
import { createColorClasses } from "../../../utils/functions/color.function";
export class TpPagination {
    constructor() {
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
            .map((buttonConfig) => (h("ion-button", { onClick: () => this.onPaginationButtonClick(buttonConfig), class: "tp-pagination__item", color: color,
            // @ts-ignore
            size: size, disabled: +buttonConfig.label === currentPage }, buttonConfig.label)));
    }
    render() {
        const { color, size, pageCount, currentPage } = this;
        const paginationButtons = this.getPaginationButtons();
        return (h(Host, { key: '8e2660c99e821310f1c118a28778b35d51fa261d', class: createColorClasses(color, { ['tp-pagination']: true }) }, pageCount > 1 && (h("ion-button", { key: '012ab35a89606f1eb37fa40d4a96b546192024c3', onClick: () => this.onPaginationButtonClick({
                role: TP_PAGINATION.ROLE.PREVIOUS,
            }), class: "tp-pagination__item", color: color,
            // @ts-ignore
            size: size, fill: "clear", disabled: currentPage === 1 }, h("ion-icon", { key: '0bf80fdee98ed4c9c52791db3918a629b23e48ed', slot: "start", src: "./assets/tp-chevron-left.svg" }))), paginationButtons, pageCount > 1 && (h("ion-button", { key: '44a38f656c3c7ffd430f74251379083b42808afc', onClick: () => this.onPaginationButtonClick({ role: TP_PAGINATION.ROLE.NEXT }), class: "tp-pagination__item", color: color,
            // @ts-ignore
            size: size, fill: "clear", disabled: currentPage === pageCount }, h("ion-icon", { key: '3a38b5d913a91e441896a022b4e79d6db89de21c', slot: "start", src: "./assets/tp-chevron-right.svg" })))));
    }
    static get is() { return "tp-pagination"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["pagination.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["pagination.css"]
        };
    }
    static get properties() {
        return {
            "color": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TpColor",
                    "resolved": "\"orange\" | \"orange-1\" | \"orange-2\" | \"orange-3\" | \"orange-4\" | \"orange-5\" | TpColors | TpColorsMedgrupo | (string & Record<never, never>)",
                    "references": {
                        "TpColor": {
                            "location": "import",
                            "path": "../../../utils/types/color.type",
                            "id": "src/utils/types/color.type.ts::TpColor"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "A varia\u00E7\u00E3o de cor dos bot\u00F5es do componente."
                },
                "attribute": "color",
                "reflect": true,
                "defaultValue": "TP_PAGINATION.DEFAULT_COLOR"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TpPaginationSize",
                    "resolved": "\"sm\" | \"xs\"",
                    "references": {
                        "TpPaginationSize": {
                            "location": "import",
                            "path": "./utils/pagination.type",
                            "id": "src/components/core/pagination/utils/pagination.type.ts::TpPaginationSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "A varia\u00E7\u00E3o de tamanho dos bot\u00F5es do componente."
                },
                "attribute": "size",
                "reflect": true,
                "defaultValue": "TP_PAGINATION.DEFAULT_SIZE"
            },
            "pageCount": {
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
                    "text": "O n\u00FAmero total de p\u00E1ginas."
                },
                "attribute": "page-count",
                "reflect": true
            },
            "currentPage": {
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
                    "text": "\u00CDndice da p\u00E1gina atual."
                },
                "attribute": "current-page",
                "reflect": true
            }
        };
    }
    static get events() {
        return [{
                "method": "tpNavigate",
                "name": "tpNavigate",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitido quando h\u00E1 clique no bot\u00E3o de uma p\u00E1gina espec\u00EDfica."
                },
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                }
            }, {
                "method": "tpPrevious",
                "name": "tpPrevious",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitido quando h\u00E1 clique no bot\u00E3o de seguir para a p\u00E1gina anterior."
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }, {
                "method": "tpNext",
                "name": "tpNext",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitido quando h\u00E1 clique no bot\u00E3o de seguir para a pr\u00F3xima p\u00E1gina."
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }, {
                "method": "tpPageJump",
                "name": "tpPageJump",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitido quando h\u00E1 clique no bot\u00E3o que oculta p\u00E1ginas\r\nespec\u00EDficas, n\u00E3o mostradas nos bot\u00F5es do estado atual."
                },
                "complexType": {
                    "original": "TpPaginationDirection",
                    "resolved": "\"backward\" | \"forward\"",
                    "references": {
                        "TpPaginationDirection": {
                            "location": "import",
                            "path": "./utils/pagination.type",
                            "id": "src/components/core/pagination/utils/pagination.type.ts::TpPaginationDirection"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=pagination.js.map
