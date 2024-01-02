export class ErrorHandler {

  static getErrorMessage(errorCode: string): string {
      switch (errorCode) {
        case 'auth/invalid-credential':
          return 'E-mail address or password is incorrect';
        default:
          return 'Some error happened';
      }
  }
}
