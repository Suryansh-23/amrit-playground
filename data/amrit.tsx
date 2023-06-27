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

export const keywords: {
    कार्य: JSX.Element;
    माना: JSX.Element;
    अगर: JSX.Element;
    वरना: JSX.Element;
    लाभ: JSX.Element;
    जबतक: JSX.Element;
    सत्य: JSX.Element;
    असत्य: JSX.Element;
} = {
    कार्य: (
        <p>
            Also, called <code data-chip="code">karya</code>. Represents a function or a block of
            code.
        </p>
    ),
    माना: (
        <p>
            Also, called <code data-chip="code">let</code>.Used to assign a value to a variable.
        </p>
    ),
    अगर: (
        <p>
            Also, called <code data-chip="code">if</code>. Used to specify a conditional
            statement. Executes a block of code if the specified condition is
            सत्य.
        </p>
    ),
    वरना: (
        <p>
            Also, called <code data-chip="code">else</code>. Used in conjunction with अगर.
            Specifies an alternative block of code to execute if the condition
            in अगर is असत्य.
        </p>
    ),
    लाभ: (
        <p>
            Also, called <code data-chip="code">return</code>. Used to specify the return value
            of a function or a block of code.
        </p>
    ),
    जबतक: (
        <p>
            Also, called <code data-chip="code">while</code>. Specifies a loop that continues as
            long as the specified condition is सत्य. The loop will terminate
            once the condition becomes असत्य.
        </p>
    ),
    सत्य: (
        <p>
            Also, called <code data-chip="code">true</code>. Represents the value for सत्य.
        </p>
    ),
    असत्य: (
        <p>
            Also, called <code data-chip="code">false</code>. Represents the value for असत्य.
        </p>
    ),
};

export const builtins = {
    lambai: (
        <p>
            Similar to <code data-chip="code">len()</code> in Python. Returns the length of an
            array or a string.
        </p>
    ),
    print: (
        <p>
            Similar to <code data-chip="code">print()</code>in Python. Prints the specified value
            to the console.
        </p>
    ),
    pehla: <p>Returns the first element of an array.</p>,
    aakhri: <p>Returns the last element of an array.</p>,
    baaki: (
        <p>
            Returns a new array containing all elements except the first element
            of the specified array.
        </p>
    ),
    push: (
        <p>
            Adds one or more elements to the end of an array and returns the new
            length of the array.
        </p>
    ),
    pop: (
        <p>Removes the last element from an array and returns that element.</p>
    ),
};

export default amrit;
