namespace WebAPIServer.Modules.Booking.Businesses.Dtos
{
    public class SeatDto
	{
		public Guid Id { get; set; }
        public string Type { get; set; } = default!;
		public string SeatPosition { get; set; } = default!;
        public double Price { get; set; }
	}
}