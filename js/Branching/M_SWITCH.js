/* autogenerated from "macros/Branching/M_SWITCH.sci" */
function M_SWITCH() {
    M_SWITCH.prototype.define = function M_SWITCH() {
        var in1 = [[1],[-1],[-1]];
        var ipar = [[1],[3]];
        this.nin = 2;
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["mswitch"]), new ScilabDouble([4]));
        this.model.in = new ScilabDouble(in1);
        this.model.out = new ScilabDouble([-1]);
        this.model.ipar = new ScilabDouble(ipar);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabBoolean([true,false]);
        this.exprs = [[string(this.nin)],[string(ipar)]];
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"M_SWITCH\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2.5,2]),this.model,new ScilabDouble(this.exprs),this.gr_i);
        return new BasicBlock(this.x);
    }
    M_SWITCH.prototype.details = function M_SWITCH() {
        return this.x;
    }
    M_SWITCH.prototype.get = function M_SWITCH() {
        var options = {
            nin:["number of inputs",this.nin],
            base:["zero base indexing (0), otherwise 1",this.base],
            rule:["rounding rule: int (0), round (1), ceil (2), floor (3)",this.rule],
        }
        return options;
    }
    M_SWITCH.prototype.set = function M_SWITCH() {
        this.nin = parseFloat(arguments[0]["nin"])
        this.base = parseFloat(arguments[0]["base"])
        this.rule = arguments[0]["rule"]
        this.exprs = arguments[0]["exprs"]
        this.exprs = this.graphics.exprs;
        while (true) {
            [ok,this.nin,this.base,this.rule,this.exprs] = scicos_getvalue("Set parameters",["number of inputs","zero base indexing (0), otherwise 1","rounding rule: int (0), round (1), ceil (2), floor (3)"],list("vec",1,"vec",1,"vec",1),this.exprs);
            if (!ok) {
                break;
            }
            this.nin = int(this.nin);
            this.base = int(this.base);
            if (this.nin<1) {
                message("Number of inputs must be >=1 ");
            } else if (!((this.base==1)||(this.base==0))) {
                message("base indexing must be 1 or 0");
            } else if (!((this.rule==1)||(this.rule==0)||(this.rule==2)||(this.rule==3))) {
                message("incorrect rounding rule");
            } else {
                if (this.nin==1) {
                    var in1 = [[1,1],[-1,1]];
                    var out = [1,1];
                } else {
                    var in1 = [[1],[-ones(this.nin,1)]];
                    var in2 = [[1],[-2*ones(this.nin,1)]];
                    var in1 = [in1,in2];
                    var out = [-1,-2];
                }
                var it = [[-1],[-2*ones(this.nin,1)]];
                var ot = -2;
                var tmpvar0 = set_io(this.model,this.graphics,list(in1,it),list(out,ot),[],[]);
                this.model = tmpvar0[0];
                this.graphics = tmpvar0[1];
                var ok = tmpvar0[2];
                if (ok) {
                    this.graphics.exprs = new ScilabDouble([this.exprs]);
                    this.model.ipar = new ScilabDouble([this.base],[this.rule]);
                    this.x.graphics = this.graphics;
                    this.x.model = this.model;
                    break;
                }
            }
        }
        return new BasicBlock(this.x);
    }
}
