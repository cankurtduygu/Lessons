import { createSlice } from '@reduxjs/toolkit';
//react-toolkitte action ve reducer islemini Slice da yapiyoruz.
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getData = createAsyncThunk('haberSlice/getData', async () => {
  const res = await axios(
    'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=81a4163ea7eb4bccb489151972100adb'
  );

  // console.log(res.data.articles);
  //consolde verilerin nasil gedligini gördük direk data ya ulasmak icin bu sekilde yazdik. artik bize sadece articles lazim o zaman artik data ya ulasmak yerine direk articles a ulasabiliriz.

  return res.data.articles;
});

const haberSlice = createSlice({
  name: 'haberSlice',

  initialState: {
    haberler: [],
    loading: true,
    error: false,
  },

  //DB'den vericekecgimiz icin bu reducers yeterli gelmez asagida extra bir reducer acacagiz. bu reducer sadece haberleri eklemek icin yeterli olurdu. ama biz haberleri eklemenin yani sira loading ve error durumunu da tutmak istiyoruz. o zaman extra reducer acmamiz gerekiyor.

  reducers: {
    clear: (state, { payload }) => {

      state.haberler = state.haberler.filter(haber => haber.url !== payload);

    }
  },

  extraReducers: (builder) => {
    //veriyi yukarida createAsyncThunk ile getData adinda bir fonksiyonla cekmistik. bu fonksiyonun 3 tane durumu var. pending, fulfilled, rejected. biz bu durumlara gore state imizi guncelleyecegiz.

    builder
      .addCase(getData.pending, (state) => {
      state.loading = true;
      state.error = false;
      })
      .addCase(getData.fulfilled, (state, action) => {
        //veri geldikten sonra action bize lazim oldugu icin onu da parametre olarak ekledik. action.payload bize veriyi verecek. biz de bu veriyi state imize ekleyecegiz. yani bunu haberler dizisine ekleyecegiz. ve loading i false yapacagiz cunku veri geldi. error u da false yapacagiz cunku hata yok.
        state.haberler = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(getData.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});


export const { clear } = haberSlice.actions;
export default haberSlice.reducer;

