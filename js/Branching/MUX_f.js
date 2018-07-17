/* autogenerated from "macros/Branching/MUX_f.sci" */
function MUX_f() {
    MUX_f.prototype.define = function MUX_f() {
        this.in1 = 2;
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["mux"]), new ScilabDouble([1]));
        this.model.in = new ScilabDouble(-transpose([1:this.in1]));
        this.model.out = new ScilabDouble([0]);
        this.model.ipar = new ScilabDouble([this.in1]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabBoolean([true,false]);
        this.exprs = string(this.in1);
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"MUX_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([0.5,2]),this.model,new ScilabString([this.exprs]),this.gr_i);
        return new BasicBlock(this.x);
    }
    MUX_f.prototype.details = function MUX_f() {
        return this.x;
    }
    MUX_f.prototype.get = function MUX_f() {
        alert("parameters cannot be modified");
    }
    MUX_f.prototype.set = function MUX_f() {
        this.exprs = this.graphics.exprs;
        while (true) {
            var ok = true;
            this.in1 = parseFloat(arguments[0]["in1"]);
            this.exprs = arguments[0]["exprs"];
            if (!ok) {
                break;
            }
            if (size(this.in1,"*")==1) {
                if (this.in1<2||this.in1>8) {
                    message("Block must have at least two input ports and at most eight");
                    var ok = false;
                } else {
                    var tmpvar0 = check_io(this.model,this.graphics,-transpose([1:this.in1]),0,[],[]);
                    this.model = tmpvar0[0];
                    this.graphics = tmpvar0[1];
                    var ok = tmpvar0[2];
                }
            } else {
                if (size(this.in1,"*")<2||size(this.in1,"*")>8||or(this.in1==0)) {
                    message([["Block must have at least two input ports"],["and at most eight, and size 0 is not allowed. "]]);
                    var ok = false;
                } else {
                    if (min(this.in1)<0) {
                        var nout = 0;
                    } else {
                        var nout = sum(this.in1);
                    }
                    var tmpvar1 = check_io(this.model,this.graphics,this.in1.slice(),nout,[],[]);
                    this.model = tmpvar1[0];
                    this.graphics = tmpvar1[1];
                    var ok = tmpvar1[2];
                    if (ok) {
                        this.in1 = size(this.in1,"*");
                    }
                }
            }
            if (ok) {
                this.graphics.exprs = new ScilabDouble([this.exprs]);
                this.model.ipar = new ScilabDouble([this.in1]);
                this.x.graphics = this.graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
