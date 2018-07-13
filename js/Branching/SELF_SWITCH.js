/* autogenerated from "macros/Branching/SELF_SWITCH.sci" */
function SELF_SWITCH() {
    SELF_SWITCH.prototype.define = function SELF_SWITCH() {
        this.stateOpen = true;
        this.x = scicos_block();
        this.x.gui = "SELF_SWITCH";
        this.x.graphics.sz = [2,2];
        this.x.graphics.gr_i = [];
        this.x.graphics.pin = 0;
        this.x.graphics.pout = 0;
        this.x.model.sim = "csuper";
        this.x.model.in = 1;
        this.x.model.out = 1;
        this.x.model.blocktype = "h";
        this.x.model.dep_ut = [false,false];
        this.x.model.rpar = genSwitchInnerDiagram(this.stateOpen);
        this.x.model.opar = list(this.stateOpen);
        this.x.graphics.in_implicit = ["E"];
        this.x.graphics.in_style = "";
        this.x.graphics.out_implicit = ["E"];
        this.x.graphics.out_style = "";
        this.x.graphics.style = "SELF_SWITCH_OFF";
        return new BasicBlock(this.x);
    }
    SELF_SWITCH.prototype.details = function SELF_SWITCH() {
        return this.x;
    }
    SELF_SWITCH.prototype.get = function SELF_SWITCH() {
        var options = {
        }
        return options;
    }
    SELF_SWITCH.prototype.set = function SELF_SWITCH() {
        this.stateOpen = this.x.model.opar[1-1];
        this.x.model.rpar = genSwitchInnerDiagram(!this.stateOpen);
        this.x.model.opar = list(!this.stateOpen);
        var y = 0;
        var typ = list();
        if (this.stateOpen==false) {
            this.x.graphics.style = "SELF_SWITCH_OFF";
        } else {
            this.x.graphics.style = "SELF_SWITCH_ON";
        }
        return new BasicBlock(this.x);
    }
}
