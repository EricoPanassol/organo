import Banner from './components/Banner/Banner';
import Forms from './components/Forms/Forms';
import { useState } from 'react';
import Team from './components/Team';

function App() {
  
  const teams = [
    {
      name:"Programação",
      primeColor:"#57C278",
      secondColor:"#D9F7E9",
    },
    {
      name:"Front-End",
      primeColor:"#82CFFA",
      secondColor:"#E8F8FF",
    },
    {
      name:"Data Science",
      primeColor:"#A6D157",
      secondColor:"#F0F8E2",
    },
    {
      name:"Devops",
      primeColor:"#E06B69",
      secondColor:"#FDE7E8",
    },
    {
      name:"UX e UI",
      primeColor:"#DB6EBF",
      secondColor:"#FAE9F5",
    },
    {
      name:"Mobile",
      primeColor:"#FFBA05",
      secondColor:"#FFF5D9",
    }, 
    {
      name:"Segurança",
      primeColor:"#FF8A29",
      secondColor:"#FFEEDF",
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  const novoColaborador = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }
  
  return (
    <div className="App">
        <Banner/>
        <Forms teams={teams.map(team => team.name)} aoColaboradorCadastrado={colaborador => novoColaborador(colaborador)}/>
        {teams.map(team => <Team 
          key={team.name} 
          name={team.name} 
          primeColor={team.primeColor} 
          secondColor={team.secondColor}
          colaboradores={colaboradores.filter(colaborador => colaborador.team === team.name)}
        />)}
        

    </div>
  );
}

export default App;
