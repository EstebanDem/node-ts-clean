import {EmployeeRepository} from "../repositories/EmployeeRepository";
import {Employee} from "../entities/Employee";
import {EmployeeNotFoundException} from "../exceptions/EmployeeNotFoundException";

export class EmployeeGetterById {
  private readonly _employeeRepository: EmployeeRepository;

  constructor(employeeRepository: EmployeeRepository) {
    this._employeeRepository = employeeRepository;
  }

  async run(id: string | number): Promise<Employee> {
    const employee = await this._employeeRepository.getById(id);

    if (employee) {
      return employee;
    }

    throw new EmployeeNotFoundException();
  }
}
