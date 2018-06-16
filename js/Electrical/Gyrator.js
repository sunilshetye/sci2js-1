/* autogenerated from "macros/Electrical/Gyrator.sci" */
function Gyrator() {
Gyrator.prototype.get = function Gyrator() {
}
Gyrator.prototype.set = function Gyrator() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
model=arg1.model;
x=arg1;
exprs=x.graphics.exprs;
while (true) {
[ok,G1,G2,exprs]=scicos_getvalue(["Set Gyrator block parameters:","","G1: Gyration conductance","G2: Gyration conductance"],["G1","G2"],list("vec",1,"vec",1),exprs);
if (!ok) {
break
}
x.model.equations.parameters[2-1]=list(G1,G2);
x.graphics.exprs=exprs;
break
}
}
Gyrator.prototype.define = function Gyrator() {
ModelName="Gyrator";
PrametersValue=[1,1];
ParametersName=["G1","G2"];
model=scicos_model();
Typein=[];
Typeout=[];
MI=[];
MO=[];
P=[2.5,90,2,0,2.5,10,2,0,97.5,90,-2,0,97.5,10,-2,0];
PortName=["p1","n1","p2","n2"];
for (i=1;i<=size(P,"r");i+=1) {
if (P(i,3)==1) {
Typein=[Typein,"E"];
MI=[MI,PortName(i)];
}
if (P(i,3)==2) {
Typein=[Typein,"I"];
MI=[MI,PortName(i)];
}
if (P(i,3)==-1) {
Typeout=[Typeout,"E"];
MO=[MO,PortName(i)];
}
if (P(i,3)==-2) {
Typeout=[Typeout,"I"];
MO=[MO,PortName(i)];
}
}
model=scicos_model();
mo=modelica();
model.sim=ModelName;
mo.inputs=MI;
mo.outputs=MO;
model.rpar=PrametersValue;
mo.parameters=list(ParametersName,PrametersValue,zeros(ParametersName));
exprs=["1","1"];
gr_i=[];
model.blocktype="c";
model.dep_ut=[false,true];
mo.model=ModelName;
model.equations=mo;
model.in1=ones(size(MI,"*"),1);
model.out=ones(size(MO,"*"),1);
x=standard_define([2,2],model,exprs,list(gr_i,0));
x.graphics.in_implicit=Typein;
x.graphics.out_implicit=Typeout;
}
Gyrator.prototype.details = function Gyrator() {
}
}
