using Microsoft.EntityFrameworkCore;
using PlanoEnsinoAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlanoEnsinoAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<Autor> Autor { get; set; }
        public DbSet<Curso> Curso { get; set; }
        public DbSet<CursoPlanoEnsino> CursoPlanoEnsino { get; set; }
        public DbSet<Livro> Livro { get; set; }
        public DbSet<LivroAutor> LivroAutor { get; set; }
        public DbSet<LivroPlanoEnsino> LivroPlanoEnsino { get; set; }
        public DbSet<PlanoEnsino> PlanoEnsino { get; set; }
        public DbSet<SugestaoPlanoEnsino> SugestaoPlanoEnsino { get; set; }
        public DbSet<Usuario> Usuario { get; set; }
        public DbSet<UsuarioPlanoEnsino> UsuarioPlanoEnsino { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {

            builder.Entity<Autor>()
              .HasKey(a => a.CdAutor);

            builder.Entity<Autor>()
                .Property(a => a.CdAutor).ValueGeneratedOnAdd();

            builder.Entity<Curso>()
             .HasKey(c => c.CdCurso);

            builder.Entity<Curso>()
             .Property(c => c.CdCurso).ValueGeneratedOnAdd();

            builder.Entity<CursoPlanoEnsino>()
             .HasKey(c => c.CdCursoPlanoEnsino);

            builder.Entity<CursoPlanoEnsino>()
             .Property(c => c.CdCursoPlanoEnsino).ValueGeneratedOnAdd();

            builder.Entity<CursoPlanoEnsino>()
                .HasKey(x => new { x.CdCurso, x.CdDisciplina });

            builder.Entity<Livro>()
             .HasKey(l => l.CdLivro);

            builder.Entity<Livro>()
              .Property(l => l.CdLivro).ValueGeneratedOnAdd();

            builder.Entity<LivroAutor>()
             .HasKey(c => c.CdLivroAutor);

            builder.Entity<LivroAutor>()
             .Property(c => c.CdLivroAutor).ValueGeneratedOnAdd();

            builder.Entity<LivroAutor>()
             .HasKey(la => new { la.CdLivro, la.CdAutor });
            
            builder.Entity<LivroPlanoEnsino>()
             .HasKey(c => c.CdLivroPlanoEnsino);

            builder.Entity<LivroPlanoEnsino>()
             .Property(c => c.CdLivroPlanoEnsino).ValueGeneratedOnAdd();

            builder.Entity<LivroPlanoEnsino>()
             .HasKey(lp => new { lp.CdLivro, lp.CdDisciplina});

            builder.Entity<PlanoEnsino>()
            .HasKey(p => p.CdDisciplina);

            builder.Entity<PlanoEnsino>()
             .Property(p => p.CdDisciplina).ValueGeneratedOnAdd();

            builder.Entity<PlanoEnsino>()
                .Property(p => p.DtAtualização).HasDefaultValueSql("getdate()");

            builder.Entity<SugestaoPlanoEnsino>()
            .HasKey(p => p.CdSugestaoPlanoEnsino);

            builder.Entity<SugestaoPlanoEnsino>()
            .Property(p => p.CdSugestaoPlanoEnsino).ValueGeneratedOnAdd();

            builder.Entity<SugestaoPlanoEnsino>()
                .Property(p => p.DtCadastroSugestao).HasDefaultValueSql("getdate()");

            builder.Entity<Usuario>()
                 .HasKey(u => u.CdUsuario);

            builder.Entity<Usuario>()
                .Property(u => u.CdUsuario).ValueGeneratedOnAdd();

            builder.Entity<UsuarioPlanoEnsino>()
            .HasKey(p => p.CdUsuarioPlanoEnsino);

            builder.Entity<UsuarioPlanoEnsino>()
            .Property(p => p.CdUsuarioPlanoEnsino).ValueGeneratedOnAdd();

            builder.Entity<UsuarioPlanoEnsino>()
                .HasKey(x => new { x.CdUsuario, x.CdDisciplina });
        }
    }
}