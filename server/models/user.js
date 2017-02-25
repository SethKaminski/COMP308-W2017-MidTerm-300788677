let mongoose = require('mongoose');
let schema = mongoose.Schema;
let passportLocalMongoose = require('passport-local-mongoose');

let userSchema = new schema({
    username: {
        type: String,
        trim: true,
        required: 'username is required'
    },
    email: {
        type: String,
        trim: true,
        required: 'email is required'
    },
    dislpayname: {
        type: String,
        trim: true,
        required: 'dislpayname is required'
    },
    created: {
        type: Date,
        default: Date.now
    },
    update: {
        type: Date,
        default: Date.now
    }
},
{
    collection: "users"
});

let options = ({
    missingPasswordError: "Wrong Password"
}); 

userSchema.plugin(passportLocalMongoose, options);

exports.User = mongoose.model('User', userSchema);