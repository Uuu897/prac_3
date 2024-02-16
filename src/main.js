new Vue({
    el: '#app',
    data() {
        return {
            newTask: {
                title: '',
                description: '',
                deadline: '',
                priority: null,
                createdAt: new Date().toLocaleString(),
                lastEdited: null,
                returnReason: null,
                isOverdue: false
            },
            editedTask: null,
            editedTaskIndex: null,
            editedColumn: null,
            plannedTasks: [],
            inProgressTasks: [],
            testingTasks: [],
            completedTasks: [],
        }
    },
})