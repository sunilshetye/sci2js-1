/* autogenerated from "macros/Misc/CONSTRAINT2_c.sci" */
function CONSTRAINT2_c() {
    CONSTRAINT2_c.prototype.define = function CONSTRAINT2_c() {
        this.x0 = [0];
        this.xd0 = [0];
        this.id = [0];
        model = scicos_model();
        model.sim = list("constraint_c",10004);
        model.in1 = 1;
        model.out = [[1],[1]];
        model.state = [[this.x0],[this.xd0]];
        model.ipar = this.id;
        model.blocktype = "c";
        model.dep_ut = [false,true];
        exprs = list(strcat(sci2exp(this.x0)),strcat(sci2exp(this.xd0)),strcat(sci2exp(this.id)));
        gr_i = [];
        this.x = standard_define([3,2],model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    CONSTRAINT2_c.prototype.details = function CONSTRAINT2_c() {
        return this.x;
    }
    CONSTRAINT2_c.prototype.get = function CONSTRAINT2_c() {
        var options = {
            x0:["Initial guess values of states x",this.x0],
            xd0:["Initial guess values of derivative x\'",this.xd0],
            id:["Id(i)=1: if x\'(i) is present in the feedback, else Id(i)=0",this.id],
        }
        return options;
    }
    CONSTRAINT2_c.prototype.set = function CONSTRAINT2_c() {
        this.x0 = inverse((arguments[0]["x0"]))
        this.xd0 = inverse((arguments[0]["xd0"]))
        this.id = inverse((arguments[0]["id"]))
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        while (true) {
            ask_again = false;
            [ok,this.x0,this.xd0,this.id,exprs] = scicos_getvalue("Set Constraint block parameters",["Initial guess values of states x","Initial guess values of derivative x\'","Id(i)=1: if x\'(i) is present in the feedback, else Id(i)=0"],list("vec",-1,"vec",-1,"vec",-1),exprs);
            if (!ok) {
                break;
            }
            this.x0 = this.x0.slice();
            N = size(this.x0,"*");
            this.xd0 = this.xd0.slice();
            Nxd = size(this.xd0,"*");
            this.id = this.id.slice();
            Nid = size(this.id,"*");
            if ((N!=Nxd)||(N!=Nid)) {
                message("incompatible sizes, states, their derivatives, and ID should be the same size ");
                ask_again = true;
            }
            if ((N<=0&&!ask_again)) {
                x_message("number of states (constraints) must be > 0 ");
                ask_again = true;
            }
            if ((!ask_again)) {
                for (i=1;i<=N;i+=1) {
                    if (!((this.id[i-1]==0)||(this.id[i-1]==1))) {
                        ask_again = true;
                        x_message([["Id(i) must be either"],["0 when x\'(i) is not present in the feedback"],["1: when x\'(i) is present in the feedback"]]);
                        break;
                    }
                    if ((this.id[i-1]==0)) {
                        this.id[i-1] = -1;
                    }
                }
            }
            if (!ask_again) {
                graphics.exprs = exprs;
                model.state = [[this.x0],[this.xd0]];
                model.out = [[N],[N]];
                model.in1 = N;
                model.ipar = this.id;
                this.x.graphics = graphics;
                this.x.model = model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
