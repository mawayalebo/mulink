const getSignIn = (req, res)=>{
    res.render('sign_in');
};

const getSignUp = (req, res)=>{
    res.render('sign_up');
};

const postSignUp = (req, res)=>{
    res.send('this is sign up');
};

const postSignIn = (req, res)=>{
    res.send('this is sign in');
};

module.exports = {
    getSignIn,
    getSignUp,
    postSignIn,
    postSignUp
};