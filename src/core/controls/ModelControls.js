const THREE = require("three");
import Base from "./Base"
import { Viewport } from "../viewports"
import { InputManager } from "../inputs"

/**
 * 
 * @class ModelControls
 */
export default class ModelControls extends Base {

    static MODES = {
        TRANSLATE: "T",
        ROTATE: "R",
        SCALE: "S"
    };

    static AXES = {
        X: 0,
        Y: 1,
        Z: 2
    };

    /**
     * 
     * @constructor
     * @param {Viewport} viewport 
     */
    constructor(viewport) {

        super(viewport);

        this.viewport = viewport;
        this.raycaster = new THREE.Raycaster;

        this.selectedObject = null;
        this.transformMode = null

    }

    /**
     * 
     * @override captureInputs
     * @param {Viewport} viewport 
     */
    captureInputs(viewport) {

        viewport.capture(InputManager.EVENT_TYPE.MOUSE_CLICK, {
            button: InputManager.BUTTON.LEFT,
            fn: this.selectObject.bind(this)
        });

        viewport.capture(InputManager.EVENT_TYPE.KEY_PRESS, {
            keyCode: 27, // ESC
            fn: this.deselectObject.bind(this)
        });

        viewport.capture(InputManager.EVENT_TYPE.KEY_PRESS, {
            key: ModelControls.MODES.TRANSLATE,
            fn: this.setTransformMode.bind(this)
        });

        viewport.capture(InputManager.EVENT_TYPE.KEY_PRESS, {
            key: ModelControls.MODES.ROTATE,
            fn: this.setTransformMode.bind(this)
        });

        viewport.capture(InputManager.EVENT_TYPE.KEY_PRESS, {
            key: ModelControls.MODES.SCALE,
            fn: this.setTransformMode.bind(this)
        });

        viewport.capture(InputManager.EVENT_TYPE.MOUSE_MOVE, {
            fn: this.transform.bind(this)
        })

    }

    selectObject(_, { target }) {
        this.raycaster.setFromCamera(target, this.viewport.camera);
        var intersects = this.raycaster.intersectObjects(this.viewport.model);
        if (!intersects.length) return;
        this.selectedObject = intersects.sort((a, b) => {
            return a.distance - b.distance
        })[0].object;
        this.selectedObject.material.color.set(0xff0000);
        this.viewport.requestAudience();
        return true
    }

    deselectObject() {
        if (this.selectedObject === null) {
            return
        }
        this.selectedObject.material.color.set(0xffff00);
        this.selectedObject = null;
        this.transformMode = null;
        this.viewport.requestAudience();
        return true
    }

    setTransformMode(_, $, event) {
        if (this.selectedObject === null) {
            return
        }
        this.transformMode = event.key
    }

    transform(keyboard, mouse) {


    }

}