/* autogenerated from "macros/Electrical/CCS.sci" */
function CCS() {
CCS.prototype.get = function CCS() {
}
CCS.prototype.set = function CCS() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
model=arg1.model;
x=arg1;
}
CCS.prototype.define = function CCS() {
ModelName="CCS";
PrametersValue=[];
ParametersName=[];
model=scicos_model();
Typein=[];
Typeout=[];
MI=[];
MO=[];
P=[2,50,1,0,70,98,2,0,70,2,-2,0];
PortName=["Iin","p","n"];
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
exprs=[];
gr_i=[];
model.blocktype="c";
model.dep_ut=[false,true];
mo.model=ModelName;
model.equations=mo;
model.in1=ones(size(MI,"*"),1);
model.out=ones(size(MO,"*"),1);
x=standard_define([2.1,3],model,exprs,list(gr_i,0));
x.graphics.in_implicit=Typein;
x.graphics.out_implicit=Typeout;
}
CCS.prototype.details = function CCS() {
}
}
