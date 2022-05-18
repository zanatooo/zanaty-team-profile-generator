const Intern=require ("../Lib/Intern")

test("Test Intern Name", function(){
    const newHire = new Intern("Erik",222,"email@test.com","schoolName")
    expect(newHire.name).toBe("Erik")
})
test("Test Intern Id", function(){
    const newHire = new Intern("Erik",222,"email@test.com","UCLA")
    expect(newHire.id).toBe(222)
})
test("Test Intern Email", function(){
    const newHire = new Intern("Erik",222,"email@test.com","UCLA")
    expect(newHire.email).toBe("email@test.com")
})

test("Test Intern getName", function(){
    const newHire = new Intern("Erik",222,"email@test.com","UCLA")
    expect(newHire.getName()).toBe("Erik")
})
test("Test Intern getId", function(){
    const newHire = new Intern("Erik",222,"email@test.com","UCLA")
    expect(newHire.getId()).toBe(222)
})
test("Test Intern getEmail", function(){
    const newHire = new Intern("Erik",222,"email@test.com","UCLA")
    expect(newHire.getEmail()).toBe("email@test.com")
})
test("Test Intern getschoolName", function(){
    const newHire = new Intern("Erik",222,"email@test.com","UCLA")
    expect(newHire.getschoolName()).toBe("UCLA")
})