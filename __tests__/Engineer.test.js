const Engineer=require ("../Lib/Engineer")

test("Test Engineer Name", function(){
    const newHire = new Engineer("Erik",222,"email@test.com","zanatooo")
    expect(newHire.name).toBe("Erik")
})
test("Test Engineer Id", function(){
    const newHire = new Engineer("Erik",222,"email@test.com","zanatooo")
    expect(newHire.id).toBe(222)
})
test("Test Engineer Email", function(){
    const newHire = new Engineer("Erik",222,"email@test.com","zanatooo")
    expect(newHire.email).toBe("email@test.com")
})

test("Test Engineer getName", function(){
    const newHire = new Engineer("Erik",222,"email@test.com","zanatooo")
    expect(newHire.getName()).toBe("Erik")
})
test("Test Engineer getId", function(){
    const newHire = new Engineer("Erik",222,"email@test.com","zanatooo")
    expect(newHire.getId()).toBe(222)
})
test("Test Engineer getEmail", function(){
    const newHire = new Engineer("Erik",222,"email@test.com","zanatooo")
    expect(newHire.getEmail()).toBe("email@test.com")
})
test("Test Engineer getgitHub", function(){
    const newHire = new Engineer("Erik",222,"email@test.com","zanatooo")
    expect(newHire.getgitHub()).toBe("zanatooo")
})

