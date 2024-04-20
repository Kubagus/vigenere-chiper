function isLetter(char) {
	return /[A-Z]/.test(char);
}

function encrypt() {
	const plaintext = document.getElementById("plaintext").value.toUpperCase();
	const key = document.getElementById("key").value.toUpperCase();
	let ciphertext = "";
	for (let i = 0, j = 0; i < plaintext.length; i++) {
		let plainChar = plaintext.charCodeAt(i);
		if (isLetter(plaintext[i])) {
			let keyChar = key.charCodeAt(j % key.length);
			ciphertext += String.fromCharCode(
				((plainChar - 65 + keyChar - 65) % 26) + 65
			);
			j++;
		} else {
			ciphertext += plaintext[i];
		}
	}
	document.getElementById("ciphertext").value = ciphertext;
}

function decrypt() {
	const ciphertext = document.getElementById("ciphertext").value.toUpperCase();
	const key = document.getElementById("key").value.toUpperCase();
	let plaintext = "";
	for (let i = 0, j = 0; i < ciphertext.length; i++) {
		let cipherChar = ciphertext.charCodeAt(i);
		if (isLetter(ciphertext[i])) {
			let keyChar = key.charCodeAt(j % key.length);
			plaintext += String.fromCharCode(
				((cipherChar - 65 - (keyChar - 65) + 26) % 26) + 65
			);
			j++;
		} else {
			plaintext += ciphertext[i];
		}
	}
	document.getElementById("plaintext1").value = plaintext;
}

function clearFields() {
	document.getElementById("plaintext").value = "";
	document.getElementById("plaintext1").value = "";
	document.getElementById("ciphertext").value = "";
	document.getElementById("key").value = "";
}
