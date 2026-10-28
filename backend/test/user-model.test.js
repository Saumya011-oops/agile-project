const test = require('node:test');
const assert = require('node:assert/strict');
const User = require('../models/User');

test('user schema requires the fields needed for registration', () => {
  const user = new User({});
  const error = user.validateSync();

  assert.ok(error);
  for (const field of ['name', 'email', 'mobilenumber', 'password']) {
    assert.ok(error.errors[field], `${field} should be required`);
  }
});

test('user schema accepts a complete user record without connecting to MongoDB', () => {
  const user = new User({
    name: 'Test User',
    email: 'test@example.com',
    mobilenumber: '9876543210',
    password: 'hashed-password',
  });

  assert.equal(user.validateSync(), undefined);
});
