/* autogenerated from "macros/Sources/CONST_f.sci" */
function CONST_f() {
    CONST_f.prototype.define = function CONST_f() {
        this.C = 1;
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["cstblk"]), new ScilabDouble([1]));
        this.model.in = new ScilabDouble([]);
        this.model.out = new ScilabDouble([1]);
        this.model.rpar = new ScilabDouble([this.C]);
        this.model.blocktype = new ScilabString(["d"]);
        this.model.dep_ut = new ScilabBoolean([false,false]);
        this.exprs = strcat(sci2exp(this.C));
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CONST_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]),this.model,new ScilabDouble([this.exprs]),this.gr_i);
        return new BasicBlock(this.x);
    }
    CONST_f.prototype.details = function CONST_f() {
        return this.x;
    }
    CONST_f.prototype.get = function CONST_f() {
        var options = {
        }
        return options;
    }
    CONST_f.prototype.set = function CONST_f() {
        this.C = parseFloat(arguments[0]["C"])
        this.exprs = arguments[0]["exprs"]
        this.exprs = this.graphics.exprs;
        while (true) {
            [ok,this.C,this.exprs] = scicos_getvalue(["Set Contant Block"],"Constant",list("vec",-1),this.exprs);
            if (!ok) {
                break;
            }
            var nout = size(this.C,"*");
            if (nout==0) {
                message("C must have at least one element");
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
