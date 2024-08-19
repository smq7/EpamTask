// object data provider for Our tests 
let dataProvider = {
    badUsername : "Vadym",
    badPassword : "Password",
    goodPassword : "secret_sauce",
    arrGoodUsername : ["standard_user","locked_out_user","problem_user","performance_glitch_user","error_user","visual_user"],
    getGoodUsername() {
        let randomNum =  Math.floor(Math.random() * 5);
        return this.arrGoodUsername[randomNum];
    }
};
module.exports = dataProvider;