import mongoose, { Schema, Model } from "mongoose";
import jmt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const usersSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        index: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },
    fullName: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    avatar: {
        type: String,
        required: true, // cloudinary url

    },
    coverImage: {
        type: String // cloudinary url

    },
    password: {
        type: String,
        required: [true, 'Password required'],

    },
    refreshToken:
    {
        type: String
    }



}, {
    timestamps: true
})





usersSchema.pre('save', async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});


usersSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

usersSchema.methods.generateAccessToken = function ()  {
    return jmt({
        _id: this._id,
        username: this.username,
        email: this.email,
        fullName: this.fullName
    },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}


usersSchema.methods.generateRefreshToken = function ()
{
    return jmt.sign({
        _id:this._id
    },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
)
}


export const Users = mongoose.model('Users', usersSchema)