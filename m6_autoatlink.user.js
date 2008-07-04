// ==UserScript==
// @name           autoatlink
// @namespace      http://kindy.googlecode.com/autoatlink
// @description    just
// @include        http://mac.6.cn/topic/view/*
// ==/UserScript==

(function(){

var names={};
function getNextName(name){
if(! (name in names)){names[name]=0;}
names[name]+=1;
return name + '_' + names[name];
}

var allElements, thisElement;
allElements = document.evaluate(
    '//*[@id="main"]//div[@class="r"]',
    document,
    null,
    XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
    null);
try{
  for (var i = 0; i < allElements.snapshotLength; i++) {
      thisElement = allElements.snapshotItem(i);
      
      var name=document.evaluate('strong/a', thisElement, null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null).snapshotItem(0).innerHTML;
      
      var content=document.evaluate('div[last()]', thisElement, null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null).snapshotItem(0);
      
      var linknode=document.createElement('a');
      linknode.name=getNextName(name);
      thisElement.insertBefore(linknode, thisElement.firstChild);
      var changed=0,
          content2=content.innerHTML.replace(/@ {0,2}([^ <]+)/g, function(a,b,c){changed=1;return (b in names) ? ('<span style="color:red;">@</span><a href="#'+b+'_'+names[b]+'">'+b+'</a>') : a;});
      if(changed){content.innerHTML=content2};
  }
}catch(ex){}
})();