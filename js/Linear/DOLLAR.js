/* autogenerated from "macros/Linear/DOLLAR.sci" */
function DOLLAR() {
    DOLLAR.prototype.define = function DOLLAR() {
        var z = 0;
        this.inh = 0;
        var in1 = 1;
        var exprs = string([[z],[this.inh]]);
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["dollar4"]), new ScilabDouble([4]));
        this.model.in1 = new ScilabDouble([in1]);
        this.model.out = new ScilabDouble([in1]);
        this.model.evtin = new ScilabDouble([1-this.inh]);
        this.model.dstate = new ScilabDouble([z]);
        this.model.blocktype = new ScilabString(["d"]);
        this.model.dep_ut = new ScilabDouble([false,false]);
        var gr_i = [];
        this.x = standard_define([2,2],this.model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    DOLLAR.prototype.details = function DOLLAR() {
        return this.x;
    }
    DOLLAR.prototype.get = function DOLLAR() {
        var options = {
            a:["initial condition",this.a],
            inh:["Inherit (no:0, yes:1)",this.inh],
        }
        return options;
    }
    DOLLAR.prototype.set = function DOLLAR() {
        this.a = arguments[0]["a"]
        this.inh = parseFloat(arguments[0]["inh"])
        this.x = arg1;
        this.graphics = arg1.graphics;
        var exprs = this.graphics.exprs;
        this.model = arg1.model;
        if (size(exprs,"*")<2) {
            exprs[2-1] = "0";
        }
        while (true) {
            [ok,this.a,this.inh,exprs] = scicos_getvalue("Set 1/z block parameters",["initial condition","Inherit (no:0, yes:1)"],list("mat",[-1,-2],"vec",-1),exprs);
            if (!ok) {
                break;
            }
            var out = [size(this.a,1),size(this.a,2)];
            if (out==0) {
                var out = [];
            }
            var in1 = out;
            this.model.sim = list(new ScilabString(["dollar4_m"]), new ScilabDouble([4]));
            this.model.odstate = list(new ScilabDouble([this.a]));
            this.model.dstate = new ScilabDouble([]);
            if (this.type[(this.a)==1-1]) {
                if (isreal(this.a)) {
                    var it = 1;
                    var ot = 1;
                    if ((size(this.a,1)==1||size(this.a,2)==1)) {
                        this.model.sim = list(new ScilabString(["dollar4"]), new ScilabDouble([4]));
                        this.model.dstate = new ScilabDouble(this.a.slice());
                        this.model.odstate = list();
                    }
                } else {
                    var it = 2;
                    var ot = 2;
                }
            } else if ((typeof(this.a)=="int32")) {
                var it = 3;
                var ot = 3;
            } else if ((typeof(this.a)=="int16")) {
                var it = 4;
                var ot = 4;
            } else if ((typeof(this.a)=="int8")) {
                var it = 5;
                var ot = 5;
            } else if ((typeof(this.a)=="uint32")) {
                var it = 6;
                var ot = 6;
            } else if ((typeof(this.a)=="uint16")) {
                var it = 7;
                var ot = 7;
            } else if ((typeof(this.a)=="uint8")) {
                var it = 8;
                var ot = 8;
            } else {
                message("type is not recognized");
                var ok = false;
            }
            if (ok) {
                var tmpvar0 = set_io(this.model,this.graphics,list(in1,it),list(out,ot),ones(1-this.inh,1),[]);
                this.model = tmpvar0[0];
                this.graphics = tmpvar0[1];
                var ok = tmpvar0[2];
            }
            if (ok) {
                this.graphics.exprs = new ScilabDouble([exprs]);
                this.x.graphics = this.graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
