import {Employee} from "../entities/Employee";
import {EmployeeUpdate} from "../entities/EmployeeUpdate";

export interface EmployeeRepository {
  getAll: () => Promise<Employee[]>
  save: (employee: Employee) => Promise<Employee>
  getByUsername: (username: String) => Promise<Employee | null>
  getById: (id: string | number) => Promise<Employee | null>
  update: (employeeUpdate: EmployeeUpdate) => Promise<Employee>
  deleteById: (id: string | number) => Promise<void>
}