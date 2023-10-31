const { createApp } = Vue;

createApp({
  data() {
    return {
      apiUrl: "server.php",
      title: "To Do List Json",
      list: [],
      newToDo: "",
    };
  },
  methods: {
    getList() {
      axios.get("server.php").then((result) => {
        this.list = result.data;
      });
    },
    addTask() {
      const data = new FormData();
      data.append("todoItem", this.newTodo);

      axios.post(this.apiUrl, data).then((result) => {
        this.list = result.data;
        this.newTodo = "";
      });
    },
  },
  mounted() {
    this.getList();
  },
}).mount("#app");
