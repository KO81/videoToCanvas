"use strict"/*author: Christian Feilert*/
const a={d:document,w:window,c:()=>{return Date.now()*Math.random()},l:location,r:false,s:null},y={},i={},
c={a:(obj)=>{let a0,d;
		for(d of Object.getOwnPropertyNames(obj)){
			if(a0=obj[d]&&typeof a0==='object'){c.a(a0)}
		};Object.freeze(obj);Object.seal(obj)
	},omg:{z:{},y0:0,y1:{},y2:null,vol:1,muted:false},lock:{},secret:{},localPrime:{},magic:{},already:{},time:{},video:{},init:['stalled','waiting','loadeddata','loadedmetadata','click','canplay','canplaythrough','emptied','ended','seeked','seeking','pause','play','progress','ratechange','volumechange','timeupdate','wheel','resize','dblclick','contextmenu','error','durationchange','load'],final:[]
	,error:(e,order=null)=>{let a0=new ReferenceError(e,'video.to.canvas.js');
		if(order!=null){return isObjectNotNull(order)?eventModule(order,'fault','fault',['ReferenceError',a0.message,true]):c.final.push([order,'fault','fault',['ReferenceError',a0.message,true]])
		}if(typeof a.w.throwError==='undefined'){throw a0}
	},hex:(what)=>{let res=null;if(what!=null){res=what.split(/(\w\w)/g).filter(p=>!!p).map(c=>String.fromCharCode(parseInt(c,16))).join("")
		}return res
	},plain:(what)=>{return what.split("").map(c=>c.charCodeAt(0).toString(16).padStart(2,"0")).join("")
	},d:(obj,name,val,write)=>Object.defineProperty(obj,name,{value:val,writable:write})
	,e:(w)=>{return a.d.createElement(w?'video':'canvas')
	},check:(obj)=>{return(typeof obj.prime!=='undefined')?isYObj(c.omg[obj.prime])?c.omg[obj.prime]:null:null
	},setLock:(obj,float,dare=false)=>{let b0=a.c(),b1=[false,NaN],b2=['interveneStarted','interveneEnded','interveneError'],b3,b4=b2[2],d,d0;
		if(dare){if(typeof obj.lock==='undefined'){obj.lock=true;c.lock[b0]=float;b4=b2[0]};b1=[true,b0]
		}else{
			if(float!=null){
				if(typeof c.lock[float]!=='undefined'){b3=c.lock[float];delete c.lock[float];delete obj.lock;b1[1]=null;float=b3;b4=b2[1]}}
		}if(isObject(float)){eventModule(float,b4,b4,['interveneObject',null,true])
		}else{
			for(d0 of Object.keys(c.magic)){eventModule(parseFloat(d0),b4,b4,['interveneObject',null,true])}
		}return b1
	},locked:(obj)=>{return(typeof obj.lock!=='undefined')
	},calc:(obj,dim)=>{if(dim==null||obj==null){return null}if(obj.height==0&&typeof obj.media!=='undefined'){obj.height=obj.media.videoHeight}let a0=[Math.abs((dim.x/obj.width).toFixed(2)),Math.abs((dim.y/obj.height).toFixed(2))],a1=a0[(a0[0]>=a0[1])?1:0],a2=Math.abs((obj.width*a1-dim.x)/(2*a1));
		return [a1,a2]
	},sticky:(obj)=>{obj.parentNode.style.setProperty('position','relative','important');obj.style.setProperty('position','sticky','important')
	},w:(order)=>{let a0=c.z(order,0).canvas,a1=false,d
		for(d of a0.parentNode.querySelectorAll('CANVAS')){
			if(typeof d.time!=='undefined'&&d.time==a0.time&&d.id!=a0.id){a1=true
		}}return a1
	},x:()=>{let d,d0;
		for(d of Object.keys(y)){
			if(d in y&&'snap' in y[d]){delete y[d].snap
			}for(d0 of [1,2]){drawModule(c.z(d,d0),3)}}
	},y:(d)=>{return[c.omg.vol,c.omg.muted][d]
	},z:(order,num)=>{return c.magic[order].randomTargetArray[num]}
},secretEventProp=(order=null,obj=null,event=null)=>{let a0=[...c.init],a1,d=0;a0.push('isPrimeCalled','isPreventedPrimeCalled','interveneStarted','interveneEnded','interveneError','coreManipulation','mutationObserved','resizeObserved','intersectionObserved','posterSet','resizeObserverIsOff','intersectionObserverIsOff','mutationObserverIsOff','navHidden','navShown','fault','videoSet','readyState');
	if(order==null&&event==null){
		function disguiseMe(){
			for(d;d<a0.length;d++){this[a0[d]]=btoa(a.c()).split("").map(c=>c.charCodeAt(0).toString(16).padStart(2,"0")).map(value=>({value,sort:Math.random()})).sort((a,b)=>a.sort-b.sort).map(({value})=>value).join('').substring(0,10)}
		};a1={event:new disguiseMe(),name:'disguiseObject'};
		c.a(a1);c.secret[obj.prime]=a1;
		return a1}
},IKONS=async()=>{let a0=[c.e(),c.e()],a1=[16,32,'width','height'],a3,a4=()=>{return new Path2D()},can,d=0,d0,a5=[],a6=-1,a7=0,a8=0,d1,d2,d3,c0=['16','32'],c1=['light','dark'],c2=['PLAY','PAUSE','STOP','SPEAKER','MUTED'];
	function rect(ctx){can=ctx.canvas;ctx.clearRect(0,0,can.width,can.height)
	}async function cap(ctx){can=ctx.canvas;d3=new Image();d3.src=can.toDataURL('image/png');return d3
	}for(d0 of c0){c.d(i,[d0],{},true);
		for(d1 of c1){c.d(i[d0],d1,{},true);
			for(d2 of c2){c.d(i[d0][d1],d2,null,true)}}
	}for(d;d<2;d++){a0[d][a1[2]]=a1[d];a0[d][a1[3]]=a1[d];a3=a0[d].getContext('2d');d1=[1,2][d];
		for(d0 of ['#e9ecef','#212529']){let b0=a4();rect(a3);a3.globalCompositeOperation='source-over';b0.moveTo(3*d1,3*d1);b0.lineTo(3*d1,13*d1);b0.lineTo(13*d1,8.5*d1);b0.closePath();a3.fillStyle=d0;a3.fill(b0);a5.push(await cap(a3));rect(a3);a3.fillRect(3*d1,2*d1,4*d1,12*d1);a3.fillRect(9*d1,2*d1,4*d1,12*d1);a5.push(await cap(a3));rect(a3);a3.fillRect(2*d1,2*d1,12*d1,12*d1);a5.push(await cap(a3));rect(a3);b0=a4();b0.moveTo(13*d1,3*d1);b0.lineTo(3*d1,8.5*d1);b0.lineTo(13*d1,13*d1);b0.closePath();a3.fill(b0);a3.fillRect(3*d1,4*d1,4.5*d1,8.5*d1);a5.push(await cap(a3));a3.globalCompositeOperation='hard-light';a3.lineWidth=2*d1;a3.strokeStyle=(d0=='#e9ecef')?'#212529':'#e9ecef';a3.moveTo(14*d1,2*d1);a3.lineTo(2*d1,14*d1);a3.stroke();a5.push(await cap(a3))}
	}for(d=0;d<a5.length;d++){a6++;
		if(a6==5){a6=0
		}if(d>=5){a7=1
		}if(d>=10){a7=0
		}if(d>=15){a7=1
		};i[c0[(d>=10)?1:0]][c1[a7]][c2[a6]]=a5[d]}
},human=(time,order=null,dare=false)=>{let a0,a1,a2=false,a3='0:00',a4=a3;
	function calc(time){a0=Math.floor(time/60);a1=Math.floor(time-a0*60);a1=(a1<=9)?'0'+a1:a1;return a0+':'+a1
	};a3=calc(time);
	if(dare){
		if(isObject(order)&&isYObj(order)){_is(order);
			if(c.magic[order].videoIn!=null){attach(order,true);if(!y[order].text.b){y[order].text.b=a3};y[order].text.c=a3;a2=(c.magic[order].videoIn.time.human==a4);c.magic[order].videoIn.time.human=a3}
		}if(isVObj(order)){c.video[order].time.human=a3
		}if(a2){event(order,22)}
	}return a3
},drawModule=(ctx,type,data=null,b=null,f=null)=>{let a0,a1,d;
	function reset(ctx){ctx.setTransform(1,0,0,1,0,0);ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
	}if(type==0){reset(ctx);a0=c.e();a0.width=data.width;a0.height=data.height;a1=a0.getContext('2d');a1.putImageData(data,0,0);ctx.scale(b,b);ctx.drawImage(a0,f.x,f.y);a0.remove();if(!i['16']){IKONS()}
	}if(type==1&&f){ctx.setTransform(1,0,0,1,0,0);ctx.scale(b,b);ctx.drawImage(data,f.x,f.y)
	}if(type==2&&data){ctx.setTransform(1,0,0,1,0,0);a0=data.a;a1=data.b;
		for(d=0;d<a0.length;d++){
			ctx.globalAlpha=(d>0)?1:0.5;
			typeof ctx[a0[d]]==='function'?ctx[a0[d]](...a1[d]):ctx[a0[d]]=a1[d]}
	}if(type==3){reset(ctx)}
},canvasProp=(ctx)=>{let d;
	function aid(){this.name='canvasSetting';
		for(d of ['fillStyle','filter','globalAlpha','globalCompositeOperation']){this[d]=ctx[d]}
	}return new aid()
},snapshot=(order,type)=>{let a0,a1,a2,a3,a4=typeof y[order].video!=='undefined',d
	if(type==0&&'snap' in y[order]&&a4){
	}if(type==1&&a4){
		queueMicrotask(()=>{a0=y[order].video.media;a1=c.z(order,1).canvas;a2=c.e();
			(async()=>{
				for(d of ['width','height']){a2[d]=a1[d]
				};a3=a2.getContext('2d');drawModule(a3,1,a0,a0.scale[0],a0.dim.video);y[order].snap=a3.getImageData(0,0,a2.width,a2.height);
				if(a0.currentTime>0&&!a0.ended){drawModule(c.z(order,1),2,{a:['filter','putImageData'],b:['none',[y[order].snap,0,0]]})
				};a2.remove()})().then(()=>canvasVol(order,true))})}
},canvasAid=(order)=>{let a0=a.w?.matchMedia?.('(prefers-color-scheme:dark)')?.matches??false,a2,a3,a4,a5,d;
	function aid(obj){a5=(obj.width<577);a2=a5?20:40;
		this.background=a0?'#000000':'#ffffff';this.barColor=a0?'#ff4000':'#0080ff';
		this.barHeight=a2;this.barOffset=Math.round(obj.height-a2);
		this.color=a0?'#dee2e6':'#212529';this.dark=a0;
		this.fontsize=a5?12:24;this.factor=a5?1:2;
		this.iconSet=i[a5?'16':'32'][a0?'light':'dark'];
		this.name='canvasNavObject';this.x=obj.width;this.y=obj.height
	};a3=new aid(c.z(order,0).canvas);y[order].aid=a3;
	for(d of [0,1,2]){a4=c.z(order,d);
		a4.wordSpacing='4px';
		a4.font=a4.font.replace(/\d+/g,a3.fontsize)
	}return a3
},canvasProg=(order,video)=>{let a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0;
	if(isYObj(order)&&y[order].nav){a0=y[order].aid;b0=(a0.factor<2)?2:1;
		a1=Math.ceil((a0.x/100)*video.currentTime*(100/video.duration));a2=y[order].text;a3=(a0.x<577)?a2.a+' '+a2.c:a2.a+' '+a2.b+' '+a2.c;a4=c.z(order,2);
		a8=a4.measureText(a3).width;a5=a0.x-5-a8;a6=2*a0.factor+a0.barOffset+a0.fontsize;
		a7=[a5-8,a6-(22/b0),a8+10,24/b0];
		a9=[0,a0.barOffset-10,a0.x,10];
		a1={a:['clearRect','save','fillStyle','filter','fillRect','filter','fillStyle','fillText','clearRect','filter','fillRect','filter','fillStyle','fillRect','restore'],
			b:[a7,[],a0.background,'opacity(.5)',a7,'opacity(.8)',a0.color,[a3,a5,a6,190],a9,'opacity(.45)',a9,'opacity(.7)',a0.barColor,[0,a0.barOffset-10,a1,10],[]]};drawModule(a4,2,a1)
	}if(video.currentTime<.5){a0=c.z(order,1);a3=a0.canvas;a1=a3.height;a2=video.scale[0]*video.dim.video.x;
		drawModule(a0,2,{a:['globalAlpha','clearRect','clearRect'],b:[1,[0,0,a2,a1],[a3.width-a2,0,a2,a1]]})}
},canvasVol=(order,dare=false)=>{let a0,a1,a2;
	if(y[order].nav){a0=y[order].aid;a1=y[order].video.media;
		drawModule(c.z(order,2),2,{a:['save','drawImage','restore'],b:[[],[a0.iconSet[a1.muted?'MUTED':'SPEAKER'],81+3*a0.factor,2*a0.factor+a0.barOffset],[]]})
		if(a0.x>577){a2=[130,15+a0.barOffset,150,10];
			drawModule(c.z(order,2),2,{a:['clearRect','save','fillStyle','filter','fillRect','filter','fillStyle','fillRect','restore'],b:[a2,[],a0.color,'opacity(.45)',a2,'opacity(.7)',a0.barColor,[130,15+a0.barOffset,a1.volume*150,10],[]]})
		}if(dare&&a1.paused){setTimeout(()=>{canvasProg(order,a1)},50)}}
},canvasNav=(order)=>{if(!y[order].video){return}let a0=canvasAid(order),a1=y[order].video.media;
	return{a:['fillRect','drawImage','drawImage'],
		b:[[0,a0.barOffset,a0.x,a0.barHeight],[a0.iconSet[(a1.paused||a1.ended)?'PLAY':'PAUSE'],3*a0.factor,2*a0.factor+a0.barOffset],
			[a0.iconSet.STOP,40+3*a0.factor,2*a0.factor+a0.barOffset]
		]}
},canvasEvent=(e)=>{let a0=e.type,a1=e.target,a2=a1.nodeName,a3=[],a4=c.time[a1.time],a5=(isYObj(a4)&&isVObj(a4))?c.magic[a4]:null,a6=null,a7=['navHidden','navShown'],a8,a9,d;
	function cid(){for(d of [[3],[2,canvasNav(a4)]]){drawModule(c.z(a4,2),...d)};canvasVol(a4);
		if(a8&&a8.currentTime==0&&a8.paused){drawModule(c.z(a4,1),3)}
	}if(a5){if(!'video' in y[a4].dim){offset(a4)}if(a2=='CANVAS'&&c.z(a4,0).canvas.getAttribute('controls')==null){return}
	}if(a0=='click'&&a2=='CANVAS'&&a5&&a1.z===undefined&&y[a4].nav!=null){a1.z=0;a3=y[a4].targets[0].canvas;a6=e.layerX;a8=y[a4].video.media;a9=(a3.width>577);
		if(e.layerY>=a1.height-(a9?50:30)&&!(a6>0&&a6<40)){
			if(e.layerY>=a1.height-(a9?40:20)){
				if(a6>41&&a6<81){a3.stop()
				}if(a6>81&&a6<121){a8.muted=(a8.muted)?false:true;c.omg.muted=a8.muted
				}if(a9&&a6>130&&a6<280){a3.volume((a6-130)/150)}
			}else{a3.seek((a8.duration/100)*a6/(a3.width/100))}
		}else{a8.paused?a3.play():a3.pause()}
		a6=null;setTimeout(()=>{a1.z=undefined;cid();if(a8.paused){snapshot(a4,1)}},1e2)
	}if(a0=='mouseenter'){if(!i['16']){IKONS()}
		if(a2=='CANVAS'&&a5){a6=1;y[a4].nav=canvasNav(a4)}
	}if(a0=='mouseleave'&&a2=='CANVAS'&&a5){
		if('video' in y[a4]&&!y[a4].video.media.paused){a6=0;y[a4].nav=null}
	}if(a2!='CANVAS'){
		for(d of a1.querySelectorAll('CANVAS')){
			if(typeof d.time!=='undefined'){
				if(d.time==a1.time){a3.push(d)}}
		}if(a3.length==1&&a4){attach(a4,true)}
	}if(a6!=null&&a5){drawModule(c.z(a4,2),3)
		if(y[a4].nav){drawModule(c.z(a4,2),2,y[a4].nav);canvasVol(a4,true)}
		eventModule(a4,a7[a6],a7[a6],['coreElement'+a2,{nav:y[a4].nav,settings:canvasProp(y[a4].targets[1])},(y[a4].nav!=null)])}
},streamer=(video,ctx)=>{drawModule(ctx,1,video,video.scale[0],video.dim.video);
	!video.paused?setTimeout(()=>{
	    streamer(video,ctx)
	 },video.interval):video.ended?drawModule(ctx,3):null
},videoFailed=(order,text=null)=>{if(text==null){text='source load failure'}
	let a0=c.z(order,0),a1=a0.measureText(text).width,a2=a0.canvas,a3='error'+c.hex(btoa(order)),a4,a5=[a2.getClientRects()[0],a2.parentNode.getBoundingClientRect()],d;
	if(a4=a.d.getElementById(a3)){a4.remove()};a4=c.e();a4.id=a3;
	for(d of ['width','height']){a4[d]=a2[d]
	};a4.style='position:absolute!important;left:'+(a5[0].left-a5[1].left)+'px!important;top:'+(a5[0].top-a5[1].top)+'px!important;';
	a2.parentNode.append(a4);
	drawModule(a4.getContext('2d'),2,{a:['font','letterSpacing','fillStyle','fillRect','fillStyle','fillText'],b:['24px serif','2px','#000000',[a2.width-200,0,200,32],'#ffffff',[text,a2.width+a1-(190+a1),26,180]]});
	setTimeout(()=>{a4.remove()},5e3)
},videoEvents=(e)=>{let a0=e.type,a1=e.target,a2=null,a3,a4,d;
	function aid(a2){offset(a2);if(!c.w(a2)&&c.magic[a2].enabled){attach(a2,true)}if(a2 in y){a3=y[a2].video;a1.height=a3.media.videoHeight;a3.media.scale=c.calc(a3,y[a2].dim);y[a2].scale=a3.media.scale[0];a3.media.interval=Math.round(1e3/y[a2].frames)}
	}function time(a2){let b0=a1.currentTime;try{y[a2].text.a=human(b0);y[a2].text.b=human(a1.duration-b0)}catch(e){};canvasProg(a2,a1)
	}function rotate(order,dare=false){
		try{let b0=[...y[order].targets];y[order].targets=[b0[0],b0[2],b0[1]]}catch(e){
		}if(dare){drawModule(c.z(order,0),3);return c.z(order,1)}
	}if(a2=c.omg[a1.prime]){
		if(a0==c.init[16]||a0==c.init[22]){time(a2)
		}if(a0==c.init[12]){a1.muted=c.y(1);a1.volume=c.y(0);aid(a2);
			for(d of [1,2]){drawModule(c.z(a2,d),3)
			};streamer(a1,rotate(a2,true));drawModule(c.z(a2,2),2,y[a2].nav);
			canvasVol(a2);c.z(a2,0).globalAlpha=0
		}if(a0==c.init[11]){rotate(a2);c.magic[a2].randomTargetArray=y[a2].targets
			if(y[a2].nav&&a1.currentTime==0){drawModule(c.z(a2,2),2,y[a2].nav)}
		}if(a0==c.init[6]){aid(a2);time(a2);for(d of [1,2]){drawModule(c.z(a2,d),3)}
			if(a2 in y&&y[a2].nav){drawModule(c.z(a2,2),2,y[a2].nav);canvasVol(a2)}
		}if(a0==c.init[2]||a0==c.init[3]){_is(a2);time(a2)
		}if(a0==c.init[7]||a0==c.init[8]||a0==c.init[21]){offset(a2);
			if(a0==c.init[8]){
				c.z(a2,0).canvas.stop().then(out=>{
					if(out&&y[a2].nav){y[a2].nav=canvasNav(a2);drawModule(c.z(a2,2),2,y[a2].nav);canvasVol(a2,true)}})}
		}if(a0==c.init[9]&&a1.paused){canvasProg(a2,a1)
		}if(a0==c.init[23]){aid(a2)
		}if(a0==c.init[15]){canvasVol(a2)
		};event(a2,c.init.indexOf(a0));if(a1.height==0){aid(a2)}
	}else{return c.error('@Enable: Object is null')}
},methods=(obj)=>{
	if(typeof obj.play==='undefined'){
		function aid(obj){let a0=c.check(obj);return(a0!=null)?(y[a0].video)?[c.magic[a0].enabled,c.magic[a0].ready,y[a0]]:null:null
		}function get(obj){return(obj.video)?obj.video.media:null
		}function m(p){let b0=aid(p);
			return(b0!=null&&!c.locked(b0[2]))?b0:null
		}async function _intervene(){let b0,b1=null,b2;
			if(b0=aid(this)){
				if(b2=get(b0[2])){b0[2].state=b2.paused;
					if(!b0[2].state){b2.pause()};b1=c.setLock(b0[2],c.check(this),true)}
			}return b1
		}async function _interveneEnd(float=null){let b0,b1=null,b2;
			if(b0=aid(this)){
				if(b2=get(b0[2])){b1=c.setLock(b0[2],float)}
			}return b1
		}async function _mute(){let b0=m(this),b1=null,b2;
			if(b2=get(b0[2])){b2.muted=true;b1=b2.muted;c.omg.muted=true
			}return b1
		}async function _pause(){let b0=m(this),b1=null,b2;
			if(b2=get(b0[2])){b2.pause();b1=b2.paused
			}return b1
		}async function _play(){let b0=m(this),b1=null,b2;	
			if(b2=get(b0[2])){b2.play();b1=!b2.paused
			}return b1
		}async function _seek(toTime=0){let b0=m(this),b1=null,b2;
			if(b2=get(b0[2])){b1=false;
				if(toTime<b2.duration){b1=true;b2.currentTime=toTime}
			}return b1
		}async function _stop(){let b0=m(this),b1=null,b2,d;
			if(b2=get(b0[2])){c.z(c.check(b2),0).globalAlpha=1
				b2.pause();b2.currentTime=0;b1=true
			}return b1
		}async function _unmute(){let b0=aid(this),b1=null,b2;
			if(b2=get(b0[2])){b2.muted=false;b1=!b2.muted;c.omg.muted=false
			}return b1
		}async function _volume(value=0.5){let b0=m(this),b1=null,b2;
			if(b2=get(b0[2])){b1=false;
				if(value>=0&&value<=1){
					b1=true;b2.volume=value;c.omg.vol=value}
			}return b1
		}for(let d=0;d<9;d++){
			c.d(obj,['intervene','interveneEnd','mute','pause','play','seek','stop','unmute','volume'][d],[_intervene,_interveneEnd,_mute,_pause,_play,_seek,_stop,_unmute,_volume][d],false)}}
},eventModule=(order,name,type,detail,dare=false)=>{let a0,a1,a2,a3,d=0,d0;
	if(!_offInPrime(order)){return c.error('@Event: Event called on a null object')
	}function detailBuilder(arr,name){a2=[detail,['object','value','outcome','result_0','result_1','result_2']];
		if(detail.length==0||detail.length>=7){return c.error('@detailBuilder: detail is out of range',order)
		}for(d;d<a2[0].length;d++){this[a2[1][d]]=a2[0][d]
		};this.name=name
	}function tractor(order,name,type,detail){this.eventName=dare?type+'_'+order:type;this.detail=new detailBuilder(detail,name)
	}if(!Array.isArray(detail)){return c.error('@detailBuilder: detail is not an array')
	};a0=new tractor(order,name,type,detail);a1=c.magic[order];c.d(a0,'name',a0.from,false);a3={bubbles:false,cancelable:false,explicitOriginalTarget:null,composed:true,detail:a0.detail};
	for(d of [a0.eventName,c.secret[c.magic[order].target.prime].event[a0.eventName]]){
		for(d0 of [a1.target,a1.event]){d0.dispatchEvent(new CustomEvent(d,a3))}
	}if(c.final.length!=0){eventModule(...c.final.shift())}
},eventPrimer=(float=null,obj=null,name=undefined)=>{let a0=false;
	if(obj!=null){
		if(typeof obj.prime!=='undefined'){a0=c.omg[obj.prime]}
	}else{
		if(typeof c.magic[float]!=='undefined'){a0=float}
	}if(a0){eventModule(a0,name+'Called',name+'Called',[name,null,true])}
},event=(order,num,dare=false)=>{let a0=c.init[num],a1=videoInNotNull(order,true),a2,a3,d;
	function aid(a2){
		for(d of ['duration','currentTime','muted','paused','played','playbackRate','seekable','textTracks','videoHeight','videoWidth','volume']){
			this[d]=a2[d]
		}this.name='videoUpdateObject'
	}if(a1[0]){a2=a1[1].media;a3=new aid(a2);eventModule(order,a0,a0,['HTMLMediaElement',a3,true]);
		if(dare){return a3}}
},OBS=(obj)=>{let a0=obj.id,a1,a2,a3,a4,d,d0;
	function modded(obj){a3=_findPrime(obj);a4=btoa(a.c()).substring(0,6);
		for(d0 of a3){(c.omg.y0==0)?eventModule(d0,'coreManipulation','coreManipulation',['core element modified',a4,true]):null
		}if(a3.length!=0&&c.omg.y0==0){c.omg.y0=1;c.d(a.w,a4,'is_modded',false)}
	};c.omg.z[a0]={a:{attributeFilter:['id','style','width','height'],attributes:true,attributeOldValue:true}
	};a1=new MutationObserver((z)=>{
		for(d of z){
			if(d=='0'){return
			};a2=d.target;
			if(a.r){c.omg.z[a2.id].serv.takeRecords();return
			}switch(d.type){
				case'attributes':a2.setAttribute(d.attributeName,d.oldValue);c.omg.z[a2.id].serv.disconnect();modded(a2);return OBS(a2);
				default:break}
		}});a1.observe(obj,c.omg.z[a0].a);a1.takeRecords();c.omg.z[a0].serv=a1
},attach=(order,dare=false)=>{let a0=c.magic[order].randomTargetArray,a1,a2,a3,a4,a5=a.c(),a6,d,d0;
	function add(dare){
		for(d of ['click','mouseenter','mouseleave']){
			[a0[0].canvas.parentNode,a0[0].canvas,a0[1].canvas,a0[2].canvas].forEach(el=>{
				el['on'+d]=dare?e=>canvasEvent(e):null;dare?el.time=a5:(()=>a3?delete a3.time:null)()
			})
		}if(typeof a0[0].canvas.time!=='undefined'){
			for(d of Object.keys(c.time)){
				if(c.time[d]==c.omg[a0[0].canvas.prime]){delete c.time[d]}}
		}if(dare&&typeof c.time[a0[0].canvas.time]==='undefined'){c.time[a0[0].canvas.time]=c.omg[a0[0].canvas.prime]}
	}for(d of [a0[1],a0[2]]){a1=d.canvas;a2=a1.id;a3=a0[0].canvas.parentNode;
		if(dare&&a.d.getElementById(a2)==null){a4=[a0[0].canvas.getClientRects()[0],a3.getBoundingClientRect()];a3.style='position:relative!important';
			a1.style='position:absolute!important;left:'+(a4[0].left-a4[1].left)+'px!important;top:'+(a4[0].top-a4[1].top)+'px!important;';
			a3.append(a1);if(typeof c.omg.z[a2]==='object'){c.omg.z[a2].serv.disconnect();delete c.omg.z[a2]};OBS(a1)
		}else{
			if(a3=a.d.getElementById(a2)){
				if(typeof c.omg.z[a2]==='object'){c.omg.z[a2].serv.disconnect();a3.id=btoa(a.c()).replaceAll('=','');delete c.omg.z[a2]};a3.style='';a3.remove()
			}}
	};add(false);add(dare);_is(order);
},offset=(order)=>{let a0=isObjectNotNull(order),a1,a2,a3,a4=videoInNotNull(order,true),a5=[],a6=[],a7,a8,d=0;
	if(isYObj(order)&&a0){a0=y[order];a1=[a0.poster,a0.video];a2=a0.dim;
		function calc(a,b){let b0=[],b1=[];
			if(a[0][1][0]!=0){a0.dim.poster={y:0,x:Math.abs((a0.poster.width*a[0][0]-a0.dim.x)/(2*a[0][0]))};drawModule(a0.targets[0],0,a0.poster,a[0][0],y[order].dim.poster)
			}if(a[1][1][0]!=0){a0.dim.video={y:0,x:Math.abs((a0.video.width*a[1][0]-a0.dim.x)/(2*a[1][0]))}}
		}if(a4[0]){a0.video=a4[1];human(a4[1].media.duration,order,true);a4[1].media.scale=c.calc(a4[1].media,a0.dim);a4[1].media.dim=a0.dim;
			if(a4[1].media['on'+c.init[4]]==null){
				for(d of c.init){a4[1].media['on'+d]=e=>videoEvents(e);c.a(a4[1].media['on'+d])
				};d=0}
		}for(d;d<2;d++){
			if(a1[d]!=null){a3=[Math.abs((a2.x/a1[d].width).toFixed(2)),Math.abs((a2.y/a1[d].height).toFixed(2))];a8=a3[(a3[0]>=a3[1])?1:0];a5.push([a8,a3]);a0.scale=a8
			}else{a5.push([0,[0,0]])}
		};setXY(order);calc(a5,a2);attach(order,true)
	}else{c.error('@Offset: Object is null, or to early',a0?order:null)}
},keepPosition=(obj)=>{let a0,a1,a2,a3=['resizeObserver','intersectionObserver','mutationObserver'],a4={attributeFilter:['id','class','style','alt','type','prime'],attributes:true,attributeOldValue:true,characterDataOldValue:true,characterData:true,hidden:true,subtree:true},a5,b0,b1,b2,d,d0;c.sticky(obj);
	function disconnect(obj,server,dare=false){let a0,a1,a2;
		if(a0=c.check(obj)){
			if(isObjectNotNull(a0)){a1=c.magic[a0].observers;a5=a1[a3[server]].observer;
				if(a5.active){a5.server.disconnect()
				}if(dare){
					if(server<=1){a5.server.observe(obj)
					}else{a5.server.observe(obj,a4);a5.server.takeRecords()}
				};a5.active=dare
			}if(!dare){obj.style.removeProperty('position');obj.parentNode.style.removeProperty('position');eventModule(c.omg[obj.prime],a3[server],a3[server]+'IsOff',[a3[server],'disconnected',true])}}
	}function IO(a,b,order=null){return c.error('@Observers: '+a+' disconnected due an error: '+b,order)
	}function OI(a,b,c){let d=a3[b],e=d.substring(0,d.length-1)+'d';eventModule(a,e,e,c)
	}function II(a){let b0=c.omg[a.prime],b1=c.magic[b0],b2=a.getBoundingClientRect();
		for(d0 of b1.randomTargetArray){d0.canvas.width=b2.width;d0.canvas.height=b2.height};y[b0].targets=b1.randomTargetArray;y[b0].dim={x:Math.floor(b2.width),y:Math.floor(b2.height)}
	};a0=new ResizeObserver((z)=>{
		try{
			for(d of z){
				if(d=='0'){return
				};b0=d.target;
				if(a.r){a.s=[b0,b0.width];return
				};II(b0);OI(c.omg[b0.prime],0,[a3[0],{boxSize:d.devicePixelContentBoxSize[0],targetSize:{width:b0.width,height:b0.height},rect:d.contentRect},true]);offset(c.omg[b0.prime])}
		}catch(e){disconnect(obj,0);IO(a3[0],e,c.omg[obj.prime])}});
	a1=new IntersectionObserver((z)=>{
		try{
			for(d of z){
				if(d=='0'){return
				};b0=d.target;b1=c.omg[b0.prime];OI(b1,1,[a3[1],{intersectionRect:d.intersectionRect,isIntersecting:d.isIntersecting},true])}
		}catch(e){disconnect(obj,1);IO(a3[1],e,c.omg[obj.prime])}});
	a2=new MutationObserver((z)=>{
		try{
			for(d of z){b0=d.target;b1=c.omg[b0.prime];
				switch(d.type){
					case'attributes':b0.setAttribute(d.attributeName,d.oldValue);break;
					case'characterData':b0.textContent=d.oldValue;break;
					default:break
				};a2.disconnect();
				return(()=>{disconnect(b0,2,true);OI(b1,2,[a3[2],{type:d.type,attributeName:d.attributeName,restoredTo:(d.oldValue)?d.oldValue:null},true])})()}
		}catch(e){disconnect(obj,2);IO(a3[2],e,c.omg[obj.prime])}});
	return{
		resizeObserver:{observer:{server:a0,active:false},disconnect:()=>disconnect(obj,0)
		},intersectionObserver:{observer:{server:a1,active:false},disconnect:()=>disconnect(obj,1)
		},mutationObserver:{observer:{server:a2,active:false},disconnect:()=>disconnect(obj,2)
		},_observeAll:()=>{II(obj);
			for(d of [0,1,2]){disconnect(obj,d,true)}
		},_disconnectAll:()=>{
			for(d of [0,1,2]){disconnect(obj,d)}}}
},cosinus=(obj,src=null,poster=null,frames=25)=>{
	if(obj==null||obj.nodeName!='CANVAS'){return c.error('@Start: Object is null or Object.nodeName is not "CANVAS"')
	}let order=a.c(),dim=obj.getBoundingClientRect(),a0,d;obj.width=dim.width;obj.height=dim.height;
	if(!_isPreventedPrime(obj)){methods(obj);c.d(obj,'prime',btoa(c.hex(String(order))),false);c.omg[obj.prime]=order;_writePrime(order)
	}else{return c.error('@Start: Object already exist')
	};c.magic[order]={
		target:obj,
		canvas2d:obj.getContext('2d'),
		fakeTarget:fakeArray(obj),
		disguise:secretEventProp(null,obj),
		enabled:false,
		order:order,
		poster:poster,
		src:src,
		ready:false,
		frames:frames,
		videoIn:null,
		observers:keepPosition(obj),
		name:'videoToCanvasSourceObject'
	};c.d(c.magic[order],'randomTargetArray',[c.magic[order].canvas2d,c.magic[order].fakeTarget[0],c.magic[order].fakeTarget[1]],true);
	delete c.magic[order].canvas2d;delete c.magic[order].fakeTarget;
	c.d(c.magic[order],'event',c.e(1),false);
	if(src){_setSrc(order,src).then(p=>{c.magic[order].videoIn=(p[0])?p[1]:null;eventModule(order,'videoSet','videoSet',['HTMLMediaElement',p[0]?event(order,23,true):null,p[0]])})
	}if(poster){_setPoster(order,poster).then(p=>{c.magic[order].poster=(p[0])?p[1]:null;eventModule(order,'posterSet','posterSet',[p[0]?'Uint8ClampedArray':null,p[0]?{width:p[1].width,height:p[1].height}:null,p[0]])})
	}for(d of ['order','frames','name']){c.a(c.magic[order][d])
	}return c.magic[order]
},fakeArray=(obj)=>{let a0=[],d;
	for(d of [c.e(),c.e()]){d.id=btoa(a.c()).replaceAll('=','');d.width=obj.width;d.height=obj.height;
		if(obj.time){d.time=obj.time};a0.push(d.getContext('2d'))
	}return a0
},isObject=(order)=>{return(order in c.magic)
},isYObj=(order)=>{return(order in y)
},isVObj=(order)=>{return(order in c.video)
},isObjectNotNull=(order)=>{return(isObject(order)&&_offInPrime(order))
},videoInNotNull=(order,dare=false)=>{let a0=[false];
	try{a0=[(c.magic[order].videoIn!=null)];
		if(dare){a0.push(a0[0]?c.magic[order].videoIn.video:null)}
	}catch(e){e=null
	}finally{return a0}
},rb=()=>{a.r=false;
	if(a.s!=null){keepPosition(a.s[0]);a.s[0].width=a.s[1]-1;a.s[0].width=a.s[1];_enable(c.omg[a.s[0].prime]);a.s=null}
},disengage=(order,dare=true)=>{let a0,a1,a2=videoInNotNull(order,true),d;
	if(isObjectNotNull(order)){c.sticky(c.magic[order].target);a0=c.magic[order].observers;dare?(()=>{y[order]={frames:c.magic[order].frames,poster:c.magic[order].poster,text:{a:'0:00',b:null,c:'0:00'},nav:null,scale:1,state:{paused:true,muted:c.omg.muted,volume:c.omg.vol}};
		if(a2[0]){y[order].video=a2[1]
		};a0._observeAll()
		})():(()=>{
			if(isYObj(order)){c.z(order,0).canvas.stop()
			};drawModule(c.magic[order].randomTargetArray[0],3);a0._disconnectAll();delete y[order]})()}
},setXY=(order,_x=1920,_y=1080)=>{let d,a0=videoInNotNull(order,true),a1=[];
	if(a0[0]){
		if(_x==1920){_x=a0[1].media.videoWidth
		}if(_y==1080){_y=a0[1].media.videoHeight
	};a1.push(a0[1]);
	if(isYObj(order)){
		if(y[order].video){a1.push(y[order].video)}
	}if(typeof c.video[order]!=='undefined'){a1.push(c.video[order].video)}
	}for(d of a1){d.width=_x;a.height=_y}
},_enable=(order)=>{disengage(order);(order!=null&&isObject(order))?c.magic[order].enabled=true:c.error('@Enable: Object is null')
},_disable=(order)=>{disengage(order,false);attach(order);(order!=null&&isObject(order))?c.magic[order].enabled=false:c.error('@Disable: Object is null')
},_delete=(order)=>{let d;
	for(d of [c.already,c.magic,c.secret,c.video,y,c.omg.y1]){
		try{delete d[order]
		}catch(er){c.error('@Clear: Object is null',_offInPrime(order)?order:null)}}
},_clear=(order)=>{_disable(order);(order!=null&&isObject(order))?(()=>{_delete(order)})():c.error('@Clear: Float is of type '+typeof order)
},_is=(order)=>{
	if(isObjectNotNull(order)){let a0=c.magic[order],a1=(videoInNotNull(order)[0]&&isYObj(order)&&a0.poster!=null);c.omg.y1[order]=a1;
		if(a0.ready!=c.omg.y1[order]){eventModule(order,'readyState','readyState',['videoToCanvas',{video:isYObj(order),poster:(a0.poster!=null)},a1]);c.magic[order].ready=a1}}
},_setSrc=async(order=null,url,dare=false)=>{
	let a0=c.e(1),d,b0,b1;url=(url.substring(0,4)=='http')?url:a.l.origin+url;
	function aid(order=null,a0){this.name='CanvasSourceObject';this.order=order;this._connect=_connect;this._source=a0.src;this.video={width:0,height:0,media:a0};this.time={duration:0,human:'0:00'}
	}return new Promise((resolve)=>{order=(order)?order:a.c();
		if(url.length>=8){
			for(d of [0,1,5,6,11,12,13,14,15,16,18]){a0['on'+c.init[d]]=(e)=>{setXY(order);
				if(isYObj(order)){offset(order)}}
			};a0.onplay=()=>{a0.muted=true;c.video[order]=new aid(order,a0)
			};a0.onloadeddata=()=>{b0=c.video[order].video;b0.width=a0.videoWidth;b0.height=a0.videoHeight
			};a0.onloadedmetadata=()=>{b0=c.video[order].time.duration=a0.duration;a0.pause();a0.volume=c.y(0);a0.muted=c.y(1);
				resolve([true,c.video[order]]);
				if(dare){if(isObject(order)){c.magic[order].videoIn=c.video[order];_is(order)}
				}if(isYObj(order)){offset(order)
				};c.d(a0,'prime',btoa(c.hex(String(c.video[order].order))),true)
			};a0.onerror=()=>{if(dare){c.error('@setSrc: Video load failure',order);a0.remove()};videoFailed(order);resolve([false,null]);_is(order)
			};(async()=>{
				await fetch(url).then(src=>src.blob()).then(src=>{a0.src=URL.createObjectURL(src);return a0}).then(a0=>a0.play()).catch(e=>{resolve([false,null])})
			})()
		}else{
			if(dare){c.error('@setSrc: Object or URL failure',_offInPrime(order)?order:null);a0.remove()};resolve([false,null])}
	})
},_connect=(order,float)=>{
	if(order==null||float==null||order==float){return
	}if(isObject(order)&&isVObj(float)){let a0=c.video[float],a1=false,a2=c.magic[order];a0.video.media.prime=a2.target.prime;c.video[order]=a0;
		a2.videoIn=c.video[order];if(isYObj(order)){
		if('video' in y[order]){a1=!y[order].video.media.paused;y[order].video.media.pause();
			delete y[order].video;a2=c.magic[order];
			y[order].video=a2.videoIn.video;
			a2.src=a2.videoIn._source
		};offset(order);eventModule(order,'videoSet','videoSet',[(c.video[order])?'HTMLMediaElement':null,event(order,23,true),true])
		if(a1){c.z(order,0).canvas.play()}}
	}else{return c.error('@Object: Object is null',order)}
},_setPoster=async(order,poster,dare=false)=>{let a0=typeof poster,a1,a2,a3,d;
	if(order==null||poster==null){return c.error('@setPoster: all arguments must be set')
	}function isDare(order,a0,a1){if(_offInPrime(order)){if(isYObj(order)){y[order].poster=c.magic[order].poster;offset(order)};eventModule(order,'posterSet','posterSet',[a0?'Uint8ClampedArray':null,a0?{width:a1.width,height:a1.height}:null,a0]);_is(order)}
	}function _set(order,a0){a1=c.e();a1.width=a0.naturalWidth;a1.height=a0.naturalHeight;a2=a1.getContext('2d');a2.drawImage(a0,0,0);
		return a2.getImageData(0,0,a1.width,a1.height)
	}async function get(order,url){url=(url.substring(0,4)=='http')?url:a.l.origin+url;
		return new Promise((resolve)=>{a0=new Image();a0.src=url;
			a0.onload=(e)=>{a1=_set(order,a0);if(dare){c.magic[order].poster=a1;isDare(order,true,a0)};resolve([true,a1])
			};a0.onerror=(e)=>{resolve([false,null])}})
	}async function fix(order,obj){a0=obj.nodeName;
		return new Promise((resolve)=>{
			if(a0=='IMG'){a1=(obj.naturalWidth<=121||obj.naturalHeight<=51)?[false,null]:[true,_set(order,obj)];
				if(dare){c.magic[order].poster=a1[0]?a1[1]:null;isDare(order,a1[0],a1[1])
				};resolve(a1)
			}if(a0=='CANVAS'){a1=obj.getContext('2d');a2=a1.getImageData(0,0,obj.width,obj.height);a3=false;
				for(d=0;d<a2.data.length;d++){
					if(a2.data[d]){a3=true;break}
				}if(dare){c.magic[order].poster=a3?a2:null;if(isYObj(order)){y[order].poster=c.magic[order].poster};isDare(order,a3,a2)
			};resolve(a3?[true,a2]:[false,null])}})
	}return(a0=='string')?await get(order,poster):await fix(order,poster)
},_findPrime=(obj)=>{let a0=[],a1=obj;
	if(obj.nodeName=='CANVAS'){a1=obj.parentNode
	};a1.querySelectorAll('CANVAS').forEach(e=>{
		if(typeof e.prime!=='undefined'){a0.push(c.omg[e.prime])}
	});return a0
},_inPrime=(float)=>{eventPrimer(float,null,'isPrime');return _offInPrime(float)
},_offInPrime=(float)=>{return(typeof c.localPrime[float]!=='undefined')
},_writePrime=(float)=>{
	if(!_inPrime(float)){c.localPrime[float]=0
	}return true
},_preventPrime=(obj)=>{let a0=a.c();_writePrime(a0);c.magic[a0]=null;c.a(c.magic[a0]);c.d(obj,'prime',btoa(c.hex(String(a0))),false);return a0
},_isPreventedPrime=(obj)=>{eventPrimer(null,obj,'isPreventedPrime');return(typeof obj.prime!=='undefined')
};class PRIME{
	static get isPrime(){return _inPrime}
	static get doPrime(){return _writePrime}
	static get preventPrime(){return _preventPrime}
	static get isPreventedPrime(){return _isPreventedPrime}
}class NAME{
	constructor(name){this.name=name}
	static deepFreeze(obj){return c.a(obj)}
	toString(){return this.name}valueOf(){return this.name}
}class HELP extends NAME{
	constructor(){super(new NAME('HELP').name)}
	explain(what){let a0,a1={
			videoToCanvas:{head:'videoToCanvas',body:'Objects needed to build a \'videoToCanvasObject\''
			},CanvasSourceObject:{head:'CanvasSourceObject',body:'Object needed to set the src for a \'videoToCanvasObject\''
			},hex:{head:'hex@videoToCanvas',body:'Function to create a hexadecimal string'
			},plain:{head:'plain@videoToCanvas',body:'Function to read a hexadecimal string'}
		},text='';
		if(what==null){return null
		}else{a0=(typeof a1[what]!=='undefined')?a1[what]:'No information avaiable';alert((typeof a0==='object')?a0.head+'\n'+a0.body:a0)}}
	toString(){return NAME.toString(this)}valueOf(){return NAME.valueOf(this)}
}class videoToCanvas extends NAME{
	constructor(obj,src){super(new NAME('videoToCanvasObject').name);this._enable=_enable;this._disable=_disable;this._start=cosinus;this._clear=_clear;this._setPoster=_setPoster}
	translate(){return{hex:c.hex,plain:c.plain}}
	intervene(order){return(order!=null)?{name:'interveneObject',calc:c.calc,canvas:c.z(order,0).canvas}:{}}
	toString(){return NAME.toString(this)}valueOf(){return NAME.valueOf(this)}
}class CanvasSourceObject extends NAME{
	constructor(order=null,src=null,track=null){super(new NAME('CanvasSourceObject').name);this._connect=_connect;this._source=src;this._track=track;this._src=_setSrc}
	toString(){return  NAME.toString(this)}valueOf(){return NAME.valueOf(this)}
};c.d(HELP,'version',2.2,false);c.d(PRIME,'version',6.96,false);c.d(a.w,'PRIME',PRIME,false);
for(let d of [PRIME,HELP,videoToCanvas,CanvasSourceObject]){c.a(d)
};c.d(a.d,'captureEvents',null,false);
self.onresize=()=>{a.r=true;if(typeof a.w._resize!=='undefined'){clearTimeout(a.w._resize)};c.x();a.w._resize=setTimeout(()=>{rb()},2e2)}
HTMLCanvasElement.prototype.captureStream=null;
export{videoToCanvas,CanvasSourceObject,HELP}
