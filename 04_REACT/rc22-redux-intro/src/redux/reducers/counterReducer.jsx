//mutfak (dersteki benzetmesi) counterReducer.jsx
//asil isi burasi yapiyor. Counter.jsx deki butonlara tiklandiginda counterReducer.jsx deki switch case ler devreye girecek ve sayac degerini arttiracak veya azaltacak.
const counterReducer = (state = { sayac: 0, text:"" }, {type, payload1}) => {

    console.log(type, payload1);

    switch(type){
        case"INCREASE":
        return {sayac: state.sayac+1, text:payload1}
        case"DECREASE":
        return {sayac: state.sayac-1, text:payload1}
        default:
        return state
    }
 
}

export default counterReducer