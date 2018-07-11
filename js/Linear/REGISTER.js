/* autogenerated from "macros/Linear/REGISTER.sci" */
function REGISTER() {
    REGISTER.prototype.define = function REGISTER() {
        this.z0 = zeros(10,1);
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["delay4"]), new ScilabDouble([4]));
        this.model.in1 = new ScilabDouble([1]);
        this.model.out = new ScilabDouble([1]);
        this.model.evtin = new ScilabDouble([1]);
        this.model.dstate = new ScilabDouble([this.z0]);
        this.model.blocktype = new ScilabString(["d"]);
        this.model.dep_ut = new ScilabDouble([false,false]);
        var exprs = strcat(string(this.z0),";");
        var gr_i = [];
        this.x = standard_define([3,2],this.model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    REGISTER.prototype.details = function REGISTER() {
        return this.x;
    }
    REGISTER.prototype.get = function REGISTER() {
        var options = {
            z0:["Register initial condition",this.z0],
            it:["Datatype (1=double 3=int32 ...)",this.it],
        }
        return options;
    }
    REGISTER.prototype.set = function REGISTER() {
        this.z0 = parseFloat(arguments[0]["z0"])
        this.it = arguments[0]["it"]
        this.x = arg1;
        this.graphics = arg1.graphics;
        var exprs = this.graphics.exprs;
        this.model = arg1.model;
        if (size(exprs,1)==1) {
            var exprs = [[exprs],[sci2exp(1)]];
        }
        while (true) {
            [ok,this.z0,this.it,exprs] = scicos_getvalue("Set delay parameters",["Register initial condition","Datatype (1=double 3=int32 ...)"],list("vec",-1,"vec",1),exprs);
            if (!ok) {
                break;
            }
            if (prod(size(this.z0))<1) {
                message("Register length must be at least 1");
                var ok = false;
            }
            if (this.it==1) {
                this.model.sim = list(new ScilabString(["delay4"]), new ScilabDouble([4]));
                this.z0 = double(this.z0);
                this.model.dstate = new ScilabDouble([this.z0]);
                this.model.odstate = list();
            } else {
                if (this.it==3) {
                    this.model.sim = list(new ScilabString(["delay4_i32"]), new ScilabDouble([4]));
                    this.z0 = int32(this.z0);
                } else if (this.it==4) {
                    this.model.sim = list(new ScilabString(["delay4_i16"]), new ScilabDouble([4]));
                    this.z0 = int16(this.z0);
                } else if (this.it==5) {
                    this.model.sim = list(new ScilabString(["delay4_i8"]), new ScilabDouble([4]));
                    this.z0 = int8(this.z0);
                } else if (this.it==6) {
                    this.model.sim = list(new ScilabString(["delay4_ui32"]), new ScilabDouble([4]));
                    this.z0 = uint32(this.z0);
                } else if (this.it==7) {
                    this.model.sim = list(new ScilabString(["delay4_ui16"]), new ScilabDouble([4]));
                    this.z0 = uint16(this.z0);
                } else if (this.it==8) {
                    this.model.sim = list(new ScilabString(["delay4_ui8"]), new ScilabDouble([4]));
                    this.z0 = uint8(this.z0);
                } else {
                    message("Datatype is not supported");
                    var ok = false;
                }
                this.model.odstate = list(new ScilabDouble([this.z0]));
                this.model.dstate = new ScilabDouble([]);
            }
            if (ok) {
                var in1 = [1,1];
                var tmpvar0 = set_io(this.model,this.graphics,list(in1,this.it),list(in1,this.it),1,[]);
                this.model = tmpvar0[0];
                this.graphics = tmpvar0[1];
                var ok = tmpvar0[2];
            }
            if (ok) {
                this.graphics.exprs = new ScilabDouble(exprs);
                this.x.graphics = this.graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
