const faker = require('faker');

const profiles = [...new Array(5)].map((i, idx) => ({
  id: idx === 0 ? '00ulthapbErVUwVJy4x6' : faker.random.alphaNumeric(20),
  avatarUrl: faker.image.avatar(),
  email: idx === 0 ? 'llama001@maildrop.cc"' : faker.internet.email(),
  user_name:
    idx === 0
      ? 'Test001 User'
      : `${faker.name.firstName()} ${faker.name.lastName()}`,
  status:'Single',
  address_1:'123 Mountain Drive',
  address_2:'Mbx 223',
  carType:'SUV',
  budget:123456,
  accommodation_type:'Whole house'
  
}));

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('profiles')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
      {
        id: "00ulthapbErVUwVJy4x6",
        email: "llama001@maildrop.cc",
        avatarUrl: faker.image.avatar(),
        user_name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        status: 'Single',
        address_1: '123 Mountain Drive',
        address_2: '70301, NewBraunfels, TX',
        carType: 'SUV',
        budget: 123456,
        accommodation_type: 'Single Room'
      },
      {
        id: "00ultwew80Onb2vOT4x6",
        email: "llama002@maildrop.cc",
        avatarUrl: faker.image.avatar(),
        user_name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        status: 'Single',
        address_1: '123 Mountain Drive',
        address_2: '70301, NewBraunfels, TX',
        carType: 'SUV',
        budget: 121212,
        accommodation_type: 'Single Room'
      },
      {
        id: "00ultx74kMUmEW8054x6",
        email: "llama003@maildrop.cc",
        avatarUrl: faker.image.avatar(),
        user_name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        status: 'Couple',
        address_1: '123 Mountain Drive',
        address_2: '70301, NewBraunfels, TX',
        carType: 'Compact',
        budget: 1212,
        accommodation_type: 'Single Room'
      },
      {
        id: "00ultwqjtqt4VCcS24x6",
        email: "llama004@maildrop.cc",
        avatarUrl: faker.image.avatar(),
        user_name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        status:'Couple',
        address_1: '123 Mountain Drive',
        address_2: '70301, NewBraunfels, TX',
        carType: 'Truck',
        budget: 200,
        accommodation_type: 'Single Floor'
      },
      {
        id: "00ultwz1n9ORpNFc04x6",
        email: "llama005@maildrop.cc",
        avatarUrl: faker.image.avatar(),
        user_name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        status: 'Single, 1 Child',
        address_1: '123 Mountain Drive',
        address_2:  '70301, NewBraunfels, TX',
        carType: 'Truck',
        budget: 20,
        accommodation_type: 'Single Floor'
      },
      {
        id: "00u13omswyZM1xVya4x7",
        email: "llama006@maildrop.cc",
        avatarUrl: faker.image.avatar(),
        user_name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        status: 'Single, 2 children',
        address_1: '123 Mountain Drive',
        address_2: '70301, NewBraunfels, TX',
        carType: 'Motorcycle',
        budget: 2000,
        accommodation_type: 'Single Floor'
      },
      {
        id: "00u13ol5x1kmKxVJU4x7",
        email: "llama007@maildrop.cc",
        avatarUrl: faker.image.avatar(),
        user_name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        status: 'Couple, 1 Child',
        address_1: '123 Mountain Drive',
        address_2: '70301, NewBraunfels, TX',
        carType: 'Sedan',
        budget: 2626,
        accommodation_type: 'Whole House'
      },
      {
        id: "00u13oned0U8XP8Mb4x7",
        email: "llama008@maildrop.cc",
        avatarUrl: faker.image.avatar(),
        user_name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        status: 'Couple, 2 Children',
        address_1: '123 Mountain Drive',
        address_2: '70301, NewBraunfels, TX',
        carType: 'Sedan',
        budget: 2555555,
        accommodation_type: 'Whole House'
      }]);
    });
};
