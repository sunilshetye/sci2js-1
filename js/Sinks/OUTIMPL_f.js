/* autogenerated from "macros/Sinks/OUTIMPL_f.sci" */
function OUTIMPL_f() {
    OUTIMPL_f.prototype.define = function OUTIMPL_f() {
        this.model = scicos_model();
        this.model.in = new ScilabDouble([-1]);
        this.model.in2 = new ScilabDouble([1]);
        this.prt = 1;
        this.model.sim = new ScilabString(["outimpl"]);
        this.model.ipar = new ScilabDouble([1]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabBoolean([false,false]);
        var mo = modelica();
        mo.model = "PORT";
        mo.inputs = "n";
        this.model.equations = new ScilabDouble([mo]);
        this.exprs = "1";
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"OUTIMPL_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([1,1]),this.model,new ScilabString([this.exprs]),this.gr_i);
        this.x.graphics.in_implicit = ["I"];
        return new ImplicitOutBlock(this.x);
    }
    OUTIMPL_f.prototype.details = function OUTIMPL_f() {
        return this.x;
    }
    OUTIMPL_f.prototype.get = function OUTIMPL_f() {
        alert("parameters cannot be modified");
    }
    OUTIMPL_f.prototype.set = function OUTIMPL_f() {
        this.exprs = this.graphics.exprs;
        if (size(this.exprs,"*")==2) {
            this.exprs = this.exprs[1-1];
        }
        while (true) {
            var ok = true;
            this.prt = parseFloat(arguments[0]["prt"]);
            this.exprs = parseFloat(arguments[0]["exprs"]);
            if (!ok) {
                break;
            }
            this.prt = int(this.prt);
            if (this.prt<=0) {
                block_parameter_error(msprintf("Wrong value for \'Port Number\' parameter: %d.",this.prt),"Strictly positive integer expected.");
            } else {
                if (this.model.ipar!=this.prt) {
                    var needcompile = 4;
                    var y = needcompile;
                }
                this.model.ipar = new ScilabDouble([this.prt]);
                this.graphics.exprs = new ScilabDouble([this.exprs]);
                this.x.graphics = this.graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new ImplicitOutBlock(this.x);
    }
}
