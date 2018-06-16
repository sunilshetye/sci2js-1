/* autogenerated from "macros/Sources/Counter.sci" */
function Counter() {
Counter.prototype.get = function Counter() {
}
Counter.prototype.set = function Counter() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
model=arg1.model;
while (true) {
[ok,minim,maxim,rule,exprs]=scicos_getvalue([msprintf(gettext("Set %s block parameters"),"Counter")," ",gettext("Integer counter generator")," "],[gettext("Minimum"),gettext("Maximum"),gettext("Rule (1:Increment, 2:Decrement)")],list("vec",1,"vec",1,"vec",1),exprs);
if (!ok) {
break
}
maxim=int(maxim);
minim=int(minim);
if (maxim<minim) {
block_parameter_error(msprintf(gettext("Wrong values for \'Maximum\' and \'Minimum\' parameters: %d &lt; %d"),minim,maxim),msprintf(gettext("\'Minimum\' must be less than \'Maximum\'.")));
} else if ((rule!=1&&rule!=2)) {
block_parameter_error(msprintf(gettext("Wrong value for \'Rule\' parameter: %d"),rule),msprintf(gettext("Must be in the interval %s."),"[1,2]"));
} else {
graphics.exprs=exprs;
model.dstate=0;
model.ipar=[rule,maxim,minim];
x.graphics=graphics;
x.model=model;
break
}
}
}
Counter.prototype.define = function Counter() {
minim=0;
maxim=2;
rule=1;
model=scicos_model();
model.sim=list("counter",4);
model.evtin=1;
model.out=1;
model.out2=1;
model.dstate=0;
model.ipar=[rule,maxim,minim];
model.blocktype="c";
model.dep_ut=[false,false];
exprs=[string(minim),string(maxim),string(rule)];
gr_i=[];
x=standard_define([3,2],model,exprs,gr_i);
}
Counter.prototype.details = function Counter() {
}
}
