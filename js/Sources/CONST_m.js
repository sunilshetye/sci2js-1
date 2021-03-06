/* autogenerated from "macros/Sources/CONST_m.sci" */
function CONST_m() {
    CONST_m.prototype.define = function CONST_m() {
        this.C = [1];
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["cstblk4"]), new ScilabDouble([4]));
        this.model.in = new ScilabDouble([]);
        this.model.out = new ScilabDouble([size(this.C,1)]);
        this.model.in2 = new ScilabDouble([]);
        this.model.out2 = new ScilabDouble([size(this.C,2)]);
        this.model.rpar = new ScilabDouble(this.C);
        this.model.opar = list();
        this.model.blocktype = new ScilabString(["d"]);
        this.model.dep_ut = new ScilabBoolean([false,false]);
        var exprs = sci2exp(this.C);
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CONST_m\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]),this.model,new ScilabString([exprs]),gr_i);
        return new BasicBlock(this.x);
    }
    CONST_m.prototype.details = function CONST_m() {
        return this.x;
    }
    CONST_m.prototype.get = function CONST_m() {
        var exprs = this.graphics.exprs;
        this.set_param_popup_title = msprintf("Set %s block parameters","CONST_m");
        var options = {
            C:["Constant Value",this.C],
        }
        return options;
    }
    CONST_m.prototype.set = function CONST_m() {
        var exprs = this.graphics.exprs;
        while (true) {
            var ok = true;
            this.C = inverse(arguments[0]["C"]);
            var exprs = [arguments[0]["C"]];
            if (!ok) {
                break;
            }
            var nout = size(this.C);
            if (find(nout==0).length!=0) {
                block_parameter_error(msprintf("Wrong size for \'%s\' parameter","Constant Value"),"Constant value must have at least one element.");
            } else {
                this.model.sim = list(new ScilabString(["cstblk4_m"]), new ScilabDouble([4]));
                this.model.opar = list(this.C);
                if ((type(this.C)==1)) {
                    if (isreal(this.C)) {
                        var ot = 1;
                    } else {
                        var ot = 2;
                    }
                } else if ((typeof(this.C)=="int32")) {
                    var ot = 3;
                } else if ((typeof(this.C)=="int16")) {
                    var ot = 4;
                } else if ((typeof(this.C)=="int8")) {
                    var ot = 5;
                } else if ((typeof(this.C)=="uint32")) {
                    var ot = 6;
                } else if ((typeof(this.C)=="uint16")) {
                    var ot = 7;
                } else if ((typeof(this.C)=="uint8")) {
                    var ot = 8;
                } else {
                    block_parameter_error(msprintf("Wrong type for \'%s\' parameter","Constant Value"),"Value type must be a numeric type (double, complex, int, int8, ...).");
                    var ok = false;
                }
                if (ok) {
                    this.model.rpar = new ScilabDouble([]);
                    var tmpvar0 = set_io(this.model,this.graphics,list(),list(nout,ot),[],[]);
                    this.model = tmpvar0[0];
                    this.graphics = tmpvar0[1];
                    var ok = tmpvar0[2];
                    this.graphics.exprs = new ScilabDouble([exprs]);
                    this.x.graphics = this.graphics;
                    this.x.model = this.model;
                    break;
                }
            }
        }
        return new BasicBlock(this.x);
    }
    CONST_m.prototype.get_popup_title = function CONST_m() {
        return this.set_param_popup_title;
    }
    CONST_m.prototype.importset = function CONST_m() {
        var graphics = this.x.graphics;
        var ary = getData(graphics.exprs);
        this.C = ary[0];
    }
    CONST_m.prototype.getContainer = function CONST_m() { return new BasicBlock(this.x); }
}
