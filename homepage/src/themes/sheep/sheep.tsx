import React from 'react';
import { Theme, ThemeColours } from '../themes';

import './sheep.css';

function Sheep(): JSX.Element {

	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 300">
			<g id="background">
				<rect id="sky" fill="#A6DCF7" width={1000} height={238} />
			</g>
			<g id="txt_1_">
				<g id="str">
					<text id="alexSheep" transform="matrix(1 0 0 1 260 170)" fill="#54ACEF" fontFamily="Quicksand" fontSize="87.2863">alex’s</text>
					<text id="repositorySheep" transform="matrix(1 0 0 1 504.5 170)" fill="#FFFFFF" fontFamily="Quicksand" fontSize="91.2708">repository</text>
				</g>
			</g>
			<g id="clouds_1_">
				<path id="cloud1" fill="#FFFFFF" d="M-247.254,88.515h241c0,0-7.944-30.859-41.489-19.456c0,0-24.771-34.882-60.736-2.529
			c0,0-43.86-70.624-98.247-0.714C-206.727,65.816-239.536,60.602-247.254,88.515z" />
				<path id="cloud2" fill="#FFFFFF" d="M-533.254,47.515h247c0,0-9.279-28.462-36.473-17.003c0,0-50-69.354-95.614,0
			c0,0-38.597-22.155-57.895,10.003C-476.235,40.515-502.553,18.848-533.254,47.515z" />
			</g>
			<g id="ground_1_">
				<g id="ground">
					<path fill="#259E5B" d="M1000,238c0,0-128.803-79.938-297.901-25.025c0,0-76.099-31.072-153.099,5.127c0,0-161-48.533-231,2.664
				c0,0-68.963-49.053-207.981,6.168c0,0-75.019-11.349-110.019,11.066" />
					<rect y={238} fill="#7FFFAB" width={1000} height={62} />
				</g>
				<g id="treeSmall">
					<ellipse opacity="0.1" enableBackground="new    " cx="172.867" cy="268.056" rx="47.921" ry="9.856" />
					<path fill="#D3AF8C" d="M166.75,219.009c0,0-0.175,36.544-8.478,49.121l29.165-0.44c-9.367-8.004-7.238-46.838-7.238-46.838" />
					<g>
						<g>
							<ellipse fill="#4DC158" cx="190.125" cy="158.596" rx="48.848" ry="39.816" />
							<ellipse fill="#4DC158" cx="157.156" cy="158.942" rx="48.016" ry="42.223" />
							<ellipse fill="#4DC158" cx="173.092" cy="164.207" rx="45.956" ry="63.906" />
							<ellipse fill="#4DC158" cx="189.686" cy="182.464" rx="59.57" ry="39.815" />
							<ellipse fill="#4DC158" cx="142.343" cy="182.464" rx="47.343" ry="39.815" />
						</g>
						<ellipse fill="#4DC158" cx="150.757" cy="194.62" rx="35.833" ry="31.953" />
						<ellipse fill="#4DC158" cx="195.749" cy="193.08" rx="35.833" ry="31.953" />
					</g>
				</g>
				<g id="treeBig">
					<ellipse opacity="0.1" enableBackground="new    " cx="97.918" cy="281.939" rx="53.24" ry="10.973" />
					<path fill="#CEAD8D" d="M89.882,227.337c0,0-0.153,40.685-7.395,54.685l25.437-0.488c-8.169-8.91-6.313-52.145-6.313-52.145" />
					<g>
						<g>
							<ellipse fill="#5DC967" cx="117.494" cy="160.08" rx="59.308" ry="44.326" />
							<ellipse fill="#5DC967" cx="77.466" cy="160.466" rx="58.298" ry="47.005" />
							<ellipse fill="#5DC967" cx="96.814" cy="166.328" rx="55.796" ry="71.145" />
							<ellipse fill="#5DC967" cx="116.961" cy="186.652" rx="72.326" ry="44.326" />
							<ellipse fill="#5DC967" cx="59.48" cy="186.652" rx="57.48" ry="44.326" />
						</g>
						<ellipse fill="#5DC967" cx="69.696" cy="200.186" rx="43.505" ry="35.572" />
						<ellipse fill="#5DC967" cx="124.322" cy="198.472" rx="43.505" ry="35.572" />
					</g>
				</g>
				<g id="grass">
					<polyline fill="none" stroke="#5DC967" strokeMiterlimit={10} points="239,258.062 245.904,250.671 252.207,258.062 
				258.511,250.671 263.613,258.062 270.217,250.671 274.719,258.062 280.723,251.089 285.825,258.062 290.512,251.089 
				296.031,258.062 		" />
					<polyline fill="none" stroke="#5DC967" strokeMiterlimit={10} points="391,286.062 397.904,278.671 404.207,286.062 
				410.511,278.671 415.613,286.062 422.217,278.671 426.719,286.062 432.723,279.089 437.825,286.062 442.512,279.089 
				448.031,286.062 		" />
					<polyline fill="none" stroke="#5DC967" strokeMiterlimit={10} points="483,254.062 489.904,246.671 496.207,254.062 
				502.511,246.671 507.613,254.062 514.217,246.671 518.719,254.062 524.723,247.089 529.825,254.062 534.512,247.089 
				540.031,254.062 		" />
					<polyline fill="none" stroke="#5DC967" strokeMiterlimit={10} points="620,290.062 626.904,282.671 633.207,290.062 
				639.511,282.671 644.613,290.062 651.217,282.671 655.719,290.062 661.723,283.089 666.825,290.062 671.512,283.089 
				677.031,290.062 		" />
					<polyline fill="none" stroke="#5DC967" strokeMiterlimit={10} points="701,266.062 707.904,258.671 714.207,266.062 
				720.511,258.671 725.613,266.062 732.217,258.671 736.719,266.062 742.723,259.089 747.825,266.062 752.512,259.089 
				758.031,266.062 		" />
					<polyline fill="none" stroke="#5DC967" strokeMiterlimit={10} points="877,275.062 883.904,267.671 890.207,275.062 
				896.511,267.671 901.613,275.062 908.217,267.671 912.719,275.062 918.723,268.089 923.825,275.062 928.512,268.089 
				934.031,275.062 		" />
				</g>
				<g id="sheep1Fore">
					<ellipse opacity="0.1" enableBackground="new    " cx="480.946" cy="276.415" rx="32.267" ry="8.585" />
					<g id="sheep1_1_">
						<g>
							<ellipse fill="#4D4D4D" cx="483.525" cy="238.972" rx="31.403" ry="18.743" />
							<polygon fill="#4D4D4D" points="465.761,247.684 465.75,280 471.492,280 471.155,247.033 				" />
							<path fill="#4D4D4D" d="M464.27,248.279c0,0-19.77,5.414-10.136,28.287l5.677-2.658c0,0-9.227-15.764,9.189-21.908
						L464.27,248.279z" />
							<polygon fill="#4D4D4D" points="499.761,248.684 499.75,281 505.492,281 505.155,248.033 				" />
							<polygon fill="#4D4D4D" points="491.434,243.576 490.054,275.863 495.791,276.105 496.852,243.154 				" />
							<ellipse transform="matrix(-0.6342 -0.7732 0.7732 -0.6342 655.5983 802.7349)" fill="#4D4D4D" cx="517.694" cy="246.279" rx="5.232" ry="2.953" />
						</g>
					</g>
				</g>
				<g id="sheep2Fore">
					<ellipse id="sheep2_1_" opacity="0.1" enableBackground="new    " cx="538.945" cy="288.415" rx="32.268" ry="8.585" />
					<g id="sheep2bodFore">
						<g>
							<ellipse fill="#4D4D4D" cx="537.775" cy="248.137" rx="36.153" ry="21.578" />
							<polygon fill="#4D4D4D" points="528.761,259.684 528.75,292 534.492,292 534.155,259.033 				" />
							<polygon fill="#4D4D4D" points="554.761,260.684 554.75,293 560.492,293 560.155,260.033 				" />
							<polygon fill="#4D4D4D" points="546.761,257.684 546.75,290 552.492,290 552.155,257.033 				" />
							<path fill="#4D4D4D" d="M523.005,259.836c0,0-3.976,11.309-2.546,27.889l5.157,0.559c0,0-1.692-18.916,2.621-27.881
						L523.005,259.836z" />
							<ellipse transform="matrix(-0.6342 -0.7732 0.7732 -0.6342 747.3423 858.1727)" fill="#4D4D4D" cx="576.696" cy="252.282" rx="5.232" ry="2.953" />
						</g>
					</g>
				</g>
				<g id="sheep3Fore">
					<ellipse opacity="0.1" enableBackground="new    " cx="667.968" cy="265.707" rx="30.291" ry="7.876" />
					<g id="sheep3">
						<g>
							<ellipse transform="matrix(0.9992 0.0389 -0.0389 0.9992 9.4502 -25.7367)" fill="#4D4D4D" cx="666.023" cy="229.952" rx="31.403" ry="18.741" />
							<ellipse transform="matrix(0.8672 -0.498 0.498 0.8672 -29.767 344.9482)" fill="#4D4D4D" cx="631.802" cy="228.279" rx="5.232" ry="2.953" />
							<path fill="#4D4D4D" d="M687.263,240.089c0,0,4.729,16.496,0.419,27.927l-5.152-0.076c0,0,3.931-11.404-1.181-26.731
						L687.263,240.089z" />
							<path fill="#4D4D4D" d="M679.44,236.096c0,0,4.44,16.574-0.068,27.928l-5.604-0.323c0,0,4.581-11.177-0.261-26.591
						L679.44,236.096z" />
							<polyline fill="#4D4D4D" points="652,246 652,268 657.625,268 657.312,246 				" />
							<polyline fill="#4D4D4D" points="645,241 645,263 650.625,263 650.312,241 				" />
						</g>
					</g>
				</g>
			</g>
			<g id="Layer_5">
				<ellipse className="sheepHead" id="sheep1Head" transform="matrix(-0.8923 -0.4514 0.4514 -0.8923 1227.0693 766.5787)" fill="#4D4D4D" cx="704.969" cy="236.929" rx="12.488" ry="8.291" />
				<ellipse className="sheepHead" id="sheep3Head" transform="matrix(0.8011 -0.5985 0.5985 0.8011 -60.2672 315.0804)" fill="#4D4D4D" cx="443.947" cy="248.22" rx="14.685" ry="9.75" />
			</g>
			<g id="Layer_6">
				<g id="sheep1Bod">
					<ellipse transform="matrix(0.9999 -0.0124 0.0124 0.9999 -2.8091 8.2237)" fill="#FFFFFF" cx="661.05" cy="230.404" rx="28.99" ry="18.812" />
					<path fill="#FFFFFF" d="M647.635,224.959c-0.131-10.502,10.375-19.146,23.469-19.311c13.096-0.162,23.812,8.22,23.941,18.72
				c0.131,10.501-10.377,19.147-23.469,19.312C658.481,243.841,647.765,235.462,647.635,224.959z" />
					<ellipse transform="matrix(-0.9999 0.0124 -0.0124 -0.9999 1364.2921 468.5272)" fill="#FFFFFF" cx="680.693" cy="238.495" rx="19.601" ry="13.433" />
					<path fill="#FFFFFF" d="M700.229,230.546c0.078,6.435-6.305,11.731-14.261,11.829c-7.957,0.102-14.471-5.038-14.552-11.473
				c-0.079-6.438,6.305-11.732,14.262-11.834C693.633,218.973,700.15,224.109,700.229,230.546z" />
					<ellipse transform="matrix(-0.9999 0.0124 -0.0124 -0.9999 1314.8059 484.0155)" fill="#FFFFFF" cx="655.902" cy="246.085" rx="12.399" ry="7.718" />
					<path fill="#FFFFFF" d="M644.587,214.745c-0.058-4.839,5.118-8.83,11.562-8.911c6.445-0.078,11.721,3.779,11.779,8.622
				c0.062,4.843-5.114,8.833-11.562,8.913C649.925,223.449,644.648,219.588,644.587,214.745z" />
				</g>
				<g id="sheep3Bod">
					<ellipse fill="#FFFFFF" cx="483.25" cy="237.438" rx="36.75" ry="22.091" />
					<ellipse fill="#FFFFFF" cx="502.747" cy="246.693" rx="15.183" ry="13.526" />
					<ellipse fill="#FFFFFF" cx="498.605" cy="223.229" rx="15.184" ry="13.526" />
					<ellipse fill="#FFFFFF" cx="478.77" cy="250.145" rx="23.979" ry="13.526" />
					<ellipse fill="#FFFFFF" cx="478.604" cy="217.168" rx="14.146" ry="8.477" />
				</g>
			</g>
			<g id="Layer_7">
				<ellipse className="sheepHead" id="sheep2Head" transform="matrix(0.8011 -0.5985 0.5985 0.8011 -58.3068 348.9778)" fill="#4D4D4D" cx="495.931" cy="262.219" rx="14.685" ry="9.75" />
			</g>
			<g id="Layer_8">
				<g id="sheep2Bod">
					<g>
						<ellipse fill="#FFFFFF" cx="535.119" cy="246.704" rx="35.687" ry="23.755" />
						<ellipse fill="#FFFFFF" cx="530.399" cy="260.736" rx="23.428" ry="15.63" />
						<ellipse fill="#FFFFFF" cx="552.58" cy="258.894" rx="22.182" ry="13.79" />
						<ellipse fill="#FFFFFF" cx="552.491" cy="236.719" rx="18.312" ry="17.462" />
						<ellipse fill="#FFFFFF" cx="533.803" cy="233.461" rx="24.688" ry="15.732" />
					</g>
					<ellipse fill="#FFFFFF" cx="566.642" cy="244.637" rx="10.366" ry="13.606" />
				</g>
			</g>
		</svg>
	)
}


let SheepThemeColours: ThemeColours = {
	primary: '#A6DCF7',
	secondary: '#7FFFAB',
	background: '#7FFFAB',
    buttonSelected: '#5DC967',
    heading: '#5DC967'
}

export var SheepTheme: Theme = new Theme("sheep", <Sheep/>, SheepThemeColours);
