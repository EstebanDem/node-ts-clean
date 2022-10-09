import {EmployeeRepository} from "../../domain/repositories/EmployeeRepository";
import {Employee} from "../../domain/entities/Employee";

export class InMemoryEmployeeRepository implements EmployeeRepository {
  private employeesData: Employee[] = [];

  async deleteById(id: string | number): Promise<void> {
    this.employeesData = this.employeesData.filter(employee => employee.id !== id);
  }

  async getAll(): Promise<Employee[]> {
    return this.employeesData;
  }

  async getById(id: string | number): Promise<Employee | null> {
    const employeeFound = this.employeesData.find(employee => employee.id === id);

    return employeeFound
        ? employeeFound
        : null;
  }

  async getByUsername(username: String): Promise<Employee | null> {
    const employeeFound = this.employeesData.find(employee => employee.username === username);

    return employeeFound
        ? employeeFound
        : null;
  }

  async save(employee: Employee): Promise<Employee> {
    this.employeesData.push(employee);
    return employee;
  }

  async update(employeeUpdate: Employee): Promise<Employee> {
    const employees = this.employeesData.filter(e => e.id !== employeeUpdate.id);
    employees.push(employeeUpdate);
    this.employeesData = employees;
    return employeeUpdate
  }

}