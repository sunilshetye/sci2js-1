/* autogenerated from "macros/Branching/FROM.sci" */
function FROM() {
    FROM.prototype.define = function FROM() {
        this.model = scicos_model();
        this.model.sim = new ScilabString(["from"]);
        this.model.in1 = [];
        this.model.in2 = [];
        this.model.intyp = new ScilabDouble([1]);
        this.model.out = new ScilabDouble([-1]);
        this.model.out2 = new ScilabDouble([-2]);
        this.model.outtyp = new ScilabDouble([-1]);
        this.model.ipar = [];
        this.model.opar = list(new ScilabString(["A"]));
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = [false,false];
        var exprs = ["A"];
        var gr_i = [];
        this.x = standard_define([2,1],this.model,exprs,gr_i);
        this.x.graphics.id = "From";
        return new BasicBlock(this.x);
    }
    FROM.prototype.details = function FROM() {
        return this.x;
    }
    FROM.prototype.get = function FROM() {
        var options = {
            tag:["Tag",this.tag],
        }
        return options;
    }
    FROM.prototype.set = function FROM() {
        this.tag = arguments[0]["tag"]
        this.x = arg1;
        var graphics = arg1.graphics;
        var exprs = graphics.exprs;
        this.model = arg1.model;
        while (true) {
            [ok,this.tag,exprs] = scicos_getvalue("Set parameters",["Tag"],list("str",-1),exprs);
            if (!ok) {
                break;
            }
            if (ok) {
                if (this.model.opar!=list(this.tag)) {
                    var needcompile = 4;
                    var y = needcompile;
                }
                graphics.exprs = exprs;
                this.model.opar = list(new ScilabDouble([this.tag]));
                this.x.model = this.model;
                this.x.graphics = graphics;
                break;
            }
        }
        needcompile = resume(needcompile)
        return new BasicBlock(this.x);
    }
}
