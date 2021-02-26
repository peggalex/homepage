import React, { SetStateAction, useContext } from 'react';
import './slideshow.css';
import $ from 'jquery';
import Icons from "../icons"
import { MobileContext, mediaUrlPrefix } from '../Utilities';

const loadGithub = true;
const urlPrefix = loadGithub ? 'https://peggalex.github.io/media/' : 'https://alexpegg.com/homepage/';

export interface SlideshowElementObj{
    readonly src: string;
    readonly isVideo: boolean;
    readonly caption: string;
}

function SlideshowPreview({slideshowElementObj: {src, isVideo}, clickHandler, isLeft} : {
            slideshowElementObj: SlideshowElementObj, 
            clickHandler: ()=>any,
            isLeft: boolean
        }){

    return (
        <div 
            className={`slideshowElement slideshowPreview clickable row centerAll spacer ${isLeft ? "left" : "right"}Preview`} 
            onClick={clickHandler}
        >
            {isVideo ? 
                <video key={src}>
                    <source src={`${urlPrefix}${src}#t=0.1`} type="video/mp4"/>
                    {/*<source src={src} type="video/mp4"/>*/}
                </video> : <img src={`${urlPrefix}${src}`}/>}
            {/*
                https://stackoverflow.com/questions/7323053/dynamically-using-the-first-frame-as-poster-in-html5-video
                
                Because this is a preview, loading the whole video doesn't make sense as the previews can't play.
                The appended '#t=0.1' will make the video show a frame at t=0.1, instead of loading the whole video.
            */}
        </div>
    )
}

function SlideshowDisplayImg({src, clickHandler} : {
    src: string, 
    clickHandler: ()=>any
}){

return (
    <div 
        className={'slideshowElement slideshowDisplay row center'} 
        onClick={clickHandler}
    >
        <img src={`${urlPrefix}${src}`}/>
    </div>
);
}

function SlideshowDisplayVideo({src} : {
            src: string, 
        }){

    return (
        <div 
            className={'slideshowElement slideshowDisplay row centerAll'} 
        >
            <video controls key={src}>
                <source src={`${urlPrefix}${src}`} type="video/mp4"/>
            </video>
        </div>
    );
}

function SlideshowDisplay({slideshowElementObj: {src, isVideo}, clickHandler} : {
            slideshowElementObj: SlideshowElementObj, 
            clickHandler: ()=>any
        }){
    return isVideo ? 
            <SlideshowDisplayVideo 
                src={src}
            /> : 
            <SlideshowDisplayImg 
                src={src} 
                clickHandler={clickHandler}
            />
}

function shiftIndexLeft(index: number, length: number, shift:number = 1):number{
    return (index-shift+length)%length;
}

function shiftIndexRight(index: number, length: number, shift:number = 1):number{
    return (index+shift)%length;
}

function addFullscreenImg(src: string): void{

    let fullscreenContainer = $(`
        <div id='fullscreenContainer' class='centerAll'>
            <img id='fullscreenImg' src="${mediaUrlPrefix}${src}"/>
        </div>
    `);

    let closeFullscreen = () => $("#fullscreenContainer")!.remove();

    const escKeyCode = 27;
    $('body').one('keydown', (e: any):void => {
        if (e.keyCode === escKeyCode) closeFullscreen();
    });

    let button = $(`
        <button 
            id='fullscreenClose'
            class='clickable'
        >✕</button>
    `);

    button.on('click', ()=>{
        $(document.body).off('keydown');
        closeFullscreen();
    });
    fullscreenContainer.on('click', ()=>{
        $(document.body).off('keydown');
        closeFullscreen();
    });

    fullscreenContainer.append(button);
    $('body').append(fullscreenContainer);
}

function SlideshowNode({index, selectedIndex, setIndex}: 
        {index: number, selectedIndex: number, setIndex: (index: number)=>void}): JSX.Element{
    return  <button 
        className={'slideshowNode' + ((index===selectedIndex) ? ' selected' : '')}
        onClick={()=>{
            setIndex(index);
        }}
    ></button>

}

export function Slideshow({slideshowElementObjs}: 
            {slideshowElementObjs: SlideshowElementObj[]}
        ){
    
    let length = slideshowElementObjs.length;
    let [index, setIndex] = React.useState(0);

    const isMobileState = useContext(MobileContext);

    return (<>
        <div className='slideshowNodes'>
            {slideshowElementObjs.map((_, i: number): JSX.Element => (
                <SlideshowNode 
                    index={i} 
                    selectedIndex={index} 
                    setIndex={setIndex}
                    key={i}
                />
            ))}
        </div>
        <div className='slideshow row centerAll'>
            <div className='clickable' onClick={()=>setIndex(shiftIndexLeft(index, length))}>
                {Icons.ChevronLeft}
            </div>
            {isMobileState ? null : <>
                <SlideshowPreview
                    slideshowElementObj={slideshowElementObjs[shiftIndexLeft(index, length)]}
                    clickHandler={()=>{
                        setIndex(shiftIndexLeft(index, length));
                    }}
                    isLeft={true}
                />
            </>}
            <SlideshowDisplay
                slideshowElementObj={slideshowElementObjs[index]}
                clickHandler={()=>{
                    var slideshowElementObj = slideshowElementObjs[index];
                    let src: string = slideshowElementObj.src;
                    addFullscreenImg(src);
                }}
            />
            {isMobileState ? null : <>
                <SlideshowPreview
                    slideshowElementObj={slideshowElementObjs[shiftIndexRight(index, length)]}
                    clickHandler={()=>{
                        setIndex(shiftIndexRight(index, length));
                    }}
                    isLeft={false}
                />
            </>}
            <div className='clickable' onClick={()=>setIndex(shiftIndexRight(index, length))}>
                {Icons.ChevronRight}
            </div>
        </div>
        <figcaption className='slideshowCaption'>{slideshowElementObjs[index].caption}</figcaption>
    </>);

}
