module.exports = function() {
    const today8601 = new Date().toISOString().slice(0, 10);

    let footerDate = "2021";
    const curYear = parseInt(today8601.slice(0, 4));
    if (curYear > parseInt(footerDate)) {
        footerDate = `${footerDate}-${curYear}`;
    }

    const todayISO = new Date().toISOString();
    const todayMonthYear = (
        new Date(todayISO)
        .toLocaleString('en-GB', { month: 'long', year: 'numeric' })
    );

    return {
        title: "Alberto MH",
        blurb: "Alberto is a software engineer based in Somerset, UK.",
        createdAt: today8601,
        updatedAt: today8601,
        todayMonthYear,
        footerDate
    };
};
