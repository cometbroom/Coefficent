using System.Collections.Generic;
using System.Threading.Tasks;
using Coefficent.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Coefficent.API.Data
{
	public class ProjectRepository : IProjectRepository
	{
		private readonly DataContext _context;
		public ProjectRepository(DataContext context)
		{
			_context = context;

		}
		public void Add<T>(T entity) where T : class
		{
            _context.Add(entity);
		}

		public void Delete<T>(T entity) where T : class
		{
            _context.Remove(entity);
		}

		public async Task<Project> GetProject(int id)
		{
            var project = await _context.Projects.FirstOrDefaultAsync(q => q.Id == id);

            return project;
		}

		public async Task<IEnumerable<Project>> GetProjects()
		{
            var projects = await _context.Projects.ToListAsync();

            return projects;
		}

		public async Task<bool> SaveAll()
		{
            //To return 0 if nothing was saved.
            return await _context.SaveChangesAsync() > 0;
		}
	}
}