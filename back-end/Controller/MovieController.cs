using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using back_end.Data;
using back_end.DTOS;
using back_end.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace back_end.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class MovieController : ControllerBase
    {
        private readonly ApplicationDbContext _applicationDbContext;
        public MovieController(ApplicationDbContext applicationDbContext)
        {
            _applicationDbContext = applicationDbContext;
        }

        [Authorize]
        [HttpGet("test-claims")]
        public IActionResult TestClaims()
        {
            var userId = User.FindFirst("http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")?.Value;
            return Ok(new { UserId = userId, Claims = User.Claims.Select(c => new { c.Type, c.Value }) });
        }


        [Authorize]
        [HttpPost]
        public async Task<IActionResult> CreateFavMovie([FromBody] FavMoviDTO model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var userId = User.FindFirst("http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")?.Value;

            if(userId == null)
            {
                return Unauthorized("You are unauthorized to add movies.");
            }

            FavMovie favMovie = new FavMovie
            {
                Title = model.Title,
                ReleaseDate = model.ReleaseDate,
                MovieRating = model.MovieRating,
                MovieImage = model.MovieImage,
                MovieDescription = model.MovieDescription,
                AppUserId = userId
            };
            await _applicationDbContext.FavMovie.AddAsync(favMovie);
            await _applicationDbContext.SaveChangesAsync();
            return Ok(new
            {
                message = "Movie Added."
            });
        }

    }
}