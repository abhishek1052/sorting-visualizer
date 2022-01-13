import React from 'react'
import Block from './Block'
import {insertionSort,BubbleSort,ms,selectionSort} from './sortingalgo';
import Button from './Button';
const Card = () => {
    const newarr=[];
    const [arr,changearr]=React.useState([]);
    const [dis,changedis]=React.useState(false);
    const [click,changeclick]=React.useState(1);
    
    function change(event){
        const x=event.target.value;
        var du="";
        for(var i=0;i<x.length;i++){
            if(x[i]!==" "){
                du+=(x[i]);
            }
            else{
                if(parseInt(du)>30){
                    alert("Enter elements between 0 to 30");
                    event.target.value=x.substring(0,x.length-du.length-1);
                }
                else{
                    newarr.push(parseInt(du));
                }
                du="";
            }
        }
        changearr(newarr);
    }
    function show(event){
        changedis(true);
        if(click===1){
            BubbleSort(changearr,arr,changedis);
        }
        else if(click===2){
            insertionSort(changearr,arr,changedis);
        }
        else if(click===3){
            selectionSort(changearr,arr,changedis);

        }
        else if(click===4){
            ms(changearr,arr,changedis);
        }
        event.preventDefault();
    }
    return (
        <>
        <div className='inputbar'>
            <form action="">
            <input  id='input' onChange={change} type="text" placeholder='ADD ARRAY WITH SPACES BETWEEN ELEMENT(1-30)' disabled={dis} />
            <input id="button" type="submit" onClick={show} value="Sort" disabled={dis} />
            <Button key={1} val={1} algo="Bubble-Sort" color="red" disabled={dis} change={changeclick} x={click}/>
            <Button key={2} val={2} algo="Insertion-Sort" color="blue" disabled={dis} change={changeclick} x={click} />
            <Button key={3} val={3} algo="Selection-Sort" color="violet" disabled={dis} change={changeclick} x={click} />
            <Button key={4} val={4} algo="Merge-Sort" color="green" disabled={dis} change={changeclick} x={click} />
            <Button key={5} val={5} algo="Random-array" color="orange" disabled={dis} change={changearr}/>
             </form>
        </div>
        <div className='card'>
            {arr.map((e,index)=>{
                return <Block  key={[index]} height={e*20} /> 
            }
            )}
        </div>
        </>
    )
}
export default Card