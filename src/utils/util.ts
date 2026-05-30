export const validateDetails = (email:string, password:string, name?:string)=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
    const nameRegex = /^[a-zA-Z\s]+$/;
    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = passwordRegex.test(password);
    const isNameValid = name ? nameRegex.test(name) : true;
    if(!isEmailValid){
        return "Please check email format";
    }
    if(!isPasswordValid){
        return "Please check password format";
    }
    if(!isNameValid){
        return "Please check name format";
    }
    return null;
}