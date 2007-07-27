/**
CSSStyleSheet[] document.styleSheets	<all <style><link> >
	readonly CSSRule[] @cssRules	<Non IE>
		String @selectorText
		readonly CSS2Properties @style
			String @cssText
			String in ['background', 'backgroundColor', 'cssFloat', 'fontFamily' ...]
			
			readonly CSSRule parentRule		<Only in element.@style>
		Number @type
			=3 : CSSImportRule
				String @cssText
				String @href
				String[] @media
					String @mediaText
					appendMedium()
					deleteMedium()
				readonly CSSStyleSheet parentStyleSheet
				CSSStyleSheet styleSheet
			=1 : NormalCssRule
				like:#abc{color:#c00;}
	
	readonly CSSRule[] @rules		<IE>
	boolean @disabled
	readonly String @href
	readonly StyleSheet @parentStyleSheet
		I don't know what is this
	readonly String @title
	readonly String @type
	
	void addRule(String selector			<IE>
				 ,String style
				 [,integer index])
	void removeRule(integer index)			<IE>
	
	unsigned long insertRule(String rule			<Non IE>
							,unsigned long index)
	void deleteRule(unsigned long index)			<Non IE>

In the W3C standards, a CSSRule object may represent any kind of CSS rule, including at-rules such as @import and @page directives.
In IE, however, the CSSRule object represents only the actual style rules of the stylesheet.
*/

function getBgImgInCss(){
//javascript:

var d=document,l=location,lbu=l.protocol+'//'+l.host,s=d.styleSheets,i,ci,j,cj,lW,lD,ius=[],iu,cu,bu,r,r1=/^(.+\/)[^\/]*$/,r2=/([a-z]+):(\/{2,3})([^\/:]+)(:\d*)?[^#]*/,r3=/vToRep/,Bl={'len':0};
var g={
	BlUrl:"javascript:(function(_lu){var i,ci,d=document,b=d.body;for(i=0;(ci=_lu[i]);++i){var r=d.createElement('link');r.rel='stylesheet';r.type='text/css';r.href=ci;b.appendChild(r);};})([vToRep]);void(0)",
	
	ss:function(_s){
		var i,ci,crs=_s.cssRules;
		g.sU(_s);
		
		for(i=0;(ci=crs[i]);++i){
			if(ci.type==3){
				try{
					g.ss(ci.styleSheet);
				}catch(e){};
			}else if(ci.type==1){
				g.cr(ci);
			};
		};
	},
	cr:function(_c){
		if(_c.style && (iu=_c.style.backgroundImage) && iu!='none'){
			iu=iu.replace(/^url\(/,'').replace(/\)$/,'');
			if(iu.indexOf('/')==0){
				iu=bu+iu;
			}else if(iu.indexOf('://')<0){
				iu=cu+iu;
			};
			ius.push(iu);
		};
	},
	w:function(_c){
		var k,x,y,z,k2;
		lW=lW||window.open('','linksWin');
		if(lW){
			lD=lW.document;
		}else{
			lD=d;
		};
		for(i=0;(ci=ius[i]);++i){
			lD.write(ci+'<br />')
		};
		lD.write('<br />all: ['+i+']<br /><br />');
		k=0,x=[];
		for(i in Bl){
			if(i!='len'){
				k++;
				ci=Bl[i];
				y=[],z=[];
				y.push('<a href="'+i+'/0/0/0/0/0/0/0.htm" target="_blank">'+i+'</a><br />');
				y.push('<textarea style="width:99%; height:5em;" onfocus="this.select();">');
				for(j in ci){
					z.push('"'+j+'"');
				}
				z=z.join(',');
				k2=g.BlUrl.replace(r3,z);
				y.push(k2);
				y.push('</textarea><br /><hr /><br /><br />');
				
				y=y.join('');
				x.push(y);
			};
		};
		x=x.join('');
		lD.write(x);
		k=x=y=z=k2=null;
		lD.close();
	},
	sU:function(_lu){
		if(_lu.href){
			cu=_lu.href.replace(r1, "$1");
		}else{
			cu=l.href.replace(r1, "$1");
		};
		bu=cu.replace(r2, "$1:$2$3$4");
	}
};
for(i=0;(ci=s[i]);++i){
	g.sU(ci);
	
	if(ci.href && bu!=lbu){
		j=Bl[bu];
		if(!j){
			j=Bl[bu]={};
			Bl['len']++;
		}
		j[ci.href]=true;
	}else{
		try{
			g.ss(ci);
		}catch(e){alert(e);return;};
	};
};
g.w();
//void(0)
}



setTimeout(getBgImgInCss, 300);
/*
Access to restricted URI denied" code: "1012
*/

if(0){

/**
just copy the code and paste in address bar, press Enter.

javascript:var d=document,s=document.createElement('script');s.type="text/javascript"; s.src="http://kindy.googlecode.com/files/get_bg_img_in_css.js";d.body.appendChild(s);void(0)

*/
	
window.onload=function(){
	getBgImgInCss();
};

//把一个站点的css链接都加到页面中去
function(_lu){
	var i,ci,d=document,b=d.body;
	for(i=0;(ci=_lu[i]);++i){
		var r=d.createElement('link');
		r.rel='stylesheet';
		r.type='text/css';
		r.href=ci;
		b.appendChild(r);
	};
}([vToRep]);

};

