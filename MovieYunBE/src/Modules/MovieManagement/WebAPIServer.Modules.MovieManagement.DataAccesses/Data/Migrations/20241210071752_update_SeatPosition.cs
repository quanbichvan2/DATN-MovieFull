using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebAPIServer.Modules.MovieManagement.DataAccesses.Data.Migrations
{
    /// <inheritdoc />
    public partial class update_SeatPosition : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "SeatNumber",
                schema: "movie_management",
                table: "Seats",
                newName: "SeatPosition");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "SeatPosition",
                schema: "movie_management",
                table: "Seats",
                newName: "SeatNumber");
        }
    }
}
