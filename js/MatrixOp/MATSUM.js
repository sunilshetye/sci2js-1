/* autogenerated from "macros/MatrixOp/MATSUM.sci" */
function MATSUM() {
    MATSUM.prototype.define = function MATSUM() {
        this.model = scicos_model();
        var function_name = "mat_sum";
        var funtyp = 4;
        this.model.sim = list(new ScilabString([function_name]), new ScilabDouble([funtyp]));
        this.model.in = new ScilabDouble([-1]);
        this.model.in2 = new ScilabDouble([-2]);
        this.model.intyp = new ScilabDouble([1]);
        this.model.out = new ScilabDouble([1]);
        this.model.out2 = new ScilabDouble([1]);
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
        var label = [[sci2exp(1)],[sci2exp(0)]];
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"MATSUM\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3,2]),this.model,new ScilabDouble(label),this.gr_i);
        return new BasicBlock(this.x);
    }
    MATSUM.prototype.details = function MATSUM() {
        return this.x;
    }
    MATSUM.prototype.get = function MATSUM() {
        var options = {
            typ:["Datatype(1=real double  2=Complex)",this.typ],
            decomptyp:["Sum along (0=all 1=lines  2=Columns)",this.decomptyp],
        }
        return options;
    }
    MATSUM.prototype.set = function MATSUM() {
        this.typ = inverse(arguments[0]["typ"])
        this.decomptyp = arguments[0]["decomptyp"]
        this.lab = arguments[0]["lab"]
        var label = this.graphics.exprs;
        if (size(label,"*")==14) {
            label[9-1] = [];
        }
        while (true) {
            [ok,this.typ,this.decomptyp,this.lab] = scicos_getvalue("Set MATSUM block parameters",["Datatype(1=real double  2=Complex)","Sum along (0=all 1=lines  2=Columns)"],list("vec",1,"vec",1),label);
            if (!ok) {
                break;
            }
            var label = this.lab;
            if ((this.typ==1)) {
                if ((this.decomptyp==0)) {
                    var function_name = "mat_sum";
                    var out = [1,1];
                } else if ((this.decomptyp==2)) {
                    var function_name = "mat_suml";
                    var out = [-1,1];
                } else if ((this.decomptyp==1)) {
                    var function_name = "mat_sumc";
                    var out = [1,-2];
                } else {
                    message("decomposition type is not supported");
                    var ok = false;
                }
                var it = 1;
                var ot = 1;
            } else if ((this.typ==2)) {
                if ((this.decomptyp==0)) {
                    var function_name = "matz_sum";
                    var out = [1,1];
                } else if ((this.decomptyp==2)) {
                    var function_name = "matz_suml";
                    var out = [-1,1];
                } else if ((this.decomptyp==1)) {
                    var function_name = "matz_sumc";
                    var out = [1,-2];
                } else {
                    message("decomposition type is not supported");
                    var ok = false;
                }
                var it = 2;
                var ot = 2;
            } else {
                message("Datatype is not supported");
                var ok = false;
            }
            var in1 = [this.model.in,this.model.in2];
            var funtyp = 4;
            if (ok) {
                var tmpvar0 = set_io(this.model,this.graphics,list(in1,it),list(out,ot),[],[]);
                this.model = tmpvar0[0];
                this.graphics = tmpvar0[1];
                var ok = tmpvar0[2];
            }
            if (ok) {
                this.model.sim = list(new ScilabString([function_name]), new ScilabDouble([funtyp]));
                this.graphics.exprs = new ScilabDouble([label]);
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
