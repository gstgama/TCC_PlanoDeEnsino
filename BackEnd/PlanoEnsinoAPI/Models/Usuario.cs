using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlanoEnsinoAPI.Models
{
    public class Usuario
    {
        public int CdUsuario { get; set; }
        public string Nome { get; set; }
        public string Login { get; set; } //Email
        public string Senha { get; set; }
        public string TpUsuario { get; set; } //tipo de prof se é ADM, NDE ou comum
        public string Status { get; set; }

        public ICollection<UsuarioPlanoEnsino> UsuarioPlanoEnsinos { get; set; }

        public Usuario() { }                //construtor vazio para não bugar e precisar do NEWTONSOFT

        public Usuario(int cdUsuario, string nome, string login, string senha, string tpUsuario, string status)
        {
            CdUsuario = cdUsuario;
            Nome = nome;
            Login = login;
            Senha = senha;
            TpUsuario = tpUsuario;
            Status = status;
        }
    }
}