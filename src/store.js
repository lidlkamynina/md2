import { reactive, ref } from "vue"
import router from "./router"
import songsList from './assets/songs_list.json';

export const store = reactive({
    user: {
        name       : "Lydia ",
        surname    : "Kamynina ",
        code       : "IT21079",
        time      : new Date()
    },
    all_songs: ref(songsList),
    isLoggedIn:  false,
    setUserData(name, surname, code) {
        this.user.name    = name;
        this.user.surname = surname;
        this.user.code    = code;
    },
    loginManager() {
      if (this.isLoggedIn) {
        const confirmLogout = window.confirm("Do you want to log out");
        if(confirmLogout){
        this.isLoggedIn = false;
        this.user.time = new Date();
        router.push("/");
        }
      } else {
        const confirmLogin = window.confirm("Do you want to log in");
        if(confirmLogin){
        this.isLoggedIn = true;
        router.push("/home");
        }
      }
    }

})