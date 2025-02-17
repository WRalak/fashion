

export const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };
  
  export const generateUniqueId = () => {
    return Math.random().toString(36).substr(2, 9);
  };
  