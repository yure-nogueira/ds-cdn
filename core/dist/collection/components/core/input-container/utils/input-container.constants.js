import { CONFIG } from "../../../../config/config";
import { TpInputContainerState } from "./input-container.enum";
export const TP_INPUT_CONTAINER = {
    state: Object.values(TpInputContainerState),
    icons: {
        alertTriangle: `${CONFIG.ASSETS_BASE_PATH}/tp-alert-triangle.svg`,
        check: `${CONFIG.ASSETS_BASE_PATH}/tp-check.svg`,
        chevronDown: `${CONFIG.ASSETS_BASE_PATH}/tp-chevron-down.svg`,
    },
};
//# sourceMappingURL=input-container.constants.js.map
