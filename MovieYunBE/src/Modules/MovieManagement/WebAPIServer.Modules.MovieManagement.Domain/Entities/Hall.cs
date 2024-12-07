using WebAPIServer.Shared.Abstractions.Entities;

namespace WebAPIServer.Modules.MovieManagement.Domain.Entities
{
    public class Hall : BaseAuditableEntity
    {
        public string CinemaName { get; private set; } = "7 Anh Em Cinema";
        public string Name { get; set; } = default!;
        public byte TotalSeat { get; private set; }

        public virtual ICollection<Seat> Seats { get; set; } = new List<Seat>();
    }
}