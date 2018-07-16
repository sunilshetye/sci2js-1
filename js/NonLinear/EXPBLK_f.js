/* autogenerated from "macros/NonLinear/EXPBLK_f.sci" */
function EXPBLK_f() {
    EXPBLK_f.prototype.define = function EXPBLK_f() {
        var in1 = 1;
        this.a = math.E;
        this.model = scicos_model();
        this.model.sim = new ScilabString(["expblk"]);
        this.model.in = new ScilabDouble([-1]);
        this.model.out = new ScilabDouble([-1]);
        this.model.rpar = new ScilabDouble([this.a]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabBoolean([true,false]);
        this.exprs = ["%e"];
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"EXPBLK_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]),this.model,new ScilabString(this.exprs),this.gr_i);
        return new BasicBlock(this.x);
    }
    EXPBLK_f.prototype.details = function EXPBLK_f() {
        return this.x;
    }
    EXPBLK_f.prototype.get = function EXPBLK_f() {
        var options = {
        }
        return options;
    }
    EXPBLK_f.prototype.set = function EXPBLK_f() {
        this.a = parseFloat(arguments[0]["a"])
        this.exprs = parseFloat(arguments[0]["exprs"])
        this.exprs = this.graphics.exprs;
        if (size(this.exprs,"*")==2) {
            this.exprs = this.exprs[2-1];
        }
        while (true) {
            [ok,this.a,this.exprs] = scicos_getvalue("Set a^u  block parameters","a (>0)",list("vec",1),this.exprs);
            if (!ok) {
                break;
            }
            if (or(this.a<=0)) {
                message("a^u : a must be positive");
            } else {
                this.graphics.exprs = new ScilabDouble([this.exprs]);
                this.model.rpar = new ScilabDouble([this.a]);
                this.x.graphics = this.graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
