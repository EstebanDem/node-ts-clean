import {EmployeeRepository} from "../../domain/repositories/EmployeeRepository";
import {EmployeeGetterById} from "../../domain/services/EmployeeGetterById";
import {EmployeeUpdate} from "../../domain/entities/EmployeeUpdate";
import {Employee} from "../../domain/entities/Employee";

export class EmployeeUpdater {
  private readonly _employeeRepository: EmployeeRepository;
  private readonly _employeeGetterById: EmployeeGetterById;

  constructor(employeeRepository: EmployeeRepository) {
    this._employeeRepository = employeeRepository;
    this._employeeGetterById = new EmployeeGetterById(employeeRepository)
  }

  async run(updatedEmployee: EmployeeUpdate): Promise<Employee> {
    const employee = await this._employeeGetterById.run(updatedEmployee.id);
    const employeeUpdated: Employee = {
      id: updatedEmployee.id,
      name: updatedEmployee.name ?? employee.name,
      username: updatedEmployee.username ?? employee.username,
      email: updatedEmployee.email ?? employee.email,
      age: updatedEmployee.age ?? employee.age
    };

    return await this._employeeRepository.update(employeeUpdated);
  }


}