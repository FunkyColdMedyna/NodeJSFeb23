const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');

const UserSchema = new Schema ({ 
    userName: {
        type: String, 
        unique: true,
        required: true, 
        maxLength: 10
    },
    gender: {
        type: String,
        required: true, 
        enum: [
            'Male',
            'Female',
            'male',
            'female'
        ]        
    },
    age: {
        type: Number,
        required: true, 
        min: [0, 'age must be a postive number' ]
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: (email) => validator.isEmail(email)
    },
    password : {
        type: String,
        required: true,
        validate: (password) => validator.isStrongPassword(password)
    },
    firstName: {
        type: String, 
        requied: true,
        maxLength: 10
    },
    lastName: {
        type: String, 
        required: true,
        maxLength: 10
    }
}, {
    timestamps: true
})

UserSchema.pre('save', function(next) {
    this.userName = this.userName.trim()
    this.firstName = this.firstName.trim()
    this.lastName = this.lastName.trim()

    next()
})

UserSchema.post('post', function(next){
    this.gender = this.gender.toUpperCase()
})
module.exports = mongoose.model('User', UserSchema);