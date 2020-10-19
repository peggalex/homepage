import React, { useEffect } from 'react';
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
import { Projects } from './projects/Projects';
import { SuperTechType, TechType, TechStack } from './projects/TechUtilities';
import { noTabs, elementIfParam } from './Utilities';

function TabButton({ name, selectedTab, selectTab }: { 
			name: string, 
			selectedTab: string, 
			selectTab: (str: string) => void 
		}): JSX.Element {
	return (
		<button
			id={name + 'TabButton'}
			onClick={() => selectTab(name)}
			className={(name == selectedTab) ? 'selected' : ''}
		>
			{name}
		</button>
	);
}

function SelectableTab({ name, selectedTab, content }: { 
			name: string, 
			selectedTab: string, 
			content: JSX.Element 
		}): JSX.Element | null {

	return (name == selectedTab) ? <div id={`${name}Tab`} className="col centerCross">{content}</div> : null;
}

function Url({url}: {url: string}): JSX.Element{
    return (
		<a className='url row centerCross' href={url} target="_blank">{Icons.Link}{url}{Icons.Search}</a>
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

function WorkInProgressElement(){
	return <>
		<div className="workInProgress row">
			<p>Work in Progress</p>
		</div>
		{Icons.RibbonBottom}
		{Icons.RibbonTop}
	</> 
}

function ParagraphImg({heading, isWorkInProgress, bulletPoints, slideshowElementObjs, url, github, tech}: { 
			heading: string, 
			isWorkInProgress: boolean
			bulletPoints: JSX.Element[], 
			slideshowElementObjs: SlideshowElementObj[],
			url: string | undefined,
			github: string | undefined,
			tech?: TechStack<SuperTechType<TechType>>[]
		}): JSX.Element {

	return (
		<div className={'paragraphImg col center centerCross'}>
			<h1 className='paragraphHeading'>{heading}</h1>
			{elementIfParam(url, <Url url={url!}/>)}
			{elementIfParam(github, <GithubElement src={github!}/>)}
			<Slideshow slideshowElementObjs={slideshowElementObjs}/>
			<div className='bottomHalf row'>
				{elementIfParam(tech, <TechElement tech={tech!}/>)}
				<BulletPointsElement bulletPoints={bulletPoints}/>
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

	str = noTabs(str);

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

const aboutPage: JSX.Element = <>
	<Paragraph heading={null} content={<p>
		Hi, my name's Alex Pegg. I am a 4th year computer scientist from the University of Toronto.
    </p>}
	/>
	<Paragraph heading={"Background"} content={<p>
		I was born and raised in Hong Kong. I'm half British and half Filipino.
    </p>}
	/>
	<Paragraph heading={"School"} content={parseParagraph(
		`I've completed my major in both computer science and economics for an honours bachelors of science.
        I've been a tutorial and marking TA for CSC108.`
	)}
	/>
	<Paragraph heading={'Me right now'} content={parseParagraph(
		`I'm into AI and full stack dev, trying to get a job.

        I'm currently interested making nodejs apps with a react frontend, \
        making the transition into the newer React hooks.

        I recently bought a raspberry pi, so hopefully I can get a static ip and \
        host my website there for non-static web apps.\
        I just bought a domain <a href='https://alexpegg.com'>https://alexpegg.com</a> \
        for a dollar for a year (15 dollars a year after the first),\
        and a dollar a month for a small server from \
        <a href='https://ionos.ca' target='_blank'>Ionos</a>. \
        Got reverse proxy working with nginx and some nodejs apps like \
        <a href='https://alexpegg.com/whisper'>this</a> and 
        <a href='https://alexpegg.com/ftd' target='_blank'>this</a>. \
        I plan on migrating that stuff to the raspberry pi as soon as I figure it out.

        I want to get some Wordpress experience, and my mum wants a website for \
        her little side business so hopefully I can use that as an opportunity to learn. \
        Those CMS sites like Wordpress and Squarespace make web design look really easy, \
        I could learn a thing or two. \ 

        I also like making animated SVGs in illustrator with css/js, cycling and playing \
        <a href="https://na.op.gg/summoner/userName=snaIex">league</a> with friends.

        Go to the projects tab on the left to see some of the stuff I've made so far.`
	)}
	/>
</>

const projectPage: JSX.Element = <>
	{Projects.map((proj) => 
		<ParagraphImg 
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

const contactPage: JSX.Element = <>
	<Paragraph heading={"Email"} content={<p>
		<a href='mailto:alex.pegg@mail.utoronto.ca'>alex.pegg@mail.utoronto.ca</a>
	</p>} />

	<Paragraph heading={"LinkedIn"} content={<p>
		<a href='https://www.linkedin.com/in/alexander-pegg-68b954163/' target="_blank">
			Alexander Pegg -- LinkedIn
    </a>
	</p>} />

	<Paragraph heading={"GitHub"} content={<p>
		<a href='https://github.com/peggalex' target="_blank">
			peggalex -- github
    </a>
	</p>} />

	<Paragraph heading={"Latex Resume"} content={<>
		<p><a href='https://www.overleaf.com/read/kttybhdbwppk' target="_blank">LaTeX resume (professional)</a></p>
		<p><a href='https://peggalex.github.io/Alex_Pegg_Resume.pdf' target="_blank">LaTeX resume (professional, compiled)</a></p>
		<p><a href="https://peggalex.github.io/resume3.html" target="_blank">html resume (stylized)</a></p>
	</>} />
</>

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
	const [selectedTab, selectTab] = React.useState(initialTab);
	const [selectedTheme, selectTheme] = React.useState(getRandomTheme());

	React.useEffect(() => {
		selectedTheme.addColourTheme();
	}, [selectedTheme]);

	const pages: { [key: string]: JSX.Element } = {
		'about': aboutPage,
		'projects': projectPage,
		'contact': contactPage,
	};

	let tabs: JSX.Element[] = [];
	let buttons: JSX.Element[] = [];

	for (let pageName in pages) {
		tabs.push(<SelectableTab
			name={pageName}
			selectedTab={selectedTab}
			content={pages[pageName]}
			key={pageName + 'page'}
		/>);
		buttons.push(<TabButton
			name={pageName}
			selectedTab={selectedTab}
			selectTab={selectTab}
			key={pageName + 'button'}
		/>);
	}
	return (
		<div className={"col center centerCross fullWidth"}>

			<header className={'fullWidth col centerCross'}>
				<div id={'themeButtonsContainer'}>
					<div id={'themeButtons'} className={'row'}>
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
				<div id={'tabButtons'} className={'row center fullWidth'}>
					{buttons}
				</div>
			</header>

			<section id={"mainContent"} className={'col'}>{tabs}</section>

			<footer></footer>
		</div>
	);
}

export default App;
