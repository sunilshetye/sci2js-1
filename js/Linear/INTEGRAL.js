/* autogenerated from "macros/Linear/INTEGRAL.sci" */
function INTEGRAL() {
    INTEGRAL.prototype.define = function INTEGRAL() {
        this.maxp = 1;
        minp = -1;
        rpar = [];
        model = scicos_model();
        model.state = 0;
        model.sim = list("integral_func",4);
        model.in1 = 1;
        model.out = 1;
        model.rpar = rpar;
        model.blocktype = "c";
        model.dep_ut = [false,true];
        exprs = string([[0],[0],[0],[this.maxp],[minp]]);
        gr_i = [];
        this.x = standard_define([2,2],model,exprs,gr_i);
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
        this.x0 = inverse((arguments[0]["x0"]))
        this.reinit = parseFloat((arguments[0]["reinit"]))
        this.satur = parseFloat((arguments[0]["satur"]))
        this.maxp = parseFloat((arguments[0]["maxp"]))
        this.lowp = parseFloat((arguments[0]["lowp"]))
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
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
                    ok = false;
                } else if (or(this.maxp<=this.lowp)) {
                    message("Upper limits must be > Lower limits");
                    ok = false;
                } else if (or(this.x0>this.maxp)||or(this.x0<this.lowp)) {
                    message("Initial condition x0 should be inside the limits");
                    ok = false;
                } else {
                    rpar = [[this.maxp],[this.lowp]];
                    model.nzcross = size(this.x0,1);
                    model.nmode = size(this.x0,1);
                }
            } else {
                rpar = [];
                model.nzcross = 0;
                model.nmode = 0;
            }
            if (ok) {
                model.rpar = rpar;
                model.state = this.x0;
                [model,graphics,ok] = check_io(model,graphics,size(this.x0,1)*[[1],[ones(this.reinit,1)]],size(this.x0,1),ones(this.reinit,1),[]);
            }
            if (ok) {
                graphics.exprs = exprs;
                this.x.graphics = graphics;
                this.x.model = model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
