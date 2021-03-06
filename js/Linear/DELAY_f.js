/* autogenerated from "macros/Linear/DELAY_f.sci" */
function DELAY_f() {
    DELAY_f.prototype.define = function DELAY_f() {
        var evtdly = EVTDLY_f("define");
        evtdly.graphics.orig = [243,296];
        evtdly.graphics.sz = [40,40];
        evtdly.graphics.flip = true;
        evtdly.graphics.exprs = [["0.1"],["0"]];
        evtdly.graphics.pein = 10;
        evtdly.graphics.peout = 7;
        evtdly.model.rpar = 0.1;
        evtdly.model.firing = 0;
        var register = REGISTER_f("define");
        register.graphics.orig = [238,195];
        register.graphics.sz = [50,50];
        register.graphics.flip = true;
        register.graphics.exprs = "0;0;0;0;0;0;0;0;0;0";
        register.graphics.pin = 6;
        register.graphics.pout = 5;
        register.graphics.pein = 9;
        var input_port = IN_f("define");
        input_port.graphics.orig = [92,210];
        input_port.graphics.sz = [20,20];
        input_port.graphics.flip = true;
        input_port.graphics.exprs = [["1"],["1"]];
        input_port.graphics.pout = 6;
        input_port.model.ipar = 1;
        var output_port = OUT_f("define");
        output_port.graphics.orig = [440,210];
        output_port.graphics.sz = [20,20];
        output_port.graphics.flip = true;
        output_port.graphics.exprs = [["1"],["1"]];
        output_port.graphics.pin = 5;
        output_port.model.ipar = 1;
        var split = CLKSPLIT_f("define");
        split.graphics.orig = [[263],[271.2]];
        split.graphics.pein = 7;
        split.graphics.peout = [[9],[10]];
        var diagram = scicos_diagram();
        diagram.objs[1-1] = input_port;
        diagram.objs[2-1] = output_port;
        diagram.objs[3-1] = register;
        diagram.objs[4-1] = evtdly;
        diagram.objs[5-1] = scicos_link(xx=[[296.6],[440]],yy=[[220],[220]],from=[3,1],to=[2,1]);
        diagram.objs[6-1] = scicos_link(xx=[[112],[229.4]],yy=[[220],[220]],from=[1,1],to=[3,1]);
        diagram.objs[7-1] = scicos_link(xx=[[263],[263]],yy=[[290.3],[271.2]],ct=[5,-1],from=[4,1],to=[8,1]);
        diagram.objs[8-1] = split;
        diagram.objs[9-1] = scicos_link(xx=[[263],[263]],yy=[[271.2],[250.7]],ct=[5,-1],from=[8,1],to=[3,1]);
        diagram.objs[10-1] = scicos_link(xx=[[263],[308.6],[308.6],[263],[263]],yy=[[271.2],[271.2],[367],[367],[341.7]],ct=[5,-1],from=[8,2],to=[4,1]);
        this.x = scicos_block();
        this.x.gui = "DELAY_f";
        this.x.graphics.sz = [2,2];
        this.x.graphics.gr_i = [];
        this.x.graphics.pin = 0;
        this.x.graphics.pout = 0;
        this.x.model.sim = "csuper";
        this.x.model.in = 1;
        this.x.model.out = 1;
        this.x.model.blocktype = "h";
        this.x.model.dep_ut = [false,false];
        this.x.model.rpar = diagram;
        this.x.graphics.in_implicit = ["E"];
        this.x.graphics.in_style = "";
        this.x.graphics.out_implicit = ["E"];
        this.x.graphics.out_style = "";
        return new BasicBlock(this.x);
    }
    DELAY_f.prototype.details = function DELAY_f() {
        return this.x;
    }
    DELAY_f.prototype.get = function DELAY_f() {
        var ppath = list(0,0);
        for (i=1;i<=length(this.model.rpar.objs);i+=1) {
            var o = this.model.rpar.objs[i-1];
            if (typeof(o)=="Block"&&o.gui=="REGISTER_f") {
                ppath[1-1] = i;
            }
            if (typeof(o)=="Block"&&o.gui=="EVTDLY_f") {
                ppath[2-1] = i;
            }
            if (and(ppath!=list(0,0))) {
                break;
            }
        }
        var newpar = list();
        var register = this.x.model.rpar.objs[ppath[1-1]-1];
        var evtdly = this.x.model.rpar.objs[ppath[2-1]-1];
        var register_exprs = register.graphics.exprs;
        var evtdly_exprs = evtdly.graphics.exprs;
        var exprs = [[evtdly_exprs[1-1]],[register_exprs]];
        this.set_param_popup_title = "This block implements as a discretized delay";
        var options = {
            dt:["Discretization time step",this.dt],
            z0:["Register initial state",this.z0],
        }
        return options;
    }
    DELAY_f.prototype.set = function DELAY_f() {
        var ppath = list(0,0);
        for (i=1;i<=length(this.model.rpar.objs);i+=1) {
            var o = this.model.rpar.objs[i-1];
            if (typeof(o)=="Block"&&o.gui=="REGISTER_f") {
                ppath[1-1] = i;
            }
            if (typeof(o)=="Block"&&o.gui=="EVTDLY_f") {
                ppath[2-1] = i;
            }
            if (and(ppath!=list(0,0))) {
                break;
            }
        }
        var newpar = list();
        var register = this.x.model.rpar.objs[ppath[1-1]-1];
        var evtdly = this.x.model.rpar.objs[ppath[2-1]-1];
        var register_exprs = register.graphics.exprs;
        var evtdly_exprs = evtdly.graphics.exprs;
        var exprs = [[evtdly_exprs[1-1]],[register_exprs]];
        while (true) {
            var ok = true;
            this.dt = arguments[0]["dt"];
            this.z0 = arguments[0]["z0"];
            var exprs = [arguments[0]["dt"], arguments[0]["z0"]];
            if (!ok) {
                break;
            }
            var mess = [];
            if (prod(size(this.z0))<1) {
                var mess = [[mess],["Register length must be at least 1"],[" "]];
                var ok = false;
            }
            if (this.dt<=0) {
                var mess = [[mess],["Discretization time step must be positive"],[" "]];
                var ok = false;
            }
            if (!ok) {
                message(mess);
                throw "user error";
            } else {
                evtdly.graphics.exprs[1-1] = exprs[1-1];
                if (evtdly.model.rpar!=this.dt) {
                    evtdly.model.rpar = this.dt;
                    newpar[$+1-1] = ppath[2-1];
                }
                this.x.model.rpar.objs[ppath[2-1]-1] = evtdly;
                register.graphics.exprs = exprs[2-1];
                if (or(register.model.dstate!=this.z0.slice())) {
                    register.model.dstate = this.z0.slice();
                    newpar[$+1-1] = ppath[1-1];
                }
                this.x.model.rpar.objs[ppath[1-1]-1] = register;
                break;
            }
        }
        var needcompile = 0;
        var y = needcompile;
        var typ = newpar;
        return new BasicBlock(this.x);
    }
    DELAY_f.prototype.get_popup_title = function DELAY_f() {
        return this.set_param_popup_title;
    }
    DELAY_f.prototype.importset = function DELAY_f() {
        var graphics = this.x.graphics;
        var ary = getData(graphics.exprs);
        this.dt = ary[0];
        this.z0 = ary[1];
    }
    DELAY_f.prototype.getContainer = function DELAY_f() { return new BasicBlock(this.x); }
}
