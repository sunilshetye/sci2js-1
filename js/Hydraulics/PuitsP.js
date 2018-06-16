/* autogenerated from "macros/Hydraulics/PuitsP.sci" */
function PuitsP() {
PuitsP.prototype.get = function PuitsP() {
}
PuitsP.prototype.set = function PuitsP() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
model=arg1.model;
while (true) {
[ok,P0,T0,H0,option_temperature,exprs]=scicos_getvalue("Paramètres du puits",["Pression de la source : P0 (Pa)","Temperature de la source : T0 (K)","Enthalpie spécifique de la source : H0 (J/kg)","1:température fixée - 2:enthalpie fixée : option_temperature"],list("vec",-1,"vec",-1,"vec",-1,"vec",-1),exprs);
if (!ok) {
break
}
model.rpar=[P0,T0,H0,option_temperature];
model.equations.parameters[2-1]=list(P0,T0,H0,option_temperature);
graphics.exprs=exprs;
x.graphics=graphics;
x.model=model;
break
}
}
PuitsP.prototype.define = function PuitsP() {
model=scicos_model();
P0=100000;
T0=290;
H0=100000;
option_temperature=1;
model.rpar=[P0,T0,H0,option_temperature];
model.sim="Puits";
model.blocktype="c";
model.dep_ut=[true,false];
mo=modelica();
mo.model="Puits";
mo.inputs=["C"];
mo.parameters=list(["P0","T0","H0","option_temperature"],[P0,T0,H0,option_temperature]);
model.equations=mo;
model.in1=ones(size(mo.inputs,"*"),1);
exprs=[string(P0),string(T0),string(H0),string(option_temperature)];
gr_i=[];
x=standard_define([2.5,2],model,exprs,list(gr_i,0));
x.graphics.in_implicit=["I"];
}
PuitsP.prototype.details = function PuitsP() {
}
}
