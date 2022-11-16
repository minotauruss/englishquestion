const express = require("express")
const Post = require("../model/users.js")



const router = express.Router();

router.get("/",(req,res)=>{
    Post.find()
    .then((posts)=>{
        res.json(posts);
    })
    .catch((err)=>{
        res.json(err)
    });
   
});


router.get("/:id",(req,res)=>{
    Post.findById(req.params.id)
    .then((posts)=>{
        res.json(posts);
    })
    .catch((err)=>{
        res.json(err)
    });
 });


router.post("/",(req,res)=>{
    res.send("yeni post yaratıldı")
    const postservices = new Post({
        name:req.body.name,
        point: req.body.point
       
    });
    postservices.save();
  
 });
 
 
 router.put("/:id",(req,res)=>{
    Post.findByIdAndUpdate(req.params.id, {
        name:req.body.name,
        point: req.body.point
        
    })
    .then((posts)=>{
        res.json(posts);
    })
    .catch((err)=>{
        res.json(err)
    });
 });

 router.delete("/:id",(req,res)=>{
    Post.findByIdAndDelete(req.params.id)
    .then((posts)=>{
        res.json(posts);
    })
    .catch((err)=>{
        res.json(err)
    });
 });





module.exports= router;