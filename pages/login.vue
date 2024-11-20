<template>
    <div class="text-center flex justify-center items-center h-screen">
        <div class="w-1/4">

            <q-form class="q-gutter-md">
                <q-input filled v-model="authStore.username" label="Your username *" lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Please type you username']" hint="emilys"/>

                <q-input filled type="password" v-model="authStore.password" label="Your password *" lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Please type your password']" hint="emilyspass"/>

                <div>
                    <q-btn @click.prevent="login" label="Submit" type="submit" color="primary" />
                    <NuxtLink to="/">
                        <q-btn label="Cancel" type="reset" color="deep-orange" flat class="q-ml-sm" />
                    </NuxtLink>
                </div>
            </q-form>

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