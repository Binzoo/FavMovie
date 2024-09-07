using System;

namespace back_end.DTOS;

public class RegisterDTO
{
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public string? Email { get; set; }
    public string? DescribeYourSelf { get; set; }
    public string? Password { get; set; }
    public string? ConfirmPassword { get; set; }
}
