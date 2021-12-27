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
    public class SugestaoPlanoEnsinoController : ControllerBase
    {
        private readonly IRepository repository;

        public SugestaoPlanoEnsinoController(IRepository repository)
        {
            this.repository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> ListarSugestaoPlanosEnsino()
        {
            var result = await this.repository.GetAllSugestaoPlanoEnsinoAsync();
            return Ok(result);
        }

        [HttpGet, Route("{cdSugestao}")]
        public async Task<IActionResult> GetDsPlano(int cdSugestao)
        {
            try
            {
                var dsPlano = await this.repository.GetSugestaoPlanoEnsinoByIdAsync(cdSugestao);
                var listaPlano = new List<string>();
                var contador = dsPlano.Length;

                for (int i = 0; i < contador; i++)
                {
                    PlanoEnsino plano = await this.repository.GetPlanoEnsinoByIdAsync(dsPlano[i].CdDisciplina);
                    listaPlano.Add(plano.DsDisciplina);
                }

                if (listaPlano != null)
                {
                    return Ok(listaPlano);
                }
                else
                {
                    return BadRequest("Erro ao listar planos de ensino.");
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro:{ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> CriarSugestaoPlanoEnsino([FromBody] SugestaoPlanoEnsino sugestaoPlanoEnsinoModel)
        {
            try
            {
                repository.Add(sugestaoPlanoEnsinoModel);

                if (await repository.SaveChangesAsync())
                {
                    return Ok(sugestaoPlanoEnsinoModel);
                }
                else
                {
                    return BadRequest("Erro ao salvar Sugestão de Plano de Ensino.");
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro:{ex.Message}");
            }
        }

        [HttpPut]
        public async Task<IActionResult> EditarSugestao([FromBody] SugestaoPlanoEnsino sugestaoPlanoEnsinoModel)
        {
            try
            {
                repository.Update(sugestaoPlanoEnsinoModel);

                if (await repository.SaveChangesAsync())
                {
                    return Ok("Sugestão atualizada com sucesso.");
                }
                else
                {
                    return NotFound("Sugestão não encontrada.");

                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro:{ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> ApagarSugestão(int id)
        {
            try
            {
                SugestaoPlanoEnsino sugestaoObj = new SugestaoPlanoEnsino() { CdSugestaoPlanoEnsino = id };

                repository.Delete(sugestaoObj);

                if (await repository.SaveChangesAsync())
                {
                    return Ok(id);
                }
                else
                {
                    return BadRequest("Erro ao apagar sugestão.");
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro:{ex.Message}");
            }
        }
    }
}
