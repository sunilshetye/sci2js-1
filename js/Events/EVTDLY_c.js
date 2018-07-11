/* autogenerated from "macros/Events/EVTDLY_c.sci" */
function EVTDLY_c() {
    EVTDLY_c.prototype.define = function EVTDLY_c() {
        this.dt = 0.1;
        this.ff = 0.0;
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["evtdly4"]), new ScilabDouble([4]));
        this.model.evtin = new ScilabDouble([1]);
        this.model.evtout = new ScilabDouble([1]);
        this.model.rpar = new ScilabDouble([this.dt],[this.ff]);
        this.model.blocktype = new ScilabString(["d"]);
        this.model.firing = new ScilabDouble([this.ff]);
        this.model.dep_ut = [false,false];
        var exprs = [[string(this.dt)],[sci2exp(this.ff)]];
        var gr_i = [];
        this.x = standard_define([3,2],this.model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    EVTDLY_c.prototype.details = function EVTDLY_c() {
        return this.x;
    }
    EVTDLY_c.prototype.get = function EVTDLY_c() {
        var options = {
            dt:["Delay",this.dt],
            ff:["Date of initial output event",this.ff],
        }
        return options;
    }
    EVTDLY_c.prototype.set = function EVTDLY_c() {
        this.dt = parseFloat(arguments[0]["dt"])
        this.ff = parseFloat(arguments[0]["ff"])
        this.x = arg1;
        var graphics = arg1.graphics;
        var exprs = graphics.exprs;
        this.model = arg1.model;
        while (true) {
            [ok,this.dt,this.ff,exprs] = scicos_getvalue([["Set Event Delay block parameters"],["Delay  is the delay between an input event "],["       and the generated output event"],["Block may initially generate an output event before "],["       any input event. \"Date of initial output event\""],["       gives the date of this event. Set a negative value"],["       to disable any output event."]],["Delay","Date of initial output event"],list("vec",1,"vec",1),exprs);
            if (!ok) {
                break;
            }
            if (this.dt<=0) {
                message("Delay must be positive");
                var ok = false;
            }
            if (ok) {
                graphics.exprs = exprs;
                this.model.rpar = new ScilabDouble([this.dt],[this.ff]);
                this.model.firing = new ScilabDouble([this.ff]);
                this.x.graphics = graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
