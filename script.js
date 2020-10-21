// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
	const getRandomInt = max => {
		return Math.floor(Math.random() * max);
	};
	const generatePassword = () => {
		const alphabet = "abcdefghijklmnopqrstuvwxyz";
		const specialChars = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

		// Ask the user for input and assign selections to respective variables.
		// numChar will determine the endpoint for the while loop below
		const numChar = parseInt(
			prompt(
				"Input an integer value between 8-128 for the number of characters included in your password."
			)
		);

		let selectLow;
		let selectUp;
		let selectNum;
		let selectSpec;

		// Implement while loop to continually ask user for character selections until at least one type is selected.
		let active = true;
		while (active) {
			selectLow = confirm("Include lowercase characters?");
			selectUp = confirm("Include uppercase characters?");
			selectNum = confirm("Include numeric characters?");
			selectSpec = confirm("Include special characters?");

			if (selectLow || selectUp || selectNum || selectSpec) {
				active = false;
			} else {
				alert("Please select at least one character type.");
			}
		}

		// Create charTypes object that assigns a value to objects containing keys that specify the type of
		// character and whether the user selected that character to be used to generate a password
		const charTypes = {
			0: {
				category: "lowercase",
				active: selectLow,
			},
			1: {
				category: "uppercase",
				active: selectUp,
			},
			2: {
				category: "numeric",
				active: selectNum,
			},
			3: {
				category: "special",
				active: selectSpec,
			},
		};

		// Build password using while loop which begins by randomly selecting a character type based on the object above.
		// Cycles through conditionals which conditionally concatenate a random character to the password that corresponds
		// to the randomly selected category.
		let password = "";
		while (password.length < numChar) {
			const randCategory = getRandomInt(4);
			if (
				charTypes[randCategory].category == "lowercase" &&
				charTypes[randCategory].active
			) {
				const randLowLettIndex = getRandomInt(alphabet.length);
				password += alphabet[randLowLettIndex];
			} else if (
				charTypes[randCategory].category == "uppercase" &&
				charTypes[randCategory].active
			) {
				const randUpLettIndex = getRandomInt(alphabet.length);
				password += alphabet[randUpLettIndex].toUpperCase();
			} else if (
				charTypes[randCategory].category == "numeric" &&
				charTypes[randCategory].active
			) {
				const randNum = getRandomInt(10);
				password += randNum;
			} else if (
				charTypes[randCategory].category == "special" &&
				charTypes[randCategory].active
			) {
				const randSpecCharIndex = getRandomInt(specialChars.length);
				password += specialChars[randSpecCharIndex];
			}
		}

		return password;
	};

	var password = generatePassword();
	var passwordText = document.querySelector("#password");
	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
