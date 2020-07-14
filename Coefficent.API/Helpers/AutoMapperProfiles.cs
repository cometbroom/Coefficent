using AutoMapper;
using Coefficent.API.Dtos;
using Coefficent.API.Models;

namespace Coefficent.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Project, ProjectForListDto>();
            CreateMap<User, UserInfoDto>();  
        }
    }
}