module.exports = function() {
    const today8601 = new Date().toISOString().slice(0, 10);

    let footerDate = "2021";
    const curYear = parseInt(today8601.slice(0, 4));
    if (curYear > parseInt(footerDate)) {
        footerDate = `${footerDate}-${curYear}`;
    }

    return {
        title: "Alberto MH",
        blurb: "Alberto is a software engineer based in Bristol, UK.",
        createdAt: today8601,
        updatedAt: today8601,
        footerDate
    };
};
