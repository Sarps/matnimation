const THREE = require("three");
import Base from "./Base";

import { CameraControls, ModelControls } from "../controls";
import { InputManager } from "../inputs";

export default class Frustrum extends Base {
    constructor(options) {

        super(options);

        this.setupGrid();
        this.setupControls();
        this.setupMaterial()

    }

    setupMaterial() { 
        let color = new THREE.Color(0xff00ff);
        this.material = new THREE.MeshBasicMaterial({ opacity: 0.5, transparent: true });
        this.material.color = color;
    }

    setupGrid() {
        var geometry = new THREE.PlaneBufferGeometry(1000, 1000);
        geometry.rotateX(-Math.PI / 2);
        let plane = new THREE.Mesh(
            geometry,
            new THREE.MeshBasicMaterial({ color: 0x333333, opacity: 0.3, transparent: true })
        );

        let grid = new THREE.Object3D;
        grid.add( new THREE.GridHelper(1000, 20, "#003fa1", "#02c64c"), plane );
        this.scene.add(grid);

    }

    setupControls() {
        new CameraControls(this.camera, this.screen, this);
        new ModelControls(this)
    }


}
