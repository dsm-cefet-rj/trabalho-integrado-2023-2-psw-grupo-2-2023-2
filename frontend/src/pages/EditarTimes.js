function EditarTimes(){
     return(
          <div>
                <header className = 'Cabecalho'>  
                <img onClick={() => navigate(`/home/${idteam}`)} className = "Imagem" src = {logo} alt = "Logo Site"/>
                </header>
                <div className='FundoHome'>
                <div className='Tudo'>
                <div className="PerfilHome">
                <img className = "Foto" onClick={() => navigate(`/perfil/${idteam}`)}  src = {perfil} alt = "ImagemPerfil"></img>
                <div className="Sair">
                <button
                       className='BotaoPesquisa'
                       onClick={() => navigate(`/login`)}>Sair </button>
                </div>
                </div>
                <div className='Body'>
                <div className='BotoesHomeADM'>
                        <button className = "LinkADM">Adicionar Times </button>
                        <button className = "LinkADM">Remover Times </button> 
                        <button className = "LinkADM">Editar Times </button> 
                        
                     </div>
                </div>
                </div>    
                </div>   
           </div>
          )
     }
      
export default EditarTimes
      