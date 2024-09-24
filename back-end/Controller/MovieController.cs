using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Threading.Tasks;
using back_end.Data;
using back_end.DTOS;
using back_end.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
        [HttpPost]
        public async Task<IActionResult> CreateFavMovie([FromBody] FavMoviDTO model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var userId = User.FindFirst("http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")?.Value;

            if (userId == null)
            {
                return Unauthorized("You are unauthorized to add movies.");
            }

            var movies = await _applicationDbContext.FavMovie.Where(e => e.AppUserId == userId).ToListAsync();

            if (movies.Count >= 10)
            {
                return BadRequest("You have added your top 10 movies.");
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

        [Authorize]
        [HttpDelete]
        public async Task<IActionResult> DeleteMovie(int id)
        {
            var userId = User.FindFirst("http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")?.Value;
            if (userId == null)
            {
                return Unauthorized("You are unauthorized to add movies.");
            }
            var movie = await _applicationDbContext.FavMovie.Where(e => e.Id == id).FirstOrDefaultAsync();
            if (movie == null)
            {
                return BadRequest("Movie not found.");
            }

            _applicationDbContext.FavMovie.Remove(movie);
            await _applicationDbContext.SaveChangesAsync();

            return Ok("Movie Removed Successfully.");
        }

        [Authorize]
        [HttpGet]
        public async Task<IActionResult> GetMovie()
        {
            var userId = User.FindFirst("http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")?.Value;
            var movies = await _applicationDbContext.FavMovie.Where(e => e.AppUserId == userId).ToListAsync();
            return Ok(movies);
        }

        [HttpGet("featured-movies")]
        public async Task<ActionResult> GetTop5EntitiesAsync()
        {
            var featuredMovie = await _applicationDbContext.FavMovie.OrderBy(e => e.Id).Take(4).Select(e => new FeatureMovieDTO
            {
                Title = e.Title,
                MovieImage = e.MovieImage,
                ReleaseDate = e.ReleaseDate,
                Rating = e.MovieRating
            }).ToListAsync();

            return Ok(featuredMovie);
        }
    }
}