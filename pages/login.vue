<template>
  <div class="bg-white flex flex-col items-center px-5">
    <section class="flex w-full max-w-[1060px] flex-col items-stretch mt-60 mb-64 max-md:max-w-full max-md:my-10">
      <h1 class="text-black text-3xl font-semibold leading-10 whitespace-nowrap max-md:max-w-full">
        Введите свои данные,
      </h1>
      <div class="flex flex-col mt-2.5 pl-16 max-md:max-w-full max-md:pl-5">
        <div class="flex w-[544px] max-w-full justify-between gap-5 max-md:flex-wrap">
          <NuxtImg
            loading="lazy"
            src="/svgs/login2Image.svg"
            class="aspect-[0.95] max-md:hidden object-contain object-center w-10 fill-purple-500 overflow-hidden shrink-0 max-w-full"
            alt="Image"
          />
          <div class="self-stretch flex grow basis-[0%] flex-col items-stretch max-md:max-w-full">
            <h2 class="text-black text-3xl font-semibold leading-10 max-md:max-w-full">
              чтобы войти в аккаунт
            </h2>
            <p class="text-black text-sm font-medium leading-4 mt-4 max-md:max-w-full">
              или зарегистрируйтесь, если Вы не делали этого раньше
            </p>
          </div>
        </div>
        <div class="shadow-sm bg-zinc-50 flex w-[925px] max-w-full justify-between gap-5 mt-16 pl-11 pr-11 pt-8 pb-12 rounded-3xl self-end max-md:flex-wrap max-md:mt-10 max-md:px-5">
          <div class="flex grow basis-[0%] flex-col items-stretch">
            <label for="login" class="text-black text-xl font-medium leading-6 whitespace-nowrap">
              Логин
            </label>
            <input v-model="login" placeholder="mail@mail.ru" class=" text-sm font-medium leading-4 whitespace-nowrap border border-[color:var(--foundation-violet-normal,#A461DB)] mt-3 px-5 py-4 rounded-3xl border-solid max-md:pl-2" />
            <label for="password" class="text-black text-xl font-medium leading-6 whitespace-nowrap mt-6">
              Пароль
            </label>
            <input v-model="password" placeholder="••••••••" class=" text-sm font-medium leading-4 whitespace-nowrap border border-[color:var(--foundation-violet-normal,#A461DB)] mt-3 px-5 py-4 rounded-3xl border-solid max-md:pl-2" />
          </div>
          <div v-auto-animate class="flex grow basis-0 flex-col mt-20 self-end items-end max-md:mt-10">
            <NuxtLink to="/register" v-auto-animate class="text-black text-sm font-medium leading-4 whitespace-nowrap justify-center items-center border max-w-full px-5 py-3.5 rounded-3xl border-solid border-black">
              Создать аккаунт
            </NuxtLink>
            <button v-auto-animate @click="submitForm" class="text-white text-sm font-medium leading-4 whitespace-nowrap justify-center items-center shadow-sm bg-red-400 self-end mt-5 px-5 py-3.5 rounded-3xl">
              Войти
            </button>
            <div v-auto-animate v-if="errorMessage" class="text-white bg-red-500 p-3 rounded-xl text-center mt-2">
              {{ errorMessage }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
const colorMode = useColorMode()

const login = ref('');
const password = ref('');
const errorMessage = ref('');

const submitForm = async (event : any) => {
  event.preventDefault();

  if(login.value == '' || password.value == '') {
    errorMessage.value = 'Не заполнены необходимые поля';
    setTimeout(() => {
      errorMessage.value = '';
    }, 5000);
    return;
  }

  try {
    const response = await axios.post('/api/login', {
      email: login.value,
      password: password.value
    }).then((response) => {
      if(response.data.status == false){
        errorMessage.value = response.data.errorName.ru;
        
        setTimeout(() => {
          errorMessage.value = '';
        }, 5000);
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