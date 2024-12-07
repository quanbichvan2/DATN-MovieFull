﻿using Microsoft.EntityFrameworkCore;
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
					context.Halls.AddRange(
						new Hall
						{
							Id = Guid.Parse("7a8d4dea-15dd-4cdd-ad10-0ae010106891"),
							Name = "Rạp 1",
							Seats = new List<Seat>
							{
								new Seat
								{
									Id = Guid.NewGuid(),
									Diagram = @"[
                                      {
                                        ""row"": ""A"",
                                        ""seats"": [
                                          {
                                            ""seatNumber"": ""A1"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""A2"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""A3"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""A4"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""A5"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""A6"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""A7"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""A8"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""A9"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""A10"",
                                            ""type"": ""regular""
                                          }
                                        ]
                                      },
                                      {
                                        ""row"": ""B"",
                                        ""seats"": [
                                          {
                                            ""seatNumber"": ""B1"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""B2"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""B3"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""B4"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""B5"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""B6"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""B7"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""B8"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""B9"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""B10"",
                                            ""type"": ""regular""
                                          }
                                        ]
                                      },
                                      {
                                        ""row"": ""C"",
                                        ""seats"": [
                                          {
                                            ""seatNumber"": ""C1"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""C2"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""C3"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""C4"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""C5"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""C6"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""C7"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""C8"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""C9"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""C10"",
                                            ""type"": ""regular""
                                          }
                                        ]
                                      },
                                      {
                                        ""row"": ""D"",
                                        ""seats"": [
                                          {
                                            ""seatNumber"": ""D1"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""D2"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""D3"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""D4"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""D5"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""D6"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""D7"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""D8"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""D9"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""D10"",
                                            ""type"": ""regular""
                                          }
                                        ]
                                      },
                                      {
                                        ""row"": ""E"",
                                        ""seats"": [
                                          {
                                            ""seatNumber"": ""E1"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""E2"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""E3"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""E4"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""E5"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""E6"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""E7"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""E8"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""E9"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""E10"",
                                            ""type"": ""regular""
                                          }
                                        ]
                                      },
                                      {
                                        ""row"": ""F"",
                                        ""seats"": [
                                          {
                                            ""seatNumber"": ""F1"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""F2"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""F3"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""F4"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""F5"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""F6"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""F7"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""F8"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""F9"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""F10"",
                                            ""type"": ""regular""
                                          }
                                        ]
                                      },
                                      {
                                        ""row"": ""G"",
                                        ""seats"": [
                                          {
                                            ""seatNumber"": ""G1"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""G2"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""G3"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""G4"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""G5"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""G6"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""G7"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""G8"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""G9"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""G10"",
                                            ""type"": ""regular""
                                          }
                                        ]
                                      },
                                      {
                                        ""row"": ""H"",
                                        ""seats"": [
                                          {
                                            ""seatNumber"": ""H1"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""H2"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""H3"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""H4"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""H5"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""H6"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""H7"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""H8"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""H9"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""H10"",
                                            ""type"": ""regular""
                                          }
                                        ]
                                      },
                                      {
                                        ""row"": ""I"",
                                        ""seats"": [
                                          {
                                            ""seatNumber"": ""I1"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""I2"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""I3"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""I4"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""I5"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""I6"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""I7"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""I8"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""I9"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""I10"",
                                            ""type"": ""regular""
                                          }
                                        ]
                                      },
                                      {
                                        ""row"": ""J"",
                                        ""seats"": [
                                          {
                                            ""seatNumber"": ""J1"",
                                            ""type"": ""couple""
                                          },
                                          {
                                            ""seatNumber"": ""J2"",
                                            ""type"": ""couple""
                                          },
                                          {
                                            ""seatNumber"": ""J3"",
                                            ""type"": ""couple""
                                          },
                                          {
                                            ""seatNumber"": ""J4"",
                                            ""type"": ""couple""
                                          },
                                          {
                                            ""seatNumber"": ""J5"",
                                            ""type"": ""couple""
                                          },
                                          {
                                            ""seatNumber"": ""J6"",
                                            ""type"": ""couple""
                                          },
                                          {
                                            ""seatNumber"": ""J7"",
                                            ""type"": ""couple""
                                          },
                                          {
                                            ""seatNumber"": ""J8"",
                                            ""type"": ""couple""
                                          },
                                          {
                                            ""seatNumber"": ""J9"",
                                            ""type"": ""couple""
                                          },
                                          {
                                            ""seatNumber"": ""J10"",
                                            ""type"": ""couple""
                                          }
                                        ]
                                      }
                                    ]
									"
                                }
							},
						},
						new Hall
						{
							Id = Guid.Parse("7a8d4dea-15dd-4cdd-ad10-0ae010106892"),
							Name = "Rạp 2",
							Seats = new List<Seat>
							{
								new Seat
								{
									Id = Guid.NewGuid(),
                                    Diagram = @"[
                                      {
                                        ""row"": ""A"",
                                        ""seats"": [
                                          {
                                            ""seatNumber"": ""A1"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""A2"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""A3"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""A4"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""A5"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""A6"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""A7"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""A8"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""A9"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""A10"",
                                            ""type"": ""regular""
                                          }
                                        ]
                                      },
                                      {
                                        ""row"": ""B"",
                                        ""seats"": [
                                          {
                                            ""seatNumber"": ""B1"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""B2"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""B3"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""B4"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""B5"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""B6"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""B7"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""B8"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""B9"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""B10"",
                                            ""type"": ""regular""
                                          }
                                        ]
                                      },
                                      {
                                        ""row"": ""C"",
                                        ""seats"": [
                                          {
                                            ""seatNumber"": ""C1"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""C2"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""C3"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""C4"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""C5"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""C6"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""C7"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""C8"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""C9"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""C10"",
                                            ""type"": ""regular""
                                          }
                                        ]
                                      },
                                      {
                                        ""row"": ""D"",
                                        ""seats"": [
                                          {
                                            ""seatNumber"": ""D1"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""D2"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""D3"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""D4"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""D5"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""D6"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""D7"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""D8"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""D9"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""D10"",
                                            ""type"": ""regular""
                                          }
                                        ]
                                      },
                                      {
                                        ""row"": ""E"",
                                        ""seats"": [
                                          {
                                            ""seatNumber"": ""E1"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""E2"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""E3"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""E4"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""E5"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""E6"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""E7"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""E8"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""E9"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""E10"",
                                            ""type"": ""regular""
                                          }
                                        ]
                                      },
                                      {
                                        ""row"": ""F"",
                                        ""seats"": [
                                          {
                                            ""seatNumber"": ""F1"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""F2"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""F3"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""F4"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""F5"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""F6"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""F7"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""F8"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""F9"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""F10"",
                                            ""type"": ""regular""
                                          }
                                        ]
                                      },
                                      {
                                        ""row"": ""G"",
                                        ""seats"": [
                                          {
                                            ""seatNumber"": ""G1"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""G2"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""G3"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""G4"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""G5"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""G6"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""G7"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""G8"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""G9"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""G10"",
                                            ""type"": ""regular""
                                          }
                                        ]
                                      },
                                      {
                                        ""row"": ""H"",
                                        ""seats"": [
                                          {
                                            ""seatNumber"": ""H1"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""H2"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""H3"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""H4"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""H5"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""H6"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""H7"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""H8"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""H9"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""H10"",
                                            ""type"": ""regular""
                                          }
                                        ]
                                      },
                                      {
                                        ""row"": ""I"",
                                        ""seats"": [
                                          {
                                            ""seatNumber"": ""I1"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""I2"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""I3"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""I4"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""I5"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""I6"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""I7"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""I8"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""I9"",
                                            ""type"": ""regular""
                                          },
                                          {
                                            ""seatNumber"": ""I10"",
                                            ""type"": ""regular""
                                          }
                                        ]
                                      },
                                      {
                                        ""row"": ""J"",
                                        ""seats"": [
                                          {
                                            ""seatNumber"": ""J1"",
                                            ""type"": ""couple""
                                          },
                                          {
                                            ""seatNumber"": ""J2"",
                                            ""type"": ""couple""
                                          },
                                          {
                                            ""seatNumber"": ""J3"",
                                            ""type"": ""couple""
                                          },
                                          {
                                            ""seatNumber"": ""J4"",
                                            ""type"": ""couple""
                                          },
                                          {
                                            ""seatNumber"": ""J5"",
                                            ""type"": ""couple""
                                          },
                                          {
                                            ""seatNumber"": ""J6"",
                                            ""type"": ""couple""
                                          },
                                          {
                                            ""seatNumber"": ""J7"",
                                            ""type"": ""couple""
                                          },
                                          {
                                            ""seatNumber"": ""J8"",
                                            ""type"": ""couple""
                                          },
                                          {
                                            ""seatNumber"": ""J9"",
                                            ""type"": ""couple""
                                          },
                                          {
                                            ""seatNumber"": ""J10"",
                                            ""type"": ""couple""
                                          }
                                        ]
                                      }
                                    ]
									"
                                }
							}
						}
					);
					context.SaveChanges();
				}
			}
		}
	}
}
