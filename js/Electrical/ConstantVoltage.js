/* autogenerated from "macros/Electrical/ConstantVoltage.sci" */
function ConstantVoltage() {
    ConstantVoltage.prototype.define = function ConstantVoltage() {
        this.V = 0.01;
        this.model = scicos_model();
        this.model.rpar = new ScilabDouble([this.V]);
        this.model.in = new ScilabDouble([1]);
        this.model.out = new ScilabDouble([1]);
        this.model.sim = new ScilabString(["ConstantVoltage"]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabBoolean([false,false]);
        var mo = modelica();
        mo.model = "ConstantVoltage";
        mo.inputs = "p";
        mo.outputs = "n";
        mo.parameters = list("V",list(this.V));
        this.model.equations = new ScilabDouble([mo]);
        this.exprs = string(this.V);
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"ConstantVoltage\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([1.5,1.1]),this.model,new ScilabString([this.exprs]),list(this.gr_i,0));
        this.x.graphics.in_implicit = ["I"];
        this.x.graphics.out_implicit = ["I"];
        return new BasicBlock(this.x);
    }
    ConstantVoltage.prototype.details = function ConstantVoltage() {
        return this.x;
    }
    ConstantVoltage.prototype.get = function ConstantVoltage() {
        alert("parameters cannot be modified");
    }
    ConstantVoltage.prototype.set = function ConstantVoltage() {
        this.exprs = this.graphics.exprs;
        while (true) {
            var ok = true;
            this.V = parseFloat(arguments[0]["V"]);
            this.exprs = arguments[0]["exprs"];
            if (!ok) {
                break;
            }
            this.model.rpar = new ScilabDouble([this.V]);
            this.model.equations.parameters[2-1] = list(new ScilabDouble([this.V]));
            this.graphics.exprs = new ScilabDouble([this.exprs]);
            this.x.graphics = this.graphics;
            this.x.model = this.model;
            break;
        }
        return new BasicBlock(this.x);
    }
}
