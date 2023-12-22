import Title from "../../Components/Title";
import { useForm } from 'react-hook-form';

const TaskManager = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        createTask(data);
    };

    return (
        <div>
            <Title title='Task Manager'></Title>
            <div className=" py-10 text-neutral-content ">
                <div className="card md:max-w-xl mx-auto bg-lime-900/80">

                    <form onSubmit={handleSubmit(onSubmit)} className="card-body items-center ">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text  text-sm font-bold text-white">Task Name</span>
                            </label>
                            <input type="text" {...register('title', { required: true })} name="title" placeholder="Add a Task Name" className="input input-bordered" required />
                        </div>
                        <div className="flex gap-5 w-full">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text  text-sm font-bold text-white">Priority</span>
                                </label>
                                <select {...register('priority', { required: true })}>
                                    <option value="low">Low</option>
                                    <option value="moderate">Moderate</option>
                                    <option value="high">High</option>
                                </select>
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text  text-sm font-bold text-white">Date</span>
                                </label>
                                <input type="datetime-local" {...register('date', { required: true })} placeholder="Add a date" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-sm font-bold text-white ">Description</span>
                            </label>
                            <textarea type="text" {...register('desc', { required: true })} placeholder="Add description" className="textarea textarea-bordered" required />
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

export default TaskManager;