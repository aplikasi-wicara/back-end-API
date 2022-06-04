import Article from "../models/article.js";

export const findArticle = async(req, res)=>{
    try {
        const articles  = await Article.findAll()
        res.json(articles)
    }catch(err){
        res.json({message: err})
    };
};

export default findArticle

