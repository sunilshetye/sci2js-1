/* autogenerated from "macros/Sources/TKSCALE.sci" */
function TKSCALE() {
    TKSCALE.prototype.define = function TKSCALE() {
        this.a = -10;
        this.b = 10;
        this.f = 1;
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["tkscaleblk"]), new ScilabDouble([5]));
        this.model.out = new ScilabDouble([1]);
        this.model.evtin = new ScilabDouble([1]);
        this.model.rpar = new ScilabDouble([this.a],[this.b],[this.f]);
        this.model.blocktype = new ScilabString(["d"]);
        this.model.dep_ut = new ScilabDouble([false,false]);
        var exprs = [[sci2exp(this.a)],[sci2exp(this.b)],[sci2exp(this.f)]];
        var gr_i = [];
        this.x = standard_define([3,2],this.model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    TKSCALE.prototype.details = function TKSCALE() {
        return this.x;
    }
    TKSCALE.prototype.get = function TKSCALE() {
        var options = {
        a:["Min value",this.a],
        b:["Max value",this.b],
        f:["Normalization",this.f],
        }
        return options;
    }
    TKSCALE.prototype.set = function TKSCALE() {
        this.a = parseFloat(arguments[0]["a"])
        this.b = parseFloat(arguments[0]["b"])
        this.f = parseFloat(arguments[0]["f"])
        this.x = arg1;
        this.graphics = arg1.graphics;
        var exprs = this.graphics.exprs;
        this.model = arg1.model;
        [ok,this.a,this.b,this.f,exprs] = scicos_getvalue("Set scale block parameters",["Min value","Max value","Normalization"],list("vec",1,"vec",1,"vec",1),exprs);
        if (ok) {
            this.graphics.exprs = new ScilabDouble([exprs]);
            this.model.rpar = new ScilabDouble([this.a],[this.b],[this.f]);
            this.x.graphics = this.graphics;
            this.x.model = this.model;
        }
        return new BasicBlock(this.x);
    }
}
