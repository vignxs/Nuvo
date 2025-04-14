export function getProductsByType(type: string) {
    const defaultProducts = [
      {
        id: 1,
        name: "Guppy Fish",
        price: "$24.99",
        image: "/Category/guppy.jpg?height=200&width=200",
      },
      {
        id: 2,
        name: "Red Dotted Molly",
        price: "$19.99",
        image: "/Category/molly.jpg?height=200&width=200",
      },
      {
        id: 3,
        name: "Fighter Fish",
        price: "$29.99",
        image: "/Category/betta.jpg?height=200&width=200",
      },
    ];
  
    switch (type) {
      case "fish":
        return defaultProducts;
      case "bird":
        return defaultProducts; // replace with bird data if you have
      default:
        return defaultProducts;
    }
  }
  
  