export function calculateDiscountedPrice(price, discount) {
  let finalPrice = price - (price * discount) / 100;
  let formattedPrice = finalPrice.toFixed(2);
  return `${formattedPrice}₼`;
}
