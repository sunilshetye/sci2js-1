/* autogenerated from "macros/Sources/IN_f.sci" */
function IN_f() {
    IN_f.prototype.define = function IN_f() {
        var prt = 1;
        this.model = scicos_model();
        this.model.sim = new ScilabString(["input"]);
        this.model.out = new ScilabDouble([-1]);
        this.model.out2 = new ScilabDouble([-2]);
        this.model.outtyp = new ScilabDouble([-1]);
        this.model.ipar = new ScilabDouble([prt]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabBoolean([false,false]);
        var exprs = sci2exp(prt);
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"IN_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([1,1]),this.model,new ScilabString([exprs]),gr_i);
        return new ExplicitInBlock(this.x);
    }
    IN_f.prototype.details = function IN_f() {
        return this.x;
    }
    IN_f.prototype.get = function IN_f() {
        alert("parameters cannot be modified");
    }
    IN_f.prototype.set = function IN_f() {
        var exprs = this.graphics.exprs;
        if (size(exprs,"*")==2) {
            var exprs = exprs[1-1];
        }
        if (size(exprs,"*")==1) {
            var exprs = [[exprs[1-1]],["[-1 -2]"],["-1"]];
        }
        while (true) {
            var tmpvar0 = getvalue("Set Input block parameters",[["Port number"],["Outport size ([-1 -2] for inherit)"],["Outport Type (-1 for inherit)"]],list("vec",1,"vec",-1,"vec",1),exprs);
            var ok = tmpvar0[0];
            var prt = tmpvar0[1];
            var otsz = tmpvar0[2];
            var ot = tmpvar0[3];
            var exprs = tmpvar0[4];
            if (!ok) {
                break;
            }
            var prt = int(prt);
            if (prt<=0) {
                message("Port number must be a positive integer");
                throw "user error";
            } else if (!isequal(size(otsz,"*"),2)) {
                message("Outport Size must be a 2 elements vector");
                throw "user error";
            } else if (((ot<1||ot>9)&&(ot!=-1))) {
                message("Outport type must be a number between 1 and 9, or -1 for inheritance.");
                throw "user error";
            } else {
                if (this.model.ipar!=prt) {
                    var needcompile = 4;
                    var y = needcompile;
                }
                this.model.ipar = new ScilabDouble([prt]);
                this.model.firing = new ScilabDouble([]);
                this.model.out = new ScilabDouble([otsz[1-1]]);
                this.model.out2 = new ScilabDouble([otsz[2-1]]);
                this.model.outtyp = new ScilabDouble([ot]);
                this.graphics.exprs = new ScilabDouble(exprs);
                this.x.graphics = this.graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new ExplicitInBlock(this.x);
    }
    IN_f.prototype.get_popup_title = function IN_f() {
        return;
    }
    IN_f.prototype.getContainer = function IN_f() { return new ExplicitInBlock(this.x); }
}
