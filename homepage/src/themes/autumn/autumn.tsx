import React from 'react';
import { Theme, ThemeColours } from '../themes';

import $ from 'jquery';
import './autumn.css';


class LeafBuilder {

    private pointsStr: string;
    private stemElement: string;
    private minX: number = Infinity;
    private minY: number = Infinity;
    private maxX: number = 0;
    private maxY: number = 0;
    private centerX: number;
    private centerY: number;

    constructor(pointsStr: string, stemElement: string) {
        this.stemElement = stemElement;
        this.pointsStr = pointsStr;

        for (let coord of pointsStr.split(' ')) {
            if (coord.match(/[\t \n]/g) !== null || coord.length === 0) continue;
            let [x, y] = coord.split(',').map((s) => parseInt(s));
            this.minX = Math.min(this.minX, x);
            this.minY = Math.min(this.minY, y);
            this.maxX = Math.max(this.maxX, x);
            this.maxY = Math.max(this.maxY, y);
        }
        this.centerX = (this.minX + this.maxX) / 2;
        this.centerY = (this.minY + this.maxY) / 2;
    }

    build(color: string, rotation: number, x: number, scale: number): JQuery {
        let coeff: number = 1 - scale;

        let translateStr: string =  `translate(${x - this.minX} -550)`; 
        //550 to move the leaf to the top of the screen

        let scaleStr: string = `translate(${coeff * this.centerX} ${coeff * this.centerY}) scale(${scale} ${scale})`;

        let rotateStr: string = `rotate(${rotation}, ${this.centerX}, ${this.centerY})`;

        return $(`
            <svg>
                <g class='fallingLeaf'>
                    <g transform="${translateStr}">
                        <g transform="${scaleStr}">
                            <g transform="${rotateStr}">
                                <polyline fill="${color}" points="${this.pointsStr}"></polyline>
                                    ${this.stemElement}
                </g></g></g></g>
            </svg>
        `);
    }
}

const leaves: LeafBuilder[] = [
    new LeafBuilder(`712.471,528.889 698.832,522.963 703.037,519.251 698.832,511.868 707.549,515.354 
        710.625,510.022 716.162,518.226 714.727,499.563 719.648,502.64 726.211,495.667 730.312,503.255 736.26,502.64 730.107,520.626 
        741.797,516.584 739.951,521.302 747.334,521.917 741.182,526.224 747.334,530.734 731.168,533.227 734.501,537.428 
        708.574,533.606 	`,
        '<line fill="#603813" stroke="#603813" stroke-width="2" stroke-miterlimit="10" x1="721.125" y1="535.201" x2="720.083" y2="545" />'
    ),

    new LeafBuilder(`524.865,547.032 510.226,537.314 514.948,535.579 509.667,525.933 521.324,531.584 
        523.094,525.342 530.619,537.294 529.145,516.488 534.751,521.211 539.197,511.029 544.047,522.243 550.096,516.932 
        545.191,537.294 558.064,530.808 557.559,536.683 569.721,537.441 560.721,542.458 566.18,545.409 549.211,549.541 550.688,555 
        535.637,550.573 521.176,552.935 	`,
        '<line fill="#603813" stroke="#603813" stroke-width="2" stroke-miterlimit="10" x1="536" y1="550.001" x2="534.25" y2="560" />'
    ),

    new LeafBuilder(`281.752,542.531 268.89,537.007 272.531,534.683 265.608,527.541 276.687,531.235 276.379,524.54 
        283.048,528.926 281.983,516.46 287.986,520.214 293.694,508.61 296.234,521.138 304.383,518.307 300.851,530.312 309.942,527.277 
        305.776,532 315.229,532 309.585,538.051 316.088,540.515 301.094,544.216 304.167,547.235 291,546.001 278.167,547.235 	`,
        '<line fill="#603813" stroke="#603813" stroke-width="2" stroke-miterlimit="10" x1="291" y1="546.001" x2="289.25" y2="556" />'
    )
];

const leafColors: string[] = ["#F15A24", "#ED1C24", "#FBB03B"];
const animationTime = 3500; //in ms
const interval = 500; //in ms

function createLeaf(): JQuery {

    let leaf_i: number = Math.floor(Math.random() * leaves.length);
    let color_i: number = Math.floor(Math.random() * leafColors.length);
    let rotation: number = Math.floor(Math.random() * 360); //degrees
    let x: number = Math.floor(Math.random() * 1000);
    let scale: number = Math.floor(0.75 + Math.random() / 2); //scale in interval [0.75, 1.25]

    let leafBuilder: LeafBuilder = leaves[leaf_i];
    let color: string = leafColors[color_i];
    return leafBuilder.build(color, rotation, x, scale);

}

function Autumn(): JSX.Element {
    const [timeouts, _] = React.useState([]);

    let leafPlace: React.RefObject<SVGGElement> = React.createRef<SVGGElement>();

    React.useEffect(()=>{
        let leafWrapper = () => {
            if (leafPlace.current == null) return;

            let $leafPlace = $(leafPlace.current!);
            let newLeaf: JQuery = (createLeaf());

            $leafPlace.append(newLeaf);

            let timeout: number = window.setTimeout(leafWrapper, interval);

            window.setTimeout(newLeaf.remove, animationTime);

            (timeouts as number[]).push(timeout);
        }
        window.setTimeout(leafWrapper, interval);
        return () => timeouts.forEach(window.clearTimeout);
    });

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 300">
            <polyline fill="#87CEFA" points="0,300 0,0 1000,0 1000,300 " />
            <g>
                <rect y={150} fill="#FBB03B" width={1000} height={150} />
                <polyline fill="#E6E6E6" points="500,150.5 547.999,150 900,300 100,300 452,150 499.2,150.5 	" />
                <polyline fill="#666666" points="470,150 250,300 750,300 530,150 	" />
                <g>
                    <polygon fill="#FFFFFF" points="487,244 513,244 518,290 482,290 		" />
                    <polyline fill="#FFFFFF" points="490.037,216 492.19,194 508,194 510,216 490,216 510,216 		" />
                    <polygon fill="#FFFFFF" points="494,173 506,173 504,157 496,157 		" />
                </g>
            </g>
            <g>
                <ellipse opacity="0.1" cx="394.933" cy="156.045" rx="56.933" ry="6.046" />
                <path fill="#A67C52" d="M383.613,155.622c0,0,10.012,5.378,21.336,0c0,0-5.405-36.249-5.182-54.622h-10.421
                C389.346,101,390.276,119.373,383.613,155.622" />
                <path fill="#ED1C24" d="M405.596,116.667c0,0,12,9.925,26.999-9.574c0,0,26.405,3.908,24.562-19.559
                c0,0,21.935,0.764,15.936-25.837c0,0,24.908-6.459,8.908-30.697c0,0,20-18-8-32L330.099,0c0,0-21.899,22.596-11.7,40.596
                c0,0-20.091,24.628,9.554,28.616c0,0-10.081,25.095,8.782,31.988c0,0,6.265,22.467,21.599,16.467
                C358.333,117.667,378.597,147.24,405.596,116.667z" />
            </g>
            <g>
                <ellipse opacity="0.1" cx="326.481" cy="174.331" rx="83.481" ry="11.33" />
                <path fill="#A67C52" d="M308.613,176c0,0,17.786,5.333,36.122,0c0,0-9.151-73-8.773-110h-17.643
                C318.319,66,319.894,103,308.613,176" />
                <path fill="#F15A24" d="M317.988,130.302c0,0,16.574,18.263,34.514-0.086c0,0,30.712,0.892,34.557-24.82
                c0,0,37.142-4.53,28.171-35.057c0,0,30.743-8.51,10.24-41.934c0,0,25.618-3.694,7.038-29.405h-193.8
                c0,0-25.967,15.081-20.841,31.792c0,0-15.701,24.425,12.653,33.424c0,0-8.809,19.555,11.694,29.06c0,0-6.794,20.141,9.508,22.284
                c0,0,5.869,16.79,26.372,9.076C278.094,124.635,287.402,150.109,317.988,130.302z" />
            </g>
            <g>
                <ellipse opacity="0.1" cx="213.148" cy="208.331" rx="119.148" ry="21.33" />
                <path fill="#8C6239" d="M187.613,206c0,0,23.387,12,52.431,0c0,0-13.282-73-12.733-110h-25.609C201.701,96,203.987,133,187.613,206
                " />
                <path fill="#ED1C24" d="M183.727,155c0,0,42.737,30.408,81.648-8c0,0,61.086,5.089,66.645-32.409c0,0,42.843-16.786,33.579-41.391
                c0,0,47.998-26.106,11.919-68.104c0,0,13.437-33.096-12.206-33.096H80.446c0,0-52.364,40.596-15.305,57.095
                c0,0-35.131,36.591,16.75,53.983c0,0,1.05,32.921,43.668,38.921C125.559,122,128.379,159.499,183.727,155z" />
            </g>
            <g>
                <ellipse opacity="0.1" cx={93} cy={274} rx={133} ry={30} />
                <path fill="#A67C52" d="M51.613,277c0,0,33.387,19.333,74.886,0c0,0-18.971-73-18.187-110H71.735C71.735,167,75,204,51.613,277" />
                <path fill="#F7931E" d="M113.11,183c0,0,47.997,34.587,79.496-22.41c0,0,50.998,28.499,57.395-25.499
                c0,0,58.101-13.5,29.602-58.497c0,0,62.996-32.998,20.999-64.497c0,0,4.5-4.696-3-12.098H0v175C0,175,39.614,230.908,113.11,183z" />
            </g>
            <g>
                <ellipse opacity="0.1" cx="652.59" cy="163.908" rx="77.489" ry="10.907" />
                <path fill="#8C6239" d="M671.652,164c0,0-14.652,5.084-36.121,0c0,0,9.15-73,8.772-110h17.644C661.947,54,660.371,91,671.652,164" />
                <path fill="#F15A24" d="M675.725,126.571c0,0-33.633,26.945-55.745-17.459c0,0-35.77,22.204-40.26-19.865
                c0,0-40.769-10.517-20.763-45.574c0,0-44.215-25.708-14.733-50.248c0,0-3.151-3.659,2.113-9.425H755v136.339
                C755,120.339,727.317,163.896,675.725,126.571z" />
            </g>
            <g>
                <ellipse opacity="0.1" cx="770.974" cy="204.852" rx="110.322" ry="17.518" />
                <path fill="#A67C52" d="M796.652,198c0,0-21.819,11.834-52.431,0c0,0,13.226-76.824,12.733-110h25.609
                C782.564,88,780.278,125,796.652,198" />
                <path fill="#F7931E" d="M777.045,153.789c0,0-21.053,23.198-43.842-0.109c0,0-39.014,1.132-43.897-31.528
                c0,0-47.179-5.754-35.786-44.532c0,0-39.051-10.81-13.008-53.267c0,0-32.539-4.692-8.938-37.353h246.181
                c0,0,32.983,19.156,26.471,40.385c0,0,19.945,31.026-16.071,42.458c0,0,11.189,24.839-14.854,36.914c0,0,8.63,25.584-12.079,28.306
                c0,0-7.455,21.328-33.499,11.528C827.722,146.591,815.898,178.951,777.045,153.789z" />
            </g>
            <g>
                <ellipse opacity="0.1" cx="892.479" cy="269.639" rx="158.817" ry="28.431" />
                <path fill="#A67C52" d="M932.652,269c0,0-33.387,19.333-74.886,0c0,0,18.971-73,18.187-110h36.578
                C912.531,159,909.266,196,932.652,269" />
                <path fill="#F15A24" d="M914.547,189.42c0,0-47.271,33.635-90.312-8.85c0,0-67.568,5.629-73.717-35.848
                c0,0-47.39-18.567-37.141-45.784c0,0-53.092-28.876-13.186-75.331c0,0-14.863-36.608,13.502-36.608h315.096
                c0,0,57.92,44.904,16.929,63.154c0,0,38.858,40.474-18.528,59.712c0,0-1.162,36.415-48.302,43.052
                C978.888,152.918,975.769,194.396,914.547,189.42z" />
            </g>
            <g id="leafPlace" ref={leafPlace}></g>
            <g id="strAutumn">
                <text id="alex" transform="matrix(1 0 0 1 170 130)" fill="#FFFFFF" fontFamily="Quicksand-Regular" fontSize={90}>Alex’s</text>
                <text id="repository" transform="matrix(1 0 0 1 435 130)" fill="#FFFFFF" fontFamily="Quicksand-Regular" fontSize={90}>repository</text>
            </g>
        </svg>
    )
}

let AutumnThemeColours: ThemeColours = {
    primary: '#FBB03B',
    secondary: '#ED1C24',
    background: '#FBB03B',
    buttonSelected: '#ED1C24',
    heading: '#ED1C24'
}

export var AutumnTheme: Theme = new Theme("autumn", <Autumn/>, AutumnThemeColours);