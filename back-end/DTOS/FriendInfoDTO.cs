using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using back_end.Model;

namespace back_end.DTOS
{
    public class FriendInfoDTO
    {
        public string? UserName { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? DescribeYourSelf { get; set; }
        public List<FavMoviDTO> FeatureMovieDTOs { get; set; }
    }
}