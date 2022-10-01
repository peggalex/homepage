import React from 'react';

import { WebTech, ReactSubType, FrontEndTechStack, TypeScriptSubType } from './FrontEndTech';
import { ExpressSubType, WebSocketSubType, NodeTech, SympySubType, PythonTech, FlaskSubType, NumpySubType, SklearnSubType, BackEndTechStack, BS4 as BeautifulSoup, SeleniumSubType, NextSubType } from './BackEndTech';
import { Sqlite3Tech, DatabaseTechStack, Neo4jTech, MongoDBTech } from './DatabaseTech';
import { SlideshowElementObj } from '../slideshow/slideshow';
import { TechStack, SuperTechType, TechType } from './TechUtilities';
import { noTabs } from '../Utilities';
import {  OtherTechStack, AzureTech, CloudComputingSubType } from './OtherTech';

export interface TestimonyQuote {
    sentences: string[];
    authorWithTitle: string;
}

export interface Testimony {
    quotes: TestimonyQuote[];
}

export interface Project {
	name: string,
	date: Date,
	url?: string,
	github?: string,
	testimony?: Testimony,
	isWorkInProgress: boolean,
	images: SlideshowElementObj[],
	bulletPoints: JSX.Element[],
	tech?: TechStack<SuperTechType<TechType>>[]
}

export const WhisperProj: Project = {
	name: "Whisper",
	date: new Date(2020, 4),
	url: "https://alexpegg.com/whisper",
	github: "https://github.com/peggalex/whisper",
	isWorkInProgress: false,
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
	date: new Date(2018, 11),
	url: "https://alexpegg.com/micrographer",
	github: "https://github.com/peggalex/micrographer",
	isWorkInProgress: false,
	testimony: {
        quotes: [{
            sentences: ["I can't thank you enough! This is amazing, I've been able to check so many answers without wasting time asking the TA's and classmates."],
            authorWithTitle: 'Daniel Rebello, ECO200 Student',
        }]
    },
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
		},
		{
			src: './micrographerDemoAnimation.mp4',
			isVideo: true,
			caption: noTabs(
				"You can select the 'enable animations' option to visualise the economic intuition behind these intersections."
			)
		},
		{
			src: './micrographerOldDesign.png',
			isVideo: false,
			caption: noTabs(
				"This is the first iteration of design. This was the first html project I had ever worked on, \
				and I tried graphing myself using the html canvas."
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
	date: new Date(2019, 7),
	url: "https://peggalex.github.io/test2048",
	github: "https://github.com/peggalex/peggalex.github.io/blob/master/test2048.html",
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
	date: new Date(2019, 9),
	url: "https://peggalex.github.io/rachel.html",
	github: "https://github.com/peggalex/peggalex.github.io/blob/master/resume3.html",
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

export const CompetitionProj: Project = {
	name: "Scotiabank Big Data AI Competition",
	date: new Date(2020, 3),
	url: "https://peggalex.github.io/BigDataCompPPT_Incorgnito.pdf",
	isWorkInProgress: false,
	images: [
		{
			src: './accountFindings.png',
			isVideo: false,
			caption: '4 most suspicious accounts and their relationships.'
		},
		{
			src: './accountFindingsLocations.png',
			isVideo: false,
			caption: '4 most suspicious accounts and their locations. Notice repeat activity on the Canadian-US border. If you go to the powerpoint link, you can see the full findings including emails and specific relationships.'
		},
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
			caption: 'Different community detection algorithms. The simple UnionFind algorithm just detects if there exists some link (no matter how long) between accounts, like if there exists a chain of friends on facebook between you and a person. The Louvian algorithm identifies highly connected clusters using weighted edges, like if there exists a chain of facebook friends who talk with each other constantly.'
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
			caption: 'These are the libraries I used in python.'
		}
	],
	bulletPoints: [
		<>
			Scotiabank <a href="https://www.utm.utoronto.ca/imi/imi-events/big-data-ai-case-competition">competition</a> identifying
			 human traffickting/money laundering using unlabled bank data.
		</>,
		<>
			We <a href="https://www.utm.utoronto.ca/imi/news/results-are-2020-big-data-ai-case-competition">won</a> the 
			first place prize of $3000.
		</>,
		<>Used azure cloud computing to handle large data (8 million rows).</>,
		<>Generated a normal multivariate cdf of the data in python, selecting outliers at the tails.</>,

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


export const Fortnite2DProj: Project = {
	name: "Fortnite 2D",
	date: new Date(2020, 3),
	url: "https://alexpegg.com/ftd",
	isWorkInProgress: true,
	images: [
		{
			src: './ftdBasic.png',
			isVideo: false,
			caption: 'UI for the game, painted using the html canvas.'
		},
		{
			src: './ftdDemo.mp4',
			isVideo: true,
			caption: 'Demo of playing the game. It\'s a little slow with the video recorder on.'
		}
	],
	bulletPoints: [
		<>Multiplayer shooting game based off of fortnite, made for a school assigment.</>,
		<>React frontend (canvas for game), nodejs backend with express and websockets. Sqlite database.</>,
		<>Features graphics, sounds, weapons and ammo to pick up.</>,
		<>This is a work in progress, I would like to redo the backend in typesript and add a fortnite 'storm'</>,
	],
	tech: [
		new FrontEndTechStack(
			new WebTech([
				ReactSubType
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
};

export const PathfinderProj: Project = {
	name: "Pathfinder",
	date: new Date(2019, 10),
	url: "https://peggalex.github.io/pathfinder",
	github: "https://github.com/peggalex/pathfinder",
	isWorkInProgress: true,
	images: [
		{
			src: './pathfinderBasic.png',
			isVideo: false,
			caption: 'Basic web user interface for pathfinder.'
		},
		{
			src: './pathfinderPython.mp4',
			isVideo: true,
			caption: 'This is the path finding algorithm I wrote visualised in python with Turtle. The green lines are all the possible paths between vertices, and the black line is the optimal, shortest path.'
		},
		{
			src: './pathfinderDemoShapes.mp4',
			isVideo: true,
			caption: 'After getting the algorithm to work in python, I went about creating a user interface so that you could create your own shapes at runtime instead of in the code. You can move specific vertices and entire shapes.'
		},
		{
			src: './pathfinderDemoShape.mp4',
			isVideo: true,
			caption: 'You can also create complex shapes while dragging the mouse cursor, which is useful for tracing over images (see the slide about uploading)'
		},		
		{
			src: './pathfinderDemoDelete.mp4',
			isVideo: true,
			caption: 'You can also delete shapes.'
		},
		{
			src: './pathfinderDemoUpload.mp4',
			isVideo: true,
			caption: 'You can upload images in the background so that you can trace your shapes. The idea behind this was that you could solve mazes or compare this algorithm on a map to google\'s shortest path.'
		}
	],
	bulletPoints: [
		<>Implemented my own algorithm based on <a href="http://www.science.smith.edu/~istreinu/Teaching/Courses/274/Spring98/Projects/Philip/fp/algVisibility.htm" target="_blank">
			this article
		</a>
		.</>,
		<>The article is about visibility graphs, which is contrary to the most popular pathfinding algorithm A*.</>,
		<>A* seems kind of cheating, as it assumes everything is on discrete unit squares.</>,
		<>I implemented visibility graphs myself in O(n^3) but in the article they implement it in O(n^2log(n))</>,
		<>The algorithm I wrote is in python, I made a UI and I am in the process of translating it into javascript.</>
	],
	tech: [
		new FrontEndTechStack(
			new WebTech([])
		),
		new BackEndTechStack(
			new PythonTech([])
		)
	]
};

export const FindingNameoProj: Project = {
	name: "Finding Nameo",
	date: new Date(2020, 6),
	url: "https://alexpegg.com/findingNameo",
	github: "https://github.com/peggalex/findingNameo",
	isWorkInProgress: true,
	images: [
		{
			src: './findingNameoBasic.png',
			isVideo: false,
			caption: 'Basic layout of the Finding Nameo UI.'
		},
		{
			src: './findingNameoDemo.mp4',
			isVideo: true,
			caption: 'This is the desktop UI. I designed the UI elements so that they would work well on landscape desktop resolutions, as well as mobile displays.'
		},
		{
			src: './findingNameoDemoMobile.mp4',
			isVideo: true,
			caption: 'This is the mobile UI. While the design is responsive, the mobile UI is the primary design concern.'
		},
		{
			src: './findingNameoDemoRandomName.mp4',
			isVideo: true,
			caption: "You can randomly select a new name that you haven't rated before, weighted by that name's popularity (it's unlikely you will see some of the 200-900 ranked names unless you have rated all the other names)"
		},		
		{
			src: './findingNameoDemoPartner.mp4',
			isVideo: true,
			caption: 'Using websockets, the ratings are updated in real time, both for the current user who may have multiple instances of the app open, and for that user\'s partner'
		}
	],
	bulletPoints: [
		<>App for you and a partner to rate baby names</>,
		<>The idea is that the highest average rated names between you two would be the best.</>,
		<>Whenever a partner rates a name, a notification is sent to the other partner.</>,
		<>While a web app works on most platforms, push notifications support is weird.</>,
		<>I'm planning on migrating the code to React Native, which I've never used before.</>
	],
	tech: [
		new FrontEndTechStack(
			new WebTech([
				ReactSubType,
				TypeScriptSubType
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
};

export const TurtleArtProj: Project = {
	name: "Turtle Art",
	date: new Date(2018, 10),
	github: "https://github.com/peggalex/turtleArt",
	isWorkInProgress: false,
	images: [
		{
			src: './turtleArtBasic.png',
			isVideo: false,
			caption: 'This is the design. The mountains, clouds, and flowers generate new each run.'
		},
		{
			src: './turtleArtDemo.mp4',
			isVideo: true,
			caption: 'This is the turtle program animated.'
		},
		{
			src: './turtleArtDrawing.mp4',
			isVideo: true,
			caption: 'The program draws the shapes in turtle first.'
		},
		{
			src: './turtleArtFirstProj.mp4',
			isVideo: true,
			caption: "Inspired by my first-ever program I made in first year, this flower drawer."
		},		
		{
			src: './turtleArtFirstProj2.mp4',
			isVideo: true,
			caption: 'This is what it looks like after a while.'
		}
	],
	bulletPoints: [
		<>Program that draws and animates a nature scene</>,
		<>When I was a teaching assistant, we made students write a python turtle race program.</>,
		<>This got me thinking about how much animation I could do with python's turtle.</>,
		<>The first project independent project I ever did myself was drawing a flower in turtle.</>,
		<>I was really proud of it at the time, and that further inspired me to animate a nature scene.</>
	],
	tech: [
		new BackEndTechStack(new PythonTech([]))
	]
};


export const RCHKChampionshipsProj: Project = {
	name: "RCHK Championships",
	date: new Date(2021, 6),
	url: "https://alexpegg.com/rchkChampionships",
	github: "https://github.com/peggalex/rchkChampionships",
	isWorkInProgress: false,
    testimony: {
        quotes: [
            {
            sentences: ["App was super useful for comparing stats between a tight group friends. Other match history websites don’t have this focus on comparing stats amongst a specific group of people. The interface was also super clean and easy to navigate. The developer added more details and stats over time such as multi kill medals, keeping the website fresh and fun. "],
            authorWithTitle: 'Lawrence Ge (user “lolly”)',
            },
            {
                sentences: [
                    "I think the app was very well made. It had a lot of useful stats listed and it was easy to navigate around and it allowed us to easily compare statistics which was really fun to do. I can't even nitpick anything out because (from my point of view) it has catered to all of our needs when it comes to using the app.",
                    "Whatever we asked for, the developer delivered. I was hesitant to ask for something more but whenever I did it was added to the site really quickly. I personally think the biggest strength of this app was not that it had everything, but it is the fact that it was really easy to navigate."
                ],
                authorWithTitle: 'Marcus Tam (user “bert”)',
            }
        ]
    },
	images: [
		{
			src: './rchkChampionshipsBasic.png',
			isVideo: false,
			caption: 'This is the UI (which I really like). I tried to use the same stylings as League of Legends, without using any of their trademarks.'
		},
		{
			src: './rchkChampionshipsDemoPlayers.mp4',
			isVideo: true,
			caption: 'This is the player screen. It shows k/d/a, cs per minute and a breakdown of the champions played. I have to use a riot endpoint to get profile pictures.'
		},
		{
			src: './rchkChampionshipsDemoPlayersSort.mp4',
			isVideo: true,
			caption: 'You can sort the players by different attributes, ascending or descending. Theres also a search, and you can click on a champion to see the matches played.'
		},
		{
			src: './rchkChampionshipsDemoMatches.mp4',
			isVideo: true,
			caption: "These are the matches. I could complicate the UI by showing all the data, but the true match history does all that already (the button on the right). The only draw back is that the player names are blanked."
		},		
		{
			src: './rchkChampionshipsDemoMatchesFilter.mp4',
			isVideo: true,
			caption: 'You can filter by player, and then by champion. There\'s a lot of state to store here, so I used a react reducer. You can click on a player to go to their overall stats.'
		},
		{
			src: './rchkChampionshipsDemoUploadFile.mp4',
			isVideo: true,
			caption: 'This is how I get over the fact that you can\'t get private data via public API. If they just log in and save the html, I can parse it. I\'ve tested different html formats in firefox, chrome (mac and windows) and safari.'
		},
		{
			src: './rchkChampionshipsDemoUploadHTML.mp4',
			isVideo: true,
			caption: 'Instead of uploading the html file, you can simply inspect element and copy the html. This is faster because there\'s no download and we don\'t send images, but is a bit more technical.'
		}
	],
	bulletPoints: [
		<>Program for displaying statistics for League of Legends matches.</>,
		<>Me and my friends played private 5v5 custom matches in LoL.</>,
		<>This is not accessable by public APIs, so someone made a manual spreadsheet to show stats.</>,
		<>To automate this, I created a web app that instead parses .html and does some webscraping</>,
	],
	tech: [
		new FrontEndTechStack(
			new WebTech([
				ReactSubType,
				TypeScriptSubType
			])
		),
		new BackEndTechStack(
			new PythonTech([
				FlaskSubType,
				BeautifulSoup
			])
		),
		new DatabaseTechStack(
			new Sqlite3Tech([])
		)
	]
};


export const InterviewSchedulerProj: Project = {
	name: "Interview Scheduler",
	date: new Date(2021, 7),
	github: "https://github.com/peggalex/interviewScheduler",
	isWorkInProgress: false,
	testimony: {
        quotes: [
            {
            sentences: [
				"Alex helped us in creating a scheduling tool that incorporates many complex scenarios. Everything we asked for was incorporated in the tool capable of generating an output in little to no time! A task that used to take us hours now can be done in a few minutes which significantly improved our process and made our lifes easier.",
				"With no doubt, we will continue using the tool in the future for our annual conference and can’t thank Alex enough for his help! I was really impressed with his skills and his capabilities in turning around this project in such a short time!"
			],
            authorWithTitle: 'Nikhil Kakadiya, ASNA President 2022',
            },
            {
                sentences: [
					"I collaborated with Alex in the creation of a scheduling tool for interviews for our Actuarial Annual Conference. It has been multiple years that we look for a reliable tool capable of incorporating every little detail and scenario we may need to account for while schedule this session.",
					"We have over 30 concurrent sessions and import the data of over 700 participants so creating a scenario that works for all stakeholders is incredibly difficult.",
					"Alex was able to listen to our needs and create a tailored product that incorporated every element we need. On the day of the event, the tool worked amazingly, and the output took only a few seconds to generate!",
					"We will definitely leverage the tool in the future for our next conferences as it perfectly served our need."
                ],
                authorWithTitle: 'Amine Arous, ASNA Convention Chair 2022',
            }
        ]
    },
	images: [
		{
			src: './interviewSchedulerBasic.PNG',
			isVideo: false,
			caption: 'This is the UI (which I really like). I tried to use the same stylings as League of Legends, without using any of their trademarks.'
		},
		{
			src: './rchkChampionshipsDemoPlayers.mp4',
			isVideo: true,
			caption: 'This is the player screen. It shows k/d/a, cs per minute and a breakdown of the champions played. I have to use a riot endpoint to get profile pictures.'
		},
		{
			src: './rchkChampionshipsDemoPlayersSort.mp4',
			isVideo: true,
			caption: 'You can sort the players by different attributes, ascending or descending. Theres also a search, and you can click on a champion to see the matches played.'
		},
		{
			src: './rchkChampionshipsDemoMatches.mp4',
			isVideo: true,
			caption: "These are the matches. I could complicate the UI by showing all the data, but the true match history does all that already (the button on the right). The only draw back is that the player names are blanked."
		},		
		{
			src: './rchkChampionshipsDemoMatchesFilter.mp4',
			isVideo: true,
			caption: 'You can filter by player, and then by champion. There\'s a lot of state to store here, so I used a react reducer. You can click on a player to go to their overall stats.'
		},
		{
			src: './rchkChampionshipsDemoUploadFile.mp4',
			isVideo: true,
			caption: 'This is how I get over the fact that you can\'t get private data via public API. If they just log in and save the html, I can parse it. I\'ve tested different html formats in firefox, chrome (mac and windows) and safari.'
		},
		{
			src: './rchkChampionshipsDemoUploadHTML.mp4',
			isVideo: true,
			caption: 'Instead of uploading the html file, you can simply inspect element and copy the html. This is faster because there\'s no download and we don\'t send images, but is a bit more technical.'
		}
	],
	bulletPoints: [
		<>Program for displaying statistics for League of Legends matches.</>,
		<>Me and my friends played private 5v5 custom matches in LoL.</>,
		<>This is not accessable by public APIs, so someone made a manual spreadsheet to show stats.</>,
		<>To automate this, I created a web app that instead parses .html and does some webscraping</>,
	],
	tech: [
		new FrontEndTechStack(
			new WebTech([
				ReactSubType,
				TypeScriptSubType
			])
		),
		new BackEndTechStack(
			new PythonTech([FlaskSubType])
		),
		new DatabaseTechStack(
			new Sqlite3Tech([])
		)
	]
};


export const WordleBotProj: Project = {
	name: "Wordle Bot",
	date: new Date(2021, 7),
	github: "https://github.com/peggalex/wordleBot",
	isWorkInProgress: false,
	images: [
		{
			src: './interviewSchedulerBasic.PNG',
			isVideo: false,
			caption: 'This is the UI (which I really like). I tried to use the same stylings as League of Legends, without using any of their trademarks.'
		},
		{
			src: './rchkChampionshipsDemoPlayers.mp4',
			isVideo: true,
			caption: 'This is the player screen. It shows k/d/a, cs per minute and a breakdown of the champions played. I have to use a riot endpoint to get profile pictures.'
		},
		{
			src: './rchkChampionshipsDemoPlayersSort.mp4',
			isVideo: true,
			caption: 'You can sort the players by different attributes, ascending or descending. Theres also a search, and you can click on a champion to see the matches played.'
		},
		{
			src: './rchkChampionshipsDemoMatches.mp4',
			isVideo: true,
			caption: "These are the matches. I could complicate the UI by showing all the data, but the true match history does all that already (the button on the right). The only draw back is that the player names are blanked."
		},		
		{
			src: './rchkChampionshipsDemoMatchesFilter.mp4',
			isVideo: true,
			caption: 'You can filter by player, and then by champion. There\'s a lot of state to store here, so I used a react reducer. You can click on a player to go to their overall stats.'
		},
		{
			src: './rchkChampionshipsDemoUploadFile.mp4',
			isVideo: true,
			caption: 'This is how I get over the fact that you can\'t get private data via public API. If they just log in and save the html, I can parse it. I\'ve tested different html formats in firefox, chrome (mac and windows) and safari.'
		},
		{
			src: './rchkChampionshipsDemoUploadHTML.mp4',
			isVideo: true,
			caption: 'Instead of uploading the html file, you can simply inspect element and copy the html. This is faster because there\'s no download and we don\'t send images, but is a bit more technical.'
		}
	],
	bulletPoints: [
		<>Script for trying to solve wordles.</>,
		<>100% winrate, 3.71 average guesses.</>,
		<>Use selenium to run the day's wordle.</>,
		<>Faster solutions online, but this is 100% my own.</>,
	],
	tech: [
		new BackEndTechStack(
			new PythonTech([SeleniumSubType])
		),
	]
};


export const MeetingPlanner: Project = {
	name: "Meeting Planner",
	date: new Date(2021, 7),
	github: "https://github.com/peggalex/meetingPlanner",
	url: "https://alexpegg.com/meetingPlanner",
	isWorkInProgress: false,
	images: [
		{
			src: './interviewSchedulerBasic.PNG',
			isVideo: false,
			caption: 'This is the UI (which I really like). I tried to use the same stylings as League of Legends, without using any of their trademarks.'
		},
		{
			src: './rchkChampionshipsDemoPlayers.mp4',
			isVideo: true,
			caption: 'This is the player screen. It shows k/d/a, cs per minute and a breakdown of the champions played. I have to use a riot endpoint to get profile pictures.'
		},
		{
			src: './rchkChampionshipsDemoPlayersSort.mp4',
			isVideo: true,
			caption: 'You can sort the players by different attributes, ascending or descending. Theres also a search, and you can click on a champion to see the matches played.'
		},
		{
			src: './rchkChampionshipsDemoMatches.mp4',
			isVideo: true,
			caption: "These are the matches. I could complicate the UI by showing all the data, but the true match history does all that already (the button on the right). The only draw back is that the player names are blanked."
		},		
		{
			src: './rchkChampionshipsDemoMatchesFilter.mp4',
			isVideo: true,
			caption: 'You can filter by player, and then by champion. There\'s a lot of state to store here, so I used a react reducer. You can click on a player to go to their overall stats.'
		},
		{
			src: './rchkChampionshipsDemoUploadFile.mp4',
			isVideo: true,
			caption: 'This is how I get over the fact that you can\'t get private data via public API. If they just log in and save the html, I can parse it. I\'ve tested different html formats in firefox, chrome (mac and windows) and safari.'
		},
		{
			src: './rchkChampionshipsDemoUploadHTML.mp4',
			isVideo: true,
			caption: 'Instead of uploading the html file, you can simply inspect element and copy the html. This is faster because there\'s no download and we don\'t send images, but is a bit more technical.'
		}
	],
	bulletPoints: [
		<>App for collaboratively planning meetings.</>,
		<>Create times that users can indicate if available.</>,
		<>Inspired by <a href="https://www.when2meet.com/">when2meet</a>, which lacks design</>,
		<>Loved trying next.js, although SPA is a poor choice.</>,
	],
	tech: [
		new FrontEndTechStack(
			new WebTech([ReactSubType, TypeScriptSubType])
		),
		new BackEndTechStack(
			new NodeTech([NextSubType, TypeScriptSubType])
		),
		new DatabaseTechStack(
			new MongoDBTech([])
		)
	]
};

export const Projects: Project[] = [
	MeetingPlanner,
	WordleBotProj,
	InterviewSchedulerProj,
	RCHKChampionshipsProj,
	FindingNameoProj,
	WhisperProj,
	MicrographerProj,
	CompetitionProj,
	Fortnite2DProj,
	TwentyFortyEightProj,
	PathfinderProj,
	SimpleGradeCalculatorProj,
	TurtleArtProj
].sort((a, b) => - (a.date.getTime() - b.date.getTime()));

export const HongKongDesign: Project = {
	name: "Hong Kong Skyline",
	date: new Date(2019, 9),
	url: "https://alexpegg.com/findingNameo",
	github: "https://github.com/peggalex/findingNameo",
	isWorkInProgress: true,
	images: [
		{
			src: './hkBasic.png',
			isVideo: false,
			caption: 'Svg image of Hong Kong\'s skyline.'
		},
		{
			src: './hkTransparent.png',
			isVideo: false,
			caption: 'Traced over a proportional image of Hong Kong\'s skyline.'
		},
		{
			src: './hkDemo.mp4',
			isVideo: true,
			caption: 'Hosted here (recommend firefox): https://peggalex.github.io/hk.'
		},
		{
			src: './hkShape.png',
			isVideo: false,
			caption: 'Each window is it\'s own shape, so they can be lit individually and randomly.'
		}
	],
	bulletPoints: [
		<>Animated vector art of the Hong Kong skyline.</>,
		<>Traced over a real picture of Victoria harbour, using multiple image references.</>,
		<>Still in progress, it is super slow to render. I tried rasterizing some of the buildings, but the problem is the thousands of windows.</>,
		<>Hosted <a href="https://peggalex.github.io/hk" target="_blank">here</a>, firefox recommended for performance.</>
	]
};

export const ByteDesign: Project = {
	name: "Byte",
	date: new Date(2020, 6),
	url: "https://alexpegg.com/findingNameo",
	github: "https://github.com/peggalex/findingNameo",
	isWorkInProgress: false,
	images: [
		{
			src: './byteBasic.png',
			isVideo: false,
			caption: 'Byte app interface design. Icons are from Streamline Icons, font is San Francisco. I made the icon in illustrator.'
		},
		{
			src: './byteHackathon.png',
			isVideo: false,
			caption: 'The project Byte (smart tooth) won the hackathon, although there was a lot more involved than the UI.'
		}
	],
	bulletPoints: [
		<>App interface I designed for an <a href="https://cookhouselabs.com/summerhack-2020-a-race-against-the-clock-part-2/" target="_blank">insurance hackathon</a></>,
		<>I wasn't part of the competition and just helped out with the design, they won the first place $2500 prize.</>,
		<>I implemented the design from a basic sketch prompt, designed the logo and name 'byte' myself.</>,
		<>The <a href="https://app.streamlinehq.com/home" target="_blank">icon set</a> is a black image (not svg) if you don't pay, so they contrast heavily. I tried to lean into it with strong black lettering, but ideally the icons would be softer and not monocolour.</>
	]
};

export const MactanGardensDesign: Project = {
	name: "Mactan Gardens",
	date: new Date(2020, 5),
	url: "https://alexpegg.com/findingNameo",
	github: "https://github.com/peggalex/findingNameo",
	isWorkInProgress: true,
	images: [
		{
			src: './mactanGardensBasic.png',
			isVideo: false,
			caption: 'Mactan Gardens header I made in Illustrator. Font is Public Sans.'
		},
		{
			src: './mactanGardensPage.png',
			isVideo: false,
			caption: 'This is an example webpage for the catering serivce they are considering.'
		},
		{
			src: './mactanGardensTrace.png',
			isVideo: false,
			caption: 'The header is a trace of the real house.'
		},
		{
			src: './mactanGardensDog.png',
			isVideo: false,
			caption: 'The dog is also a trace, it\'s a very kind dog.'
		},
		{
			src: './mactanGardensSharp.png',
			isVideo: false,
			caption: 'While I like the header I made and I spent a lot of time on it, I thought I would also experiment with using photos themselves. This design features sharper edges.'
		},
		{
			src: './mactanGardensRounded.png',
			isVideo: false,
			caption: 'This is the same as the previous design but with softer edges. I prefer the sharper design, but to my surprise they actually preferred this one.'
		}
	],
	bulletPoints: [
		<>This are some design mockups I did for a friend who was considering creating a website for their property.</>,
		<>The house is beautiful, and I tried to style the pages with a similar aesthetic: a white and green palette, and clean simple lines.</>,
		<>The project has been put on hold for the time being, but I did make the page into a word press site (private for now).</>
	]
};

export const TheMediumDesign: Project = {
	name: "The Medium",
	date: new Date(2020, 5),
	url: "https://alexpegg.com/findingNameo",
	github: "https://github.com/peggalex/findingNameo",
	isWorkInProgress: false,
	images: [
		{
			src: './theMediumBasic.png',
			isVideo: false,
			caption: 'My redesign of the medium webpage. Serif font is Gilda, and the Sans-serif font is San Francisco. Icons by feather icons, footer icons by FontAwesome.'
		},
		{
			src: './theMediumOriginal.png',
			isVideo: false,
			caption: 'Original webpage'
		},
		{
			src: './theMediumRequest.png',
			isVideo: false,
			caption: 'This is the original request they sent out'
		},
		{
			src: './theMediumHeader.png',
			isVideo: false,
			caption: 'Redesign of the header'
		},
		{
			src: './theMediumBody.png',
			isVideo: false,
			caption: 'Redesign of the body. Get rid of the text over the images with translucent black background, and add a main story short summary to draw users in.'
		},
		{
			src: './theMediumSocialMedia.png',
			isVideo: false,
			caption: 'Redesign of the social media icons. For a student platform, I think social media is important to stay relevant'
		},
		{
			src: './theMediumFooter.png',
			isVideo: false,
			caption: "Redesign of the footer. Icons are all by FontAwesome. I think there are too many, but to make it less cluttered I created 3 columns and added icons to make them more distinguishable"
		},
		{
			src: './theMediumUTMTrace.png',
			isVideo: false,
			caption: 'The sculpture from the social media icons is a trace of a real structure at the University.'
		},
		{
			src: './theMediumGoose.png',
			isVideo: false,
			caption: 'Goose reporter for the header. Geese are popular on the UTM campus, I thought they would be a more personal touch.'
		},
		{
			src: './theMediumSquirrel.png',
			isVideo: false,
			caption: 'Squirrels are also popular on campus. This squirrel sits on the sculpture. He looks kind of weird up close, I did it free-hand with a reference.'
		},
		{
			src: './theMediumNewRequest.png',
			isVideo: false,
			caption: 'While I got an interview, unfortunately they changed the requirements to a full-time position which I couldn\'t accept as I already had a full-time job.'
		}
	],
	bulletPoints: [
		<>The Medium is a newspaper for the University of Toronto Mississauga.</>,
		<>They sent out a job offer to renovate the page's design.</>,
		<>I created a new design, focusing on more visually interesting elements like some colour and icons relevant to UTM, to seem more inviting to students.</>,
		<>They invited me for an interview after I sent my resume and the design, but they had changed the posting to a full-time job. Still, I enjoyed the design process and am proud of the result.</>,
	]
};

export const ResumeDesign: Project = {
	name: "Resume",
	date: new Date(2020, 7), //estimate
	url: "https://alexpegg.com/findingNameo",
	github: "https://github.com/peggalex/findingNameo",
	isWorkInProgress: false,
	images: [
		{
			src: './resumeBasic.png',
			isVideo: false,
			caption: 'My new updated resume. Font is San Francisco, and icons are from feather icons'
		},
		{
			src: './resumeOld.png',
			isVideo: false,
			caption: 'Previous resume (written using a popular latex template). It has more info, but I believe that it is too complex'
		}
	],
	bulletPoints: [
		<>This is my current resume, designed without a template by myself in Sketch.</>,
		<>My previous resume was used a popular latex template.</>,
		<>I thought I'd use some of the design techniques that I've learned to create my own resume that doesn't have the restrictions of the latex template, and is more unique.</>,
		<>It's more compact and visually appleasing than the previous one in my opinion, and I'm happy with it.</>
	]
};

export const FindingNameoDesign: Project = {
	name: "Finding Nameo",
	date: new Date(2020, 5),
	url: "https://alexpegg.com/findingNameo",
	github: "https://github.com/peggalex/findingNameo",
	isWorkInProgress: false,
	images: [
		{
			src: './findingNameoDesignBasic.png',
			isVideo: false,
			caption: 'Design for front page. The color scheme is indigo/blue. The graphic is mine, and the font is San Francisco, Segoe UI on windows.'
		},
		{
			src: './findingNameoDesignHome.png',
			isVideo: false,
			caption: 'Design for the homepage. I think the design shows a lot of information without seeming cluttered.'
		},
		{
			src: './findingNameoDesignPartner.png',
			isVideo: false,
			caption: 'Design for the link partner screen. The graphic is from undraw.co which I highly recommend. This is the only page not yet implemented in alexpegg.com/findingNameo'
		},
		{
			src: './findingNameoDesignRating.png',
			isVideo: false,
			caption: 'Design for the rate page. The actual implementation does not include the search for name feature, I felt this was redundant with the existing home page which supports searching.'
		},
		{
			src: './findingNameoDesignPram.png',
			isVideo: false,
			caption: 'The pram graphic is a vector trace of a real pram.'
		}
	],
	bulletPoints: [
		<>Designs for Finding Nameo, which is also implemented in the projects tab and hosted <a href="https://alexpegg.com/findingNameo" target="_blank">here</a></>,
		<>Whereas previously I would just dive in to a project, I spent a couple months ironing out the deisgn before beginning to program.</>,
		<>I think the design manages to convey a lot of relevant information while still appearing clean and not cluttered.</>,
		<>I like the indigo colour palette, I think it looks really modern. It is inspired by the fact that male and female colours are typically blue and pink, so indigo is sort of the middle.</>
	]
};

export const ResumeDesignDesign: Project = {
	name: "Resume Design",
	date: new Date(2019, 10),
	url: "https://alexpegg.com/findingNameo",
	github: "https://github.com/peggalex/findingNameo",
	isWorkInProgress: false,
	images: [
		{
			src: './resumeDesignBasic.png',
			isVideo: false,
			caption: 'Stylized resume'
		},
		{
			src: './resumeDesignDemo.mp4',
			isVideo: true,
			caption: 'This is the full playthrough of the resume. I think it\'s long, you can\'t really get text to print any slower than that though. It\'s simple javascript slowly inserting the style tags into the document.'
		},
		{
			src: './resumeDesignNoCSS.png',
			isVideo: false,
			caption: 'This is the document with no css. The idea is that the file is completely normal markup, and that css is the only thing creating the design.'
		}
	],
	bulletPoints: [
		<>I had an idea to make my resume stand out by styling it like an IDE. Hosted <a href="https://peggalex.github.io/resume">here</a></>,
		<>The end result is a bit tacky, but it was fun to do and I think it looks pretty unique.</>,
		<>Another constraint I put is that all the design would be done with css, and the resume itself would be normal html markup</>,
		<>To change the colour of keywords like 'for' and 'in', I had to use javascript however</>,
		<>I created a short script that slowly inserts the content and css, to appear like it is being styled in real time. It is a bit long.</>
	]
};

export const HomepageDesign: Project = {
	name: "Homepage",
	date: new Date(2020, 9),
	url: "https://alexpegg.com/findingNameo",
	github: "https://github.com/peggalex/findingNameo",
	isWorkInProgress: true,
	images: [
		{
			src: './homepageBasic.png',
			isVideo: false,
			caption: 'This is the basic layout of the front page. Corners are rounded, and everything is styled in tiles. Font is San Francisco, icons by Feather icons.'
		},
		{
			src: './homepageOld.png',
			isVideo: false,
			caption: 'The new design has images and video with captions, shows the tech stack and has a space for the url, github link and a banner if the project is in progress.'
		},
		{
			src: './homepageSheep.png',
			isVideo: false,
			caption: 'This is the first header I designed. The sheeps heads bob and the clouds go by. I originally considered adding a windmill, but I think it looks better without. The font is quicksand'
		},
		{
			src: './homepageAutumn.png',
			isVideo: false,
			caption: 'This header is the only one that uses javascript for the animation. The leaves are placed in random positions, with a random scaling.'
		},
		{
			src: './homepageIsland.png',
			isVideo: false,
			caption: 'It\'s hard to make the wing flap look organic with only rotation and positional transformations without changing the shape. You can see that I used illustrator\'s stroke profile type to make the leaves look more like leaves, although I didn\'t do the same for the waves.'
		},
		{
			src: './homepageBlossom.png',
			isVideo: false,
			caption: 'The pink lines are the paths that the petals move along. I used illustrator\'s stroke profile to make the tree branches look more flowing. The chinese says good morning/afternoon/night depending on the time using javascript.'
		},
		{
			src: './homepageSunset.png',
			isVideo: false,
			caption: 'This is the only header to use a gradient, I felt it was appropriate for a sunset. I tried colouring in the house, but I liked the silhouette better. The smoke is really just circles moving and expanding up a path.'
		},
		{
			src: './homepageCali.png',
			isVideo: false,
			caption: 'This is the only header that has used a trace of a real life object, everything else has been freehand by me. I felt inspired to make something for the VW bus after watching Outer Banks, which I think is cheesy but I also liked it.'
		},
		{
			src: './homepageAsset.png',
			isVideo: false,
			caption: 'These are some of the assets I used for the home page. The left side are webpage icons, the top one is a P that looks like my golden retriever, and the bottom one are my initials. On the right are some cursor ideas, I stuck with the pizza one.'
		}
	],
	bulletPoints: [
		<>This is the design of my homepage that holds my projects</>,
		<>I originally created this as a static page on github pages, <a href="https://peggalex.github.io">here</a>.</>,
		<>I wanted to revamp it as a react page using typescript to be more easy to maintain.</>,
		<>Now it is a more OOP, where each project is a project class instance, and adding a new project is much simpler.</>,
		<>The page headers are vector art I've done myself, animated with css and svg animations. I'm quite happy with them, and I plan to add more in the future.</>
	]
};

export const Designs: Project[] = [
	HongKongDesign,	
	TheMediumDesign,
	FindingNameoDesign,
	HomepageDesign,
	ResumeDesign,
	MactanGardensDesign,
	ByteDesign,
	ResumeDesignDesign,
];
