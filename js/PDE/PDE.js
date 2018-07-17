/* autogenerated from "macros/PDE/PDE.sci" */
function PDE() {
    PDE.prototype.define = function PDE() {
        this.model = scicos_model();
        this.model.state = new ScilabDouble([zeros(10,1)]);
        this.model.sim = list(new ScilabString(["PDE"]), new ScilabDouble([0]));
        this.model.in = new ScilabDouble([1],[1],[1],[1],[1]);
        this.model.out = new ScilabDouble([10],[0]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabBoolean([false,true]);
        var params_pde = tlist([["paramspde"],["a"],["b"],["txt_exp"],["check_op1"],["a1"],["b1"],["check_op2"],["a2"],["b2"],["check_op3"],["a3"],["b3"],["check_op4"],["a4"],["b4"],["check_op5"],["a5"],["b5"],["check_op6"],["a6"],["b6"],["check_op7"],["a7"],["b7"],["discr_cst"],["discr_non_cst"],["signe"],["rad_automatique"],["rad_manuel"],["methode"],["ord1"],["ord2"],["ord3"],["degre"],["nnode"],["txt_pas"],["CI"],["dCI"],["CLa"],["CLa_exp"],["CLb"],["CLb_exp"],["points"]],"","","","0","","IN_EDP1(t)","0","","IN_EDP2(t)","0","","IN_EDP3(t)","0","","IN_EDP4(t)","0","","IN_EDP5(t)","0","","IN_EDP6(t)","0","","IN_EDP7(t)","0","0","0","0","0","0","","","","","","","","","0","IN_CL1(t)","0","IN_CL2(t)","");
        var label = list(params_pde,[],"");
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"PDE\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3,3]),this.model,label,this.gr_i);
        return new BasicBlock(this.x);
    }
    PDE.prototype.details = function PDE() {
        return this.x;
    }
    PDE.prototype.get = function PDE() {
        alert("parameters cannot be modified");
    }
    PDE.prototype.set = function PDE() {
        var label = this.graphics.exprs;
        var params_pde = label[1-1];
        while (true) {
            [ln,fun]=where()
            if (!or(fun=="do_eval")) {
                var tmpvar0 = IHM_EDP(params_pde);
                var ok = tmpvar0[0];
                var a_domaine = tmpvar0[1];
                var b_domaine = tmpvar0[2];
                var discr = tmpvar0[3];
                var signe = tmpvar0[4];
                var choix = tmpvar0[5];
                var type_meth = tmpvar0[6];
                var degre = tmpvar0[7];
                var Nbr_maillage = tmpvar0[8];
                var CI = tmpvar0[9];
                var CI1 = tmpvar0[10];
                var CLa_type = tmpvar0[11];
                var CLa_exp = tmpvar0[12];
                var CLb_type = tmpvar0[13];
                var CLb_exp = tmpvar0[14];
                var oper = tmpvar0[15];
                var a1 = tmpvar0[16];
                var b1 = tmpvar0[17];
                var a2 = tmpvar0[18];
                var b2 = tmpvar0[19];
                var a3 = tmpvar0[20];
                var b3 = tmpvar0[21];
                var a4 = tmpvar0[22];
                var b4 = tmpvar0[23];
                var a5 = tmpvar0[24];
                var b5 = tmpvar0[25];
                var a6 = tmpvar0[26];
                var b6 = tmpvar0[27];
                var a7 = tmpvar0[28];
                var b7 = tmpvar0[29];
                var k = tmpvar0[30];
                var mesures = tmpvar0[31];
                var params_pde = tmpvar0[32];
                if (ok) {
                    return;
                }
            } else {
                if (exists("%scicos_context")) {
                    var tmpvar1 = setvalue_IHM_EDP(params_pde);
                    var ok = tmpvar1[0];
                    var a_domaine = tmpvar1[1];
                    var b_domaine = tmpvar1[2];
                    var discr = tmpvar1[3];
                    var signe = tmpvar1[4];
                    var choix = tmpvar1[5];
                    var type_meth = tmpvar1[6];
                    var degre = tmpvar1[7];
                    var Nbr_maillage = tmpvar1[8];
                    var CI = tmpvar1[9];
                    var CI1 = tmpvar1[10];
                    var CLa_type = tmpvar1[11];
                    var CLa_exp = tmpvar1[12];
                    var CLb_type = tmpvar1[13];
                    var CLb_exp = tmpvar1[14];
                    var oper = tmpvar1[15];
                    var a1 = tmpvar1[16];
                    var b1 = tmpvar1[17];
                    var a2 = tmpvar1[18];
                    var b2 = tmpvar1[19];
                    var a3 = tmpvar1[20];
                    var b3 = tmpvar1[21];
                    var a4 = tmpvar1[22];
                    var b4 = tmpvar1[23];
                    var a5 = tmpvar1[24];
                    var b5 = tmpvar1[25];
                    var a6 = tmpvar1[26];
                    var b6 = tmpvar1[27];
                    var a7 = tmpvar1[28];
                    var b7 = tmpvar1[29];
                    var k = tmpvar1[30];
                    var mesures = tmpvar1[31];
                    var params_pde = tmpvar1[32];
                }
            }
            this.okk = false;
            this.rdnom = "PDE";
            var ok1 = true;
            while (true) {
                var ok = true;
                this.okk = parseBoolean(arguments[0]["okk"]);
                this.rdnom = arguments[0]["rdnom"];
                this.lab = arguments[0]["lab"];
                if (this.okk==false) {
                    var ok1 = false;
                    return;
                }
                label[3-1] = this.lab;
                this.rdnom = stripblanks(this.rdnom);
                if (this.rdnom==emptystr()) {
                    var ok1 = false;
                    x_message("sorry C file name not defined");
                }
                if (ok1) {
                    break;
                }
            }
            if ((choix==0)) {
                var ind4 = strindex(a4,"x");
                var ind1 = strindex(a1,"x");
                var ind2 = strindex(a2,"x");
                if ((ind4!=[]||ind1!=[]||ind2!=[])) {
                    if ((signe==1)) {
                        var delta = 1;
                    } else if ((signe==2)) {
                        var delta = -1;
                    } else if ((signe==0)) {
                        var delta = 0;
                    } else {
                        x_message([["le discriminant n\'est pas constant,"],["Vous devez choisir son signe dans l\'IHM"]]);
                        return;
                    }
                } else {
                    var delta = evstr(a4)^2-4*evstr(a1)*evstr(a2);
                }
                if ((delta==[])) {
                    var delta = 0;
                }
                var type_meth = arbre_decision(delta);
            }
            var tmpvar2 = translate(CI,CI1,CLa_type,CLa_exp,CLb_type,CLb_exp,oper,type_meth,degre,a_domaine,b_domaine,Nbr_maillage,a1,b1,a2,b2,a3,b3,a4,b4,a5,b5,a6,b6,a7,b7,this.rdnom,mesures);
            var flag_type = tmpvar2[0];
            this.rdnom = tmpvar2[1];
            var DF_type = tmpvar2[2];
            var tt = tmpvar2[3];
            var Nbr = Nbr_maillage;
            if (((CLa_type==1)&&(DF_type==0||DF_type==1))||((CLb_type==1)&&(DF_type==0||DF_type==2))) {
                var Nbr = Nbr+1;
            }
            if ((mesures==[])) {
                var out = Nbr_maillage;
            } else {
                var out = [[Nbr_maillage],[size(mesures,"*")]];
            }
            if ((flag_type==1)) {
                this.model.sim = list(new ScilabDouble([this.rdnom]), new ScilabDouble([2004]));
                if ((find(oper==1)!=[])) {
                    this.model.state = new ScilabDouble([zeros(2*Nbr_maillage,1)]);
                } else {
                    this.model.state = new ScilabDouble([zeros(Nbr_maillage,1)]);
                }
            } else if ((flag_type==2)) {
                this.model.sim = list(new ScilabDouble([this.rdnom]), new ScilabDouble([12004]));
                if ((find(oper==1)!=[])) {
                    if ((type_meth==3&&(find(oper==2)!=[]||find(oper==4)!=[]))) {
                        this.model.state = new ScilabDouble([zeros(6*Nbr_maillage,1)]);
                    } else if ((type_meth==1)) {
                        this.model.state = new ScilabDouble([zeros(4*Nbr,1)]);
                    } else {
                        this.model.state = new ScilabDouble([zeros(4*Nbr_maillage,1)]);
                    }
                } else {
                    if ((type_meth==3&&(find(oper==2)!=[]||find(oper==4)!=[]))) {
                        this.model.state = new ScilabDouble([zeros(4*Nbr_maillage,1)]);
                    } else if ((type_meth==1)) {
                        this.model.state = new ScilabDouble([zeros(2*Nbr,1)]);
                    } else {
                        this.model.state = new ScilabDouble([zeros(2*Nbr_maillage,1)]);
                    }
                }
            }
            var tmpvar3 = CFORTREDP(this.rdnom,tt);
            var ok1 = tmpvar3[0];
            if (!ok1) {
                break;
            }
            if (!ok) {
                var tmpvar4 = check_io(this.model,this.graphics,ones(k,1),out.slice(),[],[]);
                this.model = tmpvar4[0];
                this.graphics = tmpvar4[1];
                var ok = tmpvar4[2];
            }
            label[1-1] = params_pde;
            label[2-1] = tt;
            this.graphics.exprs = new ScilabDouble([label]);
            this.x.graphics = this.graphics;
            this.x.model = this.model;
            break;
        }
        return new BasicBlock(this.x);
    }
}
