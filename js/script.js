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
            },
        ],
        addTodo: '',
    },
    methods: {
        pushGoal: function() {
            if (this.addTodo != "") {
                this.todos.push(
                    {
                        goal: this.addTodo,
                        done: false
                    }
                )
            this.addTodo = ''
            }
        },
        removeGoal: function(index) {
            this.todos.splice(index, 1);
        },
        isDone: function(index) {
            if (this.todos[index].done == false) {
                this.todos[index].done = true;
            } else {
                this.todos[index].done = false;
            }
        }
    },
})