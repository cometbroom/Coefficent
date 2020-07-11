using System.Threading.Tasks;
using Coefficent.API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Coefficent.API.Controllers
{
    [Route("api/[controller]")]
	[ApiController]
    public class DataController : ControllerBase
    {
		private readonly DataContext _context;

		public DataController(DataContext context)
        {
            _context = context;
        }
        
		[HttpGet]
		public async Task<IActionResult> GetValues()    //IActionResult lets you return an Http response instead of plain text
		{
            var     values = await _context.Users.ToListAsync();   //To list async is in MECore
                                                    //Most collection methods have async methods?

            return Ok(values);  //IActionResult needs the ok method which make an http response.
		}
    }


}