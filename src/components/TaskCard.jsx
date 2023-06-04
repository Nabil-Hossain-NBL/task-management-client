import Swal from "sweetalert2";

const TaskCard = ({ task }) => {
    const { _id, title, description } = task

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
            //   Swal.fire(
            //     'Deleted!',
            //     'Your file has been deleted.',
            //     'success'
            //   )
            console.log('delete confirm');
            }
          })
    }
    return (
        <div>
            <div className="card card-side bg-base-100 my-4 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
                <div className="card-actions m-5 justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn">view</button>
                        <button className="btn">edit</button>
                        <button
                        onClick={() => handleDelete(_id)}
                        className="btn">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;