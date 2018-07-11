/* autogenerated from "macros/Sinks/CLKOUT_f.sci" */
function CLKOUT_f() {
    CLKOUT_f.prototype.define = function CLKOUT_f() {
        this.prt = 1;
        this.model = scicos_model();
        this.model.sim = new ScilabString(["output"]);
        this.model.evtin = new ScilabDouble([1]);
        this.model.ipar = new ScilabDouble([this.prt]);
        this.model.blocktype = new ScilabString(["d"]);
        this.model.firing = [];
        this.model.dep_ut = [false,false];
        var exprs = string(this.prt);
        this.x = standard_define([1,1],this.model,exprs," ");
        return new BasicBlock(this.x);
    }
    CLKOUT_f.prototype.details = function CLKOUT_f() {
        return this.x;
    }
    CLKOUT_f.prototype.get = function CLKOUT_f() {
        var options = {
        }
        return options;
    }
    CLKOUT_f.prototype.set = function CLKOUT_f() {
        this.prt = parseFloat(arguments[0]["prt"])
        this.x = arg1;
        var graphics = arg1.graphics;
        this.model = arg1.model;
        var exprs = graphics.exprs;
        var exprs = exprs[1-1];
        while (true) {
            [ok,this.prt,exprs] = scicos_getvalue("Set Event Output block parameters","Port number",list("vec",1),exprs);
            if (!ok) {
                break;
            }
            this.prt = int(this.prt);
            if (this.prt<=0) {
                message("Port number must be a positive integer");
            } else {
                this.model.ipar = new ScilabDouble([this.prt]);
                this.model.evtin = new ScilabDouble([1]);
                this.model.firing = [];
                graphics.exprs = exprs;
                this.x.graphics = graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
