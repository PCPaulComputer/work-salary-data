export const formatNumber = number => {
    // put comma as a thousand separator
   return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
 }