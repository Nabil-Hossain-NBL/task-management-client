import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const TaskCard = ({ task }) => {
    const { _id, title, description, value } = task;

    const handleDelete = _id => {

        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://task-management-server-mu.vercel.app/task/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your task has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div>
            <div className="card card-side bg-neutral w-2/3 mx-auto my-4 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title underline">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-center">
                    <span className= {value==='pending'? "bg-warning p-2 rounded-md text-black" : "bg-white text-black p-2 rounded-md " }>{value}</span>
                    </div>
                </div>
                <div className="card-actions m-5 justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <Link to={`update-task/${_id}`}><button className="btn bg-white ">update</button></Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn bg-warning ">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;