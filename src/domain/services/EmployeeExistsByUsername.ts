import {EmployeeRepository} from "../repositories/EmployeeRepository";

export class EmployeeExistsByUsername {
  private readonly _employeeRepository: EmployeeRepository;

  constructor(employeeRepository: EmployeeRepository) {
    this._employeeRepository = employeeRepository;
  }

  async run(username: string): Promise<Boolean> {
    const employee = await this._employeeRepository.getByUsername(username);

    return employee !== null;
  }
}