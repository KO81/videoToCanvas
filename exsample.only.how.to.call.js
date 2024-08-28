import{videoToCanvas,CanvasSourceObject,HELP}from'/video.to.canvas.js';
"use strict";/*
author: Christian Feilert
version: 2.b.1
type: expanded/demonstration
date started: 27/6-2024
date last modified by author: 28/8-2024  */window._return=0
let a=(e)=>document.querySelectorAll(e)
,b=(e,what)=>{!Boolean(what[0])?e.classList.remove(what[1]):e.classList.add(what[1])},c=(e,what)=>{return e.classList.contains(what)
},/*d,*/g={a:0,b:'main'},j={set:{},cur:{}},fr=()=>{return new FileReader()},count=0,newVideo,ce=a('[id="ce"]')[0];
function chrome(){return(typeof window.uaData!=='undefined')
}function casing(txt,num){return'<span class="text-'+['primary','danger','success','light','warning'][num]+' fw-bold">'+txt+'</span>'
}function detailSplit(detail){let a0=Object.keys(detail),a1=Object.values(detail),a2='',a3,d=0
	for(d;d<a0.length;d++){a3=(d==0)?'':'\t\t\t';a2+=a3+a0[d]+': '+JSON.stringify(a1[d])+'\n'}return a2
}function readOut(text,dare=false,num=0){let output=_('output');text=dare?casing(text,num):text
	output.innerHTML=text+'<hr class="w-75 mx-auto text-success fw-bold my-1 py-0">'+output.innerHTML;count++;_('count').innerHTML='event count: '+count;
	if(output.children.length>=7){output.lastChild.remove()}
}function sayHey(e){if(window._return){return}
	let out='Simon Says\n\tEvent Name:\t'+e.type+'\n\n\tEvent Detail:\t'+detailSplit(e.detail),d=0,d0,output=_('output'),text,cor0,cor1,cor2,cor3=[],cor4=[],
	a0=['Simon Says','\n','\t',':','true','false','{','}','[',']'],
	a1=['Simon Said @ <span class="bg-warning text-dark p-1 fw-bold fadein rounded">'+new Date()+'</span>','<br>','&nbsp;&nbsp;&nbsp;',casing(':',3),casing('true',2),casing('false',1),casing('{',0),casing('}',0),casing('[',3),casing(']',3)];window.con?console.debug(e.type,e.detail):console.log(out);
	for(d;d<a0.length;d++){text=out;text=(d==0)?out.replace(a0[d],a1[d]):out.replaceAll(a0[d],a1[d]);out=text
	};cor0=text.substring(0,text.indexOf('{'));cor1=text.substring(text.indexOf('{'));
	for(d of cor1.split('<span class="text-light fw-bold">:</span>').sort()){cor2=d.split(',')[0];
		if(parseInt(d)){if(!cor3.includes(parseInt(d))&&Math.abs(parseInt(d))!=0){cor3.push(Math.abs(parseInt(d)))}
		}if(!isNaN(parseFloat(cor2))&&isFinite(cor2)){out=cor2.split('.');
			if(!cor3.includes(Math.abs(out[0]))&&Math.abs(out[0])!=0){cor3.push(Math.abs(out[0]))
			}if(out.length!=1){if(!cor4.includes(out[1])){cor4.push(out[1])}}}
	}while(cor4.length!=0){out=cor4.shift();if(!cor1.includes(casing(out,4))){cor1=cor1.replaceAll(out,casing(out,4));text=cor0+cor1}
	}while(cor3.length!=0){out=cor3.shift();if(!cor1.includes(casing(out,4))){cor1=cor1.replaceAll(out,casing(out,4));text=cor0+cor1}
	};readOut('<div class="text-info mb-2 overflow-hidden '+outin()+'"><pre>'+text.replaceAll('</span>0','</span>'+casing(0,4))+'</pre></div>')
};onload=()=>{let a0=a('#navigation')[0];
	if(a0.classList.contains('invisible')){a0.classList.remove('invisible');onload=null}
}/////////////////////////////////////////////////////////
//							//	
//	obvious i'm not writing like this 		//
//		this is for demonstration only ...  	//
//							//
//////////////////////////////////////////////////////////
const p0=HTMLCanvasElement.prototype,p1=p0.getContext											/*taking backup of HTMLCanvasElement*/

//Object.defineProperty(p0,'captureStream',{value:null,writable:false})									/*disabling the captureStream function*/

var newObject,hidden,eventArray,poster,videoSource,elm=a('[data-do-what]'),obj=_('badge'),n=new videoToCanvas(),
	m=null,event,d,pretend,hasContext=0,srcObj=new CanvasSourceObject(),videoArr=['4.mp4','5.mp4','6.mp4','trailer.mp4'];

//window.throwError='is not undefined'													/*disables throw error within m object*/
//obj.addEventListener('testConfigCalled',e=>sayHey(e),{capture:true})									/* event called by name*/
//obj.addEventListener('fault',e=>sayHey(e),{capture:true})										/* objects error event called by name*/
if(screen.orientation.type=='portrait-primary'||screen.width<=650){
	ce.classList.add('bg-black')
}function rotate(){															/*function to mask the getContext function*/
	if(g.a==3){let a0=btoa(Date.now()*Math.random()).substring(0,Math.floor(Math.random()*5+3)).toLowerCase()
		g.a=0
		delete p0[g.b]														/*delete the old function to disable function calls on it*/
		g.b=a0
		p0.hasContext=hasContext
		p0[a0]=p1																							/*reasign a new function name*/
		p0.getContext=function(type){this.hasContext++;return this[a0](type)}
	};g.a++
}function go(e){let e0=e.target,e1=parseInt(e0.dataset.doWhat),e2=['disabled','text-warning'];rotate()
	poster='/api/src/c/?what=img&time=natm&type=quiet&that='+['DSC_0000_BURST20201108133752545-min.JPG','c-min.jpg'][e1];b(e0,[1,'active'])
	videoSource='/api/src/c/?what=vid&time=natm&type=quiet&that=1.'+['mp4','webm'][e1]
	if(ce.classList.contains('show')){a('[href="#ce"]')[0].click()
	}if(m==null){m=n._start(obj,null,false?null:videoSource,poster,20);event=m.disguise.event
		eventArray=[]																								/* disguised event name*/
		for(d of Object.keys(event)){eventArray.push(event[d])
		}
		
		hidden=true		 										/*uncancellable events, this target only exists in 'm' not in the markup*/
															/*if true, the events getting emitted by the m.event element, ergo uncancellable*/
		console.debug(n,m,srcObj)
		for(d of eventArray){newObject=hidden?m.event:obj
			newObject.addEventListener(d,e=>{sayHey(e)},{capture:true})										/* event called by disguised name*/
		};newObject.addEventListener(event.posterSet,()=>{n._enable(m.order)},{capture:true,once:true})
	}else{sayHey(new CustomEvent('knock_knock',{bubbles:false,cancelable:false,detail:{order:m.order,enabled:m.enabled,src:m.src,poster:m.poster}}))
		if(e1==0){

		}else{

		};n._setPoster(m.order,poster,true)
	};elm.forEach(el=>{for(d of e2){b(el,[0,d])}if(c(el,'active')){for(d of e2){b(el,[1,d])};b(e0,[0,'active'])}})
}function attenzione(e){let e0=e.target,e1=parseInt(e0.dataset.server),text='m is null';rotate();videoArr.unshift(videoArr.pop());
	function button(dare=true){let d;for(d of [10,11]){a('[data-server]')[d].disabled=dare}
	}if(m!=null||'67'.includes(e1)){/*no reason, die Картофель kalt zu essen*/
		videoSource='/api/src/c/?what=vid&time=natm&type=quiet&that='+videoArr[0];
		switch(e1){
			case 0:try{n._clear(obj)}catch(error){text=error.message;console.debug(error)}break;
			case 1:m.observers._disconnectAll();text='observers are off';break;
			case 2:m.observers._observeAll();text='observers are on';break;
			case 3:window.throwError=(typeof window.throwError==='undefined')?'is not undefined':undefined;text=(typeof window.throwError==='undefined');break;
			case 4:PRIME.isPrime(m.order);text='Prime called';break;
			case 5:n._clear(m.order);text='m object cleared';break;
			case 6:HELP.prototype.explain('videoToCanvas');text='Help called';break;
			case 7:HELP.prototype.explain('CanvasSourceObject');text='Help called';break;
			case 8:n._disable(m.order);text='';break;
			case 9:n._enable(m.order);text='';break;
			case 10:button();readOut('CanvasSourceObject started',true,3);srcObj._src(null,videoSource).then(p=>{newVideo=p[1];button(false);readOut('CanvasSourceObject completed',true,3)}).catch(e=>console.debug(e));break;
			case 11:button();try{newVideo._connect(m.order,newVideo.order)}catch(error){console.debug(error)}finally{button(false)}break;
			default:break
	};/*console.debug(m.videoIn)*/}if(e1<=7){sayHey(new CustomEvent('ohh_no',{bubbles:false,cancelable:false,detail:{outcome:text,button:e1,m_is_null:(m==null)}}))}
};elm.forEach(el=>{el.onclick=e=>go(e)});a('[data-server]').forEach(el=>{el.onclick=e=>attenzione(e)});
a('[id="h6"]')[0].onclick=()=>a('[href="#ce"]')[0].click()
(()=>{g.a=3;rotate()})()																	/*add your counter for control*/
