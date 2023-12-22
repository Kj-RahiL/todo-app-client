import { useEffect, useState } from 'react';
import { FaCode, FaBriefcase, FaUniversity, FaUsers, FaGraduationCap, FaUserMd } from 'react-icons/fa';

const Benefits = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('/whoBenifits.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    const getIcon = (icon) => {
        switch (icon) {
            case 'fa-code':
                return <FaCode />;
            case 'fa-briefcase':
                return <FaBriefcase />;
            case 'fa-university':
                return <FaUniversity />;
            case 'fa-users':
                return <FaUsers />;
            case 'fa-user-md':
                return <FaUserMd />;
            case 'fa-graduation-cap':
                return <FaGraduationCap />;
            default:
                return null;
        }
    };

    return (
        <div className='bg-lime-900/40'>
            <h2 className='text-4xl font-bold py-10 text-center'>Who Benefits from Our Task Management App?</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5'>
                {
                    items.map((item, index) => (
                        <div key={index} className="card bg-base-100 shadow">

                            <figure className="px-10 pt-10">
                                <div className="card-icon text-4xl">{getIcon(item.icon)}</div>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h3 className='text-2xl font-bold'>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>

                        </div>

                    ))}
            </div>
        </div>
    );
};

export default Benefits;