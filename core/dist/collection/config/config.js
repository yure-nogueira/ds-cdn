import { DEVELOPMENT_CONFIG } from "./development.config";
import { PRODUCTION_ELEMENTOR_CONFIG } from "./production-elementor.config";
import { PRODUCTION_CONFIG } from "./production.config";
export const CONFIG = getEnvironmentConfig();
function getEnvironmentConfig() {
    switch (process.env.NODE_ENV) {
        case 'development':
            return DEVELOPMENT_CONFIG;
        case 'production':
            return PRODUCTION_CONFIG;
        case 'production:elementor':
            return PRODUCTION_ELEMENTOR_CONFIG;
        default:
            return DEVELOPMENT_CONFIG;
    }
}
//# sourceMappingURL=config.js.map
