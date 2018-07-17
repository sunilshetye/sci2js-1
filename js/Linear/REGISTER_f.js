/* autogenerated from "macros/Linear/REGISTER_f.sci" */
function REGISTER_f() {
    REGISTER_f.prototype.define = function REGISTER_f() {
        this.z0 = zeros(10,1);
        this.model = scicos_model();
        this.model.sim = new ScilabString(["delay"]);
        this.model.in = new ScilabDouble([1]);
        this.model.out = new ScilabDouble([1]);
        this.model.evtin = new ScilabDouble([1]);
        this.model.dstate = new ScilabDouble([this.z0]);
        this.model.blocktype = new ScilabString(["d"]);
        this.model.dep_ut = new ScilabBoolean([false,false]);
        this.exprs = strcat(string(this.z0),";");
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"REGISTER_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2.5,2.5]),this.model,new ScilabDouble([this.exprs]),this.gr_i);
        return new BasicBlock(this.x);
    }
    REGISTER_f.prototype.details = function REGISTER_f() {
        return this.x;
    }
    REGISTER_f.prototype.get = function REGISTER_f() {
        alert("parameters cannot be modified");
    }
    REGISTER_f.prototype.set = function REGISTER_f() {
        this.exprs = this.graphics.exprs;
        while (true) {
            var ok = true;
            this.z0 = parseFloat(arguments[0]["z0"]);
            this.exprs = arguments[0]["exprs"];
            if (!ok) {
                break;
            }
            if (prod(size(this.z0))<1) {
                message("Register length must be at least 1");
                var ok = false;
            }
            if (ok) {
                this.graphics.exprs = new ScilabDouble([this.exprs]);
                this.model.dstate = new ScilabDouble([this.z0]);
                this.x.graphics = this.graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
