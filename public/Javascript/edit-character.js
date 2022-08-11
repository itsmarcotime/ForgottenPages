async function editFormHandler(event) {
	event.preventDefault();

	const name = document.querySelector('input[name="name"]').value.trim();
	const picture = document.querySelector('textarea[name="picture"]').value.trim();
	const age = document.querySelector('input[name="age"]').value.trim();
    const height = document.querySelector('input[name="height"]').value.trim();
	const weight = document.querySelector('input[name="weight"]').value.trim();
	const race = document.querySelector('input[name="race"]').value.trim();
	const alignment = document.querySelector('input[name="alignment"]').value.trim();
    const class_name = document.querySelector('input[name="class_name"]').value.trim();
	const level = document.querySelector('input[name="level"]').value.trim();
	const occupation = document.querySelector('input[name="occupation"]').value;	
	const hair = document.querySelector('input[name="hair"]').value.trim();
	const eyes = document.querySelector('input[name="eyes"]').value.trim();
	const relationships = document.querySelector('input[name="relationships"]').value.trim();
	const background = document.querySelector('input[name="background"]').value.trim();
	const personality_traits = document.querySelector('input[name="personality"]').value.trim();
	const ideals = document.querySelector('input[name="ideals"]').value.trim();
	const flaws = document.querySelector('input[name="flaws"]').value.trim();
	const id = window.location.toString().split("/")[
		window.location.toString().split("/").length - 1
	];
	const response = await fetch(`/api/posts/${id}`, {
		method: "PUT",
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
            hair,
            eyes,
			occupation,
            relationships,
            background,
            personality_traits,
            ideals,
            flaws,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	});
	if (response.ok) {
		document.location.replace("/dashboard");
		console.log(response);
	} else {
		alert(response.statusText);
	}
}

document
	.querySelector(".edit-post-form")
	.addEventListener("submit", editFormHandler);
