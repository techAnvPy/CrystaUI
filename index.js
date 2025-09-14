/*
 Crysta UI Framework
 Copyright (c) 2025 Amar Kumar Sahu

 Licensed under the Crysta UI Framework License v1.0
 You may modify this code, but use is restricted to the AnvPy environment.
 See the LICENSE file for details.
*/

function $(val){
	return document.querySelector(val);
}
function parseElement(val){
	let elm;
	eval("elm = new " + val["type"] + "(" + JSON.stringify(val) + ");");
	return elm.html();
}
class Progress{ 
	constructor({id="",width="100%",nodeColor="transparent",barColor="orange",percent=0,margin=["0px","0px","0px","0px"],style={},a=[],b=[],s=[]} = {}){
		this.elem = document.createElement("div");
		this.elem.setAttribute("id",id);
		a.forEach((val) => {
			let elm = this.elem;
			val["c"].forEach((value) => {
				elm = elm.children[value];
			});
			if("h" in val){
				elm.setAttribute(val["a"],val["v"]);
			}
			else{
				eval("elm." + val["a"] + "='" + val["v"] + "';");
			}
		});
		b.forEach((val) => {
			let elm = this.elem;
			val[3].forEach((value) => {
				elm = elm.children[value];
			});
			elm.addEventListener(val[0],(event) => {
				event.preventDefault();
				event.stopPropagation();
				Android.trigger(JSON.stringify({'alloy':val[1],args:val[2]}));
			});
		});
		s.forEach((val) => {
			let elm = this.elem;
			val[1].forEach((value) => {
				elm = elm.children[value];
			});
			Object.assign(elm.style,val[0]);
		});
		this.elem.setAttribute("class","prgs_bar");
		this.elem.innerHTML = "<div></div>";
		this.elem.style.width = width;
		this.elem.style.background = nodeColor;
		this.elem.style.setProperty("--bar",barColor);
		this.elem.style.margin = margin.join(" ");
		this.elem.percent = percent;
		this.elem.children[0].style = "width:" + this.elem.percent + "%;left:0";
		Object.assign(this.elem.style,style);
		this.elem.getValue = function(){
			return this.percent;
		}
		this.elem.setValue = function(percent){
			this.percent = percent;
			this.children[0].style = "width:" + this.percent + "%;left:0";
		}
	}
	html(){
		return this.elem;
	}
}
class ProgressIndicator{
	constructor({id="",width="100%",background="transparent",barColor="orange",autoplay=1,style={},a=[],b=[],s=[]} = {}){
		this.elem = document.createElement("div");
		this.elem.setAttribute("id",id);
		a.forEach((val) => {
			let elm = this.elem;
			val["c"].forEach((value) => {
				elm = elm.children[value];
			});
			if("h" in val){
				elm.setAttribute(val["a"],val["v"]);
			}
			else{
				eval("elm." + val["a"] + "='" + val["v"] + "';");
			}
		});
		b.forEach((val) => {
			let elm = this.elem;
			val[3].forEach((value) => {
				elm = elm.children[value];
			});
			elm.addEventListener(val[0],(event) => {
				event.preventDefault();
				event.stopPropagation();
				Android.trigger(JSON.stringify({'alloy':val[1],args:val[2]}));
			});
		});
		s.forEach((val) => {
			let elm = this.elem;
			val[1].forEach((value) => {
				elm = elm.children[value];
			});
			Object.assign(elm.style,val[0]);
		});
		this.elem.setAttribute("class","prgs_bar");
		this.elem.innerHTML = "<div></div><div></div>";
		Object.assign(this.elem.style,style);
		this.animate = function(){
			this.elem.children[0].animate([{
				left:"-50%"
			},{
				left:"100%"
			}],{
				duration:1500,
				easing:"ease-in"
			});
			setTimeout(() => {
				this.elem.children[1].animate([{
					left:"-50%",
					width:"40%"
				},{
					left:"100%",
					width:"10%"
				}],{
					duration:1000,
					easing:"ease-out"
				});
			},1000);
		}
		if(autoplay){
			this.animate();
			this.interval = setInterval(() => { this.animate(); },2500);
		}
		this.elem.play = function(){
			this.interval = setInterval(() => { this.animate(); },2500);
		}
		this.elem.stop = function(){
			clearInterval(this.interval);
		}
	}
	html(){
		return this.elem;
	}
}
class AudioPlayer{
	constructor({src="",volume="",time="",loop=0,autoplay=0,id="",a=[],b=[],s=[]} = {}){
		this.elem = new Audio();
		this.elem.id = id;
		a.forEach((val) => {
			let elm = this.elem;
			val["c"].forEach((value) => {
				elm = elm.children[value];
			});
			if("h" in val){
				elm.setAttribute(val["a"],val["v"]);
			}
			else{
				eval("elm." + val["a"] + "='" + val["v"] + "';");
			}
		});
		b.forEach((val) => {
			let elm = this.elem;
			val[3].forEach((value) => {
				elm = elm.children[value];
			});
			elm.addEventListener(val[0],(event) => {
				event.preventDefault();
				event.stopPropagation();
				Android.trigger(JSON.stringify({'alloy':val[1],args:val[2]}));
			});
		});
		s.forEach((val) => {
			let elm = this.elem;
			val[1].forEach((value) => {
				elm = elm.children[value];
			});
			Object.assign(elm.style,val[0]);
		});
		this.elem.src = src;
		this.elem.volume = volume;
		this.elem.currentTime = time;
		this.elem.loop = loop;
		this.elem.autoplay = autoplay;
	}
	duration(){
		return this.elem.duration;
	}
	time(){
		return this.elem.currentTime;
	}
	play(){
		this.elem.play();
	}
	pause(){
		this.elem.pause();
	}
	reset(){
		this.elem.currentTime = 0;
	}
	html(){
		return this.elem;
	}
}
class VideoPlayer{
	constructor({id="",width="auto",background="white",radius=["0px"],height="auto",src="",volume="",time="",loop=0,autoplay=0,controls=true,fullScreen=false,margin=["0px","0px","0px","0px"],padding=["0px","0px","0px","0px"],style={},ratio=true,a=[],b=[],s=[]} = {}){
		this.elem = document.createElement("video");
		this.elem.setAttribute("id",id);
		this.elem.controls = controls;
		this.elem.src = src;
		this.elem.volume = volume;
		this.elem.currentTime = time;
		this.elem.style.background = background;
		this.elem.loop = loop;
		this.elem.style.borderRadius = radius.join(" ");
		this.elem.autoplay = autoplay;
		this.elem.style.width = width;
		this.elem.style.height = height;
		if(!fullScreen){
			this.elem.setAttribute("playsinline","true");
		}
		if(ratio){
			this.elem.style.objectFit = "contain";
		}
		else{
			this.elem.style.objectFit = "cover";
		}
		this.elem.style.margin = margin.join(" ");
		this.elem.style.padding = padding.join(" ");
		Object.assign(this.elem.style,style);
	}
	duration(){
		return this.elem.duration;
	}
	time(){
		return this.elem.currentTime;
	}
	play(){
		this.elem.play();
	}
	addStream(val){
		this.elem.srcObject = val;
	}
	pause(){
		this.elem.pause();
	}
	reset(){
		this.elem.currentTime = 0;
	}
	html(){
		return this.elem;
	}
}
class ProgressMeter{
	constructor({id="",width="60%",nodeColor="cyan",barColor="#009999",percent=0,margin=["0px","0px","0px","0px"],style={},a=[],b=[],s=[]} = {}){
		this.elem = document.createElement("div");
		this.elem.setAttribute("class","progress");
		this.elem.innerHTML = "<div><div></div></div>";
		this.elem.style.background = barColor;
		this.elem.setAttribute("id",id);
		a.forEach((val) => {
			let elm = this.elem;
			val["c"].forEach((value) => {
				elm = elm.children[value];
			});
			if("h" in val){
				elm.setAttribute(val["a"],val["v"]);
			}
			else{
				eval("elm." + val["a"] + "='" + val["v"] + "';");
			}
		});
		b.forEach((val) => {
			let elm = this.elem;
			val[3].forEach((value) => {
				elm = elm.children[value];
			});
			elm.addEventListener(val[0],(event) => {
				event.preventDefault();
				event.stopPropagation();
				Android.trigger(JSON.stringify({'alloy':val[1],args:val[2]}));
			});
		});
		s.forEach((val) => {
			let elm = this.elem;
			val[1].forEach((value) => {
				elm = elm.children[value];
			});
			Object.assign(elm.style,val[0]);
		});
		this.elem.style.width = width;
		this.elem.children[0].style.left = "calc(" + percent + "% - 10px)";
		this.elem.children[0].style.background = nodeColor;
		this.elem.children[0].children[0].style.background = barColor;
		this.elem.style.margin = margin.join(" ");
		Object.assign(this.elem.style,style);
		this.elem.children[0].addEventListener("touchmove",(event) => {
			if(event.touches[0].clientX - this.elem.offsetLeft + 10 > this.elem.offsetWidth | event.touches[0].clientX - this.elem.offsetLeft < -10){
				return;
			}
			this.elem.children[0].style.transform = "scale(1.5)";
			this.elem.children[0].children[0].style.transform = "scale(1.4)";
			this.elem.children[0].style.left = (event.touches[0].clientX - this.elem.offsetLeft) + "px";
		});
		this.elem.children[0].addEventListener("touchend",(event) => {
			this.elem.children[0].style.transform = "scale(1)";
			this.elem.children[0].children[0].style.transform = "scale(1)";
		});
		this.elem.getValue = function(){
			return ((this.children[0].offsetLeft - this.offsetLeft + 10) * 100)/this.offsetWidth;
		}
		this.elem.setValue = function(val){
			this.children[0].style.left = "calc(" + val + "% - 10px)";
		}
	}
	html(){
		return this.elem;
	}
}
class SideNavigation{
	constructor({id="", width="100%",height="auto",style={},room=[],child=[],a=[],b=[],s=[] } = {}){
		this.elem = document.createElement("div");
		this.elem.setAttribute("class","move");
		this.elem.id = id;
		a.forEach((val) => {
			let elm = this.elem;
			val["c"].forEach((value) => {
				elm = elm.children[value];
			});
			if("h" in val){
				elm.setAttribute(val["a"],val["v"]);
			}
			else{
				eval("elm." + val["a"] + "='" + val["v"] + "';");
			}
		});
		b.forEach((val) => {
			let elm = this.elem;
			val[3].forEach((value) => {
				elm = elm.children[value];
			});
			elm.addEventListener(val[0],(event) => {
				event.preventDefault();
				event.stopPropagation();
				Android.trigger(JSON.stringify({'alloy':val[1],args:val[2]}));
			});
		});
		s.forEach((val) => {
			let elm = this.elem;
			val[1].forEach((value) => {
				elm = elm.children[value];
			});
			Object.assign(elm.style,val[0]);
		});
		this.child = child;
		this.x = undefined; this.vx = 0; this.fx = 0; this.bx = 0; this.sinterval = null;
		room.forEach((val,index) => {
			let div = document.createElement("div");
			div.appendChild(val);
			if(index){
				div.style.zIndex = "-1";
			}
			this.elem.appendChild(div);
		});
		this.elem.live = 0;
		this.elem.animate = null;
		Object.assign(this.elem.style,style);
		this.elem.traverse = function(val){
			if(val == this.live) return;
			this.vx = 0;
			if(val > this.live){
				this.children[val].style.zIndex = 0;
				this.children[this.live].animate([{
					transform:"translateX(0)"
				},{
					transform:"translateX(-100%)"
				}],{
					duration:500,
					easing:"ease-out",
					fill:"both"
				});
				this.children[val].animate([{
					transform:"translateX(100%)"
				},{
					transform:"translateX(0)"
				}],{
					duration:500,
					easing:"ease-out",
					fill:"both"
				});
				this.live = val;	
			}
			else{
				this.children[val].style.zIndex = 0;
				this.children[this.live].animate([{
					transform:"translateX(0)"
				},{
					transform:"translateX(100%)"
				}],{
					duration:500,
					easing:"ease-out",
					fill:"both"
				});
				this.children[val].animate([{
					transform:"translateX(-100%)"
				},{
					transform:"translateX(0)"
				}],{
					duration:500,
					easing:"ease-out",
					fill:"both"
				});
				this.live = val;	
			}
		}
	}
	html(){
		this.child.forEach((val,index) => {
			let elm;
			eval("elm = new " + val["type"] + "(" + JSON.stringify(val) + ");");
			let div = document.createElement("div");
			div.appendChild(elm.html());
			if(index){
				div.style.zIndex = "-1";
			}
			this.elem.appendChild(div);
		});
		$(".measure").appendChild(this.elem);
		this.elem.style.height = $(".measure").scrollHeight + "px";
		$(".measure").innerHTML = "";
		return this.elem;
	}
}
class Menu{
	constructor({posX=0,posY=0,items=[],id="",onClick=0,style={},bgColor="white",color="black",iconSize="18px",shadowColor="lightgrey",a=[],b=[],s=[]} = {}){
		this.elem = document.createElement("div");
		this.elem.setAttribute("class","menu");
		this.elem.style.background = bgColor;
		this.elem.style.setProperty("--color",shadowColor);
		this.elem.id = id;
		a.forEach((val) => {
			let elm = this.elem;
			val["c"].forEach((value) => {
				elm = elm.children[value];
			});
			if("h" in val){
				elm.setAttribute(val["a"],val["v"]);
			}
			else{
				eval("elm." + val["a"] + "='" + val["v"] + "';");
			}
		});
		b.forEach((val) => {
			let elm = this.elem;
			val[3].forEach((value) => {
				elm = elm.children[value];
			});
			elm.addEventListener(val[0],(event) => {
				event.preventDefault();
				event.stopPropagation();
				Android.trigger(JSON.stringify({'alloy':val[1],args:val[2]}));
			});
		});
		s.forEach((val) => {
			let elm = this.elem;
			val[1].forEach((value) => {
				elm = elm.children[value];
			});
			Object.assign(elm.style,val[0]);
		});
		Object.assign(this.elem.style,style);
		this.elem.style.top = posY + "px";
		this.elem.style.left = posX + "px";
		items.forEach((val,index) => {
			let div = document.createElement("div");
			if(val["icon"]){
				let i = document.createElement("i");
				i.innerHTML = val["icon"];
				i.style.marginRight = "10px";
				i.style.color = color;
				i.style.fontSize = iconSize;
				if(val["color"]){
					i.style.color = val["color"];
				}
				div.appendChild(i);
			}
			let span = document.createElement("span");
			span.innerHTML = val["text"];
			span.style.color = color;
			if(val["color"]){
				span.style.color = val["color"];
			}
			div.appendChild(span);
			if(onClick){
				div.addEventListener("click",() => {
					Android.trigger(JSON.stringify({alloy:onClick,args:[val["text"]]}));
				});
			}
			this.elem.appendChild(div);
		});
		document.addEventListener("click",(event) => {
			if(!this.elem.contains(event.target) && this.elem.getAttribute("show") == "true") {
				this.elem.hide();
			}
		});
		this.elem.show = function(){
			if(this.offsetLeft + this.scrollWidth > innerWidth){
				this.style.left = innerWidth - this.scrollWidth - 10 + "px";
			}
			this.animate([{
				maxHeight:"0px",
				padding:"0px",
				opacity:0
			},{
				maxHeight:this.scrollHeight + "px",
				padding:"5px",
				opacity:1
			}],{
				duration:100 * (items.length - 1),
				easing:"ease-out",
				fill:"both"
			});
			setTimeout(() => {
				this.setAttribute("show","true");
			},50 * (items.length - 1));
		}
		this.elem.hide = function(){
			this.setAttribute("show","false");
			this.animate([{
				maxHeight:this.scrollHeight + "px",opacity:1,padding:"5px"
			},{
				maxHeight:"0px",opacity:0,padding:"0px"
			}],{
				duration:100 * (items.length - 1),
				easing:"ease-out",
				fill:"both"
			});
		}
	}
	html(){
		return this.elem;
	}
}
class NavigationFooter{
	constructor({width="100vw",bgColor="transparent",id="",onClick=0,inactiveColor="black",activeColor="white",bgColorActive="#3f48cc",items=[],margin=['0px','0px','0px','0px'],padding=['0px','0px','0px','0px'],style={},a=[],b=[],s=[]} = {}){
		this.elem = document.createElement("div");
		this.elem.setAttribute("class","navbar");
		this.elem.mode = 0;
		this.elem.id = id;
		a.forEach((val) => {
			let elm = this.elem;
			val["c"].forEach((value) => {
				elm = elm.children[value];
			});
			if("h" in val){
				elm.setAttribute(val["a"],val["v"]);
			}
			else{
				eval("elm." + val["a"] + "='" + val["v"] + "';");
			}
		});
		b.forEach((val) => {
			let elm = this.elem;
			val[3].forEach((value) => {
				elm = elm.children[value];
			});
			elm.addEventListener(val[0],(event) => {
				event.preventDefault();
				event.stopPropagation();
				Android.trigger(JSON.stringify({'alloy':val[1],args:val[2]}));
			});
		});
		s.forEach((val) => {
			let elm = this.elem;
			val[1].forEach((value) => {
				elm = elm.children[value];
			});
			Object.assign(elm.style,val[0]);
		});
		this.elem.style.background = bgColor;
		this.elem.style.width = width;
		Object.assign(this.elem.style,style);
		items.forEach((val,index) => {
			let div = document.createElement("div");
			div.addEventListener("click",() => {
				if(onClick){
					Android.trigger(JSON.stringify({alloy:onClick,args:[index]}));
				}
				this.elem.navigate(index);
			});
			let img = document.createElement("i");
			img.style.color = inactiveColor;
			img.innerHTML = val["icon"];
			let span = document.createElement("span");
			span.style.color = activeColor;
			if(index == 0){
				div.style.background = bgColorActive;
				span.style.maxWidth = "70px";
				span.style.color = activeColor;
				img.style.color = activeColor;
			}
			span.innerHTML = val["text"] ? val["text"] : "";
			div.appendChild(img); div.appendChild(span);
			this.elem.appendChild(div);
		});
		this.elem.navigate = function(val){
			if(this.mode != val){
				this.children[this.mode].animate([{
					background:bgColorActive
				},{
					background:"transparent"
				}],{
					duration:250,
					fill:"both",
					easing:"ease-out"
				});
				this.children[this.mode].children[0].animate([{
					color:activeColor
				},{
					color:inactiveColor
				}],{
					duration:250,
					fill:"both",
					easing:"ease-out"
				});
				this.children[this.mode].children[1].animate([{
					maxWidth:this.children[this.mode].children[1].clientWidth + "px"
				},{
					maxWidth:"0"
				}],{
					duration:250,
					fill:"both",
					easing:"ease-out"
				});
				this.mode = val;
				this.children[this.mode].animate([{
					background:"transparent"
				},{
					background:bgColorActive
				}],{
					duration:250,
					fill:"both",
					easing:"ease-out"
				});
				this.children[this.mode].children[0].animate([{
					color:inactiveColor
				},{
					color:activeColor
				}],{
					duration:250,
					fill:"both",
					easing:"ease-out"
				});
				this.children[this.mode].children[1].animate([{
					maxWidth:"0"
				},{
					maxWidth:"70px"
				}],{
					duration:250,
					fill:"both",
					easing:"ease-out"
				});
			}
		}
	}
	html(){
		return this.elem;
	}
}
class ListView{
	constructor({ id="",width="100%",height="60%",margin=['0px','0px','0px','0px'],inset=['0px','0px','0px','0px'],bgColor="transparent",select=false,style={},paletteColor="#3f48cc",child=[],mode=0,onClick=0,onSelect=0,removeAnim=0,a=[],b=[],s=[] } = {}){
		this.elem = document.createElement("div");
		this.elem.setAttribute("class","list");
		this.elem.id = id;
		a.forEach((val) => {
			let elm = this.elem;
			val["c"].forEach((value) => {
				elm = elm.children[value];
			});
			if("h" in val){
				elm.setAttribute(val["a"],val["v"]);
			}
			else{
				eval("elm." + val["a"] + "='" + val["v"] + "';");
			}
		});
		b.forEach((val) => {
			let elm = this.elem;
			val[3].forEach((value) => {
				elm = elm.children[value];
			});
			elm.addEventListener(val[0],(event) => {
				event.preventDefault();
				event.stopPropagation();
				Android.trigger(JSON.stringify({'alloy':val[1],args:val[2]}));
			});
		});
		s.forEach((val) => {
			let elm = this.elem;
			val[1].forEach((value) => {
				elm = elm.children[value];
			});
			Object.assign(elm.style,val[0]);
		});
		this.elem.style.width = width;
		this.elem.style.height = height;
		this.elem.style.margin = margin.join(" ");
		this.elem.style.padding = inset.join(" ");
		this.elem.select = select;
		this.elem.rem = removeAnim;
		this.child = child;
		let hex = paletteColor.replace(/^#/, '');
    	let clr = [parseInt(hex.substring(0, 2), 16),parseInt(hex.substring(2, 4), 16),parseInt(hex.substring(4, 6), 16)];
    	let sel = clr.map(num => (num + 450)/2);
		//clr = clr.map(num => (num + 350)/2);
		this.elem.style.setProperty("--bg","rgb(" + clr.join(",") + ")");
		this.elem.style.setProperty("--clr",paletteColor);
		Object.assign(this.elem.style,style);
		this.elem.add_item = function({title="",body="",image=null,count="",counterColor="#25D366",rightText="",rightIcon=null,titleColor="black",bodyColor="#808080",iconColor="black"} = {}){
			let list = document.createElement("div");
			list.setAttribute("click","false");
			list.setAttribute("anim","false");
			list.style.background = bgColor;
			let img  = document.createElement("div");
			img.setAttribute("class","img");
			img.style.backgroundColor = paletteColor;
			if(image != null){
				if(image["letter"]){
					img.innerHTML = image["letter"].charAt(0);
					if(image["color"]){
						img.style.color = image["color"];
					}
				}
				else if(image["img"]){
					img.style.backgroundImage = "url(" + image["img"] + ")";
					img.style.backgroundColor = "transparent";
				}
				else if(image["icon"]){
					let i = document.createElement("i");
					i.innerHTML = image["icon"];
					i.style.color = iconColor;
					img.appendChild(i);
				}
				else{
					img.style.display = "none";
				}
			}
			else{
				img.style.display = "none";
			}
			let right = document.createElement("div");
			right.setAttribute("class","option");
			right.innerHTML = "<p>" + rightText + "</p>";
			if(rightIcon != null){
				count = "<i style='color:" + rightIcon["color"] + "'>" + rightIcon["icon"] + "</i>";
			}
			else if(count == ""){
				count = "<span>.</span>";
			}
			else{
				count = "<button style='color:" + counterColor + "'>" + count + "</button>";
			}
			right.innerHTML += "<p>" + count + "</p>";
			list.innerHTML = "<div style='display: flex;flex:1;align-items: center;flex-wrap: nowrap;column-gap: 15px;'>" + img.outerHTML + "<div class='txt'><p style='color:" + titleColor + "'>" + title + "</p><small style='color:" + bodyColor + "'>" + body + "</small></div>" + right.outerHTML + "</div>";
			if(body.trim() == ""){
				list.children[0].children[1].children[1].outerHTML = "";
			}
			list.children[0].children[0].style.backgroundColor = paletteColor;
			list.children[0].children[0].setAttribute("click","false");
			list.addEventListener("click",(event) => {
				if(onClick){
					Android.trigger(JSON.stringify({alloy:onClick,args:[this.elem.childElementCount]}));
				}
				if(mode){
					if(list.getAttribute("click") == "false"){
						list.setAttribute("click","true");
						list.style.backgroundColor = "rgba(" + cir.join(",") + ",0.2)";
						list.style.setProperty("--anim","sel .3s ease-out both");
					}
					else{
						list.style.backgroundColor = bgColor;
						list.style.setProperty("--anim","sel-rev .3s ease-out both");
						list.setAttribute("click","false");
					}
					return;
				}
				if(list.getAttribute("click") == "true"){
					if(onSelect){
						Android.trigger(JSON.stringify({index:onSelect,args:[this.elem.childElementCount]}));
					}
					list.style.backgroundColor = bgColor;
					list.style.setProperty("--anim","sel-rev .3s ease-out both");
					list.setAttribute("click","false");
				}
			});
			if(this.select){
				list.addEventListener("touchstart",(event) => {
					if(list.getAttribute("click") == "true" | mode) return;
					if(onSelect){
						Android.trigger(JSON.stringify({index:onSelect,args:[this.elem.childElementCount]}));
					}
					list.style.setProperty("--btn-trns","");
					list.style.setProperty("--btn-lft",(event.touches[0].clientX - list.offsetLeft)/list.offsetWidth * 100 + "%");
					list.style.setProperty("--btn-trns","anim 1s linear both");
					if(list.getAttribute("click") == "false"){
						this.timeout = setTimeout(() => {
							list.setAttribute("click","true");
							list.style.setProperty("--btn-trns","");
							list.style.backgroundColor = "rgba(" + clr.join(",") + ",0.2)";
							list.style.setProperty("--anim","sel .3s ease-out both");
							event.preventDefault();
						},400);
					}
				});
				list.addEventListener("touchend",() => {
					clearTimeout(this.timeout);
				});
			}
			this.appendChild(list);
		}
		this.elem.remove_item = function(index){
			if(this.rem){
				this.removeChild(this.children[index - 1]);
				return;
			}
			if(this.children[index - 1]){
				this.children[index - 1].animate([{
					maxHeight:this.children[index - 1].scrollHeight + "px",
					padding:"10px",
					margin:"10px 0"
				},{
					maxHeight:"0px",
					padding:"0 10px",
					margin:"0"
				}],{
					duration:250,
					easing:"ease-out",
					fill:"both"
				});
				setTimeout(() => {
					this.removeChild(this.children[index - 1]);
				},250);
			}
		}
		this.elem.selectAll = function(){
			this.childNodes.forEach((elem) => {
				if(elem.getAttribute("anim") == "true") return;
				elem.setAttribute("click","true");
				elem.style.setProperty("--btn-trns","");
				elem.style.backgroundColor = "rgb(" + sel.join(",") + ")";
				elem.style.setProperty("--anim","sel .3s ease-out both");
			});
		}
		this.elem.unselectAll = function(){
			this.childNodes.forEach((elem) => {
				if(elem.getAttribute("click") == "false") return;
				elem.style.backgroundColor = bgColor;
				elem.style.setProperty("--anim","sel-rev .3s ease-out both");
				elem.setAttribute("click","false");
			});
		}
		this.elem.count = function(){
			let count = [];
			this.childNodes.forEach((elem,index) => {
				if(elem.getAttribute("click") == "true"){
					count.push(index);
				}
			});
			return JSON.stringify(count);
		}
	}
	remove_item(index){
		this.elem.remove_item(index);
	}
	add_item({title="",body="",menu="",image=null,rightIcon=null,rightText=""} = {}){
		this.elem.add_item({"title":title,"body":body,"menu":menu,"image":image,"rightIcon":rightIcon,rightText:rightText});
	}
	html(){
		this.child.forEach((val) => {
			this.elem.add_item(val);
		});
		return this.elem;
	}
}
class ZapButton{
	constructor({ bgColor="cyan",onClick=0,id="", icon="",iconSize="25px",iconColor="black", radius=["10px"],elevation=1, style={},bottom="25vh",right="20px",width="50px",height="50px",a=[],b=[],s=[],rippleColor="transparent" } = {}){
		this.elem = document.createElement("div");
		this.elem.setAttribute("class","fbtn");
		this.elem.id = id;
		this.elem.style.setProperty("--btn-bg",rippleColor);
		a.forEach((val) => {
			let elm = this.elem;
			val["c"].forEach((value) => {
				elm = elm.children[value];
			});
			if("h" in val){
				elm.setAttribute(val["a"],val["v"]);
			}
			else{
				eval("elm." + val["a"] + "='" + val["v"] + "';");
			}
		});
		b.forEach((val) => {
			let elm = this.elem;
			val[3].forEach((value) => {
				elm = elm.children[value];
			});
			elm.addEventListener(val[0],(event) => {
				event.preventDefault();
				event.stopPropagation();
				Android.trigger(JSON.stringify({'alloy':val[1],args:val[2]}));
			});
		});
		s.forEach((val) => {
			let elm = this.elem;
			val[1].forEach((value) => {
				elm = elm.children[value];
			});
			Object.assign(elm.style,val[0]);
		});
		this.elem.style.background = bgColor;
		this.elem.style.bottom = bottom;
		this.elem.style.right = right;
		this.elem.style.width = width;
		this.elem.style.height = height;
		this.elem.innerHTML = "<i style='color:" + iconColor + "'>" + icon + "</i>";
		this.elem.children[0].style.fontSize = iconSize;
		this.elem.style.borderRadius = radius.join(" ");
		Object.assign(this.elem.style,style);
		this.elem.addEventListener("click",(event) => {
			event.preventDefault();
			if(onClick){
				Android.trigger(JSON.stringify({alloy:onClick,args:[]}));
			}
			if(this.active && extend){
				this.active = false;
				$(".fbtn-grp").style.pointerEvents = "none";
				$(".fbtn-grp").animate([{
					maxHeight:this.height + "px",
					opacity:1
				},{
					maxHeight:"0px",
					opacity:0
				}],{
					duration:200,
					easing:"ease-out",
					fill:"both"
				});
				if(transition){
					this.elem.animate([{
						transform:"rotate(180deg)"
					},{
						transform:"rotate(0deg)"
					}],{
						duration:200,
						easing:"ease-out",
						fill:"both"
					});
				}
			}
			if(this.interval){
				clearTimeout(this.interval);
			}
			this.elem.style.setProperty("--btn-lft",(event.x - this.elem.offsetLeft)/this.elem.offsetWidth * 100 + "%");
			this.elem.style.setProperty("--btn-trns","animate 0.5s linear both");
			this.interval = setTimeout(() => {
				this.elem.style.setProperty("--btn-trns","");
			},500);
		});
	}
	child(val){
		this.elem.appendChild(val);
		this.height = this.elem.offsetHeight;
	}
	html(){
		return this.elem;
	}
}
class SidePanel{
	constructor({ bgColor="white", style={}, child=[], id="",onClick=0,a=[],b=[],s=[] } = {}){
		this.elem = document.createElement("div");
		this.elem.setAttribute("class","nav");
		this.elem.style.background = bgColor;
		this.elem.ismanrope = false;
		this.elem.id = id;
		this.a = a;this.b = b;this.s = s;
		this.ismanrope = false;
		this.child = child;
		if(onClick){
			this.elem.addEventListener("click",() => {
				Android.trigger(JSON.stringify({alloy:onClick,args:[]}));
			});
		}
		this.elem.show = function(){
			this.ismanrope = true;
			this.animate([{
				left:"-80vw"
			},{
				left:"0vw"
			}],{
				duration:300,
				fill:"both",
				easing:"ease-out"
			});
			document.querySelector(".screen").animate([{
				opacity:0
			},{
				opacity:.3
			}],{
				duration:250,
				easing:"linear",
				fill:"both"
			});
		}
		this.elem.hide = function(){
			this.ismanrope = false;
			this.animate([{
				left:"0vw"
			},{
				left:"-80vw"
			}],{
				duration:300,
				fill:"both",
				easing:"ease-out"
			});
			document.querySelector(".screen").animate([{
					opacity:.3
				},{
					opacity:0
				}],{
					duration:250,
					easing:"linear",
					fill:"both"
				});
		}
		document.querySelector("#container").addEventListener("click",(event) => {
			if(this.elem.contains(event.target)){
				return;
			}
			if(this.elem.ismanrope){
				this.elem.hide();
			}
		});
		Object.assign(this.elem.style,style);
	}
	append(elem){
		this.elem.appendChild(elem);
	}
	html(){
		this.child.forEach((val) => {
			let elm;
			eval("elm = new " + val["type"] + "(" + JSON.stringify(val) + ");");
			this.elem.appendChild(elm.html());
		});
		this.a.forEach((val) => {
			let elm = this.elem;
			val["c"].forEach((value) => {
				elm = elm.children[value];
			});
			if("h" in val){
				elm.setAttribute(val["a"],val["v"]);
			}
			else{
				eval("elm." + val["a"] + "='" + val["v"] + "';");
			}
		});
		this.b.forEach((val) => {
			let elm = this.elem;
			val[3].forEach((value) => {
				elm = elm.children[value];
			});
			elm.addEventListener(val[0],(event) => {
				event.preventDefault();
				event.stopPropagation();
				Android.trigger(JSON.stringify({'alloy':val[1],args:val[2]}));
			});
		});
		this.s.forEach((val) => {
			let elm = this.elem;
			val[1].forEach((value) => {
				elm = elm.children[value];
			});
			Object.assign(elm.style,val[0]);
		});
		return this.elem;
	}
}
class AppBar{
	constructor({bgColor="#6200ee",width="100%",onClick=0,textbox=null,id="", title="", leftIcon="",leftIconColor="", addon=[], style={},fontFamily="manrope sans",fontColor="white",iconSize="25px",a=[],b=[],s=[]} = {}){
		this.elem = document.createElement("div");
		this.elem.setAttribute("class","appbar");
		this.elem.style.background = bgColor;
		this.elem.style.width = width;
		this.elem.id = id;
		a.forEach((val) => {
			let elm = this.elem;
			val["c"].forEach((value) => {
				elm = elm.children[value];
			});
			if("h" in val){
				elm.setAttribute(val["a"],val["v"]);
			}
			else{
				eval("elm." + val["a"] + "='" + val["v"] + "';");
			}
		});
		b.forEach((val) => {
			let elm = this.elem;
			val[3].forEach((value) => {
				elm = elm.children[value];
			});
			elm.addEventListener(val[0],(event) => {
				event.preventDefault();
				event.stopPropagation();
				Android.trigger(JSON.stringify({'alloy':val[1],args:val[2]}));
			});
		});
		s.forEach((val) => {
			let elm = this.elem;
			val[1].forEach((value) => {
				elm = elm.children[value];
			});
			Object.assign(elm.style,val[0]);
		});
		this.elem.style.fontFamily = fontFamily;
		this.div = document.createElement("div");
		this.div.style.flexGrow = "1";
		if(leftIcon != ""){
			this.div.innerHTML = "<i style='font-size:" + iconSize + ";color:" + leftIconColor + ";'>" + leftIcon + "</i>";
			if(onClick){
				this.div.children[0].addEventListener("click",() => {
					Android.trigger(JSON.stringify({alloy:onClick,args:["left"]}));
				});
			}
		}
		if(!textbox){
			this.div.innerHTML += ("<strong style='color:" + fontColor +"'>" + title + "</strong>");
		}
		else{
			this.txt = document.createElement("div");
			this.txt.setAttribute("class","txt");
			this.txt.innerHTML = "<input placeholder=" + textbox["value"] + ">";
			if(textbox["icons"]){
				textbox["icons"].forEach((val,index) => {
					this.txt.innerHTML += "<i style='font-size:" + iconSize + ";color:" + val["color"] + "'>" + val["icon"] + "</i>";
					if(onClick){
						this.txt.children[index + 1].addEventListener("click",() => {
							Android.trigger(JSON.stringify({alloy:onClick,args:["t" + index]}));
						});
					}
				});
			}
			this.div.appendChild(this.txt);
		}
		this.elem.appendChild(this.div);
		this.elem.setValue = function(val){

		}
		this.elem.getValue = function(){

		}
		this.div = document.createElement("div");
		this.div.style = "column-gap: 15px;";
		addon.forEach((val,index) => {
			if(val["icon"]){
				let img = document.createElement("i");
				img.innerHTML = val["icon"];
				img.style.color = val["color"];
				img.style.fontSize = iconSize;
				if(val["body"]){
					img.addEventListener("click",() => { val["body"](); });
				}
				this.div.appendChild(img);
			}
			else if(val["image"]){
				let div = document.createElement("div");
				div.setAttribute("class","image");
				div.style.backgroundImage = "url(" + val["image"] + ")";
				if(val["body"]){
					img.addEventListener("click",() => { val["body"](); });
				}
				this.div.appendChild(div);
			}
			if(onClick){
				this.div.children[this.div.children.length - 1].addEventListener("click",() => {
					Android.trigger(JSON.stringify({alloy:onClick,args:["r" + index]}));
				});
			}
		});
		Object.assign(this.elem.style,style);
		this.elem.appendChild(this.div);
	}
	html(){
		return this.elem;
	}
}
class Layout{
	constructor({ width="auto",id="", height="auto",elevation=0, bgColor="", img="", imgStyle="cover", margin=['0px','0px','0px','0px'], inset=['0px','0px','0px','0px'], radius=[""], style={},child=[],shadow=0,shadowColor="#333333",a=[],b=[],s=[]} = {}){
		this.elem = document.createElement("div");
		this.elem.style.width = width;
		this.elem.id = id;
		this.a = a;this.b = b;this.s = s;
		this.elem.style.height = height;
		if(shadow != 0){
			this.elem.style.boxShadow = "0 " + shadow + "px " + (shadow + 1) + "px " + shadowColor;
		}
		this.child = child;
		if(img != ""){
			this.elem.style.backgroundImage = "url(" + img + ")";
			this.elem.style.backgroundPosition = "center";
			this.elem.style.backgroundRepeat = "no-repeat";
			this.elem.style.backgroundSize = "100% 100%";
		}
		else{
			this.elem.style.background = bgColor;
		}
		this.elem.style.margin = margin.join(" ");
		this.elem.style.padding = inset.join(" ");
		this.elem.style.borderRadius = radius.join(" ");
		Object.assign(this.elem.style,style);
	}
	append(val){
		this.elem.appendChild(val);
	}
	removeAll(){
		this.elem.innerHTML = "";
	}
	html(){
		this.child.forEach((val) => {
			let elm;
			eval("elm = new " + val["type"] + "(" + JSON.stringify(val) + ");");
			this.elem.appendChild(elm.html());
		});
		this.a.forEach((val) => {
			let elm = this.elem;
			val["c"].forEach((value) => {
				elm = elm.children[value];
			});
			if("h" in val){
				elm.setAttribute(val["a"],val["v"]);
			}
			else{
				eval("elm." + val["a"] + "='" + val["v"] + "';");
			}
		});
		this.b.forEach((val) => {
			let elm = this.elem;
			val[3].forEach((value) => {
				elm = elm.children[value];
			});
			elm.addEventListener(val[0],(event) => {
				event.preventDefault();
				event.stopPropagation();
				Android.trigger(JSON.stringify({'alloy':val[1],args:val[2]}));
			});
		});
		this.s.forEach((val) => {
			let elm = this.elem;
			val[1].forEach((value) => {
				elm = elm.children[value];
			});
			Object.assign(elm.style,val[0]);
		});
		return this.elem;
	}
}
class FlexLayout{
	constructor({ width="auto",child=[],id="", height="auto", direction="row", wrap="nowrap", justify="flex-start", alignContent="flex-start", alignItems="flex-start", bgColor="", img="", imgStyle="cover", margin=['0px','0px','0px','0px'], inset=['0px','0px','0px','0px'], radius=[""], colGap="0px", rowGap="0px", style={},shadow=0,shadowColor="#333333",a=[],b=[],s=[]} = {}){
		this.elem = document.createElement("div");
		this.elem.style.width = width;
		this.elem.id = id;
		this.a = a;this.b = b;this.s = s;
		this.child = child;
		this.elem.style.height = height;
		if(img != ""){
			this.elem.style.backgroundImage = url(img);
			this.elem.style.backgroundPosition = "center";
			this.elem.style.backgroundRepeat = "no-repeat";
		}
		else{
			this.elem.style.background = bgColor;
		}
		if(shadow != 0){
			this.elem.style.boxShadow = "0 " + shadow + "px " + (shadow + 1) + "px " + shadowColor;
		}
		this.elem.style.margin = margin.join(" ");
		this.elem.style.padding = inset.join(" ");
		this.elem.style.borderRadius = radius.join(" ");
		this.elem.style.display = "flex";
		this.elem.style.flexWrap = wrap;
		this.elem.style.flexDirection = direction;
		this.elem.style.justifyContent = justify;
		this.elem.style.alignItems = alignItems;
		this.elem.style.alignContent = alignContent;
		this.elem.style.columnGap = colGap;
		this.elem.style.rowGap = rowGap;
		Object.assign(this.elem.style,style);
	}
	append(val){
		this.elem.appendChild(val);
	}
	removeAll(){
		this.elem.innerHTML = "";
	}
	html(){
		this.child.forEach((val) => {
			let elm;
			eval("elm = new " + val["type"] + "(" + JSON.stringify(val) + ");");
			this.elem.appendChild(elm.html());
		});
		this.a.forEach((val) => {
			let elm = this.elem;
			val["c"].forEach((value) => {
				elm = elm.children[value];
			});
			if("h" in val){
				elm.setAttribute(val["a"],val["v"]);
			}
			else{
				eval("elm." + val["a"] + "='" + val["v"] + "';");
			}
		});
		this.b.forEach((val) => {
			let elm = this.elem;
			val[3].forEach((value) => {
				elm = elm.children[value];
			});
			elm.addEventListener(val[0],(event) => {
				event.preventDefault();
				event.stopPropagation();
				Android.trigger(JSON.stringify({'alloy':val[1],args:val[2]}));
			});
		});
		this.s.forEach((val) => {
			let elm = this.elem;
			val[1].forEach((value) => {
				elm = elm.children[value];
			});
			Object.assign(elm.style,val[0]);
		});
		return this.elem;
	}
}
class TextView{
	constructor({text="",id="",icon="",iconColor="",mode="p",fontColor="black",weight="normal",bgColor="transparent",display="block",fontFamily="manrope",margin=["0px","0px","0px","0px"],letterSpacing="auto", fontSize="17px", wordSpacing="auto",style={},onClick=0,iconSize="18px",a=[],b=[],s=[]} = {}){
		this.elem = document.createElement(mode);
		this.elem.innerHTML = text;
		this.elem.id = id;
		a.forEach((val) => {
			let elm = this.elem;
			val["c"].forEach((value) => {
				elm = elm.children[value];
			});
			if("h" in val){
				elm.setAttribute(val["a"],val["v"]);
			}
			else{
				eval("elm." + val["a"] + "='" + val["v"] + "';");
			}
		});
		b.forEach((val) => {
			let elm = this.elem;
			val[3].forEach((value) => {
				elm = elm.children[value];
			});
			elm.addEventListener(val[0],(event) => {
				event.preventDefault();
				event.stopPropagation();
				Android.trigger(JSON.stringify({'alloy':val[1],args:val[2]}));
			});
		});
		s.forEach((val) => {
			let elm = this.elem;
			val[1].forEach((value) => {
				elm = elm.children[value];
			});
			Object.assign(elm.style,val[0]);
		});
		this.elem.style.color = fontColor;
		this.elem.style.background = bgColor;
		this.elem.style.display = display;
		this.elem.style.fontSize = fontSize;
		this.elem.style.fontWeight = weight;
		this.elem.style.fontFamily = fontFamily;
		this.elem.style.margin = margin.join(" ");
		this.elem.style.letterSpacing = letterSpacing;
		this.elem.style.wordSpacing = wordSpacing;
		if(onClick){
			this.elem.addEventListener("click",() => {
				Android.trigger(JSON.stringify({alloy:onClick,args:[]}));
			});
		}
		if(icon){
			let i = document.createElement("i")
			i.innerHTML = icon;
			i.style.fontSize = iconSize;
			if(iconColor != ""){
				i.style.color = iconColor;
			}
			else{
				i.style.color = fontColor;
			}
			this.elem.innerHTML = i.outerHTML + this.elem.innerHTML;
			this.elem.style.display = "flex";
			this.elem.style.columnGap = "10px";
			this.elem.style.alignItems = "center";
		}
		Object.assign(this.elem.style,style);
	}
	html(){
		return this.elem;
	}
}
class SnackBar{
	constructor({text="",id="", bgColor="#1a1a1a",onClick=0,autoCancel=true,duration=7000, fontColor="#cccccc", actionText="",actionColor="cyan", style={},icon="",iconSize="",iconColor="",a=[],b=[],s=[]} = {}){
		this.elem = document.createElement("div");
		this.elem.id = id;
		a.forEach((val) => {
			let elm = this.elem;
			val["c"].forEach((value) => {
				elm = elm.children[value];
			});
			if("h" in val){
				elm.setAttribute(val["a"],val["v"]);
			}
			else{
				eval("elm." + val["a"] + "='" + val["v"] + "';");
			}
		});
		b.forEach((val) => {
			let elm = this.elem;
			val[3].forEach((value) => {
				elm = elm.children[value];
			});
			elm.addEventListener(val[0],(event) => {
				event.preventDefault();
				event.stopPropagation();
				Android.trigger(JSON.stringify({'alloy':val[1],args:val[2]}));
			});
		});
		s.forEach((val) => {
			let elm = this.elem;
			val[1].forEach((value) => {
				elm = elm.children[value];
			});
			Object.assign(elm.style,val[0]);
		});
		this.elem.setAttribute("class","snackbar");
		this.elem.style.setProperty("--bg", bgColor);
		this.elem.style.setProperty("--color", fontColor);
		this.elem.style.setProperty("--btn-color", actionColor);
		this.elem.innerHTML = "<p>" + text + "</p><button>" + actionText.toUpperCase() + "</button>";
		if(onClick){
			this.elem.children[1].addEventListener("click",() => {
				Android.trigger(JSON.stringify({alloy:onClick,args:[]}));
			});
		}
		this.timeout = undefined;
		if(autoCancel){
			document.addEventListener("click",(event) => {
				if(!this.elem.contains(event.target) && this.elem.getAttribute("show") == "true") {
					this.elem.close();
				}
			});
		}
		this.elem.hide = function(){
			this.animate([{
				bottom:"10px",opacity:1
			},{
				bottom:"-50px",opacity:0
			}],{
				duration:250,
				easing:"ease-out",
				fill:"both"
			});
			this.timeout = setTimeout(() => { this.style.display = "none";this.setAttribute("show","false"); },250);
		}
		this.elem.show = function(){
			clearTimeout(this.timeout);
			this.setAttribute("show","true");
			this.style.display = "flex";
			this.animate([{
				bottom:"-50px",opacity:0
			},{
				bottom:"10px",opacity:1
			}],{
				duration:250,
				easing:"ease-out",
				fill:"both"
			});
			if(duration != -1){
				this.timeout = setTimeout(() => { this.hide(); },duration);
			}
		}
		Object.assign(this.elem.style,style);
	}
	html(){
		return this.elem;
	}
}
class Dialog{
	constructor({title="",titleColor="black",child=[],onClick=0,autoClose=true, body=document.createElement("div"),btnColor="#6d5894",width="70vw",height="auto", text="",textColor="black", id="", positiveText="", negativeText="", bgColor="white", style={},dimColor="transparent",fontFamily="manrope",a=[],b=[],s=[]} = {}){
		this.elem = document.createElement("div");
		this.elem.setAttribute("class","dialog");
		this.elem.style.fontFamily = fontFamily;
		this.elem.id = id;
		a.forEach((val) => {
			let elm = this.elem;
			val["c"].forEach((value) => {
				elm = elm.children[value];
			});
			if("h" in val){
				elm.setAttribute(val["a"],val["v"]);
			}
			else{
				eval("elm." + val["a"] + "='" + val["v"] + "';");
			}
		});
		b.forEach((val) => {
			let elm = this.elem;
			val[3].forEach((value) => {
				elm = elm.children[value];
			});
			elm.addEventListener(val[0],(event) => {
				event.preventDefault();
				event.stopPropagation();
				Android.trigger(JSON.stringify({'alloy':val[1],args:val[2]}));
			});
		});
		s.forEach((val) => {
			let elm = this.elem;
			val[1].forEach((value) => {
				elm = elm.children[value];
			});
			Object.assign(elm.style,val[0]);
		});
		this.child = child;
		this.elem.style.background = bgColor;
		let b1 = document.createElement("b");
		b1.style.color = titleColor;
		b1.innerHTML = title;
		this.elem.appendChild(b1);
		b1 = document.createElement("p");
		b1.style.color = textColor;
		b1.innerHTML = text;
		this.elem.appendChild(b1);
		this.elem.style.width = width;
		this.elem.style.left = "calc((100vw - " + width + ")/2)";
		this.elem.style.height = height;
		if(title.trim() == ""){
			this.elem.children[0].style.display = "none";
		}
		if(text == ""){
			this.elem.children[1].style.display = "none";
		}
		this.elem.appendChild(body);
		this.grp = document.createElement("div");
		this.grp.setAttribute("class","grp");
		Object.assign(this.elem.style,style);
		if(positiveText != ""){
			this.grp.innerHTML += "<button style='color:"  + btnColor + "'>" + positiveText + "</button>";
		}
		if(negativeText != ""){
			this.grp.innerHTML += "<button style='color:"  + btnColor + "'>" + negativeText + "</button>";
			if(onClick){
				this.grp.children[this.grp.childElementCount - 1].addEventListener("click",() => {
					Android.trigger(JSON.stringify({alloy:onClick,args:[negativeText]}));
				});
			}
		}
		if(positiveText != ""){
			if(onClick){
				this.grp.children[0].addEventListener("click",() => {
					Android.trigger(JSON.stringify({alloy:onClick,args:[positiveText]}));
				});
			}
		}
		if(this.grp.innerHTML != ""){
			this.grp.style.marginTop = "20px";
		}
		this.elem.appendChild(this.grp);
		if(autoClose){
			document.addEventListener("click",(event) => {
				if(!this.elem.contains(event.target) && this.elem.getAttribute("show") == "true") {
					this.elem.dismiss();
				}
			});
		}
		this.elem.show = function(){
			this.style.zIndex = "5";
			this.style.animation = "dialog .25s ease-out both";
			document.querySelector(".screen").animate([{
				opacity:0
			},{
				opacity:.7
			}],{
				duration:250,
				easing:"linear",
				fill:"both"
			});
			setTimeout(() => {
				this.setAttribute("show","true");
			},250);
		}
		this.elem.dismiss = function(){
			this.style.animation = "dialog_rev .25s ease-out both";
			document.querySelector(".screen").animate([{
				opacity:.7
			},{
				opacity:0
			}],{
				duration:250,
				easing:"linear",
				fill:"both"
			});
			setTimeout(() => {
				this.setAttribute("show","false");
				this.style.zIndex = "-1";
			},250);
		}
		this.elem.append = function(elem){
			this.insertBefore(elem,this.children[2]);
		}
		/*if($(".dialog") == null){
			document.body.appendChild(this.elem);
			document.querySelector(".container").addEventListener("click",() => {
				this.dismiss();
			});
		}*/
	}
	html(){
		this.child.forEach((val) => {
			let elm;
			eval("elm = new " + val["type"] + "(" + JSON.stringify(val) + ");");
			this.elem.insertBefore(elm.html(),this.elem.children[2]);
		});
		return this.elem;
	}
}
class Check{
	constructor({id="", onClick=0, activeColor="#00ffff",inactiveColor="black", style={}, margin=['0px','0px','0px','0px'],shadow=0,shadowColor="#333333",shadowPos="",iconColor="black",radius=["3.5px"],a=[],b=[],s=[]} = {}){
		this.elem = document.createElement("div");
		this.elem.setAttribute("class","check");
		this.elem.id = id;
		a.forEach((val) => {
			let elm = this.elem;
			val["c"].forEach((value) => {
				elm = elm.children[value];
			});
			if("h" in val){
				elm.setAttribute(val["a"],val["v"]);
			}
			else{
				eval("elm." + val["a"] + "='" + val["v"] + "';");
			}
		});
		b.forEach((val) => {
			let elm = this.elem;
			val[3].forEach((value) => {
				elm = elm.children[value];
			});
			elm.addEventListener(val[0],(event) => {
				event.preventDefault();
				event.stopPropagation();
				Android.trigger(JSON.stringify({'alloy':val[1],args:val[2]}));
			});
		});
		s.forEach((val) => {
			let elm = this.elem;
			val[1].forEach((value) => {
				elm = elm.children[value];
			});
			Object.assign(elm.style,val[0]);
		});
		this.elem.style.setProperty("--bg","transparent");
		this.elem.innerHTML = "<i style='color:transparent'>check</i>";
		if(shadow > 0){
			this.elem.style.boxShadow = "0 " + shadow + "px " + (shadow + 1) + "px " + shadowColor;
		}
		this.elem.style.margin = margin.join(" ");
		this.elem.style.borderRadius = radius.join(" ");
		this.elem.style.borderColor = inactiveColor;
		this.elem.setAttribute("click","false");
		this.elem.addEventListener("click",(e) => {
			e.stopPropagation();
			if(this.elem.getAttribute("click") == "false"){
				if(onClick){
					Android.trigger(JSON.stringify({alloy:onClick,args:[1]}));
				}
				this.elem.setAttribute("click","true");
				this.elem.style.setProperty("--bg",activeColor);
				this.elem.style.setProperty("--anim","check 0.25s ease-out both");
				this.elem.style.setProperty("--ch-bg",activeColor);
				this.elem.animate([{
					backgroundColor:"transparent",borderColor:inactiveColor,transform:"scale(1)"
				},{
					backgroundColor:activeColor,borderColor:activeColor,transform:"scale(.7)"
				},{
					backgroundColor:activeColor,borderColor:activeColor,color:"rgba(255,255,255,1)",transform:"scale(1)"
				}],{
					duration:50,
					fill:"both"
				});
				this.elem.children[0].animate([{
					color:"transparent"
				},{
					color:iconColor
				}],{
					duration:50,
					fill:"both"
				});
			}
			else{
				if(onClick){
					Android.trigger(JSON.stringify({alloy:onClick,args:[0]}));
				}
				this.elem.setAttribute("click","false");
				this.elem.style.setProperty("--anim","none");
				this.elem.style.setProperty("--bg","transparent");
				this.elem.style.setProperty("--ch-bg","transparent");
				this.elem.animate([{
					background:activeColor,borderColor:activeColor,transform:"scale(1)",color:"rgba(255,255,255,1)"
				},{
					background:activeColor,borderColor:activeColor,transform:"scale(.7)",color:"rgba(255,255,255,0.5)"
				},{
					background:"transparent",borderColor:inactiveColor,transform:"scale(1)",color:"transparent"
				}],{
					duration:100,
					fill:"both"
				});
				this.elem.children[0].animate([{
					color:iconColor
				},{
					color:"transparent"
				}],{
					duration:100,
					fill:"both"
				});
			}
		});
		Object.assign(this.elem.style,style);
	}
	html(){
		return this.elem;
	}
}
class Radio{
	constructor({id="", onClick=0, activeColor="#6600cc",inactiveColor="black", style={}, margin=['0px','0px','0px','0px'],group="",a=[],b=[],s=[]} = {}){
		this.elem = document.createElement("div");
		this.elem.setAttribute("class","radio");
		this.elem.id = id;
		a.forEach((val) => {
			let elm = this.elem;
			val["c"].forEach((value) => {
				elm = elm.children[value];
			});
			if("h" in val){
				elm.setAttribute(val["a"],val["v"]);
			}
			else{
				eval("elm." + val["a"] + "='" + val["v"] + "';");
			}
		});
		b.forEach((val) => {
			let elm = this.elem;
			val[3].forEach((value) => {
				elm = elm.children[value];
			});
			elm.addEventListener(val[0],(event) => {
				event.preventDefault();
				event.stopPropagation();
				Android.trigger(JSON.stringify({'alloy':val[1],args:val[2]}));
			});
		});
		s.forEach((val) => {
			let elm = this.elem;
			val[1].forEach((value) => {
				elm = elm.children[value];
			});
			Object.assign(elm.style,val[0]);
		});
		this.elem.style.margin = margin.join(" ");
		this.elem.innerHTML = "<div></div>";
		this.elem.setAttribute("grp",group);
		this.elem.style.borderColor = inactiveColor;
		this.elem.setAttribute("click","false");
		this.elem.addEventListener("click",() => {
			if(this.elem.getAttribute("click") == "false"){
				let rd = document.querySelectorAll(".radio");
				rd.forEach((elem) => {
					if(elem != this.elem && elem.getAttribute("grp") == group){
						if(elem.getAttribute("click") == "true"){
							elem.click();
						}
					}
				});
				if(onClick){
					Android.trigger(JSON.stringify({alloy:onClick,args:[1]}));
				}
				this.elem.setAttribute("click","true");
				this.elem.style.setProperty("--bg",activeColor);
				this.elem.style.setProperty("--anim","check .3s ease-out both");
				this.elem.animate([{
					borderColor:inactiveColor,transform:"scale(1)"
				},{
					borderColor:activeColor,transform:"scale(0.8)"
				},{
					borderColor:activeColor,color:"rgba(255,255,255,1)",transform:"scale(1)"
				}],{
					duration:150,
					fill:"both"
				});
				this.elem.children[0].animate([{
					backgroundColor:"transparent"
				},{
					backgroundColor:activeColor
				},{
					backgroundColor:activeColor
				}],{
					duration:150,
					fill:"both"
				});
			}
			else{
				if(onClick){
					Android.trigger(JSON.stringify({alloy:onClick,args:[0]}));
				}
				this.elem.setAttribute("click","false");
				this.elem.style.setProperty("--bg","transparent");
				this.elem.style.setProperty("--anim","none");
				this.elem.animate([{
					background:activeColor,borderColor:activeColor,transform:"scale(1)",color:"rgba(255,255,255,1)"
				},{
					background:activeColor,borderColor:activeColor,transform:"scale(0.8)",color:"rgba(255,255,255,0.5)"
				},{
					background:"transparent",borderColor:inactiveColor,transform:"scale(1)",color:"transparent"
				}],{
					duration:150,
					fill:"both"
				});
				this.elem.children[0].animate([{
					backgroundColor:activeColor
				},{
					backgroundColor:activeColor
				},{
					backgroundColor:"transparent"
				}],{
					duration:150,
					fill:"both"
				});
			}
		});
		Object.assign(this.elem.style,style);
	}
	html(){
		return this.elem;
	}
}
class InputOutline{
	constructor({text="",id="",icon="eye", activeColor="#6600cc",inactiveColor="#333333",bgColor="transparent", width="200px",textColor="black",margin=['0px','0px','0px','0px'], inset=['auto','auto','auto','auto'], style={}, hintBg="white",hintColor="#333333",hint="Label",mode="",a=[],b=[],s=[]} = {}){
		this.elem = document.createElement("div");
		if(text != ""){
			this.elem.style.setProperty("--min","38px");
			this.elem.style.setProperty("--font","11px");
		}
		this.elem.setAttribute("class","input2");
		this.elem.innerHTML = "<input spellcheck=false>";
		this.elem.style.width = width;
		this.elem.id = id;
		a.forEach((val) => {
			let elm = this.elem;
			val["c"].forEach((value) => {
				elm = elm.children[value];
			});
			if("h" in val){
				elm.setAttribute(val["a"],val["v"]);
			}
			else{
				eval("elm." + val["a"] + "='" + val["v"] + "';");
			}
		});
		b.forEach((val) => {
			let elm = this.elem;
			val[3].forEach((value) => {
				elm = elm.children[value];
			});
			elm.addEventListener(val[0],(event) => {
				event.preventDefault();
				event.stopPropagation();
				Android.trigger(JSON.stringify({'alloy':val[1],args:val[2]}));
			});
		});
		s.forEach((val) => {
			let elm = this.elem;
			val[1].forEach((value) => {
				elm = elm.children[value];
			});
			Object.assign(elm.style,val[0]);
		});
		this.elem.style.background = bgColor;
		this.elem.children[0].style.caretColor = activeColor;
		this.elem.children[0].style.color = textColor;
		this.elem.children[0].type = mode;
		this.elem.children[0].value = text;
		this.elem.style.margin = margin.join(" ");
		this.elem.style.padding = inset.join(" ");
		this.elem.style.border = "2px solid " + inactiveColor;
		this.elem.style.setProperty("--active",activeColor);
		this.elem.style.setProperty("--inactive",inactiveColor);
		this.elem.style.setProperty("--hint-back",hintBg);
		this.elem.style.setProperty("--hint-color",hintColor);
		this.elem.style.setProperty("--hint-text",'"' + hint + '"');
		if(icon){
			this.ricon = document.createElement("i");
			this.ricon.innerHTML = icon;
			this.ricon.style.color = inactiveColor;
			this.ricon.style.fontSize = "16px";
			this.ricon.style.marginLeft = "10px";
			this.elem.children[0].style.width = "90%";
			this.elem.appendChild(this.ricon);
		}
		this.activeColor = activeColor;
		this.inactiveColor = inactiveColor;
		this.color = textColor;
		this.type = mode;
		this.click = false;
		this.error = false;
		Object.assign(this.elem.style,style);
		this.elem.addEventListener("keydown",(event) => {
			if(event.key == "Enter"){
				//this.checkValue();
			}
		});
		this.elem.addEventListener("click",(event) => {
			if(this.click){
				return;
			}
			this.click = true;
			this.elem.children[0].focus();
			if(this.error) return;
			this.elem.style.setProperty("--anim","input2 .15s ease-out both");
			if(this.ricon){
				this.ricon.style.color = activeColor;
			}
			this.elem.animate([{
				borderColor:"var(--inactive)"
			},{
				borderColor:"var(--active)"
			}],{
				duration:150,
				fill:"both"
			});
		});
		this.elem.setIcon = function(val){
			if(rightIcon){
				this.children[1].setAttribute("class",val);
			}
		}
		document.addEventListener("click",(event) => {
			if(this.error) return;
			if(!this.elem.contains(event.target) && this.click && event.target !== this.elem){
				this.click = false;
				if(this.elem.children[0].value != ""){
					this.elem.style.setProperty("--min","37px");
					this.elem.style.setProperty("--font","11px");
				}
				else{
					this.elem.style.setProperty("--min","15px");
					this.elem.style.setProperty("--font","15px");
				}
				if(this.ricon){
					this.ricon.style.color = inactiveColor;
				}
				this.elem.style.setProperty("--anim","input_rev2 .15s ease-out both");
				this.elem.animate([{
					borderColor:"var(--active)"
				},{
					borderColor:"var(--inactive)"
				}],{
					duration:150,
					fill:"both"
				});
			}
		});
	}
	checkValue(){
		switch(this.type){
			case "mail":
				if(this.getValue().indexOf("@") == -1){
					this.error = true;
					this.elem.style.borderColor = "red";
					this.elem.style.setProperty("--inactive","red");
					this.elem.children[0].style.color = "red";
					this.elem.children[0].style.caretColor = "red";
					this.elem.style.setProperty("--min","38px");
					this.elem.style.setProperty("--font","11px");
					this.elem.style.setProperty("--anim","input_rev2 .15s ease-out both");
					this.elem.animate([{
						borderColor:"var(--active)"
					},{
						borderColor:"var(--inactive)"
					}],{
						duration:150,
						fill:"both"
					});
				}
				else{ 
					this.error = false;
					this.elem.style.borderColor = this.activeColor;
					this.elem.style.setProperty("--inactive",this.inactiveColor);
					this.elem.children[0].style.color = this.color;
					this.elem.children[0].style.caretColor = this.activeColor;
					this.elem.style.setProperty("--anim","input_rev2 .15s ease-out both");
					this.elem.animate([{
						borderColor:"var(--active)"
					},{
						borderColor:"var(--inactive)"
					}],{
						duration:150,
						fill:"both"
					});
				}
		}
	}
	getValue(){
		return this.elem.children[0].value;
	}
	html(){
		return this.elem;
	}
}
class Input{
	constructor({text="",icon="",hint="Label",id="",hintColor="#333333", activeColor="#6600cc",inactiveColor="#333333",bgColor="transparent", width="200px",textColor="black",margin=['0px','0px','0px','0px'], inset=['auto','auto','auto','auto'], style={},mode="",fontFamily="manrope",a=[],b=[],s=[]} = {}){
		this.elem = document.createElement("div");
		this.elem.setAttribute("class","input");
		this.elem.innerHTML = "<input spellcheck=false>";
		this.elem.style.width = width;
		this.elem.id = id;
		a.forEach((val) => {
			let elm = this.elem;
			val["c"].forEach((value) => {
				elm = elm.children[value];
			});
			if("h" in val){
				elm.setAttribute(val["a"],val["v"]);
			}
			else{
				eval("elm." + val["a"] + "='" + val["v"] + "';");
			}
		});
		b.forEach((val) => {
			let elm = this.elem;
			val[3].forEach((value) => {
				elm = elm.children[value];
			});
			elm.addEventListener(val[0],(event) => {
				event.preventDefault();
				event.stopPropagation();
				Android.trigger(JSON.stringify({'alloy':val[1],args:val[2]}));
			});
		});
		s.forEach((val) => {
			let elm = this.elem;
			val[1].forEach((value) => {
				elm = elm.children[value];
			});
			Object.assign(elm.style,val[0]);
		});
		this.elem.style.background = bgColor;
		this.elem.children[0].style.caretColor = activeColor;
		this.elem.children[0].style.color = textColor;
		this.elem.children[0].style.fontFamily = fontFamily;
		this.elem.children[0].type = mode;
		this.elem.children[0].value = text;
		this.elem.style.margin = margin.join(" ");
		this.elem.style.padding = inset.join(" ");
		this.elem.style.borderBottom = "2px solid " + inactiveColor;
		this.elem.style.setProperty("--active",activeColor);
		this.elem.style.setProperty("--hint",'"' + hint + '"');
		this.elem.style.setProperty("--hint-color",hintColor);
		this.elem.style.setProperty("--inactive",inactiveColor);
		if(icon){
			this.ricon = document.createElement("i");
			this.ricon.innerHTML = icon;
			this.ricon.style.color = inactiveColor;
			this.ricon.style.marginLeft = "10px";
			this.ricon.style.fontSize = "16px";
			this.elem.children[0].style.width = "90%";
			this.elem.appendChild(this.ricon);
		}
		this.activeColor = activeColor;
		this.inactiveColor = inactiveColor;
		this.color = textColor;
		this.type = mode;
		this.click = false;
		this.error = false;
		if(text != ""){
			this.elem.style.setProperty("--min","15%");
			this.elem.style.setProperty("--font","11px");
		}
		Object.assign(this.elem.style,style);
		this.elem.addEventListener("keydown",(event) => {
			if(event.key == "Enter"){
				//this.checkValue();
			}
		});
		this.elem.setIcon = function(val){
			if(icon){
				this.children[1].setAttribute("class",val);
			}
		}
		this.elem.addEventListener("click",() => {
			if(this.click){
				return;
			}
			this.click = true;
			this.elem.children[0].focus();
			if(this.error) return;
			this.elem.style.setProperty("--anim","input .15s ease-out both");
			if(this.ricon){
				this.ricon.style.color = activeColor;
			}
			this.elem.animate([{
				borderColor:"var(--inactive)"
			},{
				borderColor:"var(--active)"
			}],{
				duration:150,
				fill:"both"
			});
			document.addEventListener("click",(event) => {
				if(this.error) return;
				if(event.target != this.elem && this.click && event.target != this.elem.children[0]){
					this.click = false;
					if(this.elem.children[0].value != ""){
						this.elem.style.setProperty("--min","32px");
						this.elem.style.setProperty("--font","11px");
					}
					else{
						this.elem.style.setProperty("--min","15%");
						this.elem.style.setProperty("--font","15px");
					}
					this.elem.style.setProperty("--anim","input_rev .15s ease-out both");
					if(this.ricon){
						this.ricon.style.color = inactiveColor;
					}
					this.elem.animate([{
						borderColor:"var(--active)"
					},{
						borderColor:"var(--inactive)"
					}],{
						duration:150,
						fill:"both"
					});
				}
			});
		});
	}
	checkValue(){
		switch(this.type){
			case "mail":
				if(this.getValue().indexOf("@") == -1){
					this.error = true;
					this.elem.style.borderColor = "red";
					this.elem.style.setProperty("--inactive","red");
					this.elem.children[0].style.color = "red";
					this.elem.children[0].style.caretColor = "red";
					this.elem.style.setProperty("--min","32px");
					this.elem.style.setProperty("--font","11px");
					this.elem.style.setProperty("--anim","input_rev .15s ease-out both");
					this.elem.animate([{
						borderColor:"var(--active)"
					},{
						borderColor:"var(--inactive)"
					}],{
						duration:150,
						fill:"both"
					});
				}
				else{ 
					this.error = false;
					this.elem.style.borderColor = this.activeColor;
					this.elem.style.setProperty("--inactive",this.inactiveColor);
					this.elem.children[0].style.color = this.color;
					this.elem.children[0].style.caretColor = this.activeColor;
					this.elem.style.setProperty("--anim","input_rev .15s ease-out both");
					this.elem.animate([{
						borderColor:"var(--active)"
					},{
						borderColor:"var(--inactive)"
					}],{
						duration:150,
						fill:"both"
					});
				}
		}
	}
	getValue(){
		return this.elem.children[0].value;
	}
	html(){
		return this.elem;
	}
}
class Chips{
	constructor({id="",onClick=0,bgColor="transparent",borderColorNormal="",borderColorActive="",fontColorNormal="",bgColorNormal="transparent",select=[],icon="fa-solid fa-check",iconColor="",iconSize="16px",width="auto",height="auto",shadow=0,shadowColor="#333333",fontColorActive="black",bgColorActive="#00FFFF",margin=['0px','0px','0px','0px'],style={},items=[],radius=["10px"],wrap=false,fontFamily="manrope",fontSize="4vw",a=[],b=[],s=[]} = {}){
		this.elem = document.createElement("div");
		this.elem.setAttribute("class","chips");
		this.elem.setAttribute("click","[]");
		this.elem.style.margin = margin.join(" ");
		this.elem.style.width = width;
		this.elem.id = id;
		a.forEach((val) => {
			let elm = this.elem;
			val["c"].forEach((value) => {
				elm = elm.children[value];
			});
			if("h" in val){
				elm.setAttribute(val["a"],val["v"]);
			}
			else{
				eval("elm." + val["a"] + "='" + val["v"] + "';");
			}
		});
		b.forEach((val) => {
			let elm = this.elem;
			val[3].forEach((value) => {
				elm = elm.children[value];
			});
			elm.addEventListener(val[0],(event) => {
				event.preventDefault();
				event.stopPropagation();
				Android.trigger(JSON.stringify({'alloy':val[1],args:val[2]}));
			});
		});
		s.forEach((val) => {
			let elm = this.elem;
			val[1].forEach((value) => {
				elm = elm.children[value];
			});
			Object.assign(elm.style,val[0]);
		});
		this.elem.style.background = bgColor;
		let hex = bgColorActive.replace(/^#/, '');
    	let clr = [parseInt(hex.substring(0, 2), 16),parseInt(hex.substring(2, 4), 16),parseInt(hex.substring(4, 6), 16)];
		clr = clr.map(num => (num + 255)/2);
		if(fontColorNormal == ""){
			fontColorNormal = "rgb(" + clr.join(",") + ")";
		}
		if(borderColorNormal == ""){
			borderColorNormal = "rgb(" + clr.join(",") + ")";
		}
		if(borderColorActive == ""){
			borderColorActive = bgColorActive;
		}
		if(iconColor == ""){
			iconColor = fontColorActive;
		}
		this.elem.mark = function(index){
			this.elem.children[index].click();
		}
		items.forEach((val,index) => {
			let button = document.createElement("div");
			button.style.background = bgColorNormal;
			button.style.color = fontColorNormal;
			button.style.fontFamily = fontFamily;
			button.style.fontSize  = fontSize;
			button.style.borderRadius = radius.join(" ");
			button.style.height = height;
			if(!wrap){
				this.elem.style.flexWrap = "wrap";
			}
			button.style.borderColor = borderColorNormal;
			button.setAttribute("click","false");
			if(shadow != 0){
				button.style.boxShadow = "0 " + shadow + "px " + (shadow + 1) + "px " + shadowColor;
			}
			let i = document.createElement("i");
			i.innerHTML = "check";
			i.style.fontSize = iconSize;
			i.style.maxWidth = "0px";
			i.style.marginRight = "0px";
			i.style.opacity = 0;
			if(select.indexOf(index) != -1){
				button.style.background = bgColorActive;
				button.style.color = fontColorActive;
				button.style.borderColor = bgColorActive;
				button.setAttribute("click","true");
				i.style.maxWidth = "10px";
				i.style.color = iconColor;
				i.style.marginRight = "10px";
				i.style.opacity = "1";
			}
			button.appendChild(i);
			//button.setAttribute("onClick","alert('Hi')");
			button.addEventListener("click",() => {
				let data = JSON.parse(this.elem.getAttribute("click"));
				if(button.getAttribute("click") == "false"){
					if(data.indexOf(val) == -1){
						data.push(val);
					}
					button.animate([{
						background:bgColorNormal,
						color:fontColorNormal,
						borderColor:borderColorNormal
					},{
						background:bgColorActive,
						color:fontColorActive,
						borderColor:borderColorActive
					}],{
						duration:300,
						easing:"ease-out",
						fill:"both"
					});
					button.children[0].animate([{
						maxWidth:"0px",
						marginRight:"0px",
						color:fontColorNormal,
						opacity:0
					},{
						maxWidth:"10px",
						color:iconColor,
						marginRight:"10px",
						opacity:1
					}],{
						duration:300,
						easing:"ease-out",
						fill:"both"
					});
					button.setAttribute("click","true");
				}
				else{
					data = data.filter(item => item !== val);
					button.animate([{
						background:bgColorActive,
						color:fontColorActive,
						borderColor:borderColorActive
					},{
						background:bgColorNormal,
						color:fontColorNormal,
						borderColor:borderColorNormal
					}],{
						duration:300,
						easing:"ease-out",
						fill:"both"
					});
					button.children[0].animate([{
						maxWidth:"10px",
						color:iconColor,
						marginRight:"10px",
						opacity:1
					},{
						maxWidth:"0px",
						color:fontColorNormal,
						marginRight:"0px",
						opacity:0
					}],{
						duration:300,
						easing:"ease-out",
						fill:"both"
					});
					button.setAttribute("click","false");
				}
				this.elem.setAttribute("click",JSON.stringify(data));
				if(onClick){
					Android.trigger(JSON.stringify({alloy:onClick,args:[JSON.stringify(data)]}));
				}
			});
			button.appendChild(document.createTextNode(val));
			this.elem.appendChild(button);
		});
		Object.assign(this.elem.style,style);
	}
	html(){
		return this.elem;
	}
}
class ButtonPanel{
	constructor({ id="",onClick=0,bgColorNormal="transparent",fontColorNormal="#161616",bgColorActive="#e2e0f7",select=0,width="auto",height="auto",radius=["20px"],fontColorActive="#000000",icon="fa-solid fa-check",margin=['0px','0px','0px','0px'],items=[],style={},iconColor="",iconSize="16px",borderColor="#161616",fontFamily="manrope",fontSize="12px",a=[],b=[],s=[] } = {}){
		this.elem = document.createElement("div");
		this.elem.style.width = width;
		this.elem.setAttribute("id",id);
		a.forEach((val) => {
			let elm = this.elem;
			val["c"].forEach((value) => {
				elm = elm.children[value];
			});
			if("h" in val){
				elm.setAttribute(val["a"],val["v"]);
			}
			else{
				eval("elm." + val["a"] + "='" + val["v"] + "';");
			}
		});
		b.forEach((val) => {
			let elm = this.elem;
			val[3].forEach((value) => {
				elm = elm.children[value];
			});
			elm.addEventListener(val[0],(event) => {
				event.preventDefault();
				event.stopPropagation();
				Android.trigger(JSON.stringify({'alloy':val[1],args:val[2]}));
			});
		});
		s.forEach((val) => {
			let elm = this.elem;
			val[1].forEach((value) => {
				elm = elm.children[value];
			});
			Object.assign(elm.style,val[0]);
		});
		let hex = bgColorActive.replace(/^#/, '');
    	let clr = [parseInt(hex.substring(0, 2), 16),parseInt(hex.substring(2, 4), 16),parseInt(hex.substring(4, 6), 16)];
		this.elem.setAttribute("click","");
		clr = clr.map(num => (num + 255)/2);
		if(borderColor == ""){
			this.elem.style.setProperty("--color","rgb(" + clr.join(",") + ")");
		}
		else{
			this.elem.style.setProperty("--color",borderColor);
		}
		this.elem.setAttribute("class","btngrp");
		this.elem.style.margin = margin.join(" ");
		this.elem.style.borderRadius = radius.join(" ");
		this.elem.style.background = bgColorNormal;
		this.click = 0;
		Object.assign(this.elem.style,style);
		if(fontColorNormal == ""){
			fontColorNormal = bgColorActive;
		}
		if(iconColor == ""){
			iconColor = fontColorActive;
		}
		this.elem.setButton = function(index){
			this.elem.children[index].click();
		}
		items.forEach((val,index) => {
			let button = document.createElement("div");
			button.style.color = fontColorNormal;
			//button.style.border = "1px solid " + borderColor;
			button.style.fontFamily = fontFamily;
			button.style.fontSize = fontSize;
			button.style.height = height;
			let i = document.createElement("i");
			i.innerHTML = "check";
			i.style.fontWidth = iconSize;
			i.style.maxWidth = "0px";
			i.style.fontSize = iconSize;
			i.style.color = "transparent";
			i.style.marginRight = "0px";
			i.style.opacity = 0;
			button.appendChild(i);
			if(index == select){
				button.style.background = bgColorActive;
				button.style.color = fontColorActive;
				i.style.color = iconColor;
				i.style.opacity = 1;
				i.style.maxWidth = "16px";
				i.style.marginRight = "5px";
			}
			button.addEventListener("click",() => {
				if(this.click == index){
					return;
				}
				if(this.click != null){
					this.elem.children[this.click].animate([{
						background:bgColorActive,
						color:fontColorActive
					},{
						background:"transparent",
						color:fontColorNormal
					}],{
						duration:300,
						easing:"ease-out",
						fill:"both"
					});
					this.elem.children[this.click].children[0].animate([{
						opacity:1,
						color:"transparent",
						marginRight:"5px"
					},{
						opacity:0,
						marginRight:"0px",
						color:iconColor,
						maxWidth:"0px"
					}],{
						duration:300,
						easing:"ease-out",
						fill:"both"
					});
				}
				this.click = index;
				this.elem.setAttribute("click",val);
				if(onClick){
					Android.trigger(JSON.stringify({alloy:onClick,args:[val]}));
				}
				button.animate([{
					background:"transparent",
					color:fontColorNormal
				},{
					background:bgColorActive,
					color:fontColorActive
				}],{
					duration:300,
					easing:"ease-out",
					fill:"both"
				});
				this.elem.children[this.click].children[0].animate([{
					maxWidth:"0px",
					color:"transparent",
					marginRight:"0px",
					opacity:0
				},{
					maxWidth:"16px",
					color:iconColor,
					marginRight:"5px",
					opacity:1
				}],{
					duration:300,
					easing:"ease-out",
					fill:"both"
				});
			});
			button.innerHTML += val;
			if(index == 0){
				button.style.borderLeft = "0";
			}
			if(index != items.length - 1){
				button.style.borderRight = "2px solid " + borderColor + ")";
			}
			this.elem.appendChild(button);
		});
	}
	html(){
		return this.elem;
	}
}
class Button{
	constructor({text="",id="",onClick=0,onHold=0,rippleColor="#ffffff",bgColor="#3f48cc",fontColor="white",fontFamily="manrope",radius=["5px"],style={}, margin=['0px'], inset=['auto'],icon="",iconColor="",iconSize="25px",width="auto",height="auto",vibrate=1,a=[],b=[],s=[]} = {}){
		this.elem = document.createElement("button");
		this.elem.id = id;
		a.forEach((val) => {
			let elm = this.elem;
			val["c"].forEach((value) => {
				elm = elm.children[value];
			});
			if("h" in val){
				elm.setAttribute(val["a"],val["v"]);
			}
			else{
				eval("elm." + val["a"] + "='" + val["v"] + "';");
			}
		});
		b.forEach((val) => {
			let elm = this.elem;
			val[3].forEach((value) => {
				elm = elm.children[value];
			});
			elm.addEventListener(val[0],(event) => {
				event.preventDefault();
				event.stopPropagation();
				Android.trigger(JSON.stringify({'alloy':val[1],args:val[2]}));
			});
		});
		s.forEach((val) => {
			let elm = this.elem;
			val[1].forEach((value) => {
				elm = elm.children[value];
			});
			Object.assign(elm.style,val[0]);
		});
		this.elem.setAttribute("class","btn");
		this.elem.style.setProperty("--btn-bg", rippleColor);
		this.elem.style.borderRadius = radius.join(" ");
		this.elem.style.setProperty("--radius",radius.join(" "));
		this.elem.style.width = width;
		this.elem.style.height = height;
		this.elem.style.fontFamily = fontFamily;
		this.elem.style.color = fontColor;
		this.elem.style.margin = margin.join(" ");
		this.elem.style.padding = inset.join(" ");
		this.elem.style.background = bgColor;
		if(icon == ""){
			this.elem.innerHTML = text;
		}
		else{
			if(width == "auto" && text == ""){
				this.elem.style.width = "50px";
			}
			if(height == "auto" && text == ""){
				this.elem.style.height = "50px";
			}
			this.icon = document.createElement("i");
			this.icon.style.fontSize = iconSize;
			this.icon.style.color = iconColor;
			this.icon.innerHTML = icon;
			this.elem.appendChild(this.icon);
			let span = document.createElement("span");
			span.innerHTML = text;
			this.elem.appendChild(span);
			this.elem.style.display = "flex";
			this.elem.style.flexFlow = "row nowrap";
			this.elem.style.alignItems = "center";
			this.elem.style.justifyContent = "center";
			this.elem.style.columnGap = "10px";
			if(text == ""){
				this.elem.style.padding = "0px";
				this.elem.style.columnGap = "";
				this.elem.style.aspectRatio = "1/1";
			}
		}
		this.interval = undefined;
		this.elem.addEventListener("touchstart",() => {
			if(onHold){
				this.timeout = setTimeout(() => {
					Android.trigger(JSON.stringify({index:onHold,args:[]}));
				},2000);
			}
		});
		this.elem.addEventListener("touchend",() => {
			if(this.timeout){
				clearTimeout(this.timeout);
			}
		});
		this.elem.addEventListener("touchmove",() => {
			if(this.timeout){
				clearTimeout(this.timeout);
			}
		});
		this.elem.setText = function(text){
			this.elem.innerHTML = text;
		}
		this.elem.addEventListener("click",(event) => {
			this.elem.style.setProperty("--ht",this.elem.offsetWidth * 2 + "px");
			if(vibrate){
				Android.vibrate();
			}
			if(onClick){
				Android.trigger(JSON.stringify({alloy:onClick,args:[]}));
			}
			if(this.interval){
				this.elem.style.setProperty("--btn-trns","");
				clearTimeout(this.interval);
			}
			if(true){
				this.elem.style.setProperty("--btn-lft",(event.offsetX)/this.elem.offsetWidth * 100 + "%");
				this.elem.style.setProperty("--btn-trns","animate 0.5s linear both");
				this.interval = setTimeout(() => {
					this.elem.style.setProperty("--btn-trns","");
				},500);
			}
			else{
				this.elem.style.setProperty("--top","-2px");
				this.elem.style.boxShadow = "0 1px 2px #333333";
				setTimeout(() => {
					this.elem.style.setProperty("--top","-5px");
					this.elem.style.boxShadow = "0 4px 7px #333333";
				},250);
			}
		});
		Object.assign(this.elem.style,style);
	}
	html(){
		return this.elem;
	}

}

