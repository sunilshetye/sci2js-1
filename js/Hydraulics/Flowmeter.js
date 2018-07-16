/* autogenerated from "macros/Hydraulics/Flowmeter.sci" */
function Flowmeter() {
    Flowmeter.prototype.define = function Flowmeter() {
        var ModelName = "Flowmeter";
        var PrametersValue = 1;
        var ParametersName = "Qini";
        this.model = scicos_model();
        var Typein = [];
        var Typeout = [];
        var MI = [];
        var MO = [];
        var P = [[50,105,-1,90],[0,10,2,0],[101,10,-2,0]];
        var PortName = [["Mesure"],["C1"],["C2"]];
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
        this.model.rpar = new ScilabDouble([PrametersValue]);
        mo.parameters = list(ParametersName,PrametersValue,zeros(ParametersName));
        this.exprs = "1";
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"Flowmeter\",sz(1),sz(2));"]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabBoolean([false,true]);
        mo.model = ModelName;
        this.model.equations = new ScilabDouble([mo]);
        this.model.in = new ScilabDouble([ones(size(MI,"*"),1)]);
        this.model.out = new ScilabDouble([ones(size(MO,"*"),1)]);
        this.x = new standard_define(new ScilabDouble([2,2]),this.model,new ScilabString([this.exprs]),list(this.gr_i,0));
        this.x.graphics.in_implicit = Typein;
        this.x.graphics.out_implicit = Typeout;
        return new BasicBlock(this.x);
    }
    Flowmeter.prototype.details = function Flowmeter() {
        return this.x;
    }
    Flowmeter.prototype.get = function Flowmeter() {
        var options = {
        }
        return options;
    }
    Flowmeter.prototype.set = function Flowmeter() {
        this.Qini = arguments[0]["Qini"]
        this.exprs = arguments[0]["exprs"]
        this.exprs = this.graphics.exprs;
        this.exprs = this.x.graphics.exprs;
        while (false) {
            [ok,this.Qini,this.exprs] = scicos_getvalue([["Set Flowmeter block parameters:"],[""],["Qini: "]],"Qini",list("vec",1),this.exprs);
            if (!ok) {
                break;
            }
            this.x.model.equations.parameters[2-1] = list(this.Qini);
            this.x.graphics.exprs = this.exprs;
            break;
        }
        return new BasicBlock(this.x);
    }
}
