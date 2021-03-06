/* autogenerated from "macros/Sinks/CMAT3D.sci" */
function CMAT3D() {
    CMAT3D.prototype.define = function CMAT3D() {
        this.cmin = 0;
        this.cmax = 100;
        this.colormap = jetcolormap(25);
        var size_c = 25;
        this.x = -1;
        var y = -1;
        var size_x = 1;
        var size_y = 1;
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["cmat3d"]), new ScilabDouble([4]));
        this.model.in = new ScilabDouble([-1]);
        this.model.in2 = new ScilabDouble([-2]);
        this.model.intyp = new ScilabDouble([1]);
        this.model.evtin = new ScilabDouble([1]);
        this.model.ipar = new ScilabDouble([this.cmin],[this.cmax],[size_c],[size_x],[size_y]);
        this.model.rpar = new ScilabDouble([this.colormap.slice()],[this.x],[y]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabBoolean([true,false]);
        var exprs = [[strcat(string(this.x)," ")],[strcat(string(y)," ")],[string("jetcolormap(25)")],[string(this.cmin)],[string(this.cmax)]];
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CMAT3D\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]),this.model,new ScilabDouble(exprs),gr_i);
        return new BasicBlock(this.x);
    }
    CMAT3D.prototype.details = function CMAT3D() {
        return this.x;
    }
    CMAT3D.prototype.get = function CMAT3D() {
        var exprs = this.graphics.exprs;
        this.set_param_popup_title = "Set Scope parameters";
        var options = {
            vec_x:["Bounds Vector X (-1 for standard)",this.vec_x],
            vec_y:["Bounds Vector Y (-1 for standard)",this.vec_y],
            colormap:["ColorMap",this.colormap],
            cmin:["Zmin",this.cmin],
            cmax:["Zmax",this.cmax],
        }
        return options;
    }
    CMAT3D.prototype.set = function CMAT3D() {
        var exprs = this.graphics.exprs;
        while (true) {
            var ok = true;
            this.vec_x = arguments[0]["vec_x"];
            this.vec_y = arguments[0]["vec_y"];
            this.colormap = parseFloat(arguments[0]["colormap"]);
            this.cmin = parseFloat(arguments[0]["cmin"]);
            this.cmax = parseFloat(arguments[0]["cmax"]);
            var exprs = [arguments[0]["vec_x"], arguments[0]["vec_y"], arguments[0]["colormap"], arguments[0]["cmin"], arguments[0]["cmax"]];
            if (!ok) {
                break;
            }
            var mess = [];
            if (size(this.vec_x,"*")!=size(this.vec_y,"*")) {
                var mess = [[mess],["Vector X and Vector Y must have the same size"],[" "]];
                var ok = false;
            }
            if (this.cmax<=this.cmin) {
                var mess = [[mess],["Error with minimum and maximum value"],[" "]];
                var ok = false;
            }
            if (!ok) {
                message([["Some specified values are inconsistent:"],[" "],[mess]]);
                throw "user error";
            }
            if (ok) {
                var size_x = size(this.vec_x,"*");
                var size_c = size(this.colormap.slice(),1);
                var ipar = [[this.cmin],[this.cmax],[size_c],[size_x]];
                var rpar = [[this.colormap.slice()],[this.vec_x.slice()],[this.vec_y.slice()]];
                this.model.ipar = new ScilabDouble(ipar);
                this.model.rpar = new ScilabDouble(rpar);
                this.graphics.exprs = new ScilabDouble([exprs]);
                this.x.graphics = this.graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
    CMAT3D.prototype.get_popup_title = function CMAT3D() {
        return this.set_param_popup_title;
    }
    CMAT3D.prototype.importset = function CMAT3D() {
        var graphics = this.x.graphics;
        var ary = getData(graphics.exprs);
        this.vec_x = ary[0];
        this.vec_y = ary[1];
        this.colormap = ary[2];
        this.cmin = ary[3];
        this.cmax = ary[4];
    }
    CMAT3D.prototype.getContainer = function CMAT3D() { return new BasicBlock(this.x); }
}
