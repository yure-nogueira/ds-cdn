'use strict';

const createColorClasses = (color, cssClassMap) => {
    return typeof color === 'string' && color.length > 0
        ? Object.assign({ 'tp-color': true, [`tp-color-${color}`]: true }, cssClassMap) : cssClassMap;
};

exports.createColorClasses = createColorClasses;

//# sourceMappingURL=color.function-2f28fd83.js.map