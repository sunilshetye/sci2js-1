/* autogenerated from "macros/Branching/GOTOMO.sci" */
function GOTOMO() {
    GOTOMO.prototype.define = function GOTOMO() {
        this.model = scicos_model();
        this.model.sim = new ScilabString(["gotomo"]);
        this.model.in = new ScilabDouble([-1]);
        this.model.in2 = new ScilabDouble([-2]);
        this.model.intyp = new ScilabDouble([]);
        this.model.out = new ScilabDouble([]);
        this.model.out2 = new ScilabDouble([]);
        this.model.outtyp = new ScilabDouble([1]);
        this.model.ipar = new ScilabDouble([int(1)]);
        this.model.opar = list(new ScilabString(["A"]));
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabBoolean([false,false]);
        var mo = modelica();
        mo.model = "gotomo";
        mo.inputs = "p";
        this.exprs = [["A"],[sci2exp(1)]];
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"GOTOMO\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,1]),this.model,new ScilabDouble(this.exprs),this.gr_i);
        this.x.graphics.in_implicit = ["I"];
        return new BasicBlock(this.x);
    }
    GOTOMO.prototype.details = function GOTOMO() {
        return this.x;
    }
    GOTOMO.prototype.get = function GOTOMO() {
        var options = {
            tag:["Tag",this.tag],
            tagvis:["Tag Visibility(1=Local 2=scoped 3= global)",this.tagvis],
        }
        return options;
    }
    GOTOMO.prototype.set = function GOTOMO() {
        this.tag = arguments[0]["tag"]
        this.tagvis = parseFloat(arguments[0]["tagvis"])
        this.exprs = arguments[0]["exprs"]
        this.exprs = this.graphics.exprs;
        while (true) {
            [ok,this.tag,this.tagvis,this.exprs] = scicos_getvalue("Set parameters",["Tag","Tag Visibility(1=Local 2=scoped 3= global)"],list("str",-1,"vec",1),this.exprs);
            if (!ok) {
                break;
            }
            this.tagvis = int(this.tagvis);
            if (((this.tagvis<1)||(this.tagvis>3))) {
                message("Tag Visibility must be between 1 and 3");
                var ok = false;
            }
            if (ok) {
                if (((this.model.ipar!=this.tagvis)||(this.model.opar!=list(this.tag)))) {
                    var needcompile = 4;
                    var y = needcompile;
                }
                this.graphics.exprs = new ScilabDouble([this.exprs]);
                this.model.opar = list(new ScilabDouble([this.tag]));
                this.model.ipar = new ScilabDouble([this.tagvis]);
                this.x.model = this.model;
                this.x.graphics = this.graphics;
                break;
            }
        }
        needcompile = resume(needcompile)
        return new BasicBlock(this.x);
    }
}
