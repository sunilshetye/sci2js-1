/* autogenerated from "macros/Linear/SAMPHOLD.sci" */
function SAMPHOLD() {
    SAMPHOLD.prototype.define = function SAMPHOLD() {
        var in1 = -1;
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["samphold4"]), new ScilabDouble([4]));
        this.model.in = new ScilabDouble([-1]);
        this.model.out = new ScilabDouble([-1]);
        this.model.evtin = new ScilabDouble([1]);
        this.model.blocktype = new ScilabString(["d"]);
        this.model.dep_ut = new ScilabDouble([true,false]);
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"SAMPHOLD\",sz(1),sz(2));"]);
        this.x = standard_define([2,2],this.model," ",this.gr_i);
        return new BasicBlock(this.x);
    }
    SAMPHOLD.prototype.details = function SAMPHOLD() {
        return this.x;
    }
    SAMPHOLD.prototype.get = function SAMPHOLD() {
        var options = {
        }
        return options;
    }
    SAMPHOLD.prototype.set = function SAMPHOLD() {
        this.x.model.firing = [];
        return new BasicBlock(this.x);
    }
}
