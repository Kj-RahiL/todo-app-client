import { Link } from "react-router-dom";
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
                                <span className="label-text  text-sm font-bold text-white">Title</span>
                            </label>
                            <input type="text" name="title" placeholder="Add a title" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-sm font-bold text-white ">Description</span>
                            </label>
                            <input type="text" name="desc" placeholder="Add description" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full">
                           <Link to='/dashboard'>
                            <button className="btn w-full mt-5 bg-gradient-to-r from-green-400 to-lime-500 text-white">Add</button>
                           </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTask;