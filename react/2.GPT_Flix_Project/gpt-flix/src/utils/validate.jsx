const checkValidData = ({ email, password, name }) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email,
  );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password,
    );
  const isNameValid = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/.test(name); // signIn => name will be undefined, then here undefined will convert to "undefined" that is match. so isNameValid will be true. if(!isNameValid) OR if(!true) === false so, it will not enter if block and won,t show "Name is not valid".

  if (!isNameValid) return "Name is not valid";
  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};

export { checkValidData };
