/* autogenerated from "macros/MatrixOp/MATTRAN.sci" */
function MATTRAN() {
    MATTRAN.prototype.define = function MATTRAN() {
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["mattran_m"]), new ScilabDouble([4]));
        this.model.in = new ScilabDouble([-1]);
        this.model.in2 = new ScilabDouble([-2]);
        this.model.out = new ScilabDouble([-2]);
        this.model.out2 = new ScilabDouble([-1]);
        this.model.dep_ut = new ScilabDouble([true,false]);
        var label = [sci2exp(1)];
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"MATTRAN\",sz(1),sz(2));"]);
        this.x = standard_define([3,2],this.model,label,this.gr_i);
        return new BasicBlock(this.x);
    }
    MATTRAN.prototype.details = function MATTRAN() {
        return this.x;
    }
    MATTRAN.prototype.get = function MATTRAN() {
        var options = {
            typ:["Datatype(1=real double 2=Complex)",this.typ],
            rule:["rule (1=.\' 2=\')",this.rule],
        }
        return options;
    }
    MATTRAN.prototype.set = function MATTRAN() {
        this.typ = inverse(arguments[0]["typ"])
        this.rule = arguments[0]["rule"]
        this.exprs = arguments[0]["exprs"]
        var label = this.graphics.exprs;
        if (size(label,"*")==1) {
            label[2-1] = sci2exp(1);
        }
        while (true) {
            [ok,this.typ,this.rule,this.exprs] = scicos_getvalue("Set MATTRAN Block",["Datatype(1=real double 2=Complex)","rule (1=.\' 2=\')"],list("vec",1,"vec",1),label);
            if (!ok) {
                break;
            }
            if ((this.typ==1)) {
                var function_name = "mattran_m";
                var ot = 1;
                var it = 1;
            } else if ((this.typ==2)) {
                if (this.rule==1) {
                    var function_name = "matztran_m";
                } else {
                    var function_name = "mathermit_m";
                }
                var ot = 2;
                var it = 2;
            } else {
                message("Datatype is not supported");
                var ok = false;
            }
            var in1 = [this.model.in,this.model.in2];
            var out = [this.model.out,this.model.out2];
            var funtyp = 4;
            if (ok) {
                var label = this.exprs;
                var tmpvar0 = set_io(this.model,this.graphics,list(in1,it),list(out,ot),[],[]);
                this.model = tmpvar0[0];
                this.graphics = tmpvar0[1];
                var ok = tmpvar0[2];
                this.model.sim = list(new ScilabString([function_name]), new ScilabDouble([funtyp]));
                this.graphics.exprs = new ScilabDouble([label]);
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
