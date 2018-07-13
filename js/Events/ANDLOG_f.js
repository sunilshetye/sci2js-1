/* autogenerated from "macros/Events/ANDLOG_f.sci" */
function ANDLOG_f() {
    ANDLOG_f.prototype.define = function ANDLOG_f() {
        this.model = scicos_model();
        this.model.sim = new ScilabString(["andlog"]);
        this.model.out = new ScilabDouble([1]);
        this.model.evtin = new ScilabDouble([1],[1]);
        this.model.blocktype = new ScilabString(["d"]);
        this.model.firing = new ScilabDouble([]);
        this.model.dep_ut = new ScilabDouble([false,false]);
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"ANDLOG_f\",sz(1),sz(2));"]);
        this.x = standard_define([3,3],this.model,[],this.gr_i);
        return new BasicBlock(this.x);
    }
    ANDLOG_f.prototype.details = function ANDLOG_f() {
        return this.x;
    }
    ANDLOG_f.prototype.get = function ANDLOG_f() {
        var options = {
        }
        return options;
    }
    ANDLOG_f.prototype.set = function ANDLOG_f() {
        return new BasicBlock(this.x);
    }
}
