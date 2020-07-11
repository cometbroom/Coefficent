using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Coefficent.API.Data;
using Coefficent.API.Dtos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Coefficent.API.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class ProjectsController : ControllerBase
	{
		private readonly IProjectRepository _repo;
		private readonly IMapper _mapper;

		public ProjectsController(IProjectRepository repo, IMapper mapper)
		{
			_mapper = mapper;
			_repo = repo;
		}

		[HttpGet]
		public async Task<IActionResult> GetProjects()    //IActionResult lets you return an Http response instead of plain text
		{
			var projects = await _repo.GetProjects();   //To list async is in MECore
														//Most collection methods have async methods?
			var projectsToReturn = _mapper.Map<IEnumerable<ProjectForListDto>>(projects);


			return Ok(projectsToReturn);  //IActionResult needs the ok method which make an http response.
		}

		[HttpGet("{id}")]
		public async Task<IActionResult> GetProject(int id)
		{
			var project = await _repo.GetProject(id);
			var projecToReturn = _mapper.Map<ProjectForListDto>(project);

			return Ok(projecToReturn);
		}
	}
}