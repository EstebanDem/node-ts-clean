import {EmployeeRepository} from "../../domain/repositories/EmployeeRepository";
import {EmployeeGetterById} from "../../domain/services/EmployeeGetterById";
import {Employee} from "../../domain/entities/Employee";

export class EmployeeDeleter {
  private readonly _employeeRepository: EmployeeRepository;
  private readonly _employeeGetterById: EmployeeGetterById;

  constructor(employeeRepository: EmployeeRepository) {
    this._employeeRepository = employeeRepository;
    this._employeeGetterById = new EmployeeGetterById(employeeRepository);
  }

  async run(id: string | number): Promise<Employee> {
    const employeeToDelete = await this._employeeGetterById.run(id);
    await this._employeeRepository.deleteById(id);

    return employeeToDelete
  }
}