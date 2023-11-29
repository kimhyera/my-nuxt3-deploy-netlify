export default defineNuxtPlugin(() => {

  return {
    provide:{
      hello: (msg: string) => `Hello ${msg}!`,
      isEmpty: (obj:any)  => Object.keys(obj).length === 0
    }
  }
})