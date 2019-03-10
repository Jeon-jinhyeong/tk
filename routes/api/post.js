const rootPath = "../..";
const lang = require(`${rootPath}/lib/lang/ko.json`);

const router = require('express').Router();

// Models
const { Post } = require(`${rootPath}/models`);

// 게시물 등록 처리
router.post("/", async (req, res) => {
  const {title, body} = req.body;
  
  await Post.create({
    title,
    body: body,
    userId: req.session.passport.user,
  });
  res.redirect("/post");
 });

 // 게시물 수정 처리
router.put("/:id", async (req, res) => {
  req.body.updatedAt = Date.now();
 
  await Post.findOneAndUpdate({_id: req.params.id}, req.body);
  
  res.redirect("/post/" + req.params.id);
});
 
// 게시물 삭제 처리
router.delete("/:id", async (req, res) => {
  await Post.remove({_id: req.params.id});

  res.redirect("/post");
});

module.exports = router;