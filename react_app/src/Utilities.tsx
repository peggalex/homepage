import $ from 'jquery';
import { createContext } from 'react';
import { Project } from './projects/Projects';

export var isMobile = () => window.matchMedia("(orientation: portrait)").matches;

export const mediaUrlPrefix = process.env.REACT_APP_MEDIAURLPREFIX;

export const pageSubDirectory = process.env.REACT_APP_SUBDOMAIN;

export enum RouteSubdomains {
    ABOUT = 'about',
	PROJECTS = 'projects',
	TESTIMONIES = 'testimony',
	DESIGNS = 'designs'
}

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;
export type Ref<T> = React.MutableRefObject<T>;
export type Dispatch<T> = React.Dispatch<T>;

export function arrayBufferToHex(arrayBuffer: ArrayBuffer){
    let intArray = new Uint8Array(arrayBuffer),
        hashArray = Array.from(intArray),
        hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    return hashHex;
}

export async function hash(toHash: string){
    // https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest
    let hashEnc = new TextEncoder().encode(toHash),                        				  
        hashBuffer = await crypto.subtle.digest('SHA-512', hashEnc),
        keyHex = arrayBufferToHex(hashBuffer);

    return keyHex;
}

export function alertError(xhr: JQuery.jqXHR, status: JQuery.Ajax.ErrorTextStatus, error: string) {
    alert(`${error}: ${xhr.responseText}`);
}  

export async function waitForAjaxCall(method: 'post' | 'get' | 'put', url: string): Promise<any> {
    url = url.replace(/[ \t\n]/g, ''); // get rid of empty spaces and newlines
  
    return new Promise((resolve, reject) => $.ajax({
      method: method,
      url: `${process.env.PUBLIC_URL}${url}`
    }).done(resolve).fail((data, _, error) => {
      reject(alertError(data, _, error));
    }));
}

export function messageStrToJSON(messageStr: string){
	let message = JSON.parse(messageStr);
	if (message.error != null){
		throw new Error(message.error);
	}
	return message;
}

export const noTabs = (str: string): string => str.replace(/\t/g, '');

export const noTabNewline = (str: string): string => noTabs(str).replace(/\n/g, ' ');

export const hasAttributes = (obj: Object, attrs: string[]): boolean => 
    attrs.every((a) => (obj as {[key: string]: any})[a] !== undefined);

export const elementIfParam = (param: any, element: JSX.Element) => (param === undefined) ? null : element;

export const getScreenSize: (() => string) = () => `${window.innerWidth},${window.innerHeight}`;

export const MobileContext = createContext(isMobile());

export const slugHeading = (heading: string) => heading.toLowerCase().replace(/ /g, '_');

export const getProjectIsDesign = (proj: Project) => proj.tech === undefined;

export const getProjectUrl = (proj: Project) => `${process.env.PUBLIC_URL}/${pageSubDirectory}/${getProjectIsDesign(proj) ? RouteSubdomains.DESIGNS : RouteSubdomains.PROJECTS}/${slugHeading(proj.name)}`;
export const getTestimonyUrl = (proj: Project) => `${process.env.PUBLIC_URL}/${pageSubDirectory}/${RouteSubdomains.TESTIMONIES}/${slugHeading(proj.name)}`;

export const copyText = (text: string) => navigator.clipboard.writeText(text);