type Task = {
  id: number;
  title: string;
  isDone: boolean;
};

interface IToDoList {
  addTask: (title: string) => Task;
  showTasks: () => Task[];
  filter: (fn: Function) => Task[];
  deleteTask: (id: number) => void;
  changeStatus: (id: number, status: boolean) => void;
  search: (text: string) => Task[];
}

class Todolist implements IToDoList {
  tasks: Task[] = [];
  id: number = 0;

  addTask(title: string) {
    const newtask = {
      id: this.id,
      title: title,
      isDone: false,
    };
    this.tasks.push(newtask);
    this.id++;
    return newtask;
  }

  showTasks() {
    return this.tasks;
  }

  filter(newfunc: Function) {
    const result_list: Task[] = [];

    for (const task of this.tasks) {
      if (newfunc(task)) {
        result_list.push(task);
      }
    }
    return result_list;
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  changeStatus(id: number, status: boolean) {
    for (const task of this.tasks) {
      if (task.id === id) {
        status == false ? (task.isDone = true) : (task.isDone = false);
      }
    }
  }

  search(text: string) {
    return this.tasks.filter((task) => task.title.includes(text));
  }
}

const todolist = new Todolist();

const a = todolist.addTask('avval');
const b = todolist.addTask('dovom');

console.log(todolist.search('v'));

