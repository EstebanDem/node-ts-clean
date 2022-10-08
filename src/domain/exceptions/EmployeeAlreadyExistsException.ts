export class EmployeeAlreadyExistsException extends Error {
  constructor() {
    super('Employee already exists');
  }

}