const LocalStrategy = require("passport-local").Strategy
const bcrypt = require("bcrypt")

function initialize(passport){
    const authenticate = async (email,password,done)=>{
        const user = getuserByEmail(email)
        if (user==null)
        {
            return done(null,false, (message: "No user found with that email"));
        }
        try {
            
        } catch (error) {
            
        }
    }
}