
import { StudentTable } from '@/componente/StudentTable';
import {students} from '@/data/students'

const Page=()=>{ 
  

  
  
  return(
    <div className="container mx-auto">
      <h1 style={{textAlign:'center',color:'red'}}>Lista de Estudantes</h1>

          <StudentTable students ={students}/>
    </div>
  );
}

export default Page;