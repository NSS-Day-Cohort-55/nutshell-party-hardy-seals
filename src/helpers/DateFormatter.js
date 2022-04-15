export const formatDatetoYYYYMMDD = (date = new Date()) => {
    let now = new Date(date);
    let month = (now.getMonth() + 1);
    let day = now.getDate();
    if (month < 10)
        month = "0" + month;
    if (day < 10)
        day = "0" + day;
    const today = now.getFullYear() + '-' + month + '-' + day;

    return today
}


export const futureDate = (numberOfDaysToAdd) => {
    let someDate = new Date();
    let result = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);

    return formatDatetoYYYYMMDD(new Date(result))
}