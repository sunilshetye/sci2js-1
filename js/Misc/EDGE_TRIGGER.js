/* autogenerated from "macros/Misc/EDGE_TRIGGER.sci" */
function EDGE_TRIGGER() {
    EDGE_TRIGGER.prototype.define = function EDGE_TRIGGER() {
        var scs_m_1 = scicos_diagram();
        scs_m_1.objs[1-1] = EDGETRIGGER("define");
        scs_m_1.objs[2-1] = IFTHEL_f("define");
        scs_m_1.objs[3-1] = IN_f("define");
        scs_m_1.objs[4-1] = CLKOUTV_f("define");
        scs_m_1.objs[5-1] = scicos_link();
        scs_m_1.objs[6-1] = scicos_link();
        scs_m_1.objs[7-1] = scicos_link();
        var blk = scs_m_1.objs[1-1];
        var graphics = blk.graphics;
        this.model = blk.model;
        graphics.orig = [60,0];
        graphics.sz = [60,40];
        graphics.exprs = "0";
        this.model.ipar = new ScilabDouble([0]);
        graphics.pin = 5;
        graphics.pout = 6;
        blk.graphics = graphics;
        blk.model = this.model;
        scs_m_1.objs[1-1] = blk;
        var blk = scs_m_1.objs[2-1];
        var graphics = blk.graphics;
        this.model = blk.model;
        graphics.orig = [160,0];
        graphics.sz = [60,40];
        graphics.exprs = [["0"],["0"]];
        this.model.evtin = [];
        this.model.nzcross = new ScilabDouble([0]);
        this.model.nmode = new ScilabDouble([0]);
        graphics.pin = 6;
        graphics.peout = [[7],[0]];
        blk.graphics = graphics;
        blk.model = this.model;
        scs_m_1.objs[2-1] = blk;
        var blk = scs_m_1.objs[3-1];
        var graphics = blk.graphics;
        this.model = blk.model;
        graphics.orig = [0,10];
        graphics.sz = [20,20];
        graphics.exprs = ["1"];
        this.model.ipar = new ScilabDouble([1]);
        graphics.pout = 5;
        blk.graphics = graphics;
        blk.model = this.model;
        scs_m_1.objs[3-1] = blk;
        var blk = scs_m_1.objs[4-1];
        var graphics = blk.graphics;
        this.model = blk.model;
        graphics.orig = [170,-60];
        graphics.sz = [20,20];
        graphics.exprs = ["1"];
        this.model.ipar = new ScilabDouble([1]);
        graphics.pein = 7;
        blk.graphics = graphics;
        blk.model = this.model;
        scs_m_1.objs[4-1] = blk;
        var lnk = scs_m_1.objs[5-1];
        lnk.from = [3,1,0];
        lnk.to = [1,1,1];
        scs_m_1.objs[5-1] = lnk;
        var lnk = scs_m_1.objs[6-1];
        lnk.from = [1,1,0];
        lnk.to = [2,1,1];
        scs_m_1.objs[6-1] = lnk;
        var lnk = scs_m_1.objs[7-1];
        lnk.ct = [5,-1];
        lnk.from = [2,1,0];
        lnk.to = [4,1,1];
        scs_m_1.objs[7-1] = lnk;
        blk={};
        lnk={};
        this.model = scicos_model();
        this.model.sim = new ScilabString(["csuper"]);
        this.model.in1 = new ScilabDouble([1]);
        this.model.evtout = new ScilabDouble([1]);
        this.model.rpar = scs_m_1;
        var gr_i = [];
        this.x = standard_define([3,2],this.model,[],gr_i);
        return new BasicBlock(this.x);
    }
    EDGE_TRIGGER.prototype.details = function EDGE_TRIGGER() {
        return this.x;
    }
    EDGE_TRIGGER.prototype.get = function EDGE_TRIGGER() {
        var options = {
        }
        return options;
    }
    EDGE_TRIGGER.prototype.set = function EDGE_TRIGGER() {
        for (i=1;i<=length(arg1.model.rpar.objs);i+=1) {
            var o = arg1.model.rpar.objs[i-1];
            if (typeof(o)=="Block"&&o.gui=="EDGETRIGGER") {
                var ppath = list(i);
                break;
            }
        }
        var newpar = list();
        var y = 0;
        for (path in ppath) {
            var np = size(path,"*");
            var spath = list();
            for (k=1;k<=np;k+=1) {
                spath[$+1-1] = "model";
                spath[$+1-1] = "rpar";
                spath[$+1-1] = "objs";
                spath[$+1-1] = path[k-1];
            }
            var xx = arg1[spath-1];
            execstr("xxn="+xx.gui+"(\'set\',xx)");
            if (diffobjs(this.xxn,xx)) {
                this.model = xx.model;
                var model_n = this.xxn.model;
                if (!is_modelica_block(xx)) {
                    var modified = or(this.model.sim!=model_n.sim)||!isequal(this.model.state,model_n.state)||!isequal(this.model.dstate,model_n.dstate)||!isequal(this.model.rpar,model_n.rpar)||!isequal(this.model.ipar,model_n.ipar)||!isequal(this.model.label,model_n.label);
                    if (or(this.model.in1!=model_n.in1)||or(this.model.out!=model_n.out)) {
                        var needcompile = 1;
                    }
                    if (or(this.model.firing!=model_n.firing)) {
                        var needcompile = 2;
                    }
                    if ((size(this.model.in1,"*")!=size(model_n.in1,"*"))||(size(this.model.out,"*")!=size(model_n.out,"*"))) {
                        var needcompile = 4;
                    }
                    if (this.model.sim=="input"||this.model.sim=="output") {
                        if (this.model.ipar!=model_n.ipar) {
                            var needcompile = 4;
                        }
                    }
                    if (or(this.model.blocktype!=model_n.blocktype)||or(this.model.dep_ut!=model_n.dep_ut)) {
                        var needcompile = 4;
                    }
                    if ((this.model.nzcross!=model_n.nzcross)||(this.model.nmode!=model_n.nmode)) {
                        var needcompile = 4;
                    }
                    if (prod(size(model_n.sim))>1) {
                        if (model_n.sim[2-1]>1000) {
                            if (this.model.sim[1-1]!=model_n.sim[1-1]) {
                                var needcompile = 4;
                            }
                        }
                    }
                } else {
                    var modified = or(model_n!=this.model);
                    var eq = this.model.equations;
                    var eqn = model_n.equations;
                    if (or(eq.model!=eqn.model)||or(eq.inputs!=eqn.inputs)||or(eq.outputs!=eqn.outputs)) {
                        var needcompile = 4;
                    }
                }
                arg1[spath-1] = this.xxn;
                newpar[size(newpar)+1-1] = path;
                var y = max(y,needcompile);
            }
        }
        this.x = arg1;
        var typ = newpar;
        return new BasicBlock(this.x);
    }
}
