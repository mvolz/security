




/*
     FILE ARCHIVED ON 21:19:25 Sep 21, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:26:08 Oct 4, 2014.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
"function"!=typeof DIL&&(DIL=function(c,e){var h=[],f,k;c!==Object(c)&&(c={});var n,p,t,B,K,z,u,G,w,L,M;n=c.partner;p=c.containerNSID;t=c.iframeAttachmentDelay;B=!!c.disableDestinationPublishingIframe;K=c.iframeAkamaiHTTPS;z=c.mappings;u=c.uuidCookie;G=!0===c.enableErrorReporting;w=c.visitorService;L=c.declaredId;M=!0===c.removeFinishedScriptsAndCallbacks;var N,C,O,H;N=!0===c.disableScriptAttachment;C=c.declaredUUIDCookieName;O=!0===c.disableDefaultRequest;H=c.afterResultForDefaultRequest;G&&DIL.errorModule.activate();
(f=e)&&h.push(f+"");if(!n||"string"!=typeof n)return f="DIL partner is invalid or not specified in initConfig",DIL.errorModule.handleError({name:"error",message:f,filename:"dil.js"}),Error(f);f="DIL containerNSID is invalid or not specified in initConfig, setting to default of 0";if(p||"number"==typeof p)p=parseInt(p,10),!isNaN(p)&&0<=p&&(f="");f&&(p=0,h.push(f),f="");k=DIL.getDil(n,p);if(k instanceof DIL&&k.api.getPartner()==n&&k.api.getContainerNSID()==p)return k;if(this instanceof DIL)DIL.registerDil(this,
n,p);else return new DIL(c,"DIL was not instantiated with the 'new' operator, returning a valid instance with partner \x3d "+n+" and containerNSID \x3d "+p);var x={IS_HTTPS:"https:"==document.location.protocol,POST_MESSAGE_ENABLED:!!window.postMessage,COOKIE_MAX_EXPIRATION_DATE:"Tue, 19 Jan 2038 03:14:07 UTC"},I={stuffed:{}},l={},r={firingQueue:[],fired:[],firing:!1,sent:[],errored:[],reservedKeys:{sids:!0,pdata:!0,logdata:!0,callback:!0,postCallbackFn:!0,useImageRequest:!0},callbackPrefix:"demdexRequestCallback",
firstRequestHasFired:!1,useJSONP:!0,abortRequests:!1,num_of_jsonp_responses:0,num_of_jsonp_errors:0,num_of_img_responses:0,num_of_img_errors:0,toRemove:[],removed:[],readyToRemove:!1,adms:{TIME_TO_CATCH_ALL_REQUESTS_RELEASE:2E3,calledBack:!1,uuid:null,noADMS:!1,instanceType:null,releaseType:"no ADMS",admsProcessingStarted:!1,process:function(a){try{if(!this.admsProcessingStarted){var b=this,d,g,q,v;if("function"==typeof a&&("function"==typeof a.getDefault&&"function"==typeof a.getInstance)&&(w===
Object(w)&&(d=w.namespace)&&"string"==typeof d?(this.instanceType="namespace: "+d,g=a.getInstance(d)):(this.instanceType="default",g=a.getDefault()),g===Object(g)&&"function"==typeof g.getVisitorID)){this.admsProcessingStarted=!0;q=function(a){"ADMS"!=b.releaseType&&(b.uuid=a,b.releaseType="ADMS",b.releaseRequests())};v=g.getVisitorID(q);if(-1==v){this.releaseType="failed ADMS";this.releaseRequests();return}if("string"==typeof v&&v.length){q(v);return}setTimeout(function(){"ADMS"!=b.releaseType&&
(b.releaseType="timeout",b.releaseRequests())},this.TIME_TO_CATCH_ALL_REQUESTS_RELEASE);return}this.noADMS=!0;this.releaseRequests()}}catch(c){this.releaseRequests()}},releaseRequests:function(){this.calledBack=!0;r.registerRequest()}},declaredId:{UUID_COOKIE:function(){if("string"==typeof C&&C.length)return C;var a;w===Object(w)&&(a=w.namespace);return"VisitorID"+("string"==typeof a&&a.length?"_"+a:"")}(),uuid:null,declaredId:{init:null,request:null},declaredIdCombos:{},dIdAlwaysOn:!1,dIdInRequest:!1,
setDeclaredId:function(a,b){var d=s.isPopulatedString,g=encodeURIComponent;if(a===Object(a)&&d(b)){var q=a.dpid,v=a.dpuuid,c=null;if(d(q)&&d(v)){c=g(q)+"$"+g(v);if(!0===this.declaredIdCombos[c])return"setDeclaredId: combo exists for type '"+b+"'";this.declaredIdCombos[c]=!0;this.declaredId[b]={dpid:q,dpuuid:v};"init"==b?this.dIdAlwaysOn=!0:"request"==b&&(this.dIdInRequest=!0);return"setDeclaredId: succeeded for type '"+b+"'"}}return"setDeclaredId: failed for type '"+b+"'"},getDeclaredIdQueryString:function(){var a=
this.declaredId.request,b=this.declaredId.init,d="";null!==a?d="\x26d_dpid\x3d"+a.dpid+"\x26d_dpuuid\x3d"+a.dpuuid:null!==b&&(d="\x26d_dpid\x3d"+b.dpid+"\x26d_dpuuid\x3d"+b.dpuuid);return d},getUUIDQueryString:function(){var a=r.adms,b=s.isPopulatedString,d=!1,g=m.getCookie(this.UUID_COOKIE);b(this.uuid)?b(g)&&this.uuid!=g&&(this.uuid=g):this.uuid=g||a.uuid;if(this.dIdAlwaysOn||this.dIdInRequest)d=!0,this.dIdInRequest=!1;return b(this.uuid)&&d?"d_uuid\x3d"+this.uuid+"\x26":""}},registerRequest:function(a){var b=
this.firingQueue;a===Object(a)&&b.push(a);!this.firing&&b.length&&(this.adms.calledBack?(a=b.shift(),a.src=a.src.replace(/demdex.net\/event\?d_nsid=/,"demdex.net/event?"+this.declaredId.getUUIDQueryString()+"d_nsid\x3d"),A.fireRequest(a),!this.firstRequestHasFired&&"script"==a.tag&&(this.firstRequestHasFired=!0)):this.processADMS())},processADMS:function(){this.adms.process(window.ADMS)},requestRemoval:function(a){if(!M)return"removeFinishedScriptsAndCallbacks is not boolean true";var b=this.toRemove,
d,g;a===Object(a)&&(d=a.script,g=a.callbackName,(d===Object(d)&&"SCRIPT"==d.nodeName||"no script created"==d)&&("string"==typeof g&&g.length)&&b.push(a));if(this.readyToRemove&&b.length){g=b.shift();d=g.script;g=g.callbackName;"no script created"!=d?(a=d.src,d.parentNode.removeChild(d)):a=d;window[g]=null;try{delete window[g]}catch(q){}this.removed.push({scriptSrc:a,callbackName:g});DIL.variables.scriptsRemoved.push(a);DIL.variables.callbacksRemoved.push(g);return this.requestRemoval()}return"requestRemoval() processed"}};
k=function(){var a="/web/20140921211925/http://fast.";x.IS_HTTPS&&(a=!0===K?"/web/20140921211925/https://fast.":"https://");return a+n+".demdex.net/dest4.html?d_nsid\x3d"+p+"#"+encodeURIComponent(document.location.href)};var y={THROTTLE_START:3E4,throttleTimerSet:!1,id:"destination_publishing_iframe_"+n+"_"+p,url:k(),iframe:null,iframeHasLoaded:!1,sendingMessages:!1,messages:[],messagesPosted:[],messageSendingInterval:x.POST_MESSAGE_ENABLED?15:100,jsonProcessed:[],attachIframe:function(){var a=this,b=document.createElement("iframe");b.id=
this.id;b.style.cssText="display: none; width: 0; height: 0;";b.src=this.url;m.addListener(b,"load",function(){a.iframeHasLoaded=!0;a.requestToProcess()});document.body.appendChild(b);this.iframe=b},requestToProcess:function(a,b){var d=this;a&&!s.isEmptyObject(a)&&this.process(a,b);this.iframeHasLoaded&&(this.messages.length&&!this.sendingMessages)&&(this.throttleTimerSet||(this.throttleTimerSet=!0,setTimeout(function(){d.messageSendingInterval=x.POST_MESSAGE_ENABLED?15:150},this.THROTTLE_START)),
this.sendingMessages=!0,this.sendMessages())},process:function(a,b){var d=encodeURIComponent,g,q,c,f,e,h;b===Object(b)&&(h=m.encodeAndBuildRequest([r.declaredId.uuid||"",b.dpid||"",b.dpuuid||""],","));if((g=a.dests)&&g instanceof Array&&(q=g.length))for(c=0;c<q;c++)f=g[c],f=[d("dests"),d(f.id||""),d(f.y||""),d(f.c||"")],this.addMessage(f.join("|"));if((g=a.ibs)&&g instanceof Array&&(q=g.length))for(c=0;c<q;c++)f=g[c],f=[d("ibs"),d(f.id||""),d(f.tag||""),m.encodeAndBuildRequest(f.url||[],","),d(f.ttl||
""),"",h],this.addMessage(f.join("|"));if((g=a.dpcalls)&&g instanceof Array&&(q=g.length))for(c=0;c<q;c++)f=g[c],e=f.callback||{},e=[e.obj||"",e.fn||"",e.key||"",e.tag||"",e.url||""],f=[d("dpm"),d(f.id||""),d(f.tag||""),m.encodeAndBuildRequest(f.url||[],","),d(f.ttl||""),m.encodeAndBuildRequest(e,","),h],this.addMessage(f.join("|"));this.jsonProcessed.push(a)},addMessage:function(a){var b=encodeURIComponent,b=G?b("---destpub-debug---"):b("---destpub---");this.messages.push(b+a)},sendMessages:function(){var a=
this,b;this.messages.length?(b=this.messages.shift(),DIL.xd.postMessage(b,this.url,this.iframe.contentWindow),this.messagesPosted.push(b),setTimeout(function(){a.sendMessages()},this.messageSendingInterval)):this.sendingMessages=!1}},J={traits:function(a){s.isValidPdata(a)&&(l.sids instanceof Array||(l.sids=[]),m.extendArray(l.sids,a));return this},pixels:function(a){s.isValidPdata(a)&&(l.pdata instanceof Array||(l.pdata=[]),m.extendArray(l.pdata,a));return this},logs:function(a){s.isValidLogdata(a)&&
(l.logdata!==Object(l.logdata)&&(l.logdata={}),m.extendObject(l.logdata,a));return this},customQueryParams:function(a){s.isEmptyObject(a)||m.extendObject(l,a,r.reservedKeys);return this},signals:function(a,b){var d,g=a;if(!s.isEmptyObject(g)){if(b&&"string"==typeof b)for(d in g={},a)a.hasOwnProperty(d)&&(g[b+d]=a[d]);m.extendObject(l,g,r.reservedKeys)}return this},declaredId:function(a){r.declaredId.setDeclaredId(a,"request");return this},result:function(a){"function"==typeof a&&(l.callback=a);return this},
afterResult:function(a){"function"==typeof a&&(l.postCallbackFn=a);return this},useImageRequest:function(){l.useImageRequest=!0;return this},clearData:function(){l={};return this},submit:function(a){A.submitRequest(l,a);l={};return this},getPartner:function(){return n},getContainerNSID:function(){return p},getEventLog:function(){return h},getState:function(){var a={},b={};m.extendObject(a,r,{callbackPrefix:!0,useJSONP:!0,registerRequest:!0});m.extendObject(b,y,{attachIframe:!0,requestToProcess:!0,
process:!0,sendMessages:!0});return{pendingRequest:l,otherRequestInfo:a,destinationPublishingInfo:b}},idSync:function(a){if(a!==Object(a)||"string"!=typeof a.dpid||!a.dpid.length)return"Error: config or config.dpid is empty";if("string"!=typeof a.url||!a.url.length)return"Error: config.url is empty";var b=a.url,d=a.minutesToLive,g=encodeURIComponent,c=r.declaredId,b=b.replace(/^https:/,"").replace(/^http:/,"");if("undefined"==typeof d)d=20160;else if(d=parseInt(d,10),isNaN(d)||0>=d)return"Error: config.minutesToLive needs to be a positive number";
c=m.encodeAndBuildRequest([c.uuid||m.getCookie(c.UUID_COOKIE)||"",a.dpid,a.dpuuid||""],",");a=["ibs",g(a.dpid),"img",g(b),d,"",c];y.addMessage(a.join("|"));r.firstRequestHasFired&&y.requestToProcess();return"Successfully queued"},aamIdSync:function(a){if(a!==Object(a)||"string"!=typeof a.dpuuid||!a.dpuuid.length)return"Error: config or config.dpuuid is empty";a.url="//dpm.demdex.net/ibs:dpid\x3d"+a.dpid+"\x26dpuuid\x3d"+a.dpuuid;return this.idSync(a)}},A={submitRequest:function(a,b){r.registerRequest(A.createQueuedRequest(a,
b));return!0},createQueuedRequest:function(a,b){var d=r,g,c=a.callback,f="img";if(!s.isEmptyObject(z)){var e,h,D;for(e in z)if(z.hasOwnProperty(e)&&(h=z[e],!(null==h||""===h)&&e in a&&!(h in a)&&!(h in r.reservedKeys)))D=a[e],null==D||""===D||(a[h]=D)}s.isValidPdata(a.sids)||(a.sids=[]);s.isValidPdata(a.pdata)||(a.pdata=[]);s.isValidLogdata(a.logdata)||(a.logdata={});a.logdataArray=m.convertObjectToKeyValuePairs(a.logdata,"\x3d",!0);a.logdataArray.push("_ts\x3d"+(new Date).getTime());"function"!=
typeof c&&(c=this.defaultCallback);if(d.useJSONP=!a.useImageRequest||"boolean"!=typeof a.useImageRequest)f="script",g=d.callbackPrefix+"_"+n+"_"+p+"_"+(new Date).getTime();return{tag:f,src:A.makeRequestSrc(a,g),internalCallbackName:g,callbackFn:c,postCallbackFn:a.postCallbackFn,useImageRequest:a.useImageRequest,requestData:a,useDocWrite:b===Object(b)&&!0===b.useDocumentWrite}},defaultCallback:function(a,b){var d,g,c,f,e,h,n,p,k;if((d=a.stuff)&&d instanceof Array&&(g=d.length))for(c=0;c<g;c++)if((f=
d[c])&&f===Object(f)){e=f.cn;h=f.cv;n=f.ttl;if("undefined"==typeof n||""===n)n=Math.floor(m.getMaxCookieExpiresInMinutes()/60/24);p=f.dmn||"."+document.domain.replace(/^www\./,"");k=f.type;if(e&&(h||"number"==typeof h))"var"!=k&&(n=parseInt(n,10))&&!isNaN(n)&&m.setCookie(e,h,1440*n,"/",p,!1),I.stuffed[e]=h}d=a.uuid;g=r.declaredId;c=s.isPopulatedString;if(c(d)&&(c(g.uuid)||(g.uuid=d),!s.isEmptyObject(u))){g=u.path;if("string"!=typeof g||!g.length)g="/";c=parseInt(u.days,10);isNaN(c)&&(c=100);m.setCookie(u.name||
"aam_did",d,1440*c,g,u.domain||"."+document.domain.replace(/^www\./,""),!0===u.secure)}!B&&!r.abortRequests&&y.requestToProcess(a,b)},makeRequestSrc:function(a,b){a.sids=s.removeEmptyArrayValues(a.sids||[]);a.pdata=s.removeEmptyArrayValues(a.pdata||[]);var d=r,g=m.encodeAndBuildRequest(a.sids,","),c=m.encodeAndBuildRequest(a.pdata,","),f=(a.logdataArray||[]).join("\x26");delete a.logdataArray;var e=x.IS_HTTPS?"https://":"http://",h=d.declaredId.getDeclaredIdQueryString(),k;k=[];var l,t,E,u;for(l in a)if(!(l in
d.reservedKeys)&&a.hasOwnProperty(l))if(t=a[l],l=encodeURIComponent(l),t instanceof Array){E=0;for(u=t.length;E<u;E++)k.push(l+"\x3d"+encodeURIComponent(t[E]))}else k.push(l+"\x3d"+encodeURIComponent(t));k=k.length?"\x26"+k.join("\x26"):"";return e+n+".demdex.net/event?d_nsid\x3d"+p+h+(g.length?"\x26d_sid\x3d"+g:"")+(c.length?"\x26d_px\x3d"+c:"")+(f.length?"\x26d_ld\x3d"+encodeURIComponent(f):"")+k+(d.useJSONP?"\x26d_rtbd\x3djson\x26d_jsonv\x3d"+DIL.jsonVersion+"\x26d_dst\x3d1\x26d_cts\x3d1\x26d_cb\x3d"+
(b||""):"")},fireRequest:function(a){if("img"==a.tag)this.fireImage(a);else if("script"==a.tag){var b=r.declaredId,b=b.declaredId.request||b.declaredId.init||{};this.fireScript(a,{dpid:b.dpid||"",dpuuid:b.dpuuid||""})}},fireImage:function(a){var b=r,d,g;b.abortRequests||(b.firing=!0,d=new Image(0,0),b.sent.push(a),d.onload=function(){b.firing=!1;b.fired.push(a);b.num_of_img_responses++;b.registerRequest()},g=function(d){f="imgAbortOrErrorHandler received the event of type "+d.type;h.push(f);b.abortRequests=
!0;b.firing=!1;b.errored.push(a);b.num_of_img_errors++;b.registerRequest()},d.addEventListener?(d.addEventListener("error",g,!1),d.addEventListener("abort",g,!1)):d.attachEvent&&(d.attachEvent("onerror",g),d.attachEvent("onabort",g)),d.src=a.src)},fireScript:function(a,b){var d=this,g=r,c,e,k=a.src,l=a.postCallbackFn,p="function"==typeof l,m=a.internalCallbackName;c=a.useDocWrite;if(!g.abortRequests){g.firing=!0;window[m]=function(d){try{d!==Object(d)&&(d={});var c=a.callbackFn;g.firing=!1;g.fired.push(a);
g.num_of_jsonp_responses++;c(d,b);p&&l(d,b)}catch(q){q.message="DIL jsonp callback caught error with message "+q.message;f=q.message;h.push(f);q.filename=q.filename||"dil.js";q.partner=n;DIL.errorModule.handleError(q);try{c({error:q.name+"|"+q.message}),p&&l({error:q.name+"|"+q.message})}catch(k){}}finally{g.requestRemoval({script:e,callbackName:m}),g.registerRequest()}};var s=function(){g.firing=!1;g.requestRemoval({script:"no script created",callbackName:m})};N?s():c?DIL.windowLoaded||"complete"==
document.readyState||"loaded"==document.readyState?(a.useDocWriteSuccessful=!1,s()):(document.write('\x3cscript type\x3d"text/javascript" src\x3d"'+k+'" id\x3d"'+m+'"\x3e\x3c/script\x3e'),e=document.getElementById(m),a.useDocWriteSuccessful=!0):(e=document.createElement("script"),e.addEventListener&&e.addEventListener("error",function(b){g.requestRemoval({script:e,callbackName:m});f="jsonp script tag error listener received the event of type "+b.type+" with src "+k;d.handleScriptError(f,a)},!1),e.type=
"text/javascript",e.src=k,c=DIL.variables.scriptNodeList[0],c.parentNode.insertBefore(e,c));g.sent.push(a);g.declaredId.declaredId.request=null}},handleScriptError:function(a,b){var d=r;h.push(a);d.abortRequests=!0;d.firing=!1;d.errored.push(b);d.num_of_jsonp_errors++;d.registerRequest()}},s={isValidPdata:function(a){return a instanceof Array&&this.removeEmptyArrayValues(a).length?!0:!1},isValidLogdata:function(a){return!this.isEmptyObject(a)},isEmptyObject:function(a){if(a!==Object(a))return!0;for(var b in a)if(a.hasOwnProperty(b))return!1;
return!0},removeEmptyArrayValues:function(a){for(var b=0,d=a.length,c,f=[],b=0;b<d;b++)c=a[b],"undefined"!=typeof c&&null!=c&&f.push(c);return f},isPopulatedString:function(a){return"string"==typeof a&&a.length}},m={addListener:function(){if(document.addEventListener)return function(a,b,d){a.addEventListener(b,function(a){"function"==typeof d&&d(a)},!1)};if(document.attachEvent)return function(a,b,d){a.attachEvent("on"+b,function(a){"function"==typeof d&&d(a)})}}(),convertObjectToKeyValuePairs:function(a,
b,d){var c=[];b=b||"\x3d";var f,e;for(f in a)e=a[f],"undefined"!=typeof e&&null!=e&&c.push(f+b+(d?encodeURIComponent(e):e));return c},encodeAndBuildRequest:function(a,b){return this.map(a,function(a){return encodeURIComponent(a)}).join(b)},map:function(a,b){if(Array.prototype.map)return a.map(b);if(void 0===a||null===a)throw new TypeError;var d=Object(a),c=d.length>>>0;if("function"!==typeof b)throw new TypeError;for(var f=Array(c),e=0;e<c;e++)e in d&&(f[e]=b.call(b,d[e],e,d));return f},filter:function(a,
b){if(!Array.prototype.filter){if(void 0===a||null===a)throw new TypeError;var d=Object(a),c=d.length>>>0;if("function"!==typeof b)throw new TypeError;for(var f=[],e=0;e<c;e++)if(e in d){var h=d[e];b.call(b,h,e,d)&&f.push(h)}return f}return a.filter(b)},getCookie:function(a){a+="\x3d";var b=document.cookie.split(";"),d,c,e;d=0;for(c=b.length;d<c;d++){for(e=b[d];" "==e.charAt(0);)e=e.substring(1,e.length);if(0==e.indexOf(a))return decodeURIComponent(e.substring(a.length,e.length))}return null},setCookie:function(a,
b,c,e,f,h){var k=new Date;c&&(c*=6E4);document.cookie=a+"\x3d"+encodeURIComponent(b)+(c?";expires\x3d"+(new Date(k.getTime()+c)).toUTCString():"")+(e?";path\x3d"+e:"")+(f?";domain\x3d"+f:"")+(h?";secure":"")},extendArray:function(a,b){return a instanceof Array&&b instanceof Array?(Array.prototype.push.apply(a,b),!0):!1},extendObject:function(a,b,c){var e;if(a===Object(a)&&b===Object(b)){for(e in b)if(b.hasOwnProperty(e)&&(s.isEmptyObject(c)||!(e in c)))a[e]=b[e];return!0}return!1},getMaxCookieExpiresInMinutes:function(){return((new Date(x.COOKIE_MAX_EXPIRATION_DATE)).getTime()-
(new Date).getTime())/1E3/60}};"error"==n&&0==p&&m.addListener(window,"load",function(){DIL.windowLoaded=!0});var F=function(){Q();!B&&!r.abortRequests&&y.attachIframe();r.readyToRemove=!0;r.requestRemoval()},Q=function(){B||setTimeout(function(){!O&&(!r.firstRequestHasFired&&!r.adms.admsProcessingStarted&&!r.adms.calledBack)&&("function"==typeof H?J.afterResult(H).submit():J.submit())},DIL.constants.TIME_TO_DEFAULT_REQUEST)},P=document;"error"!=n&&(DIL.windowLoaded?F():"complete"!=P.readyState&&
"loaded"!=P.readyState?m.addListener(window,"load",F):DIL.isAddedPostWindowLoadWasCalled?m.addListener(window,"load",F):(t="number"==typeof t?parseInt(t,10):0,0>t&&(t=0),setTimeout(F,t||DIL.constants.TIME_TO_CATCH_ALL_DP_IFRAME_ATTACHMENT)));r.declaredId.setDeclaredId(L,"init");this.api=J;this.getStuffedVariable=function(a){var b=I.stuffed[a];!b&&"number"!=typeof b&&(b=m.getCookie(a),!b&&"number"!=typeof b&&(b=""));return b};this.validators=s;this.helpers=m;this.constants=x;this.log=h;window._dil_unit_tests&&
(this.pendingRequest=l,this.requestController=r,this.setDestinationPublishingUrl=k,this.destinationPublishing=y,this.requestProcs=A,this.variables=I)},function(){var c=document,e;null==c.readyState&&c.addEventListener&&(c.readyState="loading",c.addEventListener("DOMContentLoaded",e=function(){c.removeEventListener("DOMContentLoaded",e,!1);c.readyState="complete"},!1))}(),DIL.extendStaticPropertiesAndMethods=function(c){var e;if(c===Object(c))for(e in c)c.hasOwnProperty(e)&&(this[e]=c[e])},DIL.extendStaticPropertiesAndMethods({version:"4.1",
jsonVersion:1,constants:{TIME_TO_DEFAULT_REQUEST:50,TIME_TO_CATCH_ALL_DP_IFRAME_ATTACHMENT:500},variables:{scriptNodeList:document.getElementsByTagName("script"),scriptsRemoved:[],callbacksRemoved:[]},windowLoaded:!1,dils:{},isAddedPostWindowLoadWasCalled:!1,isAddedPostWindowLoad:function(c){this.isAddedPostWindowLoadWasCalled=!0;this.windowLoaded="function"==typeof c?!!c():"boolean"==typeof c?c:!0},create:function(c){try{return new DIL(c)}catch(e){return(new Image(0,0)).src="/web/20140921211925/http://error.demdex.net/event?d_nsid\x3d0\x26d_px\x3d14137\x26d_ld\x3dname%3Derror%26filename%3Ddil.js%26partner%3Dno_partner%26message%3DError%2520in%2520attempt%2520to%2520create%2520DIL%2520instance%2520with%2520DIL.create()%26_ts%3D"+
(new Date).getTime(),Error("Error in attempt to create DIL instance with DIL.create()")}},registerDil:function(c,e,h){e=e+"$"+h;e in this.dils||(this.dils[e]=c)},getDil:function(c,e){var h;"string"!=typeof c&&(c="");e||(e=0);h=c+"$"+e;return h in this.dils?this.dils[h]:Error("The DIL instance with partner \x3d "+c+" and containerNSID \x3d "+e+" was not found")},dexGetQSVars:function(c,e,h){e=this.getDil(e,h);return e instanceof this?e.getStuffedVariable(c):""},xd:{postMessage:function(c,e,h){var f=
1;e&&(window.postMessage?h.postMessage(c,e.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):e&&(h.location=e.replace(/#.*$/,"")+"#"+ +new Date+f++ +"\x26"+c))}}}),DIL.errorModule=function(){var c=DIL.create({partner:"error",containerNSID:0,disableDestinationPublishingIframe:!0}),e={harvestererror:14138,destpuberror:14139,dpmerror:14140,generalerror:14137,error:14137,noerrortypedefined:15021,evalerror:15016,rangeerror:15017,referenceerror:15018,typeerror:15019,urierror:15020},h=!1;return{activate:function(){h=
!0},handleError:function(f){if(!h)return"DIL error module has not been activated";f!==Object(f)&&(f={});var k=f.name?(new String(f.name)).toLowerCase():"",n=[];f={name:k,filename:f.filename?f.filename+"":"",partner:f.partner?f.partner+"":"no_partner",site:f.site?f.site+"":document.location.href,message:f.message?f.message+"":""};n.push(k in e?e[k]:e.noerrortypedefined);c.api.pixels(n).logs(f).useImageRequest().submit();return"DIL error report sent"},pixelMap:e}}(),DIL.tools={},DIL.modules={helpers:{handleModuleError:function(c,
e,h){var f="";e=e||"Error caught in DIL module/submodule: ";c===Object(c)?f=e+(c.message||"err has no message"):(f=e+"err is not a valid object",c={});c.message=f;h instanceof DIL&&(c.partner=h.api.getPartner());DIL.errorModule.handleError(c);return this.errorMessage=f}}});
DIL.tools.getSearchReferrer=function(c,e){var h=DIL.getDil("error"),f=DIL.tools.decomposeURI(c||document.referrer),k="",n="",p={queryParam:"q"},k=h.helpers.filter([e===Object(e)?e:{},{hostPattern:/aol\./},{hostPattern:/ask\./},{hostPattern:/bing\./},{hostPattern:/google\./},{hostPattern:/yahoo\./,queryParam:"p"}],function(c){return!(!c.hasOwnProperty("hostPattern")||!f.hostname.match(c.hostPattern))}).shift();return!k?{valid:!1,name:"",keywords:""}:{valid:!0,name:f.hostname,keywords:(h.helpers.extendObject(p,
k),n=p.queryPattern?(k=(""+f.search).match(p.queryPattern))?k[1]:"":f.uriParams[p.queryParam],decodeURIComponent(n||"").replace(/\+|%20/g," "))}};
DIL.tools.decomposeURI=function(c){var e=DIL.getDil("error"),h=document.createElement("a");h.href=c||document.referrer;return{hash:h.hash,host:h.host.split(":").shift(),hostname:h.hostname,href:h.href,pathname:h.pathname.replace(/^\//,""),protocol:h.protocol,search:h.search,uriParams:function(c,h){e.helpers.map(h.split("\x26"),function(e){e=e.split("\x3d");c[e.shift()]=e.shift()});return c}({},h.search.replace(/^(\/|\?)?|\/$/g,""))}};

var dmDil = DIL.create({
	partner: 'dm',
	uuidCookie: {
		name: 'aam_did'
	}
});

if (typeof aamObject == 'undefined') {
	aamObject = {
		ehow: {}
	};
}

if (aamObject !== Object(aamObject)) {
	aamObject = {
		ehow: {}
	};
} else if (aamObject.ehow !== Object(aamObject.ehow)) {
	aamObject.ehow = {};
}

dmDil.setDexQS = function() {
	if (typeof window.dexQS != 'string') {
		window.dexQS = '';
	}

	window.dexQS += ';' + dmDil.helpers.getCookie('aam_dm') + ';uuid=' + dmDil.helpers.getCookie('aam_did');
};

dmDil.signalData = DIL.tools.getSearchReferrer();
dmDil.helpers.extendObject(dmDil.signalData, aamObject.ehow);

if (dmDil.helpers.getCookie('aam_did') !== null) {
	dmDil.setDexQS();
	dmDil.api.signals(dmDil.signalData, 'c_').submit();
} else {
	dmDil.api.signals(dmDil.signalData, 'c_').afterResult(dmDil.setDexQS).submit({
		useDocumentWrite: true
	});
}
