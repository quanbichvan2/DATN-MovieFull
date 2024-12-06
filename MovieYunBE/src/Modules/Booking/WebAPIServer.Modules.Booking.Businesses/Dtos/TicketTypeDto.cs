﻿namespace WebAPIServer.Modules.Booking.Businesses.Dtos
{
	public class TicketTypeDto
	{
		public Guid Id { get; set; }
		public string Name { get; set; } = default!;
		public double Price { get; set; }
	}
}