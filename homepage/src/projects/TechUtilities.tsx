import React from 'react';

export class TechType {
	name: string;
	icon?: JSX.Element;

	constructor(name: string, icon: JSX.Element = <></>){
		this.name = name;
		this.icon = icon;
	}
}

export class TechStack<TSuperTechType> {
	name: string;
	icon?: JSX.Element;
	superTechType: TSuperTechType;

	constructor(name: string, icon: JSX.Element|undefined = undefined, superTechType: TSuperTechType){
			this.name = name;
			this.icon = icon;
			this.superTechType = superTechType;
	}
}

export class SuperTechType<TTechSubType> extends TechType {
	subTypes?: TTechSubType[];

	constructor(subTypes: TTechSubType[]){
		super("");
		this.subTypes = subTypes;
	}
}