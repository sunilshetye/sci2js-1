/* autogenerated from "macros/MatrixOp/MATSUM.sci" */
function MATSUM() {
    MATSUM.prototype.define = function MATSUM() {
        this.model = scicos_model();
        var function_name = "mat_sum";
        var funtyp = 4;
        this.model.sim = list(new ScilabString([function_name]), new ScilabDouble([funtyp]));
        this.model.in1 = new ScilabDouble([-1]);
        this.model.in2 = new ScilabDouble([-2]);
        this.model.intyp = new ScilabDouble([1]);
        this.model.out = new ScilabDouble([1]);
        this.model.out2 = new ScilabDouble([1]);
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
        var label = [[sci2exp(1)],[sci2exp(0)]];
        var gr_i = [];
        this.x = standard_define([3,2],this.model,label,gr_i);
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
        this.x = arg1;
        this.model = arg1.model;
        var graphics = arg1.graphics;
        var label = graphics.exprs;
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
            var in1 = [this.model.in1,this.model.in2];
            var funtyp = 4;
            if (ok) {
                var tmpvar0 = set_io(this.model,graphics,list(in1,it),list(out,ot),[],[])
                this.model = tmpvar0[0]
                var graphics = tmpvar0[1]
                var ok = tmpvar0[2];
            }
            if (ok) {
                this.model.sim = list(new ScilabString([function_name]), new ScilabDouble([funtyp]));
                arg1.model = this.model;
                graphics.exprs = label;
                arg1.graphics = graphics;
                this.x = arg1;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
