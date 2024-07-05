export default (price: number) => 
  {
    const numStr = price.toString();
    const lastThree = numStr.slice(-3);
    const otherNumbers = numStr.slice(0, -3);
    const result = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
    const formattedPrice = otherNumbers ? '₹' + result + ',' + lastThree : '₹' + lastThree;
    return formattedPrice;
  };
