using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlanoEnsinoAPI.Models
{
    public class LivroPlanoEnsino
    {
        public int CdLivroPlanoEnsino { get; set; }
        public int CdLivro { get; set; }
        public Livro Livro { get; set; }
        public int CdDisciplina { get; set; }
        public PlanoEnsino PlanoEnsino { get; set; }
        public string TpBibliografia { get; set; }

        public LivroPlanoEnsino() { }                //construtor vazio para não bugar e precisar do NEWTONSOFT

        public LivroPlanoEnsino(int LivroPlanoEnsino, int Livro, int Disciplina)
        {
            CdLivroPlanoEnsino = LivroPlanoEnsino;
            CdLivro = Livro;
            CdDisciplina = Disciplina;
        }
    }
}
