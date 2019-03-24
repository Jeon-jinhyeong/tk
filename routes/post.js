const rootPath = "..";
const lang = require(`${rootPath}/lib/lang/ko.json`);

const router = require('express').Router();

// Models
const {
	Post
} = require(`${rootPath}/models`);

// Lib - 
const loginChecker = require(`${rootPath}/lib/loginChecker`);

// 게시물 등록 페이지
router.get("/new", (req, res) => {
	res.render("post/new");
});

// 게시물 리스트 페이지
router.get("/", loginChecker.isLoggedIn, async (req, res) => {
	const posts = await Post.findAll({
		where: {
			userId: req.session.passport.user
		}
	});
	res.render("post/index", {
		posts: postsㄴ
	});
});

// 게시물 상세 페이지
router.get("/:id", async (req, res) => {
	const post = await Post.findOne({
		where: {
			id: req.params.id
		}
	});
	res.render("post/show", {
		post: post
	});
});

// 게시물 수정 페이지
router.get("/:id/edit", async (req, res) => {
	const post = await Post.findOne({
		where: {
			id: req.params.id
		}
	});
	res.render("post/edit", {
		post: post
	});
});

module.exports = router;