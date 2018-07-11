/* autogenerated from "macros/Electrical/ConstantVoltage.sci" */
function ConstantVoltage() {
    ConstantVoltage.prototype.define = function ConstantVoltage() {
        this.V = 0.01;
        this.model = scicos_model();
        this.model.rpar = new ScilabDouble([this.V]);
        this.model.in1 = new ScilabDouble([1]);
        this.model.out = new ScilabDouble([1]);
        this.model.sim = new ScilabString(["ConstantVoltage"]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = [false,false];
        var mo = modelica();
        mo.model = "ConstantVoltage";
        mo.inputs = "p";
        mo.outputs = "n";
        mo.parameters = list("V",list(this.V));
        this.model.equations = new ScilabDouble([mo]);
        var exprs = string(this.V);
        var gr_i = [];
        this.x = standard_define([1.5,1.1],this.model,exprs,list(gr_i,0));
        this.x.graphics.in_implicit = ["I"];
        this.x.graphics.out_implicit = ["I"];
        return new BasicBlock(this.x);
    }
    ConstantVoltage.prototype.details = function ConstantVoltage() {
        return this.x;
    }
    ConstantVoltage.prototype.get = function ConstantVoltage() {
        var options = {
        }
        return options;
    }
    ConstantVoltage.prototype.set = function ConstantVoltage() {
        this.V = parseFloat(arguments[0]["V"])
        this.x = arg1;
        var graphics = arg1.graphics;
        var exprs = graphics.exprs;
        this.model = arg1.model;
        while (true) {
            [ok,this.V,exprs] = scicos_getvalue("Set ConstantVoltage block parameter","V (volt)",list("vec",1),exprs);
            if (!ok) {
                break;
            }
            this.model.rpar = new ScilabDouble([this.V]);
            this.model.equations.parameters[2] = list(new ScilabDouble([this.V]));
            graphics.exprs = exprs;
            this.x.graphics = graphics;
            this.x.model = this.model;
            break;
        }
        return new BasicBlock(this.x);
    }
}
