/* autogenerated from "macros/NonLinear/MAXMIN.sci" */
function MAXMIN() {
    MAXMIN.prototype.define = function MAXMIN() {
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["minmax"]), new ScilabDouble([4]));
        this.model.out = new ScilabDouble([1]);
        this.model.in = new ScilabDouble([-1]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabBoolean([true,false]);
        this.model.ipar = new ScilabDouble([0]);
        this.exprs = [string(transpose([2,1,1]))];
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"MAXMIN\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]),this.model,new ScilabString(this.exprs),this.gr_i);
        this.x.graphics.style = "MAXMIN;displayedLabel=MAX";
        return new BasicBlock(this.x);
    }
    MAXMIN.prototype.details = function MAXMIN() {
        return this.x;
    }
    MAXMIN.prototype.get = function MAXMIN() {
        var options = {
            mm:["Min (1) or Max (2) ",this.mm],
            nin:["Number of input vectors (1 or 2)",this.nin],
            zcr:["zero-crossing (1: yes, 0;no)",this.zcr],
        }
        return options;
    }
    MAXMIN.prototype.set = function MAXMIN() {
        this.mm = parseFloat(arguments[0]["mm"])
        this.nin = arguments[0]["nin"]
        this.zcr = parseFloat(arguments[0]["zcr"])
        this.exprs = arguments[0]["exprs"]
        this.exprs = this.graphics.exprs;
        while (true) {
            [ok,this.mm,this.nin,this.zcr,this.exprs] = scicos_getvalue("Set Max/Min block parameters",["Min (1) or Max (2) ","Number of input vectors (1 or 2)","zero-crossing (1: yes, 0;no)"],list("vec",1,"vec",1,"vec",1),this.exprs);
            if (!ok) {
                break;
            }
            if (this.zcr!=0) {
                this.zcr = -1;
            }
            if (this.mm!=1) {
                this.mm = 2;
            }
            if (this.nin!=1&&this.nin!=2) {
                message("Wrong number of inputs, only 1 and 2 allowed");
                var ok = false;
            }
            if (ok) {
                if (this.nin==1) {
                    var tmpvar0 = check_io(this.model,this.graphics,-1,1,[],[]);
                    this.model = tmpvar0[0];
                    this.graphics = tmpvar0[1];
                    var ok = tmpvar0[2];
                } else {
                    var tmpvar1 = check_io(this.model,this.graphics,[-1,-1],-1,[],[]);
                    this.model = tmpvar1[0];
                    this.graphics = tmpvar1[1];
                    var ok = tmpvar1[2];
                }
            }
            if (ok) {
                this.model.nzcross = new ScilabDouble([this.zcr]);
                if (this.nin==1) {
                    this.model.nmode = new ScilabDouble([abs(this.zcr)]);
                } else {
                    this.model.nmode = new ScilabDouble([this.zcr]);
                }
                this.model.ipar = new ScilabDouble([this.mm]);
                if (this.mm==1) {
                    var label = "MIN";
                } else {
                    var label = "MAX";
                }
                this.graphics.style = new ScilabString(["MAXMIN;displayedLabel="+label]);
                this.graphics.exprs = new ScilabDouble([this.exprs]);
                this.x.graphics = this.graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
