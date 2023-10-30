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
      axios.post(this.apiUrl);
    },
  },
  mounted() {
    this.getList();
  },
}).mount("#app");
