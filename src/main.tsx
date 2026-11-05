import {createRoot} from 'react-dom/client';
import {useEffect,useState} from 'react';
import {Search} from './components/Search';
function Progress(){const [progress,setProgress]=useState(0);useEffect(()=>{let ticking=false;const fn=()=>{if(!ticking){requestAnimationFrame(()=>{const max=document.documentElement.scrollHeight-innerHeight;setProgress(max>0?scrollY/max:0);ticking=false});ticking=true}};addEventListener('scroll',fn,{passive:true});fn();return()=>removeEventListener('scroll',fn)},[]);return <div className="progress-bar" style={{transform:`scaleX(${progress})`}}/>}
const nav=document.querySelector('nav');if(nav){const el=document.createElement('div');nav.insertBefore(el,nav.lastElementChild);createRoot(el).render(<Search/>)}const el=document.createElement('div');document.body.append(el);createRoot(el).render(<Progress/>);
import {GroundExplorer} from './components/GroundExplorer';
if(location.pathname==='/'){const section=document.querySelector('.expertise');if(section){const container=document.createElement('div');section.after(container);createRoot(container).render(<GroundExplorer/>);}}
