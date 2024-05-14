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

export { CONFIG as C, DEVELOPMENT_CONFIG as D, PRODUCTION_ELEMENTOR_CONFIG as P, PRODUCTION_CONFIG as a };

//# sourceMappingURL=config-337b5def.js.map