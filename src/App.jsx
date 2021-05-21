import React, { useState } from 'react'
import TodoList from './TodoList'

const App=()=>{
    const [inputfield,setinput]=useState("");
    const [items,setItems]=useState([]); 
    const inputEve=(e)=>{
        setinput(e.target.value);
    }
    const listItem=()=>{
        setItems((oldvalue)=>{
            return [...oldvalue,inputfield];
        })
        setinput("");
    }
    const deleteitem=(id)=>{
        console.log("deleted");
        setItems((oldvalue)=>{
            return oldvalue.filter((arrele,index)=>{
                return index!==id;
            })
        })
    }
    return(
        <>
        <div className='main_div'>
            <div className='center_div'>
                <h1>ToDo List</h1>
                <input 
                type="text"
                value={inputfield}
                placeholder="Add an item"
                onChange={inputEve}
                />
                <button onClick={listItem}>+</button>
                <ol>
                    {items.map((itemval,index) => {
                       return <TodoList key={index} id={index} text={itemval} onSelect={deleteitem}/>
                    })}
                </ol>
            </div>
        </div>
        </>
    );
}

export default App;