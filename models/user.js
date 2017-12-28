const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

let userSchema = new Schema({
    username: {
      index: {unique: true},
      type: String,
      required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
      index: {unique: true},
        type: String,
        required: true,

    },
    userType: {
      type: Number,
      required: true,
      default: 1
    },
    confirmed: {
      type: Boolean,
      required: true,
      default: false
    },
    favorites: [Schema.Types.ObjectId],
    reviews: [Schema.Types.ObjectId],
    recipes: [Schema.Types.ObjectId]
});

//TODO use 'save' to update passwords, otherwise mongoose middleware will not be invoked

userSchema.pre('save', function(next) {

    let user = this;
    if (!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    })
};

let User = mongoose.model('User', userSchema);

module.exports = User;
