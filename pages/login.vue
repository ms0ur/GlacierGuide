<template>
  <main class="bg-white flex flex-col px-20 max-md:px-5">
  <h1 class="text-black text-4xl font-header leading-[51px] uppercase ml-10 mt-60 max-md:mx-0 max-md:max-w-full max-md:mt-10">
    войдите в аккаунт
  </h1>
  <section class="w-[744px] max-w-full ml-10 mt-14 mb-52 max-md:mx-0 max-md:my-10">
    <div class="gap-5 flex max-md:flex-col max-md:mx-0 max-md:items-stretch max-md:gap-0">
      <div class="flex flex-col items-stretch w-3/12 opacity-0 max-md:hidden max-md:w-full max-md:ml-0">
        <div class="bg-stone-200 flex flex-col w-full mx-auto pt-12 pb-1 px-4 rounded-3xl max-md:mt-6">
          <NuxtImg
            loading="lazy"
            src="/svgs/loginImage.svg"
            class="aspect-[0.74] object-contain object-center w-[95px] fill-blue-400 overflow-hidden max-w-full"
            alt="Logo"
          />
        </div>
      </div>
      <div class="flex flex-col items-stretch w-9/12 ml-5 max-md:w-full max-md:mx-0 ">
        <div class="bg-stone-100 flex grow flex-col w-full mx-auto pl-11 pr-8 pt-8 pb-11 rounded-3xl max-md:max-w-full max-md:mt-6 max-md:px-5">
          <div class="text-black text-xl font-medium leading-6 self-stretch whitespace-nowrap max-md:max-w-full">
            Логин
          </div>
          <input v-model="login" placeholder="mail@mail.ru" class="text-black text-sm font-medium leading-4 whitespace-nowrap border border-[color:var(--foundation-violet-normal,#A461DB)] self-stretch mt-3 px-5 py-4 rounded-3xl border-solid max-md:max-w-full max-md:pl-2">
            
          <div class="text-black text-xl font-medium leading-6 self-stretch whitespace-nowrap mt-6 max-md:max-w-full">
            Пароль
          </div>
          <input v-model="password" placeholder="••••••••" class="text-black text-sm font-medium leading-4 whitespace-nowrap border border-[color:var(--foundation-violet-normal,#A461DB)] self-stretch mt-3 px-5 py-4 rounded-3xl border-solid max-md:max-w-full max-md:pl-2">

          <div v-if="errorMessage" class="bg-red-500 text-white px-6 py-4 border-0 rounded relative mb-4">
            <span class="text-xl inline-block mr-5 align-middle">
              <i class="fas fa-bell" />
            </span>
            <span class="inline-block align-middle mr-8">
              {{ errorMessage }}
            </span>
            <button class="absolute bg-transparent text-2xl top-0 right-0 mt-4 mr-6 outline-none focus:outline-none">
              <span>×</span>
            </button>
          </div>

          <button @click="submitForm" class="text-white text-sm font-medium leading-4 whitespace-nowrap justify-center items-center bg-red-400 w-[138px] max-w-full mt-32 px-5 py-3.5 rounded-3xl self-end max-md:mt-10">
            Войти
          </button>
        </div>
      </div>
    </div>
  </section>
</main>
</template>
<style scoped>
@font-face {
    font-family: "Actay";
    src: local("Actay"), url(public/fonts/ActayWide-Bold.otf) format("opentype");
    }

    .font-header {
    font-family: "Actay";
    }
</style>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
const colorMode = useColorMode()

const login = ref('');
const password = ref('');
const errorMessage = ref('');

const submitForm = async (event : any) => {
  event.preventDefault();

  try {
    const response = await axios.post('/api/login', {
      email: login.value,
      password: password.value
    }).then((response) => {
      if(response.data.status == false){
        errorMessage.value = response.data.errorName.ru;
      } else if(response.data.status == true) {
        window.location.href = "/";
      }
    });
    console.log(response)

  } catch (error) {
    console.log(error);
  }
};
</script>