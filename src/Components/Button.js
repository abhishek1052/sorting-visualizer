import React from 'react'

const Button = (props) => {
    var style;
    if(props.x===props.val){
        style={
            backgroundColor:"black",
            border:"4px dotted orange"
        }
    }
    else{
        style={
            backgroundColor:props.color
        }
    }
    function ch(event){
        if(props.val!=5){
            props.change(props.val);
        }
        else{
            var array=[];
            for(var i=30;i>0;i--){
                array.push(Math.floor(Math.random() * 30+1));
            }
            props.change(array);
        }
        event.preventDefault();
    }
    return (
        <input  onClick={ch} className="algo-button" type="submit" value={props.algo} style={style} disabled={props.disabled} />
    )
}
export default Button
