import { TechType, SuperTechType, TechStack } from "./TechUtilities"
import React from 'react';
import Icons from "../icons";


export class FrontEndTechSubType extends TechType {}

export class FrontEndTechType<TTechSubType> extends SuperTechType<TTechSubType> {}

export class FrontEndTechStack extends TechStack<FrontEndTechType<FrontEndTechSubType>>{

	constructor(superTechType: FrontEndTechType<FrontEndTechSubType>){
		super("Front-End", Icons.FrontEnd, superTechType);
	}

}
class WebSubType extends FrontEndTechSubType {}

	export const ReactSubType = new WebSubType(
		"React",
		Icons.React
	)

	export const TypeScriptSubType = new WebSubType(
		"TypeScript",
		<img src="./typescriptIcon.png"></img>
	)

export class WebTech extends FrontEndTechType<WebSubType>{
	name = "Web";
	icon = Icons.Web;
}