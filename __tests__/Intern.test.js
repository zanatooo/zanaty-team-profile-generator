const Intern = require("../lib/Intern");

test("Ability to set school using constructor function", () => {
    const school = "UCLA";
    const employee = new Intern("Mohammed", 1, "m.elzanaty@gmail.com", school);
    expect(employee.school).toBe(school);
  });

  test("getRole() should return Intern as a role", () => {
    const role = "Intern";
    const employee = new Intern("Mohammed", 1, "m.elzanaty@gmail.com", "zanatooo");
    expect(employee.getRole()).toBe(role);
  });