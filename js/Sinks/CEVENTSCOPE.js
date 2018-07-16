/* autogenerated from "macros/Sinks/CEVENTSCOPE.sci" */
function CEVENTSCOPE() {
    CEVENTSCOPE.prototype.define = function CEVENTSCOPE() {
        this.nclock = 1;
        this.win = -1;
        this.clrs = [[1],[3],[5],[7],[9],[11],[13],[15]];
        this.wdim = [[600],[400]];
        this.wpos = [[-1],[-1]];
        this.per = 30;
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["cevscpe"]), new ScilabDouble([4]));
        this.model.evtin = new ScilabDouble([1]);
        this.model.rpar = new ScilabDouble([this.per]);
        this.model.ipar = new ScilabDouble([this.win],[1],[this.clrs[this.nclock-1]],[this.wpos.slice()],[this.wdim.slice()]);
        this.model.blocktype = new ScilabString(["d"]);
        this.model.dep_ut = new ScilabBoolean([false,false]);
        this.exprs = [[sci2exp(this.nclock)],[strcat(sci2exp(this.clrs[this.nclock-1])," ")],[string(this.win)],[sci2exp([])],[sci2exp(this.wdim)],[string(this.per)]];
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CEVENTSCOPE\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]),this.model,new ScilabDouble(this.exprs),this.gr_i);
        return new BasicBlock(this.x);
    }
    CEVENTSCOPE.prototype.details = function CEVENTSCOPE() {
        return this.x;
    }
    CEVENTSCOPE.prototype.get = function CEVENTSCOPE() {
        var options = {
            nclock:["Number of event inputs",this.nclock],
            clrs:["colors c (>0) or mark (<0)",this.clrs.toString().replace(/,/g," ")],
            win:["Output window number (-1 for automatic)",this.win],
            wpos:["Output window position",this.wpos.toString().replace(/,/g," ")],
            wdim:["Output window sizes",this.wdim.toString().replace(/,/g," ")],
            per:["Refresh period",this.per],
        }
        return options;
    }
    CEVENTSCOPE.prototype.set = function CEVENTSCOPE() {
        this.nclock = parseFloat(arguments[0]["nclock"])
        this.clrs = inverse(arguments[0]["clrs"])
        this.win = parseFloat(arguments[0]["win"])
        this.wpos = inverse(arguments[0]["wpos"])
        this.wdim = inverse(arguments[0]["wdim"])
        this.per = parseFloat(arguments[0]["per"])
        this.exprs = arguments[0]["exprs"]
        this.exprs = this.graphics.exprs;
        while (true) {
            [ok,this.nclock,this.clrs,this.win,this.wpos,this.wdim,this.per,this.exprs] = scicos_getvalue("Set Scope parameters",["Number of event inputs","colors c (>0) or mark (<0)","Output window number (-1 for automatic)","Output window position","Output window sizes","Refresh period"],list("vec",1,"vec",-1,"vec",1,"vec",-1,"vec",-1,"vec",1),this.exprs);
            this.nclock = int(this.nclock);
            this.clrs = int(this.clrs);
            this.win = int(this.win);
            if (!ok) {
                break;
            }
            var mess = [];
            if (size(this.wpos,"*")!=0&&size(this.wpos,"*")!=2) {
                var mess = [[mess],["Window position must be [] or a 2 vector"],[" "]];
                var ok = false;
            }
            if (size(this.wdim,"*")!=0&&size(this.wdim,"*")!=2) {
                var mess = [[mess],["Window dim must be [] or a 2 vector"],[" "]];
                var ok = false;
            }
            if (this.nclock<=0) {
                var mess = [[mess],["Block must have at least one input event"],[" "]];
                var ok = false;
            }
            if (size(this.clrs,"*")!=this.nclock) {
                var mess = [[mess],["Inputs color c size must be equal to Number of inputs"],[" "]];
                var ok = false;
            }
            if (this.win<-1) {
                var mess = [[mess],["Window number cannot be inferior than -1"],[" "]];
                var ok = false;
            }
            if (this.per<=0) {
                var mess = [[mess],["Refresh period must be positive"],[" "]];
                var ok = false;
            }
            if (ok) {
                var tmpvar0 = set_io(this.model,this.graphics,list(),list(),ones(this.nclock,1),[]);
                this.model = tmpvar0[0];
                this.graphics = tmpvar0[1];
                var ok = tmpvar0[2];
            } else {
                message([["Some specified values are inconsistent:"],[" "],[mess]]);
            }
            if (ok) {
                if (this.wpos==[]) {
                    this.wpos = [[-1],[-1]];
                }
                if (this.wdim==[]) {
                    this.wdim = [[-1],[-1]];
                }
                var rpar = this.per;
                var ipar = [[this.win],[1],[this.clrs.slice()],[this.wpos.slice()],[this.wdim.slice()]];
                this.model.rpar = new ScilabDouble([rpar]);
                this.model.ipar = new ScilabDouble(ipar);
                this.graphics.exprs = new ScilabDouble([this.exprs]);
                this.x.graphics = this.graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
