/* autogenerated from "macros/Electrical/Capacitor.sci" */
function Capacitor() {
    Capacitor.prototype.define = function Capacitor() {
        this.model = scicos_model();
        this.C = 0.01;
        this.v = 0;
        this.model.rpar = new ScilabDouble([this.C],[this.v]);
        this.model.sim = new ScilabString(["Capacitor"]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabBoolean([true,false]);
        var mo = modelica();
        mo.model = "Capacitor";
        mo.inputs = "p";
        mo.outputs = "n";
        mo.parameters = list(["C","v"],list(this.C,this.v),[0,1]);
        this.model.equations = new ScilabDouble([mo]);
        this.model.in = new ScilabDouble([ones(size(mo.inputs,"*"),1)]);
        this.model.out = new ScilabDouble([ones(size(mo.outputs,"*"),1)]);
        var exprs = string([[this.C],[this.v]]);
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"Capacitor\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,1.1]),this.model,new ScilabString([exprs]),list(gr_i,0));
        this.x.graphics.in_implicit = ["I"];
        this.x.graphics.out_implicit = ["I"];
        return new BasicBlock(this.x);
    }
    Capacitor.prototype.details = function Capacitor() {
        return this.x;
    }
    Capacitor.prototype.get = function Capacitor() {
        var exprs = this.graphics.exprs;
        this.set_param_popup_title = "Set Capacitor block parameter";
        var options = {
            C:["C (F)",this.C],
            v:["Initial Voltage",this.v],
        }
        return options;
    }
    Capacitor.prototype.set = function Capacitor() {
        var exprs = this.graphics.exprs;
        while (true) {
            var ok = true;
            this.C = parseFloat(arguments[0]["C"]);
            this.v = parseFloat(arguments[0]["v"]);
            var exprs = [arguments[0]["C"], arguments[0]["v"]];
            if (!ok) {
                break;
            }
            this.model.rpar = new ScilabDouble([this.C]);
            this.model.equations.parameters[2-1] = list(new ScilabDouble([this.C]), new ScilabDouble([this.v]));
            this.graphics.exprs = new ScilabDouble([exprs]);
            this.x.graphics = this.graphics;
            this.x.model = this.model;
            break;
        }
        return new BasicBlock(this.x);
    }
    Capacitor.prototype.get_popup_title = function Capacitor() {
        return this.set_param_popup_title;
    }
    Capacitor.prototype.importset = function Capacitor() {
        var graphics = this.x.graphics;
        var ary = getData(graphics.exprs);
        this.C = ary[0];
        this.v = ary[1];
    }
    Capacitor.prototype.getContainer = function Capacitor() { return new BasicBlock(this.x); }
}
