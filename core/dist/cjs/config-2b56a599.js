'use strict';

const DEVELOPMENT_CONFIG = {
    ASSETS_BASE_PATH: './assets',
};

const PRODUCTION_ELEMENTOR_CONFIG = {
    ASSETS_BASE_PATH: '/wp-content/plugins/templarios-institucional/web-components/assets',
};

const PRODUCTION_CONFIG = {
    ASSETS_BASE_PATH: './assets',
};

const CONFIG = getEnvironmentConfig();
function getEnvironmentConfig() {
    switch ("production") {
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

exports.CONFIG = CONFIG;
exports.DEVELOPMENT_CONFIG = DEVELOPMENT_CONFIG;
exports.PRODUCTION_CONFIG = PRODUCTION_CONFIG;
exports.PRODUCTION_ELEMENTOR_CONFIG = PRODUCTION_ELEMENTOR_CONFIG;

//# sourceMappingURL=config-2b56a599.js.map