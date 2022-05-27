// Required packages
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const fileDirectory = path.resolve(__dirname, "output");
const filePath = path.join(fileDirectory, "index.html");

// Required module exports
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const renderHTML = require("./lib/GenerateHTML.js");
let html=""
// Employee array
let employeesArr = [];

// Questions array for all employees
const questions = [           
    {
        type: "input",
        name: "name",
        message: "What is the name of this employee?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the ID of this employee?"
    },
    {
        type: "input",
        name: "email",
        message: "What is this employee's email?"
    },
    {
        type: "list",
        name: "role",
        message: "What role does this employee have?",
        choices: ["Engineer", "Intern", "Manager"]
    }
    ]

    // Questions for manager role
    managerQuestions = [
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number? (Required)",
            validate: officeNumber => {
                if (officeNumber) {
                  return true;
                } else {
                  console.log("Please enter an office number!");
                  return false;
                }
              }
        }
    ]

    // Questions for engineer role
    engineerQuestions = [
        {
            type: "input",
            name: "github",
            message: "What is the engineer's Github Username? (Required)",
            validate: github => {
                if (github) {
                  return true;
                } else {
                  console.log("Please enter a GitHub username!");
                  return false;
                }
              }
        }
    ]

    // Questions for intern role
    internQuestions = [

        {
            type: "input",
            name: "school",
            message: "What school is the intern from? (Required)",
            validate: school => {
                if (school) {
                  return true;
                } else {
                  console.log("Please enter a school name!");
                  return false;
                }
              }
        }
    ]

    // Function to initialize the application
    const init = () => {
        if (fs.existsSync(filePath)) {
            inquirer.prompt({
                type: "confirm",
                message: "It looks like the index.html file in the 'output' folder already exists. Do you want to overwrite it?",
                name: "overwrite"
            }).then(async (response) => {
    
                let overwrite = response.overwrite;
                if (await overwrite === true) {
                    console.log("Please enter your team information:")
                    newEmployee()
                } else if (await overwrite === false) {
                    console.log("Your index.html file in the 'output' folder will not be overwritten. Please move the current index.html file to another folder before restarting.")
                }
            })
        } else {
            console.log("Welcome to the team profile generator. Please enter your team information below:")
            newEmployee()
        }
    };   

    // Function to create new employees
    const newEmployee = async () => {
        await inquirer.prompt(questions)
          .then((response) => {
            let name = response.name;
            let id = response.id;
            let email = response.email;
            let role = response.role;
            let officeNumber;
            let github;
            let school;

            if (role === "Engineer") {
            inquirer.prompt(engineerQuestions).then((response) =>{
                github = response.github;
                let employee = new Engineer(name, id, email, github);
                employeesArr.push(employee);
                addEmployee(employeesArr);
            html+= `<div class="card">
            <div class="card-body">
            <h1 class="bg-primary">Engineer</h1>
              <h3>Name: ${employee.name}</h3>
              <p>ID: ${employee.id}</p>
              <p>Email: ${employee.email}</p>
              <p>Github: ${employee.github}</p>
            </div>
          </div>`
                });
            }
            else if (role === "Manager") {
                inquirer.prompt(managerQuestions).then((response) =>{
                        officeNumber = response.officeNumber;
                        let employee = new Manager(name, id, email, officeNumber);
                        employeesArr.push(employee);
                        addEmployee(employeesArr);
                        html+=`<div class="card">
            <div class="card-body">
            <h1 class="bg-warning">Manager</h1>
              <h3>Name: ${employee.name}</h3>
              <p>ID: ${employee.id}</p>
              <p>Email: ${employee.email}</p>
              <p>OfficeNumber: ${employee.officeNumber}</p>
            </div>
          </div>`
                          
                    });
                }
            else if (role === "Intern") {
                inquirer.prompt(internQuestions).then((response) =>{
                        school = response.school;
                        let employee = new Intern(name, id, email, school);
                        employeesArr.push(employee);
                        addEmployee(employeesArr);
                        html+=`<div class="card">
                        <div class="card-body">
                        <h1 class="bg-warning">Intern</h1>
                          <h3>Name: ${employee.name}</h3>
                          <p>ID: ${employee.id}</p>
                          <p>Email: ${employee.email}</p>
                          <p>School: ${employee.school}</p>
                        </div>
                      </div>`
                    });
            }

        });    
    
    };

    // Function that asks if you would like to add an employee. This will keep coming up until you are finished. When you're finished and say no, it will generate the index.html file
    const addEmployee = async (array) => {
       await inquirer
        .prompt({
            type: "confirm",
            name: "addEmployee",
            message: "Would you like to add an employee? (Required)"

        }).then(async (response) => {
            var createEmployee = response.addEmployee;
            if (await createEmployee === true) {
                newEmployee();
            } 
            else if (await createEmployee === false) {
            // If the output directory does not exist, then it creates the output directory before creating the index.html file
            if (!fs.existsSync(fileDirectory)) {
                fs.mkdirSync(fileDirectory)
            }

            // calls the renderHTML function in the GenerateHTML.js file to create the index.html
            console.log(array)
            var filecontent = `<!doctype html>
            <html lang="en">
              <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>Bootstrap demo</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
              </head>
              <body>
                <h1>Profile Generator</h1>
                ${html}
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
              </body>
            </html>`
            fs.writeFileSync("output/index.html", filecontent, (err) => {
        
                if (err) {
                    return console.log(err);
                }
                
                // Success message
                console.log("Your index.html file has been created in the 'output' folder!");
            });

        }
    })
};
    // Function call to initialize app
    init();