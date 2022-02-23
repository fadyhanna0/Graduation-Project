using Microsoft.EntityFrameworkCore.Migrations;

namespace Graduation_Project.EF.Migrations
{
    public partial class uodate1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderItems_Products_ProductsId",
                table: "OrderItems");

            migrationBuilder.DropIndex(
                name: "IX_OrderItems_ProductsId",
                table: "OrderItems");

            migrationBuilder.DropColumn(
                name: "ProductsId",
                table: "OrderItems");

            migrationBuilder.RenameColumn(
                name: "Food_Id",
                table: "OrderItems",
                newName: "Product_Id");

            migrationBuilder.CreateIndex(
                name: "IX_OrderItems_Product_Id",
                table: "OrderItems",
                column: "Product_Id");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderItems_Products_Product_Id",
                table: "OrderItems",
                column: "Product_Id",
                principalTable: "Products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderItems_Products_Product_Id",
                table: "OrderItems");

            migrationBuilder.DropIndex(
                name: "IX_OrderItems_Product_Id",
                table: "OrderItems");

            migrationBuilder.RenameColumn(
                name: "Product_Id",
                table: "OrderItems",
                newName: "Food_Id");

            migrationBuilder.AddColumn<int>(
                name: "ProductsId",
                table: "OrderItems",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_OrderItems_ProductsId",
                table: "OrderItems",
                column: "ProductsId");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderItems_Products_ProductsId",
                table: "OrderItems",
                column: "ProductsId",
                principalTable: "Products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
