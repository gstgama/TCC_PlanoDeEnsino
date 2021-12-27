using Microsoft.AspNetCore.Mvc;
using PlanoEnsinoAPI.Data;
using PlanoEnsinoAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlanoEnsinoAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsuarioPlanoEnsinoController : ControllerBase
    {
        private readonly IRepository repository;
        public UsuarioPlanoEnsinoController(IRepository repository)
        {
            this.repository = repository;
        }

        [HttpGet, Route("{cdDisciplina}")]
        public async Task<IActionResult> GetNomeUsuario(int cdDisciplina)
        {
            try
            {
                var cdUsuario = await this.repository.GetAllUsuarioPlanoEnsino(cdDisciplina);
                var listaUsuarioPlanoEnsino = new List<string>();
                var contador = cdUsuario.Length;

                for (int i = 0; i < contador; i++)
                {
                    Usuario usuarioModel = await this.repository.GetUsuarioByIdAsync(cdUsuario[i].CdUsuario);
                    listaUsuarioPlanoEnsino.Add(usuarioModel.Nome);
                }

                if (listaUsuarioPlanoEnsino != null)
                {
                    return Ok(listaUsuarioPlanoEnsino);
                }
                else
                {
                    return BadRequest("Erro ao listar usuário.");
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro:{ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> SalvarUsuarioPlano([FromBody] UsuarioPlanoEnsino usuarioPlanoEnsinoModel)
        {
            try
            {
                repository.Add(usuarioPlanoEnsinoModel);

                if (await repository.SaveChangesAsync())
                {
                    return Ok(usuarioPlanoEnsinoModel);
                }
                else
                {
                    return BadRequest("Erro ao linkar professor e plano.");
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro:{ex.Message}");
            }
        }

        [HttpDelete, Route("{cdUsuario}/{cdDisciplina}")]
        public async Task<IActionResult> ApagarUsuarioPlano(int cdUsuario, int cdDisciplina)
        {
            try
            {
                var resulta = await this.repository.GetUsuarioPlanoEnsinoById(cdUsuario, cdDisciplina);

                if (resulta != null)
                {
                    repository.Delete(resulta);
                    await repository.SaveChangesAsync();
                    return Ok("O professor e plano de ensino foram desconectados com sucesso!");
                }
                else
                {
                    return BadRequest("Erro ao desconectar professor e plano de ensino.");
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro:{ex.Message}");
            }
        }
    }
}
