import React from 'react';

import { FrontEndTechType, FrontEndTechSubType, WebTech, ReactSubType, FrontEndTechStack } from './FrontEndTech';
import { BackEndTechType, BackEndTechSubType, ExpressSubType, WebSocketSubType, NodeTech, SympySubType, PythonTech, FlaskSubType, NumpySubType, SklearnSubType, BackEndTechStack } from './BackEndTech';
import { DatabaseTechType, DatabaseTechSubType, Sqlite3Tech, DatabaseTechStack, Neo4jTech } from './DatabaseTech';
import { SlideshowElementObj } from '../slideshow/slideshow';
import { TechStack, SuperTechType, TechType } from './TechUtilities';
import { noTabs } from '../Utilities';
import { OtherTechType, OtherTechSubType, OtherTechStack, AzureTech, CloudComputingSubType } from './OtherTech';

interface Project {
	name: string,
	url?: string,
	github?: string,
	isWorkInProgress: boolean,
	images: SlideshowElementObj[],
	bulletPoints: JSX.Element[],
	tech?: TechStack<SuperTechType<TechType>>[]
}

export const WhisperProj: Project = {
	name: "Whisper",
	url: "https://alexpegg.com/whisper",
	github: "https://github.com/peggalex/whisper",
	isWorkInProgress: true,
	images: [
		{ 
			src: './whisperBasic.png',
			isVideo: false,
			caption: 'This is the message screen UI. You can send messages back and forth in real time using web sockets.'
		},
		{
			src: './whisperDemoCreate.mp4',
			isVideo: true,
			caption: 'Create a new user and add friends.'
		},
		{
			src: './whisperDemoConvo.mp4',
			isVideo: true,
			caption: 'Converse with other people and show the last message.'
		},
		{
			src: './whisperDemoEncryption.mp4',
			isVideo: true,
			caption: 'The server only sees encrypted messages, it cannot read your data.'
		}
	],
	bulletPoints: [
		<>Messaging app that encrypts messages so the server can't see.</>,
		<>Search users, send friend requests, talk to friends and see whos online in real time.</>,
		<>Front and backend validation for express routing calls and websocket connections.</>,
		<>Encryption done with subtle.crypto.</>
	],
	tech: [
		new FrontEndTechStack(
			new WebTech([
				ReactSubType, 
			])
		),
		new BackEndTechStack(
			new NodeTech([
				ExpressSubType, 
				WebSocketSubType
			])
		),
		new DatabaseTechStack(
			new Sqlite3Tech([])
		)

	]
}

export const MicrographerProj: Project = {
	name: "Micrographer",
	url: "https://mcsapps.utm.utoronto.ca/micrographer",
	isWorkInProgress: false,
	images: [
		{
			src: './micrographerBasic.png',
			isVideo: false,
			caption: noTabs(
				'This is a basic output. The different indifferent curves and \
				budget lines are graphed, and points of interest, \
				including substitution and income effects, \
				are listed on the right.'
			)
		},
		{
			src: './micrographerDemoBasic.mp4',
			isVideo: true,
			caption: 'This is an example input (a Cobb-Douglas utility function).'
		},
		{
			src: './micrographerDemoDesmos.mp4',
			isVideo: true,
			caption: noTabs(
				'The graphing is done by the Desmos API. \
				You can zoom, hover over curves and select intersection points.'
			)
		}
	],
	bulletPoints: [
		<>Full stack application built for the economics department of University of Toronto.</>,
		<>Microeconomics indifference curve analysis application.</>,
		<>The optima is calculated using an algebraic parser sympy in the backend python.</>,
		<>The result is graphed with the Desmos API.</>,
	],
	tech: [
		new FrontEndTechStack(
			new WebTech([])
		),
		new BackEndTechStack(
			new PythonTech([
				FlaskSubType, 
				SympySubType
			])
		)
	]
}

export const TwentyFortyEightProj: Project = {
	name: "2048 Game",
	url: "https://peggalex.github.io/test2048",
	isWorkInProgress: false,
	images: [
		{
			src: './2048Basic.png',
			isVideo: false,
			caption: 'This is the game UI. You play the game using the arrow keys.'
		},
		{
			src: './2048Demo.mp4',
			isVideo: true,
			caption: 'Demo playing a new game of 2048.'
		},
		{
			src: './2048DemoBase.mp4',
			isVideo: true,
			caption: 'Unlike the original game, you can change the base from 2 up to 5.'
		}
	],
	bulletPoints: [
		<>Comprehensive model/view/controller game.</>,
		<>Control with arrow keys.</>,
		<>Cookies store highscore.</>,
		<>Animations are pure css and js.</>
	],
	tech: [
		new FrontEndTechStack(
			new WebTech([])
		)
	]
};

export const SimpleGradeCalculatorProj: Project = {
	name: "Simple grade calculator",
	url: "https://peggalex.github.io/rachel.html",
	isWorkInProgress: false,
	images: [
		{
			src: './gradeCalcBasic.png',
			isVideo: false,
			caption: 'This is the calculator UI. Not pictured is the pdf and cdf graph.'
		},
		{
			src: './gradeCalcDemo.mp4',
			isVideo: true,
			caption: 'Demo of using the calculator.'
		},
		{
			src: './gradeCalcDemoCalc.mp4',
			isVideo: true,
			caption: 'Demo perfoming inference.'
		}
	],
	bulletPoints: [
		<>Calculate final grade given marks and weights.</>,
		<>Label different marks and use fractions instead of percentages.</>,
		<>Also assumes grades are normally distributed and can predict future grades using a PDF/CDF.</>,
		<>Uses the https://api.mathjs.org/ endpoint to calculate the CDF.</>
	],
	tech: [
		new FrontEndTechStack(
			new WebTech([])
		)
	]
};

export const TShirtWebsiteProj: Project = {
	name: "T-shirt example website",
	url: "https://peggalex.github.io/tShirtWebsite.html",
	isWorkInProgress: false,
	images: [
		{
			src: './tShirtSiteBasic.png',
			isVideo: false,
			caption: 'Homepage for the site.'
		},
		{
			src: './tShirtSiteDemo.mp4',
			isVideo: true,
			caption: 'Demo using the React carousel for the website.'
		},
		{
			src: './tShirtSiteDemoSnap.mp4',
			isVideo: true,
			caption: 'Demo of snap scroll and dynamic .'
		}
	],
	bulletPoints: [
		<>My friend wanted to bring her t-shirt business online, so I made a template website.</>,
		<>Written using React hooks, has stateful carousel and snap scroll.</>,
		<>Renders differently depending on media queries (mobile).</>
	],
	tech: [
		new FrontEndTechStack(
			new WebTech([
				ReactSubType
			])
		)
	]
};

export const CompetitionProj: Project = {
	name: "Scotiabank Big Data AI Competition",
	url: "https://peggalex.github.io/BigDataCompPPT_Incorgnito.pdf",
	isWorkInProgress: false,
	images: [
		{
			src: './accountEmailParameters.png',
			isVideo: false,
			caption: 'Parameters used for account and email classification.'
		},
		{
			src: './clusterRelationshipParameters.png',
			isVideo: false,
			caption: 'Parameters used for cluster and relationship classification.'
		},
		{
			src: './communityAlgorithm.png',
			isVideo: false,
			caption: 'Different community detection algorithms. The simple UnionFind algorithm just detects if there exists some link (no matter how long) between accounts, like if there exists a chain of friends on facebook between you and a person. The Louvian algorithm identifies highly connected clusters using weighted edges, like if there exists a chain of facebook friends who talk with each other constantly between you and a person.'
		},
		{
			src: './parameterDistribution.png',
			isVideo: false,
			caption: 'A fundamental assumption of the model was that the data is normally distributed. In reality, the variables had many different distributions. However, with our large dataset, they are all tightly centered about their mean.'
		},
		{
			src: './cdf.png',
			isVideo: false,
			caption: 'Demonstration of the multivariate normal model with 2 parameters. As you can see, the normal assumption holds well. The real model uses multiple dimensions which is more difficult to visualize in a graph.'
		},
		{
			src: './technologyCompetition.png',
			isVideo: false,
			caption: 'A fundamental assumption of the model was that the data is normally distributed. In reality, the variables had many different distributions. However, with our large dataset, they are all tightly centered about their mean.'
		},
		{
			src: './accountFindings.png',
			isVideo: false,
			caption: '4 most suspicious accounts and their relationships.'
		},
		{
			src: './accountFindingsLocations.png',
			isVideo: false,
			caption: '4 most suspicious accounts and their locations. Notice repeat activity on the Canadian-US border.'
		}
	],
	bulletPoints: [
		<>
			Scotiabank <a href="https://www.utm.utoronto.ca/imi/imi-events/big-data-ai-case-competition">competition</a> identifying
			 human traffickting/money laundering using bank data.
		</>,
		<>
			We <a href="https://www.utm.utoronto.ca/imi/news/results-are-2020-big-data-ai-case-competition">won</a> the 
			first place prize of $3000.
		</>,
		<>They gave us real (hashed) bank data and tasked us with classifying accounts (unsupervised).</>,
		<>Parameterised data with neo4j, used azure cloud computing to handle large data (8 million rows).</>,
		<>Generated a normal multivariate cdf of the data using python, selecting outliers at the tails.</>,

	],
	tech: [
		new BackEndTechStack(
			new PythonTech([
				NumpySubType,
				SklearnSubType
			])
		),
		new DatabaseTechStack(
			new Neo4jTech([])
		),
		new OtherTechStack(
			new AzureTech([
				CloudComputingSubType
			])
		)
	]
};

/*
	<Paragraph heading={"Scotiabank Big Data AI competition"} content={parseParagraph(
		`I participated in a \
        <a href="https://www.utm.utoronto.ca/imi/imi-events/big-data-ai-case-competition">competition</a> \
        hosted by scotiabank to identify human traffickting pertaining to money laundering in bank data.
        We <a href="https://www.utm.utoronto.ca/imi/news/results-are-2020-big-data-ai-case-competition">won</a> \
        the first place prize of $3000.
        They gave us real bank data and tasked us with classifying accounts.
        Using neo4j, I parameterised the data with addition aggregation parameters.
        Then, using scipy and numpy, I generated a normal multivariate cdf of the data, \
        and from there it's just selecting outliers at the tails.
        Here are some <a href="https://peggalex.github.io/graphDemo">highlight slides</a> \
        and the <a href="https://peggalex.github.io/BigDataCompPPT_Incorgnito.pdf">entire presentation</a>.`
	)} />

	<Paragraph heading={"Fortnite2D"} content={parseParagraph(
		`(!!!WORK IN PROGRESS!!!)
        <a href="https://alexpegg.com/ftd">https://alexpegg.com/ftd</a>, source: \
        <a href="https://github.com/peggalex/multiplayerShooter">https://github.com/peggalex/multiplayerShooter</a></p>
        Multiplayer shooting game based off of fortnite.
        React frontend (canvas for game), nodejs backend with express and websockets. Sqlite database.
        Features graphics, sounds, weapons and ammo to pick up.
        Front and backend validation for express routing calls and websocket connections.
        This is the only project I put in my portfolio that was actually school work, as per \
        <a href="http://142.1.200.148/~ta/assignments/03/index.php">this assignment</a>.
        There's a lot I'd like to fix:
        <ul>
          <li>I would like to redo the backend in typescript (never tried before).</li>
          <li> The front end is currently in react (class components), I want to redo it in React hooks. </li>
          <li> The assignment asked for a lot of fields in registration, I want to cut down on that. </li>
          <li> Bug: network request to the server whenever audio played (even if preloaded property set). </li>
          <li> Feature: Make weapons respawn automatically and add ring</li>
        </ul>`
	)} />

	<Paragraph heading={'Hong Kong SVG animation'} content={parseParagraph(
		`(!!!WORK IN PROGRESS!!!)
    <a href="https:/peggalex.github.io/hk">https:/peggalex.github.io/hk</a>
    SVG artwork of Victoria Harbour in Hong Kong, animated using CSS.
    Recommend firefox for optimal SVG performance.`
	)} />

	<Paragraph heading={"Shortest Path Finder"} content={parseParagraph(
		`(!!!WORK IN PROGRESS!!!)
    Shortest path from a point A to point B given drawn polygon obstacles.
    Allows for uploading images to trace on top of.
    Currently in the process of converting my working python code \
    <a href='https://github.com/peggalex/pathfinder'>here</a> to javascript`
	)} />

	<Paragraph heading={'Converting Node Graphs to Latex'} content={parseParagraph(
		`(!!!WORK IN PROGRESS!!!)
    <a href="https://peggalex.github.io/grapher.html">https://peggalex.github.com/grapher.html</a>
    Draw a node graph and then convert it into code that can be copied into latex.
    Expands on features from this similar website: \
    <a href="http://madebyevan.com/fsm/"> http://madebyevan.com/fsm/</a>.`
	)} />

	<Paragraph heading={'HTML Resume'} content={parseParagraph(
		`<a href="https://peggalex.github.io/resume3.html">https://peggalex.github.com/resume3.html</a>
    Resume stylized to look like an ide using a combination of syntax from different programming languages.
    Webfonts unpredictable in Safari, Firefox - recommend chrome
    Compiled pdf version <a href="https://peggalex.github.io/Alex_Pegg_Resume.pdf">here</a>.
    Professional resume <a href='https://www.overleaf.com/read/kttybhdbwppk'>here</a>.`
	)} />
*/

export const Projects: Project[] = [
	WhisperProj,
	MicrographerProj,
	CompetitionProj,
	TwentyFortyEightProj,
	SimpleGradeCalculatorProj,
	TShirtWebsiteProj
];