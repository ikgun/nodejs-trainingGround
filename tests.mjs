import assert from "assert";
import { getAge, getAgeGroup } from "./index.mjs";

describe("age calculator", () => {
  it("someone born 1972 is 50 2022", () => {
    // act
    const result = getAge(1972, 2022);

    // assert
    assert.equal(result, 50);
  });
  it("someone born 2021 is 1 2022", () => {
    // arrange
    // act
    const result = getAge(2021, 2022);

    // assert
    assert.equal(result, 1);
  });

  it("I am 27 years old in 2025", () => {
    const result = getAge(1998, 2025);
    assert.equal(result, 27);
  });
});

describe("age classifier", () => {
  it("0-3 years old should be a toddler", () => {
    // arrange
    // act
    const result = getAgeGroup(0);

    // assert
    assert.equal(result, "toddler");
  });
  it("4-12 years old should be a kid", () => {
    // arrange
    // act
    const result = getAgeGroup(4);

    // assert
    assert.equal(result, "kid");
  });
  it("13-19 years old should be a teenager", () => {
    // arrange
    // act
    const result = getAgeGroup(13);

    // assert
    assert.equal(result, "teenager");
  });
  it("20-39 years old should be a adult");
  it("above 39 years old ... you are just old");
});
