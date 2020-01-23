import handleError from '../helpers/handleError'
import { projects } from '../data.json'

export default function pugFile(obj = {}) {
  const path = obj.path;
  const { id } = obj.pathParams;

  switch(path) { 

    case '/about':
      return {
        pugFile : 'about',
        projects : null,
        error : null
      }

    case `/project/${id}`: 
      const project = projects[id];
      return {
        pugFile : 'project',
        projects : project,
        error : project ? null : handleError(new Error('No such Project'), 404)
      } 

    case '/': 
      return {
        pugFile : 'index',
        projects : projects,
        error : projects ? null : handleError(new Error('Projects unavailable'), 500)
      }

    default:
      return {
         error : handleError(new Error('Not Found'), 404) 
       }
  }
}