import { usersUtil } from "../util/UtilUsers.js"



export const getuserControllers = async(req , res) =>
{
 try {
     let Usersdataget = await usersUtil.getAllUserFromDb()
     return res.status(200).json(Usersdataget)
 } catch (error) {
     return res.status(500).json({msg:'server error'})
 }
   

}