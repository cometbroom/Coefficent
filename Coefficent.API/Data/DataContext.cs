using Coefficent.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Coefficent.API.Data
{
	public class DataContext : DbContext
	{
		public DataContext(DbContextOptions<DataContext> options) : base(options) {}

        public DbSet<User>  Users {get; set;}
        public DbSet<Photo> Photos { get; set; }
		public DbSet<Project>  Projects {get; set;}


    }
}