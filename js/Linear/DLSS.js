/* autogenerated from "macros/Linear/DLSS.sci" */
function DLSS() {
    DLSS.prototype.define = function DLSS() {
        this.x0 = 0;
        this.A = -1;
        this.B = 1;
        this.C = 1;
        this.D = 0;
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["dsslti4"]), new ScilabDouble([4]));
        this.model.in1 = new ScilabDouble([1]);
        this.model.out = new ScilabDouble([1]);
        this.model.evtin = new ScilabDouble([1]);
        this.model.dstate = new ScilabDouble(this.x0.slice());
        this.model.rpar = new ScilabDouble([this.A.slice()],[this.B.slice()],[this.C.slice()],[this.D.slice()]);
        this.model.blocktype = new ScilabString(["d"]);
        this.model.dep_ut = new ScilabDouble([false,false]);
        var exprs = [[strcat(sci2exp(this.A))],[strcat(sci2exp(this.B))],[strcat(sci2exp(this.C))],[strcat(sci2exp(this.D))],[strcat(sci2exp(this.x0))]];
        var gr_i = [];
        this.x = standard_define([4,2],this.model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    DLSS.prototype.details = function DLSS() {
        return this.x;
    }
    DLSS.prototype.get = function DLSS() {
        var options = {
            A:["A matrix",this.A],
            B:["B matrix",this.B],
            C:["C matrix",this.C],
            D:["D matrix",this.D],
            x0:["Initial state",this.x0],
        }
        return options;
    }
    DLSS.prototype.set = function DLSS() {
        this.A = parseFloat(arguments[0]["A"])
        this.B = parseFloat(arguments[0]["B"])
        this.C = parseFloat(arguments[0]["C"])
        this.D = parseFloat(arguments[0]["D"])
        this.x0 = parseFloat(arguments[0]["x0"])
        this.x = arg1;
        this.graphics = arg1.graphics;
        var exprs = this.graphics.exprs;
        if (size(exprs,"*")==7) {
            var exprs = exprs[[1:4,7]-1];
        }
        this.model = arg1.model;
        while (true) {
            [ok,this.A,this.B,this.C,this.D,this.x0,exprs] = scicos_getvalue("Set discrete linear system parameters",["A matrix","B matrix","C matrix","D matrix","Initial state"],list("mat",[-1,-1],"mat",["size(%1,2)","-1"],"mat",["-1","size(%1,2)"],"mat",[-1,-1],"vec","size(%1,2)"),exprs);
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
            var tmpvar0 = size(this.A);
            var ms = tmpvar0[0];
            var ns = tmpvar0[1];
            var okD = true;
            if (size(this.D,"*")!=size(this.C,1)*size(this.B,2)) {
                if (size(this.D,"*")==1) {
                    this.D = this.D*ones(this.C*this.B);
                } else if (size(this.D,"*")==0) {
                    this.D = zeros(this.C*this.B);
                } else {
                    var okD = false;
                }
            }
            if (ms!=ns||!okD) {
                message(_("Matrix A is not square or D has wrong dimension"));
            } else {
                var tmpvar1 = check_io(this.model,this.graphics,in1,out,1,[]);
                this.model = tmpvar1[0];
                this.graphics = tmpvar1[1];
                var ok = tmpvar1[2];
                if (ok) {
                    this.graphics.exprs = new ScilabDouble([exprs]);
                    var rpar = [[this.A.slice()],[this.B.slice()],[this.C.slice()],[this.D.slice()]];
                    if (this.D!=[]) {
                        if (norm(this.D,1)!=0) {
                            var mmm = [true,false];
                        } else {
                            var mmm = [false,false];
                        }
                        if (or(this.model.dep_ut!=mmm)) {
                            this.model.dep_ut = new ScilabDouble(mmm);
                        }
                    } else {
                        this.model.dep_ut = new ScilabDouble([false,false]);
                    }
                    this.model.dstate = new ScilabDouble(this.x0.slice());
                    this.model.rpar = new ScilabDouble(rpar);
                    this.x.graphics = this.graphics;
                    this.x.model = this.model;
                    break;
                }
            }
        }
        return new BasicBlock(this.x);
    }
}
