/* autogenerated from "macros/Linear/GAIN_f.sci" */
function GAIN_f() {
    GAIN_f.prototype.define = function GAIN_f() {
        this.gain = 1;
        var in1 = 1;
        var out = 1;
        this.model = scicos_model();
        this.model.sim = new ScilabString(["gain"]);
        this.model.in = new ScilabDouble([1]);
        this.model.out = new ScilabDouble([1]);
        this.model.rpar = new ScilabDouble([this.gain]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabBoolean([true,false]);
        var exprs = [[strcat(sci2exp(this.gain))],[strcat(sci2exp(in1))],[strcat(sci2exp(out))]];
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"GAIN_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]),this.model,new ScilabDouble(exprs),gr_i);
        return new BasicBlock(this.x);
    }
    GAIN_f.prototype.details = function GAIN_f() {
        return this.x;
    }
    GAIN_f.prototype.get = function GAIN_f() {
        var exprs = this.graphics.exprs;
        this.set_param_popup_title = "Set gain block parameters";
        var options = {
            gain:["Gain",this.gain],
        }
        return options;
    }
    GAIN_f.prototype.set = function GAIN_f() {
        var exprs = this.graphics.exprs;
        while (true) {
            var ok = true;
            this.gain = parseFloat(arguments[0]["gain"]);
            var exprs = [arguments[0]["gain"]];
            if (!ok) {
                break;
            }
            if (this.gain.length==0) {
                message("Gain must have at least one element");
                throw "user error";
            } else {
                var tmpvar0 = size(this.gain);
                var out = tmpvar0[0];
                var in1 = tmpvar0[1];
                var tmpvar1 = check_io(this.model,this.graphics,in1,out,[],[]);
                this.model = tmpvar1[0];
                this.graphics = tmpvar1[1];
                var ok = tmpvar1[2];
                if (ok) {
                    this.graphics.exprs = new ScilabDouble([exprs]);
                    this.model.rpar = new ScilabDouble(this.gain.slice());
                    this.x.graphics = this.graphics;
                    this.x.model = this.model;
                    break;
                }
            }
        }
        return new BasicBlock(this.x);
    }
    GAIN_f.prototype.get_popup_title = function GAIN_f() {
        return this.set_param_popup_title;
    }
    GAIN_f.prototype.importset = function GAIN_f() {
        var graphics = this.x.graphics;
        var ary = getData(graphics.exprs);
        this.gain = ary[0];
    }
    GAIN_f.prototype.getContainer = function GAIN_f() { return new BasicBlock(this.x); }
}
