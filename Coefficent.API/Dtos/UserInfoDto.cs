using System;
using System.Collections.Generic;
using Coefficent.API.Models;

namespace Coefficent.API.Dtos
{
    public class UserInfoDto
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public DateTime Created { get; set; }
        public string Bio { get; set; }
        public string Interests { get; set; }
        public ICollection<Photo> Photos { get; set; }
    }
}