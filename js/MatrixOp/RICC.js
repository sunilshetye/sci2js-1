/* autogenerated from "macros/MatrixOp/RICC.sci" */
function RICC() {
    RICC.prototype.define = function RICC() {
        this.model = scicos_model();
        var function_name = "ricc_m";
        var funtyp = 4;
        this.model.sim = list(new ScilabString([function_name]), new ScilabDouble([funtyp]));
        this.model.in1 = new ScilabDouble([-1],[-1],[-1]);
        this.model.in2 = new ScilabDouble([-1],[-1],[-1]);
        this.model.intyp = new ScilabDouble([1,1,1]);
        this.model.out = new ScilabDouble([-1]);
        this.model.out2 = new ScilabDouble([-1]);
        this.model.outtyp = new ScilabDouble([1]);
        this.model.evtin = new ScilabDouble([]);
        this.model.evtout = new ScilabDouble([]);
        this.model.state = new ScilabDouble([]);
        this.model.dstate = new ScilabDouble([]);
        this.model.rpar = new ScilabDouble([]);
        this.model.ipar = new ScilabDouble([1],[1]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.firing = new ScilabDouble([]);
        this.model.dep_ut = new ScilabDouble([true,false]);
        var label = [[sci2exp(1)],[sci2exp(1)]];
        var gr_i = [];
        this.x = standard_define([2,2],this.model,label,gr_i);
        return new BasicBlock(this.x);
    }
    RICC.prototype.details = function RICC() {
        return this.x;
    }
    RICC.prototype.get = function RICC() {
        var options = {
            tpe:["Type (1=Cont  2=Disc)",this.tpe],
            mod:["Model(1=Schr  2=sign(cont) inv(disc))",this.mod],
        }
        return options;
    }
    RICC.prototype.set = function RICC() {
        this.tpe = arguments[0]["tpe"]
        this.mod = arguments[0]["mod"]
        this.x = arg1;
        this.graphics = arg1.graphics;
        var label = this.graphics.exprs;
        this.model = arg1.model;
        if (size(label,"*")==14) {
            label[9-1] = [];
        }
        while (true) {
            [ok,this.tpe,this.mod,exprs] = scicos_getvalue("Set RICC Block",["Type (1=Cont  2=Disc)","Model(1=Schr  2=sign(cont) inv(disc))"],list("vec",1,"vec",1),label);
            if (!ok) {
                break;
            }
            var in1 = [this.model.in1,this.model.in2];
            var out = [this.model.out,this.model.out2];
            var it = [1,1,1];
            var ot = 1;
            var label = exprs;
            var tmpvar0 = set_io(this.model,this.graphics,list(in1,it),list(out,ot),[],[]);
            this.model = tmpvar0[0];
            this.graphics = tmpvar0[1];
            var ok = tmpvar0[2];
            if (ok) {
                this.model.ipar = new ScilabDouble([this.tpe],[this.mod]);
                this.graphics.exprs = new ScilabDouble([label]);
                arg1.graphics = this.graphics;
                arg1.model = this.model;
                this.x = arg1;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
