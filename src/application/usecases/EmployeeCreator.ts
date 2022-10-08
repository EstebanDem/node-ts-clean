import {EmployeeRepository} from "../../domain/repositories/EmployeeRepository";
import {EmployeeExistsByUsername} from "../../domain/services/EmployeeExistsByUsername";
import {Employee} from "../../domain/entities/Employee";
import {EmployeeAlreadyExistsException} from "../../domain/exceptions/EmployeeAlreadyExistsException";

export class EmployeeCreator {
  private readonly _employeeRepository: EmployeeRepository;
  private readonly _employeeExistsByUserName: EmployeeExistsByUsername;

  constructor(employeeRepository: EmployeeRepository) {
    this._employeeRepository = employeeRepository;
    this._employeeExistsByUserName = new EmployeeExistsByUsername(employeeRepository);
  }

  async run(newEmployee: Employee): Promise<Employee> {
    const employeeExists: Boolean = await this._employeeExistsByUserName.run(newEmployee.username);

    if (employeeExists) {
      throw new EmployeeAlreadyExistsException();
    }
    return await this._employeeRepository.save(newEmployee);
  }
}