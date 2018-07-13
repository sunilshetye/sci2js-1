/* autogenerated from "macros/Linear/CLINDUMMY_f.sci" */
function CLINDUMMY_f() {
    CLINDUMMY_f.prototype.define = function CLINDUMMY_f() {
        var x0 = 0;
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["cdummy"]), new ScilabDouble([4]));
        this.model.state = new ScilabDouble([x0]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.firing = new ScilabDouble([]);
        this.model.dep_ut = new ScilabDouble([false,true]);
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CLINDUMMY_f\",sz(1),sz(2));"]);
        this.x = standard_define([3,2],this.model,[],this.gr_i);
        return new BasicBlock(this.x);
    }
    CLINDUMMY_f.prototype.details = function CLINDUMMY_f() {
        return this.x;
    }
    CLINDUMMY_f.prototype.get = function CLINDUMMY_f() {
        var options = {
        }
        return options;
    }
    CLINDUMMY_f.prototype.set = function CLINDUMMY_f() {
        return new BasicBlock(this.x);
    }
}
