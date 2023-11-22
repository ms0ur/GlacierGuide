<template>
  <div class="bg-white flex flex-col px-5 max-md:mx-0">
    <div class="flex w-[744px] max-w-full flex-col items-stretch ml-24 mt-60 mb-52 max-md:my-10 max-md:mx-0">
      <h1 class="text-black text-4xl font-header leading-[51px] uppercase max-md:max-w-full">
        Создайте новый аккаунт
      </h1>
      <div class="mt-14 max-md:max-w-full max-md:mt-10 max-md:mx-0">
        <div class="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div class=" max-md:hidden flex flex-col items-stretch w-3/12 max-md:w-full max-md:mx-0">
            <div class="shadow-sm bg-stone-100 flex flex-col items-center w-full mx-auto rounded-3xl max-md:mt-6">
              <NuxtImg
                loading="lazy"
                src="/svgs/registerImage.svg"
                class="aspect-square object-contain object-center w-[180px] overflow-hidden"
              />
            </div>
          </div>
          <div class="flex flex-col items-stretch w-9/12 ml-5 max-md:w-full max-md:mx-0">
            <div class="shadow-sm bg-stone-100 flex grow flex-col w-full mx-auto pl-12 pr-12 pt-8 pb-11 rounded-3xl max-md:max-w-full max-md:mt-6 max-md:mx-0">
              <div class="text-black text-xl font-medium leading-6 self-stretch whitespace-nowrap max-md:max-w-full">
                Логин
              </div>
              <input v-model="email" placeholder="mail@mail.ru" class="text-black text-sm font-medium leading-4 whitespace-nowrap border border-[color:var(--foundation-violet-normal,#A461DB)] self-stretch mt-3 px-5 py-4 rounded-3xl border-solid max-md:max-w-full max-md:pl-2">
              <div class="text-black text-xl font-medium leading-6 self-stretch whitespace-nowrap mt-6 max-md:max-w-full">
                Пароль
              </div>
              <input v-model="password" placeholder="••••••••" class="text-black text-sm font-medium leading-4 whitespace-nowrap border border-[color:var(--foundation-violet-normal,#A461DB)] self-stretch mt-3 px-5 py-4 rounded-3xl border-solid max-md:max-w-full max-md:pl-2">
              <div v-if="errorMessage" class="bg-red-500 mt-2 text-white px-6 py-4 border-0 rounded-3xl relative mb-4">
                <span class="text-xl inline-block mr-5 align-middle">
                  <i class="fas fa-bell" />
                </span>
                <span class="inline-block align-middle mr-8">
                  {{ errorMessage }}
                </span>
             </div>
              <button @click="submitForm" class="text-white text-sm font-medium leading-4 whitespace-nowrap justify-center items-center shadow-sm bg-red-400 w-[164px] max-w-full mt-32 px-5 py-3.5 rounded-3xl self-end max-md:mt-10 max-md:mx-0">
                Создать аккаунт
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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

const email = ref('');
const password = ref('');
const errorMessage = ref('');

const submitForm = async (event : any) => {
  event.preventDefault();

  try {
    const response = await axios.post('/api/register', {
      email: email.value,
      password: password.value
    }).then((response) => {
      console.log(response);
      if(response.data.status == false){
        errorMessage.value = response.data.errorName.ru;
        setTimeout(() => {
          errorMessage.value = '';
        }, 5000);
      } else if(response.data.status == true) {
        window.location.href = "/";
      }
    });

    console.log(response);

    // Handle the response here (e.g., show a success message)
  } catch (error) {
    // Handle the error here (e.g., display an error message)
    console.log(error);
  }
};
</script>