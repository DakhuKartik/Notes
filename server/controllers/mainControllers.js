exports.homepage = async(req,res)=>{
      const locals = {
            title: "NodeJs Notes",
            description:"Free NodeJS Notes app.",
      };
      res.render('index',locals);
}
exports.about = async(req,res)=>{
      const locals = {
            title: "about NodeJs Notes",
            description:"Free NodeJS Notes app.",
      };
      res.render('index',locals);
}