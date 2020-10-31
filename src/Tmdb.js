

const API_KEY="c66ab581e2dea35452dac9e17181f058"
const API_BASE='https://api.themoviedb.org/3'
const LANGUAGE = "pt-BR";

/* 
-originais()
-filmes em destaque pra vc
-em alta (top rated)
-categorias
*/


const basicFetch= async(endpoint)=>{
   
    const response   = await fetch(`${API_BASE}${endpoint}`)
    const json= await response.json() 
    return json
}


export default{
    getHomeList: async()=>{
        return[
 
            {
                slug: "originals",
                title: "Originais do Netflix",
                items: await basicFetch(
                  `/discover/tv?language=${LANGUAGE}&api_key=${API_KEY}&with_network=123`
                )
              },
              {
                slug: "trending",
                title: "Recomendados para você",
                items: await basicFetch(
                  `/trending/all/week?language=${LANGUAGE}&api_key=${API_KEY}`
                )
              },
              {
                slug: "toprated",
                title: "Em alta",
                items: await basicFetch(
                  `/movie/top_rated?language=${LANGUAGE}&api_key=${API_KEY}`
                )
              },
              {
                slug: "action",
                title: "Ação",
                items: await basicFetch(
                  `/discover/movie?language=${LANGUAGE}&api_key=${API_KEY}&with_genres=28`
                )
              },
              {
                slug: "comedy",
                title: "Comédia",
                items: await basicFetch(
                  `/discover/movie?language=${LANGUAGE}&api_key=${API_KEY}&with_genres=35`
                )
              },
              {
                slug: "horror",
                title: "Terror",
                items: await basicFetch(
                  `/discover/movie?language=${LANGUAGE}&api_key=${API_KEY}&with_genres=27`
                )
              },
              {
                slug: "romance",
                title: "Romance",
                items: await basicFetch(
                  `/discover/movie?language=${LANGUAGE}&api_key=${API_KEY}&with_genres=10749`
                )
              },
              {
                slug: "documentary",
                title: "Documentários",
                items: await basicFetch(
                  `/discover/movie?language=${LANGUAGE}&api_key=${API_KEY}&with_genres=99`
                )
              }


        ];
    },
    getMovieInfo: async (movieId,type)=>{
      let info ={}

      if(movieId){
        switch(type){
          case 'movie':
            info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
            break;
          case 'tv':
            info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
            break;

          default:
            info = null
            break
        }
      }


      return info

    }
  }
