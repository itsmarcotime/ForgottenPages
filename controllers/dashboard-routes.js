const router = require("express").Router();
const { User, Character } = require("../models");

router.get("/", (req, res) => {
	Character.findAll({
		where: {
			user_id: req.session.user_id,
		},
		attributes: [
			"id",
			"name",
			"race",
			"class_name",
			"alignment",
			"age",
			"height",
			"occupation",
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

router.get("/characters/:id", (req, res) => {
	Character.findOne({
		where: {
			id: req.params.id,
		},
		attributes: [
			"id",
			"name",
            "picture",
            "age",
            "height",
            "weight",
            "race",
			"occupation",
            "alignment",
            "class_name",
            "level",
            "hair",
            "eyes",
            "str",
            "dex",
            "con",
            "wis",
            "int",
            "char",
            "relationships",
            "background",
            "personality_traits",
            "ideals",
            "flaws",
			
		],
		include: [
			{
				model: User,
				attributes: ["username"],
			},
		],
	})
		.then((dbCharacterData) => {
			if (!dbCharacterData) {
				res.status(404).json({ message: "No Character found with this id" });
				return;
			}

			// serialize the data
			const character = dbCharacterData.get({ plain: true });

			// pass data to template
			res.render("single-character", {
				character,
				loggedIn: req.session.loggedIn,
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.get("/characters/edit/:id", (req, res) => {
	Character.findOne({
		where: {
			id: req.params.id,
		},
		attributes: [
			"name",
            "picture",
            "age",
            "height",
            "weight",
            "race",
            "alignment",
            "class_name",
            "level",
			"occupation",
            "hair",
            "eyes",
            "str",
            "dex",
            "con",
            "wis",
            "int",
            "char",
            "relationships",
            "background",
            "personality_traits",
            "ideals",
            "flaws",
		],
		include: [
			{
				model: User,
				attributes: ["username"],
			},
		],
	}).then((dbCharacterData) => {
		if (!dbCharacterData) {
			res.status(404).json({ message: "No Character found with this id" });
			return;
		}

		// serialize the data
		const character = dbCharacterData.get({ plain: true });

		// pass data to template
		res.render("edit-Character", {
			character,
			loggedIn: true,
		});
	})
	.catch((err) => {
		console.log(err);
		res.status(500).json(err);
	});
})

	
module.exports = router;
