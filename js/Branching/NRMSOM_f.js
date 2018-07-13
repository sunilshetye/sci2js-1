/* autogenerated from "macros/Branching/NRMSOM_f.sci" */
function NRMSOM_f() {
    NRMSOM_f.prototype.define = function NRMSOM_f() {
        var in1 = [[-1],[-1]];
        this.nin = 2;
        this.model = scicos_model();
        this.model.sim = new ScilabString(["junk"]);
        this.model.in = new ScilabDouble(in1);
        this.model.out = new ScilabDouble([-1]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabDouble([true,false]);
        this.exprs = [string(this.nin)];
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"NRMSOM_f\",sz(1),sz(2));"]);
        this.x = standard_define([.2,2],this.model,this.exprs,this.gr_i);
        return new BasicBlock(this.x);
    }
    NRMSOM_f.prototype.details = function NRMSOM_f() {
        return this.x;
    }
    NRMSOM_f.prototype.get = function NRMSOM_f() {
        var options = {
            nin:["number of inputs",this.nin],
        }
        return options;
    }
    NRMSOM_f.prototype.set = function NRMSOM_f() {
        this.nin = parseFloat(arguments[0]["nin"])
        this.exprs = arguments[0]["exprs"]
        this.exprs = this.graphics.exprs;
        while (true) {
            [ok,this.nin,this.exprs] = scicos_getvalue("Set parameters",["number of inputs"],list("vec",1),this.exprs);
            if (!ok) {
                break;
            }
            var tmpvar0 = check_io(this.model,this.graphics,-ones(this.nin,1),-1,[],[]);
            this.model = tmpvar0[0];
            this.graphics = tmpvar0[1];
            var ok = tmpvar0[2];
            if (ok) {
                this.graphics.exprs = new ScilabDouble([this.exprs]);
                this.x.graphics = this.graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
