using System.ComponentModel.DataAnnotations.Schema;
using WebAPIServer.Shared.Abstractions.Entities;

namespace WebAPIServer.Modules.MovieManagement.Domain.Entities
{
    public class Seat : BaseAuditableEntity
    {
        public string SeatNumber { get; set; } = default!;
        public string Row { get; set; } = default!;
        public bool IsPurchased { get; set; }

        [ForeignKey(nameof(Hall))]
        public Guid HallId { get; set; }
        public virtual Hall? Hall { get; set; }

        [ForeignKey(nameof(Type))]
        public Guid TypeId { get; set; }
        public virtual SeatType? Type { get; set; }
    }
}
