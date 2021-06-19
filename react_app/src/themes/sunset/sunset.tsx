import React from 'react';
import { Theme, ThemeColours } from '../themes';
import $ from 'jquery';
import './sunset.css';


function Sunset(): JSX.Element {

    let svgRef = React.useRef(null);


    React.useEffect(()=>{
        const svgNameSpace = "http://www.w3.org/2000/svg",
            clouds = document.getElementById('cloudsContainer')!,
            //path = document.createElementNS(svgNameSpace, 'path')
            time = 0,
            //curveLength = 100,
            diameter = 25,
            totalTime = 20, //seconds
            speed = 0.2 //px per minute
                
        let animateSide = (guideId: string, isReversed: Boolean) => {
            let svg: SVGElement|null = svgRef.current;
            if (svg===null) return;
            let guide = (svg!.querySelector('#'+guideId)!) as SVGPathElement;
            let totalLength = guide!.getTotalLength();
            let numberOfCircles = Math.ceil(totalLength/(diameter*.75));
            let circlesPerSecond = totalTime/numberOfCircles;
            let keyPointsStr = isReversed ? '1;0' : '0;1';

            for (let i=0; i<numberOfCircles; i++){
                let delay = circlesPerSecond * -i;
                clouds.innerHTML +=`<circle fill="black" stroke="none" strokeMiterlimit="10" x='-100' y='-100' r='${diameter/2}'>
                    <animateTransform begin='${delay}s' attributeName="transform"
                    attributeType="XML"
                    type="scale"
                    from="0"
                    to="2.5"
                    values="0; 1; 2"
                    keyTimes="0; 0.1; 1"
                    dur="${totalTime}s"
                    repeatCount="indefinite"/>
                    <animateMotion begin='${delay}s' dur="${totalTime}s" keyTimes="0;1" keyPoints="${keyPointsStr}" calcMode='linear' repeatCount="indefinite">
                    <mpath href="#${guideId}"/>
                    </animateMotion>
                </circle>`;
            }
        }

        for (let obj of [{guideStr:'guide1', isReversed:true}, {guideStr:'guide2', isReversed:true}]){
            animateSide(obj.guideStr, obj.isReversed)
        }
        
    }, []);

    React.useEffect((): ()=>void =>{
        var style = $(`
            <style>
                #tabButtons .selected { animation: sunset linear 5s; }
                #tabButtons .selected { animation: sunset linear 5s; }
                .paragraphHeading { animation: sunsetText linear 5s forwards; }
            </style>
        `)[0];
        document.head.appendChild(style);

        let removeStyle: ()=>void = ():void =>{ document.head.removeChild(style); }; 
        let timeout: number = window.setTimeout(removeStyle, 5000);
        // remove this style automatically, so when we change page/hover over new buttons,
        // we don't have the effect restart

        return ():void =>{
            // if the style hasn't been removed yet, and we are componentUnmount'ing,
            // cancel timeout and remove manually
            if (!document.head.contains(style)) return;
            clearTimeout(timeout);
            removeStyle();
        };
    }, []);

	return (
        <svg ref={svgRef} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 1000 300" xmlSpace="preserve">
            <g>
                <linearGradient id="skyGradient" gradientUnits="userSpaceOnUse" x1="501" y1="299.5" x2="501" y2="4.882812e-04">
                    <stop offset="0" stopColor="#FF1C00">
                        <animate attributeName="stop-color" values="#A9FFFB;#FFD07E;#FF1C00" dur="5s" repeatCount="1" />
                    </stop>
                    <stop offset="1" stopColor="#FFD07E">
                        <animate attributeName="stop-color" values="#A9FFFB;#FFD07E;" dur="5s" repeatCount="1" />
                    </stop>
                    {/*<stop offset="1" stopColor="#A9FFFB"/>*/}
                </linearGradient>
                <path fill="url(#skyGradient)" d="M1001,266.528V0H1v299.5C1,299.5,520,227.44,1001,266.528z"/>
                <path d="M1001,264.528C520,225.44,1,299.5,1,299.5l1000,1.601V264.528z"/>
            </g>
            <rect x="597.5" y="200.5" stroke="#000000" strokeMiterlimit="10" width="141" height="56"/>
            <polygon stroke="#000000" strokeMiterlimit="10" points="746.5,200.5 587.5,200.5 596.5,156.5 738.5,156.5 "/>
            <polygon stroke="#000000" strokeMiterlimit="10" points="631.098,200.5 670.13,150.5 704.925,200.5 "/>
            <g>
                <rect x="711.5" y="134.5" stroke="#000000" strokeMiterlimit="10" width="10" height="23"/>
                <rect x="710" y="129.5" stroke="#000000" strokeMiterlimit="10" width="13" height="6"/>
            </g>
            <g>
                <polygon points="548,233.188 546,237 546,263 550,263 550,237 	"/>
                <polygon points="558,233.188 556,237 556,263 560,263 560,237 	"/>
                <polygon points="568,233.188 566,237 566,263 570,263 570,237 	"/>
                <polygon points="578,233.188 576,237 576,263 580,263 580,237 	"/>
                <polygon points="588,233.188 586,237 586,263 590,263 590,237 	"/>
                <polygon points="598,233.188 596,237 596,263 600,263 600,237 	"/>
                <polygon points="608,233.188 606,237 606,263 610,263 610,237 	"/>
                <polygon points="618,233.188 616,237 616,263 620,263 620,237 	"/>
                <rect x="543" y="241" width="79" height="3"/>
                <rect x="543" y="251" width="79" height="3"/>
            </g>
            <g>
                <polygon points="711,233.188 709,237 709,263 713,263 713,237 	"/>
                <polygon points="721,233.188 719,237 719,263 723,263 723,237 	"/>
                <polygon points="731,233.188 729,237 729,263 733,263 733,237 	"/>
                <polygon points="741,233.188 739,237 739,263 743,263 743,237 	"/>
                <polygon points="751,233.188 749,237 749,263 753,263 753,237 	"/>
                <polygon points="761,233.188 759,237 759,263 763,263 763,237 	"/>
                <polygon points="771,233.188 769,237 769,263 773,263 773,237 	"/>
                <polygon points="781,233.188 779,237 779,263 783,263 783,237 	"/>
                <rect x="706" y="241" width="79" height="3"/>
                <rect x="706" y="251" width="79" height="3"/>
            </g>
            <path stroke="#000000" strokeMiterlimit="10" d="M532.229,227.011c0,0-7.729,21.083-30.657,8.555
                c0,0-22.035,12.688-22.029-11.827c0,0-25.62-9.904-3.386-29.423c0,0-0.783-28.735,26.596-19.29c0,0,20.011-15.072,24.711,7.995
                c0,0,20.231,2.351,12.282,17.984C539.747,201.007,554.729,222.011,532.229,227.011z"/>
            <path fill='black' d="M710,130c0,0-1.667-17.083-9.333-21.417s-13.334-14.458-13-23.458s-3-18.062-10-23.729S665.999,38.032,668,30.699
                S655.335,0.016,652.001,0.016l109-0.008c0,0-14.667,27.331-11.667,36.664s5.333,21.332,0.333,24.998s-12.667,18.666-11,23.666
                s0,14.333-4,17.666S722.333,118.585,723,121.918s1.999,5.082,0,8.082H710z"/>
            <path stroke="#000000" strokeMiterlimit="10" d="M501.666,236.5c0,0-0.999,20-4.666,27h17c0,0-3.514-15.406-4-27H501.666z"/>
            <g>
                <rect x="801.5" y="231.5" stroke="#000000" strokeMiterlimit="10" width="2" height="30"/>
                <g>
                    <path d="M796.5,231c0,0-0.25-8,1-8h10.167c1.166,0,0.833,8,0.833,8H796.5z"/>
                    <polygon points="805.875,223.275 805.875,220.275 806.875,220.275 806.862,220.859 806.231,220.859 806.231,223.275 		"/>
                </g>
            </g>
            <ellipse id='blackbox' cx='715' cy='119' rx='15' ry='10'/>
            <path id="guide2" fill="none" d="M633.868-30.777l18.133,31.058c3.334,0,18,23.115,15.999,30.449s2.667,25.062,9.667,30.729
	s10.334,14.792,10,23.792s5.334,19.25,13,23.583S716.5,128.25,716.5,128.25"/>
<path id="guide1" fill="none" d="M784.75-36L761.001,0.008c0,0-14.667,27.331-11.667,36.664s5.333,21.332,0.333,24.998
	s-12.667,18.666-11,23.666s0,14.333-4,17.666S720.094,116.352,720,119.75c-0.096,3.455-1.501,5.5-3.5,8.5"/>

            <g id='cloudsContainer'>
            </g>
            <text id='alexsRepository'>Alex's Repository</text>
        </svg>      
	)
}


let SunsetThemeColours: ThemeColours = {
	primary: 'red',
	secondary: 'black',
	background: 'black',
    buttonSelected: 'red',
    heading: 'red'
}

export var SunsetTheme: Theme = new Theme("sunset", <Sunset/>, SunsetThemeColours);
