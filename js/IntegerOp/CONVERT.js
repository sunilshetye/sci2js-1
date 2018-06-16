/* autogenerated from "macros/IntegerOp/CONVERT.sci" */
function CONVERT() {
CONVERT.prototype.get = function CONVERT() {
}
CONVERT.prototype.set = function CONVERT() {
x=arg1;
graphics=arg1.graphics;
model=arg1.model;
exprs=graphics.exprs;
while (true) {
[ok,it,ot,np,exprs]=scicos_getvalue([msprintf(gettext("Set %s block parameters"),"CONVERT")," ",gettext("Type conversion")," "],[gettext("Input Type (1:double, 3:int32, 4:int16, 5:int8, ...)"),gettext("Output Type (1:double, 3:int32, 4:int16, 5:int8, ...)"),gettext("Do on Overflow (0:Nothing, 1:Saturate, 2:Error)")],list("vec",1,"vec",1,"vec",1),exprs);
if (!ok) {
break
}
if (it==2) {
it=1;
}
if (ot==2) {
ot=1;
}
if ((np!=0&&np!=1&&np!=2)) {
block_parameter_error(msprintf(gettext("Wrong value for \'%s\' parameter: %d."),gettext("Do on Overflow"),np),msprintf(gettext("Must be in the interval %s."),"[0, 2]"));
ok=false;
} else if ((it>8||it<1)) {
block_parameter_error(msprintf(gettext("Wrong value for \'%s\' parameter: %d."),gettext("Input Type"),it),msprintf(gettext("Must be in the interval %s."),"[1, 8]"));
ok=false;
} else if ((ot>8||ot<1)) {
block_parameter_error(msprintf(gettext("Wrong value for \'%s\' parameter: %d."),gettext("Output Type"),ot),msprintf(gettext("Must be in the interval %s."),"[1, 8]"));
ok=false;
}
model.sim=list("convert",4);
if ((it==ot)) {
model.ipar=1;
} else {
if ((np==0)) {
if ((it==1)) {
if ((ot==3)) {
model.ipar=2;
} else if ((ot==4)) {
model.ipar=3;
} else if ((ot==5)) {
model.ipar=4;
} else if ((ot==6)) {
model.ipar=5;
} else if ((ot==7)) {
model.ipar=6;
} else if ((ot==8)) {
model.ipar=7;
}
} else if ((it==3)) {
if ((ot==1)) {
model.ipar=8;
} else if ((ot==4)) {
model.ipar=9;
} else if ((ot==5)) {
model.ipar=10;
} else if ((ot==6)) {
model.ipar=1;
} else if ((ot==7)) {
model.ipar=11;
} else if ((ot==8)) {
model.ipar=12;
}
} else if ((it==4)) {
if ((ot==1)) {
model.ipar=13;
} else if ((ot==3)) {
model.ipar=14;
} else if ((ot==5)) {
model.ipar=15;
} else if ((ot==6)) {
model.ipar=16;
} else if ((ot==7)) {
model.ipar=1;
} else if ((ot==8)) {
model.ipar=17;
}
} else if ((it==5)) {
if ((ot==1)) {
model.ipar=18;
} else if ((ot==3)) {
model.ipar=19;
} else if ((ot==4)) {
model.ipar=20;
} else if ((ot==6)) {
model.ipar=21;
} else if ((ot==7)) {
model.ipar=22;
} else if ((ot==8)) {
model.ipar=1;
}
} else if ((it==6)) {
if ((ot==1)) {
model.ipar=23;
} else if ((ot==3)) {
model.ipar=1;
} else if ((ot==4)) {
model.ipar=24;
} else if ((ot==5)) {
model.ipar=25;
} else if ((ot==7)) {
model.ipar=26;
} else if ((ot==8)) {
model.ipar=27;
}
} else if ((it==7)) {
if ((ot==1)) {
model.ipar=28;
} else if ((ot==3)) {
model.ipar=29;
} else if ((ot==4)) {
model.ipar=1;
} else if ((ot==5)) {
model.ipar=30;
} else if ((ot==6)) {
model.ipar=31;
} else if ((ot==8)) {
model.ipar=32;
}
} else if ((it==8)) {
if ((ot==1)) {
model.ipar=33;
} else if ((ot==3)) {
model.ipar=34;
} else if ((ot==4)) {
model.ipar=35;
} else if ((ot==5)) {
model.ipar=1;
} else if ((ot==6)) {
model.ipar=36;
} else if ((ot==7)) {
model.ipar=37;
}
}
} else if ((np==1)) {
if ((it==1)) {
if ((ot==3)) {
model.ipar=38;
} else if ((ot==4)) {
model.ipar=39;
} else if ((ot==5)) {
model.ipar=40;
} else if ((ot==6)) {
model.ipar=41;
} else if ((ot==7)) {
model.ipar=42;
} else if ((ot==8)) {
model.ipar=43;
}
} else if ((it==3)) {
if ((ot==1)) {
model.ipar=8;
} else if ((ot==4)) {
model.ipar=44;
} else if ((ot==5)) {
model.ipar=45;
} else if ((ot==6)) {
model.ipar=46;
} else if ((ot==7)) {
model.ipar=47;
} else if ((ot==8)) {
model.ipar=48;
}
} else if ((it==4)) {
if ((ot==1)) {
model.ipar=13;
} else if ((ot==3)) {
model.ipar=14;
} else if ((ot==5)) {
model.ipar=49;
} else if ((ot==6)) {
model.ipar=50;
} else if ((ot==7)) {
model.ipar=51;
} else if ((ot==8)) {
model.ipar=52;
}
} else if ((it==5)) {
if ((ot==1)) {
model.ipar=18;
} else if ((ot==3)) {
model.ipar=19;
} else if ((ot==4)) {
model.ipar=20;
} else if ((ot==6)) {
model.ipar=53;
} else if ((ot==7)) {
model.ipar=54;
} else if ((ot==8)) {
model.ipar=55;
}
} else if ((it==6)) {
if ((ot==1)) {
model.ipar=23;
} else if ((ot==3)) {
model.ipar=56;
} else if ((ot==4)) {
model.ipar=57;
} else if ((ot==5)) {
model.ipar=58;
} else if ((ot==7)) {
model.ipar=59;
} else if ((ot==8)) {
model.ipar=60;
}
} else if ((it==7)) {
if ((ot==1)) {
model.ipar=28;
} else if ((ot==3)) {
model.ipar=29;
} else if ((ot==4)) {
model.ipar=61;
} else if ((ot==5)) {
model.ipar=62;
} else if ((ot==6)) {
model.ipar=31;
} else if ((ot==8)) {
model.ipar=63;
}
} else if ((it==8)) {
if ((ot==1)) {
model.ipar=33;
} else if ((ot==3)) {
model.ipar=34;
} else if ((ot==4)) {
model.ipar=35;
} else if ((ot==5)) {
model.ipar=64;
} else if ((ot==6)) {
model.ipar=36;
} else if ((ot==7)) {
model.ipar=37;
}
}
} else if ((np==2)) {
if ((it==1)) {
if ((ot==3)) {
model.ipar=65;
} else if ((ot==4)) {
model.ipar=66;
} else if ((ot==5)) {
model.ipar=67;
} else if ((ot==6)) {
model.ipar=68;
} else if ((ot==7)) {
model.ipar=69;
} else if ((ot==8)) {
model.ipar=70;
}
} else if ((it==3)) {
if ((ot==1)) {
model.ipar=8;
} else if ((ot==4)) {
model.ipar=71;
} else if ((ot==5)) {
model.ipar=72;
} else if ((ot==6)) {
model.ipar=73;
} else if ((ot==7)) {
model.ipar=74;
} else if ((ot==8)) {
model.ipar=75;
}
} else if ((it==4)) {
if ((ot==1)) {
model.ipar=13;
} else if ((ot==3)) {
model.ipar=14;
} else if ((ot==5)) {
model.ipar=76;
} else if ((ot==6)) {
model.ipar=77;
} else if ((ot==7)) {
model.ipar=78;
} else if ((ot==8)) {
model.ipar=79;
}
} else if ((it==5)) {
if ((ot==1)) {
model.ipar=18;
} else if ((ot==3)) {
model.ipar=19;
} else if ((ot==4)) {
model.ipar=20;
} else if ((ot==6)) {
model.ipar=80;
} else if ((ot==7)) {
model.ipar=81;
} else if ((ot==8)) {
model.ipar=82;
}
} else if ((it==6)) {
if ((ot==1)) {
model.ipar=23;
} else if ((ot==3)) {
model.ipar=83;
} else if ((ot==4)) {
model.ipar=84;
} else if ((ot==5)) {
model.ipar=85;
} else if ((ot==7)) {
model.ipar=86;
} else if ((ot==8)) {
model.ipar=87;
}
} else if ((it==7)) {
if ((ot==1)) {
model.ipar=28;
} else if ((ot==3)) {
model.ipar=29;
} else if ((ot==4)) {
model.ipar=88;
} else if ((ot==5)) {
model.ipar=89;
} else if ((ot==6)) {
model.ipar=31;
} else if ((ot==8)) {
model.ipar=90;
}
} else if ((it==8)) {
if ((ot==1)) {
model.ipar=33;
} else if ((ot==3)) {
model.ipar=34;
} else if ((ot==4)) {
model.ipar=35;
} else if ((ot==5)) {
model.ipar=91;
} else if ((ot==6)) {
model.ipar=36;
} else if ((ot==7)) {
model.ipar=37;
}
}
}
}
in1=[model.in1,model.in2];
out=[model.out,model.out2];
if (ok) {
[model,graphics,ok]=set_io(model,graphics,list(in1,it),list(out,ot),[],[]);
}
if (ok) {
graphics.exprs=exprs;
x.graphics=graphics;
x.model=model;
break
}
}
}
CONVERT.prototype.define = function CONVERT() {
sgn=2;
model=scicos_model();
model.sim=list("convert",4);
model.in1=-1;
model.out=-1;
model.in2=-2;
model.out2=-2;
model.intyp=1;
model.outtyp=3;
model.rpar=[];
model.ipar=sgn;
model.blocktype="c";
model.dep_ut=[true,false];
exprs=[sci2exp(1),sci2exp(3),sci2exp(0)];
gr_i=[];
x=standard_define([3,2],model,exprs,gr_i);
}
CONVERT.prototype.details = function CONVERT() {
}
}
