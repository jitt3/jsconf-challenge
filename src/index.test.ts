import { sortByWeight } from "./index";
import { expect } from 'chai';
import 'mocha';

describe("JSConf Challenge", () => {

  let input: string;
  let expectedOutput: string;
  let result: string;

  it("should sort properly by weight", () => {
      input = "56 65 74 100 99 68 86 180 90";
      
      expectedOutput = "100 180 90 56 65 74 68 86 99";
  
      const result = sortByWeight(input);
  
      expect(result).to.equal(expectedOutput);
    }
  );

  it("should sort by string when two numbers have the same weight", () => {
      input = "90 180";
      
      expectedOutput = "180 90";
  
      result = sortByWeight(input);
  
      expect(result).to.equal(expectedOutput);
    }
  );

  it('should work with an empty string', () => {
    input = '';
    expectedOutput = '';

    result = sortByWeight(input);

    expect(result).to.equal(expectedOutput);

  });

});
