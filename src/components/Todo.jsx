import { useState } from "react";

import { TodoInput } from "./TodoInput";

//////////3rd/////////
import { TodoList } from "./TodoList";

//////////3rd/////////

export const Todo = () => {
    const [todoList,setTodoList] = useState([]);
    const [Showfiltered, setShowfiltered] = useState(false);


    const handleAddTodo = (todo) => {
        setTodoList([...todoList,todo]);
    };


    /////////////4th///////
    const handleToggle = (id) => {
        const updateList = todoList.map((todo)=>{

            return todo.id === id ? { ...todo, status:!todo.status } : todo; 







            // if(todo.id === id){
            //     todo.status = !todo.status;
            // }
            // return todo;



        })
        setTodoList(updateList)
    }

    return(
        <div>
            <TodoInput handleAddTodo = {handleAddTodo}/>
            {/* ///3rd/// 4th*/}
            <TodoList 
            list={setShowfiltered ? todoList.filter((e) => !e.status) : todoList} 
            handleToggle={handleToggle} 
            />
            {/* ///3rd end/////// */}

            <button onClick={()=>{
                setShowfiltered(!Showfiltered)
                // const update = todoList.filter((e) => !e.status);
                // setTodoList(update)

            }}>{Showfiltered ? "Show Not Completed" : "show all"}</button>
        </div>
    );
};