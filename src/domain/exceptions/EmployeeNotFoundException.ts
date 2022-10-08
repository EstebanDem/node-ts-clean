export class EmployeeNotFoundException extends Error {
  constructor() {
    super('Employee not found');
  }
}