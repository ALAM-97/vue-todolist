const app = new Vue({
    el: '#root',
    data: {
        todos: 
        [
            {
                goal: "Fare i compiti",
                done: false
            },
            {
                goal: "Fare la spesa",
                done: false
            },
            {
                goal: "Fare il bucato",
                done: false
            }
        ],
        todoIndex: 0
    },
    methods: {
        prova: function() {
            console.log(this.todos[0].goal);
        }
    },
})