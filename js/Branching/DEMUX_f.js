/* autogenerated from "macros/Branching/DEMUX_f.sci" */
function DEMUX_f() {
    DEMUX_f.prototype.define = function DEMUX_f() {
        this.out = 2;
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["demux"]), new ScilabDouble([1]));
        this.model.in = new ScilabDouble([0]);
        this.model.out = new ScilabDouble(-transpose([1:this.out]));
        this.model.ipar = new ScilabDouble([this.out]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.firing = new ScilabDouble([]);
        this.model.dep_ut = new ScilabBoolean([true,false]);
        this.exprs = string(this.out);
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"DEMUX_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([.5,2]),this.model,new ScilabString([this.exprs]),this.gr_i);
        return new BasicBlock(this.x);
    }
    DEMUX_f.prototype.details = function DEMUX_f() {
        return this.x;
    }
    DEMUX_f.prototype.get = function DEMUX_f() {
        var options = {
            out:["number of output ports or vector of sizes",this.out],
        }
        return options;
    }
    DEMUX_f.prototype.set = function DEMUX_f() {
        this.out = parseFloat(arguments[0]["out"])
        this.exprs = arguments[0]["exprs"]
        this.exprs = this.graphics.exprs;
        while (true) {
            [ok,this.out,this.exprs] = scicos_getvalue("Set DEMUX block parameters",["number of output ports or vector of sizes"],list("vec",-1),this.exprs);
            if (!ok) {
                break;
            }
            if (size(this.out,"*")==1) {
                if (this.out<2||this.out>8) {
                    message("Block must have at least 2 and at most 8 output ports");
                    var ok = false;
                } else {
                    var tmpvar0 = check_io(this.model,this.graphics,0,-transpose([1:this.out]),[],[]);
                    this.model = tmpvar0[0];
                    this.graphics = tmpvar0[1];
                    var ok = tmpvar0[2];
                }
            } else {
                if (size(this.out,"*")<2||size(this.out,"*")>8||or(this.out==0)) {
                    message([["Block must have at least 2 and at most 8 output ports"],["and size 0 is not allowed"]]);
                    var ok = false;
                } else {
                    if (min(this.out)<0) {
                        var nin = 0;
                    } else {
                        var nin = sum(this.out);
                    }
                    var tmpvar1 = check_io(this.model,this.graphics,nin,this.out.slice(),[],[]);
                    this.model = tmpvar1[0];
                    this.graphics = tmpvar1[1];
                    var ok = tmpvar1[2];
                    if (ok) {
                        this.out = size(this.out,"*");
                    }
                }
            }
            if (ok) {
                this.graphics.exprs = new ScilabDouble([this.exprs]);
                this.model.ipar = new ScilabDouble([this.out]);
                this.x.graphics = this.graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
