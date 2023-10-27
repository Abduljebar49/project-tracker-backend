import { Users } from "../db.js"


export const getUsers = (req, res, next) => {
    res.send(Users);
}

export const getUser = (req, res, next) => {
    const { id } = req.params;
    const user = Users.find((ele: any) => ele.id == id)
    res.send(user);
}