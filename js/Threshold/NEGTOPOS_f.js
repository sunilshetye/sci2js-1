/* autogenerated from "macros/Threshold/NEGTOPOS_f.sci" */
function NEGTOPOS_f() {
    NEGTOPOS_f.prototype.define = function NEGTOPOS_f() {
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["zcross"]), new ScilabDouble([1]));
        this.model.nzcross = new ScilabDouble([1]);
        this.model.in = new ScilabDouble([1]);
        this.model.evtout = new ScilabDouble([1]);
        this.model.rpar = new ScilabDouble([-1],[-1],[0],[-1]);
        this.model.blocktype = new ScilabString(["z"]);
        this.model.firing = new ScilabDouble([-1]);
        this.model.dep_ut = new ScilabDouble([true,false]);
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"NEGTOPOS_f\",sz(1),sz(2));"]);
        this.x = standard_define([2,2],this.model,[],this.gr_i);
        return new BasicBlock(this.x);
    }
    NEGTOPOS_f.prototype.details = function NEGTOPOS_f() {
        return this.x;
    }
    NEGTOPOS_f.prototype.get = function NEGTOPOS_f() {
        var options = {
        }
        return options;
    }
    NEGTOPOS_f.prototype.set = function NEGTOPOS_f() {
        this.x.model.firing = -1;
        return new BasicBlock(this.x);
    }
}
