/* autogenerated from "macros/Sources/CLKIN_f.sci" */
function CLKIN_f() {
    CLKIN_f.prototype.define = function CLKIN_f() {
        this.prt = 1;
        this.model = scicos_model();
        this.model.sim = new ScilabString(["input"]);
        this.model.evtout = new ScilabDouble([1]);
        this.model.ipar = new ScilabDouble([this.prt]);
        this.model.blocktype = new ScilabString(["d"]);
        this.model.firing = new ScilabDouble([-1]);
        this.model.dep_ut = new ScilabDouble([false,false]);
        this.exprs = string(this.prt);
        this.x = standard_define([1,1],this.model,this.exprs," ");
        return new BasicBlock(this.x);
    }
    CLKIN_f.prototype.details = function CLKIN_f() {
        return this.x;
    }
    CLKIN_f.prototype.get = function CLKIN_f() {
        var options = {
        }
        return options;
    }
    CLKIN_f.prototype.set = function CLKIN_f() {
        this.prt = parseFloat(arguments[0]["prt"])
        this.exprs = parseFloat(arguments[0]["exprs"])
        this.exprs = this.graphics.exprs;
        this.exprs = this.exprs[1-1];
        while (true) {
            [ok,this.prt,this.exprs] = scicos_getvalue("Set Event Input block parameters","Port number",list("vec",1),this.exprs);
            this.prt = int(this.prt);
            if (!ok) {
                break;
            }
            if (this.prt<=0) {
                message("Port number must be a positive integer");
            } else {
                this.model.ipar = new ScilabDouble([this.prt]);
                this.model.evtout = new ScilabDouble([1]);
                this.model.firing = new ScilabDouble([-1]);
                this.graphics.exprs = new ScilabDouble([this.exprs]);
                this.x.graphics = this.graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
