const Employee=require ("../Lib/Employee")

test("Test Employee Name", function(){
    const newHire = new Employee("Erik",222,"email@test.com")
    expect(newHire.name).toBe("Erik")
})
test("Test Employee Id", function(){
    const newHire = new Employee("Erik",222,"email@test.com")
    expect(newHire.id).toBe(222)
})
test("Test Employee Email", function(){
    const newHire = new Employee("Erik",222,"email@test.com")
    expect(newHire.email).toBe("email@test.com")
})

test("Test Employee getName", function(){
    const newHire = new Employee("Erik",222,"email@test.com")
    expect(newHire.getName()).toBe("Erik")
})
test("Test Employee getId", function(){
    const newHire = new Employee("Erik",222,"email@test.com")
    expect(newHire.getId()).toBe(222)
})
test("Test Employee getEmail", function(){
    const newHire = new Employee("Erik",222,"email@test.com")
    expect(newHire.getEmail()).toBe("email@test.com")
})