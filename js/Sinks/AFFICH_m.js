/* autogenerated from "macros/Sinks/AFFICH_m.sci" */
function AFFICH_m() {
    AFFICH_m.prototype.define = function AFFICH_m() {
        this.font = 1;
        this.fontsize = 1;
        this.colr = 1;
        this.nt = 5;
        this.nd = 1;
        this.in1 = [1,1];
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["affich2"]), new ScilabDouble([4]));
        this.model.in = new ScilabDouble([this.in1[1-1][1-1]]);
        this.model.in2 = new ScilabDouble([this.in1[1-1][2-1]]);
        this.model.evtin = new ScilabDouble([1]);
        this.model.dstate = new ScilabDouble([-1],[0],[0],[1],[1],[0],[zeros(this.in1[1-1][1-1]*this.in1[1-1][2-1],1)]);
        this.model.ipar = new ScilabDouble([this.font],[this.fontsize],[this.colr],[1000],[this.nt],[this.nd],[this.in1[1-1][1-1]]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.firing = new ScilabDouble([]);
        this.model.dep_ut = new ScilabBoolean([true,false]);
        this.model.label = new ScilabString([""]);
        this.exprs = [[sci2exp([this.model.in,this.model.in2])],[string(this.font)],[string(this.fontsize)],[string(this.colr)],[string(this.nt)],[string(this.nd)],[string(0)]];
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"AFFICH_m\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3,2]),this.model,new ScilabDouble(this.exprs),this.gr_i);
        return new AfficheBlock(this.x);
    }
    AFFICH_m.prototype.details = function AFFICH_m() {
        return this.x;
    }
    AFFICH_m.prototype.get = function AFFICH_m() {
        var options = {
            in1:["Input Size",this.in1],
            font:["Font number",this.font],
            fontsize:["Font size",this.fontsize],
            colr:["Color",this.colr],
            nt:["Total number of digits",this.nt],
            nd:["Number of rational part digits",this.nd],
            herit:["Block inherits (1) or not (0)",this.herit],
        }
        return options;
    }
    AFFICH_m.prototype.set = function AFFICH_m() {
        this.in1 = inverse(arguments[0]["in1"])
        this.font = parseFloat(arguments[0]["font"])
        this.fontsize = parseFloat(arguments[0]["fontsize"])
        this.colr = parseFloat(arguments[0]["colr"])
        this.nt = parseFloat(arguments[0]["nt"])
        this.nd = parseFloat(arguments[0]["nd"])
        this.herit = arguments[0]["herit"]
        this.exprs = arguments[0]["exprs"]
        this.exprs = this.graphics.exprs;
        while (true) {
            [ok,this.in1,this.font,this.fontsize,this.colr,this.nt,this.nd,this.herit,this.exprs] = scicos_getvalue("Set  parameters",["Input Size","Font number","Font size","Color","Total number of digits","Number of rational part digits","Block inherits (1) or not (0)"],list("mat",[1,2],"vec",1,"vec",1,"vec",1,"vec",1,"vec",1,"vec",1),this.exprs);
            if (!ok) {
                break;
            }
            var mess = [];
            if (this.font<=0) {
                var mess = [[mess],["Font number must be positive"],[" "]];
                var ok = false;
            }
            if (this.fontsize<=0) {
                var mess = [[mess],["Font size must be positive"],[" "]];
                var ok = false;
            }
            if (this.nt<=3) {
                var mess = [[mess],["Total number of digits must be greater than 3"],[" "]];
                var ok = false;
            }
            if (this.nd<0) {
                var mess = [[mess],["Number of rational part digits must be ","greater or equal 0"],[" "]];
                var ok = false;
            }
            if (!ok) {
                message([["Some specified values are inconsistent:"],[" "],[mess]]);
            }
            if (!or(this.herit==[0,1])) {
                var mess = [[mess],["Accept inherited values are 0 and 1"],[" "]];
                var ok = false;
            }
            if (!ok) {
                message([["Some specified values are inconsistent:"],[" "],[mess]]);
            }
            if (ok) {
                var tmpvar0 = set_io(this.model,this.graphics,list(this.in1,1),list(),ones(1-this.herit,1),[]);
                this.model = tmpvar0[0];
                this.graphics = tmpvar0[1];
                var ok = tmpvar0[2];
            }
            if (ok) {
                this.model.ipar = new ScilabDouble([this.font],[this.fontsize],[this.colr],[this.nt],[this.nd],[this.in1[1-1][1-1]]);
                this.model.dstate = new ScilabDouble([-1],[0],[0],[1],[1],[0],[zeros(this.in1[1-1][1-1]*this.in1[1-1][2-1],1)]);
                this.model.evtin = new ScilabDouble([ones(1-this.herit,1)]);
                this.graphics.exprs = new ScilabDouble([this.exprs]);
                this.x.graphics = this.graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new AfficheBlock(this.x);
    }
}
