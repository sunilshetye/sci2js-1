/* autogenerated from "macros/NonLinear/MIN_f.sci" */
function MIN_f() {
MIN_f.prototype.get = function MIN_f() {
}
MIN_f.prototype.set = function MIN_f() {
x=arg1;
}
MIN_f.prototype.define = function MIN_f() {
in1=-1;
model=scicos_model();
model.sim="minblk";
model.in1=in1;
model.out=1;
model.dstate=[0,0];
model.blocktype="c";
model.dep_ut=[true,false];
exprs=sci2exp(in1);
gr_i=[];
x=standard_define([2,2],model,exprs,gr_i);
}
MIN_f.prototype.details = function MIN_f() {
}
}
