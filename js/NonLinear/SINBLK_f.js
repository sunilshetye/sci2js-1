/* autogenerated from "macros/NonLinear/SINBLK_f.sci" */
function SINBLK_f() {
    SINBLK_f.prototype.define = function SINBLK_f() {
        this.model = scicos_model();
        this.model.sim = new ScilabString(["sinblk"]);
        this.model.in = new ScilabDouble([-1]);
        this.model.out = new ScilabDouble([-1]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabBoolean([true,false]);
        var exprs = " ";
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"SINBLK_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]),this.model,new ScilabString([exprs]),gr_i);
        return new BasicBlock(this.x);
    }
    SINBLK_f.prototype.details = function SINBLK_f() {
        return this.x;
    }
    SINBLK_f.prototype.get = function SINBLK_f() {
        alert("parameters cannot be modified");
    }
    SINBLK_f.prototype.set = function SINBLK_f() {
        return new BasicBlock(this.x);
    }
    SINBLK_f.prototype.get_popup_title = function SINBLK_f() {
        return;
    }
    SINBLK_f.prototype.getContainer = function SINBLK_f() { return new BasicBlock(this.x); }
}
