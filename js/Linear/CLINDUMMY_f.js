/* autogenerated from "macros/Linear/CLINDUMMY_f.sci" */
function CLINDUMMY_f() {
CLINDUMMY_f.prototype.get = function CLINDUMMY_f() {
}
CLINDUMMY_f.prototype.set = function CLINDUMMY_f() {
x=arg1;
}
CLINDUMMY_f.prototype.define = function CLINDUMMY_f() {
x0=0;
model=scicos_model();
model.sim=list("cdummy",4);
model.state=x0;
model.blocktype="c";
model.firing=[];
model.dep_ut=[false,true];
gr_i=[];
x=standard_define([3,2],model,[],gr_i);
}
CLINDUMMY_f.prototype.details = function CLINDUMMY_f() {
}
}
