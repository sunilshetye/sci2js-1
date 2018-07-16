/* autogenerated from "macros/Misc/RATELIMITER.sci" */
function RATELIMITER() {
    RATELIMITER.prototype.define = function RATELIMITER() {
        this.minp = -1;
        this.maxp = 1;
        var rpar = [[this.maxp],[this.minp]];
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["ratelimiter"]), new ScilabDouble([4]));
        this.model.in = new ScilabDouble([1]);
        this.model.out = new ScilabDouble([1]);
        this.model.rpar = new ScilabDouble(rpar);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabBoolean([true,false]);
        this.exprs = [[string(this.maxp)],[string(this.minp)]];
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"RATELIMITER\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3.5,2]),this.model,new ScilabDouble(this.exprs),this.gr_i);
        return new BasicBlock(this.x);
    }
    RATELIMITER.prototype.details = function RATELIMITER() {
        return this.x;
    }
    RATELIMITER.prototype.get = function RATELIMITER() {
        var options = {
            maxp:["max slope",this.maxp],
            minp:["min slope",this.minp],
        }
        return options;
    }
    RATELIMITER.prototype.set = function RATELIMITER() {
        this.maxp = parseFloat(arguments[0]["maxp"])
        this.minp = parseFloat(arguments[0]["minp"])
        this.exprs = arguments[0]["exprs"]
        this.exprs = this.graphics.exprs;
        while (true) {
            [ok,this.maxp,this.minp,this.exprs] = scicos_getvalue("Set rate limiter parameters",["max slope","min slope"],list("vec",1,"vec",1),this.exprs);
            if (!ok) {
                break;
            }
            if (this.maxp<=this.minp||this.maxp<=0||this.minp>=0) {
                message("We must have max_slope> 0 > min_slope.");
            } else {
                var rpar = [[this.maxp],[this.minp]];
                this.model.rpar = new ScilabDouble(rpar);
                this.graphics.exprs = new ScilabDouble([this.exprs]);
                this.x.graphics = this.graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
