
import Title from "../../Components/Title";

const AddTask = () => {
    return (
        <div className="bg-lime-900/40">
            <Title text='hello' title='Add A todo task'></Title>
            <div className=" py-10 text-neutral-content ">
                <div className="card md:max-w-xl mx-auto bg-lime-900/80">

                    <form className="card-body items-center ">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text  text-sm font-bold text-white">Task Name</span>
                            </label>
                            <input type="text" name="title" placeholder="Add a Task Name" className="input input-bordered" required />
                        </div>
                        <div className="flex gap-5 w-full">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text  text-sm font-bold text-white">Priority</span>
                                </label>
                                <select className="select select-bordered w-full max-w-xs">
                                    <option disabled selected>Select your Priority</option>
                                    <option>Low</option>
                                    <option>Moderate</option>
                                    <option>High</option>
                                </select>
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text  text-sm font-bold text-white">Date</span>
                                </label>
                                <input type="datetime-local" name="date" placeholder="Add a date" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-sm font-bold text-white ">Description</span>
                            </label>
                            <textarea type="text" name="desc" placeholder="Add description" className="textarea textarea-bordered" required />
                        </div>
                        <div className="form-control w-full">
                            <button className="btn w-full mt-5 bg-gradient-to-r from-green-400 to-lime-500 text-white">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTask;