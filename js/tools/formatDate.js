export function formatDate(date) {
    date = new Date(date);

    const timezoneOffset = date.getTimezoneOffset();
    date.setTime(date.getTime() + (timezoneOffset * 60000));

    return(date.toLocaleDateString("pt-BR"));
};