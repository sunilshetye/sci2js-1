/* autogenerated from "macros/Sources/Modulo_Count.sci" */
function Modulo_Count() {
    Modulo_Count.prototype.define = function Modulo_Count() {
        this.ini_c = 0;
        this.base = 3;
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["modulo_count"]), new ScilabDouble([4]));
        this.model.evtin = new ScilabDouble([1]);
        this.model.out = new ScilabDouble([1]);
        this.model.dstate = new ScilabDouble([this.ini_c]);
        this.model.ipar = new ScilabDouble([this.base]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = [false,false];
        var exprs = [[string(this.ini_c)],[string(this.base)]];
        var gr_i = [];
        this.x = standard_define([3,2],this.model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    Modulo_Count.prototype.details = function Modulo_Count() {
        return this.x;
    }
    Modulo_Count.prototype.get = function Modulo_Count() {
        var options = {
            ini_c:["Initial State (zero or positive number)",this.ini_c],
            base:["Upper Limit (positive number)",this.base],
        }
        return options;
    }
    Modulo_Count.prototype.set = function Modulo_Count() {
        this.ini_c = parseFloat(arguments[0]["ini_c"])
        this.base = parseFloat(arguments[0]["base"])
        this.x = arg1;
        var graphics = arg1.graphics;
        var exprs = graphics.exprs;
        this.model = arg1.model;
        while (true) {
            [ok,this.ini_c,this.base,exprs] = scicos_getvalue([[msprintf("Set %s block parameters","Modulo_Count")],[" "],["Modulo counter (0 to N counter)"],[" "]],["Initial State (zero or positive number)","Upper Limit (positive number)"],list("vec",1,"vec",1),exprs);
            this.ini_c = int(this.ini_c);
            this.base = int(this.base);
            if (!ok) {
                break;
            }
            if (this.ini_c<0) {
                block_parameter_error(msprintf("Wrong value for \'Initial State\' parameter: %d.",this.ini_c),"Null or positive integer expected.");
            } else if (this.base<=0) {
                block_parameter_error(msprintf("Wrong values for \'Upper Limit\' parameter: %d.",this.base),"Strictly positive integer expected.");
            } else {
                graphics.exprs = exprs;
                this.model.ipar = new ScilabDouble([this.base]);
                this.model.dstate = new ScilabDouble([this.ini_c]);
                this.x.graphics = graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
