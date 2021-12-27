using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlanoEnsinoAPI.Models
{
    public class LivroAutor
    {
        public int CdLivroAutor { get; set; }
        public int CdLivro { get; set; }
        public Livro Livro { get; set; }

        public int CdAutor { get; set; }
        public Autor Autor { get; set; }

        public LivroAutor() { }                //construtor vazio para não bugar e precisar do NEWTONSOFT

        public LivroAutor(int LivroAutor, int Livro, int Autor)
        {
            CdLivroAutor = LivroAutor;
            CdLivro = Livro;
            CdAutor = Autor;
        }
    }
}