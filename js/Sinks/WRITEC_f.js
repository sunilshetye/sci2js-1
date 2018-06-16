/* autogenerated from "macros/Sinks/WRITEC_f.sci" */
function WRITEC_f() {
WRITEC_f.prototype.get = function WRITEC_f() {
}
WRITEC_f.prototype.set = function WRITEC_f() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
model=arg1.model;
ipar=model.ipar;
dstate=model.dstate;
lunit=dstate(2);
fname=exprs[2-1];
frmt=exprs[3-1];
while (true) {
[ok,in1,fname1,frmt1,N,swap,exprs]=scicos_getvalue([msprintf(gettext("Set %s block parameters"),"WRITEC_f")," ",gettext("Write to C binary file")],[gettext("Input Size"),gettext("Output File Name"),gettext("Output Format"),gettext("Buffer Size"),gettext("Swap Mode (0:No, 1:Yes)")],list("vec",1,"str",1,"str",1,"vec",1,"vec",1),exprs);
if (!ok) {
break
}
in1=int(in1);
nin=in1;
fname1=pathconvert(stripblanks(fname1),false,true);
frmt1=stripblanks(frmt1);
fmts=["s","l","d","f","c","us","ul","uc","ull","uls","ubl","ubs","dl","fl","ll","sl","db","fb","lb","sb"];
if (and(frmt1!=fmts)) {
block_parameter_error(msprintf(gettext("Wrong value for \'%s\' parameter: %s."),gettext("Input Format"),frmt1),gettext("Valid formats are: "+strcat(fmts,", ")));
ok=false;
} else if (alreadyran&&fname1!=fname) {
block_parameter_error(msprintf(gettext("You cannot modify \'%s\' when running"),gettext("Input Format")),gettext("End current simulation first."));
ok=false;
} else if (alreadyran&&N!=ipar(5)) {
block_parameter_error(msprintf(gettext("You cannot modify \'Buffer Size\' when running."),gettext("Buffer Size")),gettext("End current simulation first"));
ok=false;
} else if (fname1=="") {
block_parameter_error(msprintf(gettext("Wrong value for \'%s\' parameter."),gettext("Output File Name")),gettext("You must provide a filename."));
} else if (fileparts(fname1)!="") {
[pa,fn,ex]=fileparts(fname1);
if (!isdir(pa)) {
block_parameter_error(msprintf(gettext("Wrong value for \'%s\' parameter."),gettext("Output File Name")),msprintf(gettext("Directory \'%s\' does not exist"),pa));
ok=false;
}
} else if (N<1) {
block_parameter_error(msprintf(gettext("Wrong value for \'%s\' parameter: %d."),gettext("Buffer Size"),N),gettext("Strictly positive integer expected."));
ok=false;
} else if (in1<=0) {
block_parameter_error(msprintf(gettext("Wrong value for \'%s\' parameter: %d."),gettext("Input Size"),in1),gettext("Strictly positive integer expected."));
ok=false;
} else if (swap!=0&&swap!=1) {
block_parameter_error(msprintf(gettext("Wrong value for \'%s\' parameter: %d."),gettext("Swap Mode"),swap),msprintf(gettext("Must be in the interval %s."),"[0, 1]"));
ok=false;
}
frmt1=part(frmt1,1,3);
if (ok) {
ipar=[length(fname1),_str2code(frmt1),N,swap,_str2code(fname1)];
if (prod(size(dstate))!=(nin+1)*N+2) {
dstate=[-1,lunit,zeros((nin+1)*N,1)];
}
model.in1=nin;
model.dstate=dstate;
model.ipar=ipar;
graphics.exprs=exprs;
x.graphics=graphics;
x.model=model;
break
}
}
}
WRITEC_f.prototype.define = function WRITEC_f() {
in1=1;
nin=sum(in1);
frmt="c  ";
fname="foo";
swap=0;
lunit=0;
N=2;
model=scicos_model();
model.sim=list("writec",2);
model.in1=in1;
model.evtin=1;
model.dstate=[-1,lunit,zeros((nin+1)*N,1)];
model.ipar=[length(fname),_str2code(frmt),N,swap,_str2code(fname)];
model.blocktype="d";
model.dep_ut=[true,false];
exprs=[sci2exp(in1),fname,frmt,string(N),string(swap)];
gr_i=[];
x=standard_define([4,2],model,exprs,gr_i);
}
WRITEC_f.prototype.details = function WRITEC_f() {
}
}
