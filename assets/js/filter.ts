import { fetchData } from "./api";

export async function filterData(): Promise<
  Array<{
    productName: string;
    charges: string;
    pricingPlanNames: string[];
    displayOrder: number[];
    lowestCharge: number;
  }>
> {
  try {
    const products = await fetchData().then((data) => {
      data.forEach((product) => {
        product.charges = product.charges.trim();
        const chargesArray = product.charges.split(" ").map(Number);
        product.lowestCharge = Math.min(...chargesArray);
      });
      return data;
    });
    return products;
  } catch (err) {
    console.error(err);
    return [];
  }
}
