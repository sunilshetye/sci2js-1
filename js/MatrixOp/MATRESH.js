/* autogenerated from "macros/MatrixOp/MATRESH.sci" */
function MATRESH() {
    MATRESH.prototype.define = function MATRESH() {
        this.model = scicos_model();
        var function_name = "mat_reshape";
        var funtyp = 4;
        this.model.sim = list(new ScilabString([function_name]), new ScilabDouble([funtyp]));
        this.model.in = new ScilabDouble([-1]);
        this.model.in2 = new ScilabDouble([-2]);
        this.model.intyp = new ScilabDouble([1]);
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
        this.model.dep_ut = new ScilabBoolean([true,false]);
        var label = [[sci2exp(1)],[sci2exp([1,1])],[sci2exp([1,1])]];
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"MATRESH\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3,2]),this.model,new ScilabDouble(label),this.gr_i);
        return new BasicBlock(this.x);
    }
    MATRESH.prototype.details = function MATRESH() {
        return this.x;
    }
    MATRESH.prototype.get = function MATRESH() {
        var options = {
            typ:["Datatype(1=real double  2=Complex)",this.typ],
            l1:["input size",this.l1],
            out:["output size desired",this.out],
        }
        return options;
    }
    MATRESH.prototype.set = function MATRESH() {
        this.typ = inverse(arguments[0]["typ"])
        this.l1 = arguments[0]["l1"]
        this.out = arguments[0]["out"]
        this.lab = arguments[0]["lab"]
        var label = this.graphics.exprs;
        if (size(label,"*")==14) {
            label[9-1] = [];
        }
        while (true) {
            [ok,this.typ,this.l1,this.out,this.lab] = scicos_getvalue("Set MATRESH block parameters",["Datatype(1=real double  2=Complex)","input size","output size desired"],list("vec",-1,"vec",-1,"vec",-1),label);
            if (!ok) {
                break;
            }
            var nout = size(this.out);
            var nin = size(this.l1);
            if (nout==0) {
                message("output must have at least one element");
                var ok = false;
            }
            if (nin==0) {
                message("input must have at least one element");
                var ok = false;
            }
            if (ok) {
                if (((this.out[1-1]>(this.l1[1-1]*this.l1[2-1])))) {
                    message("the first dimension of the output is too big");
                    var ok = false;
                }
                if (((this.out[2-1]>(this.l1[1-1]*this.l1[2-1])))) {
                    message("the second dimension of the output is too big");
                    var ok = false;
                }
                if ((((this.out[2-1]*this.out[1-1])>(this.l1[1-1]*this.l1[2-1])))) {
                    message("the dimensions of the output are too big");
                    var ok = false;
                }
            }
            if ((this.typ==1)) {
                var function_name = "mat_reshape";
                var ot = 1;
                var it = 1;
            } else if ((this.typ==2)) {
                var function_name = "matz_reshape";
                var ot = 2;
                var it = 2;
            } else {
                message("Datatype is not supported");
                var ok = false;
            }
            if (ok) {
                var label = this.lab;
                var tmpvar0 = set_io(this.model,this.graphics,list(this.l1,it),list(this.out,ot),[],[]);
                this.model = tmpvar0[0];
                this.graphics = tmpvar0[1];
                var ok = tmpvar0[2];
            }
            if (ok) {
                var funtyp = 4;
                this.model.sim = list(new ScilabString([function_name]), new ScilabDouble([funtyp]));
                this.graphics.exprs = new ScilabDouble([label]);
                break;
            }
        }
        needcompile = resume(needcompile)
        return new BasicBlock(this.x);
    }
}
