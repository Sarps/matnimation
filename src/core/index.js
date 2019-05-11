import Renderer from "./Renderer";

export class Core {

    /**
     *
     * @type {Renderer|null}
     */
    static renderer = null;

    /**
     *
     * @type {Array}
     */
    static tree = [];

    /**
     *@method init
     */
    static init() {
        Core.renderer = new Renderer();
        Core.tree = Core.renderer.features;
    }

    /**
     *@method trigger
     *
     * @param {String} event
     * @param {String} key
     */
    static trigger(event, key) {
        let [cat, id] = key.split('.');
        switch (cat) {
            case 'Feature':
                console.log(`Feature: ${id}`);
                Core.renderer.addFeature(id);
                break;

            case 'Animation':
                alert(`Animation: ${id}`);
                break;

            default:
                break;
        }
        console.log(Core.tree)
    }
}
