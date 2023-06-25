const amrit = {
    keyword: [
        // write an array of regexes to match the following keywords - karya, mana, satya, asatya, agar, varna, labh, jabtak, कार्य, माना, सत्य, असत्य, अगर, वरना, लाभ, जबतक
        /कार्य/,
        /माना/,
        /अगर/,
        /वरना/,
        /लाभ/,
        /जबतक/,
        /karya/,
        /mana/,
        /agar/,
        /varna/,
        /labh/,
        /jabtak/,
    ],
    builtin: [/lambai/, /print/, /pehla/, /aakhri/, /baaki/, /push/, /pop/],
    property: {
        pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
        lookbehind: true,
        greedy: true,
    },
    comment: {
        pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
        greedy: true,
    },
    function: {
        pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*\()/,
    },
    boolean: [/asatya/, /satya/, /असत्य/, /सत्य/],
    number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    punctuation: /[{}[\],|]/,
    operator: /[+\-*/%=&<>^]+/,
    string: {
        pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
        lookbehind: true,
        greedy: true,
    },
};

export default amrit;
