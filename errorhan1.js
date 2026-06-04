const login = async () => {
    try {
        const response = await Promise.resolve("Login Successful");

        console.log(response);
    } catch (error) {
        console.log("Login Failed");
    }
};

module.exports = login;