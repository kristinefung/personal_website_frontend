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
        { label: 'January', value: 1 },
        { label: 'February', value: 2 },
        { label: 'March', value: 3 },
        { label: 'April', value: 4 },
        { label: 'May', value: 5 },
        { label: 'June', value: 6 },
        { label: 'July', value: 7 },
        { label: 'August', value: 8 },
        { label: 'September', value: 9 },
        { label: 'October', value: 10 },
        { label: 'November', value: 11 },
        { label: 'December', value: 12 },
    ];

    return months;
}

const getYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 101 }, (_, i) => { return { label: currentYear - i, value: currentYear - i } });
    years.unshift({ label: 'Select year', value: 0 });

    return years;
}

export {
    getRandomString,
    getMonthOptions,
    getYearOptions
};