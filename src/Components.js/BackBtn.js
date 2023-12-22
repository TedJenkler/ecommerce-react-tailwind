import { useNavigate } from 'react-router-dom';

const BackBtn = () => {
        const navigate = useNavigate();
    return (
        <button className="ml-6 mt-4 mb-6 text-bordergrey md:ml-10" onClick={() => navigate(-1)}>Go Back</button>
    )
}

export default BackBtn