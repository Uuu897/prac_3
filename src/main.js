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
    methods:{
        addTask() {
            if (!this.newTask.priority) {
                alert('Укажите приоритет задачи.');
                return;
            }
            if (!this.newTask.title) {
                alert('Укажите заголовок задачи.');
                return;
            }
            if (!this.newTask.deadline) {
                alert('Укажите дэдлайн.');
                return;
            }
            if (new Date(this.newTask.deadline) <= new Date(this.newTask.createdAt)) {
                alert('Дэдлайн не может быть раньше даты создания или равен ей.');
                return;
            }
            this.plannedTasks.push({...this.newTask});
            this.newTask = { title: '', description: '', deadline: '', createdAt: new Date().toLocaleString(), lastEdited: null };
        },
})