import * as THREE from "three";

export default class Model {

    static _count = 0;

    constructor(opts) {
        /**
         *
         * @type {*|string}
         * @private
         */
        this._icon = opts.icon || "far fa-empty";
        /**
         *
         * @type {*|string}
         * @private
         */
        this._type = opts.type || "Model";
        /**
         *
         * @type {*|string}
         * @private
         */
        this._name = opts.name || `${this.type} ${++Model._count}`;
        /**
         *
         * @type {Mesh}
         * @private
         */
        this._mesh = this.generateMesh();

        /**
         *
         * @type {{name: string}[]}
         */
        this.props = [
            {
                name: "Transform"
            }
        ];
    }

    /**
     * @method generateMesh
     * @returns {Mesh}
     */
    generateMesh() {
        return new THREE.Mesh(
            new THREE.BoxGeometry(50, 50, 50),
            new THREE.MeshBasicMaterial({
                color: 0xff0000
            })
        );
    }

    onPropUpdate() {

    }

    get icon() {
        return this._icon;
    }

    get type() {
        return this._type;
    }

    get name() {
        return this._name;
    }

    static get count() {
        return this._count;
    }

    get mesh() {
        return this._mesh;
    }

}
