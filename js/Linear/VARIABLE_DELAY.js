/* autogenerated from "macros/Linear/VARIABLE_DELAY.sci" */
function VARIABLE_DELAY() {
VARIABLE_DELAY.prototype.get = function VARIABLE_DELAY() {
}
VARIABLE_DELAY.prototype.set = function VARIABLE_DELAY() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
model=arg1.model;
nin=model.in1(1);
while (true) {
[ok,T,init,N,exprs]=scicos_getvalue("Set delay parameters",["Max delay","initial input","Buffer size"],list("vec",1,"vec",1,"vec",1),exprs);
if (!ok) {
break
}
if (N<2) {
message("Buffer must be larger than 2");
ok=false;
}
if (T<=0) {
message("Delay must be positive");
ok=false;
}
if (ok) {
[model,graphics,ok]=check_io(model,graphics,[-1,1],-1,[],[]);
}
if (ok) {
graphics.exprs=exprs;
model.rpar=[T,init];
model.ipar=N;
x.graphics=graphics;
x.model=model;
break
}
}
}
VARIABLE_DELAY.prototype.define = function VARIABLE_DELAY() {
nin=1;
T=1;
init=0;
N=1024;
model=scicos_model();
model.sim=list("variable_delay",4);
model.in1=[nin,1];
model.out=nin;
model.rpar=[T,init];
model.ipar=N;
model.blocktype="d";
model.dep_ut=[false,false];
exprs=[string(T),string(init),string(N)];
gr_i=[];
x=standard_define([3,2],model,exprs,gr_i);
}
VARIABLE_DELAY.prototype.details = function VARIABLE_DELAY() {
}
}
