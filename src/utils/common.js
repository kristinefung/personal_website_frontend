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
        { label: 'Select month', value: '' },
        { label: 'January', value: '01' },
        { label: 'February', value: '02' },
        { label: 'March', value: '03' },
        { label: 'April', value: '04' },
        { label: 'May', value: '05' },
        { label: 'June', value: '06' },
        { label: 'July', value: '07' },
        { label: 'August', value: '08' },
        { label: 'September', value: '09' },
        { label: 'October', value: '10' },
        { label: 'November', value: '11' },
        { label: 'December', value: '12' },
    ];

    return months;
}

const getYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 101 }, (_, i) => { return { label: currentYear - i, value: currentYear - i } });
    years.unshift({ label: 'Select year', value: '' });

    return years;
}

export {
    getRandomString,
    getMonthOptions,
    getYearOptions
};