/* autogenerated from "macros/NonLinear/LOGBLK_f.sci" */
function LOGBLK_f() {
    LOGBLK_f.prototype.define = function LOGBLK_f() {
        var in1 = 1;
        this.a = math.E;
        this.model = scicos_model();
        this.model.sim = new ScilabString(["logblk"]);
        this.model.in = new ScilabDouble([-1]);
        this.model.out = new ScilabDouble([-1]);
        this.model.rpar = new ScilabDouble([this.a]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabDouble([true,false]);
        this.exprs = "%e";
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"LOGBLK_f\",sz(1),sz(2));"]);
        this.x = standard_define([2,2],this.model,this.exprs,this.gr_i);
        return new BasicBlock(this.x);
    }
    LOGBLK_f.prototype.details = function LOGBLK_f() {
        return this.x;
    }
    LOGBLK_f.prototype.get = function LOGBLK_f() {
        var options = {
        }
        return options;
    }
    LOGBLK_f.prototype.set = function LOGBLK_f() {
        this.a = parseFloat(arguments[0]["a"])
        this.exprs = parseFloat(arguments[0]["exprs"])
        this.exprs = this.graphics.exprs;
        if (size(this.exprs,"*")==2) {
            this.exprs = this.exprs[2-1];
        }
        while (true) {
            [ok,this.a,this.exprs] = scicos_getvalue("Set log block parameters","Basis (>1)",list("vec",1),this.exprs);
            if (!ok) {
                break;
            }
            if (this.a<=1) {
                message("Basis must be larger than 1");
            } else {
                if (ok) {
                    this.graphics.exprs = new ScilabDouble([this.exprs]);
                    this.model.rpar = new ScilabDouble([this.a]);
                    this.x.graphics = this.graphics;
                    this.x.model = this.model;
                    break;
                }
            }
        }
        return new BasicBlock(this.x);
    }
}
