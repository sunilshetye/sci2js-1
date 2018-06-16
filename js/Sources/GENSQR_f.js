/* autogenerated from "macros/Sources/GENSQR_f.sci" */
function GENSQR_f() {
GENSQR_f.prototype.get = function GENSQR_f() {
}
GENSQR_f.prototype.set = function GENSQR_f() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
model=arg1.model;
if (size(exprs,"*")==2) {
exprs=exprs[2-1];
}
while (true) {
[ok,Amplitude,exprs]=scicos_getvalue(["Set Square generator block parameters"],["Amplitude"],list("vec",1),exprs);
if (!ok) {
break
}
graphics.exprs=exprs;
model.dstate=Amplitude;
model.out2=1;
model.outtyp=1;
x.graphics=graphics;
x.model=model;
break
}
}
GENSQR_f.prototype.define = function GENSQR_f() {
Amplitude=1;
model=scicos_model();
model.sim="gensqr";
model.out=1;
model.out2=1;
model.outtyp=1;
model.evtin=1;
model.dstate=Amplitude;
model.blocktype="d";
model.dep_ut=[false,false];
exprs=string(Amplitude);
gr_i=[];
x=standard_define([3,2],model,exprs,gr_i);
}
GENSQR_f.prototype.details = function GENSQR_f() {
}
}
