// Exercise 5: Total cost is ...
cartForParty = {
    wine: 7.56,
    cola: 4.50,
    chips: 5.49,
    beer: 3.98,
    nuts:2.99
}
function calculateTotalPrice(total) {
     total = 0;
    for (const y in cartForParty)
        total += cartForParty[y];
    console.log(`Total €${total.toFixed(2)}`);
}
calculateTotalPrice(cartForParty);