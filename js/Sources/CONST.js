/* autogenerated from "macros/Sources/CONST.sci" */
function CONST() {
    CONST.prototype.define = function CONST() {
        this.C = 1;
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["cstblk4"]), new ScilabDouble([4]));
        this.model.in = new ScilabDouble([]);
        this.model.out = new ScilabDouble([1]);
        this.model.rpar = new ScilabDouble([this.C]);
        this.model.blocktype = new ScilabString(["d"]);
        this.model.dep_ut = new ScilabBoolean([false,false]);
        this.exprs = strcat(sci2exp(this.C));
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CONST\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]),this.model,new ScilabDouble([this.exprs]),this.gr_i);
        return new BasicBlock(this.x);
    }
    CONST.prototype.details = function CONST() {
        return this.x;
    }
    CONST.prototype.get = function CONST() {
        var options = {
        }
        return options;
    }
    CONST.prototype.set = function CONST() {
        this.C = parseFloat(arguments[0]["C"])
        this.exprs = arguments[0]["exprs"]
        this.exprs = this.graphics.exprs;
        while (true) {
            [ok,this.C,this.exprs] = scicos_getvalue(["Set Contant Block"],"Constant",list("vec",-1),this.exprs);
            if (!ok) {
                break;
            }
            var sz = size(this.C);
            var nout = size(this.C,"*");
            if (nout==0) {
                message("C must have at least one element");
            } else if (and(sz>1)) {
                message("C matrix is not supported, use CONST_m instead");
            } else {
                this.model.rpar = new ScilabDouble(this.C.slice());
                this.model.out = new ScilabDouble([nout]);
                this.graphics.exprs = new ScilabDouble([this.exprs]);
                this.x.graphics = this.graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
