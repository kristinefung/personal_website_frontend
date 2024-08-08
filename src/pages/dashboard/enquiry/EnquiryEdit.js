import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const EnquiryEdit = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const params = useParams();

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const authToken = localStorage.getItem("token");

            const requestOptions = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                }
            };
            console.log(requestOptions);
            try {
                const response = await fetch(`http://localhost:4000/api/enquiries/${params.id}`, requestOptions);
                const jsonData = await response.json();
                console.log(jsonData);
                setData(jsonData);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);


    return (
        <>
            {isLoading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error: {error.message}</div>
            ) : (
                <div>
                    <div>{data.data.id}</div>
                    <div>{data.data.company_name}</div>
                    <div>{data.data.comment}</div>
                </div>
            )}
        </>
    );
}

export default EnquiryEdit;