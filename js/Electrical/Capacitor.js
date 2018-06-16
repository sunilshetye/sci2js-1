/* autogenerated from "macros/Electrical/Capacitor.sci" */
function Capacitor() {
Capacitor.prototype.get = function Capacitor() {
}
Capacitor.prototype.set = function Capacitor() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
model=arg1.model;
while (true) {
[ok,C,v,exprs]=scicos_getvalue("Set Capacitor block parameter",["C (F)","Initial Voltage"],list("vec",1,"vec",1),exprs);
if (!ok) {
break
}
model.rpar=C;
model.equations.parameters[2-1]=list(C,v);
graphics.exprs=exprs;
x.graphics=graphics;
x.model=model;
break
}
}
Capacitor.prototype.define = function Capacitor() {
model=scicos_model();
C=0.01;
v=0;
model.rpar=[C,v];
model.sim="Capacitor";
model.blocktype="c";
model.dep_ut=[true,false];
mo=modelica();
mo.model="Capacitor";
mo.inputs="p";
mo.outputs="n";
mo.parameters=list(["C","v"],list(C,v),[0,1]);
model.equations=mo;
model.in1=ones(size(mo.inputs,"*"),1);
model.out=ones(size(mo.outputs,"*"),1);
exprs=string([C,v]);
gr_i=[];
x=standard_define([2,1.1],model,exprs,list(gr_i,0));
x.graphics.in_implicit=["I"];
x.graphics.out_implicit=["I"];
}
Capacitor.prototype.details = function Capacitor() {
}
}
