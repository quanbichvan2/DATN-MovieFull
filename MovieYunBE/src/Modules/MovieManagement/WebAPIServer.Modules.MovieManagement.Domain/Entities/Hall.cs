using WebAPIServer.Shared.Abstractions.Entities;

namespace WebAPIServer.Modules.MovieManagement.Domain.Entities
{
    public class Hall : BaseAuditableEntity
    {
        public string Address { get; set; } = default!;
        public string Name { get; set; } = default!;
        public int TotalSeat { get; set; }
        public virtual ICollection<Seat> Seats { get; set; } = new List<Seat>();
    }
}