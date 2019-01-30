const faker = require('faker');

const createFakeCategoriesProperties = () => ({
  property: faker.commerce.productAdjective(),
  units: faker.finance.currencyName(),
});
const fakeCategoriesProperties = [];
const desiredAmout = 50;
for (let i = 0; i < desiredAmout; i++) {
  fakeCategoriesProperties.push(createFakeCategoriesProperties());
}

exports.seed = (knex, Promise) => (
  knex('category_properties')
    .del()
    .then(() => knex('category_properties').insert(fakeCategoriesProperties))
);
