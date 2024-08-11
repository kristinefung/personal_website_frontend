
const currentYear = new Date().getFullYear();
const minYear = currentYear - 100;

const formatDate = (year, month) => {
    const yearStr = year.toString();
    const monthStr = month.toString().padStart(2, '0');
    return Number(yearStr + monthStr);
}

const validateWork = (work) => {
    let isValid = true;
    const newErrors = {
        title: '',
        company_name: '',
        description: '',
        start_month: '',
        start_year: '',
        end_month: '',
        end_year: '',
        is_current: '',
    };

    if (!work.title?.trim()) {
        newErrors.title = 'Required';
        isValid = false;
    }

    if (!work.company_name?.trim()) {
        newErrors.company_name = 'Required';
        isValid = false;
    }

    if (Number(work.start_month) < 1 || Number(work.start_month) > 12) {
        newErrors.start_month = 'Required';
        isValid = false;
    }

    if (Number(work.start_year) < minYear || Number(work.start_month) > currentYear) {
        newErrors.start_year = 'Required';
        isValid = false;
    }

    if (work.is_current === 0) {
        if (Number(work.end_month) < 1 || Number(work.end_month) > 12) {
            newErrors.end_month = 'Required';
            isValid = false;
        }
        if (Number(work.end_year) < minYear || Number(work.end_month) > currentYear) {
            newErrors.end_year = 'Required';
            isValid = false;
        }
        if (formatDate(work.start_year, work.start_month) > formatDate(work.end_year, work.end_month)) {
            newErrors.start_year = 'Start date must on or before end date';
            newErrors.start_month = 'Start date must on or before end date';
            newErrors.end_year = 'Start date must on or before end date';
            newErrors.end_month = 'Start date must on or before end date';
            isValid = false;

        }
    }

    return { isValid, newErrors };
}

const validateEdu = (edu) => {
    let isValid = true;
    const newErrors = {
        degree: '',
        subject: '',
        school_name: '',
        description: '',
        start_month: '',
        start_year: '',
        end_month: '',
        end_year: '',
        is_current: '',
    };

    if (!edu.degree?.trim()) {
        newErrors.degree = 'Required';
        isValid = false;
    }

    if (!edu.subject?.trim()) {
        newErrors.subject = 'Required';
        isValid = false;
    }

    if (!edu.school_name?.trim()) {
        newErrors.school_name = 'Required';
        isValid = false;
    }

    if (Number(edu.start_month) < 1 || Number(edu.start_month) > 12) {
        newErrors.start_month = 'Required';
        isValid = false;
    }

    if (Number(edu.start_year) < minYear || Number(edu.start_month) > currentYear) {
        newErrors.start_year = 'Required';
        isValid = false;
    }

    if (edu.is_current === 0) {

        if (Number(edu.end_month) < 1 || Number(edu.end_month) > 12) {
            newErrors.end_month = 'Required';
            isValid = false;
        }

        if (Number(edu.end_year) < minYear || Number(edu.end_month) > currentYear) {
            newErrors.end_year = 'Required';
            isValid = false;
        }
        if (formatDate(edu.start_year, edu.start_month) > formatDate(edu.end_year, edu.end_month)) {
            newErrors.start_year = 'Start date must on or before end date';
            newErrors.start_month = 'Start date must on or before end date';
            newErrors.end_year = 'Start date must on or before end date';
            newErrors.end_month = 'Start date must on or before end date';
            isValid = false;

        }
    }

    return { isValid, newErrors };
}

export {
    validateWork,
    validateEdu
};