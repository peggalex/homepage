import { TechType, SuperTechType, TechStack } from "./TechUtilities"
import { mediaUrlPrefix } from "../Utilities"
import React from 'react';
import Icons from "../icons";

export class DatabaseTechSubType extends TechType {}

export class DatabaseTechType<TTechSubType> extends SuperTechType<TTechSubType> {}

export class DatabaseTechStack extends TechStack<DatabaseTechType<DatabaseTechSubType>>{

	constructor(superTechType: DatabaseTechType<DatabaseTechSubType>){
		super("Database", Icons.Database, superTechType);
	}

}

class Sqlite3SubType extends DatabaseTechSubType {}

export class Sqlite3Tech extends DatabaseTechType<Sqlite3SubType>{
	name = "Sqlite3";
	icon = <img src={`${mediaUrlPrefix}sqliteIcon.png`}></img>;
}

class Neo4jSubType extends DatabaseTechSubType {}

export class Neo4jTech extends DatabaseTechType<Neo4jSubType>{
	name = "Neo4j";
	icon = <img src={`${mediaUrlPrefix}neo4jIcon.png`}></img>;
}
