import {Employee} from "../entities/Employee";

export interface EmployeeRepository {
  getAll: () => Promise<Employee[]>
  save: (employee: Employee) => Promise<Employee>
  getByUsername: (username: String) => Promise<Employee | null>
  getById: (id: string | number) => Promise<Employee | null>
  update: (employee: Employee) => Promise<Employee>
  deleteById: (id: string | number) => Promise<void>
}