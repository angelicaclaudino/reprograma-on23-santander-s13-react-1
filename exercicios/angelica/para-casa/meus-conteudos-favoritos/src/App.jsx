import Header  from './components/Header'
import Bio  from './components/Bio'
import Cards  from './components/Cards'
import Footer  from './components/Footer'
import cyberSec from './assets/cyberSec.jpg'
import framework from './assets/framework.jpg'
import metodAgeis from './assets/metodAgeis.png'
import ux from './assets/ux.jpg'
import angel from './assets/angel.jpg'

import './App.css'

function App() {
  return (
    
    <div className="App">
      <Header text="Meus conteúdos favoritos" />

      <Bio text="Oieee! Sou Angélica Claudino." 
           descricao="Estudante de FrontEnd, atualmente atuo com suporte a sistemas de informação. Sou apaixonada por informática." 
           image={angel} 

      /> 
     

      <Cards titulo="Cyber Segurança" 
             image={cyberSec} 
             descricao="Segurança de computadores ou cibersegurança é a proteção de sistemas de computador contra roubo ou danos ao hardware, 
             software ou dados eletrônicos, bem como a interrupção ou desorientação dos serviços que fornecem."
      
      />

      <Cards titulo="Framework" 
             image={framework} 
             descricao="Um framework em desenvolvimento de software, é uma abstração que une códigos comuns entre vários projetos de software 
             provendo uma funcionalidade genérica. Um framework pode atingir uma funcionalidade específica, por configuração, durante a 
             programação de uma aplicação."
      
      />

      <Cards titulo="Metodologias Ágeis" 
             image={metodAgeis} 
             descricao="Desenvolvimento Ágil de Software ou Método ágil é uma disciplina que estuda um conjunto de comportamentos, processos, 
             práticas e ferramentas utilizados para a criação de produtos e sua subsequente disponibilização para os usuários finais."
      
      />
     
     <Cards titulo="Ux" 
             image={ux} 
             descricao="O que é UX – User Experience. User Experience é tudo que envolve o modo como qualquer usuário interage com o mundo ao 
             seu redor."
      
      />

      
      <Footer content="Feito com ♡ por Angélica. E todos os direitos são reservados." />
    </div>
  )
}

export default App

