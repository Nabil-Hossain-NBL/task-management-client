import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "./Navbar";

const UpdatedTask = () => {
    const task = useLoaderData();
    const { _id, title, description } = task;

    const [value, setValue] = useState('pending')
    const handleSeclect = (event) => {
        const value = event.target.value;
        setValue(value)
    }

    if (value === "Choose here") {
        setValue('pending')
    }

    const handleUpdateTask = event => {
        event.preventDefault();

        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;

        const updatedTask = { title, description, value }
        console.log(updatedTask);

        // sending data to the server
        fetch(`http://localhost:5000/task/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Task updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <>
            <Navbar></Navbar>
            <div className="text-black h-screen">
                <form onSubmit={handleUpdateTask}>
                    <div className="flex-col w-1/3 m-auto">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Update Title</span>
                            </label>
                            <label className="input-group">
                                <span>Title</span>
                                <input type="text" required placeholder="title" defaultValue={title} className="input w-full input-bordered" name="title" />
                            </label>
                        </div>
                        <div className="form-control mb-5">
                            <label className="label">
                                <span className="label-text">Update Description</span>
                            </label>
                            <label className="input-group">
                                <span>Description</span>
                                <input type="text" placeholder="description" defaultValue={description} className="input w-full input-bordered" name="description" />
                            </label>
                        </div>
                        <div className="input-group justify-center my-5 ">
                            <label className="input-group">
                                <span>Status</span>
                                <select onChange={handleSeclect} >
                                    <option value="Choose here" >Choose here</option>
                                    <option value="pending">Pending</option>
                                    <option value="complete">Complete</option>
                                </select>
                            </label>
                        </div>
                        <input className="btn btn-block" type="submit" value="Update Task" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default UpdatedTask;