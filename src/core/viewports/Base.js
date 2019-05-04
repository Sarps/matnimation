const THREE = require("three");
import { InputManager } from "../inputs";
import StateManager from "../StateManager";

/**
 * 
 * @class Base
 */
export default class Base {

    /**
     * 
     * @static {Object} STATES
     */
    static STATES = {
        NONE: 0,
        SELECTED: 1
    };

    /**
     * 
     * @constructor
     * @param {Object} options 
     */
    constructor(options) {

        this.screen = options.screen;
        this.renderer = options.renderer || this.setupRenderer(options);
        this.camera = options.camera || this.setupCamera(options);
        this.scene = options.scene || this.setupScene(options);

        this.model = this.setupBaseObject(options);

        this.stateManager = this.setupStateManager(options);
        this.inputManager = this.setupInputManager(options);

        this.capture = this.inputManager.capture.bind(this.inputManager);

        window.addEventListener("resize", this.onWindowResize.bind(this), false);

        setTimeout(this.onWindowResize.bind(this), 100)
    }

    /**
     * 
     * @method add
     * @param {THREE.Mesh} mesh 
     */
    add(mesh) {
        this.scene.add(mesh);
        this.model.push(mesh)
    }

    requestAudience() {
        this.renderer.render(this.scene, this.camera);
    }

    /**
     * @method onWindowResize
     */
    onWindowResize() {
        this.renderer.setSize(this.screen.offsetWidth, this.screen.offsetHeight);
        this.camera.aspect = this.screen.offsetWidth / this.screen.offsetHeight;
        this.camera.updateProjectionMatrix();
        this.requestAudience()
    }

    /**
     *
     * @method setupRenderer
     * @param {*} options
     * @returns {THREE.Renderer}
     */
    setupRenderer(options) {
        let renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(options.screen.offsetWidth, options.screen.offsetHeight);
        options.screen.appendChild(renderer.domElement);
        return renderer;
    }

    /**
     *
     * @method setupCamera
     * @param {*} options
     * @returns {THREE.Camera}
     */
    setupCamera(options) {
        let camera = new THREE.PerspectiveCamera(
            45,
            options.screen.offsetWidth / options.screen.offsetHeight,
            1,
            10000
        );
        camera.position.set(0, 500, 0);
        camera.lookAt(0, 0, 0);
        return camera;
    }

    /**
     *
     * @method setupScene
     * @returns {THREE.Scene}
     */
    setupScene() {
        let scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000000);
        return scene;
    }

    /**
     *
     * @method setupInputManager
     * @returns {InputManager}
     */
    setupInputManager() {
        return new InputManager(this.screen, this.stateManager);
    }

    /**
     *
     * @method setupStateManager
     * @returns {StateManager}
     */
    setupStateManager() {
        return new StateManager(["..."]);
    }

    /**
     * @method setupBaseObject
     */
    setupBaseObject() {
        return []
    }

}
