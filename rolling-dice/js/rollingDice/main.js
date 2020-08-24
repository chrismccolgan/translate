function main() {
    // Put your code here
    console.log("Let's roll some dice, baby!");
    console.log("---------------------------");

    for (let i = 0; i < 10; i++) {
        const die1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
        const die2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

        let dieString1;
        let dieString2;

        switch (die1) {
            case 1:
                dieString1 = "\u2680";
                break;
            case 2:
                dieString1 = "\u2681";
                break;
            case 3:
                dieString1 = "\u2682";
                break;
            case 4:
                dieString1 = "\u2683";
                break;
            case 5:
                dieString1 = "\u2684";
                break;
            case 6:
                dieString1 = "\u2685";
                break;
        }

        switch (die2) {
            case 1:
                dieString2 = "\u2680";
                break;
            case 2:
                dieString2 = "\u2681";
                break;
            case 3:
                dieString2 = "\u2682";
                break;
            case 4:
                dieString2 = "\u2683";
                break;
            case 5:
                dieString2 = "\u2684";
                break;
            case 6:
                dieString2 = "\u2685";
                break;
        }

        let message = `${dieString1} + ${dieString2} == ${die1 + die2}`;
        if (die1 == die2) {
            message += " DOUBLES!";
        }

        console.log(message);
    }
}

main();