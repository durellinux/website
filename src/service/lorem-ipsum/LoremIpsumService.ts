import { LoremIpsum } from "lorem-ipsum";

export const loremIpsum = new LoremIpsum({
    sentencesPerParagraph: {
        max: 4,
        min: 4
    },
    wordsPerSentence: {
        max: 10,
        min: 10
    }
});