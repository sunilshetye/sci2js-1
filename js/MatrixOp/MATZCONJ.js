/* autogenerated from "macros/MatrixOp/MATZCONJ.sci" */
function MATZCONJ() {
MATZCONJ.prototype.get = function MATZCONJ() {
}
MATZCONJ.prototype.set = function MATZCONJ() {
x=arg1;
}
MATZCONJ.prototype.define = function MATZCONJ() {
model=scicos_model();
function_name="matz_conj";
funtyp=4;
model.sim=list(function_name,funtyp);
model.in1=-1;
model.in2=-2;
model.intyp=2;
model.out=-1;
model.out2=-2;
model.outtyp=2;
model.evtin=[];
model.evtout=[];
model.state=[];
model.dstate=[];
model.rpar=[];
model.ipar=[];
model.blocktype="c";
model.firing=[];
model.dep_ut=[true,false];
label=[];
gr_i=[];
x=standard_define([2,2],model,label,gr_i);
}
MATZCONJ.prototype.details = function MATZCONJ() {
}
}
