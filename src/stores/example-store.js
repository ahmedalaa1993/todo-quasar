import { defineStore } from "pinia";
import { date } from "quasar";

export const useTasksStore = defineStore("tasksStore", {
  state: () => ({
    show12Hours: true,
    sort: "name",
    searchInput: "",
    searchBox: [],
    completeTasks: [],
    unCompleteTasks: [],
    tasks: [
      {
        id: "sadqaqaqad",
        name: "go to work",
        completed: true,
        dueDate: "2022/12/20",
        dueTime: "20:30",
        time12: "",
      },
      {
        id: "saweedad",
        name: "go to work",
        completed: true,
        dueDate: "2022/12/20",
        dueTime: "20:30",
        time12: "",
      },
      {
        id: "sadaaqad",
        name: "go to work",
        completed: true,
        dueDate: "2022/12/20",
        dueTime: "20:30",
        time12: "",
      },

      {
        id: "jhkjhkjhk",
        name: "go to a gymm",
        completed: false,
        dueDate: "2022/11/09",
        dueTime: "20:30",
        time12: "22",
      },
      {
        id: "jkljk321",
        name: "go to clup",
        completed: true,
        dueDate: "2022/11/01",
        dueTime: "20:30",
        time12: "",
      },
      {
        id: "jhkjhk",
        name: "go to zz sleep",
        completed: false,
        dueDate: "2022/11/07",
        dueTime: "20:30",
        time12: "",
      },
      {
        id: "jhk56jhk",
        name: "go to v sleep",
        completed: false,
        dueDate: "2022/09/09",
        dueTime: "20:30",
        time12: "",
      },
      {
        id: "9691",
        name: "go to a work",
        completed: true,
        dueDate: "2022/12/09",
        dueTime: "20:30",
        time12: "",
      },
    ],
  }),

  getters: {
    // searchHehigLighter(search) {
    //   search = this.searchInput;
    //   let searchWord, word;
    //   if (this.searchBox.length) {
    //     return (
    //       (this.searchBox = this.searchField.filter((i) => {
    //         return i.name.replace(
    //           search,
    //           `<span class="bg-yellow-6"> ${search} </span>`
    //         );
    //       })),
    //       console.log(this.searchBox.length),
    //       console.log(this.searchBox)
    //     );
    //   }
    // },

    /*
    searchHehigLighter(search) {
      search = this.searchInput;
      let searchWord;

      if (this.searchBox.length) {
        this.searchBox.every((i) => {
          return (
            (searchWord = i.name.replace(
              search,
              `<span class="bg-yellow-6"> ${search} </span>`
            )),
            (i.name = searchWord)
          );
        });
      }
      console.log(searchWord, search);
      console.log(searchWord, this.searchBox);
      console.log(this.tasks);
      // return searchWord;
    },
    */

    searchField() {
      const searchVal = this.searchInput.toLowerCase();
      return (this.searchBox = this.tasks.filter((i) => {
        if (searchVal == "") {
          return false;
        }
        return i.name.toLowerCase().includes(searchVal);
      }));
    },
    tasksUnCompleted() {
      return (this.unCompleteTasks = this.tasks.filter((i) => !i.completed));
    },
    tasksCompleted() {
      return (this.completeTasks = this.tasks.filter((i) => i.completed));
    },
    sorted() {
      return (this.tasks = this.tasks.sort((a, b) => {
        if (a[this.sort] > b[this.sort]) return 1;
        else if (a[this.sort] < b[this.sort]) return -1;
        else return 0;
      }));
    },
    niceDate() {
      this.tasks.filter((i) => {
        i.dueDate = date.formatDate(i.dueDate, "MMM D");
      });
    },
    show12HoursFormat() {
      return this.tasks.filter((i) => {
        return (i.time12 = date.formatDate(
          i.dueDate + " " + i.dueTime,
          "h:mmA"
        ));
      });
    },
  },

  actions: {
    search() {
      this.searchField;
      this.searchHehigLighter;
      // console.log(this.searchBox.length);
    },
    deleteItem(id) {
      return (this.tasks = this.tasks.filter((i) => i.id !== id));
    },
    editItem(id) {
      console.log(id);
      this.tasks.filter((i) => {
        if (i.id == id) console.log(i.name, i.dueDate);
        {
        }
      });
    },
    addTask(newTask) {
      this.tasks.push(newTask);
    },
  },
});
