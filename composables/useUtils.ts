export const useUtils = () =>{
  function capitalize(str:string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  //객체나 배열이 비어 있는지 확인하는 함수.
  function isEmpty(obj:any) {
    return Object.keys(obj).length === 0;
  }
//URL에서 쿼리 매개변수를 추출하는 함수.
  function getQueryParams(url:string) {
    // 구현 로직
  }

  function debounce(func:any, delay:any) {
    // 구현 로직
  }
  
  function throttle(func:any, interval:any) {
    // 구현 로직
  }
  return{
    capitalize,
    isEmpty
  }
}