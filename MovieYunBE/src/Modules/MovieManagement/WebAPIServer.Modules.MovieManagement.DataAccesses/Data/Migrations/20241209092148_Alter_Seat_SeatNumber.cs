using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebAPIServer.Modules.MovieManagement.DataAccesses.Data.Migrations
{
    /// <inheritdoc />
    public partial class Alter_Seat_SeatNumber : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "SeatName",
                schema: "movie_management",
                table: "Seats",
                newName: "SeatNumber");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "SeatNumber",
                schema: "movie_management",
                table: "Seats",
                newName: "SeatName");
        }
    }
}
