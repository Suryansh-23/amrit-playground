export type Programs = {
    [key: string]: string;
};

export const Programs = {
    "Hello World": `// yeh ek comment hai
// a fn for printing hello world
माना प्रिन्ट_नमस्ते = कार्य () {
    माना संदेश = "नमस्ते, दुनिया!"|  // strings!
    
    // a print statement
    print(संदेश)|
}

प्रिन्ट_नमस्ते()|    // calling a fn
`,
    Functions: `// a fn for adding two numbers
माना जोड़ = कार्य (अंक1, अंक2) {
    // addition with implicit return 
    अंक1 + अंक2|    
}

माना परिणाम = जोड़(5, 3)| // calling a fn
print(परिणाम)|`,
    "Control Flow": `// a fn for checking if a number is even
माना ईविन_है = कार्य (अंक) {
    // an if-conditional statement
    अगर (अंक % 2 == 0) {
        // you can also return values wihout using लाभ
        सत्य|
    } वरना { // else
        असत्य|
    }
}

// a fn for printing even numbers
माना ईविन_दो = कार्य (अंक) {
    माना ई = 0|
    माना ईविन = []|    // an empty list

    // a while loop for finding even numbers
    जबतक (ई <= अंक) {
        अगर (ईविन_है(ई)) {
            ईविन = push(ईविन, ई)|   // pushing to a list
        }
        ई = ई + 1|
    }

    ईविन|
}

print(ईविन_दो(20))|
`,

    Fibonacci: `// a fn for calculating the nth fibonacci number
माना फिब = कार्य (न) {
    अगर (न < 2) {
        न|
    } वरना {
        फिब(न - 1) + फिब(न - 2)|
    }
}

print(फिब(8))|
`,

    FizzBuzz: `// a fn for fizzbuzz
माना फिज़्ज़_बज़्ज़ = कार्य (अंक) {
    अगर (अंक % 3 == 0 && अंक % 5 == 0) {
        "फिज़्ज़-बज़्ज़"|
} अगर (अंक % 3 == 0) {
        "फिज़्ज़"|
    } अगर (अंक % 5 == 0) {
        "बज़्ज़"|
    } वरना {
        अंक|
    }
}

माना फिज़्ज़_बज़्ज़_दो = कार्य (अंक) {
    माना फिज़्ज़_बज़्ज़_आर = []|
    माना ई = 1|

    जबतक (ई <= अंक) {
        print(फिज़्ज़_बज़्ज़(ई))|
        ई = ई + 1|
    }
}

फिज़्ज़_बज़्ज़_दो(25)|
`,

    Factorial: `// a fn for calculating the factorial of a number
माना गुणन = कार्य (अंक) {
    अगर (अंक == 1) {
        1|
    } वरना {
        अंक * गुणन(अंक - 1)|
    }
}

print(गुणन(5))|
`,

    "Collection Literals": `// a list of fruits
माना फल = ["सेब", "केला", "अंगूर"]|

// a hashmap of fruits and their sizes
माना फल_आकार = {
    "सेब": "बड़ा",
    "केला": "छोटा",
    "अंगूर": "छोटा"
}|

print(फल)|
print(फल_आकार)|
`,
};
