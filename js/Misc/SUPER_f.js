/* autogenerated from "macros/Misc/SUPER_f.sci" */
function SUPER_f() {
    SUPER_f.prototype.define = function SUPER_f() {
        var scs = scicos_diagram();
        scs.props.title = "Super Block";
        var in1 = IN_f("define");
        in1.graphics.orig = [40,40];
        in1.graphics.sz = [20,20];
        var out = OUT_f("define");
        out.graphics.orig = [240,40];
        out.graphics.sz = [20,20];
        scs.objs[1-1] = in1;
        scs.objs[2-1] = out;
        this.model = scicos_model();
        this.model.sim = new ScilabString(["super"]);
        this.model.in = new ScilabDouble([1]);
        this.model.out = new ScilabDouble([1]);
        this.model.rpar = new ScilabDouble([scs]);
        this.model.blocktype = new ScilabString(["h"]);
        this.model.dep_ut = new ScilabBoolean([false,false]);
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"SUPER_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]),this.model,new ScilabDouble([]),this.gr_i);
        return new SuperBlock(this.x);
    }
    SUPER_f.prototype.details = function SUPER_f() {
        return this.x;
    }
    SUPER_f.prototype.get = function SUPER_f() {
        alert("parameters cannot be modified");
    }
    SUPER_f.prototype.set = function SUPER_f() {
        return new SuperBlock(this.x);
    }
}
