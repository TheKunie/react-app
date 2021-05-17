import React from 'react';
import Display from '../display/Display';

import factorExtractor from '../factorExtractor/factorExtract';

class InputView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eq1: '',
            eq2: '',
            eq3: '',
            equation: '',
            matrix: ''
        };
        this.vars = {
            eq1: '',
            eq2: '',
            eq3: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    
    MatrixDisplay(event) {


        array1 = typeof array1 !== 'undefined' ? array1 : ["a", "b", "c", "d"];
        array2 = typeof array2 !== 'undefined' ? array2 : ["j", "k", "l", "i"];
        array3 = typeof array3 !== 'undefined' ? array3 : ["i", "j", "k", "l"];
    
        var a = array1[0];
        var b = array1[1];
        var c = array1[2];
        var d = array1[3];
    
        var e = array3[0];
        var f = array2[1];                                                                      
        var g = array2[2];
        var h = array2[3];
    
        var i = array3[0];
        var j = array3[1];
        var k = array3[2];
        var l = array3[3];
        
    
    
        var matrix = "$"+"\\begin{bmatrix}"+a+" & "+b+" & "+c+" & "+d+"\\\\"+e+" & "+f+" & "+g+" & "+h+"\\\\"+i+" & "+j+" & "+k+" & "+l+"\\\\\\end{bmatrix}"+"$";
    
        return matrix
    
    
    };
    
    handleChange(event) {
        const target = event.target;
        this.setState({ [target.name] : target.value});  
    }

    handleSubmit(event) {
        const target = event.target;
        this.vars.eq1 = factorExtractor([this.state.eq1]);
        this.vars.eq2 = factorExtractor([this.state.eq2]);
        this.vars.eq3 = factorExtractor([this.state.eq3]);
        console.log(this.vars.eq1);
        this.state.matrix = String(MatrixDisplay(this.vars.eq1, this.vars.eq2, this.vars.eq3));
        
        
    }

    render() {
        console.log("State:" + this.state.eq1);
        return(
        <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <label className="form-label">Equation 1</label>
                    <input id="input-1" type="text" className="form-control" placeholder="Ax + By + Cz = D" value={this.state.eq1} onChange={this.handleChange} name="eq1"></input>
                </div>
                <div className="col">
                    <label className="form-label">Equation 2</label>
                    <input id="input-2" type="text" className="form-control" placeholder="Ax + By + Cz = D" value={this.state.eq2} onChange={this.handleChange} name="eq2"></input>
                </div>
                <div className="col">
                    <label className="form-label">Equation 3</label>
                    <input id="input-3" type="text" className="form-control" placeholder="Ax + By + Cz = D" value={this.state.eq3} onChange={this.handleChange} name="eq3"></input>
                </div>
            </div>
        </div>
            <br />
            <div className="row">
                <div className="col">
                    <Display input={'$'+this.state.eq1+'$'}/>
                </div>  
                <div className="col">
                    <Display input={'$'+this.state.eq2+'$'}/>
                </div>  
                <div className="col">
                    <Display input={'$'+this.state.eq3+'$'}/>
                </div>  
            </div>
            <div className="row">
                <div className="col">
                    <factorExtractor string={this.state.equation}/>
                </div>  
            </div>
            <div className="row">
                <div className="col">
                    <Display input={''+ String(this.state.matrix) +''}/>
                </div>  
            </div>
            <br/>
            <button className="btn btn-success" onClick={this.handleSubmit}>Accept</button>
        </div>
        
    ); 
    
    }



}

//  5x+2y+1z=3


export default InputView;