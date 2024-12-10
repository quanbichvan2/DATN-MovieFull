using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using WebAPIServer.Modules.MovieManagement.Domain.Entities;

namespace WebAPIServer.Modules.MovieManagement.DataAccesses.Data.Seeders
{
	internal static class HallSeedData
	{
		public static void Initialize(this IServiceProvider serviceProvider)
		{
			using (var context = new MovieManagementDbContext(serviceProvider
				.GetRequiredService<DbContextOptions<MovieManagementDbContext>>()))
			{
				

                if (!context.Halls.Any())
				{
                    var rap1Id = Guid.Parse("7a8d4dea-15dd-4cdd-ad10-0ae010106891");
                    var cinema1 = new Hall()
					{
						Id = rap1Id,
						Name = "Rạp 1",
						TotalSeat = 100,
						Address = "100 Trần Hưng Đạo",
						Seats = GenerateSeatDiagram(rap1Id)
					};

					context.Halls.Add(cinema1);

					var rap2Id = Guid.Parse("7a8d4dea-15dd-4cdd-ad10-0ae010106892");
                    var cinema2 = new Hall()
                    {
                        Id = rap2Id,
                        Name = "Rạp 2",
                        Address = "100 Trần Hưng Đạo",
                        TotalSeat = 100,
                        Seats = GenerateSeatDiagram(rap2Id)
                    };

                    context.Halls.Add(cinema2);
                    context.SaveChanges();
				}
			}
		}

        private static List<Seat> GenerateSeatDiagram(Guid hallId)
        {
			var results = new List<Seat>();
			string[] rows = { "A", "B", "C", "D", "E", "F", "G", "H", "I", "J" };
			foreach (var row in rows)
			{
				for (var i = 0; i < rows.Length; i++)
				{
					var typeId = row == "J" ? SeatTypeConstants.Couple : SeatTypeConstants.Regular;
					var seat = new Seat()
					{
						HallId = hallId,
						Id = Guid.NewGuid(),
						Row = row,
						SeatPosition = row + (i + 1).ToString("D2"),
						TypeId = typeId,
					};

					results.Add(seat);
				}
			}

			return results;
        }
	}
}



