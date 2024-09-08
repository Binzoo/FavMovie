using System.IdentityModel.Tokens.Jwt;
using System.Runtime.ConstrainedExecution;
using System.Security.Claims;
using System.Text;
using back_end.Data;
using back_end.DTOS;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace back_end.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        public readonly UserManager<AppUser> _userManager;
        public readonly SignInManager<AppUser> _signInManger;
        private readonly IConfiguration _configuration;


        public AccountController(UserManager<AppUser> userManager, SignInManager<AppUser> signInManger, IConfiguration configuration)
        {
            _userManager = userManager;
            _signInManger = signInManger;
            _configuration = configuration;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterDTO model)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest("Please input all reqired fields.");
                }

                if (model.Password != model.ConfirmPassword)
                {
                    return BadRequest("Password do not match");
                }

                var usernameExist = await _userManager.FindByNameAsync(model.UserName);

                if (usernameExist != null)
                {
                    return BadRequest(new
                    {
                        message = "Username already exist."
                    });
                }

                var user = new AppUser
                {
                    UserName = model.UserName,
                    FirstName = model.FirstName,
                    LastName = model.LastName,
                    Description = model.DescribeYourSelf,
                    Email = model.Email,
                };
                var result = await _userManager.CreateAsync(user, model.Password);
                if (result.Succeeded)
                {
                    return Ok(new
                    {
                        Username = user.UserName
                    });
                }
                return BadRequest(result.Errors);
            }
            catch (Exception ex)
            {
                return BadRequest("Something went wrong.");
            }
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDTO model)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest("Please input all reqired fields.");
            }

            var user = await _userManager.FindByNameAsync(model.UserName);
            if (user == null)
            {
                return BadRequest(new { message = "User not found" });
            }

            var result = await _signInManger.PasswordSignInAsync(user, model.Password, isPersistent: false, lockoutOnFailure: false);
            if (result.Succeeded)
            {
                var token = GenerateJwtToken(user);
                return Ok(new { token = token });
            }

            return Unauthorized(new { message = "Invalid credentials" });

        }


        private string GenerateJwtToken(IdentityUser user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_configuration["Jwt:Key"]);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim("nameid", user.Id),
                    new Claim(ClaimTypes.Email, user.Email)
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature),
                Issuer = _configuration["Jwt:Issuer"],
                Audience = _configuration["Jwt:Audience"]
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
