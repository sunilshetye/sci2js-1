/* autogenerated from "macros/Sinks/TOWS_c.sci" */
function TOWS_c() {
    TOWS_c.prototype.define = function TOWS_c() {
        var nu = -1;
        this.nz = 128;
        this.varnam = "A";
        this.herit = 0;
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["tows_c"]), new ScilabDouble([4]));
        this.model.in = new ScilabDouble([nu]);
        this.model.in2 = new ScilabDouble([-2]);
        this.model.intyp = new ScilabDouble([-1]);
        this.model.out = new ScilabDouble([]);
        this.model.evtin = new ScilabDouble([1]);
        this.model.evtout = new ScilabDouble([]);
        this.model.rpar = new ScilabDouble([]);
        this.model.ipar = new ScilabDouble([this.nz],[length(this.varnam)],[transpose(this.ascii[this.varnam-1])]);
        this.model.blocktype = new ScilabString(["d"]);
        this.model.firing = new ScilabDouble([]);
        this.model.dep_ut = new ScilabBoolean([false,false]);
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"TOWS_c\",sz(1),sz(2));"]);
        this.exprs = [[string(this.nz)],[string(this.varnam)],[string(this.herit)]];
        this.x = new standard_define(new ScilabDouble([4,2]),this.model,new ScilabDouble(this.exprs),this.gr_i);
        return new BasicBlock(this.x);
    }
    TOWS_c.prototype.details = function TOWS_c() {
        return this.x;
    }
    TOWS_c.prototype.get = function TOWS_c() {
        var options = {
            nz:["Size of buffer",this.nz],
            varnam:["Scilab variable name",this.varnam],
            herit:["Inherit (no:0, yes:1)",this.herit],
        }
        return options;
    }
    TOWS_c.prototype.set = function TOWS_c() {
        this.nz = parseFloat(arguments[0]["nz"])
        this.varnam = arguments[0]["varnam"]
        this.herit = parseFloat(arguments[0]["herit"])
        this.exprs = arguments[0]["exprs"]
        this.exprs = this.graphics.exprs;
        while (true) {
            [ok,this.nz,this.varnam,this.herit,this.exprs] = scicos_getvalue("Set Xcos buffer block",["Size of buffer","Scilab variable name","Inherit (no:0, yes:1)"],list("vec",1,"str",1,"vec",1),this.exprs);
            if (!ok) {
                break;
            }
            if ((this.nz<=0)) {
                message("Size of buffer must be positive");
                var ok = false;
            }
            var r = false;
            var ierr = execstr("r = validvar(varnam)","errcatch");
            if (!r||ierr!=0||length(this.varnam)>19) {
                message([["Invalid variable name."],["Please choose another variable name."]]);
                var ok = false;
            }
            execstr("if type("+this.varnam+") <> 17 | or(fieldnames("+this.varnam+") <> [\"values\"; \"time\"]) then"+" message([\"Protected variable name.\"; \"Please choose another variable name.\"]);"+" ok = %f;"+" end","errcatch");
            if (ok) {
                var tmpvar0 = set_io(this.model,this.graphics,list([-1,-2],-1),list(),ones(1-this.herit,1),[]);
                this.model = tmpvar0[0];
                this.graphics = tmpvar0[1];
                var ok = tmpvar0[2];
                if (this.herit==1) {
                    this.model.blocktype = new ScilabString(["x"]);
                } else {
                    this.model.blocktype = new ScilabString(["d"]);
                }
                this.model.ipar = new ScilabDouble([this.nz],[length(this.varnam)],[transpose(this.ascii[this.varnam-1])]);
                this.graphics.exprs = new ScilabDouble([this.exprs]);
                this.x.graphics = this.graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
