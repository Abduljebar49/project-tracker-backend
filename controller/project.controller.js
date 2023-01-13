const Project = require('../entity/project.entity');
const ProjectModel = require('../model/project.model');




const addProject = (req,res,next)=>{
    try{
        var body = req.body;
        if(!body){
            res.send({
                message:"body required",
                error:{}
            })
        }


    }catch(er){
        console.log("er : ",er);
        res.send(er);
    }
}