export const Task = (props) => {
    return (
        
        <div 
            className="task"
            style={{ backgroundColor: props.completed ? "green" : "black"}}
        >
            <p>{props.taskName} &nbsp;   
                <button onClick={() => {props.completeTask(props.id)}}>Completed</button> &nbsp;
                <button onClick={() => props.deleteTask(props.id)}> Delete </button>
            </p>
        </div>
    );
};