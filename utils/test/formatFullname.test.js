const formatFullname = require('../formatFullname');
const expect = require('chai').expect;

describe('FormatFullname', () => {
  it('should return proper formatting "formatFullname" for args', () => {
    expect(formatFullname('jOHN dOE')).to.equal('Error');
    expect(formatFullname('john doe')).to.equal('Error');
    expect(formatFullname('JOHN DOE')).to.equal('Error');
  });

  it('should return an error if "fullname" arg length is 0', () => {
    expect(formatFullname('')).to.equal('Error');
  });

  it('should return an error if "fullname" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(12)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function () {})).to.equal('Error');
  });

  it('should return an error if "fulname" has more or less than 2 args', () => {
    expect(formatFullname('John Doe Test')).to.equal('Error');
    expect(formatFullname('John')).to.equal('Error');
    expect(formatFullname('Doe')).to.equal('Error');
  });
});
