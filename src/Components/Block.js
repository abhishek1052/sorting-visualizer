import React from 'react'
const Block = (props) => {
    var style;
    var h=props.height;
    if(props.height>=10000){
        h=h/(10000)
            style={
                height:((props.height)/10000),
                backgroundColor:'orange',
                color:'white'
            }
        }
        else{
            style={
                height:props.height,
                color:'white'
           }
    }
    return (
        <div className='block' style={style}  >
            <div style={{padding:"4px"}}>
                {h/20}
            </div>
        </div>
    )
}
export default Block
