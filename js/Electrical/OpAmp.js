/* autogenerated from "macros/Electrical/OpAmp.sci" */
function OpAmp() {
    OpAmp.prototype.define = function OpAmp() {
        var S = [];
        var Z = [];
        this.model = scicos_model();
        this.model.sim = new ScilabString(["OpAmp"]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabBoolean([true,false]);
        var mo = modelica();
        mo.model = this.model.sim;
        mo.inputs = [["in_p"],["in_n"]];
        mo.outputs = ["out"];
        mo.parameters = list(S,Z);
        this.model.equations = new ScilabDouble([mo]);
        this.model.in = new ScilabDouble([ones(size(mo.inputs,"*"),1)]);
        this.model.out = new ScilabDouble([ones(size(mo.outputs,"*"),1)]);
        this.model.rpar = new ScilabDouble(Z);
        this.exprs = string(Z);
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"OpAmp\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3,5]),this.model,new ScilabString([this.exprs]),this.gr_i);
        this.x.graphics.in_implicit = [["I"],["I"]];
        this.x.graphics.out_implicit = ["I"];
        return new BasicBlock(this.x);
    }
    OpAmp.prototype.details = function OpAmp() {
        return this.x;
    }
    OpAmp.prototype.get = function OpAmp() {
        var options = {
            OLGain:["Open Loop Gain",this.OLGain],
            SatH:["Positive saturation voltage",this.SatH],
            SatL:["Negative saturation voltage",this.SatL],
        }
        return options;
    }
    OpAmp.prototype.set = function OpAmp() {
        this.OLGain = arguments[0]["OLGain"]
        this.SatH = arguments[0]["SatH"]
        this.SatL = arguments[0]["SatL"]
        this.exprs = arguments[0]["exprs"]
        this.exprs = this.graphics.exprs;
        while (false) {
            [ok,this.OLGain,this.SatH,this.SatL,this.exprs] = scicos_getvalue("Set the Operational Amplifier parameters",["Open Loop Gain","Positive saturation voltage","Negative saturation voltage"],list("vec",1,"vec",1,"vec",1),this.exprs);
            if (!ok) {
                break;
            }
            this.model.equations.parameters[2-1] = list(new ScilabDouble([this.OLGain]), new ScilabDouble([this.SatH]), new ScilabDouble([this.SatL]));
            this.graphics.exprs = new ScilabDouble([this.exprs]);
            this.x.graphics = this.graphics;
            this.x.model = this.model;
            break;
        }
        return new BasicBlock(this.x);
    }
}
