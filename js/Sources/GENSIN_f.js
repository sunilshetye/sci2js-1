/* autogenerated from "macros/Sources/GENSIN_f.sci" */
function GENSIN_f() {
    GENSIN_f.prototype.define = function GENSIN_f() {
        var rpar = [[1],[1],[0]];
        this.model = scicos_model();
        this.model.sim = new ScilabString(["gensin"]);
        this.model.in = new ScilabDouble([]);
        this.model.out = new ScilabDouble([1]);
        this.model.out2 = new ScilabDouble([1]);
        this.model.outtyp = new ScilabDouble([1]);
        this.model.rpar = new ScilabDouble([1],[1],[0]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabDouble([false,true]);
        this.exprs = [[string(rpar[1-1])],[string(rpar[2-1])],[string(rpar[3-1])]];
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"GENSIN_f\",sz(1),sz(2));"]);
        this.x = standard_define([3,2],this.model,this.exprs,this.gr_i);
        return new BasicBlock(this.x);
    }
    GENSIN_f.prototype.details = function GENSIN_f() {
        return this.x;
    }
    GENSIN_f.prototype.get = function GENSIN_f() {
        var options = {
            M:["Magnitude",this.M],
            F:["Frequency (rad/s)",this.F],
            P:["Phase (rad)",this.P],
        }
        return options;
    }
    GENSIN_f.prototype.set = function GENSIN_f() {
        this.M = arguments[0]["M"]
        this.F = arguments[0]["F"]
        this.P = arguments[0]["P"]
        this.exprs = arguments[0]["exprs"]
        this.exprs = this.graphics.exprs;
        while (true) {
            [ok,this.M,this.F,this.P,this.exprs] = scicos_getvalue([[msprintf("Set %s block parameters","GENSIN_f")],[" "],["Sine wave generator"],[" "]],["Magnitude","Frequency (rad/s)","Phase (rad)"],list("vec",1,"vec",1,"vec",1),this.exprs);
            if (!ok) {
                break;
            }
            if (this.F<0) {
                block_parameter_error(msprintf("Wrong value for \'Frequency\' parameter: %e.",this.F),"Strictly positive integer expected.");
                var ok = false;
            }
            if (ok) {
                var tmpvar0 = check_io(this.model,this.graphics,[],1,[],[]);
                this.model = tmpvar0[0];
                this.graphics = tmpvar0[1];
                var ok = tmpvar0[2];
                this.model.rpar = new ScilabDouble([this.M],[this.F],[this.P]);
                this.model.out2 = new ScilabDouble([1]);
                this.model.outtyp = new ScilabDouble([1]);
                this.graphics.exprs = new ScilabDouble([this.exprs]);
                this.x.graphics = this.graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
