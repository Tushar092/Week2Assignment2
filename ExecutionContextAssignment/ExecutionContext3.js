const checkout = {
  items: [],
  total: 0,

  addItem(item) {
    
    const price = Number(item.price);

    
    if (typeof item !== 'object' || !item.name || isNaN(price) || price < 0) {
      console.error("Invalid item or price.");
      return;
    }

    this.items.push({ name: item.name, price });
    this.total += price;
    console.log(`Added "${item.name}" for ${price.toFixed(2)}`);
  },

  getTotal() {
    return `Total: ${this.total.toFixed(2)}`;
  }
};


checkout.addItem({ name: "Coffee Maker", price: "99.95" });
checkout.addItem({ name: "Milk", price: 3.50 });
checkout.addItem({ name: "Invalid Item", price: "abc" });

console.log(checkout.getTotal());