import React, { useEffect, useContext, useMemo } from 'react';
import './App.css';
import './tailwindColours.css'

import { AutumnTheme } from './themes/autumn/autumn';
import { SheepTheme } from './themes/sheep/sheep';
import { IslandTheme } from './themes/island/island';
import { BlossomTheme } from './themes/blossom/blossom';
import { SunsetTheme } from './themes/sunset/sunset';
import { CaliTheme } from './themes/cali/cali';


import { Theme, ThemeButton } from './themes/themes';
import { Slideshow } from './slideshow/slideshow';
import Icons from './icons';
import { TestimonyQuote, Projects, Designs, Project } from './projects/Projects';
import { SuperTechType, TechType, TechStack } from './projects/TechUtilities';
import { elementIfParam, isMobile, MobileContext, mediaUrlPrefix, pageSubDirectory, RouteSubdomains, slugHeading, getProjectUrl, getProjectIsDesign, getTestimonyUrl } from './Utilities';
import { BrowserRouter as Router, Switch, Route, Link, useLocation, useParams } from 'react-router-dom';

function TabButton({ name }: { 
			name: string,
		}): JSX.Element {

	const location = useLocation();
	let path = `/${pageSubDirectory}/${name}`;
	let isSelected = location.pathname.startsWith(path) || (name === 'about' && location.pathname === '/');
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
		<a className='url row centerCross' href={url} rel="noopener noreferrer" title="Open hosted project" target="_blank">
			{Icons.Globe}
			<span>{url}</span>
			{Icons.Link}
		</a>
	)
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
	return <a className="githubContainer clickable" href={src} rel="noopener noreferrer" target="_blank" title="GitHub source code">
		{Icons.Github}
	</a>
}

function BulletPointsElement({bulletPoints}: {bulletPoints: JSX.Element[]}){
	return <div className='paragraphContent'>
		{bulletPoints.map((bp, i) => (
			<div className="row centerCross" key={i}>
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
					className={(selectedTab.name === tab.name ? "selected" : "notSelected") + " row centerAll"} 
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

function ProjectHeading({project}: {project: Project}): JSX.Element {
	const monthStr = project.date.toLocaleDateString('en-US', { month: 'short'});		
	const year = project.date.getFullYear();
	const dateStr = `${monthStr} ${year}`;

	return <div className="paragraphHeading row">
		<button className="projectLink row" title={`Copy link to ${getProjectIsDesign(project) ? "design" : "project"}`} onClick={() => {
			const projUrl = getProjectUrl(project);
			navigator.clipboard.writeText(projUrl);
			alert(`Copied url to clipboard: "${projUrl}"`);
		}}>
			{Icons.CopyLink}
		</button> 
		<h1>{project.name} <span> • {dateStr}</span></h1>
	</div> 
}

function ProjectUpperHalfElement({project}: {project: Project}){

	const {url, github, images} = project;
	
	return <div className="upperHalf">
		<ProjectHeading project={project}/>
		{elementIfParam(url, <UrlElement url={url!}/>)}
		{project.testimony && <TestimonyLink url={getTestimonyUrl(project)} text="Testimony" isTestimony={false}/>}
		{elementIfParam(github, <GithubElement src={github!}/>)}
		<Slideshow slideshowElementObjs={images} />
	</div>;
}

function ProjectElement({project}: { project: Project }): JSX.Element {

	const {name, isWorkInProgress, bulletPoints, tech} = project;
	let { param } = useParams<{param?: string}>();
	let slug = slugHeading(name);
	const projRef = React.useRef(null as HTMLDivElement|null);

	React.useEffect(() => {
        if (slug === param?.toLowerCase()){
            projRef.current?.scrollIntoView({ block: 'start', behavior: "smooth"});
        }
	}, [param, slug]);


	return (
		<div id={slug} className={'project projectDesign col'} ref={projRef}>
			<ProjectUpperHalfElement project={project}/>
			<ProjectBottomHalfElement tech={tech} bulletPoints={bulletPoints}/>
			{isWorkInProgress ? <WorkInProgressElement/> : null}
		</div>
	);
}

function DesignElement({design}: {design: Project}): JSX.Element {

	const {name, bulletPoints, images, isWorkInProgress} = useMemo(() => design, [design]);
	const isMobileState = useContext(MobileContext);

	let { param } = useParams<{param?: string}>();
	let slug = slugHeading(name);
	const designRef = React.useRef(null as HTMLDivElement|null);

	React.useEffect(() => {
        if (slug === param?.toLowerCase()){
            designRef.current?.scrollIntoView({ block: 'start', behavior: "smooth"});
        }
	}, [param, slug]);

	return isMobileState ? <ProjectElement 
		project={design}
	/> : (
		<div id={slug} className={'design projectDesign row centerAllStretch'} ref={designRef}>
			<div className="leftHalf col">
				<ProjectHeading project={design}/>
				{design.testimony && <TestimonyLink url={getTestimonyUrl(design)} text="Testimony" isTestimony={false}/>}
				<BulletPointsElement bulletPoints={bulletPoints}/>
			</div>
			<div className='rightHalf col centerAll'>
				<Slideshow slideshowElementObjs={images}/>
			</div>
			{isWorkInProgress ? <WorkInProgressElement/> : null}
		</div>
	);
}

function TestimonyQuotes({quotes}: {quotes: TestimonyQuote[]}): JSX.Element {
	return <div className="quotesContainer col centerCross">
		{quotes.map((quote, i) => <div className="quoteContainer" key={i}>
			<div className="quoteIconContainer"><div className="quoteIconInnerContainer"></div></div>
			<div className="sentenceContainer">
				{quote.sentences.map((sentence, j) => <p className="sentence" key={`${i},${j}`}>
					{sentence}
				</p>)}
			</div>
			<div className="authorContainer">
				<p className="author">{quote.authorWithTitle}</p>
			</div>
		</div>)}
	</div>
}

function TestimonyLink({url, text, isTestimony}: {url: string, text: string, isTestimony: boolean}) {
	return 	<button 
		className="projectNav row centerCross" 
		onClick={() => window.location.href=url}
		title={`Go to ${isTestimony ? "project" : "testimony"}`}
	>
		{isTestimony ? Icons.ProjectIcon : Icons.TestimonyIcon} 
		<p>{text}</p>
	</button>;
}

function TestimonyElement({ project }: { project: Project }): JSX.Element {

	let { param } = useParams<{param?: string}>();
	let slug = slugHeading(project.name);
	const testimonyRef = React.useRef(null as HTMLDivElement|null);

	React.useEffect(() => {
        if (slug === param?.toLowerCase()){
            testimonyRef.current?.scrollIntoView({ block: 'start', behavior: "smooth"});
        }
	}, [param, slug]);

	return <div id={slug} className={'design testimony projectDesign col centerAllStretch'} ref={testimonyRef}>
		<h1 className='paragraphHeading'>{project.name}</h1>
		<div>
			<TestimonyLink url={getProjectUrl(project)} text={getProjectIsDesign(project) ? "Design" : "Project"} isTestimony={true}/>
		</div>
		<TestimonyQuotes quotes={project.testimony!.quotes}/>
	</div>
}


const aboutPage = () => <>
	<Paragraph heading={null} content={<div className="col centerAll">
			<img id="myFace" alt="Alex Pegg" src={`${mediaUrlPrefix}me.png`}></img>
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
		My favourite project so far would be FindingNameo, and my favourite TV shows are The Office, Community and The Mandalorian. 
	</p>}
	/>

	<Paragraph heading={"Resume"} content={
		<div id={slugHeading('resume')} className="col centerAll">
			<img id="myResume" alt="my resume" src={`${mediaUrlPrefix}resumeBasicSmall.png`}></img>
			<p style={{textAlign: 'center'}}>
				This is my resume (<a href={`${mediaUrlPrefix}alexPeggResume2021.pdf`} rel="noopener noreferrer" target="_blank">parsable pdf version</a>). 
				It has my contact information at the top if you would like to get in touch.
			</p>
		</div>
	} />
</>

const testimoniesPage = () => <>
	{Projects.map(proj => proj.testimony ? 
		<TestimonyElement project={proj} key={proj.name}/> : null
	)}
</>

const projectPage = () => <>
	{Projects.map((proj) => 
		<ProjectElement 
			project={proj}
			key={proj.name}
		/>
	)}
</>

const designPage = () => <>
	{Designs.map((design) => 
		<DesignElement 
			design={design}
			key={design.name}
		/>
	)}
</>

function MyFooter(): JSX.Element {
	return <footer className="row centerAll">
		<p>Copyright © <a href="https://www.linkedin.com/in/alexvilapegg/" rel="noopener noreferrer" target="_blank">Alex Pegg</a> • All Rights Reserved</p>
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

const Tabs: { [tabName: string]: () => JSX.Element} = {
	[RouteSubdomains.ABOUT]: aboutPage,
	[RouteSubdomains.PROJECTS]: projectPage,
	[RouteSubdomains.TESTIMONIES]: testimoniesPage,
	[RouteSubdomains.DESIGNS]: designPage
};

function App({ initialTab }: { initialTab: string }): JSX.Element {
	const [selectedTheme, selectTheme] = React.useState(getRandomTheme());

	React.useEffect(() => {
		selectedTheme.addColourTheme();
	}, [selectedTheme]);

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
			<div className="col centerCross fullWidth">

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
						{Object.keys(Tabs).map(
							tabName => <TabButton name={tabName} key={tabName}/>
						)}
					</div>
				</header>

				<section id="mainContent" className='col centerCross'>
					<Switch>
						{Object.keys(Tabs).map(
							tabName => <Route path={`/${pageSubDirectory}/${tabName}/:param?`} component={Tabs[tabName]} key={tabName}/>
						)}
						<Route exact path={[`/${pageSubDirectory}`, "/"]} component={aboutPage}/>
					</Switch>
				</section>
				<MyFooter/>
			</div>
		</Router>
	</MobileContext.Provider>
}

export default App;
