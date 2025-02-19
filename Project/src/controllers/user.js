import { Users } from '../models/users.model.js'
import { uploadonCloudinary } from '../utils/cloudinary.js'



export const registerUser = async (req, res) => {
    const { fullName, email, userName, password } = req.body
    // console.log(fullName);
    

    if ([fullName, email, userName, password].some((filde) => filde?.trim() === '')) {
        return res.status(400).json({
            msg: "All fields are required"
        })
    }


    const existedUser = await Users.findOne({
        $or: [{ userName }, { email }]
    })

    if (existedUser) {
        return res.status(409).json({
            msg: "User with email or username already exists"
        })
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;

    let coverImageLocalPath;

    if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
        coverImageLocalPath = req.files.coverImage[0].path;
    }

    if (!avatarLocalPath) {
        return res.status(400).json({
            msg: "Avatar file is required"
        })
    }

    const coverimage = await uploadonCloudinary(coverImageLocalPath)


    try {
        avatar = await uploadonCloudinary(avatarLocalPath);
        if (!avatar?.url) {
            throw new Error("Invalid avatar upload");
        }
    } catch (error) {
        return res.status(500).json({ msg: "Error uploading avatar" });
    }


    const user = await Users.create({
        fullName,
        avatar: avatar.url,
        coverimage: coverimage.url || "",
        email,
        password,
        userName: userName.toLowerCase()
    })

    const createdUser = await Users.findById(user._id).select("-password -refreshToken")

    if (!createdUser) {

        return res.status(500).json({
            msg: "Something went wrong while registering the user"
        })
    }

    return res.status(200).json({
        data: createdUser,
        msg: "User registered Successfully"
    })

}

