using System.Collections.Generic;
using System.Threading.Tasks;
using Coefficent.API.Models;

namespace Coefficent.API.Data
{
    public interface IProjectRepository
    {
         void Add<T>(T entity) where T: class;
         void Delete<T>(T entity) where T: class;
         Task<bool> SaveAll();
         Task<IEnumerable<Project>> GetProjects();
         Task<Project> GetProject(int id);
         
    }
}