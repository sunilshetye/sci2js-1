/* autogenerated from "macros/Misc/HYSTHERESIS.sci" */
function HYSTHERESIS() {
    HYSTHERESIS.prototype.define = function HYSTHERESIS() {
        var in1 = 1;
        var ipar = [0];
        this.nzz = 2;
        var rpar = [[1],[0],[1],[0]];
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["hystheresis"]), new ScilabDouble([4]));
        this.model.in1 = new ScilabDouble([in1]);
        this.model.out = new ScilabDouble([1]);
        this.model.rpar = new ScilabDouble(rpar);
        this.model.nzcross = new ScilabDouble([this.nzz]);
        this.model.nmode = new ScilabDouble([1]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabDouble([true,false]);
        var exprs = [[string(rpar)],[string(sign(this.nzz))]];
        var gr_i = [];
        this.x = standard_define([2,2],this.model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    HYSTHERESIS.prototype.details = function HYSTHERESIS() {
        return this.x;
    }
    HYSTHERESIS.prototype.get = function HYSTHERESIS() {
        var options = {
            high_lim:["switch on at",this.high_lim],
            low_lim:["switch off at",this.low_lim],
            out_high:["output when on",this.out_high],
            out_low:["output when off",this.out_low],
            nzz:["use zero crossing: yes (1), no (0)",this.nzz],
        }
        return options;
    }
    HYSTHERESIS.prototype.set = function HYSTHERESIS() {
        this.high_lim = arguments[0]["high_lim"]
        this.low_lim = arguments[0]["low_lim"]
        this.out_high = arguments[0]["out_high"]
        this.out_low = arguments[0]["out_low"]
        this.nzz = parseFloat(arguments[0]["nzz"])
        this.x = arg1;
        this.graphics = arg1.graphics;
        var exprs = this.graphics.exprs;
        this.model = arg1.model;
        while (true) {
            [ok,this.high_lim,this.low_lim,this.out_high,this.out_low,this.nzz,exprs] = scicos_getvalue("Set parameters",["switch on at","switch off at","output when on","output when off","use zero crossing: yes (1), no (0)"],list("vec",1,"vec",1,"vec",1,"vec",1,"vec",1),exprs);
            if (!ok) {
                break;
            }
            if (this.low_lim>this.high_lim) {
                message("switch on value must be larger than switch off value");
            } else {
                this.graphics.exprs = new ScilabDouble([exprs]);
                this.model.rpar = new ScilabDouble(transpose([this.high_lim,this.low_lim,this.out_high,this.out_low]));
                if (this.nzz>0) {
                    this.nzz = 2;
                }
                this.model.nzcross = new ScilabDouble([this.nzz]);
                this.x.graphics = this.graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
