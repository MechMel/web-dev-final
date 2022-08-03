// Sets up dynamic input styling
const inputIds = [`name`, `email`, `message`];

// When an input is focused or filled in, its border should be white
for (let i in inputIds) {
  const input = document.getElementById(inputIds[i]);
  if (input === null) {
    console.warn(`${inputIds[i]} is null!`);
  } else {
    input.addEventListener("change", (event) => {
      if (
        document.activeElement === input ||
        (input.value !== null &&
          input.value !== undefined &&
          input.value !== ``)
      ) {
        input.style.outline = `0.1rem solid var(--text-color-primary)`;
      } else {
        input.style.outline = `0.1rem solid var(--text-color-blank)`;
      }
    });
  }
}
