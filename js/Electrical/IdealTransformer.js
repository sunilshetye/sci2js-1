/* autogenerated from "macros/Electrical/IdealTransformer.sci" */
function IdealTransformer() {
    IdealTransformer.prototype.define = function IdealTransformer() {
        var ModelName = "IdealTransformer";
        var PrametersValue = [1];
        var ParametersName = ["N"];
        this.model = scicos_model();
        var Typein = [];
        var Typeout = [];
        var MI = [];
        var MO = [];
        var P = [[2.5,90,2,0],[2.5,10,2,0],[97.5,90,-2,0],[97.5,10,-2,0]];
        var PortName = [["p1"],["n1"],["p2"],["n2"]];
        for (i=1;i<=size(P,"r");i+=1) {
            if (P[i-1][3-1]==1) {
                var Typein = [[Typein],["E"]];
                var MI = [[MI],[PortName[i-1]]];
            }
            if (P[i-1][3-1]==2) {
                var Typein = [[Typein],["I"]];
                var MI = [[MI],[PortName[i-1]]];
            }
            if (P[i-1][3-1]==-1) {
                var Typeout = [[Typeout],["E"]];
                var MO = [[MO],[PortName[i-1]]];
            }
            if (P[i-1][3-1]==-2) {
                var Typeout = [[Typeout],["I"]];
                var MO = [[MO],[PortName[i-1]]];
            }
        }
        this.model = scicos_model();
        var mo = modelica();
        this.model.sim = new ScilabString([ModelName]);
        mo.inputs = MI;
        mo.outputs = MO;
        this.model.rpar = new ScilabDouble(PrametersValue);
        mo.parameters = list(ParametersName,PrametersValue,zeros(ParametersName));
        var exprs = ["1"];
        var gr_i = [];
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabDouble([false,true]);
        mo.model = ModelName;
        this.model.equations = new ScilabDouble([mo]);
        this.model.in1 = new ScilabDouble([ones(size(MI,"*"),1)]);
        this.model.out = new ScilabDouble([ones(size(MO,"*"),1)]);
        this.x = standard_define([2,2],this.model,exprs,list(gr_i,0));
        this.x.graphics.in_implicit = Typein;
        this.x.graphics.out_implicit = Typeout;
        return new BasicBlock(this.x);
    }
    IdealTransformer.prototype.details = function IdealTransformer() {
        return this.x;
    }
    IdealTransformer.prototype.get = function IdealTransformer() {
        var options = {
            N:["N",this.N],
        }
        return options;
    }
    IdealTransformer.prototype.set = function IdealTransformer() {
        this.N = arguments[0]["N"]
        this.x = arg1;
        this.graphics = arg1.graphics;
        var exprs = this.graphics.exprs;
        this.model = arg1.model;
        this.x = arg1;
        var exprs = this.x.graphics.exprs;
        while (true) {
            [ok,this.N,exprs] = scicos_getvalue([["Set Transformer block parameters:"],[""],["N:"+" Turn ratio (N1/N2)"]],["N"],list("vec",1),exprs);
            if (!ok) {
                break;
            }
            this.x.model.equations.parameters[2-1] = list(this.N);
            this.x.graphics.exprs = exprs;
            break;
        }
        return new BasicBlock(this.x);
    }
}
