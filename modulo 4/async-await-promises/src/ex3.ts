import axios from "axios";
import { baseURL } from "./baseURL";

const news = {
  title: "Nova notícia",
  content: "conteúdo",
  date: Date.now(),
};

//da maneira do then como no exericcio do fabio

// const createNews = (news: any) => {
//   return axios
//   .put(`${baseURL}/news`, news);
// };

// const getAllSubscribers = () => {
//   return axios
//   .get(`${baseURL}/subscribers`)
//   .then((res) => res.data);
// };

// const getSubscribersIds = (subscribers: any) => {
//   return axios
//   .get(`${baseURL}/subscribers`)
//   .then((res) => res.data);
// };

// const notifyAllSubscribers = (ids: string[]) => {
//   ids.push("idInexistente");
//   //Inserindo um valor inválido

//   for (const id of ids) {
//     axios
//       .post(`${baseURL}/notifications`, {
//         subscriberId: id,
//         message: "Confira as suas ultimas notícias!",
//       })
//       .then(() => {
//         console.log(`Notificação enviada a ${id}`);
//       })
//       .catch(() => console.log(`Erro no ${id}`));
//   }
// };


//exercicio 3 de maneira asyncrono 
//a)Sim porque é asyncrono
//b)é indicado fazer um map para deixar explicito que esta vindo os objetos que desejamos
//c)
// const getSubscribers = async ():Promise<user[]> => {
// const response =await axios.get(`${baseURL}/subscribers`);
// return response.data.map((res: any)=>{
// return { 
//   id:res.id,
//   name:res.name,
//   email:res.email
// }
// })
// }




// createNews(news)                // criar noticia
//   .then(getAllSubscribers)      // buscar assinantes
//   .then(getSubscribersIds)      // extrair id's (etapa síncrona)
//   .then(notifyAllSubscribers)   // enviar notificacoes



