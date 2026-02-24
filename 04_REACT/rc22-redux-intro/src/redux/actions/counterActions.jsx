//garson (dersteki benzetme) counterActions.jsx
//counterReducer.jsx deki switch case ler devreye girecek ve sayac degerini arttiracak veya azaltacak. CounterActions.jsx deki fonksiyonlar ise butonlara tiklandiginda dispatch ile counterReducer.jsx deki switch case lerin devreye girmesini saglayacak.
//counterReducer.jsx burdan type ve payload1 degerlerini alacak.

export const arttir = () => ({type:"INCREASE",payload1:"ARTTIRILDI"})