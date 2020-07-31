const expect = chai.expect;
import chai from 'chai';
import Customer from '../src/Customer.js';

describe('customer', () => {
  let customers;
  let customer;
  let customer2;
  beforeEach(function () {
    customers = [
      {
        "id": 1,
        "name": "Leatha Ullrich"
      },
      {
        "id": 2,
        "name": "Rocio Schuster"
      },
      {
        "id": 3,
        "name": "Kelvin Schiller"
      }
    ];
    customer = new Customer(customers[0]);
    customer2 = new Customer(customers[1]);
}) 

  it('should be a function', function () {
    expect(Customer).to.be.a('function');
  });

  it('should be an instance of customer', function () {
    expect(customer).to.be.an.instanceof(Customer);
  });

  it('should have a unique id', function () {
    expect(customer.id).to.equal(1);
  });

  it('should have a different unique id', function () {
    expect(customer2.id).to.equal(2);
  });

  it('should be able to have a name', function () {
    expect(customer.name).to.equal('Leatha Ullrich');
  });

  it('should be able to have a different name', function () {
    expect(customer2.name).to.equal("Rocio Schuster");
  });

  it('should have a list of bookings', function () {
    expect(customer.bookings).to.deep.equal([]);
  });

  it('should have property of total money spent', function () {
    expect(customer.totalAmountSpent).to.equal(0);
  });



})