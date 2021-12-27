using Microsoft.EntityFrameworkCore.Metadata;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PlanoEnsinoAPI.Models
{
    public class SugestaoPlanoEnsino
    {
        public int CdSugestaoPlanoEnsino { get; set; }
        public int CdDisciplina { get; set; }
        public string DsSugestaoPlanoEnsino { get; set; }
        public string DsInclusaoBasica { get; set; }
        public string DsExclusaoBasica { get; set; }
        public string DsInclusaoComplementar { get; set; }
        public string DsExclusaoComplementar { get; set; }
        public DateTime DtCadastroSugestao { get; set; }
        public PlanoEnsino PlanoEnsino { get; set; }

        public SugestaoPlanoEnsino() { }    //construtor vazio para não bugar e precisar do NEWTONSOFT

        public SugestaoPlanoEnsino(int cdSugestaoPlanoEnsino, 
                                   int cdDisciplina,
                                string dsSugestaoPlanoEnsino,
                                string dsInclusaoBasica,
                                string dsExclusaoBasica,
                                string dsInclusaoComplementar,
                                string dsExclusaoComplementar,
                              DateTime dtCadastroSugestao)
        {
            CdSugestaoPlanoEnsino = cdSugestaoPlanoEnsino;
            CdDisciplina = cdDisciplina;
            DsSugestaoPlanoEnsino = dsSugestaoPlanoEnsino;
            DsInclusaoBasica = dsInclusaoBasica;
            DsExclusaoBasica = dsExclusaoBasica;
            DsInclusaoComplementar = dsInclusaoComplementar;
            DsExclusaoComplementar = dsExclusaoComplementar;
            DtCadastroSugestao = dtCadastroSugestao;
        }
    }
}