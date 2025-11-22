import {defineStore} from 'pinia';
export const useTodoStore=defineStore('todo',{
  state:()=>({
    todos:[]
  }),
  getters:{
    
  },
  actions:{
    async fetchTodos(){
      const todos=await new Promise((resolve)=>{
        setTimeout(()=>{
          resolve([
            {
              id: 1,
              task: "Clean house",
              status: "pending",
              time: "2023-11-01 11:00:00",
            },
            {
              id: 2,
              task: "Do homework",
              status: "completed",
              time: "2023-11-01 11:00:00",
            },
          ]);
        },2000)
      })
      this.todos=todos
    },
    toggleStatus(id){
      const foundIndex = this.todos.findIndex((t) => t.id == id);
      if (foundIndex >= 0) {
        if (this.todos[foundIndex].status == "completed") {
          this.todos[foundIndex].status = "pending";
        } else {
          this.todos[foundIndex].status = "completed";
        }
      }
    },
    addItem(task){
      this.todos.push({
        id:this.todos.length+1,
        task:task,
        status:"pending",
        time:new Date()
      });
    }

  }
})