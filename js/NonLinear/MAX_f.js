/* autogenerated from "macros/NonLinear/MAX_f.sci" */
function MAX_f() {
MAX_f.prototype.get = function MAX_f() {
}
MAX_f.prototype.set = function MAX_f() {
x=arg1;
}
MAX_f.prototype.define = function MAX_f() {
in1=-1;
model=scicos_model();
model.sim="maxblk";
model.in1=in1;
model.out=1;
model.dstate=[0,0];
model.blocktype="c";
model.dep_ut=[true,false];
exprs=" ";
gr_i=[];
x=standard_define([2,2],model,exprs,gr_i);
}
MAX_f.prototype.details = function MAX_f() {
}
}
