using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlanoEnsinoAPI.Models
{
    public class PlanoEnsino
    {
        public int CdDisciplina { get; set; }       //PK de plano de ensino
        public string DsDisciplina { get; set; }
        public int NrCreditos { get; set; }
        public int NrHorasSala { get; set; }        //horas da aula dentro da sala de aula
        public int NrHorasPP { get; set; }
        public string AnoSemestre { get; set; }     //formato ano e semestre 202102
        public string DsEmenta { get; set; }        //tipo de prof se é ADM, NDE ou comum
        public string DsObjetivo { get; set; }
        public string DsMTDGeral { get; set; }      //metodologia geral
        public string DsObservacao { get; set; }
        public string NomeA1 { get; set; }
        public string PesoA1 { get; set; }
        public string DsAlunoA1 { get; set; }
        public string DsConsultaA1 { get; set; }
        public string DsAvaliacaoA1 { get; set; }
        public string DsConteudoA1 { get; set; }
        public string DsObservacaoA1 { get; set; }
        public string NomeA2 { get; set; }
        public string PesoA2 { get; set; }
        public string DsAlunoA2 { get; set; }
        public string DsConsultaA2 { get; set; }
        public string DsAvaliacaoA2 { get; set; }
        public string DsConteudoA2 { get; set; }
        public string DsObservacaoA2 { get; set; }
        public string NomeA3 { get; set; }
        public string PesoA3 { get; set; }
        public string DsAlunoA3 { get; set; }
        public string DsConsultaA3 { get; set; }
        public string DsAvaliacaoA3 { get; set; }
        public string DsConteudoA3 { get; set; }
        public string DsObservacaoA3 { get; set; }
        public string NomeA4 { get; set; }
        public string PesoA4 { get; set; }
        public string DsAlunoA4 { get; set; }
        public string DsConsultaA4 { get; set; }
        public string DsAvaliacaoA4 { get; set; }
        public string DsConteudoA4 { get; set; }
        public string DsObservacaoA4 { get; set; }
        public string DsSemana1 { get; set; }
        public string DsSemana2 { get; set; }
        public string DsSemana3 { get; set; }
        public string DsSemana4 { get; set; }
        public string DsSemana5 { get; set; }
        public string DsSemana6 { get; set; }
        public string DsSemana7 { get; set; }
        public string DsSemana8 { get; set; }
        public string DsSemana9 { get; set; }
        public string DsSemana10 { get; set; }
        public string DsSemana11 { get; set; }
        public string DsSemana12 { get; set; }
        public string DsSemana13 { get; set; }
        public string DsSemana14 { get; set; }
        public string DsSemana15 { get; set; }
        public string DsSemana16 { get; set; }
        public string DsSemana17 { get; set; }
        public string DsSemana18 { get; set; }
        public string DsSemana19 { get; set; }
        public string DsSemana20 { get; set; }
        public string Status { get; set; }
        public DateTime DtAtualização { get; set; }
        public ICollection<CursoPlanoEnsino> CursoPlanoEnsinos { get; set; }
        public ICollection<UsuarioPlanoEnsino> UsuarioPlanoEnsinos { get; set; }
        public ICollection<LivroPlanoEnsino> LivroPlanos { get; set; }
        public ICollection<SugestaoPlanoEnsino> SugestaoPlanos { get; set; }


    public PlanoEnsino() { }    //construtor vazio para não bugar e precisar do NEWTONSOFT

        public PlanoEnsino(int cdDisciplina, 
                        string dsDisciplina, 
                           int nrCreditos, 
                           int nrHorasSala, 
                           int nrHorasPP, 
                        string anoSemestre, 
                        string dsEmenta, 
                        string dsObjetivo, 
                        string dsMTDGeral, 
                        string dsObservacao,
                        string nomeA1,
                        string pesoA1,
                        string dsAlunoA1,
                        string dsConsultaA1,
                        string dsAvaliacaoA1,
                        string dsConteudoA1,
                        string dsObservacaoA1,
                        string nomeA2,
                        string pesoA2,
                        string dsAlunoA2,
                        string dsConsultaA2,
                        string dsAvaliacaoA2,
                        string dsConteudoA2,
                        string dsObservacaoA2,
                        string nomeA3,
                        string pesoA3,
                        string dsAlunoA3,
                        string dsConsultaA3,
                        string dsAvaliacaoA3,
                        string dsConteudoA3,
                        string dsObservacaoA3,
                        string nomeA4,
                        string pesoA4,
                        string dsAlunoA4,
                        string dsConsultaA4,
                        string dsAvaliacaoA4,
                        string dsConteudoA4,
                        string dsObservacaoA4,
                        string dsSemana1, 
                        string dsSemana2, 
                        string dsSemana3, 
                        string dsSemana4, 
                        string dsSemana5, 
                        string dsSemana6, 
                        string dsSemana7, 
                        string dsSemana8,
                        string dsSemana9, 
                        string dsSemana10, 
                        string dsSemana11, 
                        string dsSemana12, 
                        string dsSemana13, 
                        string dsSemana14, 
                        string dsSemana15, 
                        string dsSemana16, 
                        string dsSemana17, 
                        string dsSemana18, 
                        string dsSemana19, 
                        string dsSemana20, 
                        string status, 
                        DateTime dtAtualização)
        {
            CdDisciplina = cdDisciplina;
            DsDisciplina = dsDisciplina;
            NrCreditos = nrCreditos;
            NrHorasSala = nrHorasSala;
            NrHorasPP = nrHorasPP;
            AnoSemestre = anoSemestre;
            DsEmenta = dsEmenta;
            DsObjetivo = dsObjetivo;
            DsMTDGeral = dsMTDGeral;
            DsObservacao = dsObservacao;
            NomeA1 = nomeA1;
            PesoA1 = pesoA1;
            DsAlunoA1 = dsAlunoA1;
            DsConsultaA1 = dsConsultaA1;
            DsAvaliacaoA1 = dsAvaliacaoA1;
            DsConteudoA1 = dsConteudoA1;
            DsObservacaoA1 = dsObservacaoA1;
            NomeA2 = nomeA2;
            PesoA2 = pesoA2;
            DsAlunoA2 = dsAlunoA2;
            DsConsultaA2 = dsConsultaA2;
            DsAvaliacaoA2 = dsAvaliacaoA2;
            DsConteudoA2 = dsConteudoA2;
            DsObservacaoA2 = dsObservacaoA2;
            NomeA3 = nomeA3;
            PesoA3 = pesoA3;
            DsAlunoA3 = dsAlunoA3;
            DsConsultaA3 = dsConsultaA3;
            DsAvaliacaoA3 = dsAvaliacaoA3;
            DsConteudoA3 = dsConteudoA3;
            DsObservacaoA3 = dsObservacaoA3;
            NomeA4 = nomeA4;
            PesoA4 = pesoA4;
            DsAlunoA4 = dsAlunoA4;
            DsConsultaA4 = dsConsultaA4;
            DsAvaliacaoA4 = dsAvaliacaoA4;
            DsConteudoA4 = dsConteudoA4;
            DsObservacaoA4 = dsObservacaoA4;
            DsSemana1 = dsSemana1;
            DsSemana2 = dsSemana2;
            DsSemana3 = dsSemana3;
            DsSemana4 = dsSemana4;
            DsSemana5 = dsSemana5;
            DsSemana6 = dsSemana6;
            DsSemana7 = dsSemana7;
            DsSemana8 = dsSemana8;
            DsSemana9 = dsSemana9;
            DsSemana10 = dsSemana10;
            DsSemana11 = dsSemana11;
            DsSemana12 = dsSemana12;
            DsSemana13 = dsSemana13;
            DsSemana14 = dsSemana14;
            DsSemana15 = dsSemana15;
            DsSemana16 = dsSemana16;
            DsSemana17 = dsSemana17;
            DsSemana18 = dsSemana18;
            DsSemana19 = dsSemana19;
            DsSemana20 = dsSemana20;
            Status = status;
            DtAtualização = dtAtualização;
        }
    }
}