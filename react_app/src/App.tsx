import React, { useEffect, useContext } from 'react';
import './App.css';
import './tailwindColours.css'

import { AutumnTheme } from './themes/autumn/autumn';
import { SheepTheme } from './themes/sheep/sheep';
import { IslandTheme } from './themes/island/island';
import { BlossomTheme } from './themes/blossom/blossom';
import { SunsetTheme } from './themes/sunset/sunset';
import { CaliTheme } from './themes/cali/cali';


import { Theme, ThemeButton } from './themes/themes';
import { Slideshow, SlideshowElementObj } from './slideshow/slideshow';
import './exampleCobb.png';
import './micrographerDemo1.gif';
import $ from 'jquery';
import Icons from './icons';
import { Projects, Designs } from './projects/Projects';
import { SuperTechType, TechType, TechStack } from './projects/TechUtilities';
import { noTabNewline, elementIfParam, isMobile, MobileContext, mediaUrlPrefix } from './Utilities';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from 'react-router-dom';

function TabButton({ name }: { 
			name: string
		}): JSX.Element {

	const location = useLocation();
	let path = `/homepage/${name}`;
	let isSelected = location.pathname.startsWith(path) || (name == 'about' && location.pathname == '/');
	return (
		<Link to={path}>
			<button
				id={name + 'TabButton'}
				className={isSelected ? 'selected' : ''}
			>
				{name}
			</button>
		</Link>
	);
}

function UrlElement({url}: {url: string}): JSX.Element{
    return (
		<a className='url row centerCross' href={url} target="_blank">
			{Icons.Link}
			<span>{url}</span>
			{Icons.Search}
		</a>
	)
}

function SlugHeading(heading: string): string {
	return heading.toLowerCase().replace(/ /g, '_');
}

function Paragraph({ heading, content}: { 
			heading: string | null, 
			content: JSX.Element
		}): JSX.Element {

	return (
		<div className={'paragraph mobileShort'}>
			{(heading != null) ? <h1 className={'paragraphHeading'}>{heading}</h1> : null}
			<div className={'paragraphContent'}>{content}</div>
		</div>
	);
}

function TechElement({tech}: {tech:  TechStack<SuperTechType<TechType>>[]}): JSX.Element {
	return (
		<div className="tech">
			{tech.map((tt) => (tt === undefined) ? null :
				<div className="techStack row centerCross" key={tt.name}>
					<div className="techStackTitle row centerCross">
						{tt.icon === undefined ? null : tt.icon}
						<p>{tt.name}</p>
					</div>
					<div className="superTechType col">
						<div className="superTechTypeName row centerCross">
							{tt.superTechType.icon}
							<p>{tt.superTechType.name}</p>
						</div>
						<div className="superTechTypeSubTypes row centerCross">
							{tt.superTechType.subTypes?.map((subType)=>(
								<div className="subType row centerCross" key={subType.name}>
									{subType.icon}
									<p>{subType.name}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

function GithubElement({src}: {src: string}){
	return <a className="githubContainer clickable" href={src} target="_blank" title="GitHub source code">
		{Icons.Github}
	</a>
}

function BulletPointsElement({bulletPoints}: {bulletPoints: JSX.Element[]}){
	return <div className='paragraphContent'>
		{bulletPoints.map((bp, i) => (
			<div className="row" key={i}>
				{Icons.ArrowRight}
				<div>
					<p>{bp}</p>
				</div>
			</div>
		))}
	</div>
}


function ProjectBottomHalfMobileElement({techElement, bulletPointsElement}: {
			techElement: JSX.Element,
			bulletPointsElement: JSX.Element
		}){

	interface _Tab {
		icon: JSX.Element;
		name: string;
		content: JSX.Element;
	}
	const tabs: _Tab[] = [
		{icon: Icons.Description, name: 'Description', content: bulletPointsElement}, 
		{icon: Icons.Technology, name: 'Technology', content: techElement}, 
	];

	const [selectedTab, selectTab] = React.useState(tabs[0]);

	return 	<>
		<div className="bottomHalfButtons row">
			{tabs.map((tab, i) => (
				<button 
					className={(selectedTab.name == tab.name ? "selected" : "notSelected") + " row centerAll"} 
					onClick={() => selectTab(tab)}
					key={i}
				>
					{tab.icon}
					{tab.name}
				</button>
			))}
		</div>
		<div className="bottomHalfContent">
			{selectedTab.content}
		</div>
	</>
}

function ProjectBottomHalfElement({tech, bulletPoints}: {
			bulletPoints: JSX.Element[], 
			tech?: TechStack<SuperTechType<TechType>>[]
		}){
	
	let techElement = elementIfParam(tech, <TechElement tech={tech!}/>);
	let bulletPointsElement = <BulletPointsElement bulletPoints={bulletPoints}/>;

	const isMobileState = useContext(MobileContext);

	return <div className='bottomHalf'>
		{
			!isMobileState || techElement == null ? <div className="bottomHalfContent row">
					{techElement}
					{bulletPointsElement}
				</div> : <ProjectBottomHalfMobileElement
					techElement={techElement!}
					bulletPointsElement={bulletPointsElement}
				/>
		}
	</div>
}

function WorkInProgressElement(){
	return <>
		<div className="workInProgress row">
			<p>Work in Progress</p>
		</div>
		{Icons.RibbonBottom}
		{Icons.RibbonTop}
	</> 
}

function ProjectElement({heading, isWorkInProgress, bulletPoints, slideshowElementObjs, url, github, tech}: { 
			heading: string, 
			isWorkInProgress: boolean
			bulletPoints: JSX.Element[], 
			slideshowElementObjs: SlideshowElementObj[],
			url: string | undefined,
			github: string | undefined,
			tech?: TechStack<SuperTechType<TechType>>[]
		}): JSX.Element {

	return (
		<div id={SlugHeading(heading)} className={'project projectDesign col centerAll'}>
			<h1 className='paragraphHeading'>{heading}</h1>
			{elementIfParam(url, <UrlElement url={url!}/>)}
			{elementIfParam(github, <GithubElement src={github!}/>)}
			<Slideshow slideshowElementObjs={slideshowElementObjs} />
			<ProjectBottomHalfElement tech={tech} bulletPoints={bulletPoints}/>
			{isWorkInProgress ? <WorkInProgressElement/> : null}
		</div>
	);
}

function DesignElement({heading, bulletPoints, slideshowElementObjs, isWorkInProgress}: { 
			heading: string, 
			bulletPoints: JSX.Element[], 
			slideshowElementObjs: SlideshowElementObj[],
			isWorkInProgress: boolean
		}): JSX.Element {

	const isMobileState = useContext(MobileContext);

	return isMobileState ? <ProjectElement 
		heading={heading} 
		isWorkInProgress={isWorkInProgress}
		bulletPoints={bulletPoints} 
		slideshowElementObjs={slideshowElementObjs}
		url={undefined}
		github={undefined}
		tech={undefined}
	/> : (
		<div id={SlugHeading(heading)} className={'design projectDesign row centerAllStretch'}>
			<div className="leftHalf col">
				<h1 className='paragraphHeading'>{heading}</h1>
				<BulletPointsElement bulletPoints={bulletPoints}/>
			</div>
			<div className='rightHalf col centerAll'>
				<Slideshow slideshowElementObjs={slideshowElementObjs}/>
			</div>
			{isWorkInProgress ? <WorkInProgressElement/> : null}
		</div>
	);
}

// function to parse a string with tabs and <a/> links.
// don't have any attributes besides href, including target.
// automatically adds target="_blank" to <a/>.
function parseParagraph(str: string): JSX.Element {
	const linkRegex = /<a href=["'][^<]*["']>[^<]*<\/a>/g;
	const linkRegexCapture = /<a href=["']([^<]*)["']>([^<]*)<\/a>/g;

	str = noTabNewline(str);

	let jsxList: (JSX.Element | string)[] = [];
	let withoutLinks: string[] = str.split(linkRegex);
	let links: (RegExpMatchArray | null) = str.match(linkRegex);

	if (links == null) return <p>{str}</p>;

	for (let i = 0; i < links.length; i++) {
		linkRegexCapture.lastIndex = 0; // if you want to reuse regex exec
		let match: (RegExpExecArray | null) = linkRegexCapture.exec(links[i]);
		if (match == null) throw Error('links should be non-null');
		let [_, link, text] = match;
		jsxList.push(withoutLinks[i]);
		jsxList.push(<a href={link} target={'_blank'} key={link + text}>{text}</a>);
	}
	jsxList.push(withoutLinks[withoutLinks.length - 1]); //add the last element in
	return <p>{jsxList}</p>;
}

const aboutPage = () => <>
	<Paragraph heading={null} content={<div className="col centerAll">
			<img id="myFace" alt="photo of Alex Pegg" src={`${mediaUrlPrefix}me.png`}></img>
			<p style={{textAlign: 'center'}}>
				Hi, my name is Alex Pegg. Welcome to my website! 
				Here I have projects and designs I've done that I am especially proud of.
				Feel free to look around, and have a nice day!
			</p>
		</div>}
	/>
	<Paragraph heading={"Background"} content={<p>
		I'm half British and half Filipino. 
		I was born and raised in Hong Kong, 
		and have been living in Canada ever since moving here for university.
	</p>}
	/>
	<Paragraph heading={"School"} content={<p>
		I've completed an honours bachelors of science, 
		majoring in Computer Science and Economics.
        I've been a tutorial and marking TA for CSC108, which I thoughly enjoyed.
	</p>}
	/>
	<Paragraph heading={"Hobbies"} content={<p>
		I like biking, working on programming projects, watching TV and playing games with my friends.
		My favourite project so far would be FindingNameo, and my favourite TV shows are The Office, Community and The Mandolorian. 
	</p>}
	/>

	<Paragraph heading={"Resume"} content={
		<div id={SlugHeading('resume')} className="col centerAll">
			<img id="myResume" alt="image of my resume" src={`${mediaUrlPrefix}resumeBasicSmall.png`}></img>
			<p style={{textAlign: 'center'}}>
				This is my resume (<a href={`${mediaUrlPrefix}alexPeggResume2021.pdf`} rel="noopener" target="_blank">parsable pdf version</a>). 
				It has my contact information at the top if you would like to get in touch.
			</p>
		</div>
	} />
</>

const projectPage = () => <>
	{Projects.map((proj) => 
		<ProjectElement 
			heading={proj.name} 
			isWorkInProgress={proj.isWorkInProgress}
			bulletPoints={proj.bulletPoints} 
			slideshowElementObjs={proj.images}
			url={proj.url}
			github={proj.github}
			tech={proj.tech}
			key={JSON.stringify(proj)}
		/>
	)}
</>

const designPage = () => <>
	{Designs.map((proj) => 
		<DesignElement 
			heading={proj.name} 
			isWorkInProgress={proj.isWorkInProgress}
			bulletPoints={proj.bulletPoints} 
			slideshowElementObjs={proj.images}
			key={JSON.stringify(proj)}
		/>
	)}
</>

const contactPage: JSX.Element = <>
	<Paragraph heading={"Email"} content={<p>
		<a href='mailto:alex.pegg@mail.utoronto.ca'>alex.pegg@mail.utoronto.ca</a>
	</p>} />

	<Paragraph heading={"LinkedIn"} content={<p>
		<a href='https://www.linkedin.com/in/alexvilapegg/' target="_blank">
			AlexVilaPegg
    </a>
	</p>} />

	<Paragraph heading={"GitHub"} content={<p>
		<a href='https://github.com/peggalex' target="_blank">
			peggalex
    </a>
	</p>} />
</>

function MyFooter(): JSX.Element {
	return <footer className="row centerAll">
		<p>Copyright © <a href="https://www.linkedin.com/in/alexvilapegg/" target="_blank">Alex Pegg</a> • All Rights Reserved</p>
	</footer>
}

const themes: Theme[] = [
	SheepTheme, 
	BlossomTheme, 
	IslandTheme, 
	AutumnTheme, 
	SunsetTheme,
	CaliTheme
];

function getRandomTheme(): Theme {
	let theme_i: number = Math.floor(Math.random() * themes.length);
	return themes[theme_i];
}

function App({ initialTab }: { initialTab: string }): JSX.Element {
	const [selectedTheme, selectTheme] = React.useState(getRandomTheme());

	React.useEffect(() => {
		selectedTheme.addColourTheme();
	}, [selectedTheme]);

	let buttons: JSX.Element[] = [];

	for (let pageName of ['about', 'projects', 'designs']) {
		buttons.push(<TabButton
			name={pageName}
			key={pageName}
		/>);
	}

	const [isMobileState, setIsMobile] = React.useState(isMobile());

	useEffect(() => {
		if (typeof ResizeObserver !== 'undefined') {
			var resizeObserver = new ResizeObserver(_ => setIsMobile(isMobile));
			resizeObserver.observe(document.body);
			return () => resizeObserver.disconnect();
		}
	})

	return <MobileContext.Provider value={isMobileState}>
		<Router basename={process.env.PUBLIC_URL}>
			<div className="col centerAll fullWidth">

				<header className='fullWidth col centerCross'>
					<div id='themeButtonsContainer'>
						<div id='themeButtons' className='row'>
							{themes.map((theme)=>
								<ThemeButton 
									theme={theme} 
									selectedTheme={selectedTheme} 
									selectTheme={selectTheme}
									key={theme.name}
								/>
							)}
						</div>
					</div>
					{selectedTheme.getSVG()}
					<div id='tabButtons' className='row center fullWidth'>
						{buttons}
					</div>
				</header>

				<section id="mainContent" className='col centerCross'>
					<Switch>
						<Route path="/homepage/designs" component={designPage}/>
						<Route path="/homepage/projects" component={projectPage}/>
						<Route path="/homepage/about" component={aboutPage}/>
						<Route path="/" component={aboutPage}/>
					</Switch>
				</section>

				<footer></footer>
			</div>
		</Router>
		<MyFooter/>
	</MobileContext.Provider>
}

export default App;
