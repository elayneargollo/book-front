function RegistrationFieldsValidation(username, password, role)
{
  if(username === "" && password === "" && role === "")
  {
    return "All fields are mandatory";
  }else if(username === ""){
    return "Username is required";
  }
  else if(password === "")
  {
    return "Password is required";
  } 
  else if(role === "")
  {
    return "Role is required";
  } 
}

module.exports = {
  RegistrationFieldsValidation: RegistrationFieldsValidation,
};