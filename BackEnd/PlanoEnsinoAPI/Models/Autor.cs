using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlanoEnsinoAPI.Models
{
    public class Autor
    {
        public int CdAutor { get; set; }
        public string Nome { get; set; }
      
        public ICollection<LivroAutor> AutoresLivros { get; set; }

        public Autor() { }     //construtor vazio para não bugar e precisar do NEWTONSOFT

        public Autor(int cdAutor, string nome)
        {
            CdAutor = cdAutor;
            Nome = nome;
        }
    }
}