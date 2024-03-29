export class ErrorHandler {

  static getErrorMessage(errorCode: string): string {
      switch (errorCode) {
        case 'auth/invalid-credential':
          return 'E-mail address or password is incorrect';
        case 'auth/weak-password':
          return 'Password should be at least 6 characters';
        case 'auth/email-already-in-use':
          return 'E-mail address is already in use';
        default:
          return 'Some error happened';
      }
  }
}
