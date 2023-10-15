//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

const guestList: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];

for (const person of guestList) {
    console.log(`Dear ${person}, I would like to invite you to a dinner at my place. It would be an honor to have you as our guest.`);
}