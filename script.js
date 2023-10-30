const { createApp } = Vue;

createApp({
  data() {
    return {
      title: "To Do List Json",
      list: [],
    };
  },
  methods: {
    getList() {
      axios.get("server.php").then((result) => {
        this.list = result.data;
      });
    },
  },
  mounted() {
    this.getList();
  },
}).mount("#app");
