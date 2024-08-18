const getRandomString = (length) => {
    let str = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        str += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return str;
}

const getMonthOptions = () => {
    const months = [
        { label: 'Select month', value: 0 },
        { label: 'Jan', value: 1 },
        { label: 'Feb', value: 2 },
        { label: 'Mar', value: 3 },
        { label: 'Apr', value: 4 },
        { label: 'May', value: 5 },
        { label: 'Jun', value: 6 },
        { label: 'Jul', value: 7 },
        { label: 'Aug', value: 8 },
        { label: 'Sep', value: 9 },
        { label: 'Oct', value: 10 },
        { label: 'Nov', value: 11 },
        { label: 'Dec', value: 12 },
    ];

    return months;
}

const getYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 101 }, (_, i) => {
        return {
            label: currentYear - i,
            value: currentYear - i
        }
    });
    years.unshift({ label: 'Select year', value: 0 });

    return years;
}

const getEnquiryStatusOptions = () => {
    const status = [
        { label: 'Unhandled', value: 1 },
        { label: 'Handled', value: 2 },
    ];

    return status;
}

const readableDate = (startMonth, startYear, endMonth, endYear, isCurrent) => {
    let date = '';
    const months = getMonthOptions();

    const startMonthStr = months.find(m => m.value === startMonth);
    const startMonthShortStr = startMonthStr ? startMonthStr.label : '';

    date = `${startMonthShortStr} ${startYear}`;

    if (isCurrent) {
        date += ` - Present`
    } else {
        const endMonthStr = months.find(m => m.value === endMonth);
        const endMonthShortStr = endMonthStr ? endMonthStr.label : '';
        date += ` - ${endMonthShortStr} ${endYear}`
    }

    return date
}
const readableDateTime = (datetime) => {
    const date = new Date(datetime);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const hour = String(date.getHours()).padStart(2, '0')
    const minute = String(date.getMinutes()).padStart(2, '0')

    const formattedDate = `${year}-${month}-${day} ${hour}:${minute}`;

    return formattedDate
}

const readableEnquiryStatus = (status) => {
    const statuses = getEnquiryStatusOptions();
    const statusKeyValue = statuses.find(s => s.value === status);
    const readableStatus = statusKeyValue ? statusKeyValue.label : '';
    return readableStatus
}

export {
    getRandomString,
    getMonthOptions,
    getYearOptions,
    getEnquiryStatusOptions,
    readableDate,
    readableDateTime,
    readableEnquiryStatus
};