/* autogenerated from "macros/IntegerOp/INTMUL.sci" */
function INTMUL() {
    INTMUL.prototype.define = function INTMUL() {
        var sgn = 0;
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["matmul_i32"]), new ScilabDouble([4]));
        this.model.in1 = new ScilabDouble([-1],[-2]);
        this.model.out = new ScilabDouble([-1]);
        this.model.in2 = new ScilabDouble([-2],[-3]);
        this.model.out2 = new ScilabDouble([-3]);
        this.model.intyp = [3,3];
        this.model.outtyp = new ScilabDouble([3]);
        this.model.rpar = [];
        this.model.ipar = new ScilabDouble([sgn]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = [true,false];
        var exprs = [[sci2exp(3)],[sci2exp(0)]];
        var gr_i = [];
        this.x = standard_define([2,2],this.model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    INTMUL.prototype.details = function INTMUL() {
        return this.x;
    }
    INTMUL.prototype.get = function INTMUL() {
        var options = {
            Datatype:[msprintf("Data Type %s","(3:int32, 4:int16, 5:int8, ...)"),this.Datatype],
            np:["Do on Overflow (0:Nothing, 1:Saturate, 2:Error)",this.np],
        }
        return options;
    }
    INTMUL.prototype.set = function INTMUL() {
        this.Datatype = arguments[0]["Datatype"]
        this.np = arguments[0]["np"]
        this.x = arg1;
        var graphics = arg1.graphics;
        this.model = arg1.model;
        var exprs = graphics.exprs;
        while (true) {
            [ok,this.Datatype,this.np,exprs] = scicos_getvalue([[msprintf("Set %s block parameters","INTMUL")],[" "],["Integer matrix multiplication"],[" "]],[msprintf("Data Type %s","(3:int32, 4:int16, 5:int8, ...)"),"Do on Overflow (0:Nothing, 1:Saturate, 2:Error)"],list("vec",1,"vec",1),exprs);
            if (!ok) {
                break;
            }
            var it = this.Datatype*ones(1,2);
            var ot = this.Datatype;
            if ((this.np!=0&&this.np!=1&&this.np!=2)) {
                block_parameter_error(msprintf("Wrong value for \'%s\' parameter: %d.","Do on Overflow",this.np),msprintf("Must be in the interval %s.","[0, 2]"));
                var ok = false;
            } else if (this.Datatype==3) {
                if (this.np==0) {
                    this.model.sim = list(new ScilabString(["matmul_i32n"]), new ScilabDouble([4]));
                } else if (this.np==1) {
                    this.model.sim = list(new ScilabString(["matmul_i32s"]), new ScilabDouble([4]));
                } else {
                    this.model.sim = list(new ScilabString(["matmul_i32e"]), new ScilabDouble([4]));
                }
            } else if (this.Datatype==4) {
                if (this.np==0) {
                    this.model.sim = list(new ScilabString(["matmul_i16n"]), new ScilabDouble([4]));
                } else if (this.np==1) {
                    this.model.sim = list(new ScilabString(["matmul_i16s"]), new ScilabDouble([4]));
                } else {
                    this.model.sim = list(new ScilabString(["matmul_i16e"]), new ScilabDouble([4]));
                }
            } else if (this.Datatype==5) {
                if (this.np==0) {
                    this.model.sim = list(new ScilabString(["matmul_i8n"]), new ScilabDouble([4]));
                } else if (this.np==1) {
                    this.model.sim = list(new ScilabString(["matmul_i8s"]), new ScilabDouble([4]));
                } else {
                    this.model.sim = list(new ScilabString(["matmul_i8e"]), new ScilabDouble([4]));
                }
            } else if (this.Datatype==6) {
                if (this.np==0) {
                    this.model.sim = list(new ScilabString(["matmul_ui32n"]), new ScilabDouble([4]));
                } else if (this.np==1) {
                    this.model.sim = list(new ScilabString(["matmul_ui32s"]), new ScilabDouble([4]));
                } else {
                    this.model.sim = list(new ScilabString(["matmul_ui32e"]), new ScilabDouble([4]));
                }
            } else if (this.Datatype==7) {
                if (this.np==0) {
                    this.model.sim = list(new ScilabString(["matmul_ui16n"]), new ScilabDouble([4]));
                } else if (this.np==1) {
                    this.model.sim = list(new ScilabString(["matmul_ui16s"]), new ScilabDouble([4]));
                } else {
                    this.model.sim = list(new ScilabString(["matmul_ui16e"]), new ScilabDouble([4]));
                }
            } else if (this.Datatype==8) {
                if (this.np==0) {
                    this.model.sim = list(new ScilabString(["matmul_ui8n"]), new ScilabDouble([4]));
                } else if (this.np==1) {
                    this.model.sim = list(new ScilabString(["matmul_ui8s"]), new ScilabDouble([4]));
                } else {
                    this.model.sim = list(new ScilabString(["matmul_ui8e"]), new ScilabDouble([4]));
                }
            } else {
                block_parameter_error(msprintf("Wrong value for \'%s\' parameter: %d.","Data Type",ot),msprintf("Must be in the interval %s.","[3, 8]"));
                var ok = false;
            }
            var in1 = [this.model.in1,this.model.in2];
            var out = [this.model.out,this.model.out2];
            if (ok) {
                var tmpvar0 = set_io(this.model,graphics,list(in1,it),list(out,ot),[],[])
                this.model = tmpvar0[0]
                var graphics = tmpvar0[1]
                var ok = tmpvar0[2];
            }
            if (ok) {
                this.model.ipar = new ScilabDouble([this.np]);
                graphics.exprs = exprs;
                this.x.graphics = graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
