/* autogenerated from "macros/Misc/DEADBAND.sci" */
function DEADBAND() {
    DEADBAND.prototype.define = function DEADBAND() {
        this.minp = -.5;
        this.maxp = .5;
        var rpar = [[this.maxp],[this.minp]];
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["deadband"]), new ScilabDouble([4]));
        this.model.in = new ScilabDouble([1]);
        this.model.nzcross = new ScilabDouble([2]);
        this.model.nmode = new ScilabDouble([1]);
        this.model.out = new ScilabDouble([1]);
        this.model.rpar = new ScilabDouble(rpar);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabBoolean([true,false]);
        this.exprs = [[string(this.maxp)],[string(this.minp)],[string(this.model.nmode)]];
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"DEADBAND\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]),this.model,new ScilabDouble(this.exprs),this.gr_i);
        return new BasicBlock(this.x);
    }
    DEADBAND.prototype.details = function DEADBAND() {
        return this.x;
    }
    DEADBAND.prototype.get = function DEADBAND() {
        var options = {
            maxp:["End of dead band",this.maxp],
            minp:["Start of dead band",this.minp],
            zeroc:["zero crossing (0:no, 1:yes)",this.zeroc],
        }
        return options;
    }
    DEADBAND.prototype.set = function DEADBAND() {
        this.maxp = parseFloat(arguments[0]["maxp"])
        this.minp = parseFloat(arguments[0]["minp"])
        this.zeroc = arguments[0]["zeroc"]
        this.exprs = arguments[0]["exprs"]
        this.exprs = this.graphics.exprs;
        while (true) {
            [ok,this.maxp,this.minp,this.zeroc,this.exprs] = scicos_getvalue("Set Deadband parameters",["End of dead band","Start of dead band","zero crossing (0:no, 1:yes)"],list("vec",1,"vec",1,"vec",1),this.exprs);
            if (!ok) {
                break;
            }
            if (this.maxp<=this.minp) {
                message("Upper limit must be > Lower limit");
            } else {
                var rpar = [[this.maxp],[this.minp]];
                this.model.rpar = new ScilabDouble(rpar);
                if (this.zeroc!=0) {
                    this.model.nzcross = new ScilabDouble([2]);
                    this.model.nmode = new ScilabDouble([1]);
                } else {
                    this.model.nzcross = new ScilabDouble([0]);
                    this.model.nmode = new ScilabDouble([0]);
                }
                this.graphics.exprs = new ScilabDouble([this.exprs]);
                this.x.graphics = this.graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
