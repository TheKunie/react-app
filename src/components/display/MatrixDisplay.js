import React from 'react';
import Markdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import './katex.min.css'
import Display from './Display';


function MatrixDisplay(array1, array2, array3) {


    if (array1 === undefined) {
        array1 = ["a", "b", "c", "d"];
    }
    
    if (array2 === undefined) {
        array2 = ["a", "b", "c", "d"];
    }
    
    if (array3 === undefined) {
        array3 = ["a", "b", "c", "d"];
    }
    



    var a = array1[0];
    var b = array1[1];
    var c = array1[2];
    var d = array1[3];

    var e = array2[0];
    var f = array2[1];                                                                      
    var g = array2[2];
    var h = array2[3];

    var i = array3[0];
    var j = array3[1];
    var k = array3[2];
    var l = array3[3];
    


    var matrix = "$"+"\\begin{bmatrix}"+a+" & "+b+" & "+c+" & "+d+"\\\\"+e+" & "+f+" & "+g+" & "+h+"\\\\"+i+" & "+j+" & "+k+" & "+l+"\\\\\\end{bmatrix}"+"$";

    return(
        <Display input={matrix}/>
    )


};

export default MatrixDisplay;
