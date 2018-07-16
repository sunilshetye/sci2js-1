/* autogenerated from "macros/Linear/DERIV.sci" */
function DERIV() {
    DERIV.prototype.define = function DERIV() {
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["deriv"]), new ScilabDouble([4]));
        this.model.in = new ScilabDouble([-1]);
        this.model.out = new ScilabDouble([-1]);
        this.model.blocktype = new ScilabString(["x"]);
        this.model.dep_ut = new ScilabBoolean([true,false]);
        this.exprs = [];
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"DERIV\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]),this.model,new ScilabDouble(this.exprs),this.gr_i);
        return new BasicBlock(this.x);
    }
    DERIV.prototype.details = function DERIV() {
        return this.x;
    }
    DERIV.prototype.get = function DERIV() {
        var options = {
        }
        return options;
    }
    DERIV.prototype.set = function DERIV() {
        return new BasicBlock(this.x);
    }
}
