/* autogenerated from "macros/Linear/INTEGRAL.sci" */
function INTEGRAL() {
    INTEGRAL.prototype.define = function INTEGRAL() {
        this.maxp = 1;
        var minp = -1;
        var rpar = [];
        this.model = scicos_model();
        this.model.state = new ScilabDouble([0]);
        this.model.sim = list(new ScilabString(["integral_func"]), new ScilabDouble([4]));
        this.model.in1 = new ScilabDouble([1]);
        this.model.out = new ScilabDouble([1]);
        this.model.rpar = new ScilabDouble(rpar);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabDouble([false,true]);
        var exprs = string([[0],[0],[0],[this.maxp],[minp]]);
        var gr_i = [];
        this.x = standard_define([2,2],this.model,exprs,gr_i);
        this.x.graphics.id = "1/s";
        return new BasicBlock(this.x);
    }
    INTEGRAL.prototype.details = function INTEGRAL() {
        return this.x;
    }
    INTEGRAL.prototype.get = function INTEGRAL() {
        var options = {
            x0:["Initial Condition",this.x0],
            reinit:["With re-intialization (1:yes, 0:no)",this.reinit],
            satur:["With saturation (1:yes, 0:no)",this.satur],
            maxp:["Upper limit",this.maxp],
            lowp:["Lower limit",this.lowp],
        }
        return options;
    }
    INTEGRAL.prototype.set = function INTEGRAL() {
        this.x0 = inverse(arguments[0]["x0"])
        this.reinit = parseFloat(arguments[0]["reinit"])
        this.satur = parseFloat(arguments[0]["satur"])
        this.maxp = parseFloat(arguments[0]["maxp"])
        this.lowp = arguments[0]["lowp"]
        this.x = arg1;
        this.graphics = arg1.graphics;
        var exprs = this.graphics.exprs;
        this.model = arg1.model;
        while (true) {
            [ok,this.x0,this.reinit,this.satur,this.maxp,this.lowp,exprs] = scicos_getvalue("Set Integral block parameters",["Initial Condition","With re-intialization (1:yes, 0:no)","With saturation (1:yes, 0:no)","Upper limit","Lower limit"],list("vec",-1,"vec",1,"vec",1,"vec",-1,"vec",-1),exprs);
            if (!ok) {
                break;
            }
            this.x0 = this.x0.slice();
            this.maxp = this.maxp.slice();
            this.lowp = this.lowp.slice();
            if (this.reinit!=0) {
                this.reinit = 1;
            }
            if (this.satur!=0) {
                this.satur = 1;
                if (size(this.maxp,"*")==1) {
                    this.maxp = this.maxp*ones(this.x0);
                }
                if (size(this.lowp,"*")==1) {
                    this.lowp = this.lowp*ones(this.x0);
                }
                if ((size(this.x0,1)!=size(this.maxp,1)||size(this.x0,1)!=size(this.lowp,1))) {
                    message("x0 and Upper limit and Lower limit must have same size");
                    var ok = false;
                } else if (or(this.maxp<=this.lowp)) {
                    message("Upper limits must be > Lower limits");
                    var ok = false;
                } else if (or(this.x0>this.maxp)||or(this.x0<this.lowp)) {
                    message("Initial condition x0 should be inside the limits");
                    var ok = false;
                } else {
                    var rpar = [[this.maxp],[this.lowp]];
                    this.model.nzcross = new ScilabDouble([size(this.x0,1)]);
                    this.model.nmode = new ScilabDouble([size(this.x0,1)]);
                }
            } else {
                var rpar = [];
                this.model.nzcross = new ScilabDouble([0]);
                this.model.nmode = new ScilabDouble([0]);
            }
            if (ok) {
                this.model.rpar = new ScilabDouble(rpar);
                this.model.state = new ScilabDouble(this.x0);
                var tmpvar0 = check_io(this.model,this.graphics,size(this.x0,1)*[[1],[ones(this.reinit,1)]],size(this.x0,1),ones(this.reinit,1),[]);
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
