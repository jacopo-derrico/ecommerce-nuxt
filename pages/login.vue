<template>
    <div class="flex justify-center items-center">
        <div class="w-1/4">
            <form class="flex flex-col">
                <label for="username">Username</label>
                <input name="username" type="text" v-model="authStore.username" class="border rounded-lg mb-3" required/>
                <label for="password">Password</label>
                <input type="password" v-model="authStore.password" class="border rounded-lg mb-3" required/>
                <div>
                    <button @click.prevent="login" type="submit" class="text-white bg-blue-600 px-5 py-1 rounded-lg">Login</button>
                    <NuxtLink to="/" class="text-pink-600">
                        Cancel
                    </NuxtLink>
                </div>
            </form>

        </div>
    </div>
</template>

<script setup>
    import { useAuthStore } from '~/store/auth';
    import { storeToRefs } from 'pinia';
    const authStore = useAuthStore();

    // const { aAuthenticateUser } = useAuthStore();`
    // const { authenticated } = storeToRefs(useAuthStore());

    const username = ref('');
    const password = ref('');

    // const user = ref({
    //     username: 'johnd',
    //     password: 'm38rmF$',
    // });
    const router = useRouter();

    const login = async () => {
        await authStore.aAuthenticateUser(); // call aAuthenticateUser and pass the user object
        console.log(authStore.username, authStore.password, authStore.token)
        // redirect to homepage if user is authenticated
        // if (authStore.authenticated) {
        //     router.push('/');
        // }
    };
</script>