import {EmployeeRepository} from "../../domain/repositories/EmployeeRepository";
import {Employee} from "../../domain/entities/Employee";

export class EmployeeGetter {
  private readonly _employeeRepository: EmployeeRepository;

  constructor(employeeRepository: EmployeeRepository) {
    this._employeeRepository = employeeRepository;
  }

  async run(): Promise<Employee[]> {
    return this._employeeRepository.getAll();
  }

}