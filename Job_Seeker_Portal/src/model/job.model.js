let jobs=[];
export default class JobModel{
    constructor(id,category,designation,location,companyName,salary,positions,skills,applyBy){
        this.id=id;
       this.category=category;
       this.designation=designation;
        this.location=location;
        this.companyName=companyName;
        this.salary=salary;
        this.positions=positions;
        
        this.skills=skills;
        this.applyBy=applyBy;

    }

    static getAll(){
        return jobs;
    }
    static add(category,designation,location,companyName,salary,positions,skills,applyBy){
        const newjob= new JobModel(
                    jobs.length+1,
                   category,
                    designation,
                    location,
                    companyName,
                    salary,
                    positions,
                    skills,
                    applyBy,
        
            

        )
        jobs.push(newjob);
        console.log(newjob);
        return newjob;
    }

    static getByID(id){
        return jobs.find((job)=>job.id==id);
    }

    static update(jobObj) {
        const index = jobs.findIndex((job) => job.id == jobObj.id);
        
        if (index !== -1) {
            jobs[index] = jobObj;
            return true; // Update successful
        } else {
            return false; // Job not found
        }
    }
    
    static delete(id){
        const index=jobs.findIndex((job)=>job.id==id);
        if (index === -1) {
            throw new Error('Job not found'); // Or handle this case appropriately
        }
        jobs.splice(index,1);
        jobs.forEach((job,index)=>{
            job.id=index+1;
        })
    }
}




