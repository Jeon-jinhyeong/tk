const rootPath = "..";
const router = require('express').Router();

const loginChecker = require(`${rootPath}/lib/loginChecker`);
const { Xlsx } = require(`${rootPath}/models`);


// 게시물 리스트 - /post
router.get("/", loginChecker.isLoggedIn, async (req, res) => {
    const posts = await Xlsx.findAll({ where : { userId : req.session.passport.user } });
    res.render("post/index", { posts : posts });
});

// 게시물 등록 페이지 - /post/new
router.get("/new", (req, res) => {
    res.render("post/new");
});

// 게시물 상세 - /post/:id
router.get("/:id", async (req, res) => {
    const posts = await Xlsx.findOne({ where : { id : req.params.id } });
    res.render("post/show", { posts : posts });
});

// 게시물 수정 페이지 - /post/:id/edit
router.get("/:id/edit", async (req, res) => {
    const posts = await Xlsx.findOne({ where : { id : req.params.id } });
    res.render("post/edit", { posts : posts });
});



module.exports = router;