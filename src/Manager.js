class Manager {
  constructor(customers) {
    this.customers = customers;

  }

  searchCustomerByName(input) {
    input = input.toLowerCase();
    return this.customers.filter(customer => {
      if (customer.name.toLowerCase().includes(input)) {
        return customer;
      }
    })
  }
// do I want the object returned or an array?

}

export default Manager;
