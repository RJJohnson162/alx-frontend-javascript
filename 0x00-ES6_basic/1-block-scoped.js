export default function taskBlock(trueOrFalse) {
    let task = false; // Use 'let' here
    let task2 = true; // Use 'let' here

    if (trueOrFalse) {
        let task = true; // Use 'let' here
        let task2 = false; // Use 'let' here
    }

    return [task, task2];
}
