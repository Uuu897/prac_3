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
        deleteTask(taskIndex) {
            this.plannedTasks.splice(taskIndex, 1);
        },
        startEditing(taskIndex, column) {
            this.editedTask = {...this[column][taskIndex]};
            this.editedTaskIndex = taskIndex;
            this.editedColumn = column;
        },
        finishEditing(taskIndex) {
            this[this.editedColumn][taskIndex] = {...this.editedTask, lastEdited: new Date().toLocaleString()};
            this.editedTask = null;
            this.editedTaskIndex = null;
            this.editedColumn = null;
        },
        moveToInProgress(taskIndex) {
            const taskToMove = this.plannedTasks.splice(taskIndex, 1)[0];
            this.inProgressTasks.push(taskToMove);
        },
        moveToTesting(taskIndex) {
            const taskToMove = this.inProgressTasks.splice(taskIndex, 1)[0];
            this.testingTasks.push(taskToMove);
        },
        moveToTesting(taskIndex) {
            const taskToMove = this.inProgressTasks.splice(taskIndex, 1)[0];
            this.testingTasks.push(taskToMove);
        },
        moveToCompleted(taskIndex) {
            const taskToMove = this.testingTasks.splice(taskIndex, 1)[0];
            taskToMove.isOverdue = new Date(taskToMove.deadline) < new Date();
            this.completedTasks.push(taskToMove);
        },
        returnToInProgress(taskIndex) {
            if (!this.testingTasks[taskIndex].returnReason) {
                alert('Укажите причину возврата.');
                return;
            }
            const taskToMove = this.testingTasks.splice(taskIndex, 1)[0];
            this.inProgressTasks.push(taskToMove);
        }
    }
})