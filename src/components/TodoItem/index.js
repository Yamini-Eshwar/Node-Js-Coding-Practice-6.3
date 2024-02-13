import './index.css'

const TodoItem = (props) =>{
    const {todoDetails,onDeleteTodoItem} = props
    const {id,title} = todoDetails
 
    const onDelete = () =>{
          onDeleteTodoItem(id);
    }

     return(
        <div className='card'>
            <p>{title}</p>
            <button onClick={onDelete}>Delete</button>
        </div>
     )
}

export {TodoItem}