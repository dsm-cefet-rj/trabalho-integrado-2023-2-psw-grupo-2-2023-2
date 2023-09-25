import data from '../dados/Times/TimesAlemanha.json';


function ListaTimes (){
    const teamsData = data.response;
    const Lista = teamsData.map((team) => ({
    name: team.team.name,
    logo: team.team.logo,
    }));
    return (
        <div>
          <h1>Lista de Equipes da Bundesliga 2023</h1>
          <ul>
            {teamsList.map((team, index) => (
              <li key={index}>
                <h2>{team.name}</h2>
                <img src={team.logo} alt={`${team.name} Logo`} />
              </li>
            ))}
          </ul>
        </div>
    )   

}

   

export default ListaTimes;