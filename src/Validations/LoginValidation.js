class LoginValidation

{
    validation(user, passWord)
    {
        if(this.checkEmpty(user) == true){
            return false
        }
        if(this.checkEmpty(passWord) == true){
            return false
        }
        return true
    }

    checkEmpty(text)
    {
        return text === null || text ===""? true:false;
    }

}

export default LoginValidation