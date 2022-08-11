async function newCharacterHandler(event) {
	event.preventDefault();

	const name = document.querySelector('input[name="name"]').value;
	const picture = document.querySelector('textarea[name="picture"]').value;
	const age = document.querySelector('input[name="age"]').value;
    const height = document.querySelector('input[name="height"]').value;
	const weight = document.querySelector('input[name="weight"]').value;
	const race = document.querySelector('input[name="race"]').value;
	const alignment = document.querySelector('input[name="alignment"]').value;
    const class_name = document.querySelector('input[name="class_name"]').value;
	const level = document.querySelector('input[name="level"]').value;
	const occupation = document.querySelector('input[name="occupation"]').value;	
	const hair = document.querySelector('input[name="hair"]').value;
	const eyes = document.querySelector('input[name="eyes"]').value;
	const relationships = document.querySelector('input[name="relationships"]').value;
	const background = document.querySelector('input[name="background"]').value;
	const personality_traits = document.querySelector('input[name="personality"]').value;
	const ideals = document.querySelector('input[name="ideals"]').value;
	const flaws = document.querySelector('input[name="flaws"]').value;

	const response = await fetch(`/api/characters`, {
		method: "POST",
		body: JSON.stringify({
			name,
            picture,
            age,
            height,
            weight,
            race,
            alignment,
            class_name,
            level,
			occupation,
            hair,
            eyes,
            relationships,
            background,
            personality_traits,
            ideals,
            flaws,
			user_id
		}),
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (response.ok) {
		document.location.replace("/dashboard");
	} else {
		alert(response.statusText);
	}
}

document
	.querySelector(".addChar")
	.addEventListener("submit", newCharacterHandler);