/* autogenerated from "macros/MatrixOp/SUBMAT.sci" */
function SUBMAT() {
    SUBMAT.prototype.define = function SUBMAT() {
        this.model = scicos_model();
        var function_name = "submat";
        var funtyp = 4;
        this.model.sim = list(new ScilabString([function_name]), new ScilabDouble([funtyp]));
        this.model.in1 = new ScilabDouble([-1]);
        this.model.in2 = new ScilabDouble([-2]);
        this.model.intyp = new ScilabDouble([1]);
        this.model.out = new ScilabDouble([-1]);
        this.model.out2 = new ScilabDouble([-2]);
        this.model.outtyp = new ScilabDouble([1]);
        this.model.evtin = new ScilabDouble([]);
        this.model.evtout = new ScilabDouble([]);
        this.model.state = new ScilabDouble([]);
        this.model.dstate = new ScilabDouble([]);
        this.model.rpar = new ScilabDouble([]);
        this.model.ipar = new ScilabDouble([1],[1],[1],[1]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.firing = new ScilabDouble([]);
        this.model.dep_ut = new ScilabDouble([true,false]);
        var label = [[sci2exp(1)],[sci2exp(1)],[sci2exp(1)],[sci2exp(1)],[sci2exp(1)]];
        var gr_i = [];
        this.x = standard_define([2.5,2],this.model,label,gr_i);
        return new BasicBlock(this.x);
    }
    SUBMAT.prototype.details = function SUBMAT() {
        return this.x;
    }
    SUBMAT.prototype.get = function SUBMAT() {
        var options = {
            typ:["Datatype (1=real double  2=Complex)",this.typ],
            a:["Starting Row Index",this.a],
            b:["Ending Row Index",this.b],
            c:["Starting Column Index",this.c],
            d:["Ending Column Index",this.d],
            inp:["Input Dimensions",this.inp],
        }
        return options;
    }
    SUBMAT.prototype.set = function SUBMAT() {
        this.typ = inverse(arguments[0]["typ"])
        this.a = arguments[0]["a"]
        this.b = arguments[0]["b"]
        this.c = arguments[0]["c"]
        this.d = arguments[0]["d"]
        this.inp = arguments[0]["inp"]
        this.x = arg1;
        this.graphics = arg1.graphics;
        var label = this.graphics.exprs;
        this.model = arg1.model;
        if (size(label,"*")==5) {
            label[6-1] = sci2exp([1,1]);
        }
        while (true) {
            [ok,this.typ,this.a,this.b,this.c,this.d,this.inp,exprs] = scicos_getvalue("Set SUBMAT Block",["Datatype (1=real double  2=Complex)","Starting Row Index","Ending Row Index","Starting Column Index","Ending Column Index","Input Dimensions"],list("vec",1,"vec",1,"vec",1,"vec",1,"vec",1,"vec",2),label);
            if (!ok) {
                break;
            }
            if ((this.typ==1)) {
                var function_name = "submat";
                var ot = 1;
                var it = 1;
            } else if ((this.typ==2)) {
                var function_name = "submatz";
                var ot = 2;
                var it = 2;
            } else {
                message("Datatype is not supported");
                var ok = false;
            }
            if ((this.a<=0)||(this.b<=0)||(this.c<=0)||(this.d<=0)) {
                message("invalid index");
                var ok = false;
            }
            if (this.b<this.a) {
                message("ending row must be greater than starting row");
                var ok = false;
            }
            if (this.d<this.c) {
                message("ending column must be greater than starting column");
                var ok = false;
            }
            if (this.b>this.inp[1-1]) {
                message("index of ending row is out of range");
                var ok = false;
            }
            if (this.d>this.inp[2-1]) {
                message("index of ending column is out of range");
                var ok = false;
            }
            this.model.ipar = new ScilabDouble([this.a],[this.b],[this.c],[this.d]);
            var in1 = [this.inp[1-1],this.inp[2-1]];
            var out = [(this.b-this.a)+1,(this.d-this.c)+1];
            var funtyp = 4;
            var label = exprs;
            if (ok) {
                var tmpvar0 = set_io(this.model,this.graphics,list(in1,it),list(out,ot),[],[]);
                this.model = tmpvar0[0];
                this.graphics = tmpvar0[1];
                var ok = tmpvar0[2];
                this.model.sim = list(new ScilabString([function_name]), new ScilabDouble([funtyp]));
                this.graphics.exprs = new ScilabDouble([label]);
                arg1.graphics = this.graphics;
                arg1.model = this.model;
                this.x = arg1;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
