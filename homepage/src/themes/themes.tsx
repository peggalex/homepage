import './themes.css';
import React from 'react';

export interface ThemeColours{
    readonly primary: string;
    readonly secondary: string;
    readonly background: string;
    readonly buttonSelected: string;
    readonly heading: string;
    [index: string]: string;

}

/*export function SVGIncludeCSS({cssURL}: {cssURL: string}): JSX.Element{
    return <style>@import url({cssURL})</style>;
}*/

export function ThemeButton(
        {theme, selectedTheme, selectTheme}: 
        {theme: Theme, selectedTheme: Theme, selectTheme: React.Dispatch<React.SetStateAction<Theme>>}
        ): JSX.Element{

    let classes = 'buttonContainer themeButton';
    if (theme===selectedTheme) classes+= ' selectedTheme';

    return (
        <div className={classes} onClick={()=>selectTheme(theme)}>
            <div className={'circleContainer'}>
                <div className={'halfCircleContainer'}>
                    <div className={'halfCircle'} style={{backgroundColor: theme.getThemeColour('primary')}}></div>
                </div>
                <div className={'fullCircleContainer'}>
                    <div className={'fullCircle'} style={{backgroundColor: theme.getThemeColour('secondary')}}></div>
                </div>
            </div>
        </div>
    );
}


export class Theme {
    public name: string;
    private svg: JSX.Element;
    private themeColours: ThemeColours;

    constructor(name: string, svg: JSX.Element, themeColours: ThemeColours){
        this.name = name;
        this.svg = svg;
        this.themeColours = themeColours;
    }

    getSVG = (): JSX.Element => this.svg;
    getThemeColour = (name: string): string => this.themeColours[name];

    addColourTheme(): void{
        for (let colourName in this.themeColours){
            let colour: string = this.themeColours[colourName];
            window.document.documentElement.style.setProperty(`--${colourName}Colour`, colour);
        }
    }
}