/* autogenerated from "macros/Sources/Sigbuilder.sci" */
function Sigbuilder() {
    Sigbuilder.prototype.define = function Sigbuilder() {
        var scs_m_1 = scicos_diagram(version="scicos4.2",props=scicos_params(wpar=[600,450,0,0,600,450],Title=["Sigbuilder","./"],tol=[[0.0001],[0.000001],[1.000e-10],[100001],[0],[0],[0]],tf=100,context=" ",void1=[],options=tlist(["scsopt","3D","Background","Link","ID","Cmap"],list(true,33),[8,1],[1,5],list([5,1],[4,1]),[0.8,0.8,0.8]),void2=[],void3=[],doc=list()));
        scs_m_1.objs[1-1] = scicos_block(gui="CURVE_c",graphics=scicos_graphics(orig=[329.63473,606.18517],sz=[40,40],flip=true,theta=0,exprs=[["3"],["[0,1,2]"],["[10,20,-30]"],["y"],["n"]],pin=[],pout=6,pein=4,peout=2,gr_i=[],id="",in_implicit=[],out_implicit="E"),model=scicos_model(sim=list("curve_c",4),in1=[],in2=[],intyp=1,out=1,out2=[],outtyp=1,evtin=1,evtout=1,state=[],dstate=[],odstate=list(),rpar=[[0],[1],[2],[10],[20],[-30]],ipar=[[3],[3],[1]],opar=list(),blocktype="c",firing=0,dep_ut=[false,true],label="",nzcross=0,nmode=0,equations=list()),doc=list());
        scs_m_1.objs[2-1] = scicos_link(xx=[[349.63473],[349.49528]],yy=[[600.47089],[565.10704]],id="drawlink",thick=[0,0],ct=[5,-1],from=[1,1,0],to=[3,1,1]);
        scs_m_1.objs[3-1] = scicos_block(gui="CLKSPLIT_f",graphics=scicos_graphics(orig=[[349.49528],[565.10704]],sz=[0.3333333,0.3333333],flip=true,theta=0,exprs=[],pin=[],pout=[],pein=2,peout=[[8],[4]],gr_i=[],id="",in_implicit=[],out_implicit=[]),model=scicos_model(sim="split",in1=[],in2=[],intyp=1,out=[],out2=[],outtyp=1,evtin=1,evtout=[[1],[1]],state=[],dstate=[],odstate=list(),rpar=[],ipar=[],opar=list(),blocktype="d",firing=[false,false,false],dep_ut=[false,false],label="",nzcross=0,nmode=0,equations=list()),doc=list());
        scs_m_1.objs[4-1] = scicos_link(xx=[[349.49528],[266.69602],[266.69602],[270.35525],[342.80795],[342.80795],[349.63473]],yy=[[565.10704],[565.10704],[680.99483],[680.99483],[680.99483],[651.89946],[651.89946]],id="drawlink",thick=[0,0],ct=[5,-1],from=[3,2,0],to=[1,1,1]);
        scs_m_1.objs[5-1] = scicos_block(gui="OUT_f",graphics=scicos_graphics(orig=[398.20616,616.18517],sz=[20,20],flip=true,theta=0,exprs="1",pin=6,pout=[],pein=[],peout=[],gr_i=[],id="",in_implicit="E",out_implicit=[]),model=scicos_model(sim="output",in1=-1,in2=-2,intyp=-1,out=[],out2=[],outtyp=1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=1,opar=list(),blocktype="c",firing=[],dep_ut=[false,false],label="",nzcross=0,nmode=0,equations=list()),doc=list());
        scs_m_1.objs[6-1] = scicos_link(xx=[[378.20616],[398.20616]],yy=[[626.18517],[626.18517]],id="drawlink",thick=[0,0],ct=[1,1],from=[1,1,0],to=[5,1,1]);
        scs_m_1.objs[7-1] = scicos_block(gui="CLKOUTV_f",graphics=scicos_graphics(orig=[339.49528,505.10704],sz=[20,30],flip=true,theta=0,exprs="1",pin=[],pout=[],pein=8,peout=[],gr_i=[],id="",in_implicit=[],out_implicit=[]),model=scicos_model(sim="output",in1=[],in2=[],intyp=1,out=[],out2=[],outtyp=1,evtin=1,evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=1,opar=list(),blocktype="d",firing=[],dep_ut=[false,false],label="",nzcross=0,nmode=0,equations=list()),doc=list());
        scs_m_1.objs[8-1] = scicos_link(xx=[[349.49528],[349.49528]],yy=[[565.10704],[535.10704]],id="drawlink",thick=[0,0],ct=[5,-1],from=[3,1,0],to=[7,1,1]);
        this.model = scicos_model(sim="csuper",in1=[],in2=[],intyp=1,out=-1,out2=[],outtyp=1,evtin=[],evtout=1,state=[],dstate=[],odstate=list(),rpar=scs_m_1,ipar=[],opar=list(),blocktype="h",firing=[],dep_ut=[false,false],label="",nzcross=0,nmode=0,equations=list());
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"Sigbuilder\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3,2]),this.model,new ScilabDouble([]),this.gr_i);
        return new BasicBlock(this.x);
    }
    Sigbuilder.prototype.details = function Sigbuilder() {
        return this.x;
    }
    Sigbuilder.prototype.get = function Sigbuilder() {
        alert("parameters cannot be modified");
    }
    Sigbuilder.prototype.set = function Sigbuilder() {
        var ppath = list(0);
            if (typeof(o)=="Block"&&o.gui=="CURVE_c") {
                ppath[1-1] = i;
                break;
            }
        }
        var newpar = list();
        this.y = 0;
        for (path in ppath) {
            var np = size(path,"*");
            var spath = list();
            for (k=1;k<=np;k+=1) {
                spath[$+1-1] = "model";
                spath[$+1-1] = "rpar";
                spath[$+1-1] = "objs";
                spath[$+1-1] = path[k-1];
            }
            execstr("xxn="+xx.gui+"(\'set\',xx)");
            if (diffobjs(this.xxn,xx)) {
                this.model = xx.model;
                var model_n = this.xxn.model;
                if (!is_modelica_block(xx)) {
                    var modified = or(this.model.sim!=model_n.sim)||!isequal(this.model.state,model_n.state)||!isequal(this.model.dstate,model_n.dstate)||!isequal(this.model.odstate,model_n.odstate)||!isequal(this.model.rpar,model_n.rpar)||!isequal(this.model.ipar,model_n.ipar)||!isequal(this.model.opar,model_n.opar)||!isequal(this.model.label,model_n.label);
                    if (or(this.model.in!=model_n.in)||or(this.model.out!=model_n.out)||or(this.model.in2!=model_n.in2)||or(this.model.out2!=model_n.out2)||or(this.model.outtyp!=model_n.outtyp)||or(this.model.intyp!=model_n.intyp)) {
                        var needcompile = 1;
                    }
                    if (or(this.model.firing!=model_n.firing)) {
                        var needcompile = 2;
                    }
                    if ((size(this.model.in,"*")!=size(model_n.in,"*"))||(size(this.model.out,"*")!=size(model_n.out,"*"))) {
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
                newpar[size(newpar)+1-1] = path;
                this.y = max(this.y,needcompile);
            }
        }
        var typ = newpar;
        return new BasicBlock(this.x);
    }
}
