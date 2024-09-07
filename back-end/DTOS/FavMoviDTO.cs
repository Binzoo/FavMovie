using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.DTOS
{
    public class FavMoviDTO
    {
        [Required]
        public string? Title { get; set; }
        [Required]
        public string? ReleaseDate { get; set; }
        [Required]
        public string? MovieRating { get; set; }
        [Required]
        public string? MovieDescription { get; set; }
        [Required]
        public string? MovieImage { get; set; }
    }
}