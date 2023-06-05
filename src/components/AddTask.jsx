import { useState } from 'react';
import Swal from 'sweetalert2'
const AddTask = () => {

    const [value, setValue] = useState('pending')
    const handleSeclect = (event) => {
        const value = event.target.value;
        setValue(value)
    }

    if (value === "Choose here") {
        setValue('pending')
    }

    const handleTask = event => {
        event.preventDefault();

        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;

        const newTask = { title, description, value }
        console.log(newTask);

        // sending data to the server
        fetch('https://task-management-server-mu.vercel.app/task', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTask)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'New task added',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                form.reset()
            })
    }
    return (
        <div className="text-black h-screen">
            <form onSubmit={handleTask}>
                <div className="flex-col w-1/3 m-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Task Title</span>
                        </label>
                        <label className="input-group">
                            <span>Title</span>
                            <input type="text" required placeholder="title" className="input w-full input-bordered" name="title" />
                        </label>
                    </div>
                    <div className="form-control mb-5">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <span>Description</span>
                            <input type="text" placeholder="description" className="input w-full input-bordered" name="description" />
                        </label>
                    </div>
                    <div className="input-group justify-center my-5">
                        <label className="input-group">
                            <span>Status</span>
                            <select onChange={handleSeclect} >
                                <option value="Choose here" >Choose here</option>
                                <option name="status" required value="pending">Pending</option>
                                <option name="status" required value="complete">Complete</option>
                            </select>
                        </label>
                    </div>
                    <input className="btn btn-block" type="submit" value="Add Task" />
                </div>
            </form>
        </div>
    )
}

export default AddTask;