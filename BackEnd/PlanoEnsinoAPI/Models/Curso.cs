using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlanoEnsinoAPI.Models
{
    public class Curso
    {
        public int CdCurso { get; set; }
        public string DsCurso { get; set; }
        public string TpGraduacao { get; set; }

        public ICollection<CursoPlanoEnsino> cursoPlanoEnsinos { get; set; }

        public Curso() { }      //construtor vazio para não bugar e precisar do NEWTONSOFT

        public Curso(int cdCurso, string dsCurso, string tpGraduacao)
        {
            CdCurso = cdCurso;
            DsCurso = dsCurso;
            TpGraduacao = tpGraduacao;
        }
    }
}