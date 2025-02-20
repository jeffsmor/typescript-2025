"use strict";
function review(value) {
    if (typeof value === "number") {
        console.log(`O usuário deixou um review com valor igual a ${value}`);
    }
    else {
        console.log("O usuário não deixou um review!");
    }
}
review(5);
review(false);
