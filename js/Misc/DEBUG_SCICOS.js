/* autogenerated from "macros/Misc/DEBUG_SCICOS.sci" */
function DEBUG_SCICOS() {
    DEBUG_SCICOS.prototype.define = function DEBUG_SCICOS() {
        this.x = DEBUG("define");
        return new BasicBlock(this.x);
    }
    DEBUG_SCICOS.prototype.details = function DEBUG_SCICOS() {
        return this.x;
    }
    DEBUG_SCICOS.prototype.get = function DEBUG_SCICOS() {
        var options = {
        }
        return options;
    }
    DEBUG_SCICOS.prototype.set = function DEBUG_SCICOS() {
        this.x = tmpvar0[0];
        var y = tmpvar0[1];
        var typ = tmpvar0[2];
        return new BasicBlock(this.x);
    }
}
