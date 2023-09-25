import data from '../dados/Times/TodosTimes.json';


    const teamsData = data.response;
    const Lista = teamsData.map((team) => ({
    name: team.team.name,
    logo: team.team.logo,
    }));
  

export default Lista;