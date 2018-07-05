/* autogenerated from "macros/Sources/CONST_m.sci" */
function CONST_m() {
    CONST_m.prototype.define = function CONST_m() {
        this.C = [1];
        model = scicos_model();
        model.sim = list("cstblk4",4);
        model.in1 = [];
        model.out = size(this.C,1);
        model.in2 = [];
        model.out2 = size(this.C,2);
        model.rpar = this.C;
        model.opar = list();
        model.blocktype = "d";
        model.dep_ut = [false,false];
        exprs = sci2exp(this.C);
        gr_i = [];
        this.x = standard_define([2,2],model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    CONST_m.prototype.details = function CONST_m() {
        return this.x;
    }
    CONST_m.prototype.get = function CONST_m() {
        var options = {
        }
        return options;
    }
    CONST_m.prototype.set = function CONST_m() {
        this.C = inverse((arguments[0]["C"]))
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        while (true) {
            [ok,this.C,exprs] = scicos_getvalue([[msprintf("Set %s block parameters","CONST_m")],[" "],["Constant value generator"],[" "]],"Constant Value",list("vec",-1),exprs);
            if (!ok) {
                break;
            }
            nout = size(this.C);
            if (find(nout==0)!=[]) {
                block_parameter_error(msprintf("Wrong size for \'%s\' parameter","Constant Value"),"Constant value must have at least one element.");
            } else {
                model.sim = list("cstblk4_m",4);
                model.opar = list(this.C);
                if ((this.type[this.C-1]==1)) {
                    if (isreal(this.C)) {
                        ot = 1;
                    } else {
                        ot = 2;
                    }
                } else if ((typeof(this.C)=="int32")) {
                    ot = 3;
                } else if ((typeof(this.C)=="int16")) {
                    ot = 4;
                } else if ((typeof(this.C)=="int8")) {
                    ot = 5;
                } else if ((typeof(this.C)=="uint32")) {
                    ot = 6;
                } else if ((typeof(this.C)=="uint16")) {
                    ot = 7;
                } else if ((typeof(this.C)=="uint8")) {
                    ot = 8;
                } else {
                    block_parameter_error(msprintf("Wrong type for \'%s\' parameter","Constant Value"),"Value type must be a numeric type (double, complex, int, int8, ...).");
                    ok = false;
                }
                if (ok) {
                    model.rpar = [];
                    [model,graphics,ok] = set_io(model,graphics,list(),list(nout,ot),[],[]);
                    graphics.exprs = exprs;
                    this.x.graphics = graphics;
                    this.x.model = model;
                    break;
                }
            }
        }
        return new BasicBlock(this.x);
    }
}
