const router = require('express').Router();
const {User, Character} = require('../../models');

//this will get one character
router.get('/', (req, res) => {
    Character.findAll({
        attributes: [
            'id',
            'name',
            'race',
            'class_name',
            'alignment',
            'age',
            'height',
            'level',
            'occupation',
            'picture'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbCharacterData => res.json(dbCharacterData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//this will get all characters
router.get('/:id', (req, res) => {
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
                attributes: ['username']
            }
        ]
    })
    .then(dbCharacterData => res.json(dbCharacterData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//this will create a character
router.post('/', (req, res) => {

        Character.create({
            name: req.body.name,
            picture: req.body.picture,
            age: req.body.age,
            height: req.body.height,
            weight: req.body.weight,
            race: req.body.race,
            alignment: req.body.alignment,
            class_name: req.body.class_name,
            level: req.body.level,
            hair: req.body.hair,
            eyes: req.body.eyes,
            str: req.body.str,
            dex: req.body.dex,
            con: req.body.con,
            wis: req.body.wis,
            int: req.body.int,
            char: req.body.char,
            relationships: req.body.relationships,
            background: req.body.background,
            personality_traits: req.body.personality_traits,
            ideals: req.body.ideals,
            flaws: req.body.flaws,

            user_id: req.session.user_id
        })
        .then(dbCharacterData =>{
            console.log(dbCharacterData);
            res.json(dbCharacterData)})
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    
});

//this will update a charater
router.put('/:id', (req, res) => {
    Character.update(
        {
            name: req.body.name,
            picture: req.body.picture,
            age: req.body.age,
            height: req.body.height,
            weight: req.body.weight,
            race: req.body.race,
            alignment: req.body.alignment,
            class_name: req.body.class_name,
            level: req.body.level,
            hair: req.body.hair,
            eyes: req.body.eyes,
            str: req.body.str,
            dex: req.body.dex,
            con: req.body.con,
            wis: req.body.wis,
            int: req.body.int,
            char: req.body.char,
            relationships: req.body.relationships,
            background: req.body.background,
            personality_traits: req.body.personality_traits,
            ideals: req.body.ideals,
            flaws: req.body.flaws
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbCharacterData => {
        if (!dbCharacterData) {
            res.status(404).json({message: 'No post found with that id!'});
            return;
        }
        res.json(dbCharacterData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//this deletes a character
router.delete('/:id', (req, res) => {
    Character.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbCharacterData => {
        if (!dbCharacterData) {
            res.status(404).json({message: 'No posts were found with this id!'});
            return;
        }
        res.json(dbCharacterData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;