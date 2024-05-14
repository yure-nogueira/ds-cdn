import { g as getAssetPath, r as registerInstance, c as createEvent, h, H as Host } from './index-e49e9bf4.js';
import { c as createColorClasses } from './color.function-a9b13d36.js';

const TP_CALENDAR = {
    icons: {
        chevronRight: getAssetPath('./assets/tp-chevron-right.svg'),
        chevronLeft: getAssetPath('./assets/tp-chevron-left.svg'),
        chevronDown: getAssetPath('./assets/tp-chevron-down.svg'),
    },
    weekdays: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
    timeframes: {
        week: 'Semana',
        month: 'Mês',
    },
    directions: {
        left: 'left',
        right: 'right',
    },
};

class GestureController {
    constructor() {
        this.gestureId = 0;
        this.requestedStart = new Map();
        this.disabledGestures = new Map();
        this.disabledScroll = new Set();
    }
    /**
     * Creates a gesture delegate based on the GestureConfig passed
     */
    createGesture(config) {
        return new GestureDelegate(this, this.newID(), config.name, config.priority || 0, !!config.disableScroll);
    }
    /**
     * Creates a blocker that will block any other gesture events from firing. Set in the ion-gesture component.
     */
    createBlocker(opts = {}) {
        return new BlockerDelegate(this, this.newID(), opts.disable, !!opts.disableScroll);
    }
    start(gestureName, id, priority) {
        if (!this.canStart(gestureName)) {
            this.requestedStart.delete(id);
            return false;
        }
        this.requestedStart.set(id, priority);
        return true;
    }
    capture(gestureName, id, priority) {
        if (!this.start(gestureName, id, priority)) {
            return false;
        }
        const requestedStart = this.requestedStart;
        let maxPriority = -10000;
        requestedStart.forEach(value => {
            maxPriority = Math.max(maxPriority, value);
        });
        if (maxPriority === priority) {
            this.capturedId = id;
            requestedStart.clear();
            const event = new CustomEvent('ionGestureCaptured', { detail: { gestureName } });
            document.dispatchEvent(event);
            return true;
        }
        requestedStart.delete(id);
        return false;
    }
    release(id) {
        this.requestedStart.delete(id);
        if (this.capturedId === id) {
            this.capturedId = undefined;
        }
    }
    disableGesture(gestureName, id) {
        let set = this.disabledGestures.get(gestureName);
        if (set === undefined) {
            set = new Set();
            this.disabledGestures.set(gestureName, set);
        }
        set.add(id);
    }
    enableGesture(gestureName, id) {
        const set = this.disabledGestures.get(gestureName);
        if (set !== undefined) {
            set.delete(id);
        }
    }
    disableScroll(id) {
        this.disabledScroll.add(id);
        if (this.disabledScroll.size === 1) {
            document.body.classList.add(BACKDROP_NO_SCROLL);
        }
    }
    enableScroll(id) {
        this.disabledScroll.delete(id);
        if (this.disabledScroll.size === 0) {
            document.body.classList.remove(BACKDROP_NO_SCROLL);
        }
    }
    canStart(gestureName) {
        if (this.capturedId !== undefined) {
            // a gesture already captured
            return false;
        }
        if (this.isDisabled(gestureName)) {
            return false;
        }
        return true;
    }
    isCaptured() {
        return this.capturedId !== undefined;
    }
    isScrollDisabled() {
        return this.disabledScroll.size > 0;
    }
    isDisabled(gestureName) {
        const disabled = this.disabledGestures.get(gestureName);
        if (disabled && disabled.size > 0) {
            return true;
        }
        return false;
    }
    newID() {
        this.gestureId++;
        return this.gestureId;
    }
}
class GestureDelegate {
    constructor(ctrl, id, name, priority, disableScroll) {
        this.id = id;
        this.name = name;
        this.disableScroll = disableScroll;
        this.priority = priority * 1000000 + id;
        this.ctrl = ctrl;
    }
    canStart() {
        if (!this.ctrl) {
            return false;
        }
        return this.ctrl.canStart(this.name);
    }
    start() {
        if (!this.ctrl) {
            return false;
        }
        return this.ctrl.start(this.name, this.id, this.priority);
    }
    capture() {
        if (!this.ctrl) {
            return false;
        }
        const captured = this.ctrl.capture(this.name, this.id, this.priority);
        if (captured && this.disableScroll) {
            this.ctrl.disableScroll(this.id);
        }
        return captured;
    }
    release() {
        if (this.ctrl) {
            this.ctrl.release(this.id);
            if (this.disableScroll) {
                this.ctrl.enableScroll(this.id);
            }
        }
    }
    destroy() {
        this.release();
        this.ctrl = undefined;
    }
}
class BlockerDelegate {
    constructor(ctrl, id, disable, disableScroll) {
        this.id = id;
        this.disable = disable;
        this.disableScroll = disableScroll;
        this.ctrl = ctrl;
    }
    block() {
        if (!this.ctrl) {
            return;
        }
        if (this.disable) {
            for (const gesture of this.disable) {
                this.ctrl.disableGesture(gesture, this.id);
            }
        }
        if (this.disableScroll) {
            this.ctrl.disableScroll(this.id);
        }
    }
    unblock() {
        if (!this.ctrl) {
            return;
        }
        if (this.disable) {
            for (const gesture of this.disable) {
                this.ctrl.enableGesture(gesture, this.id);
            }
        }
        if (this.disableScroll) {
            this.ctrl.enableScroll(this.id);
        }
    }
    destroy() {
        this.unblock();
        this.ctrl = undefined;
    }
}
const BACKDROP_NO_SCROLL = 'backdrop-no-scroll';
const GESTURE_CONTROLLER = new GestureController();

const addEventListener = (el, eventName, callback, opts) => {
    // use event listener options when supported
    // otherwise it's just a boolean for the "capture" arg
    const listenerOpts = supportsPassive(el) ? {
        'capture': !!opts.capture,
        'passive': !!opts.passive,
    } : !!opts.capture;
    let add;
    let remove;
    if (el['__zone_symbol__addEventListener']) {
        add = '__zone_symbol__addEventListener';
        remove = '__zone_symbol__removeEventListener';
    }
    else {
        add = 'addEventListener';
        remove = 'removeEventListener';
    }
    el[add](eventName, callback, listenerOpts);
    return () => {
        el[remove](eventName, callback, listenerOpts);
    };
};
const supportsPassive = (node) => {
    if (_sPassive === undefined) {
        try {
            const opts = Object.defineProperty({}, 'passive', {
                get: () => {
                    _sPassive = true;
                }
            });
            node.addEventListener('optsTest', () => { return; }, opts);
        }
        catch (e) {
            _sPassive = false;
        }
    }
    return !!_sPassive;
};
let _sPassive;

const MOUSE_WAIT = 2000;
const createPointerEvents = (el, pointerDown, pointerMove, pointerUp, options) => {
    let rmTouchStart;
    let rmTouchMove;
    let rmTouchEnd;
    let rmTouchCancel;
    let rmMouseStart;
    let rmMouseMove;
    let rmMouseUp;
    let lastTouchEvent = 0;
    const handleTouchStart = (ev) => {
        lastTouchEvent = Date.now() + MOUSE_WAIT;
        if (!pointerDown(ev)) {
            return;
        }
        if (!rmTouchMove && pointerMove) {
            rmTouchMove = addEventListener(el, 'touchmove', pointerMove, options);
        }
        if (!rmTouchEnd) {
            rmTouchEnd = addEventListener(el, 'touchend', handleTouchEnd, options);
        }
        if (!rmTouchCancel) {
            rmTouchCancel = addEventListener(el, 'touchcancel', handleTouchEnd, options);
        }
    };
    const handleMouseDown = (ev) => {
        if (lastTouchEvent > Date.now()) {
            return;
        }
        if (!pointerDown(ev)) {
            return;
        }
        if (!rmMouseMove && pointerMove) {
            rmMouseMove = addEventListener(getDocument(el), 'mousemove', pointerMove, options);
        }
        if (!rmMouseUp) {
            rmMouseUp = addEventListener(getDocument(el), 'mouseup', handleMouseUp, options);
        }
    };
    const handleTouchEnd = (ev) => {
        stopTouch();
        if (pointerUp) {
            pointerUp(ev);
        }
    };
    const handleMouseUp = (ev) => {
        stopMouse();
        if (pointerUp) {
            pointerUp(ev);
        }
    };
    const stopTouch = () => {
        if (rmTouchMove) {
            rmTouchMove();
        }
        if (rmTouchEnd) {
            rmTouchEnd();
        }
        if (rmTouchCancel) {
            rmTouchCancel();
        }
        rmTouchMove = rmTouchEnd = rmTouchCancel = undefined;
    };
    const stopMouse = () => {
        if (rmMouseMove) {
            rmMouseMove();
        }
        if (rmMouseUp) {
            rmMouseUp();
        }
        rmMouseMove = rmMouseUp = undefined;
    };
    const stop = () => {
        stopTouch();
        stopMouse();
    };
    const enable = (isEnabled = true) => {
        if (!isEnabled) {
            if (rmTouchStart) {
                rmTouchStart();
            }
            if (rmMouseStart) {
                rmMouseStart();
            }
            rmTouchStart = rmMouseStart = undefined;
            stop();
        }
        else {
            if (!rmTouchStart) {
                rmTouchStart = addEventListener(el, 'touchstart', handleTouchStart, options);
            }
            if (!rmMouseStart) {
                rmMouseStart = addEventListener(el, 'mousedown', handleMouseDown, options);
            }
        }
    };
    const destroy = () => {
        enable(false);
        pointerUp = pointerMove = pointerDown = undefined;
    };
    return {
        enable,
        stop,
        destroy
    };
};
const getDocument = (node) => {
    return node instanceof Document ? node : node.ownerDocument;
};

const createPanRecognizer = (direction, thresh, maxAngle) => {
    const radians = maxAngle * (Math.PI / 180);
    const isDirX = direction === 'x';
    const maxCosine = Math.cos(radians);
    const threshold = thresh * thresh;
    let startX = 0;
    let startY = 0;
    let dirty = false;
    let isPan = 0;
    return {
        start(x, y) {
            startX = x;
            startY = y;
            isPan = 0;
            dirty = true;
        },
        detect(x, y) {
            if (!dirty) {
                return false;
            }
            const deltaX = (x - startX);
            const deltaY = (y - startY);
            const distance = deltaX * deltaX + deltaY * deltaY;
            if (distance < threshold) {
                return false;
            }
            const hypotenuse = Math.sqrt(distance);
            const cosine = (isDirX ? deltaX : deltaY) / hypotenuse;
            if (cosine > maxCosine) {
                isPan = 1;
            }
            else if (cosine < -maxCosine) {
                isPan = -1;
            }
            else {
                isPan = 0;
            }
            dirty = false;
            return true;
        },
        isGesture() {
            return isPan !== 0;
        },
        getDirection() {
            return isPan;
        }
    };
};

const createGesture = (config) => {
    let hasCapturedPan = false;
    let hasStartedPan = false;
    let hasFiredStart = true;
    let isMoveQueued = false;
    const finalConfig = Object.assign({ disableScroll: false, direction: 'x', gesturePriority: 0, passive: true, maxAngle: 40, threshold: 10 }, config);
    const canStart = finalConfig.canStart;
    const onWillStart = finalConfig.onWillStart;
    const onStart = finalConfig.onStart;
    const onEnd = finalConfig.onEnd;
    const notCaptured = finalConfig.notCaptured;
    const onMove = finalConfig.onMove;
    const threshold = finalConfig.threshold;
    const passive = finalConfig.passive;
    const blurOnStart = finalConfig.blurOnStart;
    const detail = {
        type: 'pan',
        startX: 0,
        startY: 0,
        startTime: 0,
        currentX: 0,
        currentY: 0,
        velocityX: 0,
        velocityY: 0,
        deltaX: 0,
        deltaY: 0,
        currentTime: 0,
        event: undefined,
        data: undefined,
    };
    const pan = createPanRecognizer(finalConfig.direction, finalConfig.threshold, finalConfig.maxAngle);
    const gesture = GESTURE_CONTROLLER.createGesture({
        name: config.gestureName,
        priority: config.gesturePriority,
        disableScroll: config.disableScroll,
    });
    const pointerDown = (ev) => {
        const timeStamp = now(ev);
        if (hasStartedPan || !hasFiredStart) {
            return false;
        }
        updateDetail(ev, detail);
        detail.startX = detail.currentX;
        detail.startY = detail.currentY;
        detail.startTime = detail.currentTime = timeStamp;
        detail.velocityX = detail.velocityY = detail.deltaX = detail.deltaY = 0;
        detail.event = ev;
        // Check if gesture can start
        if (canStart && canStart(detail) === false) {
            return false;
        }
        // Release fallback
        gesture.release();
        // Start gesture
        if (!gesture.start()) {
            return false;
        }
        hasStartedPan = true;
        if (threshold === 0) {
            return tryToCapturePan();
        }
        pan.start(detail.startX, detail.startY);
        return true;
    };
    const pointerMove = (ev) => {
        // fast path, if gesture is currently captured
        // do minimum job to get user-land even dispatched
        if (hasCapturedPan) {
            if (!isMoveQueued && hasFiredStart) {
                isMoveQueued = true;
                calcGestureData(detail, ev);
                requestAnimationFrame(fireOnMove);
            }
            return;
        }
        // gesture is currently being detected
        calcGestureData(detail, ev);
        if (pan.detect(detail.currentX, detail.currentY)) {
            if (!pan.isGesture() || !tryToCapturePan()) {
                abortGesture();
            }
        }
    };
    const fireOnMove = () => {
        // Since fireOnMove is called inside a RAF, onEnd() might be called,
        // we must double check hasCapturedPan
        if (!hasCapturedPan) {
            return;
        }
        isMoveQueued = false;
        if (onMove) {
            onMove(detail);
        }
    };
    const tryToCapturePan = () => {
        if (gesture && !gesture.capture()) {
            return false;
        }
        hasCapturedPan = true;
        hasFiredStart = false;
        // reset start position since the real user-land event starts here
        // If the pan detector threshold is big, not resetting the start position
        // will cause a jump in the animation equal to the detector threshold.
        // the array of positions used to calculate the gesture velocity does not
        // need to be cleaned, more points in the positions array always results in a
        // more accurate value of the velocity.
        detail.startX = detail.currentX;
        detail.startY = detail.currentY;
        detail.startTime = detail.currentTime;
        if (onWillStart) {
            onWillStart(detail).then(fireOnStart);
        }
        else {
            fireOnStart();
        }
        return true;
    };
    const blurActiveElement = () => {
        /* tslint:disable-next-line */
        if (typeof document !== 'undefined') {
            const activeElement = document.activeElement;
            if (activeElement !== null && activeElement.blur) {
                activeElement.blur();
            }
        }
    };
    const fireOnStart = () => {
        if (blurOnStart) {
            blurActiveElement();
        }
        if (onStart) {
            onStart(detail);
        }
        hasFiredStart = true;
    };
    const reset = () => {
        hasCapturedPan = false;
        hasStartedPan = false;
        isMoveQueued = false;
        hasFiredStart = true;
        gesture.release();
    };
    // END *************************
    const pointerUp = (ev) => {
        const tmpHasCaptured = hasCapturedPan;
        const tmpHasFiredStart = hasFiredStart;
        reset();
        if (!tmpHasFiredStart) {
            return;
        }
        calcGestureData(detail, ev);
        // Try to capture press
        if (tmpHasCaptured) {
            if (onEnd) {
                onEnd(detail);
            }
            return;
        }
        // Not captured any event
        if (notCaptured) {
            notCaptured(detail);
        }
    };
    const pointerEvents = createPointerEvents(finalConfig.el, pointerDown, pointerMove, pointerUp, {
        capture: false,
        passive,
    });
    const abortGesture = () => {
        reset();
        pointerEvents.stop();
        if (notCaptured) {
            notCaptured(detail);
        }
    };
    return {
        enable(enable = true) {
            if (!enable) {
                if (hasCapturedPan) {
                    pointerUp(undefined);
                }
                reset();
            }
            pointerEvents.enable(enable);
        },
        destroy() {
            gesture.destroy();
            pointerEvents.destroy();
        },
    };
};
const calcGestureData = (detail, ev) => {
    if (!ev) {
        return;
    }
    const prevX = detail.currentX;
    const prevY = detail.currentY;
    const prevT = detail.currentTime;
    updateDetail(ev, detail);
    const currentX = detail.currentX;
    const currentY = detail.currentY;
    const timestamp = (detail.currentTime = now(ev));
    const timeDelta = timestamp - prevT;
    if (timeDelta > 0 && timeDelta < 100) {
        const velocityX = (currentX - prevX) / timeDelta;
        const velocityY = (currentY - prevY) / timeDelta;
        detail.velocityX = velocityX * 0.7 + detail.velocityX * 0.3;
        detail.velocityY = velocityY * 0.7 + detail.velocityY * 0.3;
    }
    detail.deltaX = currentX - detail.startX;
    detail.deltaY = currentY - detail.startY;
    detail.event = ev;
};
const updateDetail = (ev, detail) => {
    // get X coordinates for either a mouse click
    // or a touch depending on the given event
    let x = 0;
    let y = 0;
    if (ev) {
        const changedTouches = ev.changedTouches;
        if (changedTouches && changedTouches.length > 0) {
            const touch = changedTouches[0];
            x = touch.clientX;
            y = touch.clientY;
        }
        else if (ev.pageX !== undefined) {
            x = ev.pageX;
            y = ev.pageY;
        }
    }
    detail.currentX = x;
    detail.currentY = y;
};
const now = (ev) => {
    return ev.timeStamp || Date.now();
};

const calendarCss = ".sc-tp-calendar-h{display:block;background:var(--tp-color-neutral-1);color:var(--tp-color-neutral-10)}.tp-calendar__header.sc-tp-calendar{display:flex;justify-content:space-between;align-items:center;padding-bottom:24px;background-color:transparent}.tp-calendar__header-left.sc-tp-calendar{display:flex;align-items:center;text-align:center;width:210px}.tp-calendar__label.sc-tp-calendar{flex:1}.tp-calendar__header-right.sc-tp-calendar{display:flex;align-items:center}.tp-calendar__icon.sc-tp-calendar{color:var(--tp-color-neutral-8)}.tp-calendar__content-header.sc-tp-calendar{display:grid;grid-template-columns:repeat(7, 1fr);text-align:center}.tp-calendar__week-day.sc-tp-calendar{display:flex;align-items:center;justify-content:center;height:24px;margin:0 auto}.tp-calendar__container.sc-tp-calendar{display:grid;grid-template-columns:repeat(7, 1fr);height:100%}.sc-tp-calendar-h.tp-color.sc-tp-calendar-s>tp-calendar-day,.sc-tp-calendar-h.tp-color .sc-tp-calendar-s>tp-calendar-day{--tp-active-color:var(--tp-color-contrast);--tp-active-background:var(--tp-color-base)}";
const TpCalendarStyle0 = calendarCss;

const TpCalendar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.tpCalendarChange = createEvent(this, "tpCalendarChange", 7);
        this.tpTimeframeToggle = createEvent(this, "tpTimeframeToggle", 7);
        this.color = undefined;
        this.label = undefined;
        this.initialTimeframe = TP_CALENDAR.timeframes.week;
        this.timeframe = undefined;
    }
    /**
     * Métodos internos
     */
    onTimeframeToggle() {
        var _a;
        const currentTimeframe = (_a = this.timeframe) !== null && _a !== void 0 ? _a : this.initialTimeframe;
        this.timeframe =
            currentTimeframe === TP_CALENDAR.timeframes.week
                ? TP_CALENDAR.timeframes.month
                : TP_CALENDAR.timeframes.week;
        this.tpTimeframeToggle.emit(this.timeframe);
    }
    onCalendarChange(direction) {
        this.tpCalendarChange.emit(direction);
    }
    setupGesture() {
        let direction;
        const options = {
            el: this.container,
            gestureName: 'swipe',
            onStart: () => { },
            onMove: (event) => {
                if (event.deltaX > 0) {
                    direction = TP_CALENDAR.directions.left;
                }
                else {
                    direction = TP_CALENDAR.directions.right;
                }
            },
            onEnd: () => {
                this.tpCalendarChange.emit(direction);
            },
        };
        this.gesture = createGesture(options);
        this.gesture.enable();
    }
    disconnectGesture() {
        if (this.gesture) {
            this.gesture.destroy();
        }
    }
    /**
     * Lifecycle hooks.
     */
    componentDidLoad() {
        this.setupGesture();
    }
    disconnectedCallback() {
        this.disconnectGesture();
    }
    render() {
        const { color, label, initialTimeframe, timeframe } = this;
        return (h(Host, { key: '5e27be6090e8e459a81d48b0f2d7f6b4aa724197', class: createColorClasses(color, {
                'tp-calendar': true,
            }) }, h("div", { key: 'c711d4777e20cc34b1a31dc8a8d45a1d451a3288', class: "tp-calendar__header" }, h("div", { key: '7f7fafd6a1b16000052b55a81de82568e109b050', class: "tp-calendar__header-left" }, h("ion-button", { key: 'e446f88f7f4f6771c96711dbc49ee0b28077abae',
            // @ts-ignore
            size: "xxs", fill: "clear", onClick: () => this.onCalendarChange(TP_CALENDAR.directions.left) }, h("ion-icon", { key: '81bf9d92dfd63b80c5cf15523a5aa1ef0db0068c', slot: "icon-only", src: TP_CALENDAR.icons.chevronLeft })), h("ion-text", { key: '4f5fa81a002131d28ce36187a2b2a421fb22f42f', class: "tp-calendar__label", "tp-type": "p16b" }, label), h("ion-button", { key: '62e10458116b5c015bb5afc485d18cab71937afb',
            // @ts-ignore
            size: "xxs", fill: "clear", onClick: () => this.onCalendarChange(TP_CALENDAR.directions.right) }, h("ion-icon", { key: '4742e798e86de6606f7a1b89d73b83c6155641ff', slot: "icon-only", src: TP_CALENDAR.icons.chevronRight }))), h("div", { key: 'df057882f35d872d2e8cf298112b16abfa39d4e0', class: "tp-calendar__header-right" }, h("ion-button", { key: '8279e40e9b19f28a1ca151bd09125d050f1c69b3',
            // @ts-ignore
            size: "xxs", fill: "clear", onClick: () => this.onTimeframeToggle() }, timeframe !== null && timeframe !== void 0 ? timeframe : initialTimeframe, h("ion-icon", { key: '773ee8b5e86d099d509c18d6646a6f48570cec9c', class: "tp-calendar__icon", slot: "end", src: TP_CALENDAR.icons.chevronDown })))), h("div", { key: '529dbe6e85492b5057c0afebd42be51bc89071c1', class: "tp-calendar__content" }, h("div", { key: '313d138f8bc1a1506bacfedcc865c79edf77e49f', class: "tp-calendar__content-header" }, TP_CALENDAR.weekdays.map((day) => (h("div", { class: "tp-calendar__week-day" }, h("ion-text", { "tp-type": "p12", color: "neutral-8" }, day))))), h("div", { key: '5db0ec2f22684ec4484633291be6568e1a61cb65', class: "tp-calendar__container", ref: (el) => (this.container = el) }, h("slot", { key: '97aaf4ab173d6f2c7502eafbdb259ee6c89d3dfe' })))));
    }
    static get assetsDirs() { return ["assets"]; }
};
TpCalendar.style = TpCalendarStyle0;

export { TpCalendar as tp_calendar };

//# sourceMappingURL=tp-calendar.entry.js.map