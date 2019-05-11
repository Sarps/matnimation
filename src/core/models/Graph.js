const THREE = require('three');
import Model from "./Model";
import * as math from 'mathjs';

export default class Graph extends Model {


    constructor() {
        super({"type": "Graph", "icon": "fas fa-chart-line"});

        this.props.push({
            name: "Equation"
        });

        this.drawGraph()
    }

    drawGraph() {
        let code = math.compile('50sin(2x deg)');
        return Array.from({length: 500}, (_, x) => new THREE.Vector3(x, 0, code.eval({x})) );
    }


    generateMesh() {
        let points3D = new THREE.Geometry();
        points3D.vertices = this.drawGraph();
        let line2 = new THREE.Line(points3D, new THREE.LineBasicMaterial({color: "red"}));
        return line2;
    }
}

