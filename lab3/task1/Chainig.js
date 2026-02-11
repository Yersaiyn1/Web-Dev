let ladder = {
    step: 0,
    up() {
        this.step++;
        return this; // allows to return object itself from every call
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { // shows the current step
        alert( this.step );
        return this;
    }
};

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0