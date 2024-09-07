using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using back_end.Data;
using Microsoft.Identity.Client;

namespace back_end.Model
{
    public class FavMovie
    {
        [Key]
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? ReleaseDate { get; set; }
        public string? MovieRating { get; set; }
        public string? MovieDescription { get; set; }
        public string? MovieImage { get; set; }
        public string? AppUserId { get; set; }
        public AppUser? AppUser { get; set; }
    }
}