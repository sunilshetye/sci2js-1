/* autogenerated from "macros/Linear/CLSS_f.sci" */
function CLSS_f() {
    CLSS_f.prototype.define = function CLSS_f() {
        this.x0 = 0;
        this.A = -1;
        this.B = 1;
        this.C = 1;
        this.D = 0;
        var in1 = 1;
        var out = 1;
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["csslti"]), new ScilabDouble([1]));
        this.model.in1 = new ScilabDouble([in1]);
        this.model.out = new ScilabDouble([out]);
        this.model.state = new ScilabDouble([this.x0]);
        this.model.rpar = new ScilabDouble([this.A.slice()],[this.B.slice()],[this.C.slice()],[this.D.slice()]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = [false,true];
        var exprs = [[strcat(sci2exp(this.A))],[strcat(sci2exp(this.B))],[strcat(sci2exp(this.C))],[strcat(sci2exp(this.D))],[strcat(sci2exp(this.x0))]];
        var gr_i = [];
        this.x = standard_define([4,2],this.model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    CLSS_f.prototype.details = function CLSS_f() {
        return this.x;
    }
    CLSS_f.prototype.get = function CLSS_f() {
        var options = {
            A:["A matrix",this.A],
            B:["B matrix",this.B],
            C:["C matrix",this.C],
            D:["D matrix",this.D],
            x0:["Initial state",this.x0],
        }
        return options;
    }
    CLSS_f.prototype.set = function CLSS_f() {
        this.A = parseFloat(arguments[0]["A"])
        this.B = parseFloat(arguments[0]["B"])
        this.C = parseFloat(arguments[0]["C"])
        this.D = parseFloat(arguments[0]["D"])
        this.x0 = parseFloat(arguments[0]["x0"])
        this.x = arg1;
        var graphics = arg1.graphics;
        var exprs = graphics.exprs;
        if (size(exprs,"*")==7) {
            var exprs = exprs[[1:4,7]-1];
        }
        this.model = arg1.model;
        while (true) {
            [ok,this.A,this.B,this.C,this.D,this.x0,exprs] = scicos_getvalue("Set continuous linear system parameters",["A matrix","B matrix","C matrix","D matrix","Initial state"],list("mat",[-1,-1],"mat",["size(%1,2)","-1"],"mat",["-1","size(%1,2)"],"mat",[-1,-1],"vec","size(%1,2)"),exprs);
            if (!ok) {
                break;
            }
            var out = size(this.C,1);
            if (out==0) {
                var out = [];
            }
            var in1 = size(this.B,2);
            if (in1==0) {
                var in1 = [];
            }
            var tmpvar0 = size(this.A)
            var ms = tmpvar0[0]
            var ns = tmpvar0[1];
            if (ms!=ns) {
                message("A matrix must be square");
            } else {
                var tmpvar1 = check_io(this.model,graphics,in1,out,[],[])
                this.model = tmpvar1[0]
                var graphics = tmpvar1[1]
                var ok = tmpvar1[2];
                if (ok) {
                    graphics.exprs = exprs;
                    var rpar = [[this.A.slice()],[this.B.slice()],[this.C.slice()],[this.D.slice()]];
                    if (this.D!=[]) {
                        if (norm(this.D,1)!=0) {
                            var mmm = [true,true];
                        } else {
                            var mmm = [false,true];
                        }
                        if (or(this.model.dep_ut!=mmm)) {
                            this.model.dep_ut = mmm;
                        }
                    } else {
                        this.model.dep_ut = [false,true];
                    }
                    this.model.state = this.x0.slice();
                    this.model.rpar = new ScilabDouble(rpar);
                    this.x.graphics = graphics;
                    this.x.model = this.model;
                    break;
                }
            }
        }
        return new BasicBlock(this.x);
    }
}
