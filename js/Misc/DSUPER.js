/* autogenerated from "macros/Misc/DSUPER.sci" */
function DSUPER() {
    DSUPER.prototype.define = function DSUPER() {
        return new BasicBlock(this.x);
    }
    DSUPER.prototype.details = function DSUPER() {
        return this.x;
    }
    DSUPER.prototype.get = function DSUPER() {
        var options = {
        }
        return options;
    }
    DSUPER.prototype.set = function DSUPER() {
        var y = this.needcompile;
        var typ = list();
        var graphics = arg1.graphics;
        if ((length(graphics.exprs)==0)) {
            warnBlockByUID(arg1.model.label,"Invalid masked block.");
            this.x = arg1;
            return;
        }
        var exprs = graphics.exprs[1-1];
        var exprs0 = graphics.exprs[2-1][1-1];
        var btitre = graphics.exprs[2-1][2-1][1-1];
        var bitems = graphics.exprs[2-1][2-1].slice(2-1,$);
        if (exprs0==[]) {
            this.x = arg1;
            return;
        }
        var context = [arg1.model.rpar.props.context];
        var tmpvar0 = script2var(context,PREVAR_scicos_context)
        var PREVAR_scicos_context = tmpvar0[0]
        var ierr = tmpvar0[1];
        if (ierr!=0) {
            this.x = arg1;
            return;
        }
        var tt = "scicos_context."+exprs0[1-1];
        for (i=2;i<=size(exprs0,1);i+=1) {
            var tt = tt+",scicos_context."+exprs0[i-1];
        }
        var ss = graphics.exprs[2-1][3-1];
        var scicos_context = PREVAR_scicos_context;
        execstr("[ok,"+tt+",exprs]=scicos_getvalue(btitre,bitems,ss,exprs)");
        if (this.ok) {
            this.x = arg1;
            var PREVAR_scicos_context = scicos_context;
            var sblock = this.x.model.rpar;
            var tmpvar1 = do_eval(sblock,list(),scicos_context)
            var sblock = tmpvar1[0]
            %w = tmpvar1[1]
            var needcompile2 = tmpvar1[2]
            this.ok = tmpvar1[3];
            var y = max(2,this.needcompile,needcompile2);
            this.x.graphics.exprs[1-1] = exprs;
            this.x.model.rpar = sblock;
        } else {
            this.x = arg1;
        }
        return new BasicBlock(this.x);
    }
}
