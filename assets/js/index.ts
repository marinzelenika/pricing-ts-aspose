import { filterData } from "./filter";

async function main() {
try {
const filteredData = await filterData();
filteredData.forEach((product) => {
const productName = product.productName;
const charges = product.charges;
const lowestCharge = product.lowestCharge;
//const pricingPlanName = product.pricingPlanNames;
console.log(product.displayOrder);
document.getElementById(
  "product-pricing-plans"
).innerHTML += `<h5>${productName}</h5><p>from ${lowestCharge}</p><p>${charges}</p>`;
});
} catch (error) {
console.error(error);
}
}

main();