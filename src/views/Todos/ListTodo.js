import React from "react";
import AddTodo from "./AddTodo";
import './ListTodo.scss';
import { toast } from 'react-toastify';


class ListTodo extends React.Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Wash dishes' },
            { id: 'todo3', title: 'Study' }
        ],
        editTodo: {}
    }
    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        toast.success("Wow so easy!")
    }
    handleDeleteTodo = (todo) => {
        let currentTodo = this.state.listTodos;
        currentTodo = currentTodo.filter(item => item.id !== todo.id)
        this.setState({
            listTodos: currentTodo
        })
        toast.success("Delete succeed!")

    }
    handleEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state
        let isEmtyObj = Object.keys(editTodo).length === 0;
        //save
        if (isEmtyObj === false && editTodo.id === todo.id) {

            let listTodosCopy = [...listTodos];
            //Find index of specific object using findIndex method.    
            let objIndex = listTodosCopy.findIndex((item => item.id == todo.id));


            //Update object's name property.
            listTodosCopy[objIndex].title = editTodo.title;
            this.setState({
                ListTodos: listTodosCopy,
                editTodo: {}
            })
            toast.success("Update succeed!")

            return;

        }

        //edit
        this.setState({
            editTodo: todo
        })

    }
    handleOnChangeEditTodo = (event) => {
        let editTodocopy = { ... this.state.editTodo };
        editTodocopy.title = event.target.value;
        this.setState({
            editTodo: editTodocopy
        })
    }

    render() {
        let { listTodos, editTodo } = this.state;
        // let listTodos = this.state.listTodos
        let isEmtyObj = Object.keys(editTodo).length === 0;
        console.log('check empty obj:', isEmtyObj);
        return (
            <>
                <p>
                    Simple Todo Apps
                </p>
                <div className="list-todo-container">
                    <AddTodo
                        addNewTodo={this.addNewTodo}
                    />
                    <div className="list-todo-content">
                        {listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <div className="todo-child">
                                        {isEmtyObj === true ?

                                            <span> {index + 1} - {item.title} </span>
                                            :
                                            <>
                                                {editTodo.id === item.id ?
                                                    <span>
                                                        {index + 1} - <input
                                                            value={editTodo.title}
                                                            onChange={(event) => this.handleOnChangeEditTodo(event)} />
                                                    </span>
                                                    :
                                                    <span> {index + 1} - {item.title} </span>

                                                }
                                            </>

                                        }
                                        <button className="btnedit"
                                            onClick={() => this.handleEditTodo(item)}
                                        >
                                            {isEmtyObj === false && editTodo.id === item.id ?
                                                'Save' : 'Edit'
                                            }
                                        </button>
                                        <button className="btndelete"
                                            onClick={() => this.handleDeleteTodo(item)}>Delete</button>

                                    </div>
                                )
                            }
                            )}



                    </div>
                </div>
            </>
        )
    }

}

export default ListTodo;