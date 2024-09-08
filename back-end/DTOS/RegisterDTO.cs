using Microsoft.Identity.Client;
using System;
using System.ComponentModel.DataAnnotations;

namespace back_end.DTOS;

public class RegisterDTO
{
    [Required]
    public string? UserName { get; set; }
    [Required]
    public string? FirstName { get; set; }
    [Required]
    public string? LastName { get; set; }
    [Required]
    public string? Email { get; set; }
    [Required]
    public string? DescribeYourSelf { get; set; }
    [Required]
    public string? Password { get; set; }
    [Required]
    public string? ConfirmPassword { get; set; }
}
