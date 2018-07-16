/* autogenerated from "macros/Linear/SUMMATION.sci" */
function SUMMATION() {
    SUMMATION.prototype.define = function SUMMATION() {
        this.sgn = [[1],[-1]];
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["summation"]), new ScilabDouble([4]));
        this.model.in = new ScilabDouble([-1],[-1]);
        this.model.out = new ScilabDouble([-1]);
        this.model.in2 = new ScilabDouble([-2],[-2]);
        this.model.out2 = new ScilabDouble([-2]);
        this.model.ipar = new ScilabDouble(this.sgn);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabBoolean([true,false]);
        this.exprs = sci2exp(this.sgn);
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"SUMMATION\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,3]),this.model,new ScilabString([this.exprs]),this.gr_i);
        return new Summation(this.x);
    }
    SUMMATION.prototype.details = function SUMMATION() {
        return this.x;
    }
    SUMMATION.prototype.get = function SUMMATION() {
        var options = {
            Datatype:["Datatype (1=real double  2=complex 3=int32 ...)",this.Datatype],
            sgn:["Number of inputs or sign vector (of +1, -1)",this.sgn.toString().replace(/,/g," ")],
            satur:["Do on Overflow(0=Nothing 1=Saturate 2=Error)",this.satur],
        }
        return options;
    }
    SUMMATION.prototype.set = function SUMMATION() {
        this.Datatype = arguments[0]["Datatype"]
        this.sgn = inverse(arguments[0]["sgn"])
        this.satur = arguments[0]["satur"]
        this.exprs = inverse(arguments[0]["exprs"])
        this.exprs = this.graphics.exprs;
        if (size(this.exprs,1)==1) {
            this.exprs = [[sci2exp(1)],[this.exprs],[sci2exp(0)]];
        } else if (size(this.exprs,1)==2) {
            this.exprs = [[this.exprs],[sci2exp(0)]];
        }
        while (true) {
            [ok,this.Datatype,this.sgn,this.satur,this.exprs] = scicos_getvalue("Set sum block parameters",["Datatype (1=real double  2=complex 3=int32 ...)","Number of inputs or sign vector (of +1, -1)","Do on Overflow(0=Nothing 1=Saturate 2=Error)"],list("vec",1,"vec",-1,"vec",1),this.exprs);
            if (!ok) {
                break;
            }
            this.sgn = this.sgn.slice();
            if ((this.satur!=0&&this.satur!=1&&this.satur!=2)) {
                message("Do on overflow must be 0,1,2");
                var ok = false;
            }
            if (size(this.sgn,1)==1) {
                if (this.sgn<1) {
                    message("Number of inputs must be > 0");
                    var ok = false;
                } else if (this.sgn==1) {
                    var in1 = -1;
                    var in2 = -2;
                    this.sgn = [];
                    var nout = 1;
                    var nout2 = 1;
                } else {
                    var in1 = -ones(this.sgn,1);
                    var in2 = 2*in1;
                    this.sgn = ones(this.sgn,1);
                    var nout = -1;
                    var nout2 = -2;
                }
            } else {
                if (!and(abs(this.sgn)==1)) {
                    message("Signs can only be +1 or -1");
                    var ok = false;
                } else {
                    var in1 = -ones(size(this.sgn,1),1);
                    var in2 = 2*in1;
                    var nout = -1;
                    var nout2 = -2;
                }
            }
            var it = this.Datatype*ones(1,size(in1,1));
            var ot = this.Datatype;
            if (this.Datatype==1) {
                this.model.sim = list(new ScilabString(["summation"]), new ScilabDouble([4]));
            } else if (this.Datatype==2) {
                this.model.sim = list(new ScilabString(["summation_z"]), new ScilabDouble([4]));
            } else if (((this.Datatype<1)||(this.Datatype>8))) {
                message("Datatype is not supported");
                var ok = false;
            } else {
                if (this.satur==0) {
                    if (this.Datatype==3) {
                        this.model.sim = list(new ScilabString(["summation_i32n"]), new ScilabDouble([4]));
                    } else if (this.Datatype==4) {
                        this.model.sim = list(new ScilabString(["summation_i16n"]), new ScilabDouble([4]));
                    } else if (this.Datatype==5) {
                        this.model.sim = list(new ScilabString(["summation_i8n"]), new ScilabDouble([4]));
                    } else if (this.Datatype==6) {
                        this.model.sim = list(new ScilabString(["summation_ui32n"]), new ScilabDouble([4]));
                    } else if (this.Datatype==7) {
                        this.model.sim = list(new ScilabString(["summation_ui16n"]), new ScilabDouble([4]));
                    } else if (this.Datatype==8) {
                        this.model.sim = list(new ScilabString(["summation_ui8n"]), new ScilabDouble([4]));
                    }
                } else if (this.satur==1) {
                    if (this.Datatype==3) {
                        this.model.sim = list(new ScilabString(["summation_i32s"]), new ScilabDouble([4]));
                    } else if (this.Datatype==4) {
                        this.model.sim = list(new ScilabString(["summation_i16s"]), new ScilabDouble([4]));
                    } else if (this.Datatype==5) {
                        this.model.sim = list(new ScilabString(["summation_i8s"]), new ScilabDouble([4]));
                    } else if (this.Datatype==6) {
                        this.model.sim = list(new ScilabString(["summation_ui32s"]), new ScilabDouble([4]));
                    } else if (this.Datatype==7) {
                        this.model.sim = list(new ScilabString(["summation_ui16s"]), new ScilabDouble([4]));
                    } else if (this.Datatype==8) {
                        this.model.sim = list(new ScilabString(["summation_ui8s"]), new ScilabDouble([4]));
                    }
                } else if (this.satur==2) {
                    if (this.Datatype==3) {
                        this.model.sim = list(new ScilabString(["summation_i32e"]), new ScilabDouble([4]));
                    } else if (this.Datatype==4) {
                        this.model.sim = list(new ScilabString(["summation_i16e"]), new ScilabDouble([4]));
                    } else if (this.Datatype==5) {
                        this.model.sim = list(new ScilabString(["summation_i8e"]), new ScilabDouble([4]));
                    } else if (this.Datatype==6) {
                        this.model.sim = list(new ScilabString(["summation_ui32e"]), new ScilabDouble([4]));
                    } else if (this.Datatype==7) {
                        this.model.sim = list(new ScilabString(["summation_ui16e"]), new ScilabDouble([4]));
                    } else if (this.Datatype==8) {
                        this.model.sim = list(new ScilabString(["summation_ui8e"]), new ScilabDouble([4]));
                    }
                }
            }
            if (ok) {
                var tmpvar0 = set_io(this.model,this.graphics,list([in1,in2],it),list([nout,nout2],ot),[],[]);
                this.model = tmpvar0[0];
                this.graphics = tmpvar0[1];
                var ok = tmpvar0[2];
            }
            if (ok) {
                this.model.rpar = new ScilabDouble([this.satur]);
                this.model.ipar = new ScilabDouble([this.sgn]);
                this.graphics.exprs = new ScilabDouble(this.exprs);
                this.x.graphics = this.graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new Summation(this.x);
    }
}
