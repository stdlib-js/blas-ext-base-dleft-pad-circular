"use strict";var l=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var c=l(function(D,p){
function E(e,r,t,u,v,i,n,s){var f,o,x,d,a;if(e<=0)return i;for(r<0&&(r=0),a=r%e,a>0&&(a=e-a),x=e+r,f=v+a*u,o=s,d=0;d<x;d++)i[o]=t[f],o+=n,a+=1,a===e?(a=0,f=v):f+=u;return i}p.exports=E
});var C=l(function(F,j){
var y=require('@stdlib/strided-base-stride2offset/dist'),M=c();function O(e,r,t,u,v,i){var n,s;return r<0&&(r=0),n=y(e,u),s=y(e+r,i),M(e,r,t,u,n,v,i,s)}j.exports=O
});var R=l(function(G,m){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),P=C(),g=c();b(P,"ndarray",g);m.exports=P
});var h=require("path").join,w=require('@stdlib/utils-try-require/dist'),z=require('@stdlib/assert-is-error/dist'),A=R(),q,_=w(h(__dirname,"./native.js"));z(_)?q=A:q=_;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
