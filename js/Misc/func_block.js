/* autogenerated from "macros/Misc/func_block.sci" */
function func_block() {
func_block.prototype.get = function func_block() {
}
func_block.prototype.set = function func_block() {
model=arg1.model;
graphics=arg1.graphics;
exprs=graphics.exprs;
x=arg1;
model=x.model;
[ok,mac,exprs]=genfunc(exprs);
if (ok) {
model.sim=mac;
graphics.exprs=exprs;
x.model=model;
x.graphics=graphics;
}
}
func_block.prototype.define = function func_block() {
model=scicos_model();
model.sim=" ";
model.in1=1;
model.out=1;
model.blocktype="c";
model.dep_ut=[true,false];
exprs="v=sin(u);y=u*v";
gr_i=[];
x=standard_define([2,2],model,exprs,gr_i);
}
func_block.prototype.details = function func_block() {
}
}
