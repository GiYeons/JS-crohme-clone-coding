const calculator = {
    add : function(a, b) {
        console.log(a + b);
    },
    min : function(a, b) {
        console.log(a - b);
    },
    div : function(a, b) {
        console.log(a / b);
    },
    pwOf : function(a, b) {
        console.log(a ** b);
    }
};

calculator.add(5, 3);
calculator.min(5, 3);
calculator.div(5, 3);
calculator.pwOf(5, 3);