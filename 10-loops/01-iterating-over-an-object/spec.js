var expect = require('chai').expect;
var challenge = require('./challenge');
var _ = require('underscore');

var hasElements = function(collection, elements) {
  for (var j = 0; j < elements.length; j++) {
    var foundElem = false;
    for (var i = 0; i < collection.length; i++) {
      if (collection[i] == elements[j]) {
        foundElem = true;
        break;
      }
    }

    if (!foundElem) {
      return false;
    }
  }
  return true;
};


describe("getKeys", function() {
  it("should be defined", function() {
    expect(challenge.getKeys).to.exist;
  });

  it("should return an array of all the keys", function() {
    hash = {name: "Rob", age: 101};
    array = ["name", "age"];
    result = challenge.getKeys(hash);

    expect(result).to.include('name');
    expect(result).to.include('age');
  });

  it("should return an empty array when the object is empty", function() {
    expect(challenge.getKeys({})).to.eql([]);
  });
});

describe("getValues", function() {
  it("should be defined", function() {
    expect(challenge.getValues).to.exist;
  });

  it("should return an array of all the keys", function() {
    hash = {name: "Rob", age: 101};
    array = ["Rob", 101];
    result = challenge.getValues(hash);

    expect(result).to.include('Rob');
    expect(result).to.include(101);
  });

  it("should return an empty array when the object is empty", function() {
    expect(challenge.getValues({})).to.eql([]);
  });
});


describe("objectToArray", function() {
  it("should be defined", function() {
    expect(challenge.objectToArray).to.exist;
  });

  it("should convert a hash into an array of strings", function() {
    hash = { name: "Bob", age: 34 }
    array = [ "name is Bob", "age is 34" ]

    result = challenge.objectToArray(hash);
    expect(result).to.include("name is Bob");
    expect(result).to.include("age is 34");
  });

  it("returns array for longer hash", function() {
    hash = { name: "Joe", age: 34, sex: 'male' }
    array = [ "name is Joe", "age is 34", "sex is male" ]
    result = challenge.objectToArray(hash);
    expect(result).to.include("name is Joe");
    expect(result).to.include("age is 34");
    expect(result).to.include("sex is male");
  });

  it("returns an empty array when the hash is empty", function() {
    expect(challenge.objectToArray([])).to.eql([]);
  });
});

