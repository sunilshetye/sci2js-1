/* autogenerated from "macros/NonLinear/FSV_f.sci" */
function FSV_f() {
    FSV_f.prototype.define = function FSV_f() {
        var in1 = 1;
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["fsv"]), new ScilabDouble([1]));
        this.model.in = new ScilabDouble([in1]);
        this.model.out = new ScilabDouble([in1]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabBoolean([true,false]);
        this.exprs = " ";
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"FSV_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]),this.model,new ScilabString([this.exprs]),this.gr_i);
        return new BasicBlock(this.x);
    }
    FSV_f.prototype.details = function FSV_f() {
        return this.x;
    }
    FSV_f.prototype.get = function FSV_f() {
        alert("parameters cannot be modified");
    }
    FSV_f.prototype.set = function FSV_f() {
        return new BasicBlock(this.x);
    }
}
