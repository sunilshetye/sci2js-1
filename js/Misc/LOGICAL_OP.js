/* autogenerated from "macros/Misc/LOGICAL_OP.sci" */
function LOGICAL_OP() {
    LOGICAL_OP.prototype.define = function LOGICAL_OP() {
        var in1 = [[-1],[-1]];
        var ipar = [0];
        this.nin = 2;
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["logicalop"]), new ScilabDouble([4]));
        this.model.in = new ScilabDouble(in1);
        this.model.out = new ScilabDouble([-1]);
        this.model.ipar = new ScilabDouble(ipar);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabDouble([true,false]);
        this.exprs = [[string(this.nin)],[string(ipar)]];
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"LOGICAL_OP\",sz(1),sz(2));"]);
        this.x = standard_define([2,2],this.model,this.exprs,this.gr_i);
        return new BasicBlock(this.x);
    }
    LOGICAL_OP.prototype.details = function LOGICAL_OP() {
        return this.x;
    }
    LOGICAL_OP.prototype.get = function LOGICAL_OP() {
        var options = {
            nin:["number of inputs",this.nin],
            rule:["Operator: AND (0), OR (1), NAND (2), NOR (3), XOR (4), NOT (5)",this.rule],
            Datatype:["Datatype (1=double 3=int32 ...)",this.Datatype],
            tp:["Bitwise Rule(0=No 1=yes)",this.tp],
        }
        return options;
    }
    LOGICAL_OP.prototype.set = function LOGICAL_OP() {
        this.nin = parseFloat(arguments[0]["nin"])
        this.rule = parseFloat(arguments[0]["rule"])
        this.Datatype = arguments[0]["Datatype"]
        this.tp = parseFloat(arguments[0]["tp"])
        this.exprs = inverse(arguments[0]["exprs"])
        this.exprs = this.graphics.exprs;
        if (size(this.exprs,1)==2) {
            this.exprs = [[this.exprs],[sci2exp(1)],[sci2exp(0)]];
        }
        while (true) {
            [ok,this.nin,this.rule,this.Datatype,this.tp,this.exprs] = scicos_getvalue("Set parameters",["number of inputs","Operator: AND (0), OR (1), NAND (2), NOR (3), XOR (4), NOT (5)","Datatype (1=double 3=int32 ...)","Bitwise Rule(0=No 1=yes)"],list("vec",1,"vec",1,"vec",1,"vec",1),this.exprs);
            if (!ok) {
                break;
            }
            this.nin = int(this.nin);
            this.rule = int(this.rule);
            this.tp = int(this.tp);
            if (this.nin<1) {
                message("Number of inputs must be >=1 ");
                var ok = false;
            } else if ((this.rule<0)||(this.rule>5)) {
                message("Incorrect operator "+string(this.rule)+" ; must be 0 to 5.");
                var ok = false;
            } else if ((this.rule==5)&&(this.nin>1)) {
                message("Only one input allowed for NOT operation");
                this.nin = 1;
            } else if (((this.Datatype==1)&&(this.tp!=0))) {
                message("Bitwise Rule is only activated when Data type is integer");
                var ok = false;
            }
            if (ok) {
                if ((this.tp!=0)) {
                    this.tp = 1;
                }
                if (this.Datatype==1) {
                    this.model.sim = list(new ScilabString(["logicalop"]), new ScilabDouble([4]));
                    this.model.ipar = new ScilabDouble([this.rule]);
                } else {
                    if (this.Datatype==3) {
                        this.model.sim = list(new ScilabString(["logicalop_i32"]), new ScilabDouble([4]));
                    } else if (this.Datatype==4) {
                        this.model.sim = list(new ScilabString(["logicalop_i16"]), new ScilabDouble([4]));
                    } else if (this.Datatype==5) {
                        this.model.sim = list(new ScilabString(["logicalop_i8"]), new ScilabDouble([4]));
                    } else if (this.Datatype==6) {
                        this.model.sim = list(new ScilabString(["logicalop_ui32"]), new ScilabDouble([4]));
                    } else if (this.Datatype==7) {
                        this.model.sim = list(new ScilabString(["logicalop_ui16"]), new ScilabDouble([4]));
                    } else if (this.Datatype==8) {
                        this.model.sim = list(new ScilabString(["logicalop_ui8"]), new ScilabDouble([4]));
                    } else {
                        message("Datatype is not supported");
                        var ok = false;
                    }
                    this.model.ipar = new ScilabDouble([this.rule],[this.tp]);
                }
                if (ok) {
                    var it = this.Datatype*ones(this.nin,1);
                    var ot = this.Datatype;
                    var in1 = [-ones(this.nin,1),-2*ones(this.nin,1)];
                    if ((this.rule!=5)&&(this.nin==1)) {
                        var out = [1,1];
                        var tmpvar0 = set_io(this.model,this.graphics,list(in1,it),list(out,ot),[],[]);
                        this.model = tmpvar0[0];
                        this.graphics = tmpvar0[1];
                        var ok = tmpvar0[2];
                    } else {
                        var out = [-1,-2];
                        var tmpvar1 = set_io(this.model,this.graphics,list(in1,it),list(out,ot),[],[]);
                        this.model = tmpvar1[0];
                        this.graphics = tmpvar1[1];
                        var ok = tmpvar1[2];
                    }
                }
                if (ok) {
                    if (this.rule==0) {
                        var label = "AND";
                    } else if (this.rule==1) {
                        var label = "OR";
                    } else if (this.rule==2) {
                        var label = "NAND";
                    } else if (this.rule==3) {
                        var label = "NOR";
                    } else if (this.rule==4) {
                        var label = "XOR";
                    } else if (this.rule==5) {
                        var label = "NOT";
                    }
                    this.graphics.exprs = new ScilabDouble(this.exprs);
                    this.graphics.style = new ScilabDouble(["blockWithLabel;displayedLabel="+label]);
                    this.x.graphics = this.graphics;
                    this.x.model = this.model;
                    break;
                }
            }
        }
        return new BasicBlock(this.x);
    }
}
