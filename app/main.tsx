/// <reference path="../typings/tsd.d.ts" />

import * as React from 'react';
import * as ReactDOM  from 'react-dom';
//import $ from 'jquery';
//import * as tc from 'type-check';
import * as d3 from 'd3';

console.log("hello there");

interface MyFirstProps {
  name: string;
  zip: number;
}


class MyFirst extends React.Component<MyFirstProps,{}>{
 render (){
     return <div> Hello {this.props.name} {this.props.zip}
     <div>steps to get this going: <br/>
     sudo npm i jspm tsd typescript -g<br/>
     npm init<br/>
     jspm init choose typescript as transpiler<br/>
<br/>
     jspm install react<br/>
     jspm install react-dom<br/>
     jspm install d3<br/>
<br/>
     tsd init<br/>
     tsd install react --save<br/>
     tsd install react-dom --save<br/>
     tsd install d3 --save<br/>
<br/>
     create : index.html app/main.tsx<br/>
<br/>
     in atom: create tsconfig.json<br/>
              set module flag in tsconfig to system<br/>
              build main.js<br/>
 </div></div>
    }

}

//console.log (tc.typeCheck('(String, Number)', ['str', 2]));

//console.log (tc.typeCheck('{x: Number, y: Boolean}', {x: 2, y: false, z: 3}));

//console.log (tc.typeCheck('{x: Number, y: Boolean, ...}', {x: 2, y: false, z: 3}));


ReactDOM.render(<MyFirst name="hans" zip={42}/> , document.getElementById("targettag"));
console.log (d3.select("#jqueryout" ));

//$( "#jqueryout" ).append( "<p>jquery was here</p>" );
