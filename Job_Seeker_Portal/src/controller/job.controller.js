import JobModel from "../model/job.model.js";
export default class JobController{

    getJob(req,res){
        console.log("Inside getJob");
        const jobs= JobModel.getAll();
        console.log(jobs);
        res.render("job",{jobs})
    }
    getjobform(req,res){
        res.render("addjob")
    }
    getaddNewJob(req,res){


        console.log('inside addNewProduct');            
        console.log(req.body); 
        const {category,designation,location,companyName,salary,positions,skills,applyBy}=req.body;      
        JobModel.add(category,designation,location,companyName,salary,positions,skills,applyBy);
        let jobs = JobModel.getAll();
       // console.log("Alljob:",jobs);
        return res.render('job',{jobs});



    }
    postUpdate(req, res) {
        const jobObj = req.body;
        if (!jobObj.id) {
            return res.render("update-job", { errormessage: "Job ID is missing", ...jobObj });
        }
        const updateSuccess = JobModel.update(jobObj);
        
        if (updateSuccess) {
            return res.render("update-job", { successmessage: "Job updated successfully", ...jobObj });
        } else {
            return res.render("update-job", { errormessage: "Failed to update job", ...jobObj });
        }
    }
    getUpdateForm(req, res) {
        const jobId = req.params.id;
        
       
        const job = JobModel.getByID(jobId); 
        console.log(job);
    
        if (job) {
            return res.render("update-job", { job });
        } else {
            return res.render("update-job", { errormessage: "Job not found" });
        }
    }
    
    
    
    


}