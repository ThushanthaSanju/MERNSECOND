import PostMessage from '../models/postMeassage.js'

export const getPost =async (req, res)=>{
    try {
        const postMeassages = await PostMessage.find();

        console.log(postMeassages);

        res.status(200).json(PostMessage);
    } catch (error) {
        res.status(404).json({message : error.message});
    }
}

export const createPost = (req,res) => {
    const post = req.body;
    const newPost = new postMessage(post);
   try {
       await newPost.save();
       res.status(201).json(newPost);
   } catch (error) {
    res.status(409).json({message : error.message});
   }
}