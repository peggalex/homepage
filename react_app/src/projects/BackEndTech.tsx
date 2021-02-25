import { TechType, SuperTechType, TechStack } from "./TechUtilities"
import { mediaUrlPrefix } from "../Utilities"
import React from 'react';
import Icons from "../icons";

export class BackEndTechSubType extends TechType {}

export class BackEndTechType<TTechSubType> extends SuperTechType<TTechSubType> {}

export class BackEndTechStack extends TechStack<BackEndTechType<BackEndTechSubType>>{

	constructor(superTechType: BackEndTechType<BackEndTechSubType>){
		super("Back-End", Icons.BackEnd, superTechType);
	}

}

class PythonSubType extends BackEndTechSubType {}

	export const FlaskSubType = new PythonSubType(
		"Flask",
		<img src={`${mediaUrlPrefix}flaskIcon.png`}></img>
	);

	export const SympySubType = new PythonSubType(
		"Sympy",
		<img src={`${mediaUrlPrefix}sympyIcon.png`}></img>
	);

	export const NumpySubType = new PythonSubType(
		"Numpy",
		<img src={`${mediaUrlPrefix}numpyIcon.png`}></img>
	);

	export const SklearnSubType = new PythonSubType(
		"Sklearn",
		<img src={`${mediaUrlPrefix}sklearnIcon.png`}></img>
	);

export class PythonTech extends BackEndTechType<PythonSubType>{
	name = "Python";
	icon = Icons.Python;
}

class NodeSubType extends BackEndTechSubType {}

	export const ExpressSubType = new NodeSubType(
		"Express",
		<img src={`${mediaUrlPrefix}expressIcon.png`}></img>
	);

	export const WebSocketSubType = new NodeSubType(
		"WebSocket",
		<img src={`${mediaUrlPrefix}wsIcon.png`}></img>
	)

export class NodeTech extends BackEndTechType<NodeSubType>{
	name = "Node";
	icon = <img src={`${mediaUrlPrefix}nodejsIcon.png`}></img>;
}
