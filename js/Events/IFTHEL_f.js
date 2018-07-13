/* autogenerated from "macros/Events/IFTHEL_f.sci" */
function IFTHEL_f() {
    IFTHEL_f.prototype.define = function IFTHEL_f() {
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["ifthel"]), new ScilabDouble([-1]));
        this.model.in = new ScilabDouble([1]);
        this.model.in2 = new ScilabDouble([1]);
        this.model.intyp = new ScilabDouble([-1]);
        this.model.evtin = new ScilabDouble([1]);
        this.model.evtout = new ScilabDouble([1],[1]);
        this.model.blocktype = new ScilabString(["l"]);
        this.model.firing = new ScilabDouble([-1,-1]);
        this.model.dep_ut = new ScilabDouble([true,false]);
        this.model.nmode = new ScilabDouble([1]);
        this.model.nzcross = new ScilabDouble([1]);
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"IFTHEL_f\",sz(1),sz(2));"]);
        this.exprs = [[string(this.model.in)],[string(this.model.nmode)]];
        this.x = standard_define([3,3],this.model,this.exprs,this.gr_i);
        return new BasicBlock(this.x);
    }
    IFTHEL_f.prototype.details = function IFTHEL_f() {
        return this.x;
    }
    IFTHEL_f.prototype.get = function IFTHEL_f() {
        var options = {
            inh:["Inherit (1: no, 0: yes)",this.inh],
            nmod:["zero-crossing (0: no, 1: yes)",this.nmod],
        }
        return options;
    }
    IFTHEL_f.prototype.set = function IFTHEL_f() {
        this.inh = inverse(arguments[0]["inh"])
        this.nmod = parseFloat(arguments[0]["nmod"])
        this.exprs = arguments[0]["exprs"]
        this.exprs = this.graphics.exprs;
        if (this.exprs==[]) {
            this.exprs = string(1);
        }
        if (size(this.exprs,"*")==1) {
            this.exprs[2-1] = string(1);
        }
        while (true) {
            [ok,this.inh,this.nmod,this.exprs] = scicos_getvalue("Set parameters",["Inherit (1: no, 0: yes)","zero-crossing (0: no, 1: yes)"],list("vec",1,"vec",1),this.exprs);
            if (!ok) {
                break;
            }
            this.model.dep_ut = new ScilabDouble([true,false]);
            if (this.nmod!=0) {
                this.nmod = 1;
            }
            if (this.inh!=1) {
                this.inh = [];
            }
            var tmpvar0 = check_io(this.model,this.graphics,1,[],this.inh,[[1],[1]]);
            this.model = tmpvar0[0];
            this.graphics = tmpvar0[1];
            var ok = tmpvar0[2];
            if (ok) {
                this.graphics.exprs = new ScilabString([this.exprs]);
                this.model.evtin = new ScilabDouble(this.inh);
                this.model.sim[2-1] = new ScilabDouble([-1]);
                this.model.nmode = new ScilabDouble([this.nmod]);
                this.model.nzcross = new ScilabDouble([this.nmod]);
                this.x.graphics = this.graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
