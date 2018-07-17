/* autogenerated from "macros/Linear/BIGSOM_f.sci" */
function BIGSOM_f() {
    BIGSOM_f.prototype.define = function BIGSOM_f() {
        this.sgn = [[1],[1]];
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["sum"]), new ScilabDouble([2]));
        this.model.in = new ScilabDouble([-1],[-1]);
        this.model.out = new ScilabDouble([-1]);
        this.model.rpar = new ScilabDouble(this.sgn);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabBoolean([true,false]);
        this.exprs = sci2exp(this.sgn);
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"BIGSOM_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,3]),this.model,new ScilabString([this.exprs]),this.gr_i);
        return new BigSom(this.x);
    }
    BIGSOM_f.prototype.details = function BIGSOM_f() {
        return this.x;
    }
    BIGSOM_f.prototype.get = function BIGSOM_f() {
        alert("parameters cannot be modified");
    }
    BIGSOM_f.prototype.set = function BIGSOM_f() {
        this.exprs = this.graphics.exprs;
        while (true) {
            var ok = true;
            this.sgn = inverse(arguments[0]["sgn"]);
            this.exprs = arguments[0]["exprs"];
            if (!ok) {
                break;
            }
            var in1 = -ones(size(this.sgn,"*"),1);
            var tmpvar0 = check_io(this.model,this.graphics,in1,-1,[],[]);
            this.model = tmpvar0[0];
            this.graphics = tmpvar0[1];
            var ok = tmpvar0[2];
            if (ok) {
                this.model.rpar = new ScilabDouble(this.sgn.slice());
                this.graphics.exprs = new ScilabDouble([this.exprs]);
                this.x.graphics = this.graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BigSom(this.x);
    }
}
