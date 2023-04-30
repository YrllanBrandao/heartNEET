export function saveUser(name, lastName)
{   
    const nickName = `${name} ${lastName}`;
    localStorage.setItem("user", nickName);
    return;
}