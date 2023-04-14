export const answer = (question) => {
    let questionCopy = question.replace('?', '').split(' ');
    questionCopy = questionCopy.filter(
        (element) =>
            Number(element) ||
            element === 'plus' ||
            element === 'minus' ||
            element === 'multiplied' ||
            element === 'divided'
    );
    const unknownOp =
        (questionCopy.length === 1 &&
            !Number(question.replace('?', '').split(' ')[
                question.replace('?', '').split(' ').length - 1
            ])) ||
        (questionCopy.length === 0 && !question.startsWith('What'));
    const syntaxError =
        !Number(questionCopy[0]) ||
        !Number(questionCopy[questionCopy.length - 1]) ||
        questionCopy.length % 2 === 0;
    if (unknownOp) {
        throw new Error('Unknown operation');
    }
    if (syntaxError) {
        throw new Error('Syntax error');
    }
    if (questionCopy.length === 1) {
        return Number(questionCopy[0]);
    }
    let initial = Number(questionCopy[0]);
    questionCopy.forEach((element, i) => {
        if (!Number(element)) {
            if (element === 'plus') {
                initial += Number(questionCopy[i + 1]);
            }
            if (element === 'minus') {
                initial -= Number(questionCopy[i + 1]);
            }
            if (element === 'multiplied') {
                initial *= Number(questionCopy[i + 1]);
            }
            if (element === 'divided') {
                initial /= Number(questionCopy[i + 1]);
            }
        }
    });
    return initial;
};