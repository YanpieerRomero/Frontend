// Utility type
interface Task {
    id: number;
    title: string;
    completed: boolean;
    createdAt: Date;
}

// interface CreateTaskDto extends Omit<Task, 'id' | 'createdAt'> {}
// type CreateTaskDto = Omit<Task, 'id' | 'createdAt'>;
interface CreateTaskDto extends Omit<Task, 'id' | 'createdAt'> {
    timezone: string;
}
type UpdateTaskDto = Omit<Partial<Task>, 'id'>;
type FindTaskDto = Readonly<Partial<Task>>;

class TodoService {
    tasks: Task[] = [];

    getTasks(): Task[] {
        return this.tasks;
    }

    addTask(data: CreateTaskDto): CreateTaskDto {
        const newTask = {
            id: Math.random(),
            createdAt: new Date(),
            ...data,
        }
        this.tasks.push(newTask);
        return data;
    }

    updateTask(id: number, changes: UpdateTaskDto): UpdateTaskDto {
        const index = this.tasks.findIndex(item => item.id === id);
        this.tasks[index] = {
            ...this.tasks[index],
            ...changes
        }
        return this.tasks[index];
    }

    find(attrs: FindTaskDto) {
        return this.tasks;
    }

}

const service = new TodoService();
const tasks = service.getTasks();

const newTask = {
    title: 'nueva',
    completed: false,
    timezone: 'anything'
}
service.addTask(newTask);

const id = 9;
const changes = {
    title: 'Cambiar titulo',
}
service.updateTask(id, changes);

service.find({
    completed: true,
});