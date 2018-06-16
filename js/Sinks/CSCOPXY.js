/* autogenerated from "macros/Sinks/CSCOPXY.sci" */
function CSCOPXY() {
CSCOPXY.prototype.get = function CSCOPXY() {
}
CSCOPXY.prototype.set = function CSCOPXY() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
model=arg1.model;
while (true) {
[ok,nbr_curves,clrs,siz,win,wpos,wdim,xmin,xmax,ymin,ymax,N,exprs]=scicos_getvalue("Set Scope parameters",["Number of Curves","color (>0) or mark (<0)","line or mark size","Output window number (-1 for automatic)","Output window position","Output window sizes","Xmin","Xmax","Ymin","Ymax","Buffer size"],list("vec",1,"vec",1,"vec",1,"vec",1,"vec",-1,"vec",-1,"vec",1,"vec",1,"vec",1,"vec",1,"vec",1),exprs);
if (!ok) {
break
}
mess=[];
if (size(wpos,"*")!=0&&size(wpos,"*")!=2) {
mess=[mess,"Window position must be [] or a 2 vector"," "];
ok=false;
}
if (size(wdim,"*")!=0&&size(wdim,"*")!=2) {
mess=[mess,"Window dim must be [] or a 2 vector"," "];
ok=false;
}
if (nbr_curves<=0) {
mess=[mess,"Number of Curves cannot be negative or null"," "];
ok=false;
}
if (win<-1) {
mess=[mess,"Window number cannot be inferior than -1"," "];
ok=false;
}
if (N<1) {
mess=[mess,"Buffer size must be at least 1"," "];
ok=false;
}
if (N==1&&clrs>0) {
mess=[mess,"Buffer size must be at least 2"," "];
ok=false;
}
if (ymin>=ymax) {
mess=[mess,"Ymax must be greater than Ymin"," "];
ok=false;
}
if (xmin>=xmax) {
mess=[mess,"Xmax must be greater than Xmin"," "];
ok=false;
}
if (!ok) {
message(mess);
} else {
in1=nbr_curves*ones(2,1);
in2=ones(2,1);
[model,graphics,ok]=set_io(model,graphics,list([in1,in2],ones(2,1)),list(),ones(1,1),[]);
if (wpos==[]) {
wpos=[-1,-1];
}
if (wdim==[]) {
wdim=[-1,-1];
}
rpar=[xmin,xmax,ymin,ymax];
ipar=[win,1,N,clrs,siz,1,wpos.slice(),wdim.slice(),nbr_curves];
model.rpar=rpar;
model.ipar=ipar;
graphics.exprs=exprs;
x.graphics=graphics;
x.model=model;
break
}
}
}
CSCOPXY.prototype.define = function CSCOPXY() {
win=-1;
clrs=4;
siz=1;
wdim=[600,400];
wpos=[-1,-1];
N=2;
xmin=-15;
xmax=15;
ymin=-15;
ymax=+15;
nbr_curves=1;
model=scicos_model();
model.sim=list("cscopxy",4);
model.in1=[1,1];
model.in2=[1,1];
model.intyp=[1,1];
model.evtin=1;
model.rpar=[xmin,xmax,ymin,ymax];
model.ipar=[win,1,N,clrs,siz,1,wpos.slice(),wdim.slice(),nbr_curves];
model.blocktype="d";
model.dep_ut=[false,false];
exprs=[string(nbr_curves),sci2exp(clrs),sci2exp(siz),string(win),sci2exp([]),sci2exp(wdim),string(xmin),string(xmax),string(ymin),string(ymax),string(N)];
gr_i=[];
x=standard_define([2,2],model,exprs,gr_i);
}
CSCOPXY.prototype.details = function CSCOPXY() {
}
}
