/* autogenerated from "macros/MatrixOp/SQRT.sci" */
function SQRT() {
    SQRT.prototype.define = function SQRT() {
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["mat_sqrt"]), new ScilabDouble([4]));
        this.model.in = new ScilabDouble([-1]);
        this.model.in2 = new ScilabDouble([-2]);
        this.model.intyp = new ScilabDouble([1]);
        this.model.outtyp = new ScilabDouble([1]);
        this.model.out = new ScilabDouble([-1]);
        this.model.out2 = new ScilabDouble([-2]);
        this.model.dep_ut = new ScilabDouble([true,false]);
        var label = [sci2exp(1)];
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"SQRT\",sz(1),sz(2));"]);
        this.x = standard_define([2,2],this.model,label,this.gr_i);
        return new BasicBlock(this.x);
    }
    SQRT.prototype.details = function SQRT() {
        return this.x;
    }
    SQRT.prototype.get = function SQRT() {
        var options = {
            typ:["Datatype(1=real double  2=Complex)",this.typ],
        }
        return options;
    }
    SQRT.prototype.set = function SQRT() {
        this.typ = inverse(arguments[0]["typ"])
        this.exprs = arguments[0]["exprs"]
        var label = this.graphics.exprs;
        while (true) {
            [ok,this.typ,this.exprs] = scicos_getvalue("Set SQRT Block",["Datatype(1=real double  2=Complex)"],list("vec",1),label);
            if (!ok) {
                break;
            }
            if ((this.typ==1)) {
                var function_name = "mat_sqrt";
            } else if ((this.typ==2)) {
                var function_name = "matz_sqrt";
            } else {
                message("type is not supported");
                var ok = false;
            }
            var it = this.typ;
            var ot = this.typ;
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
