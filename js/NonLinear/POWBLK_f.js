/* autogenerated from "macros/NonLinear/POWBLK_f.sci" */
function POWBLK_f() {
    POWBLK_f.prototype.define = function POWBLK_f() {
        var in1 = 1;
        this.a = 1.5;
        this.model = scicos_model();
        this.model.sim = new ScilabString(["powblk"]);
        this.model.in1 = new ScilabDouble([-1]);
        this.model.out = new ScilabDouble([-1]);
        this.model.rpar = new ScilabDouble([this.a]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = [true,false];
        var exprs = string(this.a);
        var gr_i = [];
        this.x = standard_define([2,2],this.model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    POWBLK_f.prototype.details = function POWBLK_f() {
        return this.x;
    }
    POWBLK_f.prototype.get = function POWBLK_f() {
        var options = {
        }
        return options;
    }
    POWBLK_f.prototype.set = function POWBLK_f() {
        this.a = parseFloat(arguments[0]["a"])
        this.x = arg1;
        var graphics = arg1.graphics;
        var exprs = graphics.exprs;
        this.model = arg1.model;
        if (size(exprs,"*")==2) {
            var exprs = exprs[2-1];
        }
        while (true) {
            [ok,this.a,exprs] = scicos_getvalue("Set u^a block parameters","to the power of",list("vec",1),exprs);
            if (!ok) {
                break;
            }
            graphics.exprs = exprs;
            if (this.a==int(this.a)) {
                this.model.ipar = new ScilabDouble([this.a]);
                this.model.rpar = [];
            } else {
                this.model.rpar = new ScilabDouble([this.a]);
                this.model.ipar = [];
            }
            this.model.firing = [];
            this.x.graphics = graphics;
            this.x.model = this.model;
            break;
        }
        return new BasicBlock(this.x);
    }
}
