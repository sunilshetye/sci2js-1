/* autogenerated from "macros/Sources/RAND_m.sci" */
function RAND_m() {
    RAND_m.prototype.define = function RAND_m() {
        this.a = 0;
        this.b = 1;
        var dt = 0;
        this.flag = 0;
        var function_name = "rndblk_m";
        var funtyp = 4;
        this.model = scicos_model();
        this.model.sim = list(new ScilabString([function_name]), new ScilabDouble([funtyp]));
        this.model.in = new ScilabDouble([]);
        this.model.in2 = new ScilabDouble([]);
        this.model.intyp = new ScilabDouble([]);
        this.model.out = new ScilabDouble([1]);
        this.model.out2 = new ScilabDouble([1]);
        this.model.outtyp = new ScilabDouble([1]);
        this.model.evtin = new ScilabDouble([1]);
        this.model.evtout = new ScilabDouble([]);
        this.model.state = new ScilabDouble([]);
        this.model.dstate = new ScilabDouble([int(rand()*(10^7-1))],[0*this.a.slice()]);
        this.model.rpar = new ScilabDouble([this.a.slice(),this.b.slice()]);
        this.model.ipar = new ScilabDouble([this.flag]);
        this.model.blocktype = new ScilabString(["d"]);
        this.model.firing = new ScilabDouble([]);
        this.model.dep_ut = new ScilabBoolean([false,false]);
        this.exprs = [[sci2exp(1)],[string(this.flag)],[sci2exp([this.a])],[sci2exp([this.b])],[sci2exp([this.model.dstate[1-1],int(rand()*(10^7-1))])]];
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"RAND_m\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3,2]),this.model,new ScilabDouble(this.exprs),this.gr_i);
        return new BasicBlock(this.x);
    }
    RAND_m.prototype.details = function RAND_m() {
        return this.x;
    }
    RAND_m.prototype.get = function RAND_m() {
        var options = {
            typ:["Datatype(1=real double  2=complex)",this.typ],
            flag:["flag",this.flag],
            a:["A",this.a],
            b:["B",this.b],
            seed_c:["SEED",this.seed_c],
        }
        return options;
    }
    RAND_m.prototype.set = function RAND_m() {
        this.typ = inverse(arguments[0]["typ"])
        this.flag = parseFloat(arguments[0]["flag"])
        this.a = parseFloat(arguments[0]["a"])
        this.b = parseFloat(arguments[0]["b"])
        this.seed_c = arguments[0]["seed_c"]
        this.exprs = arguments[0]["exprs"]
        this.exprs = this.graphics.exprs;
        if (size(this.exprs,"*")==14) {
            this.exprs[9-1] = [];
        }
        while (true) {
            [ok,this.typ,this.flag,this.a,this.b,this.seed_c,this.exprs] = scicos_getvalue([["Set Random generator block parameters"],["flag = 0 : Uniform distribution A is min and A+B max"],["flag = 1 : Normal distribution A is mean and B deviation"],[" "],["A and B must be matrix with equal sizes"]],["Datatype(1=real double  2=complex)","flag","A","B","SEED"],list("vec",1,"vec",1,"mat",[-1,-2],"mat","[-1 -2]","mat",[1,2]),this.exprs);
            if (!ok) {
                break;
            }
            if (this.flag!=0&&this.flag!=1) {
                message("flag must be equal to 1 or 0");
            } else {
                var out = size(this.a);
                if (this.typ==1) {
                    var function_name = "rndblk_m";
                    this.model.rpar = new ScilabDouble([real(this.a.slice())],[real(this.b.slice())]);
                    this.model.dstate = new ScilabDouble([this.seed_c[1-1]],[0*real(this.a.slice())]);
                    var ot = 1;
                } else if (this.typ==2) {
                    var function_name = "rndblkz_m";
                    var ot = 2;
                    this.model.rpar = new ScilabDouble([real(this.a.slice())],[imag(this.a.slice())],[real(this.b.slice())],[imag(this.b.slice())]);
                    this.model.dstate = new ScilabDouble([this.seed_c.slice()],[0*[[real(this.a.slice())],[imag(this.a.slice())]]]);
                } else {
                    message("Datatype is not supported");
                    var ok = false;
                }
                if (ok) {
                    var tmpvar0 = set_io(this.model,this.graphics,list([],[]),list(out,ot),1,[]);
                    this.model = tmpvar0[0];
                    this.graphics = tmpvar0[1];
                    var ok = tmpvar0[2];
                    if (ok) {
                        this.model.sim = list(new ScilabString([function_name]), new ScilabDouble([4]));
                        this.graphics.exprs = new ScilabDouble([this.exprs]);
                        this.model.ipar = new ScilabDouble([this.flag]);
                        this.x.graphics = this.graphics;
                        this.x.model = this.model;
                        break;
                    }
                }
            }
        }
        return new BasicBlock(this.x);
    }
}
