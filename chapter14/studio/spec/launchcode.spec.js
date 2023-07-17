// launchcode.spec.js code:
const launchcode = require("../index.js");

describe("Testing launchcode", function () {
  it("checks organization", function () {
    let result = launchcode.organization;
    expect(result).toEqual("nonprofit");
  });

  it("checks executive director", function () {
    expect(launchcode.executiveDirector).toEqual("Jeff");
  });

  it("checks programs", function () {
    expect(launchcode.programsOffered).toContain("LC101");
    expect(launchcode.programsOffered).toContain("LaunchCode Women+");
    expect(launchcode.programsOffered).toContain("CodeCamp");
    expect(launchcode.programsOffered.length).toEqual(3);
  });

  it("returns 'Launch!' when passed a number that is ONLY divisible by 2", function () {
    expect(launchcode.launchOutput(2)).toEqual("Launch!");
  });

  it("returns 'Code!' when passed a number that is ONLY divisible by 3", function () {
    expect(launchcode.launchOutput(39)).toEqual("Code!");
  });

  it("returns 'Rocks!' when passed a number that is ONLY divisible by 5", function () {
    expect(launchcode.launchOutput(25)).toEqual("Rocks!");
  });

  it("returns 'LaunchCode!' when passed a number that is divisible by 2 & 3", function () {
    expect(launchcode.launchOutput(6)).toEqual("LaunchCode!");
  });

  // it("returns 'Code Rocks!' when passed a number that is divisible by 3 & 5", function () {
  //   expect(launchcode.launchOutput(15)).toEqual("Code Rocks!");
  // });

  // it("returns 'Launch Rocks! (CRASH!!!!)' when passed a number that is divisible by 2 & 5", function () {
  //   expect(launchcode.launchOutput(10)).toEqual("Launch Rocks! (CRASH!!!!)");
  // });

  // it("returns 'LaunchCode Rocks!' when passed a number that is divisible by 2, 3, & 5", function () {
  //   expect(launchcode.launchOutput(30)).toEqual("LaunchCode Rocks!");
  // });

  // it("returns Rutabagas! That doesn't work. when passed a number that is NOT divisible by 2, 3, or 5", function () {
  //   expect(launchcode.launchOutput(7)).toEqual("Rutabagas! That doesn't work.");
  // });
});
