//6
//ele traz tosas promessas de modo  similar ao then, esse metodo recebe um array de Promisse
//e retorna outra promisse , que resolve um array de repostas . 
//ele pega o vetor que eu criei e ele traz os resultados de forma assincrona que estao dentro dele depois é só chamar 
//nesss caso fazemos um map

// const sendNotifications = async (
//   users: user[],
//   message: string
// ): Promise<void> => {

// 	try {
// 	  const promises = users.map(user =>{
// 	    return axios.post(`${baseURL}/notifications`, {
// 	      subscriberId: user.id,
// 	      message: message,
// 	    }) 
// 	  })
	
// 	  await Promise.all(promises);

// 	} catch {
// 		console.log("Error");
// 	}
// };