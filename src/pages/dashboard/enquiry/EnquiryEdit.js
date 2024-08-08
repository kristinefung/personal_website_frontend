import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import EnquiryService from 'services/EnquiryService';

const EnquiryEdit = () => {
    const [enquiry, setEnquiry] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const params = useParams();

    const enquiryService = EnquiryService();

    useEffect(() => {
        const fetchEnquiry = async () => {
            setIsLoading(true);

            try {
                const enquiry = await enquiryService.getEnquiryById(params.id);
                setEnquiry(enquiry);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchEnquiry();
    }, []);


    return (
        <>
            {isLoading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error: {error.message}</div>
            ) : (
                <div>
                    <h1>Enquiry #{enquiry.id}</h1>
                    <div>{enquiry.company_name}</div>
                    <div>{enquiry.comment}</div>
                </div>
            )}
        </>
    );
}

export default EnquiryEdit;