import { defineStore } from 'pinia'
import { HTTP } from '../http/http-client'
import { ref } from 'vue';

// interface UserPayloadInterface {
//     username: string;
//     password: string;
// }

export const useAuthStore = defineStore('authStore', () => {

    // state
    let username = ref('');
    let password = ref('');
    let authenticated = ref(false);
    let loading = ref(false);
    let userData = ref([]);

    // actions
    function aAuthenticateUser() {
        // const { data, pending }: any = await $fetch('https://fakestoreapi.com/auth/login', {
        //     method: 'post',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: {
        //         username,
        //         password,
        //     },
        // });
        // loading.value = pending;
        // if (data.value) {
        //     const token = useCookie('token'); // create token cookie
        //     token.value = data?.value?.token; // set token to cookie
        //     authenticated.value = true; // set authenticated state value to true
        // }

        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' ,
                'Access-Control-Allow-Origin': '<origin>'
            },
            body: JSON.stringify({
              username: username,
              password: password,
              expiresInMins: 30, // optional, defaults to 60
            }),
            credentials: 'include' // Include cookies (e.g., accessToken) in the request
          })
          .then(res => res.json())
          .then(console.log);
        // if (data.value) {
        //     const token = useCookie('token'); // create token cookie
        //     token.value = data?.value?.token; // set token to cookie
        //     authenticated.value = true; // set authenticated state value to true
        // }
    };

    function logUserOut() {
        const token = useCookie('token'); // call cookie
        authenticated.value = false; // set authenticated state value to false
        token.value = null; // clear the token cookie
    };


    return {
        //state
        authenticated,
        loading,
        //actions
        aAuthenticateUser,
        logUserOut
    }
})