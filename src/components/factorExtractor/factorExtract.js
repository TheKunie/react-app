import React from 'react';



function factorExtractor(string) {
    var str = string + "";
    var a = str.substring(0, str.lastIndexOf("x"));
    var b = str.substring(str.lastIndexOf("x") +1, str.lastIndexOf("y"))
    var c = str.substring(str.lastIndexOf("y") +1, str.lastIndexOf("z"))
    var d = str.substring(str.lastIndexOf("=") +1, str.length)

    console.log(str)
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    var array1 = [a, b, c, d];
    return array1;


}


export default factorExtractor;