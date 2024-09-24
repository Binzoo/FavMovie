using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.ConstrainedExecution;
using System.Threading.Tasks;

namespace back_end.DTOS
{
    public class FeatureMovieDTO
    {
        public string? Title { get; set; }
        public string? ReleaseDate { get; set; }
        public string? MovieImage { get; set; }
        public string? Rating { get; set; }
    }
}