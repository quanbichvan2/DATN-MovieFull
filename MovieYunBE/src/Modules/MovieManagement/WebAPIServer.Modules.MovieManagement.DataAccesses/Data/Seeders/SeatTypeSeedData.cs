﻿using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using WebAPIServer.Modules.MovieManagement.Domain.Entities;

namespace WebAPIServer.Modules.MovieManagement.DataAccesses.Data.Seeders
{
    internal static class SeatTypeSeedData
    {
        public static void Initialize(this IServiceProvider serviceProvider)
        {
            using (var context = new MovieManagementDbContext(serviceProvider.GetRequiredService<DbContextOptions<MovieManagementDbContext>>()))
            {
                if (!context.SeatTypes.Any())
                {
                    context.SeatTypes.AddRange(
                        new SeatType
                        {
                            Id = SeatTypeConstants.Regular,
                            Name = "Ghế thường",
                            Code = "regular",
                            Price = 55000
                        },
                        new SeatType
                        {
                            Id = SeatTypeConstants.Vip,
                            Name = "Ghế VIP",
                            Code = "vip",
                            Price = 75000
                        },
                        new SeatType
                        {
                            Id = SeatTypeConstants.Couple,
                            Name = "Ghế đôi",
                            Code = "couple",
                            Price = 130000
                        }
                    );
                    context.SaveChanges();
                }
            }
        }
    }
}
