using System;
using Microsoft.AspNetCore.Identity;

namespace back_end.Data;

public class AppUser : IdentityUser
{
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public string? Description { get; set; }
}
