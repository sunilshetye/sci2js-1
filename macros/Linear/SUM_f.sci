//  Scicos
//
//  Copyright (C) INRIA - METALAU Project <scicos@inria.fr>
//
// This program is free software; you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation; either version 2 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA.
//
// See the file ../license.txt
//

function [x,y,typ]=SUM_f(job,arg1,arg2)
    x=[];
    y=[];
    typ=[];
    p=1 //pixel sizes ratio
    select job
    case "set" then
        x=arg1;
    case "define" then
        model=scicos_model()
        model.sim=list("plusblk",2)
        model.in=[-1;-1;-1]
        model.out=-1
        model.blocktype="c"
        model.dep_ut=[%t %f]

        gr_i=[]
        exprs=[]
        x=standard_define([1 1],model,exprs,gr_i)
    end
endfunction
