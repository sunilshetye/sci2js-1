/* autogenerated from "macros/Events/ANDLOG_f.sci" */
function ANDLOG_f() {
ANDLOG_f.prototype.get = function ANDLOG_f() {
}
ANDLOG_f.prototype.set = function ANDLOG_f() {
x=arg1;
}
ANDLOG_f.prototype.define = function ANDLOG_f() {
model=scicos_model();
model.sim="andlog";
model.out=1;
model.evtin=[1,1];
model.blocktype="d";
model.firing=[];
model.dep_ut=[false,false];
gr_i=[];
x=standard_define([3,3],model,[],gr_i);
}
ANDLOG_f.prototype.details = function ANDLOG_f() {
}
}
