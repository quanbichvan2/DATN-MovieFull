using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebAPIServer.Modules.MovieManagement.DataAccesses.Data.Migrations
{
    /// <inheritdoc />
    public partial class Alter_SeatType_AddCode : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Code",
                schema: "movie_management",
                table: "SeatTypes",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Code",
                schema: "movie_management",
                table: "SeatTypes");
        }
    }
}
