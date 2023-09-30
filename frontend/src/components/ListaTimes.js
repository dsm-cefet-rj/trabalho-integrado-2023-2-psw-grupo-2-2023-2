import data from '../dados/Times/times_ordenados.json';


    const teamsData = data.response;
    const Lista = teamsData.map((team) => ({
    name: team.team.name,
    logo: team.team.logo,
    }));
  

export default Lista;