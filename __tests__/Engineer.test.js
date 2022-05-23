const Engineer = require("../lib/Engineer");

test("Ability to set GitHub username using constructor function", () => {
    const github = "zanatooo";
    const employee = new Engineer("Mohammed", 1, "m.elzanaty@gmail.com", github);
    expect(employee.github).toBe(github);
  });

  test("getRole() should return Engineer as a role", () => {
    const role = "Engineer";
    const employee = new Engineer("Mohammed", 1, "m.elzanaty@gmail.com", "zanatooo");
    expect(employee.getRole()).toBe(role);
  });