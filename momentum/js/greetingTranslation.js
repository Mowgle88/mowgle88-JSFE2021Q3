const NMDEen = ['Good Night, ', 'Good Morning, ', 'Good Day, ', 'Good Evening, '];
const NMDEru = ['Доброй ночи, ', 'Доброе утро, ', 'Добрый день, ', 'Добрый вечер, '];
const timeOfDay_en = getTimeOfDayEn();
const timeOfDay_ru = getTimeOfDayRu();


function getTimeOfDayEn() {
   const date = new Date();
   const hours = date.getHours();
   return NMDEen[Math.floor(hours/6)]
 }

 function getTimeOfDayRu() {
   const date = new Date();
   const hours = date.getHours();
   return NMDEru[Math.floor(hours/6)]
 }

const greetingTranslation = {
   'en': timeOfDay_en,
   'ru': timeOfDay_ru
}

export default greetingTranslation;