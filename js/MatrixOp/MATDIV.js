/* autogenerated from "macros/MatrixOp/MATDIV.sci" */
function MATDIV() {
    MATDIV.prototype.define = function MATDIV() {
        this.model = scicos_model();
        var function_name = "mat_div";
        var funtyp = 4;
        this.model.sim = list(new ScilabString([function_name]), new ScilabDouble([funtyp]));
        this.model.in1 = new ScilabDouble([-1],[-2]);
        this.model.in2 = new ScilabDouble([-3],[-3]);
        this.model.intyp = new ScilabDouble([1,1]);
        this.model.out = new ScilabDouble([-1]);
        this.model.out2 = new ScilabDouble([-2]);
        this.model.outtyp = new ScilabDouble([1]);
        this.model.evtin = new ScilabDouble([]);
        this.model.evtout = new ScilabDouble([]);
        this.model.state = new ScilabDouble([]);
        this.model.dstate = new ScilabDouble([]);
        this.model.rpar = new ScilabDouble([]);
        this.model.ipar = new ScilabDouble([]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.firing = new ScilabDouble([]);
        this.model.dep_ut = new ScilabDouble([true,false]);
        var label = [sci2exp(1)];
        var gr_i = [];
        this.x = standard_define([2,2],this.model,label,gr_i);
        return new BasicBlock(this.x);
    }
    MATDIV.prototype.details = function MATDIV() {
        return this.x;
    }
    MATDIV.prototype.get = function MATDIV() {
        var options = {
            typ:["Datatype(1=real double  2=Complex)",this.typ],
        }
        return options;
    }
    MATDIV.prototype.set = function MATDIV() {
        this.typ = inverse(arguments[0]["typ"])
        this.x = arg1;
        this.graphics = arg1.graphics;
        var label = this.graphics.exprs;
        this.model = arg1.model;
        if (size(label,"*")==14) {
            label[9-1] = [];
        }
        while (true) {
            [ok,this.typ,exprs] = scicos_getvalue("Set MATDIV Block",["Datatype(1=real double  2=Complex)"],list("vec",1),label);
            if (!ok) {
                break;
            }
            if ((this.typ==1)) {
                var function_name = "mat_div";
                var ot = 1;
                var it = [1,1];
            } else if ((this.typ==2)) {
                var function_name = "matz_div";
                var ot = 2;
                var it = [2,2];
            } else {
                message("Datatype is not supported");
                var ok = false;
            }
            var in1 = [this.model.in1,this.model.in2];
            var out = [this.model.out,this.model.out2];
            var funtyp = 4;
            if (ok) {
                var label = exprs;
                var tmpvar0 = set_io(this.model,this.graphics,list(in1,it),list(out,ot),[],[]);
                this.model = tmpvar0[0];
                this.graphics = tmpvar0[1];
                var ok = tmpvar0[2];
                this.model.sim = list(new ScilabString([function_name]), new ScilabDouble([funtyp]));
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
