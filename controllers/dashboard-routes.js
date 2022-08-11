const router = require("express").Router();
const { User, Character } = require("../models");

router.get("/", (req, res) => {
	Character.findAll({
		// where: {
		// 	user_id: req.session.user_id,
		// },
		attributes: [
			"id",
			"name",
			"race",
			"class",
			"alignment",
			"age",
			"height",
			"level",
		],
		include: [
			{
				model: User,
				attributes: ["username"],
			},
		],
	})
		.then((dbCharacterData) => {
			const characters = dbCharacterData.map((character) =>
				character.get({ plain: true })
			);
			res.render("dashboard", { characters, loggedIn: true });
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.get("/edit/:id", (req, res) => {
	Character.findOne({
		where: {
			id: req.params.id,
		},
		attributes: [
			"id",
			"name",
			"race",
			"class",
			"alignment",
			"age",
			"height",
			"level",
		],
		include: [
			{
				model: User,
				attributes: ["username"],
			},
		],
	}).then((dbCharacterData) => res.json(dbCharacterData));

	if (!dbCharacterData) {
		res.status(404).json({
			message: "No character found with this id",
		});
		return;
	}
	const post = dbCharacterData.get({
		plain: true,
	});

	res.render("edit-post", {
		post,
		loggedIn: true,
	});
});

router.get("/view-character", (req, res) => {
	res.render("single-character");
});

module.exports = router;
