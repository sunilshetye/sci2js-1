/* autogenerated from "macros/Sources/Counter.sci" */
function Counter() {
    Counter.prototype.define = function Counter() {
        this.minim = 0;
        this.maxim = 2;
        this.rule = 1;
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["counter"]), new ScilabDouble([4]));
        this.model.evtin = new ScilabDouble([1]);
        this.model.out = new ScilabDouble([1]);
        this.model.out2 = new ScilabDouble([1]);
        this.model.dstate = new ScilabDouble([0]);
        this.model.ipar = new ScilabDouble([this.rule],[this.maxim],[this.minim]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabDouble([false,false]);
        this.exprs = [[string(this.minim)],[string(this.maxim)],[string(this.rule)]];
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"Counter\",sz(1),sz(2));"]);
        this.x = standard_define([3,2],this.model,this.exprs,this.gr_i);
        return new BasicBlock(this.x);
    }
    Counter.prototype.details = function Counter() {
        return this.x;
    }
    Counter.prototype.get = function Counter() {
        var options = {
            minim:["Minimum",this.minim],
            maxim:["Maximum",this.maxim],
            rule:["Rule (1:Increment, 2:Decrement)",this.rule],
        }
        return options;
    }
    Counter.prototype.set = function Counter() {
        this.minim = parseFloat(arguments[0]["minim"])
        this.maxim = parseFloat(arguments[0]["maxim"])
        this.rule = parseFloat(arguments[0]["rule"])
        this.exprs = arguments[0]["exprs"]
        this.exprs = this.graphics.exprs;
        while (true) {
            [ok,this.minim,this.maxim,this.rule,this.exprs] = scicos_getvalue([[msprintf("Set %s block parameters","Counter")],[" "],["Integer counter generator"],[" "]],["Minimum","Maximum","Rule (1:Increment, 2:Decrement)"],list("vec",1,"vec",1,"vec",1),this.exprs);
            if (!ok) {
                break;
            }
            this.maxim = int(this.maxim);
            this.minim = int(this.minim);
            if (this.maxim<this.minim) {
                block_parameter_error(msprintf("Wrong values for \'Maximum\' and \'Minimum\' parameters: %d &lt; %d",this.minim,this.maxim),msprintf("\'Minimum\' must be less than \'Maximum\'."));
            } else if ((this.rule!=1&&this.rule!=2)) {
                block_parameter_error(msprintf("Wrong value for \'Rule\' parameter: %d",this.rule),msprintf("Must be in the interval %s.","[1,2]"));
            } else {
                this.graphics.exprs = new ScilabDouble([this.exprs]);
                this.model.dstate = new ScilabDouble([0]);
                this.model.ipar = new ScilabDouble([this.rule],[this.maxim],[this.minim]);
                this.x.graphics = this.graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
