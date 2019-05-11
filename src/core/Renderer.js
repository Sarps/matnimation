import { FrustrumViewport } from "./viewports";
import { models } from './models'
import Model from "./models/Model";

export default class Renderer {

    constructor() {

        this.viewport = new FrustrumViewport({ screen: document.querySelector("#screen") });
        this.features = [];
        //new PlaneViewport({screen: document.querySelector("#screen")})

    }

    /**
     *
     * @param {String} type
     */
    addFeature(type) {
        let model = models[type],
            feature = model && new model;
        if (feature instanceof Model) {
            this.features.push( feature );
            this.viewport.add( feature.mesh )
        }
    }

}
