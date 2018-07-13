/* autogenerated from "macros/Linear/GAINBLK_f.sci" */
function GAINBLK_f() {
    GAINBLK_f.prototype.define = function GAINBLK_f() {
        this.gain = 1;
        var in1 = 1;
        var out = 1;
        this.model = scicos_model();
        this.model.sim = new ScilabString(["gain"]);
        this.model.in = new ScilabDouble([in1]);
        this.model.out = new ScilabDouble([out]);
        this.model.rpar = new ScilabDouble([this.gain]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabDouble([true,false]);
        this.exprs = [strcat(sci2exp(this.gain))];
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"GAINBLK_f\",sz(1),sz(2));"]);
        this.x = standard_define([2,2],this.model,this.exprs,this.gr_i);
        return new BasicBlock(this.x);
    }
    GAINBLK_f.prototype.details = function GAINBLK_f() {
        return this.x;
    }
    GAINBLK_f.prototype.get = function GAINBLK_f() {
        var options = {
            gain:["Gain",this.gain],
        }
        return options;
    }
    GAINBLK_f.prototype.set = function GAINBLK_f() {
        this.gain = parseFloat(arguments[0]["gain"])
        this.exprs = arguments[0]["exprs"]
        this.exprs = this.graphics.exprs;
        while (true) {
            [ok,this.gain,this.exprs] = scicos_getvalue("Set gain block parameters",["Gain"],list("mat",[-1,-1]),this.exprs[1-1]);
            if (!ok) {
                break;
            }
            if (this.gain==[]) {
                message("Gain must have at least one element");
            } else {
                var tmpvar0 = size(this.gain);
                var out = tmpvar0[0];
                var in1 = tmpvar0[1];
                var tmpvar1 = check_io(this.model,this.graphics,in1,out,[],[]);
                this.model = tmpvar1[0];
                this.graphics = tmpvar1[1];
                var ok = tmpvar1[2];
                if (ok) {
                    this.graphics.exprs = new ScilabDouble([this.exprs]);
                    this.model.rpar = new ScilabDouble(this.gain.slice());
                    this.x.graphics = this.graphics;
                    this.x.model = this.model;
                    break;
                }
            }
        }
        return new BasicBlock(this.x);
    }
}
