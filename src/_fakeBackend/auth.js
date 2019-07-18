import users from "./data/users";
export function checkAuth(requestParams, onSuccess, onError) {
    const user = users.find((user) => {
        return user.login === requestParams.login
    });
    if (!user) {
        onError({message: "User not found!"});
        return;
    }
    if (user.password === requestParams.password) {
        const result = {
            ...user
        };
        delete result.password;
        onSuccess(JSON.stringify(result));
        return
    }
    onError({message: "Wrong password! Try again."})
}