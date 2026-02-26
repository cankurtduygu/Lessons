import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { clear, getData } from '../features/haberSlice';
import { useEffect } from 'react';
import load from '../assets/loading.gif';



const News = () => {
  const dispatch = useDispatch();
  const { loading, haberler, error } = useSelector((state) => state.haberSlice);

  //Burda useEffect kullanarak component ilk render edildiginde getData fonksiyonunu cagiriyoruz. bu fonksiyon bize haberleri getirecek. bu fonksiyonu cagirirken dispatch kullanarak cagiriyoruz. cunku getData bir action creator ve biz action creatorlari dispatch ile cagiriyoruz.
  //Neden peki useEffect kullanarak cagiriyoruz? cunku getData fonksiyonu bir async fonksiyon ve biz bu fonksiyonu component render edildikten sonra cagiriyoruz. eger useEffect kullanmazsak bu fonksiyon her render edildiginde cagirir ve bu da sonsuz bir dongu olusturur. o zaman useEffect kullanarak bu fonksiyonu sadece component ilk render edildiginde cagiriyoruz.
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);


  if(error)
    return(<h1>Url de hata var</h1>)

  return (
    <>
      {loading ? (
        <img src={load} alt="loading" height="800px" />
      ) : (
        <Box
          xs={{ d: 'flex' }}
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          flexWrap="wrap"
        >
          {haberler.map((a, index) => (
            <Card sx={{ maxWidth: 345, maxHeight: 600, m: 5 }} key={index}>
              <CardMedia
                component="img"
                alt={a.title}
                height="140"
                image={a.urlToImage}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {a.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {a.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={()=>dispatch(clear(a.url))} size="small">Clear</Button>
                <Button href={a.url} target="_blank" size="small">Learn More</Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      )}
    </>
  );
};

export default News;
