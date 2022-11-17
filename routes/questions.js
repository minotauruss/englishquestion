const express = require("express")
const Post = require("../model/question.js")



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
    
    const postservices = new Post({
        soru: req.body.soru,
      cevap:req.body.cevap,
        correctcevap:req.body.correctcevap
       
    });
   if(req.body.correctcevap != null){
    postservices.save();
    res.send("yeni post yaratıldı")
   }else{
    res.send("cevap yok")
   }
  
 });
 
 
 router.put("/:id",(req,res)=>{
    Post.findByIdAndUpdate(req.params.id, {
        soru: String,
        bircevap: String,
        ikicevap: String,
        uccevap: String,
        correctcevap:String
        
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