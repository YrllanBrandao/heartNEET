export const getPlayerName =()=>{
    const user = localStorage.getItem("user")
    if(user === null)
    {
        return "Adams Robot";
    }
    return user;
}