/* autogenerated from "macros/Sources/SAWTOOTH_f.sci" */
function SAWTOOTH_f() {
    SAWTOOTH_f.prototype.define = function SAWTOOTH_f() {
        this.model = scicos_model();
        this.model.sim = new ScilabString(["sawtth"]);
        this.model.out = new ScilabDouble([1]);
        this.model.evtin = new ScilabDouble([1]);
        this.model.dstate = new ScilabDouble([0]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabBoolean([false,true]);
        this.exprs = " ";
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"SAWTOOTH_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3,2]),this.model,new ScilabString([this.exprs]),this.gr_i);
        return new BasicBlock(this.x);
    }
    SAWTOOTH_f.prototype.details = function SAWTOOTH_f() {
        return this.x;
    }
    SAWTOOTH_f.prototype.get = function SAWTOOTH_f() {
        alert("parameters cannot be modified");
    }
    SAWTOOTH_f.prototype.set = function SAWTOOTH_f() {
        return new BasicBlock(this.x);
    }
}
