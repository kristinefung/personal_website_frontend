import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import EnquiryService from 'services/EnquiryService';

import EnquiryForm from 'components/dashboard/form/EnquiryForm';

const EnquiryEdit = () => {
    const [enquiry, setEnquiry] = useState({

    });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const params = useParams();

    const enquiryService = EnquiryService();
    console.log(enquiry);

    const fetchGetEnquiry = async () => {
        setIsLoading(true);

        try {
            const enquiryRes = await enquiryService.getEnquiryById(params.id);
            console.log(enquiryRes);
            setEnquiry(enquiryRes);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchGetEnquiry();
    }, []);

    return (
        <>
            {isLoading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error: {error.message}</div>
            ) : (
                <div>
                    <h1>Edit enquiry</h1>

                    <EnquiryForm action='UPDATE' enquiryData={enquiry} />
                </div>

            )}
        </>
    );
}

export default EnquiryEdit;