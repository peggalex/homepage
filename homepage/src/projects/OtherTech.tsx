import { TechType, SuperTechType, TechStack } from "./TechUtilities"
import React from 'react';
import Icons from "../icons";

export class OtherTechSubType extends TechType {}

export class OtherTechType<TTechSubType> extends SuperTechType<TTechSubType> {}

export class OtherTechStack extends TechStack<OtherTechType<OtherTechSubType>>{

	constructor(superTechType: OtherTechType<OtherTechSubType>){
		super("Other", Icons.Other, superTechType);
	}

}

class AzureSubType extends OtherTechSubType {}

	export const CloudComputingSubType = new AzureSubType(
		"Cloud Computing",
		<img src="./cloudComputingIcon.png"></img>
	);

export class AzureTech extends OtherTechType<AzureSubType>{
	name = "Azure";
	icon = <img src="./azureIcon.png"></img>;
}
