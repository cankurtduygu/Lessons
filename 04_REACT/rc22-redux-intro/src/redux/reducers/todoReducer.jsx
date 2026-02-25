//state ihtiyacimiz oldu ve bu state i global yapip tum componentlerde kullanmak istedik. Bunun icin redux kullanacagiz. Redux da state i store da tutariz ve reducer lar yardimiyla state i guncelleriz. Reducer lar pure function lardir ve state i guncellemek icin action lari kullanirlar. Action lar ise type ve payload dan olusur. Type action in ne oldugunu belirtir, payload ise action in icerigini belirtir. TodoReducer.jsx de yapilacaklar listesini tutacagiz ve bu listeyi guncellemek icin action lar kullanacagiz.

const initial = {
    yapilacaklar: [
            { id:1, todo:"Alisveris yap", completed:false },
            { id:2, todo:"Odevi yap", completed:false },
            { id:3, todo:"Spor yap", completed:true },
        ],
        loading:false
    };

const         todoReducer = (state=initial, {type,payload}) => {

    switch (type) {
        case "REMOVE":
            return {
                yapilacaklar: state.yapilacaklar.filter((item) => item.id !== payload)
            }
        case "CHANGE":
            return {
                yapilacaklar: state.yapilacaklar.map((item) => item.id === payload ? {...item, completed: !item.completed} : item)
            }
        case "POST":
            return {
                yapilacaklar: [...state.yapilacaklar, {id:Math.random(), todo:payload, completed:false}]
            }
        default:
            return state
    }
   

}

export default todoReducer
