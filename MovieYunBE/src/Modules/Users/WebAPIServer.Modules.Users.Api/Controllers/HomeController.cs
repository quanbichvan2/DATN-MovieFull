﻿using Microsoft.AspNetCore.Mvc;

namespace WebAPIServer.Modules.Users.Api.Controllers
{
	[Route(BasePath)]
	internal class HomeController : BaseController
	{
		[HttpGet]
		public IActionResult Get()
		{
			return Ok("Users module");
		}
	}
}
