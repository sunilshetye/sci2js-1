/* autogenerated from "macros/Misc/CBLOCK4.sci" */
function CBLOCK4() {
    CBLOCK4.prototype.define = function CBLOCK4() {
        var funam = "toto";
        this.model = scicos_model();
        this.model.sim = list(new ScilabString([" "]), new ScilabDouble([2004]));
        this.model.in1 = new ScilabDouble([1]);
        this.model.in2 = new ScilabDouble([1]);
        this.model.intyp = new ScilabDouble([1]);
        this.model.out = new ScilabDouble([1]);
        this.model.out2 = new ScilabDouble([1]);
        this.model.outtyp = new ScilabDouble([1]);
        this.model.dep_ut = [true,false];
        var label = list([[funam],["n"],[sci2exp([this.model.in1,this.model.in2])],[sci2exp(this.model.intyp)],[sci2exp([this.model.out,this.model.out2])],[sci2exp(this.model.outtyp)],[sci2exp(this.model.evtin)],[sci2exp(this.model.evtout)],[sci2exp(this.model.state)],[sci2exp(this.model.dstate)],[sci2exp(this.model.odstate)],[sci2exp(this.model.rpar)],[sci2exp(this.model.ipar)],[sci2exp(this.model.opar)],[sci2exp(this.model.nmode)],[sci2exp(this.model.nzcross)],[sci2exp(this.model.firing)],["y"],["n"]],[]);
        var gr_i = [];
        this.x = standard_define([4,2],this.model,label,gr_i);
        return new BasicBlock(this.x);
    }
    CBLOCK4.prototype.details = function CBLOCK4() {
        return this.x;
    }
    CBLOCK4.prototype.get = function CBLOCK4() {
        var options = {
            function_name:["Simulation function",this.function_name],
            impli:["Is block implicit? (y,n)",this.impli],
            in1:["Input ports sizes",this.in1],
            it:["Input ports type",this.it],
            out:["Output port sizes",this.out],
            ot:["Output ports type",this.ot],
            ci:["Input event ports sizes",this.ci],
            co:["Output events ports sizes",this.co],
            xx:["Initial continuous state",this.xx],
            z:["Initial discrete state",this.z],
            oz:["Initial object state",this.oz],
            rpar:["Real parameters vector",this.rpar],
            ipar:["Integer parameters vector",this.ipar],
            opar:["Object parameters list",this.opar],
            nmode:["Number of modes",this.nmode],
            nzcr:["Number of zero crossings",this.nzcr],
            auto0:["Initial firing vector (<0 for no firing)",this.auto0],
            depu:["Direct feedthrough (y or n)",this.depu],
            dept:["Time dependence (y or n)",this.dept],
        }
        return options;
    }
    CBLOCK4.prototype.set = function CBLOCK4() {
        this.function_name = arguments[0]["function_name"]
        this.impli = arguments[0]["impli"]
        this.in1 = arguments[0]["in1"]
        this.it = arguments[0]["it"]
        this.out = arguments[0]["out"]
        this.ot = arguments[0]["ot"]
        this.ci = parseFloat(arguments[0]["ci"])
        this.co = parseFloat(arguments[0]["co"])
        this.xx = inverse(arguments[0]["xx"])
        this.z = inverse(arguments[0]["z"])
        this.oz = arguments[0]["oz"]
        this.rpar = inverse(arguments[0]["rpar"])
        this.ipar = parseFloat(arguments[0]["ipar"])
        this.opar = arguments[0]["opar"]
        this.nmode = arguments[0]["nmode"]
        this.nzcr = arguments[0]["nzcr"]
        this.auto0 = arguments[0]["auto0"]
        this.depu = parseBoolean(arguments[0]["depu"])
        this.dept = parseBoolean(arguments[0]["dept"])
        this.lab = arguments[0]["lab"]
        this.x = arg1;
        this.model = arg1.model;
        var graphics = arg1.graphics;
        var label = graphics.exprs;
        while (true) {
            [ok,this.function_name,this.impli,this.in1,this.it,this.out,this.ot,this.ci,this.co,this.xx,this.z,this.oz,this.rpar,this.ipar,this.opar,this.nmode,this.nzcr,this.auto0,this.depu,this.dept,this.lab] = scicos_getvalue("Set C-Block4 block parameters",["Simulation function","Is block implicit? (y,n)","Input ports sizes","Input ports type","Output port sizes","Output ports type","Input event ports sizes","Output events ports sizes","Initial continuous state","Initial discrete state","Initial object state","Real parameters vector","Integer parameters vector","Object parameters list","Number of modes","Number of zero crossings","Initial firing vector (<0 for no firing)","Direct feedthrough (y or n)","Time dependence (y or n)"],list("str",1,"str",1,"mat",[-1,2],"vec",-1,"mat",[-1,2],"vec",-1,"vec",-1,"vec",-1,"vec",-1,"vec",-1,"lis",-1,"vec",-1,"vec",-1,"lis",-1,"vec",1,"vec",1,"vec","sum(%8)","str",1,"str",1),label[1-1]);
            if (!ok) {
                break;
            }
            label[1-1] = this.lab;
            var funam = stripblanks(this.function_name);
            this.xx = this.xx.slice();
            this.z = this.z.slice();
            this.rpar = this.rpar.slice();
            this.ipar = int(this.ipar.slice());
            var nx = size(this.xx,1);
            var nz = size(this.z,1);
            this.ci = int(this.ci.slice());
            var nevin = size(this.ci,1);
            this.co = int(this.co.slice());
            var nevout = size(this.co,1);
            if (part(this.impli,1)=="y") {
                var funtyp = 12004;
            } else {
                var funtyp = 2004;
            }
            if ([[this.ci],[this.co]]!=[]) {
                if (max([[this.ci],[this.co]])>1) {
                    message("vector event links not supported");
                    var ok = false;
                }
            }
            if (ok) {
                this.depu = stripblanks(this.depu);
                if (part(this.depu,1)=="y") {
                    this.depu = true;
                } else {
                    this.depu = false;
                }
                this.dept = stripblanks(this.dept);
                if (part(this.dept,1)=="y") {
                    this.dept = true;
                } else {
                    this.dept = false;
                }
                var dep_ut = [this.depu,this.dept];
                if (funam==" ") {
                    break;
                }
                if (this.model.sim[1-1]!=funam||sign(size(this.model.state,"*"))!=sign(nx)||sign(size(this.model.dstate,"*"))!=sign(nz)||this.model.nzcross!=this.nzcr||sign(size(this.model.evtout,"*"))!=sign(nevout)) {
                    var tt = [];
                }
                var tt = label[2-1];
                var tmpvar0 = set_io(this.model,graphics,list(this.in1,this.it),list(this.out,this.ot),this.ci,this.co)
                this.model = tmpvar0[0]
                var graphics = tmpvar0[1]
                var ok = tmpvar0[2];
            }
            if (ok) {
                while (true) {
                    var tmpvar1 = CC4(funam,tt)
                    var ok = tmpvar1[0]
                    var tt = tmpvar1[1]
                    var cancel = tmpvar1[2];
                    if (!ok) {
                        if (cancel) {
                            break;
                        }
                    } else {
                        this.model.sim = list(new ScilabDouble([funam]), new ScilabDouble([funtyp]));
                        this.model.state = this.xx;
                        this.model.dstate = this.z;
                        this.model.odstate = new ScilabDouble([this.oz]);
                        this.model.rpar = this.rpar;
                        this.model.ipar = new ScilabDouble([this.ipar]);
                        this.model.opar = new ScilabDouble([this.opar]);
                        this.model.firing = new ScilabDouble([this.auto0]);
                        this.model.nzcross = new ScilabDouble([this.nzcr]);
                        this.model.nmode = new ScilabDouble([this.nmode]);
                        this.model.dep_ut = dep_ut;
                        label[2-1] = tt;
                        this.x.model = this.model;
                        graphics.exprs = label;
                        this.x.graphics = graphics;
                        break;
                    }
                }
                if (ok||cancel) {
                    break;
                }
            }
        }
        return new BasicBlock(this.x);
    }
}
