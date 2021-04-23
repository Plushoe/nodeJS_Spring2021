$.getJSON("https://api.coinlore.net/api/ticker/?id=90", (data) => {
    $('#bitcoin').append(data[0].price_usd);
});

