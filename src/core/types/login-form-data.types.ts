type LoginForm = {
  mail : {
    value: string,
    errorLabel: string | undefined,
    isDirty: boolean,
  },
  password : {
    value: string,
    errorLabel: string | undefined,
    isDirty: boolean,
  }
}
export default LoginForm;
