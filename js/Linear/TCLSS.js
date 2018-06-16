/* autogenerated from "macros/Linear/TCLSS.sci" */
function TCLSS() {
TCLSS.prototype.get = function TCLSS() {
}
TCLSS.prototype.set = function TCLSS() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
model=arg1.model;
if (size(exprs,"*")==7) {
exprs=exprs[[1:4,7]-1];
}
while (true) {
[ok,A,B,C,D,x0,exprs]=scicos_getvalue("Set continuous linear system parameters",["A matrix","B matrix","C matrix","D matrix","Initial state"],list("mat",[-1,-1],"mat",["size(%1,2)","-1"],"mat",["-1","size(%1,2)"],"mat",[-1,-1],"vec","size(%1,2)"),exprs);
if (!ok) {
break
}
out=size(C,1);
if (out==0) {
out=[];
}
in1=size(B,2);
if (in1==0) {
in1=[];
}
[ms,ns]=size(A);
if (ms!=ns) {
message("A matrix must be square");
} else {
[model,graphics,ok]=check_io(model,graphics,[in1,ms],out,1,[]);
if (ok) {
graphics.exprs=exprs;
rpar=[A.slice(),B.slice(),C.slice(),D.slice()];
if (D!=[]) {
if (norm(D,1)!=0) {
mmm=[true,true];
} else {
mmm=[false,true];
}
if (or(model.dep_ut!=mmm)) {
model.dep_ut=mmm;
}
} else {
model.dep_ut=[false,true];
}
model.state=x0.slice();
model.rpar=rpar;
if (D!=[]) {
model.sim=list("tcslti4",4);
} else {
model.sim=list("tcsltj4",4);
}
x.graphics=graphics;
x.model=model;
break
}
}
}
}
TCLSS.prototype.define = function TCLSS() {
x0=0;
A=0;
B=1;
C=1;
D=0;
in1=1;
nx=size(x0,"*");
out=1;
model=scicos_model();
model.sim=list("tcslti4",4);
model.in1=[in1,nx];
model.out=out;
model.evtin=1;
model.state=x0;
model.rpar=[A.slice(),B.slice(),C.slice(),D.slice()];
model.blocktype="c";
model.dep_ut=[false,true];
exprs=[strcat(sci2exp(A)),strcat(sci2exp(B)),strcat(sci2exp(C)),strcat(sci2exp(D)),strcat(sci2exp(x0))];
gr_i=[];
x=standard_define([3,2],model,exprs,gr_i);
}
TCLSS.prototype.details = function TCLSS() {
}
}
