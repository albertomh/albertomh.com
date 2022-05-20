module.exports = function() {
    const today8601 = new Date().toISOString().slice(0, 10);

    return {
        title: "Alberto MH",
        blurb: "Alberto is a software engineer based in Bristol, UK.",
        createdAt: today8601,
        updatedAt: today8601
    };
};
