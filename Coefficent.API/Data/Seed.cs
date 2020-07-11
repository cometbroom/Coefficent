using System.Collections.Generic;
using System.Linq;
using Coefficent.API.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace Coefficent.API.Data
{
    public class Seed
    {
        public static void SeedUsers(DataContext context)
        {
            // Check if there are users already
            if (!context.Users.Any())
            {
                // Read json data and turn it into an object.
                var userData = System.IO.File.ReadAllText("Data/UserSeedData.json");
                var format = "yyyy-MM-dd";
                var dateTimeConvert = new IsoDateTimeConverter { DateTimeFormat = format };

                //Get a list from the json file
                var users = JsonConvert.DeserializeObject<List<User>>(userData, dateTimeConvert);

                //Loop for creating hash/salt and adding users to the context
                foreach (var user in users)
                {
                    byte[] passwordHash, passwordSalt;

                    CreatePasswordHash("password", out passwordHash, out passwordSalt);
                    user.PasswordHash = passwordHash;
                    user.PasswordSalt = passwordSalt;
                    user.Username = user.Username.ToLower();
                    context.Users.Add(user);
                }
                context.SaveChanges();      //Take from RAM add to hard drive
            }
        }

        public static void SeedProjects(DataContext context)
        {
            if (!context.Projects.Any())
            {
                var projectData = System.IO.File.ReadAllText("Data/ProjectSeedData.json");
                var projects = JsonConvert.DeserializeObject<List<Project>>(projectData);

                foreach (var project in projects)
                {
                    context.Projects.Add(project);
                }
                context.SaveChanges();
            }
        }

        private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
		{
           
            using(var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
		}    }
}