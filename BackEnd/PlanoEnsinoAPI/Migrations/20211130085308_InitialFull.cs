using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PlanoEnsinoAPI.Migrations
{
    public partial class InitialFull : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Autor",
                columns: table => new
                {
                    CdAutor = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nome = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Autor", x => x.CdAutor);
                });

            migrationBuilder.CreateTable(
                name: "Curso",
                columns: table => new
                {
                    CdCurso = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DsCurso = table.Column<string>(nullable: true),
                    TpGraduacao = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Curso", x => x.CdCurso);
                });

            migrationBuilder.CreateTable(
                name: "Livro",
                columns: table => new
                {
                    CdLivro = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DsLivro = table.Column<string>(nullable: true),
                    Editora = table.Column<string>(nullable: true),
                    Ano = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Livro", x => x.CdLivro);
                });

            migrationBuilder.CreateTable(
                name: "PlanoEnsino",
                columns: table => new
                {
                    CdDisciplina = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DsDisciplina = table.Column<string>(nullable: true),
                    NrCreditos = table.Column<int>(nullable: false),
                    NrHorasSala = table.Column<int>(nullable: false),
                    NrHorasPP = table.Column<int>(nullable: false),
                    AnoSemestre = table.Column<string>(nullable: true),
                    DsEmenta = table.Column<string>(nullable: true),
                    DsObjetivo = table.Column<string>(nullable: true),
                    DsMTDGeral = table.Column<string>(nullable: true),
                    DsObservacao = table.Column<string>(nullable: true),
                    NomeA1 = table.Column<string>(nullable: true),
                    PesoA1 = table.Column<string>(nullable: true),
                    DsAlunoA1 = table.Column<string>(nullable: true),
                    DsConsultaA1 = table.Column<string>(nullable: true),
                    DsAvaliacaoA1 = table.Column<string>(nullable: true),
                    DsConteudoA1 = table.Column<string>(nullable: true),
                    DsObservacaoA1 = table.Column<string>(nullable: true),
                    NomeA2 = table.Column<string>(nullable: true),
                    PesoA2 = table.Column<string>(nullable: true),
                    DsAlunoA2 = table.Column<string>(nullable: true),
                    DsConsultaA2 = table.Column<string>(nullable: true),
                    DsAvaliacaoA2 = table.Column<string>(nullable: true),
                    DsConteudoA2 = table.Column<string>(nullable: true),
                    DsObservacaoA2 = table.Column<string>(nullable: true),
                    NomeA3 = table.Column<string>(nullable: true),
                    PesoA3 = table.Column<string>(nullable: true),
                    DsAlunoA3 = table.Column<string>(nullable: true),
                    DsConsultaA3 = table.Column<string>(nullable: true),
                    DsAvaliacaoA3 = table.Column<string>(nullable: true),
                    DsConteudoA3 = table.Column<string>(nullable: true),
                    DsObservacaoA3 = table.Column<string>(nullable: true),
                    NomeA4 = table.Column<string>(nullable: true),
                    PesoA4 = table.Column<string>(nullable: true),
                    DsAlunoA4 = table.Column<string>(nullable: true),
                    DsConsultaA4 = table.Column<string>(nullable: true),
                    DsAvaliacaoA4 = table.Column<string>(nullable: true),
                    DsConteudoA4 = table.Column<string>(nullable: true),
                    DsObservacaoA4 = table.Column<string>(nullable: true),
                    DsSemana1 = table.Column<string>(nullable: true),
                    DsSemana2 = table.Column<string>(nullable: true),
                    DsSemana3 = table.Column<string>(nullable: true),
                    DsSemana4 = table.Column<string>(nullable: true),
                    DsSemana5 = table.Column<string>(nullable: true),
                    DsSemana6 = table.Column<string>(nullable: true),
                    DsSemana7 = table.Column<string>(nullable: true),
                    DsSemana8 = table.Column<string>(nullable: true),
                    DsSemana9 = table.Column<string>(nullable: true),
                    DsSemana10 = table.Column<string>(nullable: true),
                    DsSemana11 = table.Column<string>(nullable: true),
                    DsSemana12 = table.Column<string>(nullable: true),
                    DsSemana13 = table.Column<string>(nullable: true),
                    DsSemana14 = table.Column<string>(nullable: true),
                    DsSemana15 = table.Column<string>(nullable: true),
                    DsSemana16 = table.Column<string>(nullable: true),
                    DsSemana17 = table.Column<string>(nullable: true),
                    DsSemana18 = table.Column<string>(nullable: true),
                    DsSemana19 = table.Column<string>(nullable: true),
                    DsSemana20 = table.Column<string>(nullable: true),
                    Status = table.Column<string>(nullable: true),
                    DtAtualização = table.Column<DateTime>(nullable: false, defaultValueSql: "getdate()")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PlanoEnsino", x => x.CdDisciplina);
                });

            migrationBuilder.CreateTable(
                name: "Usuario",
                columns: table => new
                {
                    CdUsuario = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nome = table.Column<string>(nullable: true),
                    Login = table.Column<string>(nullable: true),
                    Senha = table.Column<string>(nullable: true),
                    TpUsuario = table.Column<string>(nullable: true),
                    Status = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuario", x => x.CdUsuario);
                });

            migrationBuilder.CreateTable(
                name: "LivroAutor",
                columns: table => new
                {
                    CdLivro = table.Column<int>(nullable: false),
                    CdAutor = table.Column<int>(nullable: false),
                    CdLivroAutor = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LivroAutor", x => new { x.CdLivro, x.CdAutor });
                    table.ForeignKey(
                        name: "FK_LivroAutor_Autor_CdAutor",
                        column: x => x.CdAutor,
                        principalTable: "Autor",
                        principalColumn: "CdAutor",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_LivroAutor_Livro_CdLivro",
                        column: x => x.CdLivro,
                        principalTable: "Livro",
                        principalColumn: "CdLivro",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CursoPlanoEnsino",
                columns: table => new
                {
                    CdCurso = table.Column<int>(nullable: false),
                    CdDisciplina = table.Column<int>(nullable: false),
                    CdCursoPlanoEnsino = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CursoPlanoEnsino", x => new { x.CdCurso, x.CdDisciplina });
                    table.ForeignKey(
                        name: "FK_CursoPlanoEnsino_Curso_CdCurso",
                        column: x => x.CdCurso,
                        principalTable: "Curso",
                        principalColumn: "CdCurso",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CursoPlanoEnsino_PlanoEnsino_CdDisciplina",
                        column: x => x.CdDisciplina,
                        principalTable: "PlanoEnsino",
                        principalColumn: "CdDisciplina",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LivroPlanoEnsino",
                columns: table => new
                {
                    CdLivro = table.Column<int>(nullable: false),
                    CdDisciplina = table.Column<int>(nullable: false),
                    CdLivroPlanoEnsino = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TpBibliografia = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LivroPlanoEnsino", x => new { x.CdLivro, x.CdDisciplina });
                    table.ForeignKey(
                        name: "FK_LivroPlanoEnsino_PlanoEnsino_CdDisciplina",
                        column: x => x.CdDisciplina,
                        principalTable: "PlanoEnsino",
                        principalColumn: "CdDisciplina",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_LivroPlanoEnsino_Livro_CdLivro",
                        column: x => x.CdLivro,
                        principalTable: "Livro",
                        principalColumn: "CdLivro",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SugestaoPlanoEnsino",
                columns: table => new
                {
                    CdSugestaoPlanoEnsino = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CdDisciplina = table.Column<int>(nullable: false),
                    DsSugestaoPlanoEnsino = table.Column<string>(nullable: true),
                    DsInclusaoBasica = table.Column<string>(nullable: true),
                    DsExclusaoBasica = table.Column<string>(nullable: true),
                    DsInclusaoComplementar = table.Column<string>(nullable: true),
                    DsExclusaoComplementar = table.Column<string>(nullable: true),
                    DtCadastroSugestao = table.Column<DateTime>(nullable: false, defaultValueSql: "getdate()"),
                    PlanoEnsinoCdDisciplina = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SugestaoPlanoEnsino", x => x.CdSugestaoPlanoEnsino);
                    table.ForeignKey(
                        name: "FK_SugestaoPlanoEnsino_PlanoEnsino_PlanoEnsinoCdDisciplina",
                        column: x => x.PlanoEnsinoCdDisciplina,
                        principalTable: "PlanoEnsino",
                        principalColumn: "CdDisciplina",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "UsuarioPlanoEnsino",
                columns: table => new
                {
                    CdUsuario = table.Column<int>(nullable: false),
                    CdDisciplina = table.Column<int>(nullable: false),
                    CdUsuarioPlanoEnsino = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UsuarioPlanoEnsino", x => new { x.CdUsuario, x.CdDisciplina });
                    table.ForeignKey(
                        name: "FK_UsuarioPlanoEnsino_PlanoEnsino_CdDisciplina",
                        column: x => x.CdDisciplina,
                        principalTable: "PlanoEnsino",
                        principalColumn: "CdDisciplina",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UsuarioPlanoEnsino_Usuario_CdUsuario",
                        column: x => x.CdUsuario,
                        principalTable: "Usuario",
                        principalColumn: "CdUsuario",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CursoPlanoEnsino_CdDisciplina",
                table: "CursoPlanoEnsino",
                column: "CdDisciplina");

            migrationBuilder.CreateIndex(
                name: "IX_LivroAutor_CdAutor",
                table: "LivroAutor",
                column: "CdAutor");

            migrationBuilder.CreateIndex(
                name: "IX_LivroPlanoEnsino_CdDisciplina",
                table: "LivroPlanoEnsino",
                column: "CdDisciplina");

            migrationBuilder.CreateIndex(
                name: "IX_SugestaoPlanoEnsino_PlanoEnsinoCdDisciplina",
                table: "SugestaoPlanoEnsino",
                column: "PlanoEnsinoCdDisciplina");

            migrationBuilder.CreateIndex(
                name: "IX_UsuarioPlanoEnsino_CdDisciplina",
                table: "UsuarioPlanoEnsino",
                column: "CdDisciplina");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CursoPlanoEnsino");

            migrationBuilder.DropTable(
                name: "LivroAutor");

            migrationBuilder.DropTable(
                name: "LivroPlanoEnsino");

            migrationBuilder.DropTable(
                name: "SugestaoPlanoEnsino");

            migrationBuilder.DropTable(
                name: "UsuarioPlanoEnsino");

            migrationBuilder.DropTable(
                name: "Curso");

            migrationBuilder.DropTable(
                name: "Autor");

            migrationBuilder.DropTable(
                name: "Livro");

            migrationBuilder.DropTable(
                name: "PlanoEnsino");

            migrationBuilder.DropTable(
                name: "Usuario");
        }
    }
}
