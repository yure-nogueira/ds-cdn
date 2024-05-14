const createColorClasses = (color, cssClassMap) => {
    return typeof color === 'string' && color.length > 0
        ? Object.assign({ 'tp-color': true, [`tp-color-${color}`]: true }, cssClassMap) : cssClassMap;
};

export { createColorClasses as c };

//# sourceMappingURL=color.function.js.map