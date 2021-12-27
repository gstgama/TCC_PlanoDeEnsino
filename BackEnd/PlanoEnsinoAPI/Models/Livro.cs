using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PlanoEnsinoAPI.Models
{
    public class Livro
    {
        public int CdLivro { get; set; }
        public string DsLivro { get; set; }
        public string Editora { get; set; }
        public int Ano { get; set; }
        public ICollection<LivroAutor> LivroAutores { get; set; }
        public ICollection<LivroPlanoEnsino> LivroPlanos { get; set; }

        public Livro() { }      //construtor vazio para não bugar e precisar do NEWTONSOFT

        public Livro(int cdLivro, string dsLivro, string editora, int ano)
        {
            CdLivro = cdLivro;
            DsLivro = dsLivro;
            Editora = editora;
            Ano = ano;
        }
    }
}