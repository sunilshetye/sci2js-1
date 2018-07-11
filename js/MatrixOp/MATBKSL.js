/* autogenerated from "macros/MatrixOp/MATBKSL.sci" */
function MATBKSL() {
    MATBKSL.prototype.define = function MATBKSL() {
        this.model = scicos_model();
        var function_name = "mat_bksl";
        var funtyp = 4;
        this.model.sim = list(new ScilabString([function_name]), new ScilabDouble([funtyp]));
        this.model.in1 = new ScilabDouble([-1],[-1]);
        this.model.in2 = new ScilabDouble([-2],[-3]);
        this.model.intyp = [1,1];
        this.model.out = new ScilabDouble([-2]);
        this.model.out2 = new ScilabDouble([-3]);
        this.model.outtyp = new ScilabDouble([1]);
        this.model.evtin = [];
        this.model.evtout = [];
        this.model.state = [];
        this.model.dstate = [];
        this.model.rpar = [];
        this.model.ipar = [];
        this.model.blocktype = new ScilabString(["c"]);
        this.model.firing = [];
        this.model.dep_ut = [true,false];
        var label = [sci2exp(1)];
        var gr_i = [];
        this.x = standard_define([2,2],this.model,label,gr_i);
        return new BasicBlock(this.x);
    }
    MATBKSL.prototype.details = function MATBKSL() {
        return this.x;
    }
    MATBKSL.prototype.get = function MATBKSL() {
        var options = {
            typ:["Datatype (1=real double  2=Complex)",this.typ],
        }
        return options;
    }
    MATBKSL.prototype.set = function MATBKSL() {
        this.typ = inverse(arguments[0]["typ"])
        this.x = arg1;
        var graphics = arg1.graphics;
        var label = graphics.exprs;
        this.model = arg1.model;
        if (size(label,"*")==14) {
            label[9-1] = [];
        }
        while (true) {
            [ok,this.typ,exprs] = scicos_getvalue("Set MATBKSL Block",["Datatype (1=real double  2=Complex)"],list("vec",1),label);
            if (!ok) {
                break;
            }
            if ((this.typ==1)) {
                var function_name = "mat_bksl";
                var ot = 1;
                var it = [1,1];
            } else if ((this.typ==2)) {
                var function_name = "matz_bksl";
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
                var tmpvar0 = set_io(this.model,graphics,list(in1,it),list(out,ot),[],[])
                this.model = tmpvar0[0]
                var graphics = tmpvar0[1]
                var ok = tmpvar0[2];
                this.model.sim = list(new ScilabString([function_name]), new ScilabDouble([funtyp]));
                graphics.exprs = label;
                arg1.graphics = graphics;
                arg1.model = this.model;
                this.x = arg1;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
