import {InMemoryEmployeeRepository} from "../../in-memory/InMemoryEmployeeRepository";
import {EmployeeCreator} from "../../../application/usecases/EmployeeCreator";
import {Employee} from "../../../domain/entities/Employee";
import {EmployeeGetter} from "../../../application/usecases/EmployeeGetter";
import {EmployeeUpdater} from "../../../application/usecases/EmployeeUpdater";
import {EmployeeUpdate} from "../../../domain/entities/EmployeeUpdate";
import {EmployeeDeleter} from "../../../application/usecases/EmployeeDeleter";

function printSeparator(text: string) {
  console.log(`- - - - - ${text} - - - - -`);
}

async function run() {

  const inMemoryEmployeeRepository = new InMemoryEmployeeRepository();

  const employeeGetterUseCase = new EmployeeGetter(inMemoryEmployeeRepository);
  console.log(await employeeGetterUseCase.run());

  // Add Employees
  printSeparator('Adding two employees');
  const employeeCreatorUseCase = new EmployeeCreator(inMemoryEmployeeRepository);

  const employeeOne: Employee = {
    id: "abc-xyz-1",
    name: "Esteban",
    username: "estebanjd",
    email: "esteban@gmail.com",
    age: 44
  };
  await employeeCreatorUseCase.run(employeeOne);

  const employeeTwo: Employee = {
    id: "abc-xyz-2",
    name: "Jose",
    username: "josed",
    email: "jose@gmail.com",
    age: 31
  };

  await employeeCreatorUseCase.run(employeeTwo);
  console.log(await employeeGetterUseCase.run());

  // Update an Employee
  printSeparator('Updating employee one');
  const employeeUpdaterUseCase = new EmployeeUpdater(inMemoryEmployeeRepository);
  const employeeOneUpdated: EmployeeUpdate = {
    id: "abc-xyz-1",
    username: "updatedUsername",
    age: 99
  };

  await employeeUpdaterUseCase.run(employeeOneUpdated);
  console.log(await employeeGetterUseCase.run());

  // Delete an Employee
  printSeparator('Deleting an employee');
  const employeeDeleterUserCase = new EmployeeDeleter(inMemoryEmployeeRepository);
  await employeeDeleterUserCase.run("abc-xyz-2");
  console.log(await employeeGetterUseCase.run());
}

run();
