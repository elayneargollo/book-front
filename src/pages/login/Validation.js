function ValidationLoginFields(username, password)
{
  if(username === "" && password === "")
  {
    return "All fields are mandatory";
  }else if(username === ""){
    return "Username is required";
  }
  else if(password === "")
  {
    return "Password is required";
  } 
}

module.exports = { 
  ValidationLoginFields: ValidationLoginFields,
};