const Manager=require ("../Lib/Manager")

test("Test Manager Name", function(){
    const newHire = new Manager("Erik",222,"email@test.com","schoolName","officeName")
    expect(newHire.name).toBe("Erik")
})
test("Test Manager Id", function(){
    const newHire = new Manager("Erik",222,"email@test.com","officeName")
    expect(newHire.id).toBe(222)
})
test("Test Manager Email", function(){
    const newHire = new Manager("Erik",222,"email@test.com","officeName")
    expect(newHire.email).toBe("email@test.com")
})

test("Test Manager getName", function(){
    const newHire = new Manager("Erik",222,"email@test.com","officeName")
    expect(newHire.getName()).toBe("Erik")
})
test("Test Manager getId", function(){
    const newHire = new Manager("Erik",222,"email@test.com","OfficeName")
    expect(newHire.getId()).toBe(222)
})
test("Test Manager getEmail", function(){
    const newHire = new Manager("Erik",222,"email@test.com","officeNam")
    expect(newHire.getEmail()).toBe("email@test.com")
})
test("Test Manager getschoolName", function(){
    const newHire = new Manager("Erik",222,"email@test.com","officeName")
    expect(newHire.getschoolName()).toBe("officeName")
})