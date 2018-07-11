/* autogenerated from "macros/Threshold/NEGTOPOS_f.sci" */
function NEGTOPOS_f() {
    NEGTOPOS_f.prototype.define = function NEGTOPOS_f() {
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["zcross"]), new ScilabDouble([1]));
        this.model.nzcross = new ScilabDouble([1]);
        this.model.in1 = new ScilabDouble([1]);
        this.model.evtout = new ScilabDouble([1]);
        this.model.rpar = new ScilabDouble([-1],[-1],[0],[-1]);
        this.model.blocktype = new ScilabString(["z"]);
        this.model.firing = new ScilabDouble([-1]);
        this.model.dep_ut = [true,false];
        var gr_i = [];
        this.x = standard_define([2,2],this.model,[],gr_i);
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
        this.x = arg1;
        this.x.model.firing = -1;
        return new BasicBlock(this.x);
    }
}
