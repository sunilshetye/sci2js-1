/* autogenerated from "macros/Electrical/VariableResistor.sci" */
function VariableResistor() {
VariableResistor.prototype.get = function VariableResistor() {
}
VariableResistor.prototype.set = function VariableResistor() {
x=arg1;
}
VariableResistor.prototype.define = function VariableResistor() {
model=scicos_model();
model.sim="VariableResistor";
model.blocktype="c";
model.dep_ut=[true,false];
mo=modelica();
mo.model="VariableResistor";
mo.inputs=["p","R"];
mo.outputs="n";
model.equations=mo;
model.in1=ones(size(mo.inputs,"*"),1);
model.out=ones(size(mo.outputs,"*"),1);
exprs=[];
gr_i=[];
x=standard_define([2,2],model,exprs,list(gr_i,0));
x.graphics.in_implicit=["I","E"];
x.graphics.out_implicit=["I"];
}
VariableResistor.prototype.details = function VariableResistor() {
}
}
